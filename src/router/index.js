import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../components/LandingPage.vue'
import Features from '../components/FeaturesPage.vue'
import Pricing from '../components/PricingPage.vue'
import About from '../components/AboutPage.vue'
import Contact from '../components/ContactPage.vue'
import FAQ from '../components/FAQPage.vue'
import Terms from '../components/Terms.vue'
import Privacy from '../components/Privacy.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
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
            redirect: {name: "Pricing"}
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
        }
    ]
})
