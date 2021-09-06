<template>
  <div>
    <header class="header">
      <navbar />
    </header>
    <transition
      name="fade"
      appear
    >
      <slot />
    </transition>
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
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>
