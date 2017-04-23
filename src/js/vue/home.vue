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
                        <h3 class="headline-background">today {{ today }}</h3>
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
                        <div class="twelve columns">
                            <h3 class="headline-background">congrats, you made it to the fun part</h3>
                        </div>
                        <div class="twelve columns quote">
                            <div v-if="quote.chuckNorris">
                                <h5>
                                    <i class="material-icons">format_quote</i>{{ quote.chuckNorris }}<i class="material-icons">format_quote</i>
                                </h5>
                            </div>
                        </div>
                        <div class="twelve columns">
                            <div v-if="gif.animal" class="animal">
                                <img :src="gif.animal" />
                            </div>
                        </div>
                        <div class="twelve columns quote got">
                            <div v-if="quote.got" >
                                <h5>
                                    <i class="material-icons">format_quote</i>{{ quote.got.quote }}<i class="material-icons">format_quote</i>
                                    <span class="character">{{ quote.got.character }}</span>
                                </h5>
                            </div>
                        </div>
                        <div class="twelve columns">
                            <div v-if="gif.got" class="animal">
                                <img :src="gif.got" />
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
                today: null,
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
                    guardian: '',
                },
                gif: {
                    animal: '',
                    got: ''
                },
                quote: {
                    chuckNorris: '',
                    got: {
                        quote: '',
                        character: ''
                    }
                }

            }
        },

        methods: {
            getToday: function () {
                var today = new Date();
                var day = today.getDate();
                var month = today.getMonth()+1;
                var year = today.getFullYear();
                this.today = `${day}.${month}.${year}`;
            },
            getAnimalGif: function () {
                const rand = this.randomNumber(0,1000);
                var _this = this;
                axios.get(`http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&offset=${rand}&limit=1`)
                        .then((result) => {
                            _this.gif.animal = result.data.data[0].images.original.url;
                        })
                        .catch((error) => {
                            console.log(error);
                        });
            },
            getGotGif: function (character) {
                const rand = this.randomNumber(0,100);
                var _this = this;
                axios.get(`http://api.giphy.com/v1/gifs/search?q=game+of+thrones+${character.replace(" ", "+")}&api_key=dc6zaTOxFJmzC&offset=${rand}&limit=1`)
                        .then((result) => {
                            _this.gif.got = result.data.data[0].images.original.url;
                        })
                        .catch((error) => {
                            console.log(error);
                        });
            },
            getGOT: function () {
                var _this = this;
                axios.get(`https://got-quotes.herokuapp.com/quotes`)
                        .then((result) => {
                            _this.quote.got = result.data;
                            _this.getGotGif(_this.quote.got.character);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
            },
            getChuckNorris: function () {
                var _this = this;
                axios.get(`https://api.chucknorris.io/jokes/random`)
                        .then((result) => {
                            _this.quote.chuckNorris = result.data.value;
                        })
                        .catch((error) => {
                            console.log(error);
                        });
            },

            getHolidays: function () {
                var hd = new Holidays('AT');
                var today = new Date();
                var day = today.getDate();
                var month = today.getMonth()+1;
                var year = today.getFullYear();
                if(hd.getHolidays(year)) {
                    this.upcomingHolidays = [];
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
                            date: `${holidayDate.getDate()}.${(holidayDate.getMonth()+1)}.${holidayDate.getFullYear()}`
                        };
                        i++;
                        this.upcomingHolidays.push(holiday);
                    }
                }

                var h;
                if(h = hd.isHoliday(new Date(`${year}-${month}-${day} 10:00:00 GMT-0600`))) {
                    console.log(h);
                    home.isHoliday.check = true;
                    home.holiday.date = day + "." + month + "." + year;
                    home.holiday.name = h.name;
                }

            },

            randomNumber: function (min,max) {
                return parseInt(Math.random() * (max - min) + min);
            },

            getWeather: function (lat,long) {
                var _this = this;
                axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=9509e3a3ba8822d0958b1bb71a0df721`)
                        .then((result) => {
                            _this.weather.icon = `http://openweathermap.org/img/w/${result.data.weather[0].icon}.png`;
                            _this.weather.clouds = result.data.clouds['all'];
                            _this.weather.description = result.data.weather[0].description;
                            _this.weather.location = result.data.name;
                            _this.weather.temp = Math.round((result.data.main['temp'] - 273.15)*100/100.0);
                            _this.weather.min = result.data.main['temp_min']- 273.15;
                            _this.weather.max = result.data.main['temp_max'] - 273.15;
                            _this.weather.pressure = result.data.main['pressure'];
                            _this.weather.humidity = result.data.main['humidity'];
                            _this.weather.wind = result.data.wind.speed;
                            var sunrise = new Date(result.data.sys.sunrise*1000);
                            var hours = sunrise.getHours();
                            var minutes = sunrise.getMinutes();
                            _this.weather.sunrise = ((hours < 10) ? "0" + hours : "" +hours )+ ":"+ ((minutes < 10 ) ? "0"+minutes : minutes);
                            var sunset = new Date(result.data.sys.sunset*1000);
                            hours = sunset.getHours();
                            minutes =  sunset.getMinutes();
                            _this.weather.sunset = ((hours < 10) ? "0" + hours : "" +hours )+ ":"+ ((minutes < 10 ) ? "0"+minutes : minutes);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
            },
            getSpaceHuman:  function() {
                var _this = this;
                axios.get(`http://api.open-notify.org/astros.json`)
                        .then((result) => {
                            _this.space.number = result.data.number;
                            var humans = [];
                            var index = true;
                            for(var h of result.data.people) {
                                humans.push({name:h.name,index});
                                index = !index;
                            }
                            _this.space.humans = humans;
                        })
                        .catch((error) => {
                            console.log(error);
                        });
            },

            getGuardianNews: function () {
                var _this = this;
                axios.get(`https://newsapi.org/v1/articles?source=the-guardian-uk&sortBy=top&apiKey=${_this.apiKey}`)
                        .then((result)=> {
                            var articles = result.data.articles;
                            var index = _this.randomNumber(0,10);
                            var article = articles[index];
                            article.description = article.description.length > 100 ? article.description.substr(0,130) + "..." : article.description;
                            _this.news.guardian = article;
                        })
                        .catch((error) => {
                            console.log(error);
                        });
            },
            getT3nNews: function () {
                var _this = this;
                axios.get(`https://newsapi.org/v1/articles?source=t3n&sortBy=top&apiKey=${_this.apiKey}`)
                        .then((result)=> {
                            var articles = result.data.articles;
                            var index = _this.randomNumber(0,10);
                            var article = articles[index];
                            article.description = article.description.length > 100 ? article.description.substr(0,130) + "..." : article.description;
                            _this.news.t3n = article;
                        })
                        .catch((error) => {
                            console.log(error);
                        });
            },

        },
        created: function () {
            console.log("created");
            var _this = this;

            navigator.geolocation.getCurrentPosition( (position) => {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;
                _this.getWeather(lat, long);
            });

            this.getToday();
            this.getSpaceHuman();
            this.getT3nNews();
            this.getGuardianNews();
            this.getHolidays();
            this.getAnimalGif();
            this.getChuckNorris();
            this.getGOT();

        }

    }
</script>
<style lang="sass" scoped>
</style>