<template>
    <div>
        <b-navbar toggleable="lg" type="dark" class="navbar" variant="info">
            <b-navbar-brand class="ml-5" :to="{name:'home'}">Zattis Estate</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="m-auto text-light">
                <b-nav-item :to="{name:'home'}">Zattis Home </b-nav-item>
                <b-nav-item :to="{name:'properties'}">Zattis Properties </b-nav-item>
                <b-nav-item :to="{name:'sellers'}">Zattis Agents</b-nav-item>
                <b-nav-item :to="{name:'agentProperty'}">My Properties</b-nav-item>
               
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                
                <b-nav-item-dropdown right>
                    <template v-slot:button-content>
                    <b-avatar class="mr-3"></b-avatar>
                    <span class="mr-auto">J. Circlehead</span>
                    </template>
                    <!-- <b-badge>5</b-badge> -->
                    <b-dropdown-item :to="{name:'agentProfile'}">Profile</b-dropdown-item>
                    <b-dropdown-item :to="{name:'login'}">Logout</b-dropdown-item>
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