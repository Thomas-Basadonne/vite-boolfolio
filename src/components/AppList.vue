<script>
// import MyComponent from "./components/MyComponent.vue";
import AppCard from "./AppCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      title: "Hello world",

      projects: {
        list: [],
        pages: [],
      },
    };
  },

  props: {
    projects: Array,
    pages: Array,
  },

  components: {
    AppCard,
  },

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
  <div class="container">
    <h1 class="my-4">Lista Progetti</h1>
    <div class="row justify-content-center g-4">
      <AppCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        class="col-4"
      />
    </div>

    <!-- <div v-else>
      <h1>Non ci sono progetti da visualizzare</h1>
    </div> -->

    <!-- Pagination -->
    <!-- <nav aria-label="Page navigation example">
      <ul class="pagination my-4">
        <li class="page-item" v-for="page in pages">
          <button
            type="button"
            class="page-link"
            :class="{
              disabled: !page.url,  //blocco link se non riceviamo un URL
              active: page.active,
            }"
            v-html="page.label"
            @click="$emit('changePage', page.url)"
          ></button> -->
    <!-- sul click viene lanciato un $emit al genitore passando l'URL  -->
    <!-- </li>
      </ul>
    </nav> -->
  </div>
</template>

<style lang="scss" scoped></style>
