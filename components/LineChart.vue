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
        <a class="title is-5 has-text-link" href="#">Linear View</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LineChart from "./Line.vue";
import  {API_URL} from "../utils/api";


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
      .get(`${API_URL}/africa`)
      .then(response => {
        this.total_cases = response.data.map(
          total_case => total_case.total_cases
        );
        this.total_deaths = response.data.map(
          total_death => total_death.total_deaths
        );
        this.labels = response.data.map(date => date.dates);

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
