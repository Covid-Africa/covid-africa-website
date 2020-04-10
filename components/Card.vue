<template>
  <div class="column">
    <div class="card">
      <div class="card-image has-item-centered">
        <figure class="image is-128x128">
          <img src="https://image.flaticon.com/icons/svg/2750/2750657.svg" alt />
        </figure>
      </div>
      <div class="card-content">
        <div
          class="content has-text-centered"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem accusantium ducimus aspernatur blanditiis</div>
        <div class="has-item-centered">
          <a href class="button is-info is-outlined is-small">Savoir-plus</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
};
</script>