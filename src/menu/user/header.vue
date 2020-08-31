<template>
    <div>
        <b-navbar toggleable="lg" type="dark" class="navbar" variant="info">
            <b-navbar-nav class="text-light ml-3" style="font-size:40px" v-b-toggle.sidebar-1><b-icon-list></b-icon-list></b-navbar-nav>
            <b-navbar-brand class="ml-5" :to="{name:'home'}"><b-img v-bind="mainProps" src="https://res.cloudinary.com/sprintcorp/image/upload/v1596839998/zattis/PNG/Asset_15_lq0rgr.png" ></b-img></b-navbar-brand>

        </b-navbar>


        <b-sidebar id="sidebar-1" :title=name shadow>
            <div class="px-3 py-2">
                <b-img :src=image  height="200" width="287"></b-img>
                
                <b-list-group flush class="">
                            <b-list-group-item class="h4" :to="{name:'user'}"><b-icon-box></b-icon-box> Dashboard</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'userProperty'}"><b-icon-heart-fill></b-icon-heart-fill> My Property</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'properties'}"><b-icon-house-fill></b-icon-house-fill>  Properties</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'userProfile'}"><b-icon-person-fill></b-icon-person-fill> My Profile</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'userPassword'}"><b-icon-lock-fill></b-icon-lock-fill> Password</b-list-group-item>
                           <b-list-group-item class="h4" @click="logout()"><b-icon-door-closed-fill></b-icon-door-closed-fill> Logout</b-list-group-item>
                          
                </b-list-group>
            </div>
        </b-sidebar>
    </div>
</template>
<style scoped>
    @import url("./header.css");
</style>
<script src="./header.js">

</script>