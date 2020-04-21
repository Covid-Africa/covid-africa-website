<template>
  <div class="column">
    <div id="linechart" style="width: 900px; height: 500px;"></div>
  </div>
</template>

<script>
import "@google-web-components/google-chart";
import axios from "axios";
export default {
  data() {
    return {
      responseData: []
    };
  },

  methods: {
    drawLines() {
      var data = new google.visualization.DataTable();

      data.addColumn("string", "Date");
      data.addColumn("number", "Nombres");

      this.responseData.forEach(function(json) {
        data.addRow([json[0], json[1]]);
      });

      var options = {
        title: "Graphiques"
      };

      var chart = new google.visualization.LineChart(
        document.getElementById(`linechart`)
      );
      chart.draw(data, options);
    }
  },

  created() {
    axios.get(`http://localhost:8000/api/africa`).then(response => {
      this.responseData = response.data;
    });
  }
};
</script>

<style lang="css"></style>
