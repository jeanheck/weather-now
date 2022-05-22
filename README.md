# weather-now

## Install Node
https://nodejs.org/en/download/
(Install one of these versions: 12.22.0 OR 14.17.0 OR >=16.0.0)

## Install Yarn
https://classic.yarnpkg.com/lang/en/docs/install/

## Install Vue-cli
```
yarn global add @vue/cli
```

## Project setup
```
yarn install
```

## Create a .env file in the root of the project with that content:
```
VUE_APP_APPID=your_open_weather_map_api_key
```
Sign in at https://openweathermap.org, and get your api key at https://home.openweathermap.org/api_keys

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
