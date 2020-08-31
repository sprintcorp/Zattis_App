import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from "../config";

Vue.use(VueRouter);
const preventRoutes = {
    beforeEnter: (to, from, next) => {
        if (getToken()) {
            next()
        } else {
            next('/login')
        }
    }
};
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
            path: '/password-reset/:token',
            component: () =>
                import ('../pages/public/reset-password/password.vue'),
            name: 'password-reset',
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
                    path: '/:id',
                    component: () =>
                        import ('../pages/public/category/properties.vue'),
                    name: 'category-properties'
                }, {
                    path: '/search',
                    component: () =>
                        import ('../pages/public/search/properties.vue'),
                    name: 'search'

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
            ...preventRoutes,
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

        },
        {
            path: '/agent',
            component: () =>
                import ('../layout/agent/layout.vue'),
            ...preventRoutes,
            redirect: {
                name: 'agent'
            },
            children: [{
                    path: '/agent',
                    component: () =>
                        import ('../pages/agent/dashboard/dashboard.vue'),
                    name: 'agent'
                }, {
                    path: 'property',
                    component: () =>
                        import ('../pages/agent/properties/properties.vue'),
                    name: 'agentProperties'
                }, {
                    path: 'profile',
                    component: () =>
                        import ('../pages/agent/profile/profile.vue'),
                    name: 'agentProfile'
                },
                {
                    path: 'password',
                    component: () =>
                        import ('../pages/agent/password/password.vue'),
                    name: 'agentPassword'
                },
                {
                    path: 'create',
                    component: () =>
                        import ('../pages/agent/create/create.vue'),
                    name: 'createProperty'
                }, {
                    path: 'my-property/:id',
                    component: () =>
                        import ('../pages/agent/property/property.vue'),
                    name: 'agentProperty'
                }
            ]
        }, {
            path: '/admin',
            component: () =>
                import ('../layout/admin/layout.vue'),
            ...preventRoutes,
            redirect: {
                name: 'admin'
            },
            children: [{
                path: '/admin',
                component: () =>
                    import ('../pages/admin/dashboard/dashboard.vue'),
                name: 'admin'
            }, {
                path: 'users',
                component: () =>
                    import ('../pages/admin/users/users.vue'),
                name: 'users'
            }, {
                path: 'agents',
                component: () =>
                    import ('../pages/admin/agents/agents.vue'),
                name: 'agents'
            }, {
                path: 'agents/:id',
                component: () =>
                    import ('../pages/admin/agents/agent/agent.vue'),
                name: 'agentDetails'
            }, {
                path: 'properties',
                component: () =>
                    import ('../pages/admin/properties/properties.vue'),
                name: 'allProperties'
            }, {
                path: 'properties/:id',
                component: () =>
                    import ('../pages/admin/properties/property/property.vue'),
                name: 'singleProperty'
            }, {
                path: 'profile',
                component: () =>
                    import ('../pages/admin/profile/profile.vue'),
                name: 'adminProfile'
            }, {
                path: 'password',
                component: () =>
                    import ('../pages/admin/password/password.vue'),
                name: 'adminPassword'
            }, {
                path: 'category',
                component: () =>
                    import ('../pages/admin/category/category.vue'),
                name: 'adminCategory'
            }]
        }
    ]
});
export default router;