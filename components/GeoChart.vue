<template>
  <div class="fancy_card">
    <div id="tree">
      <GChart
        :settings="{
          packages: ['geochart'],
          callback: () => {
            this.drawChart();
          }
        }"
        type="GeoChart"
        :data="chartData"
      />
    </div>
    <div class="content has-text-link">
      <a class="title is-5 has-text-link" href="#">Map View</a>
    </div>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import axios from "axios";
import {API_URL} from "../utils/api";

export default {
  components: {
    GChart
  },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: null,
      data: [],
      loaded: false
    };
  },
  methods: {
    drawChart() {
      this.chartData = new google.visualization.DataTable();

      this.chartData.addColumn("string", "Name");
      this.chartData.addColumn("number", "Numbers");
      //this.chartData.addColumn("string", "ToolTip");

      this.chartData.addRows(this.data);
      // For each orgchart box, provide the name, manager, and tooltip to show.
      let options = {
        region: "002", // Africa
        colorAxis: { colors: ["#FFA07A", "#FA8072", "#DC143C"] },
        backgroundColor: "transparent",
        datalessRegionColor: "white",
        defaultColor: "#7957d5"
      };

      // Create the chart.
      let chart = new google.visualization.GeoChart(
        document.getElementById("tree")
      );
      // Draw the chart, setting the allowHtml option to true for the tooltips.
      chart.draw(this.chartData, options);
    }
  },

  created() {
    axios
      .get(`${API_URL}/africa/countries`)
      .then(response => {
        let dataCollection = response.data;
        for (let index = 0; index < dataCollection.length; index++) {
          const element = dataCollection[index];

          this.data.push([element.name, element.case_number]);
        }
        //console.log(JSON.parse(JSON.stringify(this.data)));
      });
  }
};
</script>
