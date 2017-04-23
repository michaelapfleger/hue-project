<template lang="html">
    <div class="container">

    </div>
</template>
<script>
    import firebase from '../lib/firebase';
    import Login from "../vue/login.vue";

    export default{
        data: function () {
            return {

            }
        },
        methods: {

        },
        created: function () {
            if(this.$store.state.user) {
              this.$store.dispatch('logout');
            } else {
                this.$router.push({path: "/"});
            }
        }
    }
</script>
<style lang="sass" scoped>
</style>