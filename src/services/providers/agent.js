import BaseHandler from "../../handler/handler";

class AgentProvider extends BaseHandler {
    getAgent() {
        return this.query('api/v1/user');
    }

    getAgentHouses(payload) {
        return this.query('api/v1/user/' + payload);
    }

    getAgentBySearch(payload) {
        return this.query('api/v1/user/_/search?name=' + payload);
    }
}
export default AgentProvider;