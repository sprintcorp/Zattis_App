<template>
    <div class="body">
        <div class="header p-2   pl-lg-5">
            <div class="h6" style="color:black"><b-icon-house></b-icon-house> Welcome John Doe - Home</div>
        </div>
        <b-container class="mt-5 p-5">
            <b-row md="12" sm="12">
                <b-col md="4" sm="4">
                    <b-link :to="{name:'agents'}">
                        <b-card class="card-design">
                            <div style="font-size:100px"><b-icon-person-bounding-box></b-icon-person-bounding-box></div>
                            <h5> Agent</h5>
                            <p>View Agents</p> 
                        </b-card>
                    </b-link>
                </b-col>
                <b-col md="4" sm="4">
                    <b-link :to="{name:'allProperties'}">
                        <b-card class="card-design">
                            <div style="font-size:100px"><b-icon-house></b-icon-house></div>
                            <h5>Property</h5>
                            <p>View properties</p> 
                        </b-card>
                    </b-link>
                </b-col>
                <b-col md="4" sm="4">
                    <b-link :to="{name:'adminProfile'}">
                        <b-card class="card-design">
                            <div style="font-size:100px"><b-icon-person></b-icon-person></div>
                            <h5>My Profile</h5>
                            <p>View my profile</p> 
                        </b-card>
                    </b-link>
                </b-col>
                
            </b-row>
            <b-row md="12" sm="12">
                <b-col md="4" sm="4">
                    <b-link :to="{name:'users'}">
                        <b-card class="card-design">
                            <div style="font-size:100px"><b-icon-person-lines-fill></b-icon-person-lines-fill></div>
                            <h5> Users</h5>
                            <p>View Users</p> 
                        </b-card>
                    </b-link>
                </b-col>

                <b-col md="4" sm="4">
                    <b-link :to="{name:'adminPassword'}">
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