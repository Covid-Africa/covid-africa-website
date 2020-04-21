<template>
  <section class="section">
    <div class="container columns">
      <div class="column"></div>
      <div class="column">
        <LineChart />
      </div>
    </div>

    <div class="container">
      <StatisticsNumber />
    </div>

    <div class="container">
      <Table />
    </div>

    <div class="columns">
      <div class="column">
        <div class="card">
          <div class="card-image has-item-centered">
            <figure class="image is-128x128">
              <img src="~/assets/virus.svg" alt />
            </figure>
          </div>
          <div class="card-content">
            <div class="content has-text-centered">
              <h3 class="title is-3">A propos du COVID-19</h3>
              <p>
                COVID-19 est un membre jamais rencontré de la famille des
                coronavirus. Favorisant sa croissance sur un marché alimentaire
                de Wuhan, le virus s'est maintenant propagé à 183 pays et ce
                n'est pas fini.
              </p>
            </div>
            <div class="has-item-centered">
              <a
                href="https://www.who.int/topics/coronavirus_infections/fr/"
                class="button is-info is-outlined is-small"
                >Savoir-plus</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image has-item-centered">
            <figure class="image is-128x128">
              <img src="~/assets/coronavirus.svg" alt />
            </figure>
          </div>
          <div class="card-content">
            <div class="content has-text-centered">
              <h3 class="title is-4">Règles d'hygiène pour se protéger</h3>
              <p>
                Prenez soin de votre santé et protégez les autres en suivant les
                conseils d'hygiène.
              </p>
            </div>
            <div class="has-item-centered">
              <a
                href="https://www.who.int/fr/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
                class="button is-info is-outlined is-small"
                >Savoir-plus</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image has-item-centered">
            <figure class="image is-128x128">
              <img src="~/assets/world.svg" alt />
            </figure>
          </div>
          <div class="card-content">
            <div class="content has-text-centered">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              accusantium ducimus aspernatur blanditiis
            </div>
            <div class="has-item-centered">
              <a href class="button is-info is-outlined is-small"
                >Savoir-plus</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Card from "~/components/Card";
import Table from "~/components/Table";
import StatisticsNumber from "~/components/StatisticsNumber.vue";
import LineChart from "~/components/LineChart.vue";
export default {
  name: "HomePage",

  components: {
    Table,
    StatisticsNumber,
    LineChart
  }
};
</script>

<style lang="css">
/* Transitions using the page hook */
page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}

.page-enter,
.page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
</style>
