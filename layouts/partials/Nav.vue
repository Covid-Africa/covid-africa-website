<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="end" class="has-text-primary">
      <b-navbar-item href="#">API</b-navbar-item>
      <b-navbar-item href="#">A propos</b-navbar-item>
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