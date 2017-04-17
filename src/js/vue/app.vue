<template lang="html">
    <div class="wrapper">
        <header>
            <div class="row">
                <div class="wrapper">
                    <label for="show-menu" class="show-menu"><i class="material-icons">menu</i></label>
                    <input type="checkbox" id="show-menu" role="button">
                    <ul id="menu">
                        <li class="icon-border"><router-link to="/"><i class="material-icons">favorite_border</i></router-link></li>
                        <li><router-link to="/today">Today</router-link></li>
                        <li><router-link to="/diary">Diary</router-link></li>
                        <li><router-link to="/profile">Profile</router-link></li>
                        <li><router-link to="/about">About</router-link></li>

                    </ul>
                </div>
            </div>
        </header>

        <router-view></router-view>
    </div>
</template>
<script>
    export default {


    }
</script>

<style lang="sass" scoped>
</style>