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
                    <h1 class="col text-center p-5">Raison D'être</h1>
                </header>
                
                <section class="row h-custom-half-quarter">
                    <h4 class="col-12 col-md-8 offset-md-2 p-0 p-md-5 text-center">{{ appData.about.purpose }}</h4>
                </section>
            </section>

            <div class="col-10 px-3 py-5 mb-5 rounded-right-custom bg-dark text-light h-custom-quarter">
                <h1 class="font-weight-bold mt-3 py-5">Vision</h1>
                <h3>{{ appData.about.vision }}</h3>
            </div>
            <div class="col-10 offset-2 px-3 py-5 mb-5 rounded-left-custom bg-light text-dark h-custom-quarter">
                <h1 class="font-weight-bold mt-3 py-5">Mission</h1>
                <h3>{{ appData.about.mission }}</h3>
            </div>

            <header class="col-12 py-5 border-top border-dark">
                <h1 class="text-center my-3">The Team</h1>
            </header>
            <section class="col-12 bg-custom-other2">
                <app-about :aboutData="appData.about"></app-about>
            </section>

            <section class="col-12 my-5 pt-5 text-center">
                <h2 class="text-center py-3">{{ appData.about.callToAction }}</h2>
                <router-link :to="appData.about.actionPage">
                    <button class="btn btn-primary">{{ appData.about.actionBtn }}</button>
                </router-link>
            </section>
        </div>

        <div class="row bg-custom-tertiary text-custom-other2" slot="footer">
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
        background-image: linear-gradient(#00BB77, #AAEE99);
        height: 100%;
    }
</style>
