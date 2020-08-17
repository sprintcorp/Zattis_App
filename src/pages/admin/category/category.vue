<template>
    <div class="body">
         <div class="header p-2   pl-lg-5">
            <div class="h6" style="color:black"><b-icon-house></b-icon-house> Welcome John Doe - Category</div>
        </div>
        <b-row class="p-5" md="12" sm="12">
            <b-col md="4" sm="3">
                <b-card bg-variant="light" style="border:0px">
                    <template>
                        <div>
                            <label></label>
                            <b-form-input
                            v-model="name"
                            class="mb-3"
                            placeholder="Name"
                            ></b-form-input>

                            <label></label>
                            <b-form-textarea
                            v-model="description"
                                id="textarea-rows"
                                placeholder="Description"
                                rows="4"
                                maxlength="100"
                            ></b-form-textarea>
                            <b-span style="color:red">N:B Maximum Description length 100</b-span>
                            <b-row class="text-right">
                                <b-col>
                                    
                                    <b-button variant="info" class="mt-3 text-right" @click.prevent="createCategory()">Create</b-button>
                                </b-col>
                            </b-row>

                            
                        </div>
                    </template>
                </b-card>
            </b-col>
            
            <b-col v-if="!loading && categories.length" md="8" sm="4">
                <b-row>
                <tr v-for="(category,index) in categories" :key="index">
                    <b-card
                        :title=category.name
                        tag="article"
                        style="width: 19rem;height:12rem;"
                        class="mb-2 mr-1"
                    >
                        <b-card-text>
                        {{ category.description }}
                        </b-card-text>
                    <b-row class="text-right">
                        <b-col>
                            <h3><b-icon-trash @click="deleteCategory(category._id)"></b-icon-trash></h3>
                        </b-col>
                    </b-row>
                    </b-card>
                </tr>
                </b-row>
            </b-col>
            <b-col md="6" sm="4">
                <div class="" v-if="loading">
                    <circular_loader></circular_loader>            
                </div>
                <div v-if="!loading && !categories.length">
                    <no-content>{{message}}</no-content>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<style scoped>
    @import url("./category.css");
</style>

<script src="./category.js">

</script>