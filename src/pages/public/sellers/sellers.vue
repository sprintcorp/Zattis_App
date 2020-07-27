<template>
    <div class="body">
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
                        <tr v-for="(i,index) in no" :key="index"
                        >
                            <b-card
                                title="Users"
                                img-src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="m-3"
                                v-scroll-reveal="{delay:100}"                                
                            >
                                <b-card-text>
                                    
                                </b-card-text>

                                <b-button :to="{name:'seller',params:{id:index}}" variant="info">View</b-button>
                            </b-card>
                            </tr>
                       
                    </b-row>
            
                </b-col>
            </b-row>
    </div>
</template>

<style scoped>
    @import url("./sellers.css");
</style>

<script src="./sellers.js">

</script>