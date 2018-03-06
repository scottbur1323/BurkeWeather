<template>
  <body class="body">
    <div class="everything">
      <h1>Burke Weather!</h1>
      <div class="form-group">
        <label class="control-label" for="focusedInput">Enter your zip code here:</label>
        <input  @keyup.enter="getWeather" type="number" maxlength="5" size="8" v-model="inputZip" class="form-control  make-wider" id="focusedInput">
        <button class="btn btn-danger" @click="getWeather" type="button" name="button">Enter</button>
      </div>
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title">Current Temperature</h3>
        </div>
        <h2 class="panel-body text-danger" size="20px">
          {{ cityData.temperature }}°F
        </h2>
      </div>
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title">City</h3>
        </div>
        <div class="panel-body text-danger">
          {{ cityData.cityName }}
        </div>
      </div>
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title">Humidity</h3>
        </div>
        <div class="panel-body text-danger">
          {{ cityData.humidity }}%
        </div>
      </div>
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title">Wind</h3>
        </div>
        <div class="panel-body text-danger">
          {{ cityData.wind }}mph
        </div>
      </div>
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title">Visibility</h3>
        </div>
        <div class="panel-body text-danger">
          {{ cityData.description }}
        </div>
      </div>
      <div class="">
        <h4>Nasa Satellite Picture of Coordinates:</h4>
        <img class="weather-pic sizer" :src="nasaImageUrl" alt="">
      </div>

    </div>
  </body>

</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      weatherAPI: 'https://api.openweathermap.org/data/2.5/weather?zip=',
      weatherKey: "&APPID=262303768614f8e18789b312097675b8",
      nasaAPI: "https://api.nasa.gov/planetary/earth/imagery?",
      nasaKey: "EwX2q6G0QtxB1bFBHrxa6M2v1ZNjYtjKWYQXIjSg",
      inputZip: "",
      nasaImageUrl: "",
      cityData: {
        cityName: "",
        description: "",
        temperature: "",
        humidity: "",
        wind: "",
        latitude: "",
        longitude: ""
      }
    }
  },
  methods: {
      getWeather: function() {
        if (this.inputZip.length == 5) {
          var newURL = this.weatherAPI + this.inputZip + this.weatherKey
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
              this.lookupMapPicture()
              //this.lookupPicture()
            })
            .catch(error => {
              alert("Uh oh, that zip code didn't seem to work...try another one.")
              this.inputZip = ""
              console.log(error)
            })
        } else alert("Zip Code Needs to Be 5 digits")
      },
      // lookupPicture: function() {
      //     fetch('../../static/weathers.json')
      //       .then(response => {
      //         return response.json()
      //       })
      //       .then(response => {
      //         this.tempAPIInfo = response
      //         this.lookupMapPicture()
      //       })
      // },
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
.make-wider {
  width: 400px;
}

.sizer {
  width: 50vh;
}


</style>
