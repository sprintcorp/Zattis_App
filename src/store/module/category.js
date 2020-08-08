import {
    CategoryService
} from "../../services";
import { GET_CATEGORIES } from "../action";
import { SET_CATEGORIES } from "../mutation";

const initialState = {
    categories: [],
    category: [],
};

const state = {...initialState };


const actions = {
    async [GET_CATEGORIES](context) {
        const { data } = await CategoryService.getCategories();
        context.commit(SET_CATEGORIES, data.data);
        return data;
    }
};
const mutations = {
    [SET_CATEGORIES](state, categories) {
        state.categories = categories;
    },

};


const getters = {
    categories(state) {
        return state.categories;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}