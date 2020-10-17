<template>
  <div>
    <p>{{ info }}</p>
  </div>
</template>

<script>
import axios from "axios";
import {API_URL} from "../utils/api";

export default {
  data() {
    return {
      info: []
    };
  },

  created() {
    axios
      .get(`${API_URL}/countries`)
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
