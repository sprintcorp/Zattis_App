import Circular_Loader from "../components/loader.vue";
import Grow_Loader from "../components/loading.vue";
import NoContent from "../components/no-content.vue";
import Button_Loader from "../components/button_loading.vue";
import StarRating from 'vue-star-rating';

function componentRegistry(Vue) {
    Vue.component('circular_loader', Circular_Loader);
    Vue.component('grow_loader', Grow_Loader);
    Vue.component('no-content', NoContent);
    Vue.component('button_loader', Button_Loader);
    Vue.component('star-rating', StarRating);
}

export {
    componentRegistry
}