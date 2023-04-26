<script>
// import MyComponent from "./components/MyComponent.vue";
import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  props: {
    projects: Array,
    pages: Array,
  },

  components: {
    AppCard,
  },
};
</script>

<template>
  <div class="container">
    <h1 class="my-4">Lista Progetti</h1>
    <!-- v-if controllo presenza progetti -->
    <!-- <div v-if="projects.length" class="row justify-content-center g-4"> -->
    <div class="d-flex flex-wrap">
      <AppCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        class="col-3 m-1"
      />
    </div>

    <!-- </div> -->

    <!-- v-else stampa il messaggio -->
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
