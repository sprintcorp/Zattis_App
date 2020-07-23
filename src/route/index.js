import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [{
            path: '/login',
            component: () =>
                import ('../pages/public/login/login.vue'),
            name: 'login',
        },

        {
            path: '/',
            component: () =>
                import ('../layout/public/layout.vue'),
            redirect: {
                name: 'Home'
            },
            children: [{
                    path: '/',
                    component: () =>
                        import ('../pages/public/home/home.vue'),
                    name: 'home'
                },
                {
                    path: '/properties',
                    component: () =>
                        import ('../pages/public/properties/properties.vue'),
                    name: 'properties'

                },
                {
                    path: '/property/:id',
                    component: () =>
                        import ('../pages/public/property/property.vue'),
                    name: 'property'

                }

            ]
        }
    ]
})
export default router;