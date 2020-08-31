import {
    RatingService
} from "../../services";
import { GET_RATING, CREATE_RATING } from "../action";
import { SET_RATING } from "../mutation";

const initialState = {
    ratings: []
};

const state = {...initialState };


const actions = {
    async [GET_RATING](context, payload) {
        const { data } = await RatingService.getRatings(payload);
        context.commit(SET_RATING, data.data);
        return data;
    },
    async [CREATE_RATING](context, payload) {
        const { data } = await RatingService.createRating(payload);
        return data;
    }
};
const mutations = {
    [SET_RATING](state, ratings) {
        state.ratings = ratings;
    },

};


const getters = {
    ratings(state) {
        return state.ratings;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}