<template>
    <div  class="body">
        <div>
            <div class="header pt-2 pl-5">
                <div class="h3" style="color:black">Properties on Homin's Properties</div>
            </div>
            <!-- <pre>{{houses[0].houses.length}}</pre> -->
        <b-row class="p-5">
            <b-col sm="12" md="3">


               <div>
                <b-card>
                    <template v-slot:header>
                    <h4 class="mb-0">Categories</h4>
                    </template>

                    <b-list-group v-for="(category,index) in categories" :key="index">
                       <b-link :to="{name:'category-properties',params:{id:category.slug}}" @click="getHouses(category.slug)"> <b-list-group-item>{{category.name}}</b-list-group-item> </b-link>  
                    </b-list-group>

                    
 
                </b-card>
                </div>
                <!-- <div>
                    <b-img v-bind="mainProps" src="https://res.cloudinary.com/sprintcorp/image/upload/v1596838857/zattis/Homin_Property.ng_Logo_2_akazty.jpg"></b-img>
                </div> -->
            </b-col>
            
            <b-col sm="12" md="9" v-if="!loading && houses[0].houses.length">
                <!-- <pre>{{houses}}</pre> -->
                <b-row>
                            <tr v-for="(house,index) in houses[0].houses" :key="index"
                            >
                                <b-card
                                    :title=strLn(house.name)
                                    :img-src=house.image[0]
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
                                    <b-row md="12">
                                        <b-col md="9">
                                            <b-button :to="{name:'property',params:{id:house.slug}}" variant="info">View</b-button>
                                        </b-col>
                                        <b-col md="2">
                                            <div style="font-size:30px" @click="saveHouse(house._id)"><b-icon-heart></b-icon-heart></div>
                                        </b-col>
                                    </b-row>
                                </b-card>
                                </tr>
                        
                </b-row>
                
            </b-col>
            <b-col sm="12" md="9">
                <div class="" v-if="loading">
                    <circular_loader></circular_loader>            
                </div>
                <div v-if="!loading && !houses[0].houses.length">
                    <no-content>{{message}}</no-content>
                </div>
            </b-col>
        </b-row>
        </div>

        <b-modal ref="my-modal" centered hide-footer hide-header-close hide-header title="">
                <div class="d-block text-center">
                    <h5>Only a logged in user can add property to favourite list</h5>
                </div>
                <div class="text-center">
                <b-button class="mt-2 mr-3" variant="outline-danger" @click="hideModal">Close</b-button>
                
                <b-button class="mt-2" variant="outline-warning" @click="login">Login</b-button>
                </div>
            </b-modal>
        
    </div>
</template>

<script src="./properties.js"></script>

<style scoped>
        @import "./properties.css"
</style>