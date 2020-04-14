<template>
  <div>
    <div class="columns">
      <div class="column is-8-desktop hero is-white is-fullheight">
        <div class="content has-element-at-center has-text-centered is-medium">
          <p>
            Ce projet n'aurait pas pu aboutir sans les personnes géniales qui y ont
            participées peu importe la manière.
          </p>
        </div>
        <div id="contributors">
          <div class="title is-2 has-text-centered">Nos contributeurs</div>
          <div class="content has-text-centered is-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illum quod vel porro reprehenderit odio
            optio culpa eligendi in deserunt, ipsam provident blanditiis a commodi voluptatibus! Doloribus quisquam amet
            neque.
          </div>
          <div class="columns"></div>
        </div>
        <div id="sponsors">
          <div class="title is-2 has-text-centered">Nos sponsors</div>
          <div class="content has-text-centered is-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, odit in? Mollitia quas voluptate omnis
            veritatis quo perspiciatis aliquam ab deserunt, repellat eveniet placeat inventore quidem similique pariatur
            corporis iusto?
          </div>
          <div class="columns"></div>
        </div>
      </div>
      <div class="column hero is-primary is-fullheight has-element-at-center">
        <div class="content has-text-centered is-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, quos iure aut et, quidem hic laborum id quasi
          aliquid tempora sed sint laboriosam placeat reiciendis porro necessitatibus, quis qui libero!
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
.tweakOpacity-enter-active,
.tweakOpacity-leave-active {
  transition: opacity 0.4s ease-out;
}

.tweakOpacity-enter,
.tweakOpacity-leave-active {
  opacity: 0;
}
</style>