<template>
  <div class="fancy_card">
    <div>
      <line-chart
        v-if="loaded"
        :chart-data="datacollection"
        :chart-labels="labels"
        class="linearchart"
      ></line-chart>

      <div class="content has-text-link">
        <a href="#">Linear View</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LineChart from "./Chart.vue";
export default {
  components: {
    LineChart
  },
  props: {},

  data() {
    return {
      datacollection: null,
      labels: [],
      dates: [],
      total_cases: [],
      total_deaths: [],
      loaded: false
    };
  },
  methods: {},

  created() {
    axios
      .get("https://covidafrica-api.herokuapp.com/api/africa")
      .then(response => {
        var datacollection = response.data;
        this.total_cases = response.data.map(
          total_case => total_case.total_cases
        );
        this.total_deaths = response.data.map(
          total_death => total_death.total_deaths
        );
        this.labels = response.data.map(date => date.date);

        this.datacollection = {
          total_cases: this.total_cases,
          total_deaths: this.total_deaths
        };
        this.loaded = true;
      });
  }
};
</script>

<style lang="css">
@media (min-width: 768px) {
  .linearchart {
    width: 522px;
    height: 345px;
  }
}
</style>
