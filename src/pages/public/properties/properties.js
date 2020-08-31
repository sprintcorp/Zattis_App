import { GET_HOUSES, SAVE_USER_HOUSES } from "../../../store/action"
import { mapGetters } from "vuex";
import { getToken } from "../../../config";

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
            mainProps: { width: 330, height: 500, class: 'm1' },
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
        saveHouse(house) {
            if (getToken()) {
                const payload = {
                    'house': house
                }
                this.$store.dispatch(SAVE_USER_HOUSES, payload).then(() => {
                    this.$swal({
                        text: 'Property successfully added to favourite list',
                        icon: 'success',
                        // position: 'bottom-end',
                        // toast: true,
                        showConfirmButton: false,
                        timer: 5000,
                        timerProgressBar: true,
                    });
                }).catch(() => {
                    this.$swal({
                        text: 'Property already in favourite list',
                        icon: 'warning',
                        // position: 'middle-end',
                        // toast: true,
                        showConfirmButton: false,
                        timer: 5000,
                        timerProgressBar: true,
                    });
                });
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
            this.$store.dispatch(GET_HOUSES, payload).then(
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
        },
        strLn(val) {
            return val.length > 20 ? val.substring(0, 20) + '...' : val;
        }
    },
    computed: {
        ...mapGetters(['houses']),
    },
    mounted() {
        this.getHouses(this.url);
    }
}