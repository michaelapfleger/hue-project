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
                    <img :src="weather.icon" />
                    <p>{{ weather.location }}</p>
                    <p>{{ weather.description }}</p>
                    <p>{{ weather.clouds }}% clouds</p>
                    <p>{{ weather.min }} - {{ weather.max}}°C</p>
                    <p>{{ weather.pressure }}hPa</p>
                    <p>{{ weather.humidity }}% humidity</p>
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
                    min: '',
                    max: '',
                    location: '',
                    description: '',
                    clouds: '',
                    pressure: '',
                    humidity: ''
                }

            }
        },
        created: function () {
            console.log("created");
            axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9509e3a3ba8822d0958b1bb71a0df721')
                    .then((result) => {
                console.log(result.data);
            this.weather.icon = "http://openweathermap.org/img/w/" + result.data.weather[0].icon + ".png";
            this.weather.clouds = result.data.clouds['all'];
            this.weather.description = result.data.weather[0].description;
            this.weather.location = result.data.name;
            this.weather.min = result.data.main['temp_min']- 273.15;
            this.weather.max = result.data.main['temp_max'] - 273.15;
            this.weather.pressure = result.data.main['pressure'];
            this.weather.humidity = result.data.main['humidity'];
        })
            .catch((error) => {
                console.log(error);
        });

        }
    }
</script>
<style lang="sass" scoped>
</style>