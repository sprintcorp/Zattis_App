<template>
    <div class="body">
        <div class="header p-2 pl-lg-5">
            <div class="h6" style="color:black"><b-icon-house></b-icon-house> Welcome John Doe - Create Property</div>
        </div>

        <b-container>
            <b-card style="width:100%;border:0px">
                 <b-row md="12">
                    
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

                    <b-col md="12">
                        <b-row class="my-2 mb-3">
                            <b-col sm="2">
                            <label for="input-default">Title:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-input id="input-default" v-model="name" placeholder="title"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="my-1 mb-3">
                            <b-col sm="2">
                            <label for="input-default">Price:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-input id="input-default" v-model="price" type="number" placeholder="Price"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="my-1 mb-3">
                            <b-col sm="2">
                            <label for="input-default">Images:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-file
                            @change="uploadFile"
                            v-model="files"
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
                            <b-form-input id="input-default" v-model="address" placeholder="Address"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="my-1 mb-3">
                            <b-col sm="2">
                            <label for="input-default">Category:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-select v-model="category">                                
                                    <b-form-select-option v-for="(category,index) in categories" :key="index" :value=category._id>{{category.name}}</b-form-select-option>                                
                            </b-form-select>
                            </b-col>
                        </b-row>
                        <b-row class="my-1 mb-3">
                            <b-col sm="2">
                            <label for="input-default">Type:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-select v-model="type">                                
                                    <b-form-select-option value="sale">Sale</b-form-select-option>                                
                                    <b-form-select-option value="rent">Rent</b-form-select-option>                                
                            </b-form-select>
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
                                    v-model="description"
                                ></b-form-textarea>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-button class="btn-block" v-if="!loading" variant="info" @click.prevent="createProperty()">SUBMIT</b-button>
                            <b-button class="btn-block" v-if="loading" variant="info">Loading...</b-button>
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