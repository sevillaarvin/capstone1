<template>
    <app-page>
        <slot name="nav" slot="nav"></slot>

        <slot name="search" slot="search"></slot>

        <div class="row" slot="content">
            <main class="col-12 jumbotron jumbotron-fluid">
                <div class="container text-center">
                    <h1 class="display-4">404 page not found</h1>
                    <p class="lead">Oops, something went wrong</p>
                </div>
            </main>
        </div>

        <slot name="footer" slot="footer"></slot>
    </app-page>
</template>
<script>
    import Page from './Page.vue'

    export default {
        components: {
            appPage: Page
        }
    }
</script>
<style scoped>
</style>

