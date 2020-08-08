<template>
    <div>
        <b-navbar toggleable="lg" type="dark" class="navbar" variant="info">
            <!-- <b-img src="../../assets/PNG/Asset9.png"></b-img> -->
            <b-navbar-brand class="ml-5" :to="{name:'home'}"><b-img v-bind="mainProps" src="https://res.cloudinary.com/sprintcorp/image/upload/v1596839998/zattis/PNG/Asset_15_lq0rgr.png" ></b-img></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="m-auto text-light">
                <b-nav-item :to="{name:'home'}">Home </b-nav-item>
                <b-nav-item :to="{name:'properties'}">Properties </b-nav-item>
                <b-nav-item :to="{name:'sellers'}">Agents</b-nav-item>
                
                <!-- <b-nav-item href="#" @click="displaySearchForm">Search</b-nav-item> -->
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">             

                <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template v-slot:button-content>
                    <b-button style="color:white" variant="outline-none">
                            <b-icon icon="person-fill"></b-icon> Account
                        </b-button>
                    </template>
                    <b-dropdown-item :to="{name:'login'}">Login</b-dropdown-item>
                    <b-dropdown-item :to="{name:'register'}">Register</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>


    </div>
</template>

<style scoped>
    @import url("./header.css");
</style>

<script src="./header.js">

</script>