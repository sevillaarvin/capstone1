<template>
  <div id="app" class="d-flex flex-column">
    <app-nav :links="nav.navLinks" :logo="nav.logo"></app-nav>
        <div class="container flex-grow-1 bg-custom-image shadow rounded-bottom">

            <router-view class="" :appData="appData"></router-view>
        </div>
    <app-footer :links="footer.footerLinks" :copyright="footer.copyright"></app-footer>
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
                content: "Rent fast, rent safe",
		details: "List and find a new home for renters around the world.",
                callToAction: "Rent now",
                secondaryAction: "List property",
                img: "src/assets/images/construction.jpeg"
            },
            features: [
                {
                    title: "Feature1",
                    content: "This is feature 1",
                    longDescription: "This is feature 1. It has such and such feature. All of the features in feature 1 are feature 1. This is a very nice feature because feature 1.",
                    img: "src/assets/images/feature1.jpeg",
                    read: "Read more"
                },
                {
                    title: "Feature2",
                    content: "This is feature 2",
                    longDescription: "This is feature 2. It has such and such feature. All of the features in feature 2 are feature 2. This is a very nice feature because feature 2.",
                    img: "src/assets/images/feature2.jpeg",
                    read: "Read more"
                },
                {
                    title: "Feature3",
                    content: "This is feature 3",
                    longDescription: "This is feature 3. It has such and such feature. All of the features in feature 3 are feature 3. This is a very nice feature because feature 3.",
                    img: "src/assets/images/feature3.jpeg",
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
                    ],
		    price: "PHP 0.00 / mo",
		    action: "Sign-up",
		    buttonType: "btn-outline-secondary"
                },
                {
                    title: "Tier2",
                    details: "Premium",
                    units: [
                        "This feature",
                        "That feature",
                        "Hmmm",
			"More Features"
                    ],
		    price: "PHP 100.00 / mo",
		    action: "Purchase",
		    buttonType: "btn-primary"
                },
                {
                    title: "Tier3",
                    details: "Enterprise",
                    units: [
                        "This feature",
                        "That feature",
                        "Hmmm",
			"More Features",
			"Even more features"
                    ],
		    price: "PHP 1,000.00 / mo",
		    action: "Contact Us",
		    buttonType: "btn-outline-primary"
                }
            ],
            about: [
                {
                    name: "Person1",
                    details: "This is person 1. He is a person.",
                    img: "src/assets/images/person.jpeg"
                },
                {
                    name: "Person2",
                    details: "This is person 2. He is a person.",
                    img: "src/assets/images/person.jpeg"
                },
                {
                    name: "Person3",
                    details: "This is person 3. He is a person.",
                    img: "src/assets/images/person.jpeg"
                }
            ],
	    contact: [
	    	{
			name: "Name",
			type: "text",
			placeholder: "John Doe"
		},
	    	{
			name: "Email",
			type: "email",
			placeholder: "john.doe@example.com"
		},
	    	{
			name: "Phone",
			type: "text",
			placeholder: "09123456789"
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
                    link: "#",
                    name: "Terms",
                    description: "Terms and Conditions"
                },
                {
                    link: "#",
                    name: "Privacy",
                    description: "Privacy Policy"
                },
                {
                    link: "#",
                    name: "Help",
                    description: "Help"
                }
            ],
	        copyright: "&copy; iWantRent 2018"
        }
    }
  },
  components: {
    appNav: Nav,
    appFooter: Footer
  }
}
</script>

<style scoped>
    #app {
      font-family: 'Niramit', 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    
      min-height: 100vh;
      color: #1F2421;
    }
</style>
