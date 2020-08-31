import { UPDATE_PASSWORD } from "../../../store/action";

export default {
    data() {
        return {
            old_password: "",
            new_password: "",
            confirm_password: "",
            disabled: true,
            loading: false,
            toast: false
        }
    },
    watch: {

    },
    computed: {
        validation() {
            return this.new_password == this.confirm_password ? true : false
        },
        confirmPassword() {
            return this.new_password == this.confirm_password ? this.disabled = false : this.disabled = true
        }

    },
    methods: {
        checkPasswordMatch() {
            if (this.new_password == this.confirm_password) {
                this.disabled = false;
            }
        },
        updatePassword() {
            this.loading = true;
            const payload = {
                'newPassword': this.new_password,
                'currentPassword': this.old_password
            };
            this.$store.dispatch(UPDATE_PASSWORD, payload).then(() => {
                this.loading = false;
                this.$swal({
                    text: 'Password updated successfully',
                    icon: 'success',
                    timer: 5000
                });
            }).catch(() => {
                this.loading = false;
                this.$swal({
                    text: 'Password is incorrect',
                    icon: 'error',
                    timer: 5000
                });
            });
        }
    }
}