export default class RateButton {
  constructor() {
    this.$rateButton = $('.js-rate-button');
    this.currentIndexes = [];
    this.rateInputs = [];
    this.rateButtonsArr = [];
  }

  init() {
    this.setRateButtonElements();

    this.rateButtonsArr.forEach((stars, btnInd) => {
      stars.each((starInd) => {
        const $star = $(stars[starInd]);

        $star.on('click', () => this.handleStarClick(stars, starInd, btnInd));
        $star.on('mouseover', () => this.handleStarMouseover(stars, starInd));
        $star.on('mouseout', () => this.handleStarMouseout(stars, btnInd));
      });
    })
  }

  handleStarClick(starsArr, starInd, btnInd) {
    this.currentIndexes[btnInd] = starInd;
    this.rateInputs[btnInd].val(this.getRate(starInd));

    this.clearStars(starsArr);
    this.fillStars(starInd, starsArr);
  };

  handleStarMouseover(stars, starInd) {
    this.clearStars(stars);
    this.fillStars(starInd, stars);
  };

  handleStarMouseout(stars, btnInd) {
    if (this.currentIndexes[btnInd] === undefined) {
      return this.clearStars(stars);
    }

    if (this.currentIndexes[btnInd] !== 0) {
      for (let i = 0; i < this.currentIndexes[btnInd]; i += 1) {
        $(stars[i]).html('star_border');
      }
    }

    this.fillStars(this.currentIndexes[btnInd], stars);
  }

  setRateButtonElements() {
    this.$rateButton.each((i) => {
      const $rateStars = $(this.$rateButton[i]).find('.js-rate-button__active-star');
      const $rateInput = $(this.$rateButton[i]).find('.js-rate-button__input');
      
      this.rateButtonsArr.push($rateStars);
      this.rateInputs.push($rateInput);
    });
  }

  clearStars(starsArr) {
    starsArr.each((starInd) => $(starsArr[starInd]).html('star_border'));
  }

  fillStars(startStarIndex, starsArr) {
    for (let i = startStarIndex; i < starsArr.length; i += 1) {
      $(starsArr[i]).html('star');
    }
  }

  getRate(rate) {
    return 5 - rate;
  }
}
