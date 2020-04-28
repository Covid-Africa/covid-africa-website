<template>
  <b-navbar class="box-shadow" id="nav">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <h3 class="title is-3 has-text-link">COVID AFRICA</h3>
      </b-navbar-item>
    </template>
    <template slot="end" class="has-text-primary has-text-centered-mobile">
      <b-navbar-item>
        <nuxt-link to="/">HOME</nuxt-link>
      </b-navbar-item>
      <b-navbar-item>
        <nuxt-link to="/api">API</nuxt-link>
      </b-navbar-item>
      <b-navbar-item>
        <nuxt-link to="/contact">CONTACT</nuxt-link>
      </b-navbar-item>
      <b-navbar-item tag="div">
        <span class="lang-links">
          <a class="lang-link">FR</a>
          |
          <a class="lang-link" href>EN</a>
        </span>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style lang="css">
#nav {
  border-radius: 12px;
}
</style>
