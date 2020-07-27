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
                name: 'home'
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
        },
        {

            path: '/user',
            component: () =>
                import ('../layout/user/layout.vue'),
            redirect: {
                name: 'user'
            },
            children: [{
                path: '/user',
                component: () =>
                    import ('../pages/user/dashboard/dashboard.vue'),
                name: 'user'
            }, {
                path: 'saved-property',
                component: () =>
                    import ('../pages/user/properties/properties.vue'),
                name: 'userProperty'
            }, {
                path: 'profile',
                component: () =>
                    import ('../pages/user/profile/profile.vue'),
                name: 'userProfile'
            }, {
                path: 'password',
                component: () =>
                    import ('../pages/user/password/password.vue'),
                name: 'userPassword'
            }]

        }
    ]
});
export default router;