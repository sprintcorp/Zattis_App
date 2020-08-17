import { PASSWORD_RESET } from "../../../store/action";

export default {
    data() {
        return {
            message: false,
            show: false,
            new_password: "",
            confirm_password: "",
            token: ""
        }
    },
    methods: {
        resetPassword() {
            const payload = {
                'password': this.new_password,
                'token': this.token
            }
            this.$store.dispatch(PASSWORD_RESET, payload).then(() => {
                this.$router.push({ name: 'login' });
            });
        }

    },
    mounted() {
        this.token = this.$route.params.token;
    }
}