export default {
    name: "Header",
    data() {
        return {
            show: false,
        }
    },
    methods: {
        displaySearchForm() {
            this.show = true
        }
    }
}