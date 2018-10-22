<template>
    <div class="flex-grow-1 d-flex align-items-center">
        <app-features :features="appData.features"></app-features>
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
