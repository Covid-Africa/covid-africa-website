<script>
import { Doughnut } from "vue-chartjs";
export default {
  extends: Doughnut,
  props: {
    chartData: {
      type: Array | Object,
      required: false
    },
    chartLabels: {
      type: Array,
      required: false
    },
    ChartColors: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      options: {
        legend: {
          display: false
        }
      }
    };
  },

  mounted() {
    this.renderChart(
      {
        labels: this.chartLabels,
        datasets: [
          {
            backgroundColor: this.ChartColors,
            data: this.chartData
          }
        ]
      },
      { legend: { display: false } }
    );
  }
};
</script>
