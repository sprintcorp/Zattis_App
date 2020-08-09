import { GET_AGENTS } from "../../../store/action";
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            no: 20,
            loading: false,
        }
    },
    methods: {

        getAgents() {
            this.loading = true;
            this.$store.dispatch(GET_AGENTS).then(
                () => {
                    this.loading = false;
                },
                () => {
                    this.loading = false;

                }
            ).error();
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