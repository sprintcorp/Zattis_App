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
                (data) => {
                    this.loading = false;
                    const role = data.role;
                    if (role == 'agent') {
                        this.$router.push({ name: 'agent' });
                    } else if (role == 'admin') {
                        this.$router.push({ name: 'admin' });
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