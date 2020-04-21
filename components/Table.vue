<template>
  <div>
    <b-table
      :data="data"
      ref="multiSortTable"
      :backend-sorting="backendSortingEnabled"
      @sort="sortPressed"
      @sorting-priority-removed="sortingPriorityRemoved"
      :sort-multiple="multiColumnSortingEnabled"
      :sort-multiple-data="sortingPrioirty"
      :sort-multiple-key="customKey"
    >
      <template slot-scope="props">
        <b-table-column field="name" label="Pays" sortable searchable>{{
          props.row.name
        }}</b-table-column>
        <b-table-column field="case_number" label="Nombres de cas" sortable>{{
          props.row.case_number
        }}</b-table-column>
        <b-table-column field="case_death" label="Nombre de décès" sortable>{{
          props.row.case_death
        }}</b-table-column>
        <b-table-column
          field="case_recovered"
          label="Nombre de guéris"
          sortable
          >{{ props.row.case_recovered }}</b-table-column
        >
      </template>
    </b-table>
  </div>
</template>

<script>
import API_URL from "../store/api.js";
import orderBy from "lodash/orderBy";
import axios from "axios";

export default {
  data() {
    return {
      customKey: null,
      backendSortingEnabled: false,
      multiColumnSortingEnabled: true,
      data: [],
      sortingPrioirty: []
    };
  },
  methods: {
    total() {},

    resetPriority() {
      this.$refs.multiSortTable.resetMultiSorting();

      // reset local backend sorting
      if (this.backendSortingEnabled) {
        this.sortingPrioirty = [];
        this.loadAsyncData();
      }
    },

    // Backend sorting
    sortingPriorityRemoved(field) {
      this.sortingPrioirty = this.sortingPrioirty.filter(
        priority => priority.field !== field
      );
      this.loadAsyncData(this.sortingPrioirty);
    },

    sortPressed(field, order, event) {
      if (this.backendSortingEnabled) {
        if (this.multiColumnSortingEnabled) {
          if ((this.customKey && event[this.customKey]) || !this.customKey) {
            let existingPriority = this.sortingPrioirty.find(
              i => i.field === field
            );
            if (existingPriority) {
              existingPriority.order =
                existingPriority.order === "desc" ? "asc" : "desc";
            } else {
              // request sorted data from backend
              this.sortingPrioirty.push({ field, order });
            }
            this.loadAsyncData(this.sortingPrioirty);
          } else {
            // request regular sorted data from backend
            this.sortingPrioirty = []; // [{field, order}]
            this.loadAsyncData([{ field, order }]);
          }
        }
      }
    },

    // "API request" for data
    async loadAsyncData() {
      let mockdata = JSON.parse(JSON.stringify(data));
      // get data already sorted from the backend using sortingPriority
      this.data = orderBy(
        mockdata,
        sortingPrioirty.map(i => i.field),
        sortingPrioirty.map(i => i.order)
      );
    }
  },
  created() {
    axios.get(`http://localhost:8000/api/africa/countries`).then(response => {
      this.data = response.data;
    });

    /*axios.get(`http://localhost:8000/api/africa`).then(response => {
      this.data_new_case = response.data
    });*/
  }
};
</script>
