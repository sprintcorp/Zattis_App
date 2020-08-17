import { GET_AGENTS, GET_AGENT_BY_SEARCH } from "../../../store/action";
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            no: 20,
            loading: false,
            place: "",
            message: "",
            clear: false
        }
    },
    methods: {

        getAgents() {
            this.clear = false;
            this.place = "";
            this.loading = true;
            this.$store.dispatch(GET_AGENTS).then(
                () => {
                    this.loading = false;
                    this.message = "No Agents Available at the momment"
                },
                () => {
                    this.loading = false;
                    this.message = "Error Fetching Agents";

                }
            );
        },
        searchAgent() {
            this.loading = true;
            this.clear = true;
            this.$store.dispatch(GET_AGENT_BY_SEARCH, this.place).then(
                () => {
                    this.loading = false;
                    this.message = "No Agents Available at the momment for this location"
                },
                () => {
                    this.loading = false;
                    this.message = "Error Fetching Agents";
                }
            );
        },
        getName(user) {
            return user.firstname + " " + user.lastname;
        },
        getImage(user) {
            return user.image ? user.image : "https://image.flaticon.com/icons/png/512/21/21104.png"
        }
    },
    computed: {
        ...mapGetters(['agents'])
    },
    mounted() {
        this.getAgents();
    }
}