<script>
import AppCard from "../components/AppCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      project: null,
    };
  },

  created() {
    axios
      .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`)
      .then((response) => {
        this.project = response.data;
      });
  },

  components: {
    AppCard,
  },
};
</script>

<template>
  <h1 class="my-4 text-center">Dettagli progetto {{ project?.name }}</h1>

  <AppCard
    :project="project"
    v-if="project"
    :isDetail="true"
    class="my-4 col-6 m-auto"
  />
</template>

<style lang="scss" scoped></style>
