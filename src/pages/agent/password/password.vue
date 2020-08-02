<template>
    <div class="body">
         <div class="header p-2 pl-5">
            <div class="h6" style="color:black"><b-icon-house></b-icon-house> John Doe - Security Settings</div>
        </div>
         <b-container fluid  class="mt-5 p-3">
            <b-card style="width:100%">
                 <b-row md="12">
                    <b-col md="3">
                        <b-list-group flush class="">
                            <b-list-group-item class="h4" :to="{name:'agent'}"><b-icon-box></b-icon-box> Dashboard</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'createProperty'}"><b-icon-plus></b-icon-plus> Add Property</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'agentProperties'}"><b-icon-house></b-icon-house> My Property</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'agentProfile'}"><b-icon-person></b-icon-person> My Profile</b-list-group-item>
                          
                        </b-list-group>
                    </b-col>
                   

                    <b-col>
                        <b-row class="my-2 mb-3">
                            <b-col sm="2">
                            <label for="input-default">Current Password:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-input type="password" id="input-default" placeholder="Current Password"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="my-1 mb-3">
                            <b-col sm="2">
                            <label for="input-default">New Password:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-input type="password" id="input-default" placeholder="New Password"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="my-1 mb-3">
                            <b-col sm="2">
                            <label for="input-default">Confirm Password:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-input type="password" id="input-default" placeholder="Confirm Password"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-button class="btn-block" variant="info">UPDATE</b-button>
                        </b-row>

                    </b-col>
                 </b-row>
            </b-card>
        </b-container>
    </div>
</template>

<style scoped>
    @import url("./password.css");
</style>

<script src="./password.js">

</script>