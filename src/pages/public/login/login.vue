<template>
    <div class="container-fluid login-background">
        <b-container>
        <b-row sm="12" md="12" style="position:absolute;top:30%;">                        
            <b-col offset-md="9" offset-sm="0" style="align-items: center;" sm="12" md="12" align-self="center">

                <b-card style="background: rgba(0,0,0,.1)">
                <b-row class="justify-content-center mb-4">
                   <b-link :to="{name:'home'}" style="text-decoration:none"><h2 class="text"><b-icon-house></b-icon-house> Zattis Estate</h2></b-link>
                </b-row>
                    <b-input-group class="mb-4" sm="12" md="12">                                
                        <b-input-group-prepend>
                                        <span class="input-group-text"><b-icon-envelope-fill></b-icon-envelope-fill></span>
                        </b-input-group-prepend>                                    
                        <b-form-input type="text" placeholder="Someone@mail.com" v-model="email"></b-form-input>
                    </b-input-group>                   
                    <b-input-group class="mb-4" sm="12" md="12">                                
                        <b-input-group-prepend>
                                        <span class="input-group-text"><b-icon-lock-fill></b-icon-lock-fill></span>
                        </b-input-group-prepend>                                    
                        <b-form-input type="password" placeholder="********" v-model="password"></b-form-input>
                    </b-input-group>
                    <b-button class="btn-block btn-info mb-2" v-if="!loading" @click.prevent="login()">LOGIN</b-button>
                    <button_loader v-if="loading">Loading...</button_loader>                   
                    <b-row md="12" sm="12">
                        <b-col md="6" >
                           <b-link style="text-decoration:none" :to="{name:'reset-password'}"><h6 class="text"> FORGOT PASSWORD?</h6></b-link>
                        </b-col>
                        <b-col md="6">
                        <b-link style="text-decoration:none" :to="{name:'register'}"><h6 class="text">NEW USER REGISTER</h6></b-link>
                        </b-col>
                    </b-row>
                
                </b-card>
            </b-col>                       
        </b-row>
        </b-container>
    </div>
</template>

<style scoped>
    @import './login.css'
</style>

<script src="./login.js">

</script>