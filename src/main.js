import Vue from 'vue'
import App from './App.vue'
import router from './route'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAnimateNumber from 'vue-animate-number'
import VueScrollReveal from 'vue-scroll-reveal';
import * as VueGoogleMaps from 'vue2-google-maps'
import store from './store';
import { componentRegistry } from "./registry/registry";

// import AOS from 'aos';
// import "aos/dist/aos.css";

// installComponents: true,
componentRegistry(Vue);
Vue.config.productionTip = false
    // Vue.use(x5GMaps, { key: 'AIzaSyBRqU75XYMpXNvbUW0PiMiHdL2_VTTbG0s', libraries: ['places'] })
    // Vue.use(AOS);
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBoBBlVq94q_IEDd0uoTvDoOZp1FSemMgw',
        libraries: 'places',
    },
})

Vue.use(VueAnimateNumber)
Vue.use(BootstrapVue)
Vue.use(VueScrollReveal, {
    duration: 800,
    scale: 1,
    distance: '50px',
    reset: true,
});
library.add(faSpinner)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(IconsPlugin)
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')