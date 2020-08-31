<template>
    <div class="body">
         <div class="header p-3">
            <!-- <pre>{{agent}}</pre> -->
         </div>
            <b-row class="p-5">
                <b-col sm="8" md="3">
                      <div>
                    <b-card
                        no-body
                        style="max-width: 20rem;"
                        :img-src=getImage(agent)
                        img-alt="Image"
                        img-top
                    >
                        <template v-slot:header>
                        <h4 class="mb-0">{{ agent.firstname }} {{agent.lastname}}</h4>
                        </template>

                        <b-card-body>
                            <b-card-sub-title class="mb-2">Click on star to rate agent</b-card-sub-title>
                            <b-card-text>
                            <star-rating v-model="info" @rating-selected="setRating" :show-rating="false" :star-size=30 inline="true"></star-rating>
                        </b-card-text>
                        <!-- <b-card-title>Contact information</b-card-title> -->
                        <!-- <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title> -->
                        
                        </b-card-body>

                        <b-list-group flush>
                        <b-list-group-item><b-icon-phone></b-icon-phone> {{ agent.phone?agent.phone:'No Phone Information' }}</b-list-group-item>
                        <b-list-group-item><b-icon-envelope></b-icon-envelope> {{ agent.email }}</b-list-group-item>
                        <b-list-group-item><b-icon-map></b-icon-map> {{ agent.address }}</b-list-group-item>
                        </b-list-group>

                        <b-card-body>
                        <b-link @click="whatsapp(agent.phone)" class="card-link">Whatsapp</b-link>
                       
                        <a :href=mailto+agent.email class="card-link">Send mail</a>
                        </b-card-body>

                        <b-card-footer>Homin Properties</b-card-footer>

                    </b-card>
                    </div>     
                </b-col> 

    <!-- <pre>{{info.data}}</pre> -->

                <b-col sm="12" md="9">
                    <div class="h4">{{ agent.firstname }} {{agent.lastname}} Properties</div>
                    <b-row v-if="!loading && agent.user.length">
                        <tr v-for="(agent,index) in agent.user" :key="index"
                        >
                            <b-card
                                :title=strLn(agent.name)
                                :img-src=agent.image[0]
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="m-3"
                                
                            >
                                <b-card-text>
                                    
                                </b-card-text>

                                <b-button :to="{name:'property',params:{id:agent.slug}}" variant="info">View</b-button>
                            </b-card>
                            </tr>
                       
                    </b-row>


                    <div class="" v-if="loading">
                        <circular_loader></circular_loader>            
                    </div>
                    <div v-if="!loading && !agent.user.length">
                        <no-content>{{message}}</no-content>
                    </div>


                    
                </b-col>     
            </b-row>

             <b-modal ref="my-modal" centered hide-footer hide-header-close hide-header title="">
                <div class="d-block text-center">
                    <h5>Only a logged in user can rate an agent</h5>
                </div>
                <div class="text-center">
                <b-button class="mt-2 mr-3" variant="outline-danger" @click="hideModal">Close Me</b-button>
                
                <b-button class="mt-2" variant="outline-warning" @click="login">Login</b-button>
                </div>
            </b-modal>
    </div>
</template>

<style scoped>
    @import url("./seller.css");
</style>

<script src="./seller.js">

</script>
         