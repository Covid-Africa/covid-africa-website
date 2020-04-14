<template>
  <div>
    <div class="columns">
      <div class="column is-2"></div>
      <div class="column hero is-white is-fullheight">
        <div class="has-text-centered">
          <h2 class="title is-2">Comment utiliser l'API?</h2>
          <div class="content is-medium">
            Actuellement en cours de développement. Suivez nous sur Twitter ou Github pour savoir
            quand est-ce que ce sera
            disponible.
          </div>
        </div>
      </div>

      <div id="example" class="column hero is-dark is-4 is-fullheight">
        <div class="title is-2 has-text-centered">
          <h2>Examples</h2>
        </div>
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