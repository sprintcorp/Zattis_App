import { GET_AGENT } from "../../../store/action";
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            loading: false,
        }
    },
    methods: {
        getAgentHouse(payload) {
            this.$store.dispatch(GET_AGENT, payload).then(
                () => {
                    this.loading = false;
                    this.message = "Agent is yet to add any property online";
                },
                () => {
                    this.loading = false;
                    this.message = "Property not available at the momment";
                }
            );
        },
        strLn(val) {
            return val.length > 20 ? val.substring(0, 20) + '...' : val;
        },
        getImage(user) {
            return user.image ? user.image : "https://image.flaticon.com/icons/png/512/21/21104.png"
        }
    },
    computed: {
        ...mapGetters(['agent'])
    },
    mounted() {
        // alert(this.$route.params.id);
        this.getAgentHouse(this.$route.params.id);
    }
}