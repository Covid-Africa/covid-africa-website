<template>
  <div class="column">
    <line-chart v-if="loaded" :chart-data="datacollection" :chart-labels="labels"></line-chart>
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
      labels:[],
      dates:[],
      total_cases:[],
      total_deaths:[],
      loaded: false,
    };
  },
  methods: {
  
  },

  created() {
    axios.get('http://covidafrica-api.herokuapp.com/api/africa').then(
      response => {
        var datacollection = response.data;
        this.total_cases = response.data.map(total_case => total_case.total_cases);
        this.total_deaths = response.data.map(total_death => total_death.total_deaths);
        this.labels = response.data.map(date => date.dates);

        this.loaded = true;

        this.datacollection = {
              total_cases : this.total_cases,
              total_deaths : this.total_deaths          
            };
      }
    )
  },
};
</script>
