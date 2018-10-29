import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../components/LandingPage.vue'
import Features from '../components/FeaturesPage.vue'
import Pricing from '../components/PricingPage.vue'
import About from '../components/AboutPage.vue'
import Contact from '../components/ContactPage.vue'
import Terms from '../components/TermsPage.vue'
import Privacy from '../components/PrivacyPage.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Thanks from '../components/Thanks.vue'
import Welcome from '../components/Welcome.vue'
import Dashboard from '../components/Dashboard.vue'
import Results from '../components/Results.vue'
import PageNotFound from '../components/PageNotFound.vue'

import store from '../store/store'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        } else if (savedPosition) {
            return savedPosition
        }
        return {x: 0, y: 0}
    },
    routes: [
        {
            path: "/",
            name: "Landing",
            component: Landing,
            beforeEnter: (to, from, next) => {
                if (store.state.login.isLoggedIn) {
                    next({name: "Dashboard"})
                    return
                }
                next()
            }
        },
        {
            path: "/features",
            name: "Features",
            component: Features
        },
        {
            path: "/pricing",
            name: "Pricing",
            component: Pricing
        },
        {
            path: "/about",
            name: "About",
            component: About
        },
        {
            path: "/contact",
            name: "Contact",
            component: Contact
        },
        {
            path: "/faq",
            name: "FAQ",
            redirect: {name: "Pricing", hash: "#faq"}
        },
        {
            path: "/terms",
            name: "Terms",
            component: Terms
        },
        {
            path: "/privacy",
            name: "Privacy",
            component: Privacy
        },
        {
            path: "/register",
            name: "Register",
            component: Register,
            beforeEnter: (to, from, next) => {
                if (store.state.login.isLoggedIn) {
                    next({name: "Dashboard"})
                    return
                }
                next()
            }
        },
        {
            path: "/thanks",
            name: "Thanks",
            component: Thanks,
            beforeEnter: (to, from, next) => {
                if (store.state.login.isLoggedIn) {
                    next({name: "Dashboard"})
                }
                next()
            }
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
            beforeEnter: (to, from, next) => {
                if (store.state.login.isLoggedIn) {
                    next({name: "Dashboard"})
                }
                next()
            }
        },
        {
            path: "/welcome",
            name: "Welcome",
            component: Welcome,
            beforeEnter: (to, from, next) => {
                if (store.state.login.isLoggedIn) {
                    if (from.name == "Login") {
                        next()
                        return
                    }
                    next({name: "Dashboard"})
                    return
                }
                next({name: "Landing"})
            }
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: Dashboard,
            beforeEnter: (to, from, next) => {
                if (!store.state.login.isLoggedIn) {
                    next({name: "Landing"})
                }
                next()
            }
        },
        {
            path: "/results",
            name: "Results",
            component: Results,
        },
        {
            path: "/logout",
            name: "Logout",
            redirect: {name: "Landing"}
        },
        {
            path: "/notfound",
            name: "PageNotFound",
            component: PageNotFound
        },
        {
            path: "*",
            redirect: {name: "PageNotFound"}
        }
    ]
})

export default router
