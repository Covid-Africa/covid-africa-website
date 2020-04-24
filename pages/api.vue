<template>
  <div>
    <div class="columns auto-margin">
      <div class="column is-1"></div>
      <div class="column hero is-white is-fullheight">
        <div class>
          <h2
            class="title is-4 has-text-centered has-text-grey-darker is-uppercase"
          >The COVID Tracking project for Africa</h2>
          <div class="content has-text-centered">
            Covid-Africa collects data from many sources such as WHO
            organisation,
            <a
              href="https://covid.ourworldindata.org"
            >OurWorldInData</a>
            , Wikipedia and social media. We use these data to deliver specific
            data informaition about COVID-19 evolution in Africa.
            <br />Feel free to use the API for any purposes. Or you can download
            data as csv
            <a href="#csv">here</a>.
          </div>
          <div class="container has-text-centered">
            <div class="content columns">
              <div class="column">
                <span>
                  <h2 class="title is-4 has-text-grey-dark">GET Country</h2>
                </span>
                <br />
                <code>http://covidafrica-api.herokuapp.com/api/africa/country</code>
              </div>
              <div class="column">
                <div class="card fancy_card has-background-grey-lighter content is-small">
                  <div class="card-header">
                    <p class="card-header-title">Country current</p>
                  </div>
                  <div class="card-content">
                    curl --request GET
                    <code>'https://covidafrica-api.herokuapp.com/api/africa/Benin'</code>
                  </div>
                </div>
              </div>
            </div>
            <div class="content columns">
              <div class="column">
                <span>
                  <h2 class="title is-4 has-text-grey-dark">GET countries</h2>
                </span>
                <code>http://covidafrica-api.herokuapp.com/api/africa/countries</code>
              </div>
              <div class="column">
                <div class="card fancy_card has-background-grey-lighter content is-small">
                  <div class="card-header">
                    <p class="card-header-title">Countries</p>
                  </div>
                  <div class="card-content">
                    curl --request GET
                    <code>'https://covidafrica-api.herokuapp.com/api/africa/countries'</code>
                  </div>
                </div>
              </div>
            </div>
            <div class="content columns">
              <div class="column">
                <span>
                  <h2 class="title is-4 has-text-grey-dark">GET historical Africa</h2>
                </span>
                <code>http://covidafrica-api.herokuapp.com/api/africa/</code>
              </div>
              <div class="column">
                <div class="card fancy_card has-background-grey-lighter content is-small">
                  <div class="card-header">
                    <p class="card-header-title">Historical Africa</p>
                  </div>
                  <div class="card-content">
                    curl --request GET
                    <code>'https://covidafrica-api.herokuapp.com/api/africa/'</code>
                  </div>
                </div>
              </div>
            </div>
            <div class="content columns">
              <div class="column">
                <span>
                  <h2 class="title is-4 has-text-grey-dark">GET Date Africa</h2>
                </span>
                <div
                  class="content is-small"
                >Be sure the date is between 2019-12-31 and yesterday date.</div>
                <code>http://covidafrica-api.herokuapp.com/api/africa/YYYY-MM-DD</code>
              </div>
              <div class="column">
                <div class="card fancy_card has-background-grey-lighter content is-small">
                  <div class="card-header">
                    <p class="card-header-title">Date Africa</p>
                  </div>
                  <div class="card-content">
                    curl --request GET
                    <code>'https://covidafrica-api.herokuapp.com/api/africa/2020-01-30'</code>
                  </div>
                </div>
              </div>
            </div>
            <hr class="rounded" />
          </div>

          <div class="content auto-margin" id="csv">
            <h4
              class="title is-4 has-text-centered has-text-grey-darker is-uppercase"
            >Download data in csv format</h4>

            <ul>
              <li>
                <h5 class="title is-5 has-text-grey-dark">Full data</h5>
                <a href="#">full_data.csv</a>
              </li>
              <li>
                <h5 class="title is-5 has-text-grey-dark">Current Africa Data</h5>
                <a href="#">current_africa.csv</a>
              </li>
              <li>
                <h5 class="title is-5 has-text-grey-dark">Data since the Beginning of COVID-19</h5>
                <a href="#">historical_data.csv</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="column is-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  transiton: "tweakOpacity"
};
</script>

<style lang="css">
.page-enter-active {
  animation: acrossIn 0.4s ease-out both;
}
.page-leave-active {
  animation: acrossOut 0.6s ease-in both;
}
@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}

.tweakOpacity-enter-active,
.tweakOpacity-leave-active {
  transition: opacity 0.4s ease-out;
}
.tweakOpacity-enter,
.tweakOpacity-leave-active {
  opacity: 0;
}
#example {
  border-radius: 15px;
}
</style>
