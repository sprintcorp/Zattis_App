<template>
    <div class="body">
        <!-- {{ loading }} -->
        <div v-if="!loading && agents.length">
            <div class="header p-3">
                <b-row>
                    <b-col class="m-auto" sm="6" md="6" align-self="center">
                                <b-input-group>                                
                                    <b-form-input placeholder="Search by Location for sellers e.g Lagos, Ikeja, Shomolu" v-model="place"></b-form-input>
                                    <b-input-group-prepend>
                                        <span class="input-group-text"><b-icon-search></b-icon-search></span>
                                    </b-input-group-prepend>
                                </b-input-group>
                            </b-col>      
                </b-row>
            </div>
                <b-row class="p-5">
                    <b-col sm="12" md="12">
                        <b-row>
                            <tr v-for="(agent,index) in agents" :key="index"
                            >
                                <b-card
                                    :title=getName(agent)
                                    :img-src=getImage(agent)
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    style="max-width: 20rem;border:0px"
                                    class="m-3"
                                    v-scroll-reveal="{delay:100}"                                
                                >
                                    <b-card-text>
                                        
                                    </b-card-text>

                                    <b-button :to="{name:'seller',params:{id:agent._id}}" variant="info">View</b-button>
                                </b-card>
                                </tr>
                        
                        </b-row>
                
                    </b-col>
                </b-row>
        </div> 
    <div>
         <div class="" v-if="loading">
            <circular_loader></circular_loader>            
        </div>
        <div v-if="!loading && !agents.length">
            <no-content>{{message}}</no-content>
        </div>
    </div>     
    </div>
</template>

<style scoped>
    @import url("./sellers.css");
</style>

<script src="./sellers.js">

</script>