<template>
    <div class="container-fluid login-background">
        <b-container>
        <b-row sm="12" md="12" class="vertical-center">                        
            <b-col offset-md="9" offset-sm="0" style="align-items: center;" sm="12" md="12" align-self="center">

                <b-card style="background: rgba(0,0,0,.1)">
                <b-row class="justify-content-center mb-4">
                   <b-link :to="{name:'home'}" style="text-decoration:none"><h2 class="text"><b-icon-house></b-icon-house> Zattis Estate</h2></b-link>
                </b-row>
                    <b-input-group class="mb-4" sm="12" md="12">                                
                        <b-input-group-prepend>
                            <span class="input-group-text"><b-icon-lock></b-icon-lock></span>
                        </b-input-group-prepend>                                    
                        <b-form-input type="password" placeholder="new password" v-model="new_password"></b-form-input>
                    </b-input-group>                   
                                   
                    
                    <b-button class="btn-block btn-info mb-2" @click.prevent="resetPassword()">UPDATE</b-button>                   
                    <b-row md="12" sm="12">
                        <!-- <b-col md="12" class="text-center">
                          <b-link style="text-decoration:none" :to="{name:'login'}"> <h6 class="text"> GO BACK TO LOGIN PAGE</h6></b-link>
                        </b-col> -->
                       
                    </b-row>
                
                </b-card>
            </b-col>                       
        </b-row>
        </b-container>
    </div>
</template>

<style scoped>
    @import './password.css'
</style>

<script src="./password.js">

</script>