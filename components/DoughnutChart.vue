<template>
  <div class="container has-item-centered">
    <doughnut-chart
      class="doughnutchart"
      v-if="loaded"
      :chart-data="caseNumber"
      :chart-labels="labels"
      :chart-colors="colors"
    >
    </doughnut-chart>
  </div>
</template>

<script>
import axios from "axios";
import DoughnutChart from "./Doughnut.vue";
import {API_URL} from "../utils/api";
export default {
  components: {
    DoughnutChart
  },
  data() {
    return {
      caseNumber: null,
      labels: null,
      colors: [],
      loaded: false
    };
  },

  methods: {
    randomColor() {
      return Math.floor(Math.random() * 16777215).toString(16);
    }
  },

  created() {
    axios
      .get(`${API_URL}/africa/countries`)
      .then(response => {
        let data = response.data;
        let case_number = data.map(case_number => case_number.case_number);
        let label = data.map(label => label.name);

        this.caseNumber = case_number;
        this.labels = label;

        for (let index = 0; index < 56; index++) {
          this.colors.push("#" + this.randomColor());
        }
        //console.log(this.colors);
        this.loaded = true;
      });
  }
};
</script>

<style lang="css">
@media (min-width: 768px) {
  .doughnutchart {
    width: 522px;
    height: 500px;
  }
}

@media (max-width: 768px) {
  .doughnutchart {
    width: 250px;
    height: 250px;
  }
}
</style>
