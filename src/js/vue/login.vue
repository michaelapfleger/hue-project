<template lang="html">
    <div class="container mt20 login">
        <div class="row panel-body">
            <div v-if="$store.state.signedUp || login" class="login ten columns">
                <h2>Login</h2>
                <form v-on:submit.prevent="signIn(user)">
                    <div class="form-group">
                        <label for="email">E-Mail<span class="required">*</span></label>
                        <input class="u-full-width" type="text" name="email" id="email" required v-model="user.email"/>
                    </div>

                    <div class="form-group">
                        <label for="password">Password<span class="required">*</span></label>
                        <input class="u-full-width" type="password" name="password" id="password" required v-model="user.password"/>
                    </div>
                    <button type="submit" >Login</button>
                </form>

                <p class="login-error" v-if="$store.state.error">{{ $store.state.error.error }}</p>

                <p class="register" v-on:click="login = !login">No account yet? Create one here</p>
            </div>
            <div v-else class="register ten columns">
                <h2>Register</h2>
                <form v-on:submit.prevent="signUp(rUser)">
                    <div class="form-group">
                        <label for="rEmail">E-Mail<span class="required">*</span></label>
                        <input class="u-full-width" type="text" name="email" id="rEmail" required v-model="rUser.email"/>
                    </div>

                    <div class="form-group">
                        <label for="rPassword">Password<span class="required">*</span></label>
                        <input class="u-full-width" type="password" name="password" id="rPassword" required v-model="rUser.password"/>
                    </div>

                    <button type="submit" >Register</button>
                </form>
                <p class="login-error" v-if="$store.state.error">{{ $store.state.error.error }}</p>

                <p class="register" v-on:click="login = !login">Already have an account? Login here</p>
            </div>
        </div>
    </div>
</template>
<script>
    import firebase from '../lib/firebase';
    import Home from "../vue/home.vue";


    export default{
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                    username: ''
                },
                rUser: {
                    email: '',
                    password: '',
                    username: ''
                },

                login: true

            }
        },

        methods: {
            signUp: function (user) {
                if(user.email && user.password) {
                    this.$store.dispatch('signUp', { user });
                }
            },
            signIn: function (user) {
                var _this = this;
                if (user.email && user.password) {
                    this.$store.dispatch('signIn', {user});
                    _this.login = true;
                }
            }
        },
        created: function () {
            if(this.$store.state.user) {
                this.$router.push({name: 'home'});
            }
        }
    }
</script>
<style lang="sass" scoped>
</style>