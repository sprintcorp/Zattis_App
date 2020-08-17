import { GET_CATEGORIES, GET_HOUSES } from "../../../store/action";
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            place: "",
            loading: false,
            type: ""
        }
    },
    methods: {
        beforeEnter(el) {
            el.style.left = '-200px';
            el.style.opacity = 0
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
        getHouses() {
            this.$store.dispatch(GET_HOUSES, 2);
        },
        strLn(val) {
            return val.length > 20 ? val.substring(0, 20) + '...' : val;
        },
        searchHouse() {
            if (!this.type) {
                this.type = "sale"
            }
            this.$router.push({
                    name: 'search',
                    query: { type: this.type, name: this.place }
                })
                // }
        }
    },
    computed: {
        ...mapGetters(['categories', 'houses'])
    },
    mounted() {
        this.getCategories();
        this.getHouses();
    }
}