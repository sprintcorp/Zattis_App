import BaseHandler from "../../handler/handler";

class AgentProvider extends BaseHandler {
    getAgent() {
        return this.query('api/v1/user');
    }

    getAgentHouses(payload) {
        return this.query('api/v1/user/' + payload);
    }
}
export default AgentProvider;