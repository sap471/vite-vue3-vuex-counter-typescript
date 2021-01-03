<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <h4>{{ message }}</h4> -->
  <div>
    <router-link to="/">Dashboard</router-link> |
    <router-link to="/about">About</router-link> |
    <!-- <router-link to="/logout">Logout</router-link> -->
  </div>
  <router-view> </router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
