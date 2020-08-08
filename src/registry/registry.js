import Circular_Loader from "../components/loader.vue";
import NoContent from "../components/no-content.vue";

function componentRegistry(Vue) {
    Vue.component('circular_loader', Circular_Loader);
    Vue.component('no-content', NoContent);
}

export {
    componentRegistry
}