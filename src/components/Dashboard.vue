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
            <header class="col-12">
            	<h1 class="text-center">Dashboard</h1>
            </header>
            <main class="col-12">
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
<style>
</style>
