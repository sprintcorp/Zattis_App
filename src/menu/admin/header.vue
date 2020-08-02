<template>
    <div>
        <b-navbar toggleable="lg" type="dark" class="navbar" variant="info">
            <b-navbar-nav class="text-light ml-3" style="font-size:40px" v-b-toggle.sidebar-1><b-icon-list></b-icon-list></b-navbar-nav>
            <b-navbar-brand class="ml-5" :to="{name:'home'}">Zattis Estate</b-navbar-brand>
            
            <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->

            <!-- <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="m-auto text-light">
                <b-nav-item :to="{name:'home'}">Dashbord </b-nav-item>
                <b-nav-item >Zattis Properties </b-nav-item>
                <b-nav-item>Zattis Agents</b-nav-item>
                <b-nav-item>Zattis Users</b-nav-item>
               
            </b-navbar-nav>

           
            <b-navbar-nav class="ml-auto">
                
                <b-nav-item-dropdown right>
                    <template v-slot:button-content>
                    <b-avatar class="mr-3"></b-avatar>
                    <span class="mr-auto">J. Circlehead</span>
                    </template>
                   
                    <b-dropdown-item :to="{name:'agentProfile'}">Profile</b-dropdown-item>
                    <b-dropdown-item :to="{name:'login'}">Logout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse> -->
        </b-navbar>

        <b-sidebar id="sidebar-1" title="Fred Adebayo" shadow>
            <div class="px-3 py-2">
                <b-img src="https://picsum.photos/200/200/?image=54"  height="200" width="287"></b-img>
                <b-list-group flush class="">
                            <b-list-group-item class="h4" :to="{name:'admin'}"><b-icon-box></b-icon-box> Dashboard</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'allProperties'}"><b-icon-house-fill></b-icon-house-fill> Property</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'agents'}"><b-icon-person-bounding-box></b-icon-person-bounding-box> Agent</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'users'}"><b-icon-person-lines-fill></b-icon-person-lines-fill> User</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'adminProfile'}"><b-icon-person-fill></b-icon-person-fill> Profile</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'adminPassword'}"><b-icon-lock-fill></b-icon-lock-fill> Password</b-list-group-item>
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