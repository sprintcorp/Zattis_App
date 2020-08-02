<template>
    <div class="body">
        <div class="header pt-2 pl-5">
            <div class="h3" style="color:black">Properties on Zattis Properties</div>
        </div>
        <b-row class="p-5">
             <b-col md="3">
                    <!-- <b-card style="width:100%"> -->
                        <b-list-group flush class="">
                            <b-list-group-item class="h4" :to="{name:'agent'}"><b-icon-box></b-icon-box> Dashboard</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'createProperty'}"><b-icon-plus></b-icon-plus> Add Property</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'agentProfile'}"><b-icon-person></b-icon-person> My Profile</b-list-group-item>
                            <b-list-group-item class="h4" :to="{name:'agentPassword'}"><b-icon-lock></b-icon-lock>My Password</b-list-group-item>
                          
                        </b-list-group>
                    <!-- </b-card> -->

                </b-col>
            <b-col md="8" sm="12">
                <div class="mb-3">
                    <b-btn :to="{name:'agentProperties'}" variant="outline-info"><b-icon-arrow-bar-left></b-icon-arrow-bar-left> Back</b-btn>
                    
                </div>
                <div> 
                    <b-row>
                        <b-col md="9">
                            <h4>House for Sale</h4> 
                        </b-col>
                        <b-col md="3">
                            <h4>₦60,000,000</h4> 
                        </b-col>
                    </b-row>
                    <b-icon-map></b-icon-map> Lagos,Ikeja
                </div>
               
                    <div>
                        <b-carousel
                        id="carousel-1"
                        v-model="slide"
                        :interval="4000"
                        controls
                        background="#ababab"
                        img-width="1024"
                        img-height="480"
                        style="text-shadow: 1px 1px 2px #333;"
                        @sliding-start="onSlideStart"
                        @sliding-end="onSlideEnd"
                        >
                        
                        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>

                        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54"></b-carousel-slide>

                        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

                        </b-carousel>

                       <div class="mt-5">
                            <b-card no-body>
                                <b-tabs v-model="tabIndex" small card>
                                    <b-tab title="Features">
                                        I'm the first fading tab
                                    </b-tab>
                                    <b-tab title="Description">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia amet consectetur eum odio iusto, sapiente voluptas saepe expedita aliquid sequi suscipit harum vel cupiditate obcaecati neque animi esse perspiciatis? Obcaecati.</p>
                                    <b-card>I'm the card in tab</b-card>
                                    </b-tab>
                                    <b-tab title="Agent Information">
                                        Sibzamini!
                                    </b-tab>
                                    <b-tab title="Map">
                                         <template>
                                                <GmapMap
                                                :center="{lat:10, lng:10}"
                                                :zoom="7"
                                                map-type-id="terrain"
                                                style="width: 100%; height: 400px"
                                                >
                                                <GmapMarker
                                                    :key="index"
                                                    v-for="(m, index) in markers"
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
        </b-row>
    </div>
</template>

<style scoped>
    @import "./property.css"
</style>

<script src="./property.js">

</script>