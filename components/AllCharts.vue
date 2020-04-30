<template>
  <div>
    <b-tabs type="is-toggle-rounded" position="is-centered">
      <b-tab-item label="Table">
        <Table />
      </b-tab-item>

      <b-tab-item label="Doughnut">
        <DoughnutChart class="has-item-centered" />
      </b-tab-item>

      <b-tab-item label="Per Country" disabled>
        Nunc nec velit nec libero vestibulum eleifend. Curabitur pulvinar congue
        luctus. Nullam hendrerit iaculis augue vitae ornare. Maecenas vehicula
        pulvinar tellus, id sodales felis lobortis eget.
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import Table from "./Table";
import DoughnutChart from "./DoughnutChart.vue";
export default {
  components: {
    Table,
    DoughnutChart
  }
};
</script>
