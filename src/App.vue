<template>
    <div>
        <div class="container-fluid mx-0">
            <router-view :appData="appData">
                <app-nav slot="nav" :navData="navData"></app-nav>
                <app-search slot="search" class="bg-transparent"></app-search>
                <app-footer slot="footer" :footerData="footerData"></app-footer>
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
                            name: "Contact",
                            description: "Contact"
                        },
                        {
                            name: "About",
                            description: "About"
                        },
                    ],
                    actions: [
                        {
                            name: "Login",
                            description: "Sign in",
                            variant: "primary",
                            view: false
                        },
                        {
                            name: "Register",
                            description: "Register",
                            variant: "outline-primary",
                            view: false
                        },
                        {
                            name: "Logout",
                            description: "Sign out",
                            variant: "danger",
                            view: true
                        }
                    ],
                    logo: require("./assets/images/logo3.svg")
                },
                appData: {
                    home: {
                        title: "Rentlify",
                        content: "Revolutionize your life",
        	        	details: "AI driven platform to find your optimal home.",
                        callToAction: "Rent now",
                        secondaryAction: "Sign up",
                        img: require("./assets/images/bg6.jpeg"),
                        logo: require("./assets/images/logo3.svg"),
                        bgSecondary: "#00B5D2",
                        bgTertiary: "#8ED200"
                    },
                    features: {
                        list: [
                            {
                                title: "AI Driven",
                                content: "Experience the real power of Artificial Intelligence.",
                                longDescription: "Rentlify utilizes Artifical Intelligence to quickly provide reliable results. It does this through Machine Learning, by scouring millions of data in the internet, it can give a near perfect report of real estate listings.",
                                img: require("./assets/images/feature1-main.jpeg"),
                                properties: [
                                    "Artificial Intelligence",
                                    "Machine Learning",
                                    "Big Data"
                                ],
                                read: "Get Started",
                                link: "Register"
                            },
                            {
                                title: "Global Reach",
                                content: "Rent anywhere, reliably, and safely.",
                                longDescription: "By using the power of the internet, Rentlify is able to analyze millions of millions of data points all around the world.",
                                img: require("./assets/images/feature2-main.jpeg"),
                                properties: [
                                    "Craigslist",
                                    "Airbnb",
                                    "OLX",
                                    "Reddit",
                                    "The whole internet"
                                ],
                                read: "Explore",
                                link: "Results"
                            },
                            {
                                title: "Comprehensive Reporting",
                                content: "Assess property listings and find a perfect fit for you.",
                                longDescription: "With the near infinite factors taken into account in renting, Rentlify provides a comprehensive report that is unmatched by no other. It includes:",
                                img: require("./assets/images/feature3-main.jpeg"),
                                properties: [
                                    "Market Analysis",
                                    "Natural Disaster Risks",
                                    "Political Landscape Risks",
                                    "Socioeconomic Risks",
                                    "Crime Rate",
                                    "Poverty Rate"
                                ],
                                read: "Rent Now",
                                link: "Results"
                            }
                        ],
                        description: "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.",
                        attribution: "Steve Jobs",
                        callToAction: "Dare to change your life?",
                        actionBtn: "Get It Now",
                        actionPage: "Pricing"
                    },
                    pricing: {
                        prices: [
                            {
                                title: "Basic",
                                details: "Free",
                                emphasize: false,
                                units: [
                                    "Lifestyle Analysis",
                                    "Global search",
                                    "5 Star Rating System"
                                ],
		                        price: "FREE",
		                        action: "Sign-up",
		                        buttonType: "btn-outline-secondary",
                                link: "Register"
                            },
                            {
                                title: "Economy",
                                details: "Premium",
                                emphasize: true,
                                units: [
                                    "Lifestyle Analysis",
                                    "Global search",
                                    "5 Star Rating System",
			                        "Basic Reports"
                                ],
		                        price: "PHP 100.00 / Search",
		                        action: "Purchase",
		                        buttonType: "btn-primary",
                                link: "Register"
                            },
                            {
                                title: "Advanced",
                                details: "Platinum",
                                emphasize: false,
                                units: [
                                    "Lifestyle Analysis",
                                    "Global search",
                                    "5 Star Rating System",
			                        "Basic Reports",
                                    "Comprehensive Reports",
                                    "Lifetime Fee"
                                ],
		                        price: "PHP 1,000.00",
		                        action: "Contact Us",
		                        buttonType: "btn-info",
                                link: "Contact"
                            }
                        ],
                        description: "I could either watch it happen or be a part of it.",
                        attribution: "Elon Musk"
                    },
                    faq: {
                        list: [
                            {
                                id: "q1",
                                question: "How accurate is Rentlify?",
                                answer: "Rentlify uses proprietary AI technology to provide relevant, reliable, and accurate reports."
                            },
                            {
                                id: "q2",
                                question: "Why is there a free pricing tier?",
                                answer: "We love to give back to the community that have made this platform possible."
                            },
                            {
                                id: "q3",
                                question: "Is my data safe?",
                                answer: "Rentlify destroys your data a month after submission."
                            }
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
                            email: "support@rentlify.com",
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
                        ],
                        sales: {
                            name: "Sales",
                            description: "Consult with our experts to get the best advice on how you can move forward.",
                            list: [
                                {
                                    name: "General",
                                    phone: "02 123-4567"
                                },
                                {
                                    name: "Premium",
                                    phone: "02 456-4567"
                                },
                                {
                                    name: "Platinum",
                                    phone: "02 789-4567"
                                },
                                {
                                    name: "Enterprise",
                                    phone: "02 123-1234"
                                },
                                {
                                    name: "Government",
                                    phone: "02 123-4567"
                                },
                                {
                                    name: "VIP",
                                    phone: "02 123-4567"
                                }
                            ]
                        },
                        technical: {
                            name: "Technical Support",
                            description: "Our Subject Matter Experts will skillfully guide you through troubleshooting your problems.",
                            list: [
                                {
                                    name: "Account",
                                    phone: "02 123-4567"
                                },
                                {
                                    name: "Technical",
                                    phone: "02 456-4567"
                                },
                                {
                                    name: "Terms and Conditions",
                                    phone: "02 753-1529"
                                },
                                {
                                    name: "Data Privacy",
                                    phone: "02 789-4567"
                                },
                                {
                                    name: "AI Tech",
                                    phone: "02 846-1345"
                                },
                                {
                                    name: "Fraud",
                                    phone: "02 123-1234"
                                }
                            ]
                        },
                        account: {
                            name: "Account Management",
                            description: "Raise your concerns to our professional managers.",
                            list: [
                                {
                                    name: "Customer",
                                    phone: "02 123-4567"
                                },
                                {
                                    name: "Premium",
                                    phone: "02 456-4567"
                                },
                                {
                                    name: "Platinum",
                                    phone: "02 789-4567"
                                },
                                {
                                    name: "Enterprise",
                                    phone: "02 123-1234"
                                },
                                {
                                    name: "Feedback",
                                    phone: "02 123-5678"
                                },
                                {
                                    name: "Account Sales",
                                    phone: "02 789-7890"
                                }
                            ]
                        }
                    },
                    about: {
                        team: [
                            {
                                name: "Arvin Sevilla",
                                position: "CEO",
                                details: "Genius, billionaire, playboy, philanthropist.",
                                img: require("./assets/images/person1.jpeg")
                            },
                            {
                                name: "Sevilla Arvin",
                                position: "CTO",
                                details: "Winners don't make excuses.",
                                img: require("./assets/images/person2.jpeg")
                            },
                            {
                                name: "Allives Nivra",
                                position: "COO",
                                details: "Persistence is very important. You should not give up unless you are forced to give up.",
                                img: require("./assets/images/person3.jpeg")
                            }
                        ],
                        purpose: "We exist to empower people through artificial intelligence.",
                        vision: "A world where there is a home for each and every individual.",
                        visionLogo: require("./assets/images/vision.svg"),
                        mission: "Our mission is to provide the most powerful platform for renting residential properties to provide individuals safety and ease of transactions.",
                        missionLogo: require("./assets/images/mission.svg"),
                        description: "As we look ahead into the next century, leaders will be those who empower others.",
                        attribution: "Bill Gates",
                        callToAction: "Dare to change the world?",
                        actionBtn: "Join Our Team",
                        actionPage: "Contact"
                    },
                    dashboard: {
                        img: require("./assets/images/bg2.jpeg")
                    },
                    notFound: {
                        img: require("./assets/images/404.jpeg")
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
                            link: "#faq",
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
                    others: [
                        'Icons made by <a href="http://www.freepik.com" title="Freepik" target="_blank">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>',
                        "&copy; Rentlify 2018"
                    ]
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

<style>
    body {
        /*
        font-family: 'Niramit', sans-serif;
        background-color: #00BB77;
        background-color: #AAEE99;
        color: #0b0a07;
        */
        font-family: 'Arimo', sans-serif;
    }

    .text-custom-primary {
        /*
        color: #00BB77!important;
        */
        color: #00BB38;
    }

    .btn-primary {
        /*
        background-color: #00BB38;
        border-color: #00BB38;
        */
        background-color: #00BB38;
        border-color: #00BB38;
    }

    .btn-outline-primary {
        color: #00BB38;
        border-color: #00BB38;
    }

    .btn-primary:hover {
        background-color: #00952C;
        border-color: #008829;
    }

    .btn-outline-primary:hover {
        background-color: #00BB38;
        border-color: #00BB38;
    }

    .btn-primary.focus, 
    .btn-primary:focus {
        background-color: #00BB38;
        border-color: #00BB38;
    }

    .show > .btn-primary.dropdown-toggle {
        background-color: #00BB38;
        border-color: #00BB38;
    }

    .btn-secondary {
        background-color: #00B5D2;
        border-color: #00B5D2;
    }

    .btn-outline-secondary {
        color: #00B5D2;
        border-color: #00B5D2;
    }

    .btn-secondary:hover {
        background-color: #0095AC;
        border-color: #00899F;
    }

    .btn-outline-secondary:hover {
        background-color: #00B5D2;
        border-color: #00B5D2;
    }

    .btn-info {
        background-color: #8ED200;
        border-color: #8ED200;
    }

    .btn-outline-info {
        color: #8ED200;
        border-color: #8ED200;
    }

    .btn-info:hover {
        background-color: #75AC00;
        border-color: #6B9F00;
    }

    .btn-outline-info:hover {
        background-color: #8ED200;
        border-color: #8ED200;
    }

    .text-custom-secondary {
        /*
        color: #AAEE99;
        */
        color: #00B5D2;
    }

    .text-custom-tertiary {
        /*
        color: #0b0a07;
        */
        color: #8ED200;
    }

    .text-custom-other2 {
        color: #e3d87e;
    }

    .bg-custom-primary {
        /*
        background-color: #00BB77;
        */
        background-color: #00BB38;
    }

    .bg-custom-secondary {
        /*
        background-color: #AAEE99;
        */
        background-color: #00B5D2;
    }

    .bg-custom-tertiary {
        /*
        background-color: #0B0A07;
        */
        background-color: #8ED200;
    }

    .bg-custom-other {
        background-color: #bbcea8;
    }

    .bg-custom-other2 {
        background-color: #e3d87e;
    }

</style>
