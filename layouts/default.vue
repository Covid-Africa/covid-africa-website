<template>
  <div>
    <Nav />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Nav from "./partials/Nav.vue";
import Footer from "./partials/Footer.vue";
import AfricaChart from "~/components/AfricaChart.vue";

export default {
  components: {
    Nav,
    Footer,
    AfricaChart
  }
};
</script>

<style lang="css">
.has-element-at-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.has-item-centered {
  display: flex;
  justify-content: center;
}
</style>
