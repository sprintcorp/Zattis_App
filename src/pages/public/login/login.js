import { LOGIN_USER } from "../../../store/action";

export default {
    data() {
        return {
            email: "",
            password: "",
            loading: false
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
                    // this.$bvToast.toast('Invalid Login Credentials', {
                    //     title: 'Failed Operation',
                    //     autoHideDelay: 3000,
                    //     appendToast: true,
                    //     variant: 'danger'
                    // })
                    this.$swal({
                        // title: 'Error!',
                        text: 'Invalid Login Credentials',
                        icon: 'error',
                        timer: 5000
                            // confirmButtonText: 'Cool'
                    });
                });
        }

    }
}