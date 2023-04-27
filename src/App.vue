<script>
// import MyComponent from "./components/MyComponent.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      title: "Boolfolio",
      projects: [],
      // projects: {
      //   list: [],
      //   pages: [],
      // },
    };
  },

  components: {
    AppHeader,
  },

  // emit pagination
  //emits: ["changePage"],
};
</script>

<template>
  <h1>{{ title }}</h1>

  <AppHeader />
  <!-- <AppList
    :projects="projects.list"
    :pages="projects.pages"
    @changePage="fetchProjects"
  /> -->
  <!-- <AppList :projects="projects" /> -->
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped></style>
