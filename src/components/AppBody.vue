<template>
  <div id="app-body">
    <WeatherPanel />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import WeatherPanel from './Weather/WeatherPanel.vue';

@Options({
  components: {
    WeatherPanel,
  },
})
export default class AppBody extends Vue {}
</script>

<style scoped>
  #app-body {
    /* border: 1px solid red; */
    height: 100vh;
    display: flex;
    align-items: center;
  }
</style>
