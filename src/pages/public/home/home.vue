<template>
  <div class="body">
    <div v-if="!loading">
      <div class="banner">
        <b-container>
          <b-row class="justify-content-center home_search_field">
            <b-col sm="12" md="12" align-self="center">
              <b-input-group>
                <b-input-group-prepend>
                  <b-form-select v-model="type">
                    <!-- <b-form-select-option value="null">Select Type</b-form-select-option> -->
                    <b-form-select-option value="sale">Sale</b-form-select-option>
                    <b-form-select-option value="rent">Rent</b-form-select-option>
                  </b-form-select>
                </b-input-group-prepend>

                <b-form-input placeholder="Example: Lagos, Ikeja, Shomolu" v-model="place"></b-form-input>
                <b-input-group-prepend>
                  <span class="input-group-text">
                    <b-icon-search @click="searchHouse()"></b-icon-search>
                  </span>
                </b-input-group-prepend>
              </b-input-group>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div class="p-4 list-color">
        <section>
          <b-container>
            <b-row sm="12" md="12">
              <b-col sm="4" md="4" class="text-center my-4">
                <h3>
                  <b-icon-plus></b-icon-plus>Add Property
                </h3>
                <p>You can easily add your own listing</p>
                <b-button class="btn btn-info">
                  Add Listing
                  <b-icon-box-arrow-right></b-icon-box-arrow-right>
                </b-button>
              </b-col>

              <b-col sm="4" md="4" class="text-center my-4">
                <h3>
                  <b-icon-map></b-icon-map>View On Maps
                </h3>
                <p>You can easily search and see results on maps</p>
                <b-button class="btn btn-info">
                  Search by Map
                  <b-icon-box-arrow-right></b-icon-box-arrow-right>
                </b-button>
              </b-col>

              <b-col sm="4" md="4" class="text-center my-4">
                <h3>
                  <b-icon-credit-card></b-icon-credit-card>Property Prices
                </h3>
                <p>Check the average prices on different properties</p>
                <b-button class="btn btn-info">
                  Property Prices
                  <b-icon-box-arrow-right></b-icon-box-arrow-right>
                </b-button>
              </b-col>
            </b-row>
          </b-container>
        </section>
      </div>

      <div class="p-4">
        <section>
          <b-container v-scroll-reveal="{delay:500}">
            <b-row>
              <b-col class="counter_section text-center">
                <div class="h1">
                  <animate-number from="1" to="2300" duration="6000" easing="easeOutQuad"></animate-number>
                </div>
                <p>Properties</p>
              </b-col>

              <b-col class="counter_section text-center">
                <div class="h1">
                  <div class="h1">
                    <animate-number from="1" to="56" duration="3000" easing="easeOutQuad"></animate-number>
                  </div>
                </div>
                <p>Agents</p>
              </b-col>

              <b-col class="counter_section text-center">
                <div class="h1">
                  <div class="h1">
                    <animate-number from="1" to="345" duration="4000" easing="easeOutQuad"></animate-number>
                  </div>
                </div>
                <p>Users</p>
              </b-col>
            </b-row>
          </b-container>
        </section>
      </div>

      <div class="section-color mb-4">
        <b-container fluid>
          <b-row md="12" class="p-2">
            <b-col md="6" class="text-center" v-scroll-reveal="{delay:600,scale:2}">
              <div
                class="home_word"
              >Are you an estate agent or developer? List your property for FREE.</div>
            </b-col>
            <b-col md="4" v-scroll-reveal="{delay:800,scale:2}">
              <b-img
                src="https://res.cloudinary.com/sprintcorp/image/upload/v1596839935/zattis/SVG/Asset_15_g1lrou.svg"
              ></b-img>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <!-- <pre>{{ houses }}</pre> -->

        <section>
            <b-container fluid>
                <b-row v-scroll-reveal="{delay:800}">
                    <b-col sm="12" md="5" xs="12" class="m-3">
                        <div class>
                            <h4>Categories</h4>
                        </div>
                        <br />
                        <div class="row mb-5">
                            <div class="text-justify">
                            <v-col v-for="(category,index) in categories" :key="index">
                                <b-link class="mr-3" style="color:black">
                                <b-badge>{{category.name}}</b-badge>
                                </b-link>
                            </v-col>
                            </div>
                        </div>
                        <div class="row">
                            <div class="h4">About Zattis Properties</div>
                            <div>
                            <p class="text-justify p-2">
                                Zattis Properties is a real estate and property website in Nigeria with property listings for sale,
                                rent and lease. We offer Nigerian property seekers an easy way to find details of property like homes,
                                houses, lands, shops, office spaces and other commercial properties to buy or rent. Nigeria Property Centre
                                provides a platform for advertising property from organisations and Nigerian private property owners.
                            </p>
                            </div>
                        </div>
                    </b-col>

                    <b-col sm="12" md="6" xs="12">
                        <div class>
                            <h4>Latest Listed Properties</h4>
                        </div>
                        <b-row>
                            <tr cols="6" v-for="(house,index) in houses" :key="index">
                            <b-card
                                :title="strLn(house.name)"
                                :img-src="house.image[0]"
                                img-alt="Image"
                                img-top
                                tag="article"
                                class="mb-2 mr-1 property_image"
                            >
                                <b-card-text></b-card-text>

                                <b-button :to="{name:'property',params:{id:house.slug}}" variant="info">View</b-button>
                            </b-card>
                            </tr>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </section>
    </div>
    <div class v-if="loading">
      <circular_loader></circular_loader>
    </div>
  </div>
</template>

<style scoped>
@import "./home.css";
</style>

<script src="./home.js"></script>

