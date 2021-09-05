<template>
  <div>
    <header class="header">
      <navbar />
    </header>
    <slot />
    <footbar />
  </div>
</template>

<script>
import Footbar from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar, Footbar }
}
</script>

<style scoped>

</style>
