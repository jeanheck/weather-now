<template>
  <div id="weather-city">
    <div id="localization">
      {{ city.name }}, {{ city.country }}
    </div>

    <hr />

    <div id="success" :class="{ hide: !success }">
      <div
        id="temperature"
        :class="{
          low: city.isLowTemperature,
          mid: city.isMidTemperature,
          high: city.isHighTemperature
        }">
        {{ city.temperature }}°
      </div>

      <div id="details">
        <div id="weather-details">
          <div id="humidity">
            <p class="description">
              HUMIDITY
            </p>
            <p class="value">
              {{ city.humidity }}<span class="measurement-unit">%</span>
            </p>
          </div>
          <div id="pressure">
            <p class="description">
              PRESSURE
            </p>
            <p class="value">
              {{ city.pressure }}<span class="measurement-unit">hPa</span>
            </p>
          </div>
        </div>

        <div id="updated-at">
          Updated at {{ city.updatedAt }}
        </div>
      </div>
    </div>
    <div id="loading" :class="{ hide: !loading }">
      <img src="@/assets/loader.svg" alt="" :class="{ hide: !loading }">
    </div>
    <div id="error" :class="{ hide: !error }">
      <div class="error-message">
        Something went wrong
      </div>

      <br />

      <div
        class="button"
        v-on:click="this.getCityData(this.cityName)"
        @keypress="foo"
      >
        Try Again
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import moment from 'moment';
import axios, { AxiosError, AxiosResponse } from 'axios';
import City from '@/classes/city';
import { readFromCache, writeToCache } from '@/cache/cache';

@Options({
  props: {
    cityName: String,
  },
  data() {
    return {
      city: City,
      loading: true,
      error: false,
      success: false,
      oneMinute: 600000,
    };
  },
  mounted() {
    this.getCityData();

    setInterval(() => {
      this.getCityData();
    }, this.oneMinute);
  },
  methods: {
    getOpenWeatherMapData() {
      console.log('running request...');

      return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&appid=${process.env.VUE_APP_APPID}`);
    },
    async getCityData() {
      this.loading = true;
      this.error = false;
      this.success = false;

      const cachedCityData = readFromCache(this.cityName);

      console.log('cachedCityData > ', cachedCityData);

      if (cachedCityData) {
        const now = Date.now();
        const lastUpdate = Date.parse(cachedCityData.lastUpdate.toString());

        console.log('now > ', now);
        console.log('lastUpdate > ', lastUpdate);

        const difference = now - lastUpdate;

        console.log('difference > ', difference);

        if (difference < this.oneMinute) {
          console.log('getting from cache...');

          this.city = cachedCityData.city;

          this.loading = false;
          this.error = false;
          this.success = true;
        } else {
          await this.getOpenWeatherMapData()
            .then(({ data }: AxiosResponse) => {
              this.city = new City(
                data.name,
                data.sys.country,
                Math.floor(data.main.temp),
                data.main.humidity,
                data.main.pressure,
                moment(new Date()).format('hh:mm:ss A'),
              );

              writeToCache(this.cityName, this.city);

              this.loading = false;
              this.error = false;
              this.success = true;
            })
            .catch((error: AxiosError) => {
              console.log('error > ', error);

              this.loading = false;
              this.error = true;
              this.success = false;
            });
        }
      }
    },
  },
})
export default class WeatherCity extends Vue {}
</script>

<style scoped>
  .error-message {
    color: red;
    margin-top: 3vh;
    margin-bottom: 2vh;
    text-align: center;
  }

  .button {
    border: 1px solid #737C84;
    border-radius: 20px;
    padding: 1vh;
    width: 8vw;
    text-align: center;
    color: #737C84;
    margin: auto;
    min-width: 80px;
  }
  .button:hover {
    background-color: #d8d8d8;
    cursor: pointer;
  }

  .hide {
    display: none;
  }

  #loading {
    display: flex;
    justify-content: center;
  }

  #loading * {
    margin-top: 5vh;
  }

  .low {
    color: #69A3FF;
  }
  .mid {
    color: #FF9632;
  }
  .high {
    color: #ED1946;
  }
  .measurement-unit {
    font-size: 12px;
  }
  #weather-city {
    background-color: white;
    color: #737C84;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    box-shadow: #333;

    min-height: 200px;
  }

  hr {
    border: 1px solid #ebebeb;
  }

  #localization {
    text-align: center;
    padding-top: 10px;
  }

  #temperature {
    font-size: 72px;
    display: flex;
    justify-content: center;
  }

  #details {
    background-color: #f1f1f132;
  }

  #weather-details {
    display: flex;
    justify-content: center;
  }
  #weather-details div {
    text-align: center;
    margin: 10px;
    padding: 0;
  }
  #weather-details div p {
    margin: 0;
    padding: 0;
  }
  #weather-details div p.description{
    color: #b4b4b4;
    font-size: 12px;
  }
  #weather-details div p.value{
    color: #737C84;
    font-size: 18px;
  }

  #updated-at {
    color: #b4b4b4;
    font-size: 10px;
    text-align: center;
    padding-bottom: 10px;
  }
</style>
