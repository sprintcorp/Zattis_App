import Vue from 'vue';
import Vuex from 'vuex';

import category from './module/category';
import house from './module/houses';

Vue.use(Vuex);

const modules = {
    category,
    house
};

export default new Vuex.Store({
    modules
})