<template>
    <div class="row bg-transparent">
        <div class="col-12 shadow">
            <app-home class="h-custom-full" :homeData="appData.home">
                <slot name="search" slot="search"></slot>
            </app-home>
        </div>

        <div class="col-12 sticky-top">
            <slot name="nav"></slot>
        </div>

        <div class="col-12 border-top border-dark">
            <header class="row">
                <div class="col-12">
                    <h1 class="text-center py-5 text-custom-primary">Are you ready for the Revolution?</h1>
                </div>
            </header>
        </div>
        <div class="col-12 mb-5 shadow" v-for="(feature, i) in appData.features.list">
            <div class="row position-relative h-custom-half img-feature" :style="{backgroundImage: 'url(' + feature.img + ')'}">
                <h1 class="header-custom col-12 pt-5 text-center text-light">{{ feature.title }}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon :fill="appData.home.bgSecondary" points="0,100 100,0 100,100" v-if="i % 2 == 0"/>
                    <polygon :fill="appData.home.bgTertiary" points="0,100 0,0 100,100" v-else/>
                </svg>
            </div>
            <div class="row pt-5 pb-3 h-custom-quarter text-light" :class="{'text-right': i % 2 == 0, 'bg-custom-secondary': i % 2 == 0, 'bg-custom-tertiary': i % 2 == 1}">
                <div class="col-12 px-5 pt-5 pb-1 my-0">
                    <h4>{{ feature.content }}</h4>
                </div>
                <div class="col-12 px-5 pb-5 pt-1">
                    <router-link :to="{name: 'Features'}">
                        <button class="btn btn-primary">Learn more</button>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="col-12 border-top border-dark">
            <header class="row">
                <div class="col-12">
                    <h1 class="text-center py-5 text-custom-primary">The Team</h1>
                </div>
            </header>
        </div>
        <div class="col-12 bg-custom-primary text-light mb-5 shadow">
            <app-about class="py-3 rounded-bottom" :aboutData="appData.about"></app-about>
        </div>

        <div class="col-12 border-top border-dark">
            <header class="row">
                <div class="col-12">
                    <h1 class="text-center py-5 text-custom-primary">Get In Touch</h1>
                </div>
            </header>
        </div>
        <div class="col-12">
            <app-contact :contactData="appData.contact"></app-contact>
        </div>
        <div class="col-12 bg-custom-secondary">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
    import Home from './Home.vue'
    import Features from './Features.vue'
    import About from './About.vue'
    import Contact from './Contact.vue'
    
    export default {
      name: 'app',
      props: {
        appData: Object
      },
      components: {
        appHome: Home,
        appFeatures: Features,
        appAbout: About,
        appContact: Contact
      }
    }
</script>
<style scoped>
    .h-custom-full {
        min-height: 100vh;
    }

    .h-custom-half {
        min-height: 50vh;
        height: 50vh;
    }

    .h-custom-quarter {
        min-height: 25vh;
    }

    .img-feature {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    
    svg {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 25%;
    }

    .header-custom {
        background-color: rgba(0,0,0,0.3);
    }
</style>
