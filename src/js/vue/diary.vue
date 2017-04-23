<template lang="html">
    <div class="container mb30 mt20">
        <h1>diary</h1>

        <div class="diary">
            <div class="diary-item" v-for="item in items">
                <div class="diary-circle">
                    <!-- image -->
                </div>
                <span class="diary-date">{{ item.createdAt }}</span>
                <div class="diary-content">
                    <h2>{{ item.title}}</h2>
                    <p>{{ item.text }}</p>
                    <router-link :to="{ name: 'detail', params: { projectId: item.id }}"><button>Read more</button></router-link>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
    import firebase from '../lib/firebase';
    import VueRouter from "vue-router";

    export default{
        data: function () {
            return {
                username: 'Unknown',
                items: []
            }
        },

        mounted: function () {
            firebase.auth().signInAnonymously().catch((error) => {
                console.log(error.message);
            }).then(() => {
                firebase.database().ref('diary').on('value', (snapshot) => {
                    let newDiary = [];
                    snapshot.forEach((childSnapshot) => {
                        var childKey = childSnapshot.key;
                        var childData = childSnapshot.val();
                        var date = new Date(childData.createdAt);
                        childData.createdAt = `${date.getDate()}.${(date.getMonth()+1)}.${date.getFullYear()}`;
                        childData.id = childKey;
                        if(childData.text.length > 200) {
                            childData.text = childData.text.substr(0, 200) + "...";
                        }
                        newDiary.push(childData);
                    });
                    this.items = newDiary.reverse();
                });
            });
        }
    }
</script>
<style lang="sass" scoped>
</style>