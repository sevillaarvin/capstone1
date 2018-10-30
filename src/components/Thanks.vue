<template>
    <app-page>
        <div class="row" slot="nav">
            <div class="col-12">
                <slot name="nav"></slot>
            </div>
        </div>

        <div class="row flex-grow-1 align-items-around" slot="content">
            <header class="col-12 my-5">
                <h1 class="text-center my-5 text-custom-primary">Thank you {{ name }} for registering</h1>
                <h2 class="text-center my-5">You will automatically be redirected to login</h2>
            </header>
            <main class="col my-5 d-flex justify-content-center">
                <app-loader/>
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
                this.$router.push({name: "Login"})
            }, 5000)
        }
    }
</script>
<style scoped>
</style>
