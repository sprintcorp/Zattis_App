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
            loading: false
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
                'password': this.password,
                'role': this.role
            };
            this.$store.dispatch(REGISTER_USER, payload).then(
                (data) => {
                    this.loading = false;
                    const role = data.role;
                    if (role == 'agent') {
                        this.$router.push({ name: 'agent' });
                    } else {
                        this.$router.push({ name: 'user' });
                    }
                }
            ).catch(
                () => {
                    this.loading = false;
                }
            );
        }
    }
}