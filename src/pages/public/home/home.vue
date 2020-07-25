<template>
    <div>
        <div class="banner">
            <b-container>
                
                    <b-row class="justify-content-center" style="position:absolute;top:70%;left:16%;width:70%;">                        
                        <b-col sm="12" md="12" align-self="center">
                            <b-input-group>
                               <template v-slot:prepend>
                                    <b-dropdown variant="info" v-model="option">                                        
                                        <b-dropdown-item>Rent</b-dropdown-item>
                                        <b-dropdown-item>Sale</b-dropdown-item>
                                    </b-dropdown>
                                </template>
                                
                                <b-form-input placeholder="Example: Lagos, Ikeja, Shomolu" v-model="place"></b-form-input>
                                <b-input-group-prepend>
                                    <span class="input-group-text"><b-icon-search></b-icon-search></span>
                                </b-input-group-prepend>
                            </b-input-group>
                        </b-col>                       
                    </b-row>
                


            </b-container>
        </div>
        <div class="p-4 list-color">
            <section>
                <b-container>
                    <b-row sm="12" md="12">
                        <b-col sm="4" md="4">
                            <b-row>
                                <h3 class="ml-4"><b-icon-plus></b-icon-plus>Add Property</h3>
                                <p>You can easily add your own listing</p>
                                
                            </b-row>
                            <b-row class="ml-5">
                                <b-button class="btn btn-info">Add Listing <b-icon-box-arrow-right></b-icon-box-arrow-right></b-button>
                            </b-row>

                        </b-col>

                        <b-col sm="4" md="4">
                             <b-row>
                                <h3 class="ml-5"><b-icon-map></b-icon-map> View On Maps</h3>
                                <p>You can easily search and see results on maps</p>
                                
                            </b-row>
                            <b-row class="ml-5">
                                <b-button class="btn btn-info">Search by Map <b-icon-box-arrow-right></b-icon-box-arrow-right></b-button>
                            </b-row>
                        </b-col>

                        <b-col sm="4" md="4">
                             <b-row>
                                <h3 class="ml-5"><b-icon-credit-card></b-icon-credit-card> Property Prices</h3>
                                <p>Check the average prices on different properties</p>
                                
                            </b-row>
                            <b-row class="ml-5">
                                <b-button class="btn btn-info">Property Prices <b-icon-box-arrow-right></b-icon-box-arrow-right></b-button>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-container>
            </section>
        </div>
    
        <b-container class="mt-3 mb-3 list-info p-5" md="12" sm="12" v-scroll-reveal="{delay:500}">
            <b-row>
                <b-col md="4" sm="4" class="text-center"> 
            <!-- <transition
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                appear
            >                    -->
                   <div class="h1"> <animate-number from="1" to="2300" duration="6000" easing="easeOutQuad"></animate-number></div>
                   <p>Properties</p>
            <!-- </transition> -->
                   

                </b-col>
                <b-col md="4" sm="4" class="text-center">                    
                   <div class="h1">  <div class="h1"> <animate-number from="1" to="56" duration="3000" easing="easeOutQuad"></animate-number></div></div>
                   <p>Agents</p>
                </b-col>
                <b-col md="4" sm="4" class="text-center">                    
                   <div class="h1">  <div class="h1"> <animate-number from="1" to="345" duration="4000" easing="easeOutQuad"></animate-number></div></div>
                   <p>Users</p>
                </b-col>
            </b-row>
        </b-container>
       
        <div class="p-5">
            <section>
                <b-row sm="12" md="12" v-scroll-reveal="{delay:800}">
                    <b-col sm="12" md="5" offset-md="1">
                        <div class="row mb-5">
                            <div class=""><h4>Categories</h4></div>
                            <div class="text-justify">
                                <a class="mr-3" style="color:black" ><b-badge>Villa for sale</b-badge></a>
                                <a class="mr-3" style="color:black" ><b-badge>Land For Sale</b-badge></a>
                                <a class="mr-3" style="color:black" ><b-badge>2 Bedroom flat for rent</b-badge></a>
                                <a class="mr-3" style="color:black" ><b-badge>3 Bedroom flat for rent</b-badge></a>
                                <a class="mr-3" style="color:black" ><b-badge>Duplex for sale</b-badge></a>
                                <a class="mr-3" style="color:black" ><b-badge>Duplex for rent</b-badge></a>
                                <a class="mr-3" style="color:black" ><b-badge>Office space for sale</b-badge></a>
                                <a class="mr-3" style="color:black" ><b-badge>Office space for rent</b-badge></a>
                                <a class="mr-3" style="color:black" ><b-badge>Shop for sale</b-badge></a>
                                <a class="mr-3" style="color:black" ><b-badge>Shop for rent</b-badge></a>
                                <a class="mr-3" style="color:black" ><b-badge>Warehouse for sale</b-badge></a>
                                <a class="mr-3" style="color:black" ><b-badge>Warehouse for rent</b-badge></a>
                                <a class="mr-3" style="color:black"> <b-badge>House for sale</b-badge></a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="h4">About Zattis Properties</div>
                            <div>
                                <p class="text-justify">Zattis Properties is a real estate and property website in Nigeria with property listings for sale,
                                     rent and lease. We offer Nigerian property seekers an easy way to find details of property like homes,
                                      houses, lands, shops, office spaces and other commercial properties to buy or rent. Nigeria Property Centre
                                       provides a platform for advertising property from organisations and Nigerian private property owners.
                                </p>
                            </div>
                        </div>
                    </b-col>
                    
                    <b-col sm="12" md="6">
                        <div class=""><h4>Latest Listed Properties</h4></div>
                        <b-card-group deck>
                            <b-card
                                title="Inn For sale"
                                img-src="https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&w=1000&q=80"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2"
                            >
                                <b-card-text>
                                
                                </b-card-text>

                                <b-button :to="{name:'property',params:{id:1}}" variant="info">View</b-button>
                            </b-card>
                            <b-card
                                title="Duplex for sale"
                                img-src="https://freshome.com/wp-content/uploads/2018/09/contemporary-exterior.jpg"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2"
                            >
                                <b-card-text>
                                
                                </b-card-text>

                                <b-button :to="{name:'property',params:{id:2}}" variant="info">View</b-button>
                            </b-card>
                        </b-card-group>
                            
                        
                        
                    </b-col>
                </b-row>
            </section>
        </div>
    </div>
</template>

<style scoped>
  @import "./home.css";

   
</style>

<script src="./home.js"></script>

