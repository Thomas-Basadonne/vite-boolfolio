<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Card",
    };
  },
  props: {
    project: Object,
  },
};
</script>

<template>
  <div>
    <div class="card shadow h-100">
      <img :src="project.image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Titolo progetto: {{ project.name }}</h5>
        <p>Data di inzio: {{ project.start_date }}</p>
        <p>Data fine: {{ project.end_date }}</p>
        <!-- <div v-if="project.technologies.length">
          <p>Tecnologie utilizzate</p>
          <ul>
            <li v-for="tecnology in project.technologies">
              {{ tecnology.name }}
            </li>
          </ul>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
