<template lang="html">
    <div class="container mb30">
        <h1>diary</h1>
        <p>hier kommt die timeline hin</p>
        <div class="diary">
            <div class="diary-item" v-for="item in items">
                <div class="diary-circle">
                    <!-- image -->
                </div>
                <span class="diary-date">{{ item.date }}</span>
                <div class="diary-content">
                    <h2>{{ item.title}}</h2>
                    <p>{{ item.text }}</p>
                    <button>read more</button>

                </div>

            </div>

        </div>
    </div>
</template>
<script>
    export default{
        data: function () {
            return {
                items: [
                    {
                        title: 'Very nice day in the zoo',
                        text: 'Lorem ipsum Text blabal das hier macht keinen Sinn aber es sieht gut aus.',
                        date: '20.2.2017'
                    },
                    {
                        title: 'Sunny day at the beach',
                        text: 'Lorem ipsum Text blabal das hier macht keinen Sinn aber es sieht gut aus.',
                        date: '21.2.2017'
                    },
                    {
                        title: 'Chillout with the friends at the lake',
                        text: 'Lorem ipsum Text blabal das hier macht keinen Sinn aber es sieht gut aus.',
                        date: '23.2.2017'
                    },
                    {
                        title: 'Lazy rainy day',
                        text: 'Lorem ipsum Text blabal das hier macht keinen Sinn aber es sieht gut aus.',
                        date: '1.4.2017'
                    }

                ]
            }
        }
    }
</script>
<style lang="sass" scoped>
</style>