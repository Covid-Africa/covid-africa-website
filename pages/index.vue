<template>
  <section class="section">
    <div
      class="title is-4 has-text-centered has-text-grey-darker is-large is-uppercase"
    >COVID-19 CORONAVIRUS PANDEMIC</div>
    <div class="container auto-margin">
      <hr class="rounded" />

      <div class="columns">
        <div class="column">
          <GeoChart />
        </div>
        <div class="column">
          <LineChart />
        </div>
      </div>
      <hr class="rounded" />
    </div>

    <div class="container">
      <StatisticsNumber />
    </div>

    <div class="container">
      <AllCharts />
      <hr class="rounded" />
    </div>

    <div class="title is-4 has-text-centered has-text-grey-darker">WHAT TO KNOW ABOUT COVID-19?</div>

    <div class="columns auto-margin">
      <div class="column">
        <div class="card fancy_card">
          <div class="card-image has-item-centered">
            <figure class="image is-128x128">
              <img src="~/assets/img/virus.svg" alt />
            </figure>
          </div>
          <div class="card-content">
            <div class="content has-text-centered">
              <h3 class="title is-4">About COVID-19</h3>
              <p>
                COVID-19 is an unseen member of the family of coronavirus.
                Promoting its growth on a food market from Wuhan, the virus has
                now spread to 183 countries and this is not finished.
              </p>
            </div>
            <div class="has-item-centered">
              <a
                href="https://www.who.int/topics/coronavirus_infections/fr/"
                class="button is-link is-outlined"
              >Learn more</a>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card fancy_card">
          <div class="card-image has-item-centered">
            <figure class="image is-128x128">
              <img src="~/assets/img/coronavirus.svg" alt />
            </figure>
          </div>
          <div class="card-content">
            <div class="content has-text-centered">
              <h3 class="title is-4">Hygienic Rules</h3>
              <p>
                COVID-19 is not an apocalypse. It can be easily avoided. Take
                care of you and protect others by following the hygiene advices.
              </p>
            </div>
            <div class="has-item-centered">
              <a
                href="https://www.who.int/fr/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
                class="button is-link is-outlined"
              >More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card fancy_card">
          <div class="card-image has-item-centered">
            <figure class="image is-128x128">
              <img src="~/assets/img/world.svg" alt />
            </figure>
          </div>
          <div class="card-content">
            <div class="content has-text-centered">
              <h4 class="title is-4">About COVID-19</h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              accusantium ducimus aspernatur blanditiis. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Dolorem accusantium
            </div>
            <div class="has-item-centered">
              <a href class="button is-link is-outlined">More</a>
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
import GeoChart from "~/components/GeoChart.vue";
import AllCharts from "~/components/AllCharts.vue";
export default {
  name: "HomePage",

  components: {
    Table,
    StatisticsNumber,
    LineChart,
    GeoChart,
    AllCharts
  }
};
</script>

<style lang="css">
@font-face {
  font-family: Nokia Pure;
  src: url("//db.onlinewebfonts.com/c/b0040e9e6a6db92b5c252acee3891874?family=Nokia+Pure+Text");
}

body {
  font-family: Nokia Pure;
}

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

.auto-margin {
  margin-top: 20px;
}
.fancy_card {
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
  transition: all 0.5s ease; /* back to normal */
}
.fancy_card:hover {
  box-shadow: 8px 28px 50px rgba(39, 44, 49, 0.07),
    1px 6px 12px rgba(39, 44, 49, 0.04);
  transition: all 0.2s ease; /* zoom in */
  transform: translate3D(0, 10px, 0) scale(1.1);
}

.rounded {
  border-top: 3.5px solid #7957d5;
  border-radius: 5px;
}

.box-shadow {
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
}
</style>
