<template>
  <div class="container auto-margin">
    <div
      class="title is-4 has-text-grey-darker has-text"
    >Latest updates {{ timeConvert(updateDate) }} ago ...</div>
    <div class="columns" v-if="loaded && loadedTwo">
      <div class="column has-text-centered">
        <div class="content">
          <h3 class="title is-3 has-text-grey-light">Cases confirmed</h3>
          <h2 class="title is-2">{{ caseNumber }}</h2>

          <h3 class="title is-3 has-text-grey-light">Countries</h3>

          <h2 class="title is-2">{{ countryLen }} / 55</h2>
        </div>
      </div>
      <div class="column has-text-centered">
        <div class="content">
          <h3 class="title is-3 has-text-grey-light">Case recovered</h3>
          <h2 class="title is-2 has-text-success">{{ recoveredRate }}</h2>

          <h3 class="title is-3 has-text-grey-light">Recovery rate</h3>

          <h2
            class="title is-2 has-text-success"
          >{{ ((recoveredRate / data.total_cases) * 100).toFixed(2) }} %</h2>
        </div>
      </div>
      <div class="column has-text-centered">
        <div class="content">
          <h3 class="title is-3 has-text-grey-light">Deaths confirmed</h3>
          <h2 class="title is-2 has-text-danger">{{ data.total_deaths }}</h2>

          <h3 class="title is-3 has-text-grey-light">Death rate</h3>

          <h2 class="title is-2 has-text-danger">{{ deathRate }} %</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: [],
      deathRate: 0,
      countryLen: 0,
      recoveredRate: 0,
      updateDate: null,
      loaded: false,
      loadedTwo: false,
      caseNumber: null
    };
  },
  methods: {
    timeConvert(n) {
      var num = n;
      var hours = num / 60;
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);
      return rminutes + " minute(s)";
    }
  },
  created() {
    axios
      .get(`https://covidafrica-api.herokuapp.com/api/africa`)
      .then(response => {
        const dataTemp = response.data;

        this.data = dataTemp[dataTemp.length - 1];
        this.deathRate = (this.data.total_deaths / this.data.total_cases) * 100;
        this.deathRate = this.deathRate.toFixed(2);

        const dateFromAPI = dataTemp[1].updated_at;

        const now = new Date();
        const datefromAPITimeStamp = new Date(dateFromAPI).getTime();
        const nowTimeStamp = now.getTime();

        const microSecondsDiff = Math.abs(datefromAPITimeStamp - nowTimeStamp);
        // Number of milliseconds per day =
        //   24 hrs/day * 60 minutes/hour * 60 seconds/minute * 1000 msecs/second
        this.updateDate = Math.floor(microSecondsDiff / 60 / 60 / 24);
        //console.log(this.updateDate)

        this.loaded = true;
      });

    axios
      .get(`https://covidafrica-api.herokuapp.com/api/africa/countries`)
      .then(response => {
        this.countryLen = response.data.length;
        var sum = 0;
        var sum2 = 0;
        for (let index = 0; index < response.data.length; index++) {
          sum += response.data[index].case_recovered;
          sum2 += response.data[index].case_number;
        }
        this.recoveredRate = sum;
        this.caseNumber = sum2;
        this.loadedTwo = true;
      });
  }
};
</script>

<style lang="css"></style>
