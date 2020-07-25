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
            path: '/register',
            component: () =>
                import ('../pages/public/register/register.vue'),
            name: 'register',
        },
        {
            path: '/recover-password',
            component: () =>
                import ('../pages/public/forgot-password/password.vue'),
            name: 'reset-password',
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

                },
                {
                    path: '/sellers',
                    component: () =>
                        import ('../pages/public/sellers/sellers.vue'),
                    name: 'sellers'
                },
                {
                    path: '/seller/:id',
                    component: () =>
                        import ('../pages/public/seller/seller.vue'),
                    name: 'seller'
                }

            ]
        }
    ]
});
export default router;