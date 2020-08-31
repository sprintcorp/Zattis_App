import { getFirstname, getLastname } from "../../../config";
import { UPDATE_PASSWORD } from "../../../store/action";

export default {
    data() {
        return {
            old_password: "",
            new_password: "",
            confirm_password: "",
            disabled: true,
            loading: false,
            toast: false,
            name: ''
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
        getName() {
            this.name = getFirstname() + " " + getLastname();
        },
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
                this.toast = true;
                this.$bvToast.toast(`Password Successfully Updated`, {
                    title: 'Successful Operation',
                    autoHideDelay: 5000,
                    appendToast: this.toast,
                    variant: 'success'
                })
            }).catch(() => {
                this.loading = false;
                this.toast = true;
                this.$bvToast.toast('Password is incorrect', {
                    title: 'Failed Operation',
                    autoHideDelay: 5000,
                    appendToast: this.toast,
                    variant: 'danger'
                })
            });
        }
    },
    mounted() {
        this.getName()
    }
}