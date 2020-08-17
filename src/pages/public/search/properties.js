import { SAVE_USER_HOUSES, GET_HOUSE_BY_SEARCH } from "../../../store/action"
import { mapGetters } from "vuex";
import { getToken } from "../../../config";

export default {
    data() {
        return {
            no: 10,
            loading: false,
            type: "sale",
            place: "",
            location: "",
            url: "",
            message: "",
            mainProps: { width: 330, height: 500, class: 'm1' },

        }
    },
    methods: {
        saveHouse(house) {
            if (getToken()) {
                const payload = {
                    'house': house
                }
                this.$store.dispatch(SAVE_USER_HOUSES, payload);
            } else {
                this.$router.push({ name: 'login' });
            }
        },
        getHouses(payload) {
            this.loading = true;
            this.$store.dispatch(GET_HOUSE_BY_SEARCH, payload).then(
                () => {
                    this.loading = false;
                    this.message = "Property with this requirements are not available at the momment";
                }

            ).catch(
                () => {
                    this.loading = false;
                    this.message = "Error Fetching Properties";
                }
            );
        },
        search() {
            // if (!this.type) {
            //     this.type = "sale"
            // }
            const payload = {
                'name': this.place,
                'type': this.type,
            }
            this.loading = true;
            this.$store.dispatch(GET_HOUSE_BY_SEARCH, payload).then(
                () => {
                    this.loading = false;
                    this.message = "Property with this requirements are not available at the momment";
                }

            ).catch(
                () => {
                    this.loading = false;
                    this.message = "Error Fetching Properties";
                }
            );
        },
        clear() {
            this.max = "";
            this.min = "";
            this.location = "";
            this.url = "";
            this.getHouses(this.url);
        },
        strLn(val) {
            return val.length > 20 ? val.substring(0, 20) + '...' : val;
        }
    },
    computed: {
        ...mapGetters(['houses']),
    },
    mounted() {
        const payload = {
            'name': this.$route.query.name,
            'type': this.$route.query.type,
        }
        this.getHouses(payload);
    }
}