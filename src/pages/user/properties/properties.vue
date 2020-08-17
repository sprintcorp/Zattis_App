<template>
    <div class="body">
        
        <div class="header p-2 pl-5">
            <div class="h6" style="color:black"><b-icon-house></b-icon-house> John Doe - My Saved Property <b-badge>{{houses.length}}</b-badge></div>
        </div>
        <!-- {{ loading }}
        <pre>{{houses}}</pre> -->
        <b-container class="mt-5 p-3" v-if="!loading && houses.length">
            <b-card style="width:100%;border:0px">
            <b-row md="12">
               
                <b-col class="md-9">
                    <b-row >
                    <tr v-for="(house,index) in houses" :key="index"
                        >
                            <b-card
                                :title=strLn(house.house.name)
                                    :img-src=house.house.image[0]
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
<b-row>
                                <b-col md="9">
                                    <b-button :to="{name:'property',params:{id:house.house.slug}}" variant="info">View</b-button>
                                </b-col>
                                <b-col md="2">
                                    <div style="font-size:30px" @click="removeHouse(house._id)"><b-icon-trash></b-icon-trash></div>
                                </b-col>
</b-row>
                            </b-card>
                            </tr>
                    </b-row>
                </b-col>
            </b-row>
            </b-card>
        </b-container>
        
        <div class="" v-if="loading">
            <circular_loader></circular_loader>            
        </div>
        <div v-if="!loading && !houses.length" class="mt-5">
            <no-content>{{message}}</no-content>
        </div>
    </div>
</template>
<style scoped>
    @import "./properties.css";
</style>

<script src="./properties.js">

</script>