<template lang="html">
    <div class="wrapper">
        <header>
            <div class="row">
                <div class="wrapper">
                    <label for="show-menu" class="show-menu"><i class="material-icons">menu</i></label>
                    <input type="checkbox" id="show-menu" role="button">
                    <ul id="menu">
                        <li class="icon-border"><router-link to="/home"><i class="material-icons">favorite_border</i></router-link></li>
                        <li><router-link to="/today">today</router-link></li>
                        <li><router-link to="/diary">diary</router-link></li>
                        <li><router-link to="/profile">profile</router-link></li>
                        <li><router-link to="/logout">logout</router-link></li>

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