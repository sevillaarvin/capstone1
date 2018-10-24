<template>
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
</template>
<script>
    import About from './About.vue'

    export default {
        props: {
            appData: Object
        },
        computed: {
            about() {
                return this.appData.about
            }
        },
        components: {
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
</style>
