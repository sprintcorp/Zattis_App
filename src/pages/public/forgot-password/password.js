import { RESET_PASSWORD } from "../../../store/action"
// import { BASE_URL } from "../../../env";

export default {
    data() {
        return {
            message: false,
            show: false,
            email: ""
        }
    },
    methods: {

        resetPassword() {
            const payload = {
                'email': this.email,
                // 'url': BASE_URL + '/password-reset'
            };
            this.$store.dispatch(RESET_PASSWORD, payload);
        }
    }
}