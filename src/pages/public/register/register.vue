<template>
<div>
    <div v-if="!loading" class="container-fluid login-background">
        <b-container>
            <b-row sm="12" md="12" class="vertical-center">                        
                <b-col offset-md="9" offset-sm="3" class="text-center" sm="12" xl="12" md="12">

                    <b-card style="background: rgba(0,0,0,.1);max-width: 100%;" >
                        <b-row class="justify-content-center mb-4">
                            <b-link :to="{name:'home'}" style="text-decoration:none"><h2 class="text"><b-icon-house></b-icon-house> Zattis Estate</h2></b-link>
                        </b-row>
                            <b-input-group class="mb-4" sm="12" md="12">                                
                                <b-input-group-prepend>
                                                <span class="input-group-text"><b-icon-person-fill></b-icon-person-fill></span>
                                </b-input-group-prepend>                                    
                                <b-form-input type="text" placeholder="Firstname" v-model="firstname"></b-form-input>
                            </b-input-group>  
                            <b-input-group class="mb-4" sm="12" md="12">                                
                                <b-input-group-prepend>
                                                <span class="input-group-text"><b-icon-person-fill></b-icon-person-fill></span>
                                </b-input-group-prepend>                                    
                                <b-form-input type="text" placeholder="Lastname" v-model="lastname"></b-form-input>
                            </b-input-group>  
                            <b-input-group class="mb-4" sm="12" md="12">                                
                                <b-input-group-prepend>
                                                <span class="input-group-text"><b-icon-envelope-fill></b-icon-envelope-fill></span>
                                </b-input-group-prepend>                                    
                                <b-form-input type="text" placeholder="Email" v-model="email"></b-form-input>
                            </b-input-group> 
                            
                            
                            <b-input-group class="mb-4" sm="12" md="12">                                
                                <b-input-group-prepend>
                                                <span class="input-group-text"><b-icon-award></b-icon-award></span>
                                </b-input-group-prepend>                                    
                                <b-form-select v-model="role">
                                    <b-form-select-option value="user">User</b-form-select-option>
                                    <b-form-select-option value="agent">Agent</b-form-select-option>
                                    
                                </b-form-select>
                            </b-input-group> 



                            <b-input-group class="mb-4" sm="12" md="12">                                
                                <b-input-group-prepend>
                                                <span class="input-group-text"><b-icon-map></b-icon-map></span>
                                                
                                </b-input-group-prepend>                                    
                                <b-form-input type="text" placeholder="Address" v-model="address"></b-form-input>
                            </b-input-group>  

                            <b-input-group class="mb-4" sm="12" md="12">                                
                                <b-input-group-prepend>
                                                <span class="input-group-text"><b-icon-lock-fill></b-icon-lock-fill></span>
                                </b-input-group-prepend>                                    
                                <b-form-input type="password" placeholder="********" v-model="password"></b-form-input>
                            </b-input-group>
                            
                            <b-button class="btn-block btn-info mb-2" @click.prevent="register">REGISTER</b-button>                   
                            <b-row md="12" sm="12">
                                <b-col md="12" class="text-center">
                                    <b-link style="text-decoration:none" :to="{name:'login'}"><h6 class="text">Already have an account? Login</h6></b-link>
                                </b-col>
                            </b-row>
                    
                    </b-card>
                </b-col>                       
            </b-row>
        </b-container>
        
    </div>
    <div v-if="loading"><grow_loader ></grow_loader></div>
</div>
</template>

<style scoped>
    @import './register.css'
</style>

<script src="./register.js">

</script>