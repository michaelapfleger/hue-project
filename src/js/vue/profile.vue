<template lang="html">
    <div v-if="$store.state.user" class="container mt20 profile">
        <h1>profile</h1>
        <div class="twelve columns">

            <p class="center mt20">Check and change your profile here.</p>
            <div class="twelve columns">
                <span class="profile-label">E-Mail:</span> <span class="profile-value">{{ $store.state.user.email }}</span>
            </div>
            <div class="twelve columns">
                <span class="profile-label">Username:</span> <span class="profile-value">{{ $store.state.user.name }}</span><br>
                <p class="showInput" v-on:click="showUserNameInput = !showUserNameInput">Change Username?</p>
                <form v-if="showUserNameInput" v-on:submit.prevent="changeUserName(user)">
                <input  type="text" name="username" v-model="user.username">
                <button type="submit">Save</button>
                </form>
            </div>
            <div class="twelve columns">
                <span class="profile-label">Profile Image:</span>
                <img v-if="$store.state.user.image" class="userImage" :src="$store.state.user.image" />
                <p class="showImageInput" v-on:click="showImageInput = !showImageInput">Change Profile Image?</p>
                <form  v-if="showImageInput" v-on:submit.prevent="changeUserPhoto(user)">
                    <div v-if="!file">
                    <input type="file" name="image" id="image" accept="image/*" @change="onFileChange"  />
                    </div>
                    <div class="image-upload"v-else>
                        <img :src="image"/>
                        <button class="removeImage" @click="removeImage">Remove image</button>
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>

        </div>
    </div>
</template>
<script>
    import firebase from '../lib/firebase';
    import Login from "./login.vue";

    export default{

        data: function () {
            return {
                user: {
                    username: '',
                    image: ''
                },
                file: null,
                image: null,
                showUserNameInput: false,
                showImageInput: false
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


            changeUserName: function (user) {
                this.showUserNameInput = false;
                if (user.username) {
                    this.$store.dispatch('updateUsername', {user});
                }
            },
            changeUserPhoto: function (user) {
                this.showUserNameInput = false;
                var _this = this;
                if (this.file) {
                    var metadata = {
                        contentType: this.file.type,
                    };
                    var storageRef = firebase.storage().ref();
                    var date = new Date();
                    var uploadTask = storageRef.child(`images/${this.file.name}.${date}`).put(this.file, metadata);

                    uploadTask.on('state_changed', (snapshot) => {
                        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log(`Upload is ${progress} % done`);
                    }, function (error) {
                        console.log(error);
                    }, function () {
                        console.log("uploaded");
                        var imageUrl = uploadTask.snapshot.downloadURL;
                        _this.$store.dispatch('updateUserImage', {imageUrl});
                        _this.showImageInput = false;

                    });
                }
            }
        },
        created: function () {
            if(this.$store.state.user) {

            } else {
                this.$router.push({path: "/"});
            }
        }
    }
</script>
<style lang="sass" scoped>
</style>