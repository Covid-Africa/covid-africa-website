<template>
  <div class="container">
    <div class="columns has-item-centered auto-margin">
      <div class="column is-7">
        <h4 class="title is-4 has-text-centered has-text-grey-darker is-uppercase">Get in touch</h4>
        <div
          class="content has-text-centered"
        >Please, fill this form for suggestion, question or any opinions.</div>
        <form name="contact" method="POST" data-netlify="true">
          <b-field label="Name">
            <b-input placeholder="Name" type="text" name="name" maxlength="30"></b-input>
          </b-field>
          <b-field label="Email">
            <b-input placeholder="Email" type="email" name="email" maxlength="30"></b-input>
          </b-field>

          <b-field label="Message">
            <b-input
              name="message"
              type="textarea"
              minlength="10"
              maxlength="500"
              placeholder="Your message here"
            ></b-input>
          </b-field>
          <button class="button is-link" type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transiton: "tweakOpacity"
};
</script>

<style lang="css">
.tweakOpacity-enter-active,
.tweakOpacity-leave-active {
  transition: opacity 0.4s ease-out;
}

.tweakOpacity-enter,
.tweakOpacity-leave-active {
  opacity: 0;
}
</style>
