<template>
    <div class="body">
        <!-- {{ loading }} -->
        <!-- <pre>{{house[0]}}</pre> -->
        <div>
        
            <div class="header pt-2 pl-5">
                <div class="h3" style="color:black">Properties on Zattis Properties</div>
            </div>
            <b-row class="p-5">
                <b-col md="8" sm="12">
                    <div class="mb-3">
                        <b-btn :to="{name:'properties'}" variant="outline-info"><b-icon-arrow-bar-left></b-icon-arrow-bar-left> Back</b-btn>
                        
                    </div>
                    <div> 
                        <b-row>
                            <b-col md="9">
                                <h4>{{ house[0].name }}</h4> 
                            </b-col>
                            <b-col md="3">
                                <h4>₦ {{ house[0].price }}</h4> 
                            </b-col>
                        </b-row>
                        <b-icon-map></b-icon-map> {{ house[0].city }}, {{ house[0].neighborhood }}
                    </div>
                
                        <div>
                            
                                <b-carousel
                                id="carousel-1"
                                v-model="slide"
                                :interval="4000"
                                controls
                                background="#ababab"
                                img-width="50px"
                                height="50"
                                style="text-shadow: 1px 1px 2px #333;"
                                @sliding-start="onSlideStart"
                                @sliding-end="onSlideEnd"
                                >
                                <div v-for="(image, index) in  house[0].image" :key="index">
                                    <b-carousel-slide :img-src="image"></b-carousel-slide>
                                </div>
                                

                                </b-carousel>
                            

                        <div class="mt-5">
                                <b-card no-body>
                                    <b-tabs v-model="tabIndex" small card>
                                        
                                        <b-tab title="Description">
                                            <p>{{ house[0].description }}</p>
                                            <b-list-group>
                                                <b-list-group-item href="#"><b-icon-map></b-icon-map> {{house[0].address}}</b-list-group-item>
                                            </b-list-group>
                                        <!-- <b-card>{{ house[0].description }}</b-card> -->
                                        </b-tab>
                                        
                                        <b-tab title="Features and Network Coverage">
                                            <h6>Features</h6>
                                            <b-row>                                                
                                                <div class="pr-1" v-for="(feature, index) in  house[0].features" :key="index">
                                                    <h5><b-badge variant="info">{{feature}}</b-badge></h5>
                                                </div>                                                
                                            </b-row>
                                            <h6>Network Coverage</h6>
                                            <b-row>                                                
                                                <div class="pr-1" v-for="(network, index) in  house[0].network" :key="index">
                                                    <h5><b-badge variant="info">{{network}}</b-badge></h5>
                                                </div>                                                
                                            </b-row>
                                        </b-tab>
                                        <b-tab title="Agent Information">
                                           <b-row md="12">
                                               <b-col md="3">
                                                   <div class="text-center">
                                                    <b-img :src="house[0].user.image ?house[0].user.image:'https://image.flaticon.com/icons/png/512/21/21104.png'" class="mb-2 " height="150px" width="150px"></b-img>
                                                </div>
                                                </b-col>
                                                <b-col md="7">
                                                    <b-list-group>
                                                        <b-list-group-item href="#"><b-icon-person-fill></b-icon-person-fill> {{house[0].user.firstname}} {{house[0].user.lastname}}</b-list-group-item>
                                                        <b-list-group-item href="#"><b-icon-envelope-fill></b-icon-envelope-fill> {{house[0].user.email}}</b-list-group-item>
                                                        <b-list-group-item href="#"><b-icon-phone></b-icon-phone> {{house[0].user.phone?house[0].user.phone:'No Phone Information Found'}}</b-list-group-item>
                                                        <b-list-group-item href="#"><b-icon-map></b-icon-map> {{house[0].user.address}}</b-list-group-item>
                                                        <!-- <b-list-group-item href="#">Vestibulum at eros</b-list-group-item> -->
                                                    </b-list-group>
                                                </b-col>
                                               

                                            </b-row>
                                        </b-tab>
                                        <b-tab title="Map">
                                            <template>
                                                    <GmapMap
                                                    :center="{lat:house[0].location.coordinates[1], lng:house[0].location.coordinates[0]}"
                                                    :zoom="7"
                                                    map-type-id="terrain"
                                                    style="width: 100%; height: 400px"
                                                    >
                                                    <GmapMarker
                                                        :key="index"
                                                        v-for="(m, index) in house[0].location"
                                                        :position="m.position"
                                                        :clickable="true"
                                                    />
                                                    </GmapMap>
                                            </template>
                                        </b-tab>
                                        
                                    </b-tabs>
                                </b-card>
                        </div>
                        <div md="4" sm="12">
                            
                        
                        </div>
                        </div>
                    


                </b-col>
                <b-col md="3" sm="12">
                    <div class="h4">Other Properties</div>
                    <div class="mb-4" v-for="(i,index) in 8" :key="index">
                            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                                <b-row no-gutters>
                                <b-col md="4">
                                    <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
                                </b-col>
                                <b-col md="8">
                                    <b-card-body>
                                    <b-card-text>
                                        <h5>House for sale</h5>
                                    </b-card-text>
                                    </b-card-body>
                                </b-col>
                                </b-row>
                            </b-card>
                        </div>
                </b-col>
            </b-row>
        </div>
        <!-- <div class="" v-if="loading">
                    <circular_loader></circular_loader>            
        </div> -->
    </div>
</template>

<style scoped>
    @import "./property.css"
</style>

<script src="./property.js">

</script>