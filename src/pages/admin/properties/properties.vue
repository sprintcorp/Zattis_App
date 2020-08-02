<template>
    <div  class="body">
        <div class="header pt-2 pl-5">
            <div class="h3" style="color:black">Properties on Zattis Properties</div>
        </div>
    <b-row class="p-5">
         <b-col sm="12" md="3">
            <div class="h4 card p-2" style="background-color:#e6e2e2;border:0px">Advanced Filter Options</div>

            <b-card bg-variant="light" style="border:0px">
                <template>
                    <div>
                        <label>Minimum Amount</label>
                        <b-form-select
                        v-model="min"
                        :options="min_options"
                        class="mb-3"
                        value-field="item"
                        text-field="name"
                        disabled-field="notEnabled"
                        ></b-form-select>

                        <label>Maximum Amount</label>
                        <b-form-select
                        v-model="max"
                        :options="max_options"
                        class="mb-3"
                        value-field="item"
                        text-field="name"
                        disabled-field="notEnabled"
                        ></b-form-select>

                        <label>Location</label>
                        <b-form-input v-model="location" placeholder="Ikeja or Baruwa"></b-form-input>
                        <b-button variant="info" class="mt-3 text-right">Filter Search</b-button>

                        
                    </div>
                </template>
            </b-card>
        </b-col>
        <b-col sm="12" md="9">
            <b-row>
                        <tr v-for="(i,index) in no" :key="index"
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

                                <b-button :to="{name:'singleProperty',params:{id:index}}" variant="info">View</b-button>
                            </b-card>
                            </tr>
                       
            </b-row>
            
        </b-col>
       
    </b-row>
    </div>
</template>

<script src="./properties.js">

</script>

<style scoped>
        @import "./properties.css"
</style>