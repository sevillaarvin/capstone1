<template>
    <div class="flex-grow-1 d-flex align-items-center">
        <app-about :persons="appData.about"></app-about>
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
