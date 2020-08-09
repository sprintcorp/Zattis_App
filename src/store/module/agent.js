import { AgentService } from "../../services";
import { GET_AGENTS, GET_AGENT } from "../action";
import { SET_AGENTS, SET_AGENT } from "../mutation";

const initialState = {
    agents: [],
    agent: [],
};

const state = {...initialState };
const actions = {
    async [GET_AGENTS](context) {
        const { data } = await AgentService.getAgent();
        context.commit(SET_AGENTS, data.data);
        return data;
    },
    async [GET_AGENT](context, payload) {
        const { data } = await AgentService.getAgentHouses(payload);
        context.commit(SET_AGENT, data.data);
        return data;
    }
};
const mutations = {
    [SET_AGENTS](state, agents) {
        state.agents = agents;
    },
    [SET_AGENT](state, agent) {
        state.agent = agent;
    }
};

const getters = {
    agents(state) {
        return state.agents;
    },
    agent(state) {
        return state.agent;
    }
};


export default {
    state,
    actions,
    mutations,
    getters
}