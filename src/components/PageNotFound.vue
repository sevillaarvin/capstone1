<template>
    <app-page>
        <div class="row" slot="nav">
            <div class="col-12">
                <slot name="nav"></slot>
            </div>
        </div>

        <div class="row bg-custom-tertiary" slot="search">
            <div class="col-12">
                <slot name="search"></slot>
            </div>
        </div>

        <div class="row" slot="content">
            <main class="col-12 jumbotron jumbotron-fluid bg-transparent">
                <div class="container text-center">
                    <h1 class="display-4">404 page not found</h1>
                    <p class="lead py-5">Oops, something went wrong</p>
                    <img class="img-not-found img-fluid rounded-top rounded-bottom shadow" :src="appData.notFound.img"/>
                </div>
            </main>
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

    export default {
        props: {
            appData: Object
        },
        components: {
            appPage: Page
        }
    }
</script>
<style scoped>
    .img-not-found {
        max-width: 350px;
    }
</style>

