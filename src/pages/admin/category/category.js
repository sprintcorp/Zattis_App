import { GET_CATEGORIES, DELETE_CATEGORY, CREATE_CATEGORY } from "../../../store/action"
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            loading: false,
            message: "",
            name: "",
            description: "",
            toast: false,
            load: false
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
                    this.$swal({
                        text: 'Category deleted successfully',
                        icon: 'success',
                        timer: 5000
                    });
                    this.getCategories()
                }

            ).catch(
                () => {
                    this.$swal({
                        // title: 'Error!',
                        text: 'Error deleting category',
                        icon: 'error',
                        timer: 5000
                            // confirmButtonText: 'Cool'
                    });
                    this.getCategories()
                }
            );
        },
        createCategory() {
            const payload = {
                'name': this.name,
                'description': this.description
            };
            this.load = true;
            this.$store.dispatch(CREATE_CATEGORY, payload).then(
                () => {
                    this.$swal({
                        text: 'Category created successfully',
                        icon: 'success',
                        timer: 5000
                    });
                    this.getCategories();
                    this.load = false;
                }
            ).catch(() => {
                this.load = false;
                this.$swal({
                    // title: 'Error!',
                    text: 'Category Already exist',
                    icon: 'warning',
                    timer: 5000
                        // confirmButtonText: 'Cool'
                });
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