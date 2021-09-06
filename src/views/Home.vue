<template>
  <section id="home">
    <q-grid-container :cols="1">
      <q-grid-column>
        <h1>Radunia Template</h1>
        <p>This is a boilerplate derived from the project Radunia</p>
        <a href="https://tq-bit.github.io/vitepress-components">Read the docs</a>
      </q-grid-column>
    </q-grid-container>
  </section>
</template>

<script>
// @ is an alias to /src
import QGridContainer from "../components/Layout/Grid/QGridContainer.vue";
import QGridColumn from "../components/Layout/Grid/QGridColumn.vue";

export default {
  components: {
    QGridContainer,
    QGridColumn,
  },
  methods: {},
  data() {
    return {};
  },
};
</script>
