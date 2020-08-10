import { AuthService } from "../../services";
import { REGISTER_USER } from "../action";
import {
    saveUserData
} from "../../config";

const initialState = {
    user: []
};

const state = {...initialState };

const actions = {

    async [REGISTER_USER](context, payload) {
        console.log(payload);
        const { data } = await AuthService.register(payload);
        if (data) {
            saveUserData(data)
        }
        return data;
    }
};


const mutations = {

};


const getters = {

};

export default {
    state,
    actions,
    mutations,
    getters
}