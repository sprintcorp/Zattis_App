<template>
    <div class="body">
        <div class="header p-2 pl-lg-5">
            <div class="h6" style="color:black"><b-icon-house></b-icon-house> Welcome John Doe - Create Property</div>
        </div>

        <b-container fluid>
            <b-card style="width:100%;border:0px">
                 <b-row md="12">
                    <b-col md="3">
                        <b-list-group flush class="">
                            <b-list-group-item class="h4" :to="{name:'agent'}"><b-icon-box></b-icon-box> Dashboard</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'agentProfile'}"><b-icon-person></b-icon-person> My Profile</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'agentProperties'}"><b-icon-house></b-icon-house> My Property</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'agentPassword'}"><b-icon-lock></b-icon-lock>My Password</b-list-group-item>
                          
                        </b-list-group>
                    </b-col>
                    <!-- <b-col md="3">
                        <div class="text-center">
                            <div @click="chooseFiles()"><b-card class="mb-2"  height="300px" width="280px"></b-card></div>
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
                    </b-col> -->

                    <b-col md="8">
                        <b-row class="my-2 mb-3">
                            <b-col sm="2">
                            <label for="input-default">Name:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-input id="input-default" placeholder="name"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="my-1 mb-3">
                            <b-col sm="2">
                            <label for="input-default">Price:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-input id="input-default" type="number" placeholder="Price"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="my-1 mb-3">
                            <b-col sm="2">
                            <label for="input-default">Images:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-file
                            v-model="file"
                            multiple 
                            placeholder="Choose a file or drop it here..."
                            drop-placeholder="Drop file here..."
                            ></b-form-file>
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
                            <label for="input-default">Category:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-select v-model="category" :options="options"></b-form-select>
                            </b-col>
                        </b-row>
                        <b-row class="my-1 mb-3">
                            <b-col sm="2">
                            <label for="input-default">Network:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-tags input-id="tags-basic" v-model="network" class="mb-2" placeholder="Network coverage e.g MTN, Airtel"></b-form-tags>
                            </b-col>
                        </b-row>
                        <b-row class="my-1 mb-3">
                            <b-col sm="2">
                            <label for="input-default">Features:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-tags input-id="tags-basic" v-model="features" class="mb-2" placeholder="House Features"></b-form-tags>
                            </b-col>
                        </b-row>
                        <b-row class="my-1 mb-3">
                            <b-col sm="2">
                            <label for="input-default">Description:</label>
                            </b-col>
                            <b-col sm="10">
                                <b-form-textarea
                                    placeholder="House Description"
                                    rows="8"
                                ></b-form-textarea>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-button class="btn-block" variant="info">SUBMIT</b-button>
                        </b-row>

                    </b-col>
                 </b-row>
            </b-card>
        </b-container>
    </diV>
</template>

<style scoped>
    @import url("./create.css");
</style>

<script src="./create.js">

</script>