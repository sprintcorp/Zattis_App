import { GET_CATEGORIES } from "../../../store/action";
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            place: "",
            loading: false,
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
        }
    },
    computed: {
        ...mapGetters(['categories'])
    },
    mounted() {
        this.getCategories()
    }
}