import { GET_USER_HOUSES, REMOVE_USER_HOUSES } from "../../../store/action"
import { mapGetters } from "vuex";
import { getFirstname, getLastname } from "../../../config";

export default {
    data() {
        return {
            loading: false,
            message: "",
            name: "",
        }
    },
    computed: {
        ...mapGetters(['houses'])
    },
    methods: {
        getName() {
            this.name = getFirstname() + " " + getLastname();
        },
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
                    this.$swal({
                        text: 'Property successfully removed from favourite list',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    this.getUserHouses();
                }).catch()
        }
    },
    mounted() {
        this.getName();
        this.getUserHouses();
    }
}