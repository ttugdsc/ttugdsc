<template>
  <div>
    <header class="header">
      <navbar />
    </header>
    <slot />
    <footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar }
}
</script>

<style scoped>

</style>
