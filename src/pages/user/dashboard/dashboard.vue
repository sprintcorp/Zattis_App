<template>
    <div class="body">
        <div class="header p-2   pl-lg-5">
            <div class="h6" style="color:black"><b-icon-house></b-icon-house> Welcome {{ name }} - Home</div>
        </div>
        <b-container class="mt-5 p-5">
            <b-row md="12">
                <b-col md="4">
                    <b-link :to="{name:'userProperty'}">
                        <b-card class="card-design">
                            <div style="font-size:100px"><b-icon-heart></b-icon-heart></div>
                            <h5>My Saved Property</h5>
                            <p>View Property you have saved</p> 
                        </b-card>
                    </b-link>
                </b-col>
                <b-col md="4">
                    <b-link :to="{name:'userProfile'}">
                        <b-card class="card-design">
                            <div style="font-size:100px"><b-icon-person></b-icon-person></div>
                            <h5>My Profile</h5>
                            <p>View my profile</p> 
                        </b-card>
                    </b-link>
                </b-col>
                <b-col md="4">
                    <b-link :to="{name:'userPassword'}">
                        <b-card class="card-design">
                            <div style="font-size:100px"><b-icon-lock></b-icon-lock></div>
                            <h5>Change Password</h5>
                            <p>Update your password information</p> 
                        </b-card>
                    </b-link>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<style scoped>
    @import "./dashboard.css";
</style>

<script src="./dashboard.js">

</script>