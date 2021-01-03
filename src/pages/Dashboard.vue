<template>
  <h4>Dashboard</h4>

  <span>Number: {{ counter }}</span> |
  <button @click="increment">+</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  computed: {
    ...mapGetters(["counter"]),
  },
  methods: {
    ...mapMutations(["increment"]),
  },
});
</script>
