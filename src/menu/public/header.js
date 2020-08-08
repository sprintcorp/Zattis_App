export default {
    name: "Header",
    data() {
        return {
            show: false,
            mainProps: { width: 200, height: 50, class: 'm1' }
        }
    },
    methods: {
        displaySearchForm() {
            this.show = true
        }
    }
}