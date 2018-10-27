import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../components/LandingPage.vue'
import Features from '../components/FeaturesPage.vue'
import Pricing from '../components/PricingPage.vue'
import About from '../components/AboutPage.vue'
import Contact from '../components/ContactPage.vue'
import Terms from '../components/TermsPage.vue'
import Privacy from '../components/PrivacyPage.vue'
import PageNotFound from '../components/PageNotFound.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
        return {x: 0, y: 0}
    },
    routes: [
        {
            path: "/",
            name: "Landing",
            component: Landing
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
