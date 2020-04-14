<template>
  <div>
    <p>{{ info }}</p>
  </div>
</template>

<script>
import axios from "axios";
import API_URL from "~/store/api.js";

export default {
  data() {
    return {
      info: []
    };
  },

  created() {
    axios
      .get(`http://127.0.0.1:8000/api/countries`)
      .then(response => {
        this.info = response.data;
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style lang="css"></style>
