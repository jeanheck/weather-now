<template>
  <AppHeader />
  <AppBody />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AppHeader from './components/AppHeader.vue';
import AppBody from './components/AppBody.vue';

@Options({
  components: {
    AppHeader,
    AppBody,
  },
})
export default class App extends Vue {}
</script>

<style>
  html, body {
    margin: 0;
  }

  #app {
    font-family: Helvetica, Arial, sans-serif;
    background-color: #f1f1f1;
    height: 110vh;
  }
</style>
