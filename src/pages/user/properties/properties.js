import { GET_USER_HOUSES, REMOVE_USER_HOUSES } from "../../../store/action"
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            loading: false,
            message: "",
        }
    },
    computed: {
        ...mapGetters(['houses'])
    },
    methods: {
        getUserHouses() {
            this.loading = true;
            this.$store.dispatch(GET_USER_HOUSES).then(
                () => {
                    this.loading = false;
                    this.message = "You do not have any saved property at the momment";
                }).catch(() => {
                this.loading = false;
                this.message = "Error Fetching Saved Properties";
            });
        },
        strLn(val) {
            return val.length > 20 ? val.substring(0, 20) + '...' : val;
        },
        removeHouse(id) {
            this.$store.dispatch(REMOVE_USER_HOUSES, id).then(
                () => {
                    this.getUserHouses();
                }).catch()
        }
    },
    mounted() {
        this.getUserHouses();
    }
}