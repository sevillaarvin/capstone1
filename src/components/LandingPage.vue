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
                    <h1 class="text-center py-5">Are you ready for the Revolution?</h1>
                </div>
            </header>
        </div>
        <div class="col-12 mb-5 shadow" v-for="(feature, i) in appData.features.list">
            <div class="row position-relative h-custom-half img-feature" :style="{backgroundImage: 'url(' + feature.img + ')'}">
                <h1 class="col-12 pt-5 text-center text-light">{{ feature.title }}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="#00BB77" points="0,100 100,0 100,100" v-if="i % 2 == 0"/>
                    <polygon fill="#E3D87E" points="0,100 0,0 100,100" v-else/>
                </svg>
            </div>
            <div class="row flex-column py-3 h-custom-quarter" :class="{'text-right': i % 2 == 0, 'bg-custom-primary': i % 2 == 0, 'text-light': i % 2 == 0,'bg-custom-other2': i % 2 == 1}">
                <div class="px-5 py-2">
                    <h4>{{ feature.content }}</h4>
                </div>
                <div class="px-5 py-2">
                    <router-link :to="{name: 'Features'}">
                        <button class="btn btn-primary">Learn more</button>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="col-12 border-top border-dark">
            <header class="row">
                <div class="col-12">
                    <h1 class="text-center py-5">The Team</h1>
                </div>
            </header>
        </div>
        <div class="col-12 bg-custom-other2 mb-5 shadow">
            <app-about class="py-3 rounded-bottom" :aboutData="appData.about"></app-about>
        </div>

        <div class="col-12 border-top border-dark">
            <header class="row">
                <div class="col-12">
                    <h1 class="text-center py-5">Get In Touch</h1>
                </div>
            </header>
        </div>
        <div class="col-12">
            <app-contact :contactData="appData.contact"></app-contact>
        </div>
        <div class="col-12 bg-custom-tertiary text-custom-other2">
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
        height: 25vh;
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
</style>
