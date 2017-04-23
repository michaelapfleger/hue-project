<template lang="html">
    <div class="container mt20">
        <h1>today</h1>
        <p class="center">tell us a little bit about your day.</p>
        <div class="panel-body">
            <form v-on:submit.prevent="sendDiary(diary)">

                <div class="twelve columns">
                    <div class="row">

                        <div class="form-group">
                            <label for="title">Title<span class="required">*</span></label>
                            <input class="u-full-width" type="text" name="title" id="title" required v-model="diary.title"/>
                        </div>

                        <div class="form-group">
                            <label for="text">Text<span class="required">*</span></label>
                            <textarea class="u-full-width"  name="text" id="text"  required v-model="diary.text"></textarea>
                        </div>

                        <div class="form-group">
                            <label for="companions">Companions</label>
                            <input class="u-full-width"  type="text" name="companions" id="companions" v-model="diary.companions"/>
                        </div>


                        <div class="form-group">
                            <label>Feeling</label>
                            <label class="feeling">
                                <input type="radio" name="feeling" value="5" v-model="diary.feeling"/>
                                <i class="material-icons">sentiment_very_satisfied</i>
                            </label>
                            <label class="feeling">
                                <input type="radio" name="feeling" value="4" v-model="diary.feeling" />
                                <i class="material-icons">sentiment_satisfied</i>
                            </label>
                            <label class="feeling">
                                <input type="radio" name="feeling" value="3" v-model="diary.feeling"/>
                                <i class="material-icons">sentiment_neutral</i>
                            </label>
                            <label class="feeling">
                                <input type="radio" name="feeling" value="2" v-model="diary.feeling"/>
                                <i class="material-icons">sentiment_dissatisfied</i>
                            </label>
                            <label class="feeling">
                                <input type="radio" name="feeling" value="1" v-model="diary.feeling"/>
                                <i class="material-icons">sentiment_very_dissatisfied</i>
                            </label>

                        </div>
                        <div class="form-group">
                            <label for="image">Image</label>
                            <div v-if="!image">
                                <input type="file" name="image" id="image" accept="image/*" @change="onFileChange"  />
                            </div>
                            <div class="image-upload"v-else>
                                <img :src="image"/>
                                <button class="removeImage" @click="removeImage">Remove image</button>
                            </div>
                        </div>

                        <button type="submit" >Save</button>
                    </div>
                </div>
            </form>
        </div>

    </div>
</template>
<script>
    import firebase from '../lib/firebase';
    import VueRouter from "vue-router";
    import Diary from "../vue/diary.vue";
    import axios from "axios";

    export default{

        data: function () {
            return {
                status: '-',
                username: 'Unknown',
                image: '',
                file: null,
                diary: {
                    title: '',
                    date: new Date(),
                    image: null,
                    text: "",
                    companions: "",
                    feeling: null,
                    pos: ''
                }
            }
        },
        methods: {
            onFileChange: function (e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length) {
                    return;
                }else {
                    this.file = files[0];
                    this.createImage(files[0]);
                }
            },
            createImage: function (file) {
                var image = new Image();
                var reader = new FileReader();
                var vm = this;

                reader.onload = (e) => {
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            removeImage: function (e) {
                this.image = '';
            },
            getPosition: function () {
                var lat,long;
                var _this = this;
                navigator.geolocation.getCurrentPosition( (position) => {
                    lat = position.coords.latitude;
                    long = position.coords.longitude;
                    axios.get(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&sensor=true`)
                            .then((result) => {
                                _this.diary.pos = result.data.results[0].formatted_address;
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                });

            },
            sendToDB: function (diary_) {
                const diaryRef = firebase.database().ref('diary').push();
                diaryRef.set(diary_).catch(function (error) {
                    console.log(error);
                }).then(() => {
                    router.go('diary');
                });
            },
            sendDiary: function (diary) {
                var lat,long,pos;
                var _this = this;

                let diary_ = {
                    text: diary.text,
                    title: diary.title,
                    username: 'michi',
                    createdAt: (new Date()).getTime(),
                    companions: diary.companions,
                    feeling: diary.feeling,
                    image: this.image,
                    pos: _this.diary.pos
                };
                if(this.file && diary_.text && diary_.title) {
                    var metadata = {
                        contentType: this.file.type,
                    };
                    var storageRef = firebase.storage().ref();
                    var uploadTask = storageRef.child(`images/${diary_.createdAt} ${this.file.name}`).put(this.file, metadata);

                    uploadTask.on('state_changed',  (snapshot) => {
                        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log(`Upload is ${progress} % done`);
                    }, function (error) {
                        console.log(error);
                    }, function () {
                        console.log("uploaded");
                        diary_.image = uploadTask.snapshot.downloadURL;
                        _this.sendToDB(diary_);
                    });
                } else {
                    if( diary_.text && diary_.title) {
                        this.sendToDB(diary_);
                    }
                }
            }
        },
        mounted: function () {
            this.getPosition();
        }

    }
</script>
<style lang="sass" scoped>
</style>