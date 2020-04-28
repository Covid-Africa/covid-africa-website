<template name="Footer">
  <footer class="footer">
    <div class="columns">
      <div class="column has-text-centered">
        <span>
          <h3 class="title is-3 has-text-link">COVID AFRICA</h3>
          <hr class="rounded" />
        </span>
      </div>
      <div class="column">
        <div class="content has-text-centered-mobile">
          <h4 class="title is-4">Data Sources</h4>
          <p>
            ECDC, Wikipedia,
            covid.is, covid19za, WHO, OurWorldInData and Social Media.
          </p>
          <nuxt-link class="button is-link" to="/api">Get the data</nuxt-link>
        </div>
      </div>
      <div class="column">
        <div class="title is-4 has-text-centered-mobile">Contact-us!</div>
        <div class="has-text-centered-mobile">
          <nuxt-link to="/contact" class="button is-link">Get in touch</nuxt-link>
        </div>
      </div>
    </div>
    <!--
    <div
      class="content has-text-centered"
    >This COVID-Africa project is developped and maintained by awesome open source enthusiasts people.</div>-->
  </footer>
</template>

<style lang="css">
.footer {
  border-radius: 18px;
}
</style>
