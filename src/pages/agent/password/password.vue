<template>
    <div class="body">
         <div class="header p-2 pl-5">
            <div class="h6" style="color:black"><b-icon-house></b-icon-house> John Doe - Security Settings</div>
        </div>
         <b-container class="mt-5 p-3">
            <b-card style="width:100%">
                <!-- {{ disabled }} -->
                 <b-row md="12">
                                      

                    <b-col>
                        <b-row class="my-2 mb-3">
                            <b-col sm="2">
                            <label for="input-default">Current Password:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-input type="password" id="input-default" v-model="old_password" placeholder="Current Password"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="my-1 mb-3">
                            <b-col sm="2">
                            <label for="input-default">New Password:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-input type="password" :state="validation"  @blur="checkPasswordMatch()" id="input-default" v-model="new_password" placeholder="New Password"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="my-1 mb-3">
                            <b-col sm="2">
                            <label for="input-default">Confirm Password:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-input type="password" :state="validation" @blur="checkPasswordMatch()" id="input-default" v-model="confirm_password" placeholder="Confirm Password"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-button v-if="!loading" class="btn-block" variant="info" :disabled=disabled @click.prevent="updatePassword">UPDATE</b-button>
                            <b-button v-if="loading" class="btn-block" variant="info" :disabled=disabled><strong>Saving...</strong></b-button>
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