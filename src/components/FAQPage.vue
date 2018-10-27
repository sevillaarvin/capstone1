<template>
    <app-page>
        <slot name="nav" slot="nav"></slot>

        <slot name="search" slot="search"></slot>

        <div class="row" slot="content">
            <header class="col-12">
            	<h1 class="text-center my-3">FAQs</h1>
            </header>
            <div class="col-12">
                    Content
            </div>
        </div>

        <slot name="footer" slot="footer"></slot>
    </app-page>
</template>
<script>
    import Page from './Page.vue'

    export default {
        data() {
            return {
            }
        },
        props: {
            appData: Object
        },
        components: {
            appPage: Page,
        }
    }
</script>
<style scoped>
</style>


