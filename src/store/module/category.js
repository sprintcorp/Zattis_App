import {
    CategoryService
} from "../../services";
import { GET_CATEGORIES, CREATE_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from "../action";
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
    },
    async [CREATE_CATEGORY](context, payload) {
        const { data } = await CategoryService.createCategory(payload);
        return data;
    },
    async [UPDATE_CATEGORY](context, payload) {
        const { data } = await CategoryService.updateCategory(payload);
        return data;
    },
    async [DELETE_CATEGORY](context, payload) {
        const { data } = await CategoryService.deleteCategory(payload);
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