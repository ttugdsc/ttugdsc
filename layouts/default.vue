<template>
  <div>
    <Navbar />
    <section class="main-content columns">
      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default {
  components: { Navbar },
  data() {
    return {}
  },
}
</script>
