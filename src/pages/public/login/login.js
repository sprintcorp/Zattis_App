import { LOGIN_USER } from "../../../store/action";

export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login() {
            this.loading = true;
            const payload = {
                'email': this.email,
                'password': this.password
            };
            this.$store.dispatch(LOGIN_USER, payload).then(
                () => {
                    this.loading = false;
                }
            ).catch(
                () => {
                    this.loading = false;
                }
            );
        }
    }
}