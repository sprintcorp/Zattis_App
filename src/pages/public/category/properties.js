import { SAVE_USER_HOUSES, GET_CATEGORIES, GET_CATEGORY_HOUSES } from "../../../store/action"
import { mapGetters } from "vuex";
import { getToken } from "../../../config";

export default {
    data() {
        return {
            no: 10,
            loading: false,
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
                this.$refs['my-modal'].show()
            }
        },
        hideModal() {
            this.$refs['my-modal'].hide()
        },
        login() {
            this.$router.push({ name: 'login' });
        },
        getHouses(payload) {
            this.loading = true;
            this.$store.dispatch(GET_CATEGORY_HOUSES, payload).then(
                () => {
                    this.loading = false;
                    this.message = "No property for " + payload + " at the moment";
                }

            ).catch(
                () => {
                    this.loading = false;
                    this.message = "Error Fetching Properties";
                }
            );
        },
        getCategories() {
            this.loading = true;
            this.$store.dispatch(GET_CATEGORIES).then(
                () => {
                    this.loading = false;
                },
                () => {
                    this.loading = false;
                }
            );
        },

        strLn(val) {
            return val.length > 20 ? val.substring(0, 20) + '...' : val;
        }
    },
    computed: {
        ...mapGetters(['houses', 'categories']),
    },
    mounted() {
        this.getCategories();
        this.getHouses(this.$route.params.id);
    }
}