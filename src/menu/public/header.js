import { getRole, logout, getFirstname, getLastname } from "../../config";
export default {
    name: "Header",
    data() {
        return {
            show: false,
            mainProps: { width: 200, height: 50, class: 'm1' },
            auth: false,
            account_info: 'Account'
        }
    },
    computed: {

    },
    methods: {
        displaySearchForm() {
            this.show = true
        },
        logout() {
            logout();
            this.auth = false;
            this.account_info = 'Account';
            this.$router.push({ name: 'home' });

        },
        goToDashboard() {
            if (getRole() === 'alpha') {
                this.$router.push({ name: 'admin' });
            }
            if (getRole() === 'beta') {
                this.$router.push({ name: 'agent' });
            }
            if (getRole() === 'delta') {
                this.$router.push({ name: 'user' });
            }
        }
    },
    mounted() {
        this.auth = getRole() ? true : false;
        this.account_info = getRole() ? getFirstname() + " " +
            getLastname() : 'Account'
    }
}