import { GET_AGENT, CREATE_RATING, GET_RATING } from "../../../store/action";
import { mapGetters } from "vuex";
import { getToken, getRole } from "../../../config";

export default {
    data() {
        return {
            loading: false,
            message: '',
            link: "https://wa.me/",
            mailto: "mailto:",
            rating: 0,
            info: ''
        }
    },
    methods: {
        setRating: function(rating) {
            this.rating = rating;
            // alert(rating);
            if (getToken()) {
                if (getRole() != 'beta') {
                    const payload = {
                        'agent': this.$route.params.id,
                        'rating': rating
                    }
                    this.$store.dispatch(CREATE_RATING, payload).then(
                        () => {
                            this.getRatings();
                        }
                    ).catch(() => {
                        alert("User already rated this agent");
                        this.getRatings();
                    });
                } else {
                    alert("User with agent role cannot rate an agent");
                }
            } else {
                this.$router.push({ name: 'login' });
            }
        },
        whatsapp(phone) {
            window.open(this.link + phone, '_blank');
        },
        email(mail) {
            window.open("mailto:" + mail, '_blank');
        },
        getAgentHouse(payload) {
            this.loading = true;
            this.$store.dispatch(GET_AGENT, payload).then(
                () => {
                    this.loading = false;
                    this.message = "Agent is yet to add any property online";
                },
                () => {
                    this.loading = false;
                    this.message = "Property not available at the momment";
                }
            ).catch(() => {
                this.loading = false;
                this.message = "Error Loading Property at the moment. Server Error!";
            });
        },
        getRatings() {
            this.$store.dispatch(GET_RATING, this.$route.params.id).then(
                (data) => {
                    this.sumRating(data);
                }
            ).catch();
        },
        sumRating(value) {
            const rate = value.data
            const average = rate.reduce(function(a, b) {
                return a + b.rating;
            }, 0) / rate.length;
            this.info = average;
            // alert(this.info)
        },

        strLn(val) {
            return val.length > 20 ? val.substring(0, 20) + '...' : val;
        },
        getImage(user) {
            return user.image ? user.image : "https://image.flaticon.com/icons/png/512/21/21104.png";
        }
    },
    computed: {
        ...mapGetters(['agent', 'ratings'])
    },
    mounted() {
        // alert(this.$route.params.id);
        this.getAgentHouse(this.$route.params.id);
        this.getRatings();
    }
}