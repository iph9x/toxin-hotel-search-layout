const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const globImporter = require('node-sass-glob-importer');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist')
}

const PAGES_DIR = `${PATHS.src}/pages/`;
const PAGES = fs.readdirSync(PAGES_DIR)
  .filter((fileName) => !fileName.endsWith('.pug') && fileName !== 'img')
  .map((fileName) => fs.readdirSync(`${PAGES_DIR}/${fileName}/`).filter((fileName) => fileName.endsWith('.pug')));

console.log("is dev: ", isDev);

module.exports = {
  context: PATHS.src,
  mode: 'development',
  entry: {
    main: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: filename('js')
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': PATHS.src,
    }
  },  
  devServer: {
    contentBase: PATHS.src,
    watchContentBase: isDev,
    open: isDev,
    inline: isDev,
    hot: isDev,
    hotOnly: isDev,
    port: 8080,
  },    
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          {
            loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            options: isProd ? { publicPath: '../dist'} : {}
          },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              data: '@import "styles/variables/variables.scss";',
              importer: globImporter(),
            },
          }
        ]
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: {
          options: {
            publicPath: '.',
            name: 'assets/img/[name].[ext]',
          },
          loader: 'file-loader'
        },
      },
      {
        test: /\.(ttf|woff|svg|eot|woff2|otf)$/,
        use: [
          {
            options: {
              publicPath: '.',
              name: 'assets/fonts/[name].[ext]',
            },
            loader: 'file-loader'
          },
        ]
      }
    ]
  },
  plugins: [
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}${page.toString().split('.')[0]}/${page}`,
      filename: `./${page.toString().replace(/\.pug/, '.html')}`
    })),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}index.pug`,
      filename: './index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename('css')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new CopyWebpackPlugin ({
      patterns: [
        { from: 'assets/favicons/site.webmanifest', to: `${PATHS.dist}/assets/favicons/site.webmanifest` },
      ],
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}