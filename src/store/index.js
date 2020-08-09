import Vue from 'vue';
import Vuex from 'vuex';

import category from './module/category';
import house from './module/houses';
import agent from './module/agent';

Vue.use(Vuex);

const modules = {
    category,
    house,
    agent
};

export default new Vuex.Store({
    modules
})