<template>
  <ClientOnly>
    <!-- We need ClientOnly tag because vue-navigation-bar doesn't support SSR -->
    <vue-navigation-bar :options="navbarOptions" />
  </ClientOnly>
</template>

<script>
import VueNavigationBar from "vue-navigation-bar"; // Documentation at https://github.com/johndatserakis/vue-navigation-bar

export default {
  data() {
    return {
      navbarOptions: {
        brandImage: require("../assets/logo.png"),
        brandImagePath: "/",
        brandImageAltText: "brand-image",
        collapseButtonOpenColor: "#661c23",
        collapseButtonCloseColor: "#661c23",
        ariaLabelMainNav: "Main Navigation",
        tooltipAnimationType: "shift-away",
        tooltipPlacement: "bottom",
        menuOptionsRight: [
          {
            type: "link",
            text: "Home",
            path: "/",
          },
          {
            type: "link",
            text: "Projects",
            path: "/projects",
          },
          {
            type: "link",
            text: "Events",
            path: "/events",
          },
        ],
      },
    };
  },
  components: {
    VueNavigationBar,
  },
};
</script>
