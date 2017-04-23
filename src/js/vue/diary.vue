<template lang="html">
    <div class="container mb30 mt20" v-if="$store.state.user">
        <h1>diary</h1>

        <div class="diary" v-if="items.length > 0">
            <div class="diary-item" v-for="item in items">
                <div class="diary-circle">
                </div>
                <span class="diary-date">{{ item.createdAt }}</span>
                <div class="diary-content">
                    <h2>{{ item.title}}</h2>
                    <p>{{ item.text }}</p>
                    <router-link :to="{ name: 'detail', params: { postId: item.id }}"><button>Read more</button></router-link>
                </div>

            </div>

        </div>
        <div v-else>
            <div class="six columns">
                <p class="no-items">No posts in database yet.</p>
                <router-link :to="{ name: 'today'}"><button>Create new post</button></router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import firebase from '../lib/firebase';

    export default{
        data: function () {
            return {
                username: 'Unknown',
                items: []
            }
        },

        mounted: function () {
            if(this.$store.state.user) {
                firebase.auth().signInAnonymously().catch((error) => {
                    console.log(error.message);
                }).then(() => {
                    firebase.database().ref('diary').orderByChild('usermail').equalTo(this.$store.state.user.email).on('value', (snapshot) => {
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
            } else {
                this.$router.push({path: "/"});
            }

        }
    }
</script>
<style lang="sass" scoped>
</style>