<template>
  <v-app>
    <header class="header">
      <div class="logoWrapper">
        <img
          class="logo"
          src="../assets/logo.png"
        >
      </div>
      <v-tabs
        grow
        class="tabsWrapper"
      >
        <v-tab to="/">
          home
        </v-tab>
        <v-tab to="/Projects">
          projects
        </v-tab>
        <v-tab to="/Events">
          events
        </v-tab>
      </v-tabs>
    </header>
    <v-main>
      <div class="pageContent">
        <slot />
      </div>
    </v-main>
    <footer />
  </v-app>
</template>

<script>
export default {}
</script>

<style scoped>
@import "./Default.css";
</style>
