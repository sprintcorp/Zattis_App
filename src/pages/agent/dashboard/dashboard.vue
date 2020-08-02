<template>
    <div class="body">
        <div class="header p-2   pl-lg-5">
            <div class="h6" style="color:black"><b-icon-house></b-icon-house> Welcome John Doe - Home</div>
        </div>
        <b-container class="mt-5 p-5">
            <b-row md="12" sm="12">
                <b-col md="3" sm="6">
                    <b-link :to="{name:'createProperty'}">
                        <b-card class="card-design">
                            <div style="font-size:100px"><b-icon-plus></b-icon-plus></div>
                            <h5>Add Property</h5>
                            <p>Add property for Rent or Sale</p> 
                        </b-card>
                    </b-link>
                </b-col>
                <b-col md="3" sm="6">
                    <b-link :to="{name:'agentProperties'}">
                        <b-card class="card-design">
                            <div style="font-size:100px"><b-icon-house></b-icon-house></div>
                            <h5>My Property</h5>
                            <p>View my property</p> 
                        </b-card>
                    </b-link>
                </b-col>
                <b-col md="3" sm="6">
                    <b-link :to="{name:'agentProfile'}">
                        <b-card class="card-design">
                            <div style="font-size:100px"><b-icon-person></b-icon-person></div>
                            <h5>My Profile</h5>
                            <p>View my profile</p> 
                        </b-card>
                    </b-link>
                </b-col>
                <b-col md="3" sm="6">
                    <b-link :to="{name:'agentPassword'}">
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