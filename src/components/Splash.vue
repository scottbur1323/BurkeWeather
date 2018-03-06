<template>
  <body class="body">
    <div class="everything">
      <h1>Burke Weather!</h1>
      <h3>Simply enter your current zip code below:</h3>
      <input @keyup.enter="getWeather" type="number" maxlength="5" size="5" v-model="inputZip">
      <button @click="getWeather" type="button" name="button">Enter</button>
      <h2>City: {{ cityData.cityName }}</h2>
      <h2>Visibility: {{ cityData.description }}</h2>
      <h2>Current Temperature: {{ cityData.temperature }}°F</h2>
      <h2>Humidity: {{ cityData.humidity }}%</h2>
      <h2>Wind: {{ cityData.wind }}mph</h2>
      <h3>Latitude: {{ cityData.latitude }}</h3>
      <h3>Longitude: {{ cityData.longitude }}</h3>
      <!-- <img class="sat-pic" :src="currentPicture" alt=""> -->
      <img class="weather-pic" :src="nasaImageUrl" alt="">

    </div>

  </body>
</template>

<script>
export default {
  name: 'Splash',
  data () {
    return {
      outsideAPI: 'https://api.openweathermap.org/data/2.5/weather?zip=',
      inputZip: "",
      currentPicture: "",
      nasaImageUrl: "",
      cityData: {
        cityName: "",
        description: "",
        temperature: "",
        humidity: "",
        wind: "",
        latitude: "",
        longitude: ""
      },
      weatherKey: "&APPID=262303768614f8e18789b312097675b8",
      nasaAPI: "https://api.nasa.gov/planetary/earth/imagery?",
      nasaKey: "EwX2q6G0QtxB1bFBHrxa6M2v1ZNjYtjKWYQXIjSg"
    }
  },
  methods: {
      getWeather: function() {
        if (this.inputZip.length == 5) {
          var newURL = this.outsideAPI + this.inputZip + this.weatherKey
          fetch(newURL)
            .then(response => {
              return response.json()
            })
            .then(response => {
              this.cityData.cityName = response.name
              this.cityData.description = response.weather[0].main
              this.cityData.temperature = ((1.8 * (response.main.temp - 273)) + 32).toFixed(1)
              this.cityData.humidity = response.main.humidity
              this.cityData.wind = (response.wind.speed * 1.61).toFixed(0)
              this.cityData.longitude = response.coord.lon
              this.cityData.latitude = response.coord.lat
              this.lookupPicture()
            })
            .catch(error => {
              alert("Uh oh, that zip code didn't seem to work...try another one.")
              this.inputZip = ""
              console.log(error)
            })
        } else alert("Zip Code Needs to Be 5 digits")
      },
      lookupPicture: function() {
          fetch('../../static/weathers.json')
            .then(response => {
              return response.json()
            })
            .then(response => {
              this.tempAPIInfo = response
              this.lookupMapPicture()
            })
      },
      lookupMapPicture: function() {
        var lat = "&lat=" + this.cityData.latitude
        var lon = "lon=" + this.cityData.longitude
        var dim = "&dim=" + "0.05"
        var key = "&api_key=" + this.nasaKey
        var nasaImageAPI = this.nasaAPI + lon + dim + lat + key
        fetch(nasaImageAPI)
          .then(response => {
            return response.json()
          })
          .then(response => {
            this.nasaImageUrl = response.url
          })
          .catch(error => {
            console.log(error)
          })
      }
  },
  created() {
    //nothing yet
  }
}

</script>
<style type="css" scoped>

.body {
  height: 100%;
  width: 100%;
  min-height: 500px;
  min-width: 600px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

}
</style>
