<template>
    <app-page>
        <div class="row" slot="nav">
            <div class="col-12">
                <slot name="nav"></slot>
            </div>
        </div>

        <div class="row flex-grow-1 align-items-around" slot="content">
            <header class="col-12 d-flex flex-column align-items-center justify-content-center">
                <img class="img-fluid img-custom" :src="appData.home.logo">
                <h1 class="text-center my-5 text-custom-primary">Welcome {{ name || "Admin" }}!</h1>
            </header>
            <main class="col-12 d-flex justify-content-center">
                <app-loader></app-loader>
            </main>
        </div>

        <div class="row" slot="footer">
            <div class="col-12">
                <slot name="footer"></slot>
            </div>
        </div>
    </app-page>
</template>
<script>
    import { mapGetters } from 'vuex'
    import Page from './Page.vue'
    import Loader from './Loader.vue'

    export default {
        computed: {
            ...mapGetters({
                name: 'getFullName',
            }),
        },
        props: {
            appData: Object
        },
        components: {
            appPage: Page,
            appLoader: Loader
        },
        mounted() {
            setTimeout(() => {
                this.$router.push({name: "Dashboard"})
            }, 3000)
        }
    }
</script>
<style scoped>
    .img-custom {
        max-height: 25vh;
    }
</style>
