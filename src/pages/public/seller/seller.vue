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
                        <b-card-title>Contact information</b-card-title>
                        <!-- <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </b-card-text> -->
                        </b-card-body>

                        <b-list-group flush>
                        <b-list-group-item><b-icon-phone></b-icon-phone> {{ agent.phone?agent.phone:'No Phone Information' }}</b-list-group-item>
                        <b-list-group-item><b-icon-envelope></b-icon-envelope> {{ agent.email }}</b-list-group-item>
                        <b-list-group-item><b-icon-map></b-icon-map> {{ agent.address }}</b-list-group-item>
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
                    <div class="h4">{{ agent.firstname }} {{agent.lastname}} Properties</div>
                    <b-row>
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
                </b-col>     
            </b-row>
    </div>
</template>

<style scoped>
    @import url("./seller.css");
</style>

<script src="./seller.js">

</script>
         