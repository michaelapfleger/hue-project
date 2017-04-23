<template lang="html">
    <div class="container">
        <div class="diary-detail">
            <div v-if="item" class="twelve columns">
                <h1>{{ item.title }}</h1>

                <div class="six columns text">
                    <p class="details-text"> {{ item.text }}</p>
                </div>



                <div class="six columns">
                    <div class="details-info">

                        <span v-if="item.feeling" class="details-feeling">
                           <i class="material-icons">{{ feelings[item.feeling] }}</i> {{ feelingsText[item.feeling] }}
                        </span>
                        <span class="details-date">
                           <i class="material-icons">date_range</i> {{ item.createdAt }}
                        </span>

                        <span v-if="item.companions" class="details-companions">
                             <i class="material-icons">wc</i>  with {{ item.companions }}
                        </span>


                        <span v-if="item.pos" class="details-position">
                             <i class="material-icons">place</i>  {{ item.pos }}
                        </span>
                    </div>
                </div>
                <div v-if="item.image" class="twelve columns">
                    <div class="twelve columns image-divider">

                    </div>
                    <div class="image-wrapper">
                    <img :src="item.image" />
                    </div>
                </div>
                <div class="twelve columns bottom-divider">

                    <i class="material-icons">favorite_border</i>

                </div>


            </div>
            <div v-else>
                Loading
            </div>
            <router-link to="/diary"><button>Back</button></router-link>    
        </div>
    </div>
</template>
<script>
    import firebase from '../lib/firebase';
    import VueRouter from "vue-router";
    export default{
        data: function () {
            return {
                projectId: this.$route.params.projectId,
                item: null,
                feelings: [
                        'mood',
                        'sentiment_very_dissatisfied',
                        'sentiment_dissatisfied',
                        'sentiment_neutral',
                        'sentiment_satisfied',
                        'sentiment_very_satisfied'
                ],
                feelingsText: [
                    'mood',
                    'very dissatisfied',
                    'dissatisfied',
                    'neutral',
                    'satisfied',
                    'very satisfied'
                ]
            }
        },

        mounted: function () {
            firebase.auth().signInAnonymously().catch(function(error) {
                console.log(error.message);
            }).then(() => {
                firebase.database().ref('diary').orderByKey().equalTo(this.projectId).on('value', (snapshot) => {
                    snapshot.forEach((childSnapshot) => {
                        var childData = childSnapshot.val();
                        var date = new Date(childData.createdAt);
                        childData.createdAt = date.getDate() + "." + (date.getMonth()+1) + "."+date.getFullYear();
                        this.item = childData;
                    });
                });
            });
        }
    }
</script>
<style lang="sass" scoped>
</style>