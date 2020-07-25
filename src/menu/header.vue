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
                <!-- <b-nav-item href="#" @click="displaySearchForm">Search</b-nav-item> -->
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <!-- <b-nav-form v-if="show">
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search" style="width:250px"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form> -->

               

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

<script src="./header.js">

</script>