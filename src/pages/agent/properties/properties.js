import { GET_AGENT_HOUSES } from "../../../store/action"
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            loading: false,
            message: ""
        }
    },
    methods: {
        getagentHouses() {
            this.loading = true;
            this.$store.dispatch(GET_AGENT_HOUSES).then(
                () => {
                    this.loading = false;
                    this.message = "Property not available at the momment";
                }).catch(() => {
                this.loading = false;
                this.message = "Error Fetching Property";
            });
        },
        strLn(val) {
            return val.length > 20 ? val.substring(0, 20) + '...' : val;
        }
    },
    computed: {
        ...mapGetters(['agent_houses'])
    },
    mounted() {
        this.getagentHouses();
    }
}