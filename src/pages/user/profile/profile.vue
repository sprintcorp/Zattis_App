<template>
    <div class="body">
        <div v-if="!loading">
            <div class="header p-2 pl-5">
                <div class="h6" style="color:black"><b-icon-house></b-icon-house> {{ name }} - My Profile</div>
            </div>
            <b-container  class="mt-5 p-3">
                <!-- {{ profile_image }} -->
                <b-card style="width:100%">
                    <b-row md="12">
                    
                        <b-col md="3">
                            <div class="text-center">
                                <b-img :src="profile_image" class="mb-2 " height="260px" width="240px"></b-img>
                            </div>
                            <b-row md="12">
                                <input id="fileUpload" ref="fileInput" type="file" @change="fileChange()" hidden>
                                <b-col md="12">
                                    <b-button variant="info" class="btn-block" @click="chooseFiles()"><b-icon-three-dots-vertical></b-icon-three-dots-vertical> Select</b-button>
                                </b-col>
                                
                            </b-row>
                        </b-col>
                        <b-col md="1"></b-col>

                        <b-col md="8">
                            <b-row class="my-2 mb-3">
                                <b-col sm="2">
                                <label for="input-default">Firstname:</label>
                                </b-col>
                                <b-col sm="10">
                                <b-form-input id="input-default" v-model="user.firstname" placeholder="Firstname"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1 mb-3">
                                <b-col sm="2">
                                <label for="input-default">Lastname:</label>
                                </b-col>
                                <b-col sm="10">
                                <b-form-input id="input-default" v-model="user.lastname" placeholder="Lastname"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1 mb-3">
                                <b-col sm="2">
                                <label for="input-default">Address:</label>
                                </b-col>
                                <b-col sm="10">
                                <b-form-input id="input-default" v-model="user.address" placeholder="Address"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1 mb-3">
                                <b-col sm="2">
                                <label for="input-default">Phone:</label>
                                </b-col>
                                <b-col sm="10">
                                <b-form-input id="input-default" v-model="user.phone" placeholder="Phone"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1 mb-3">
                                <b-col sm="2">
                                <label for="input-default">Email:</label>
                                </b-col>
                                <b-col sm="10">
                                <b-form-input id="input-default" v-model="user.email" placeholder="Email"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="mt-5 text-right">
                                <b-col class="">
                                    <b-button v-if="!saving" class="" variant="info" @click.prevent="updateUserInformation()">UPDATE</b-button>
                                    <button_loader v-if="saving">Saving...</button_loader>
                                </b-col>
                            </b-row>

                        </b-col>
                    </b-row>
                </b-card>
            </b-container>
        </div>
        <div class="" v-if="loading">
            <circular_loader></circular_loader>            
        </div>
    </div>
</template>

<style scoped>
    @import url("./profile.css");
</style>

<script src="./profile.js">

</script>