<template>
    <div class="flex-grow-1 d-flex flex-column">
    	<h1 class="text-center my-3">Features</h1>
        <app-features class="" :features="appData.features"></app-features>
    </div>
</template>
<script>
    import Features from './Features.vue'

    export default {
        props: {
            appData: Object
        },
        components: {
            appFeatures: Features
        }
    }
</script>
<style>
</style>
