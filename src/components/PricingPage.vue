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
            <header class="col-12 pt-5">
            	<h1 class="text-center my-3">Pricing</h1>
            </header>
            <main class="col-12 pb-3 text-center">
                <p class="p-0 m-0 font-italic">{{ appData.pricing.description }}</p>
                <small><strong>{{ appData.pricing.attribution }}</strong></small>
            </main>
            <section class="col-12 shadow">
                <div class="row">
                    <div class="col-12 col-lg d-flex align-items-stretch justify-content-center" v-for="price in appData.pricing.prices">
                        <div class="card text-center col mx-5 mx-lg-0" :class="price.emphasize ? 'my-1' : 'my-5'">
                            <div class="card-body">
                                <h1 class="card-title" v-if="price.emphasize">
                                    <strong>{{ price.price }}</strong>
                                </h1>
                                <h2 class="card-title" v-else>{{ price.price }}</h2>
                                <h3 class="card-subtitle">{{ price.title }}</h3>
                                <p class="card-text pb-3 pt-3">{{ price.details }}</p>
                                <ul class="list-group">
                                    <li class="list-group-item border-right-0 border-left-0" v-for="(unit, i) in price.units">
                                        <strong v-if="i > 2">{{ unit }}</strong>
                                        <span v-else>{{ unit }}</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="py-3">
                                <router-link :to="{name: price.link}">
                                    <a class="card-link btn" :class="price.buttonType" href="#">{{ price.action }}</a>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="#faq" class="col-12 mt-5 pb-5 bg-custom-primary text-light shadow">
                <app-faq :faqData="appData.faq"></app-faq>
            </section>
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
    import FAQ from './FAQ.vue'

    export default {
        props: {
            appData: Object
        },
        components: {
            appPage: Page,
            appFaq: FAQ
        }
    }
</script>
<style>
</style>
