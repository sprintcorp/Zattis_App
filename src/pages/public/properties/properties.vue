<template>
    <div  class="body">
        <div>
            <div class="header pt-2 pl-5">
                <div class="h3" style="color:black">Properties on Zattis Properties</div>
            </div>
        <b-row class="p-5">
            <b-col sm="12" md="3">
                <div class="h4 card p-2" style="background-color:#e6e2e2;border:0px">Advanced Filter Options</div>

                <b-card bg-variant="light" style="border:0px">
                    <template>
                        <div>
                            <label>Minimum Amount</label>
                            <b-form-select
                            v-model="min"
                            :options="min_options"
                            class="mb-3"
                            value-field="value"
                            text-field="text"
                            disabled-field="notEnabled"
                            ></b-form-select>

                            <label>Maximum Amount</label>
                            <b-form-select
                            v-model="max"
                            :options="max_options"
                            class="mb-3"
                            value-field="value"
                            text-field="text"
                            disabled-field="notEnabled"
                            ></b-form-select>

                            <label>Location</label>
                            <b-form-input v-model="location" placeholder="Ikeja or Baruwa"></b-form-input>
                            <b-row>
                                <b-col>
                                    <b-button variant="info" @click="search()" class="mt-3 text-right"><b-icon-search></b-icon-search></b-button>
                                </b-col>
                                <!-- <b-col></b-col> -->
                                <b-col>
                                    <b-button variant="info" @click="clear()" class="mt-3 text-right"><b-icon-trash></b-icon-trash></b-button>
                                </b-col>
                            </b-row>
                            
                        </div>
                    </template>
                </b-card>
            </b-col>
            <b-col sm="12" md="9" v-if="!loading && houses.length">
                <!-- <pre>{{houses}}</pre> -->
                <b-row>
                            <tr v-for="(house,index) in houses" :key="index"
                            >
                                <b-card
                                    :title=house.name
                                    :img-src=house.image[1]
                                    img-alt="Image"
                                    img-top
                                    img-height="200"
                                    tag="article"
                                    style="width: 20rem;"
                                    class="m-3 products_items b-card"
                                    v-scroll-reveal
                                    
                                >
                                    <b-card-text>
                                        
                                    </b-card-text>

                                    <b-button :to="{name:'property',params:{id:house.slug}}" variant="info">View</b-button>
                                </b-card>
                                </tr>
                        
                </b-row>
                
            </b-col>
            <b-col sm="12" md="9">
                <div class="" v-if="loading">
                    <circular_loader></circular_loader>            
                </div>
                <div v-if="!loading && !houses.length">
                    <no-content>{{message}}</no-content>
                </div>
            </b-col>
        </b-row>
        </div>
        
    </div>
</template>

<script src="./properties.js"></script>

<style scoped>
        @import "./properties.css"
</style>