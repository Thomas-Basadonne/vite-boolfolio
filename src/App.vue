<script>
// import MyComponent from "./components/MyComponent.vue";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppList from "./components/AppList.vue";

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
    AppList,
  },

  // emit pagination
  //emits: ["changePage"],

  methods: {
    // fetchProjects(endPoint = null) {
    //   if (!endPoint) endPoint = "http://127.0.0.1:8000/api/projects";
    //   axios.get(endPoint).then((response) => {
    //     this.projects.list = response.data.data;
    //     this.projects.pages = response.data.links;
    //   });
    // },
    fetchProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
        this.projects = response.data;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
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
  <AppList :projects="projects" />
</template>

<style lang="scss" scoped></style>
