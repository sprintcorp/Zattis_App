<template>
    <div class="body">
        <div class="header p-2 pl-5">
            <div class="h6" style="color:black"><b-icon-house></b-icon-house> John Doe - My Property <b-badge>5</b-badge></div>
        </div>
        <b-container fluid class="mt-5 p-3">
            <b-card style="width:100%;border:0px">
            <b-row md="12">
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
                <b-col class="md-9">
                    <b-row >
                    <tr v-for="(i,index) in 4" :key="index"
                        >
                            <b-card
                                title="Inn For sale"
                                img-src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&w=1000&q=80"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="m-3 products_items b-card"
                                v-scroll-reveal="{delay:100}"
                                
                            >
                                <b-card-text>
                                    
                                </b-card-text>

                                <b-button :to="{name:'agentProperty',params:{id:index}}" variant="info">View</b-button>
                            </b-card>
                            </tr>
                    </b-row>
                </b-col>
            </b-row>
            </b-card>
        </b-container>
    </div>
</template>
<style scoped>
    @import "./properties.css";
</style>

<script src="./properties.js">

</script>