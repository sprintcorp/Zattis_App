<template>
    <div class="body">
        <div class="header p-2 pl-5">
            <div class="h6" style="color:black"><b-icon-house></b-icon-house> John Doe - My Profile</div>
        </div>
        <b-container fluid  class="mt-5 p-3">
            <b-card style="width:100%">
                 <b-row md="12">
                    <b-col md="3">
                        <b-list-group flush class="text-center">
                            <b-list-group-item class="h4" :to="{name:'user'}"><b-icon-house></b-icon-house> Dashboard</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'userProperty'}"><b-icon-house></b-icon-house> My Property</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'userPassword'}"><b-icon-lock></b-icon-lock> Password</b-list-group-item>
                          
                        </b-list-group>
                    </b-col>
                    <b-col md="3">
                        <div class="text-center">
                            <b-img :src="profile_image" class="mb-2 " height="300px" width="280px"></b-img>
                        </div>
                        <b-row md="12">
                            <input id="fileUpload" type="file" @change="fileChange()" hidden>
                            <b-col md="5">
                                <b-button variant="info" class="btn-block" @click="chooseFiles()"><b-icon-three-dots-vertical></b-icon-three-dots-vertical> Select</b-button>
                            </b-col>
                            <b-col md="2" class="mb-2"></b-col>
                            <b-col md="5">
                                <b-button variant="info" class="btn-block"><b-icon-upload></b-icon-upload> Upload</b-button>
                                
                            </b-col>
                        </b-row>
                    </b-col>

                    <b-col>
                        <b-row class="my-2 mb-3">
                            <b-col sm="2">
                            <label for="input-default">Firstname:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-input id="input-default" placeholder="Firstname"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="my-1 mb-3">
                            <b-col sm="2">
                            <label for="input-default">Lastname:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-input id="input-default" placeholder="Lastname"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="my-1 mb-3">
                            <b-col sm="2">
                            <label for="input-default">Address:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-input id="input-default" placeholder="Address"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="my-1 mb-3">
                            <b-col sm="2">
                            <label for="input-default">Phone:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-input id="input-default" placeholder="Phone"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="my-1 mb-3">
                            <b-col sm="2">
                            <label for="input-default">Email:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-input id="input-default" placeholder="Email"></b-form-input>
                            </b-col>
                        </b-row>

                    </b-col>
                 </b-row>
            </b-card>
        </b-container>
    </div>
</template>

<style scoped>
    @import url("./profile.css");
</style>

<script src="./profile.js">

</script>