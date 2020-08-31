import { getFirstname, getLastname } from "../../../config";
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        getName() {
            this.name = getFirstname() + " " + getLastname();
        }
    },
    mounted() {
        this.getName()
    }
}