<template>
    <div>
         <div class="header p-3">
            <b-row class="p-5">
                <b-col sm="8" md="3">
                      <div>
                    <b-card
                        no-body
                        style="max-width: 20rem;"
                        img-src="https://placekitten.com/380/200"
                        img-alt="Image"
                        img-top
                    >
                        <template v-slot:header>
                        <h4 class="mb-0">Billy Consultant</h4>
                        </template>

                        <b-card-body>
                        <b-card-title>Contact information</b-card-title>
                        <!-- <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </b-card-text> -->
                        </b-card-body>

                        <b-list-group flush>
                        <b-list-group-item><b-icon-phone></b-icon-phone> 8755-86552</b-list-group-item>
                        <b-list-group-item><b-icon-envelope></b-icon-envelope> usermail@type.com</b-list-group-item>
                        <b-list-group-item><b-icon-map></b-icon-map> 22, Qubec road</b-list-group-item>
                        </b-list-group>

                        <b-card-body>
                        <a href="#" class="card-link">Whatsapp</a>
                        <a href="#" class="card-link">Send mail</a>
                        </b-card-body>

                        <b-card-footer>Zattis Properties</b-card-footer>

                    </b-card>
                    </div>     
                </b-col> 

                <b-col sm="12" md="9">
                    <div class="h4">Billy Consultant Properties</div>
                    <b-row>
                        <tr v-for="(i,index) in 4" :key="index"
                        >
                            <b-card
                                title="Inn For sale"
                                img-src="https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&w=1000&q=80"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="m-3"
                                
                            >
                                <b-card-text>
                                    
                                </b-card-text>

                                <b-button :to="{name:'property',params:{id:index}}" variant="info">View</b-button>
                            </b-card>
                            </tr>
                       
            </b-row>
                </b-col>     
            </b-row>
         </div>
    </div>
</template>

         