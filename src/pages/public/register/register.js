import { REGISTER_USER } from "../../../store/action";

export default {
    data() {
        return {
            firstname: "",
            lastname: "",
            email: "",
            address: "",
            role: "",
            password: "",
            loading: true
        }
    },
    methods: {
        register() {
            this.loading = true;
            const payload = {
                'email': this.email,
                'firstname': this.firstname,
                'lastname': this.lastname,
                'address': this.address,
                'password': this.password
            };
            this.$store.dispatch(REGISTER_USER, payload).then(
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