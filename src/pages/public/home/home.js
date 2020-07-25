export default {
    data() {
        return {
            place: ""
        }
    },
    methods: {
        beforeEnter(el) {
            el.style.left = '-200px';
            el.style.opacity = 0
        },
        // enter(el, done) {
        //     let delay = parseInt(el.getAttribute('delay'));
        //     let left = parseInt(el.getAttribute('left'));

        // Velocity(
        //     el, { opacity: 1, left }, { delay, duration: 500, complete: done }
        // )
    }
}
// }