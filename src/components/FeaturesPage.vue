<template>
    <app-page>
        <slot name="nav" slot="nav"></slot>

        <slot name="search" slot="search"></slot>

        <div class="row" slot="content">
            <header class="col-12 py-5">
            	<h1 class="text-center my-3">Features</h1>
            </header>
            <main class="col-12 pb-3 text-center">
                <p class="p-0 m-0 font-italic">{{ appData.features.description }}</p>
                <small><strong>{{ appData.features.attribution }}</strong></small>
            </main>
            <section class="col-12">
                <div class="row">
                    <div class="col-12" v-for="(feature, i) in appData.features.list">
                        <div class="row bg-light py-3">
                            <div class="col-12 col-md-6" :class="{'order-1': i % 2 == 1}">
                                <img class="img-fluid img-thumbnail" :src="feature.img">
                            </div>
                            <div class="col-12 col-md-6">
                                <h2 class="">{{ feature.title }}</h2>
                                <hr class="my-3">
                                <p class="">{{ feature.longDescription }}</p>
                                <ul class="list-group">
                                    <li class="list-group-item" v-for="property in feature.properties">
                                        {{ property }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <slot name="footer" slot="footer"></slot>
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
    .text-custom-dark {
        color: #1F2421;
    }
</style>
