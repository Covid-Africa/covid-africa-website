<script>
  import { Line } from 'vue-chartjs'
  export default {
    extends: Line,
    props: {
      chartData: {
        type: Array | Object,
        required: false
      },
      chartLabels: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        options: {
          scales: {
            yAxes: [{
              ticks: {
                maxTicksLimit: 15,
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              },
            }]
          },

          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart({
        labels: this.chartLabels,
        datasets: [
          {
            label: 'Total cases',
            borderColor: '#249EBF',
            borderWidth: 2,
            backgroundColor: 'transparent',
            data: this.chartData.total_cases
          },
          {
              label: 'Total deaths',
              borderColor: 'red',
              borderWidth: 2,
              backgroundColor : 'transparent',
              data: this.chartData.total_deaths
          }
        ]
      }, this.options)
    }
  }
</script>