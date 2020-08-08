import { GET_HOUSES } from "../../../store/action"
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            no: 10,
            loading: false,
            min: "",
            max: "",
            location: "",
            url: "",
            message: "",
            min_options: [
                { value: '50000', text: '₦50,000' },
                { value: '100000', text: '₦100,000' },
                { value: '200000', text: '₦200,000' },
                { value: '500000', text: '₦500,000' },
                { value: '1000000', text: '₦1,000,000' },
                { value: '10000000', text: '₦10,000,000' },
                { value: '50000000', text: '₦50,000,000' },
                { value: '100000000', text: '₦100,000,000' },
                { value: '500000000', text: '₦500,000,000' },
                { value: '1000000000', text: '₦1,000,000,000' },
                { value: '10000000000', text: '₦10,000,000,000' },
                { value: '100000000000', text: '₦100,000,000,000' },
            ],
            max_options: [
                { value: '50000', text: '₦50,000' },
                { value: '100000', text: '₦100,000' },
                { value: '200000', text: '₦200,000' },
                { value: '500000', text: '₦500,000' },
                { value: '1000000', text: '₦1,000,000' },
                { value: '10000000', text: '₦10,000,000' },
                { value: '50000000', text: '₦50,000,000' },
                { value: '100000000', text: '₦100,000,000' },
                { value: '500000000', text: '₦500,000,000' },
                { value: '1000000000', text: '₦1,000,000,000' },
                { value: '10000000000', text: '₦10,000,000,000' },
                { value: '100000000000', text: '₦100,000,000,000' },
            ]
        }
    },
    methods: {
        getHouses(payload) {
            this.loading = true;
            this.$store.dispatch(GET_HOUSES, payload).then(
                () => {
                    this.loading = false;
                    this.message = "Property with this requirement not available at the momment";
                },
                () => {
                    this.loading = false;
                    this.message = "Property not available at the momment";
                }
            );
        },
        search() {
            // alert("hello");
            if (!this.location) {
                this.location = "Lagos"
            }
            if (!this.max) {
                this.max = 100000000000
            }
            if (!this.min) {
                this.min = 50000
            }

            this.url = "min=" + this.min + "&max=" + this.max + "&city=" + this.location;
            // } else {
            //     this.url = "price[gte]=" +
            //         this.min + "&price[lte]=" + this.max;
            // }
            this.getHouses(this.url);
        },
        clear() {
            this.max = "";
            this.min = "";
            this.location = "";
            this.url = "";
            this.getHouses(this.url);
        }
    },
    computed: {
        ...mapGetters(['houses']),
    },
    mounted() {
        this.getHouses(this.url);
    }
}