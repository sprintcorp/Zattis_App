<template>
    <div>
        <b-navbar toggleable="lg" type="dark" class="navbar" variant="info">
            <b-navbar-nav class="text-light ml-3" style="font-size:40px" v-b-toggle.sidebar-1><b-icon-list></b-icon-list></b-navbar-nav>
            <b-navbar-brand class="ml-5" :to="{name:'home'}">Zattis Estate</b-navbar-brand>

        </b-navbar>

        <b-sidebar id="sidebar-1" title="Fred Adebayo" shadow>
            <div class="px-3 py-2">
                <b-img src="https://picsum.photos/200/200/?image=54"  height="200" width="287"></b-img>
                <b-list-group flush class="">
                            <b-list-group-item class="h4" :to="{name:'agent'}"><b-icon-box></b-icon-box> Dashboard</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'createProperty'}"><b-icon-plus></b-icon-plus> Add Property</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'agentProperties'}"><b-icon-house-fill></b-icon-house-fill> My Property</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'agentProfile'}"><b-icon-person-fill></b-icon-person-fill> My Profile</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'agentPassword'}"><b-icon-lock-fill></b-icon-lock-fill> Password</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'login'}"><b-icon-door-closed-fill></b-icon-door-closed-fill> Logout</b-list-group-item>
                          
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