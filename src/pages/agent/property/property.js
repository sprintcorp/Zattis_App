import { gmapsMap, gmapsMarker } from 'x5-gmaps'
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
        }
    },
    mounted() {

    }
}