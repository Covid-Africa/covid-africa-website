<template>
  <div class="container">
    <div class="columns">
      <div class="column has-text-centered">
        <div class="content">
          <h3 class="title is-3 has-text-grey-light">Cas confirmés</h3>
          <h2 class="title is-2">{{ data.total_cases }}</h2>

          <h3 class="title is-3 has-text-grey-light">Pays touchés</h3>

          <h2 class="title is-2">{{ country_len - 2 }}</h2>
        </div>
      </div>
      <div class="column has-text-centered">
        <div class="content">
          <h3 class="title is-3 has-text-grey-light">Personnes guéries</h3>
          <h2 class="title is-2 has-text-success">{{ recovered_rate }}</h2>

          <h3 class="title is-3 has-text-grey-light">Taux de guérison</h3>

          <h2
            class="title is-2 has-text-success"
          >{{ ((recovered_rate / data.total_cases) * 100).toFixed(2) }}</h2>
        </div>
      </div>
      <div class="column has-text-centered">
        <div class="content">
          <h3 class="title is-3 has-text-grey-light">Nombre de décès</h3>
          <h2 class="title is-2 has-text-danger">{{ data.total_deaths }}</h2>

          <h3 class="title is-3 has-text-grey-light">Taux de décès</h3>

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
      recovered_rate: 0
    };
  },

  created() {
    axios.get(`https://covidafrica-api.herokuapp.com/api/africa`).then(response => {
      var data_temp = response.data;

      this.data = data_temp[data_temp.length - 1];
      this.death_rate = (this.data.total_deaths / this.data.total_cases) * 100;
      this.death_rate = this.death_rate.toFixed(2);
    });

    axios.get(`https://covidafrica-api.herokuapp.com/api/africa/countries`).then(response => {
      this.country_len = response.data.length;
      var sum = 0;

      for (let index = 0; index < response.data.length; index++) {
        sum += response.data[index].case_recovered;
      }
      this.recovered_rate = sum;
    });
  }
};
</script>

<style lang="css"></style>
