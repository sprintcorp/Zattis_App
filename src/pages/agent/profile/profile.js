import { GET_USER, UPDATE_USER } from "../../../store/action"
import { mapGetters } from "vuex"

export default {
    data() {
        return {
            saving: false,
            profile_image: "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg",
            loading: false,
            user: {
                firstname: "",
                lastname: "",
                address: "",
                phone: "",
                email: ""
            }
        }
    },
    methods: {
        chooseFiles() {
            document.getElementById("fileUpload").click()
        },
        fileChange() {
            let input = this.$refs.fileInput
            let file = input.files
            if (file && file[0]) {
                let reader = new FileReader
                reader.onload = e => {
                    this.profile_image = e.target.result
                }
                reader.readAsDataURL(file[0])
                this.$emit('input', file[0])
            }
        },
        getUserInformation() {
            this.loading = true
            this.$store.dispatch(GET_USER).then(
                (res) => {
                    // console.log(res),
                    this.loading = false,
                        this.user = res.data,
                        this.profile_image = res.data.image ? res.data.image : "https: //htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
                }

            ).catch(() => {
                this.loading = false
            });
        },
        updateUserInformation() {
            this.saving = true;
            const formData = new FormData();
            formData.append('image', this.profile_image)
            formData.append('firstname', this.user.firstname);
            formData.append('lastname', this.user.lastname);
            formData.append('email', this.user.email);
            formData.append('address', this.user.address);
            formData.append('phone', this.user.phone);
            // console.log(formData);
            this.$store.dispatch(UPDATE_USER, formData).then(
                () => {
                    this.$swal({
                        text: 'Profile updated successfully',
                        icon: 'success',
                        timer: 5000
                    });
                    this.saving = false;
                    location.reload();
                }
            ).catch(
                () => {
                    this.$swal({
                        text: 'Error updating profile',
                        icon: 'error',
                        timer: 5000
                    });
                    this.saving = false;
                }
            );
        }
    },
    computed: {
        ...mapGetters(['user'])
    },
    mounted() {
        // alert("hello");
        this.getUserInformation();
    }
}