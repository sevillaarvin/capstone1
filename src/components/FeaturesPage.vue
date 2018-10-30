<template>
    <app-page>
        <div class="row" slot="nav">
            <div class="col-12">
                <slot name="nav"></slot>
            </div>
        </div>

        <div class="row" slot="search">
            <div class="col-12">
                <slot name="search"></slot>
            </div>
        </div>

        <div class="row" slot="content">
            <header class="col-12 pt-5">
            	<h1 class="text-center my-3 text-custom-primary">How It Works</h1>
            </header>
            <main class="col-12 pb-3 text-center">
                <p class="p-0 m-0 font-italic">{{ appData.features.description }}</p>
                <small><strong>{{ appData.features.attribution }}</strong></small>
            </main>
            <section class="col-12">
                <div class="row">
                    <div class="col-12" v-for="(feature, i) in appData.features.list">
                        <div class="row  py-3" :class="{'bg-custom-primary': i % 2 == 1, 'text-light': i % 2 == 1}">
                            <div class="col-12 col-md-6" :class="{'order-md-1': i % 2 == 1}">
                                <img class="img-fluid img-thumbnail" :src="feature.img">
                            </div>
                            <div class="col-12 col-md-6 text-center text-md-left">
                                <h2 class="">{{ feature.title }}</h2>
                                <hr class="my-3">
                                <p class="">{{ feature.longDescription }}</p>
                                <ul class="list-group">
                                    <li class="list-group-item bg-transparent border-left-0 border-right-0" :class="{'border-light': i % 2 == 1}" v-for="property in feature.properties">
                                        {{ property }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
            </section>
            <section class="col-12 my-5 pt-5 text-center">
                <h2 class="text-center py-3 text-center text-custom-secondary">{{ appData.features.callToAction }}</h2>
                <router-link :to="{name: appData.features.actionPage}">
                    <button class="btn btn-primary">{{ appData.features.actionBtn }}</button>
                </router-link>
            </section>
        </div>

        <div class="row" slot="footer">
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
    .text-custom-dark {
        color: #1F2421;
    }
</style>
