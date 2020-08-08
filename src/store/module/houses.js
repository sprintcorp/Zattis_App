import { HouseService } from "../../services";
import { GET_HOUSES, GET_HOUSE_BY_SLUG } from "../action";
import { SET_HOUSES, SET_HOUSE } from "../mutation";


const initialState = {
    houses: [],
    house: []
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
    }
};

const mutations = {
    [SET_HOUSES](state, houses) {
        state.houses = houses;
    },
    [SET_HOUSE](state, house) {
        state.house = house;
    }
};


const getters = {
    houses(state) {
        return state.houses;
    },
    house(state) {
        return state.house;
    }
}


export default {
    state,
    actions,
    mutations,
    getters
}