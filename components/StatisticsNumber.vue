<template>
  <div class="container auto-margin">
    <div
      class="title is-4 has-text-grey-darker has-text"
    >Latest updates {{ timeConvert(update_date) }} ago ...</div>
    <div class="columns" v-if="loaded && loaded_two">
      <div class="column has-text-centered">
        <div class="content">
          <h3 class="title is-3 has-text-grey-light">Cases confirmed</h3>
          <h2 class="title is-2">{{ case_number }}</h2>

          <h3 class="title is-3 has-text-grey-light">Countries</h3>

          <h2 class="title is-2">{{ country_len -2 }} / 56</h2>
        </div>
      </div>
      <div class="column has-text-centered">
        <div class="content">
          <h3 class="title is-3 has-text-grey-light">Case recovered</h3>
          <h2 class="title is-2 has-text-success">{{ recovered_rate }}</h2>

          <h3 class="title is-3 has-text-grey-light">Recovery rate</h3>

          <h2
            class="title is-2 has-text-success"
          >{{ ((recovered_rate / data.total_cases) * 100).toFixed(2) }} %</h2>
        </div>
      </div>
      <div class="column has-text-centered">
        <div class="content">
          <h3 class="title is-3 has-text-grey-light">Deaths confirmed</h3>
          <h2 class="title is-2 has-text-danger">{{ data.total_deaths }}</h2>

          <h3 class="title is-3 has-text-grey-light">Death rate</h3>

          <h2 class="title is-2 has-text-danger">{{ death_rate }} %</h2>
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
      death_rate: 0,
      country_len: 0,
      recovered_rate: 0,
      update_date: null,
      loaded: false,
      loaded_two: false,
      case_number: null
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
        var data_temp = response.data;

        this.data = data_temp[data_temp.length - 1];
        this.death_rate =
          (this.data.total_deaths / this.data.total_cases) * 100;
        this.death_rate = this.death_rate.toFixed(2);

        var dateFromAPI = data_temp[1].updated_at;

        var now = new Date();
        var datefromAPITimeStamp = new Date(dateFromAPI).getTime();
        var nowTimeStamp = now.getTime();

        var microSecondsDiff = Math.abs(datefromAPITimeStamp - nowTimeStamp);
        // Number of milliseconds per day =
        //   24 hrs/day * 60 minutes/hour * 60 seconds/minute * 1000 msecs/second
        this.update_date = Math.floor(microSecondsDiff / 60 / 60 / 24);
        //console.log(this.update_date)

        this.loaded = true;
      });

    axios
      .get(`https://covidafrica-api.herokuapp.com/api/africa/countries`)
      .then(response => {
        this.country_len = response.data.length;
        var sum = 0;
        var sum2 = 0;
        for (let index = 0; index < response.data.length; index++) {
          sum += response.data[index].case_recovered;
          sum2 += response.data[index].case_number;
        }
        this.recovered_rate = sum;
        this.case_number = sum2;
        this.loaded_two = true;
      });
  }
};
</script>

<style lang="css"></style>
