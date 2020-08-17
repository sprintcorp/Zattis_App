<template>
  <div class="body">
    <div>
      <div class="header pt-2 pl-5 mb-5">
        <div class="h3" style="color:black">Properties on Zattis Properties {{ type }}</div>
      </div>
      <b-row>
          
        <b-col class="m-auto" sm="6" md="6" align-self="center">
          <b-input-group>
            <!-- <template v-slot:prepend>
              <b-dropdown variant="info" v-model="type" text="Select Type">
                <b-dropdown-item value="rent">Rent</b-dropdown-item>
                <b-dropdown-item value="sale">Sale</b-dropdown-item>
              </b-dropdown>
            </template> -->
            <b-input-group-prepend>
              <b-form-select v-model="type" text="select">
                                    <!-- <b-form-select-option value="null">Select Type</b-form-select-option> -->
                                    <b-form-select-option value="sale">Sale</b-form-select-option>
                                    <b-form-select-option value="rent">Rent</b-form-select-option>
                                    
            </b-form-select>
            </b-input-group-prepend>

            <b-form-input placeholder="Example: Lagos, Ikeja, Shomolu" v-model="place"></b-form-input>
            <b-input-group-prepend>
              <span class="input-group-text">
                <b-icon-search @click="search()"></b-icon-search>
              </span>
            </b-input-group-prepend>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="p-5">
        <b-col sm="12" md="12" v-if="!loading && houses.length">
          <!-- <pre>{{houses}}</pre> -->
          <b-row>
            <tr v-for="(house,index) in houses" :key="index">
              <b-card
                :title="strLn(house.name)"
                :img-src="house.image[0]"
                img-alt="Image"
                img-top
                img-height="200"
                tag="article"
                style="width: 20rem;"
                class="m-3 products_items b-card"
                v-scroll-reveal
              >
                <b-card-text></b-card-text>
                <b-row md="12">
                  <b-col md="9">
                    <b-button :to="{name:'property',params:{id:house.slug}}" variant="info">View</b-button>
                  </b-col>
                  <b-col md="2">
                    <div style="font-size:30px" @click="saveHouse(house._id)">
                      <b-icon-heart></b-icon-heart>
                    </div>
                  </b-col>
                </b-row>
              </b-card>
            </tr>
          </b-row>
        </b-col>
        <b-col sm="12" md="12">
          <div class v-if="loading">
            <circular_loader></circular_loader>
          </div>
          <div v-if="!loading && !houses.length">
            <no-content>{{message}}</no-content>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script src="./properties.js"></script>

<style scoped>
@import "./properties.css";
</style>