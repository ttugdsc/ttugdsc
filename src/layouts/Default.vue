<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <Navbar />
      </nav>
    </header>
    <slot />
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
export default {
  components: {
    Navbar
  }
}
</script>

<style></style>
