<template lang="html">
    <div>
        <div class="container index">
            <div class="row">
                <div class="twelve columns light-bg">
                    <div class="four columns">
                        <img src="img/profile/img.jpg" class="profile-img"/>
                    </div>
                    <div class="eight columns">
                        <h1>hello michaela!</h1>
                        <h3 class="smaller">how are you doing today? random lorem ipsum text inserted here</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="twelve columns">
                    <h3 class="headline-background">some facts about today</h3>
                    <div class="five columns weather">
                        <div class="weather-box">
                            <div class="weather-headline-wrapper">
                                <i class="material-icons">location_on</i>
                                <h2 class="weather-headline">{{ weather.location }}</h2>
                            </div>

                            <div class="weather-icon-wrapper">
                                <img :src="weather.icon" />
                                <span class="temp">{{ weather.temp }} °C</span>
                            </div>

                            <div class="weather-desc">
                                <span class="description">{{ weather.description }}</span>
                            </div>
                            <div class="weather-infos twelve columns">
                                <div class="row">
                                    <div class="six columns">
                                        <p><i class="wi wi-cloudy"></i> {{ weather.clouds }} %</p>
                                    </div>
                                    <div class="six colums">
                                        <p><i class="wi wi-thermometer"></i> {{ weather.min }} | {{ weather.max}} °C</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="four columns">
                                        <p><i class="wi wi-barometer"></i> {{ weather.pressure }} hPa</p>
                                    </div>
                                    <div class="four columns">
                                        <p><i class="wi wi-humidity"></i> {{ weather.humidity }} %</p>
                                    </div>
                                    <div class="four columns">
                                        <p><i class="wi wi-strong-wind"></i> {{ weather.wind }} m/s</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="six columns">
                                        <p><i class="wi wi-sunrise"></i> {{ weather.sunrise }}</p>
                                    </div>
                                    <div class="six columns">
                                        <p><i class="wi wi-sunset"></i> {{ weather.sunset }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    export default{
        data() {
            return {
                weather: {
                    icon: '',
                    temp: '',
                    min: '',
                    max: '',
                    location: '',
                    description: '',
                    clouds: '',
                    pressure: '',
                    wind: '',
                    humidity: '',
                    sunrise: '',
                    sunset: ''
                }

            }
        },

        methods: {
            getWeather: function (home,lat,long) {
                axios.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=9509e3a3ba8822d0958b1bb71a0df721')
                        .then((result) => {
                            console.log(result.data);
                            home.weather.icon = "http://openweathermap.org/img/w/" + result.data.weather[0].icon + ".png";
                            home.weather.clouds = result.data.clouds['all'];
                            home.weather.description = result.data.weather[0].description;
                            home.weather.location = result.data.name;
                            home.weather.temp = Math.round((result.data.main['temp'] - 273.15)*100/100.0);
                            home.weather.min = result.data.main['temp_min']- 273.15;
                            home.weather.max = result.data.main['temp_max'] - 273.15;
                            home.weather.pressure = result.data.main['pressure'];
                            home.weather.humidity = result.data.main['humidity'];
                            home.weather.wind = result.data.wind.speed;
                            var sunrise = new Date(result.data.sys.sunrise*1000);
                            var hours = sunrise.getHours();
                            var minutes = sunrise.getMinutes();
                            home.weather.sunrise = ((hours < 10) ? "0" + hours : "" +hours )+ ":"+ ((minutes < 10 ) ? "0"+minutes : minutes);
                            var sunset = new Date(result.data.sys.sunset*1000);
                            hours = sunset.getHours();
                            minutes =  sunset.getMinutes();
                            home.weather.sunset = ((hours < 10) ? "0" + hours : "" +hours )+ ":"+ ((minutes < 10 ) ? "0"+minutes : minutes);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
            }
        },
        created: function () {
            console.log("created");
            var home = this;

            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;
                home.getWeather(home,lat,long);

            });

        },

    }
</script>
<style lang="sass" scoped>
</style>