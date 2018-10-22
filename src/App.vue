<template>
  <div id="app" class="container border border-primary d-flex flex-column">

    <app-nav :links="nav.navLinks" :logo="nav.logo"></app-nav>
    <router-view class="" :appData="appData"></router-view>
    <app-footer :links="footer.footerLinks"></app-footer>

    <!--
    <router-view :persons="about" :features="features" :links="nav.navLinks" :homeData="home"></router-view>
    <app-home :homeData="home"></app-home>
    <app-features :features="features"></app-features>
    <app-about :persons="about"></app-about>
    <app-contact></app-contact>
    <component :is="componentSelected" class=""></component>
    -->
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  data () {
    return {
        componentSelected: "app-home",
        appData: {
            home: {
                title: "iWantRent",
                content: "Description",
                callToAction: "Rent now",
                secondaryAction: "List property",
                img: "src/assets/images/construction.jpeg"
            },
            features: [
                {
                    title: "Feature1",
                    content: "This is feature 1",
                    img: "src/assets/images/construction.jpeg",
                    read: "Read more"
                },
                {
                    title: "Feature2",
                    content: "This is feature 2",
                    img: "src/assets/images/construction.jpeg",
                    read: "Read more"
                },
                {
                    title: "Feature3",
                    content: "This is feature 3",
                    img: "src/assets/images/construction.jpeg",
                    read: "Read more"
                }

            ],
            prices: [
                {
                    title: "Tier1",
                    details: "Basic/Free",
                    units: [
                        "This feature",
                        "That feature",
                        "Hmmm"
                    ]
                },
                {
                    title: "Tier1",
                    details: "Basic/Free",
                    units: [
                        "This feature",
                        "That feature",
                        "Hmmm"
                    ]
                }
            ],
            about: [
                {
                    name: "Person1",
                    details: "This is person 1",
                    img: "src/assets/images/construction.jpeg"
                },
                {
                    name: "Person2",
                    details: "This is person 2",
                    img: "src/assets/images/construction.jpeg"
                },
                {
                    name: "Person3",
                    details: "This is person 3",
                    img: "src/assets/images/construction.jpeg"
                }
            ]
        },
        nav: {
            navLinks: [
                {
                    link: "#home",
                    name: "Landing",
                    description: "Home"
                },
                {
                    link: "#features",
                    name: "Features",
                    description: "Features"
                },
                {
                    link: "#pricing",
                    name: "Pricing",
                    description: "Pricing"
                },
                {
                    link: "#about",
                    name: "About",
                    description: "About"
                },
                {
                    link: "#contact",
                    name: "Contact",
                    description: "Contact"
                }
            ],
            logo: "src/assets/images/logo2.png",
        },
        footer: {
            footerLinks: [
                {
                    link: "#terms",
                    name: "Terms and Conditions"
                },
                {
                    link: "#help",
                    name: "Help"
                }
            ]
        }
    }
  },
  components: {
    appNav: Nav,
    appFooter: Footer
  }
}
</script>

<style>
#app {
  font-family: 'Niramit', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}

</style>
