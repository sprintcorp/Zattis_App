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
            type: ""
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

            // const payload = {
            //     'type': this.type,
            //     'category': this.category,
            //     'features': this.features,
            //     'description': this.decription,
            //     'phone': this.phone,
            //     'name': this.name,
            //     'price': this.price,
            //     'network': this.network,
            //     'image': formData
            // };
            this.$store.dispatch(CREATE_PROPERTIES, formData);
        }
    },
    computed: {
        ...mapGetters(['categories'])
    },
    mounted() {
        this.getCategory()
    }
}