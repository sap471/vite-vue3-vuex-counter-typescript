<template>
  <h4>About</h4>

  Number : {{ counter }} |
  <button @click="decrement">-</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  computed: {
    ...mapGetters(["counter"]),
  },
  methods: {
    ...mapMutations(["decrement"]),
  },
});
</script>
