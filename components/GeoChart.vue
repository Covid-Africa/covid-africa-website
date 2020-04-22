<template>
    <div class="column">
        <google-chart
    type="geo"
    region="002"
    data='[["Country", "Popularity"],
           ["Senegal", 200],
           ["Nigeria", 300],
           ["Benin", 400],
           ["Togo", 500],
           ["Mali", 600],
           ["Niger", 700]]'>
  </google-chart>
    </div>
</template>

<script>
import "@google-web-components/google-chart";
export default {
    
}
</script>

<style lang="css">
    
</style>