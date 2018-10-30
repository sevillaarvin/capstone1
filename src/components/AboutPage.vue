<template>
    <app-page>
        <div class="row" slot="nav">
            <div class="col-12">
                <slot name="nav"></slot>
            </div>
        </div>

        <div class="row" slot="content">
            <section class="d-flex flex-column col-12 pb-5">
                <header class="curve row position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" preserveAspectRatio="none">
                        <circle fill="white" cx="0" cy="100" r="100" />
                        <circle fill="white" cx="200" cy="100" r="100" />
                    </svg>
                    <h1 class="col p-5 text-center text-light">Raison D'être</h1>
                </header>
                
                <section class="row h-custom-half-quarter">
                    <h4 class="col-12 col-md-8 offset-md-2 px-3 p-md-5 text-center text-custom-primary">
                        <strong class="text-custom-spacing">{{ appData.about.purpose }}</strong>
                    </h4>
                </section>
            </section>

            <div class="col-10 px-3 py-5 mb-5 rounded-right-custom bg-dark text-light text-right h-custom-half d-flex align-items-center">
                <div class="row flex-grow-1">
                    <div class="col-12 col-md-4 col-lg-6 py-3 d-flex justify-content-center align-items-center">
                        <img class="img-fluid img-custom" :src="appData.about.visionLogo">
                    </div>
                    <div class="col-12 col-md-8 col-lg-6">
                        <h1 class="font-weight-bold py-3">Vision</h1>
                        <h3>{{ appData.about.vision }}</h3>
                    </div>
                </div>
            </div>
            <div class="col-10 offset-2 px-3 py-5 mb-5 rounded-left-custom bg-light text-dark h-custom-half d-flex align-items-center">
                <div class="row">
                    <div class="col-12 col-md-8 col-lg-6">
                        <h1 class="font-weight-bold py-3">Mission</h1>
                        <h3>{{ appData.about.mission }}</h3>
                    </div>
                    <div class="col-12 col-md-4 col-lg-6 py-3 d-flex justify-content-center align-items-center">
                        <img class="img-fluid img-custom" :src="appData.about.missionLogo">
                    </div>
                </div>
            </div>

            <header class="col-12 py-5 border-top border-dark">
                <h1 class="my-3 text-center text-custom-primary">The Team</h1>
            </header>
            <section class="col-12 bg-custom-primary text-light">
                <app-about :aboutData="appData.about"></app-about>
            </section>

            <section class="col-12 my-5 pt-5 text-center">
                <h2 class="text-center py-3 text-custom-secondary">{{ appData.about.callToAction }}</h2>
                <router-link :to="appData.about.actionPage">
                    <button class="btn btn-primary">{{ appData.about.actionBtn }}</button>
                </router-link>
            </section>
        </div>

        <div class="row" slot="footer">
            <div class="col-12">
                <slot name="footer"></slot>
            </div>
        </div>
    </app-page>
</template>
<script>
    import Page from './Page.vue'
    import About from './About.vue'

    export default {
        props: {
            appData: Object
        },
        components: {
            appPage: Page,
            appAbout: About
        }
    }
</script>
<style scoped>
    .rounded-left-custom {
        border-top-left-radius: 32px;
        border-bottom-left-radius: 32px;
    }

    .rounded-right-custom {
        border-top-right-radius: 32px;
        border-bottom-right-radius: 32px;
    }

    .h-custom-quarter {
        min-height: 25vh;
    }

    .h-custom-half {
        min-height: 50vh;
    }

    .h-custom-quarter {
        min-height: 25vh;
    }

    .h-custom-half-quarter {
        min-height: 12.5vh;
    }

    svg {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 32.5%;
    }

    .curve {
        background-image: linear-gradient(#00BB38, #8ED200);
        height: 100%;
    }

    .img-custom {
        max-height: 100px;
    }

    .text-custom-spacing {
        letter-spacing: 2px;
    }
</style>
