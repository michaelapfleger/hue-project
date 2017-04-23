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
                <div class="twelve columns infos">
                    <div class="row first">
                        <h3 class="headline-background">today 15.4.2017</h3>
                        <div class="five columns weather">
                            <div class="weather-box">
                                <div class="weather-wrapper">
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
                        <div class="four columns space">
                            <div class="space-box">
                                <h3 class="space">There are currently {{ space.number}} humans in space.</h3>
                                <i class="material-icons">flare</i>
                                <ul id="space-humans">
                                    <li v-for="human in space.humans">
                                        {{ human.name }}
                                    </li>
                                    <li><i class="wi wi-alien"></i><i class="wi wi-stars"></i><i class="wi wi-meteor"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div class="three columns news">
                            <div class="t3n news-box">
                                <h4> {{ news.t3n.title }} </h4>
                                <p> {{ news.t3n.description}}</p>
                                <button><a :href="news.t3n.url" target="_blank">read more</a></button>
                                <div class="logo-wrapper">
                                    <span class="author"> {{ news.t3n.author}}</span>
                                    <h3 class="t3n news">T3n</h3>
                                    <img class="t3n logo" src="https://icons.better-idea.org/icon?url=http://t3n.de&size=70..120..200">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row second">

                        <div class="six columns news">
                            <div class="guardian news-box">
                                <h4> {{ news.guardian.title }} </h4>
                                <p> {{ news.guardian.description}}</p>
                                <button><a :href="news.guardian.url" target="_blank">read more</a></button>
                                <div class="logo-wrapper">
                                    <span class="author"> {{ news.guardian.author}}</span>
                                    <h3 class="guardian news">The Guardian</h3>
                                    <img class="guardian logo" src="https://icons.better-idea.org/icon?url=https://www.theguardian.com/uk&size=70..120..200">
                                </div>
                            </div>

                        </div>
                        <div class="six columns holiday">
                            <i class="material-icons">event</i>

                            <div v-if="!isHoliday.check">
                                <h4>{{ isHoliday.text }}</h4>
                            </div>
                            <div v-else>
                                <h4> {{ holiday.text }}</h4>
                                <ul>
                                    <li class="current">{{ holiday.name }}  </li>
                                </ul>
                            </div>
                            <div v-if="upcomingHolidays" class="upcomingHolidays">
                                <p>Upcoming holidays:</p>
                                <ul>
                                    <li v-for="holiday in upcomingHolidays">
                                        {{ holiday.name }}
                                        {{ holiday.date }}
                                    </li>
                                </ul>
                            </div>
                            <div v-else>
                                <p>There are no upcoming holidays for this year anymore.</p>
                            </div>
                        </div>


                    </div>
                    <div class="row third">
                        <div class="six columns">
                            xx
                        </div>
                        <div class="six columns news">
                            <div class="fox news-box">
                                <h4> {{ news.fox.title }} </h4>
                                <p> {{ news.fox.description}}</p>
                                <button><a :href="news.fox.url" target="_blank">read more</a></button>
                                <div class="logo-wrapper">
                                    <span class="author"> {{ news.fox.author}}</span>
                                    <h3 class="fox news">Fox Sports</h3>
                                    <img class="fox logo" src="https://pbs.twimg.com/profile_images/824007776489738241/pFk_8LLO.jpg">
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
    var Holidays = require('date-holidays');
    export default{
        data() {
            return {
                upcomingHolidays: null,
                isHoliday: {
                    text:"Sorry, today is not a holiday.",
                    check: false
                },
                holiday: {
                    text: "Yay! It's a holiday today!",
                    date: '',
                    name: ''
                },
                apiKey: 'd8d9dfa8e37b4442bc12163ca63ddbd6',
                weather: {
                    icon: '',
                    temp: 0,
                    min: 0,
                    max: 0,
                    location: '',
                    description: '',
                    clouds: 0,
                    pressure: 0,
                    wind: 0,
                    humidity: 0,
                    sunrise: '',
                    sunset: ''
                },
                space : {
                    humans: [],
                    number: 0
                },
                news: {
                    t3n: '',
                    reddit: '',
                    guardian: '',
                    fox: ''
                }

            }
        },

        methods: {
            getHolidays: function (home) {
                var hd = new Holidays('AT');
                var today = new Date();
                var day = today.getDate();
                var month = today.getMonth()+1;
                var year = today.getFullYear();
                if(hd.getHolidays(year)) {
                    home.upcomingHolidays = [];
                }
                var i = 0;
                for (let value of hd.getHolidays(year)) {
                    if (i > 1) {
                        break;
                    }
                    var holidayDate = new Date(value.date);
                    if (holidayDate.getTime() > today.getTime()) {
                        var holiday = {
                            name: value.name,
                            date: holidayDate.getDate() + "." + (holidayDate.getMonth()+1) + "." + holidayDate.getFullYear()
                        };
                        i++;
                        home.upcomingHolidays.push(holiday);
                    }
                }

                var h;
                if(h = hd.isHoliday(new Date(year + '-' + month +'-' + day +' 10:00:00 GMT-0600'))) {
                    console.log(h);
                    home.isHoliday.check = true;
                    home.holiday.date = day + "." + month + "." + year;
                    home.holiday.name = h.name;
                }

            },

            randomNumber: function (min,max) {
                return parseInt(Math.random() * (max - min) + min);
            },

            getWeather: function (home,lat,long) {
                axios.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=9509e3a3ba8822d0958b1bb71a0df721')
                        .then((result) => {
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
            },
            getSpaceHuman: function (home) {
                axios.get('http://api.open-notify.org/astros.json')
                        .then((result) => {
                            home.space.number = result.data.number;
                            var humans = [];
                            var index = true;
                            for(var h of result.data.people) {
                                humans.push({name:h.name,index});
                                index = !index;
                            }
                            home.space.humans = humans;
                        })
                        .catch((error) => {
                            console.log(error);
                        });
            },

            getGuardianNews: function (home) {
                axios.get('https://newsapi.org/v1/articles?source=the-guardian-uk&sortBy=top&apiKey='+home.apiKey)
                        .then((result)=> {
                            var articles = result.data.articles;
                            var index = home.randomNumber(0,10);
                            var article = articles[index];
                            article.description = article.description.length > 100 ? article.description.substr(0,130) + "..." : article.description;
                            home.news.guardian = article;
                        })
                        .catch((error) => {
                            console.log(error);
                        });
            },
            getT3nNews: function (home) {
                axios.get('https://newsapi.org/v1/articles?source=t3n&sortBy=top&apiKey='+home.apiKey)
                        .then((result)=> {
                            var articles = result.data.articles;
                            var index = home.randomNumber(0,10);
                            var article = articles[index];
                            article.description = article.description.length > 100 ? article.description.substr(0,130) + "..." : article.description;
                            home.news.t3n = article;
                        })
                        .catch((error) => {
                            console.log(error);
                        });
            },
            getFoxNews: function (home) {
                axios.get('https://newsapi.org/v1/articles?source=fox-sports&sortBy=top&apiKey='+home.apiKey)
                        .then((result)=> {
                            var articles = result.data.articles;
                            var index = home.randomNumber(0,10);
                            var article = articles[index];
                            article.description = article.description.length > 100 ? article.description.substr(0,130) + "..." : article.description;
                            home.news.fox = article;

                        })
                        .catch((error) => {
                            console.log(error);
                        });
            },
        },
        created: function () {
            console.log("created");
            var home = this;

            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;
                home.getWeather(home,lat,long);
            });

            home.getSpaceHuman(home);
            home.getT3nNews(home);

            home.getGuardianNews(home);
            home.getFoxNews(home);
            home.getHolidays(home);

        },

    }
</script>
<style lang="sass" scoped>
</style>