import { HouseService } from "../../services";
import { GET_HOUSES, GET_HOUSE_BY_SLUG, CREATE_PROPERTIES, GET_AGENT_HOUSES, GET_USER_HOUSES, SAVE_USER_HOUSES, REMOVE_USER_HOUSES, GET_HOUSE_BY_SEARCH } from "../action";
import { SET_HOUSES, SET_HOUSE, SET_AGENT_HOUSES } from "../mutation";


const initialState = {
    houses: [],
    house: [],
    agent_houses: []
};
const state = {...initialState };

const actions = {
    async [GET_HOUSES](context, payload) {
        const { data } = await HouseService.getHouses(payload);
        context.commit(SET_HOUSES, data.data);
        return data;
    },
    async [GET_HOUSE_BY_SLUG](context, payload) {
        const { data } = await HouseService.getHouseBySlug(payload);
        context.commit(SET_HOUSE, data.data);
        return data;
    },

    async [GET_HOUSE_BY_SEARCH](context, payload) {
        const { data } = await HouseService.getHousesBySearch(payload);
        context.commit(SET_HOUSES, data.data);
        return data;
    },

    async [CREATE_PROPERTIES](context, payload) {
        const { data } = await HouseService.createHouse(payload);
        return data;
    },
    async [GET_AGENT_HOUSES](context) {
        const { data } = await HouseService.getHousesByAgent();
        context.commit(SET_AGENT_HOUSES, data.data);
        return data;
    },
    async [GET_USER_HOUSES](context) {
        const { data } = await HouseService.getUserHouses();
        context.commit(SET_HOUSES, data.data);
        return data;
    },
    async [SAVE_USER_HOUSES](context, payload) {
        const { data } = await HouseService.saveUserHouse(payload);
        return data;
    },
    async [REMOVE_USER_HOUSES](context, payload) {
        const { data } = await HouseService.removeUserHouse(payload);
        return data;
    }
};

const mutations = {
    [SET_HOUSES](state, houses) {
        state.houses = houses;
    },
    [SET_HOUSE](state, house) {
        state.house = house;
    },
    [SET_AGENT_HOUSES](state, agent_houses) {
        state.agent_houses = agent_houses;
    }
};


const getters = {
    houses(state) {
        return state.houses;
    },
    house(state) {
        return state.house;
    },
    agent_houses(state) {
        return state.agent_houses;
    }
}


export default {
    state,
    actions,
    mutations,
    getters
}