export default {
    data() {
        return {
            profile_image: "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
        }
    },
    methods: {
        chooseFiles() {
            document.getElementById("fileUpload").click()
        },
        fileChange(e) {
            this.profile_image = []
            let fileList = Array.prototype.slice.call(e.target.files);
            fileList.forEach(f => {

                if (!f.type.match("image.*")) {
                    return;
                }

                let reader = new FileReader();
                let that = this;

                reader.onload = function(e) {
                    that.profile_image.push(e.target.result);
                }
                reader.readAsDataURL(f);
            });
        }
    }
}