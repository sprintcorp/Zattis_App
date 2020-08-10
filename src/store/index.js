import Vue from 'vue';
import Vuex from 'vuex';

import category from './module/category';
import house from './module/houses';
import agent from './module/agent';
import auth from './module/auth';

Vue.use(Vuex);

const modules = {
    category,
    house,
    agent,
    auth
};

export default new Vuex.Store({
    modules
})