<template>
    <div class="body">
    <div v-if="!loading && agent_houses.length">
        <div class="header p-2 pl-5">
            <div class="h6" style="color:black"><b-icon-house></b-icon-house> John Doe - My Property <b-badge>{{agent_houses.length}}</b-badge></div>
        </div>
        <b-container class="mt-5 p-3">
            <b-card style="width:100%;border:0px">
            <b-row md="12">
            
                <b-col class="md-9">
                    <b-row >
                    <tr v-for="(house,index) in agent_houses" :key="index"
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

                                <b-button :to="{name:'agentProperty',params:{id:house.slug}}" variant="info">View</b-button>
                            </b-card>
                            </tr>
                    </b-row>
                </b-col>
            </b-row>
            </b-card>
        </b-container>
    </div>
    <div class="" v-if="loading">
        <circular_loader></circular_loader>            
    </div>
    <div v-if="!loading && !agent_houses.length">
        <no-content>{{message}}</no-content>
    </div>
    </div>
    
</template>
<style scoped>
    @import "./properties.css";
</style>

<script src="./properties.js">

</script>