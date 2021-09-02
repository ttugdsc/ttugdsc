<template>
  <v-app>
    <header class="header">
      <v-img :src="logo" width="143px" contain></v-img>
      <v-tabs grow class="tabsWrapper">
        <v-tab to="/"> home </v-tab>
        <v-tab to="/Projects"> projects </v-tab>
        <v-tab to="/Events"> events </v-tab>
      </v-tabs>
    </header>
    <v-main>
      <div class="pageContent">
        <slot />
      </div>
    </v-main>
    <footer></footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      logo: require("@/assets/logo.png"),
    };
  },
};
</script>

<style scoped>
@import "./Default.css";
</style>
