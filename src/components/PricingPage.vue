<template>
    <app-page>
        <slot name="nav" slot="nav"></slot>

        <slot name="search" slot="search"></slot>

        <div class="row" slot="content">
            <header class="col-12 pt-5">
            	<h1 class="text-center my-3">Pricing</h1>
            </header>
            <main class="col-12 pb-3 text-center">
                <p class="p-0 m-0 font-italic">{{ appData.pricing.description }}</p>
                <small><strong>{{ appData.pricing.attribution }}</strong></small>
            </main>
            <section class="col-12">
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
                                    <li class="list-group-item border-right-0 border-left-0" v-for="unit in price.units">
                                        {{ unit }}
                                    </li>
                                </ul>
                            </div>
                            <div class="py-3">
                                <a class="card-link btn" :class="price.buttonType" href="#">{{ price.action }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="#faq" class="col-12">
                <app-faq :faqData="appData.faq"></app-faq>
            </section>
        </div>
        <slot name="footer" slot="footer"></slot>
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
<style scoped>
    .card-price {
        min-width: 30vw;
    }
</style>
