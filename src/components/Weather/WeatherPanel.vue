<template>
  <div id="weather-panel">
    <WeatherCity :cityName="'nuuk'"/>
    <WeatherCity :cityName="'urubici'"/>
    <WeatherCity :cityName="'nairobi'"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import WeatherCity from './WeatherCity.vue';

@Options(
  {
    components: {
      WeatherCity,
    },
  },
)
export default class AppBody extends Vue {}
</script>

<style scoped>
  @media only screen and (max-width: 768px) {
    #weather-panel {
      height: 100vh;
      width: 100vw;
    }

    #weather-panel * {
      min-width: 60vw;
      margin: 5vw 10vw;
    }
  }

  @media only screen and (min-width: 768px) {
    #weather-panel {
      display: flex;
      justify-content: center;
      height: 300px;
      width: 100%;
    }

    #weather-panel * {
      margin: 25px;

      max-width: 225px;
      width: 30vw;

      max-height: 200px;
    }
  }
</style>
