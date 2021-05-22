if (document.getElementById('rating-chart')) {
  const bar_ctx = document.getElementById('rating-chart').getContext('2d');

  const firstColor = bar_ctx.createLinearGradient(0, 0, 0, 120);
  const secondColor = bar_ctx.createLinearGradient(0, 0, 0, 120);
  const thirdColor = bar_ctx.createLinearGradient(0, 0, 0, 120);
  const fourthColor = bar_ctx.createLinearGradient(0, 0, 0, 120);
  
  firstColor.addColorStop(0, '#909090');
  firstColor.addColorStop(1, '#3D4975');
  
  secondColor.addColorStop(0, '#BC9CFF');
  secondColor.addColorStop(1, '#8BA4F9');
  
  thirdColor.addColorStop(0, '#6FCF97');
  thirdColor.addColorStop(1, '#66D2EA');
  
  fourthColor.addColorStop(0, '#FFE39C');
  fourthColor.addColorStop(1, '#FFBA9C');
  
  var bar_chart = new Chart(bar_ctx, {
    type: 'doughnut',
      data: {
        labels: ["Удовлетварительно", "Хорошо", 'Великолепно'],
        datasets: [{
          label: '# of Votes',
          data: [25, 25, 50],
          borderWidth: 2,
          width: 4,
          backgroundColor: [secondColor, thirdColor, fourthColor],
          hoverBackgroundColor: [secondColor, thirdColor, fourthColor],
          hoverBorderWidth: 0,
          hoverBorderColor: 'transparent',
        }]
      },
    options: {
      cutoutPercentage: 90,
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
      hover: {
        mode: null,
      }
    },
  });
}
