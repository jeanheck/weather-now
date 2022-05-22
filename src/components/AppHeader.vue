<template>
  <nav id="app-header">
    <img src="@/assets/logo.svg" alt="">
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import WeatherPanel from './Weather/WeatherPanel.vue';

@Options({
  components: {
    WeatherPanel,
  },
})
export default class AppHeader extends Vue {}
</script>

<style scoped>
  #app-header {
    background-color: white;
    display: flex;
    justify-content: center;
    height: 2.5vh;
    padding: 1.5vh;
    position: sticky;
    top: 0;
  }
</style>
