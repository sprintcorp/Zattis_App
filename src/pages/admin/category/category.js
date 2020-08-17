import { GET_CATEGORIES, DELETE_CATEGORY, CREATE_CATEGORY } from "../../../store/action"
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            loading: false,
            message: "",
            name: "",
            description: "",
            toast: false
        }
    },
    methods: {
        getCategories() {
            this.loading = true;
            this.$store.dispatch(GET_CATEGORIES).then(
                () => {
                    this.loading = false;
                    this.message = "No Category Available";
                }

            ).catch(
                () => {
                    this.loading = false;
                    this.message = "Error Fetching Category";
                }
            );
        },
        deleteCategory(id) {
            this.$store.dispatch(DELETE_CATEGORY, id).then(
                () => {
                    this.getCategories()
                }

            ).catch(
                () => {
                    this.getCategories()
                }
            );
        },
        createCategory() {
            const payload = {
                'name': this.name,
                'description': this.description
            };
            this.toast = false;
            this.$store.dispatch(CREATE_CATEGORY, payload).then(
                () => {
                    this.toast = true;
                    this.$bvToast.toast(`Category created successfully`, {
                        title: 'Successful Operation',
                        autoHideDelay: 5000,
                        appendToast: this.toast,
                        variant: 'success'
                    })
                    this.getCategories();

                }
            ).catch(() => {
                // console.log(error)
                this.toast = true;
                this.$bvToast.toast(`Duplicate field value entered`, {
                    title: 'Error Operation',
                    autoHideDelay: 5000,
                    appendToast: this.toast,
                    variant: 'danger'
                })
            });
        }

    },
    computed: {
        ...mapGetters(['categories'])
    },
    mounted() {
        this.getCategories();
    }
}