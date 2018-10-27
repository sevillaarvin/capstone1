<template>
    <div>
        <div class="container-fluid mx-0 bg-dark">
            <router-view :appData="appData">
                <!-- TODO: remove border background -->
                <app-nav slot="nav" class="border border-danger navbar-dark bg-info" :navData="navData"></app-nav>
                <app-search slot="search" class="bg-transparent"></app-search>
                <!-- TODO: remove border background -->
                <app-footer slot="footer" class="border border-danger bg-warning" :footerData="footerData"></app-footer>
            </router-view>
        </div>
    </div>
</template>

<script>
    import Nav from './components/Nav.vue'
    import Footer from './components/Footer.vue'
    import Search from './components/Search.vue'

    export default {
        data() {
            return {
                navData: {
                    links: [
                        {
                            name: "Landing",
                            description: "Home"
                        },
                        {
                            name: "Features",
                            description: "Features"
                        },
                        {
                            name: "Pricing",
                            description: "Pricing"
                        },
                        {
                            name: "About",
                            description: "About"
                        },
                        {
                            name: "Contact",
                            description: "Contact"
                        }
                    ],
                    actions: [
                        {
                            name: "Login",
                            description: "Sign in",
                            variant: "primary"
                        },
                        {
                            name: "Register",
                            description: "Register",
                            variant: "outline-primary"
                        }
                    ],
                    logo: "src/assets/images/logo2.png"
                },
                appData: {
                    home: {
                        title: "Rentlify",
                        content: "Revolutionize your life",
        	        	details: "AI driven platform to find your optimal home.",
                        callToAction: "Rent now",
                        secondaryAction: "Sign up",
                        img: "src/assets/images/construction.jpeg"
                    },
                    features: {
                        list: [
                            {
                                title: "Feature1",
                                content: "This is feature 1. This is its summary.",
                                longDescription: "This is feature 1. It has such and such feature. All of the features in feature 1 are feature 1. This is a very nice feature because feature 1.",
                                img: "src/assets/images/feature1.jpeg",
                                properties: [
                                    "Property1",
                                    "Property2",
                                    "Property3",
                                    "Property4",
                                    "Property5"
                                ],
                                read: "Read more"
                            },
                            {
                                title: "Feature2",
                                content: "This is feature 2. This is its summary.",
                                longDescription: "This is feature 2. It has such and such feature. All of the features in feature 2 are feature 2. This is a very nice feature because feature 2.",
                                img: "src/assets/images/feature2.jpeg",
                                properties: [
                                    "Property1",
                                    "Property2",
                                    "Property3",
                                    "Property4",
                                    "Property5"
                                ],
                                read: "Read more"
                            },
                            {
                                title: "Feature3",
                                content: "This is feature 3. This is its summary.",
                                longDescription: "This is feature 3. It has such and such feature. All of the features in feature 3 are feature 3. This is a very nice feature because feature 3.",
                                img: "src/assets/images/feature3.jpeg",
                                properties: [
                                    "Property1",
                                    "Property2",
                                    "Property3",
                                    "Property4",
                                    "Property5"
                                ],
                                read: "Read more"
                            }
                        ],
                        description: "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.",
                        attribution: "Steve Jobs"
                    },
                    pricing: {
                        prices: [
                            {
                                title: "Tier1",
                                details: "Basic/Free",
                                emphasize: false,
                                units: [
                                    "This feature",
                                    "That feature",
                                    "Hmmm"
                                ],
		                        price: "FREE",
		                        action: "Sign-up",
		                        buttonType: "btn-outline-secondary"
                            },
                            {
                                title: "Tier2",
                                details: "Premium",
                                emphasize: true,
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
                                emphasize: false,
                                units: [
                                    "This feature",
                                    "That feature",
                                    "Hmmm",
			                        "More Features",
			                        "Even more features"
                                ],
		                        price: "PHP 1,000.00 / mo",
		                        action: "Contact Us",
		                        buttonType: "btn-success"
                            }
                        ],
                        description: "I could either watch it happen or be a part of it.",
                        attribution: "Elon Musk"
                    },
                    faq: {
                        list: [
                            {
                                id: "q1",
                                question: "Is this?",
                                answer: "Yes, it is this."
                            },
                            {
                                id: "q2",
                                question: "Is that?",
                                answer: "Yes, it is that."
                            },
                            {
                                id: "q3",
                                question: "Will it?",
                                answer: "Yes, it will."
                            },
                            {
                                id: "q4",
                                question: "Will that?",
                                answer: "Yes, that will."
                            },
                            {
                                id: "q5",
                                question: "Won't it?",
                                answer: "No, it won't."
                            },
                        ]
                    },
                    contact: {
                        inputs: [
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
	                    ],
                        details: {
                            name: "Rentlify, Inc.",
                            email: "support@iwantrent.com",
                            phone1: "02 123-4567",
                            phone2: "02 123-7654",
                            phone3: "02 987-7654",
                            address: "3F Caswynn Building, Quezon City"
                        },
                        description: "Your most unhappy customers are your greatest source of learning.",
                        attribution: "Bill Gates",
                        nav: [
                            "Sales",
                            "Technical Support",
                            "Account Management"
                        ]
                    },
                    about: {
                        team: [
                            {
                                name: "Person1",
                                details: "This is person 1. He is a person. He is a such and such person with such and such background.",
                                img: "src/assets/images/person.jpeg"
                            },
                            {
                                name: "Person2",
                                details: "This is person 2. He is a person. He is a such and such person with such and such background.",
                                img: "src/assets/images/person.jpeg"
                            },
                            {
                                name: "Person3",
                                details: "This is person 3. He is a person. He is a such and such person with such and such background.",
                                img: "src/assets/images/person.jpeg"
                            }
                        ],
                        purpose: "Our company exists to empower people through artificial intelligence.",
                        vision: "Our vision is a world where there is always a home for each and every individual in our society today that is completely lacking.",
                        mission: "Our mission is to provide the last platform for real estate transactions to provide lessors and lessees with safety and ease of transactions.",
                        description: "As we look ahead into the next century, leaders will be those who empower others.",
                        attribution: "Bill Gates",
                        callToAction: "Are you ready to change the world?",
                        actionBtn: "Join Our Team"
                    }
                },
                footerData: {
                    links: [
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
                            name: "FAQ",
                            description: "Help"
                        }
                    ],
                    socials: [
                        {
                            name: "Google",
                            icon: "fab fa-google",
                            effect: "btn-go",
                            link: "https://www.gmail.com"
                        },
                        {
                            name: "Facebook",
                            icon: "fab fa-facebook",
                            effect: "btn-fb",
                            link: "https://www.facebook.com"
                        },
                        {
                            name: "Linked In",
                            icon: "fab fa-linkedin",
                            effect: "btn-li",
                            link: "https://www.linkedin.com"
                        },
                        {
                            name: "Twitter",
                            icon: "fab fa-twitter",
                            effect: "btn-tw",
                            link: "https://www.twitter.com"
                        }
                    ],
                    copyright: "&copy; iWantRent 2018"
                }
            }
        },
        components: {
            appNav: Nav,
            appFooter: Footer,
            appSearch: Search
        }
        
    }
</script>

<style scoped>
    /* TODO: modify bg dark appropriately */
    .bg-dark {
        height: 100vh;
    }
</style>
