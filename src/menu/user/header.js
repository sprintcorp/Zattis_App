import { logout, getFirstname, getLastname, getImage } from "../../config";
export default {
    // name: "Header",
    data() {
        return {
            show: false,
            mainProps: { width: 200, height: 50, class: 'm1' },
            image: '',
            name: ''
        }
    },
    methods: {
        logout() {
            logout();
            this.$router.push({ name: 'login' });
        },
        getImage() {
            this.image = getImage() ? getImage() : 'data:image/png;base64,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'
        },
        getName() {
            this.name = getFirstname() + " " + getLastname();
        }
    },
    mounted() {
        this.getImage();
        this.getName();
    }

}