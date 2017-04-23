import firebase from './lib/firebase';
import VueRouter from "vue-router";
import Home from "./vue/home.vue";
import Login from "./vue/login.vue";

export default {
    state: {
        user: null,
        error: null
    },
    mutations: {
        setUser: function (state, user) {
            state.user = user.user;
        },
        setError: function (state, error) {
            state.error = error;
        }
    },
    actions: {

        signIn: function (context, payload) {
            firebase.auth().signInWithEmailAndPassword(payload.user.email, payload.user.password)
                .then((result) => {
                    console.log(result.email);
                    console.log(result);
                    context.commit('setUser', { user: {
                        email: result.email,
                        name: result.displayName,
                        id: result.uid,
                        image: result.photoURL
                    }});
                    context.commit('setError', {error: null});

                })
                .catch((error) =>{
                    console.log(error);
                    context.commit('setError', {error: error.message})
                });
        },
        signUp: function (context, payload) {
            firebase.auth().createUserWithEmailAndPassword(payload.user.email, payload.user.password)
                .then((result) => {
                    console.log(result);
                    context.commit('setError', {error: null})
                })
                .catch((error) => {
                    console.log(error);
                    context.commit('setError', {error: error.message})
                });
        },
        updateUserImage: function (context,payload) {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    console.log("payload:",payload);
                    user.updateProfile({
                        photoURL: payload.imageUrl
                    }).then(() => {
                        context.commit('setUser', { user: {
                            email: context.state.user.email,
                            name: context.state.user.name,
                            id: context.state.user.id,
                            image: payload.imageUrl
                        }});
                    }, (error) => {
                        console.log(error);
                    });
                }
            });
        },
        updateUsername: function (context, payload) {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    user.updateProfile({
                        displayName: payload.user.username
                    }).then(() => {
                        context.commit('setUser', { user: {
                            email: context.state.user.email,
                            name: payload.user.username,
                            id: context.state.user.id,
                            image: context.state.user.image
                        }});
                    }, (error) => {
                        console.log(error);
                    });
                }
            });
        },
        logout: function (context) {
            firebase.auth().signOut().then(() => {
                console.log("signed out");
                context.commit('setUser', {user: null});
                context.commit('setError', {error: null});
                // redirect
            }, (error) => {
                console.log(error);
            });
        }

    }
}
