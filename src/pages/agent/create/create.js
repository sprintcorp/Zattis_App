import { GET_CATEGORIES, CREATE_PROPERTIES } from "../../../store/action"
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            category: "",
            network: [],
            features: [],
            decription: "",
            files: [],
            phone: "",
            name: "",
            price: "",
            type: "",
            loading: false
        }
    },
    methods: {
        getCategory() {
            this.$store.dispatch(GET_CATEGORIES);
        },
        uploadFile(event) {

            this.files = event.target.files;
            console.log(this.files);
        },
        createProperty() {
            this.loading = true
            const formData = new FormData();
            for (const i of Object.keys(this.files)) {
                formData.append('image', this.files[i])
            }
            formData.append('type', this.type);
            formData.append('category', this.category);
            formData.append('features', this.features);
            formData.append('description', this.description);
            formData.append('phone', this.phone);
            formData.append('price', this.price);
            formData.append('network', this.network);
            formData.append('name', this.name);
            this.$store.dispatch(CREATE_PROPERTIES, formData).then(() => {
                this.loading = false;
                this.$swal({
                    text: 'Property created successfully',
                    icon: 'success',
                    timer: 5000
                });
            }).catch(() => {
                this.loading = false;
                this.$swal({
                    text: 'Property not created',
                    icon: 'error',
                    timer: 5000
                });
            });
        }
    },
    computed: {
        ...mapGetters(['categories'])
    },
    mounted() {
        this.getCategory()
    }
}