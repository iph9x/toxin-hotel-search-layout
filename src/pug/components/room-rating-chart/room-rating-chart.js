export default class RoomRatingChart {
  constructor(chartClass) {
    const chart = $(`.${chartClass}`).get(0);
    this.chart_ctx = chart.getContext('2d');

    this.firstColor = this.chart_ctx.createLinearGradient(0, 0, 0, 120);
    this.secondColor = this.chart_ctx.createLinearGradient(0, 0, 0, 120);
    this.thirdColor = this.chart_ctx.createLinearGradient(0, 0, 0, 120);
    this.fourthColor = this.chart_ctx.createLinearGradient(0, 0, 0, 120);

    this.firstColor.addColorStop(0, '#909090');
    this.firstColor.addColorStop(1, '#3D4975');

    this.secondColor.addColorStop(0, '#BC9CFF');
    this.secondColor.addColorStop(1, '#8BA4F9');

    this.thirdColor.addColorStop(0, '#6FCF97');
    this.thirdColor.addColorStop(1, '#66D2EA');

    this.fourthColor.addColorStop(0, '#FFE39C');
    this.fourthColor.addColorStop(1, '#FFBA9C');
  }

  init() {
    return new Chart(this.chart_ctx, {
      type: 'doughnut',
        data: {
          labels: ["Удовлетварительно", "Хорошо", 'Великолепно'],
          datasets: [{
            label: '# of Votes',
            data: [25, 25, 50],
            borderWidth: 2,
            width: 4,
            backgroundColor: [this.secondColor, this.thirdColor, this.fourthColor],
            hoverBackgroundColor: [this.secondColor, this.thirdColor, this.fourthColor],
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
}
