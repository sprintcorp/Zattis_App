import { gmapsMap, gmapsMarker } from 'x5-gmaps'
import { GET_HOUSE_BY_SLUG } from '../../../store/action'
import { mapGetters } from 'vuex'
export default {
    components: { gmapsMap, gmapsMarker },
    data() {
        return {
            slide: 0,
            sliding: null,
            // mapOptions: {
            //     center: { lat: 6.537935, lng: 3.3776352 },
            //     zoom: 10,
            // },
            marker: [{
                position: { lat: 6.537935, lng: 3.3776352 }
            }]
        }
    },
    methods: {
        onSlideStart() {
            this.sliding = true
        },
        onSlideEnd() {
            this.sliding = false
        },
        getHouse(payload) {
            this.loading = true;
            this.$store.dispatch(GET_HOUSE_BY_SLUG, payload).then(
                () => {
                    this.loading = false;
                }

            ).catch(() => {
                this.loading = false;

            });
        },
    },
    computed: {
        ...mapGetters(['house'])
    },
    mounted() {
        this.getHouse(this.$route.params.id);
    }
}