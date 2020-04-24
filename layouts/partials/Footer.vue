<template name="Footer">
  <footer class="footer">
    <div class="columns">
      <div class="column has-element-at-center">
        <figure class="image is-64x64">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
          <hr class="rounded" />
        </figure>
      </div>
      <div class="column">
        <div class="content has-text-centered-mobile">
          <h4 class="title is-4">Data Sources</h4>
          <p>
            DXY, COVID19Japan, ECDC, JHU, WHO, CDC, Wikipedia, USAFacts, NYT,
            Cov19Br, RIVM, covid.is, FHI, covid19za, Santé Publique France, RKI
            Germany, Public Health England
          </p>
          <nuxt-link class="button is-link" to="/api">Get the data</nuxt-link>
        </div>
      </div>
      <div class="column">
        <div class="title is-4 has-text-centered-mobile">Contact-us!</div>
        <div class="has-item-centered">
          <a href class="button is-link is-outlined">Contact us!</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="css">
.footer {
  border-radius: 18px;
}
</style>
