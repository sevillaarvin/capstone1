<template>
    <div class="row flex-grow-1">
        <header class="col-12">
            <h1 class="text-center my-3">About</h1>
        </header>
        <div class="col-12 d-flex align-items-center">
            <app-about :persons="appData.about"></app-about>
        </div>
    </div>
</template>
<script>
    import About from './About.vue'

    export default {
        props: {
            appData: Object
        },
        components: {
            appAbout: About
        }
    }
</script>
<style>
</style>
