import { AuthService } from "../../services";
import { REGISTER_USER, LOGIN_USER, UPDATE_USER, GET_USER } from "../action";
import {
    saveUserData
} from "../../config";
import { SET_USER } from "../mutation";

const initialState = {
    user: []
};

const state = {...initialState };

const actions = {

    async [REGISTER_USER](context, payload) {
        const { data } = await AuthService.register(payload);
        if (data) {
            saveUserData(data)
        }
        return data;
    },
    async [LOGIN_USER](context, payload) {
        const { data } = await AuthService.login(payload);
        if (data) {
            saveUserData(data)
        }
        return data;
    },
    async [GET_USER](context) {
        const { data } = await AuthService.getUserInformation();
        context.commit(SET_USER, data.data);
        return data;

    },

    async [UPDATE_USER](context, payload) {
        const { data } = await AuthService.updateUserInformation(payload);
        context.dispatch(GET_USER);
        return data;
    }
};


const mutations = {
    [SET_USER](state, user) {
        state.user = user;
    }
};


const getters = {
    user(state) {
        return state.user;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}