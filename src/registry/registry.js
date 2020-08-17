import Circular_Loader from "../components/loader.vue";
import Grow_Loader from "../components/loading.vue";
import NoContent from "../components/no-content.vue";
import Button_Loader from "../components/button_loading.vue";

function componentRegistry(Vue) {
    Vue.component('circular_loader', Circular_Loader);
    Vue.component('grow_loader', Grow_Loader);
    Vue.component('no-content', NoContent);
    Vue.component('button_loader', Button_Loader);
}

export {
    componentRegistry
}