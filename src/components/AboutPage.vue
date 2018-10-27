<template>
    <app-page>
        <slot name="nav" slot="nav"></slot>

        <!--
        <slot name="search" slot="search"></slot>
        -->

        <div class="row" slot="content">
            <!--
            <header class="col-12 py-5">
            	<h1 class="text-center my-3">Who We Are</h1>
            </header>
            <main class="col-12 pb-3 text-center">
                <p class="p-0 m-0 font-italic">{{ appData.about.description }}</p>
                <small><strong>{{ appData.about.attribution }}</strong></small>
            </main>
            -->

            <section class="d-flex flex-column col-12 pb-5">
                <header class="curve row position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" preserveAspectRatio="none">
                        <circle fill="white" cx="0" cy="100" r="100" />
                        <circle fill="white" cx="200" cy="100" r="100" />
                    </svg>
                    <h1 class="col text-center p-5">Raison D'être</h1>
                </header>
                
                <section class="curve-content row border border-primary">
                    <h4 class="col-12 col-md-8 offset-md-2 p-0 p-md-5 text-center">{{ appData.about.purpose }}</h4>
                </section>
            </section>

            <div class="col-10 p-3 mb-3 rounded-right-custom bg-dark text-light h-custom-half">
                <h1 class="font-weight-bold mt-5 py-5">Vision</h1>
                <p>{{ appData.about.vision }}</p>
            </div>
            <div class="col-10 offset-2 p-3 mb-3 rounded-left-custom bg-light text-dark h-custom-half">
                <h1 class="font-weight-bold mt-5 py-5">Mission</h1>
                <p>{{ appData.about.mission }}</p>
            </div>

            <header class="col-12 mb-3">
                <h1 class="text-center my-3">The Team</h1>
            </header>
            <section class="col-12">
                <app-about :aboutData="appData.about"></app-about>
            </section>

            <section class="col-12 my-5 pt-5 text-center">
                <h2 class="text-center py-3">{{ appData.about.callToAction }}</h2>
                <button class="btn btn-primary">{{ appData.about.actionBtn }}</button>
            </section>
        </div>

        <slot name="footer" slot="footer"></slot>
    </app-page>
    
    <!--
    <div class="row flex-grow-1">
        <header class="col-12 mb-3">
            <h1 class="text-center my-3">About Us</h1>
        </header>
        <div class="col-10 p-3 mb-3 rounded-right-custom bg-dark text-light">
            <h1 class="font-weight-bold">Vision</h1>
            <p>{{ about.vision }}</p>
        </div>
        <div class="col-10 offset-2 p-3 mb-3 rounded-left-custom bg-light text-dark">
            <h1 class="font-weight-bold">Mission</h1>
            <p>{{ about.mission }}</p>
        </div>
        <div class="col-12 mb-3 d-flex align-items-center">
            <app-about :persons="about.team"></app-about>
        </div>
    </div>
    -->
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

    svg {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 32.5%;
    }

    .curve {
        background-image: linear-gradient(#ff9d2f, #ff6126);
        height: 100%;
    }

    .curve-content {
        min-height: 12.5vh;
    }
</style>
