<template>
    <div class="row flex-grow-1">
        <header class="col-12">
            <h1 class="text-center my-3">Pricing</h1>
        </header>
        <div class="col-12 d-flex flex-column flex-md-row align-items-center align-items-md-baseline justify-content-around">
            <div class="card text-center my-3" v-for="price in prices">
                <div class="card-body">
                    <h2 class="card-title">{{ price.price }}</h2>
                    <h2 class="card-subtitle">{{ price.title }}</h2>
                    <p class="card-text">{{ price.details }}</p>
                    <ul class="list-group">
                        <li class="list-group-item" v-for="unit in price.units">
                            {{ unit }}
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <a class="card-link btn" :class="price.buttonType" href="#">{{ price.action }}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            appData: Object
        },
        data() {
            return {
                prices: this.appData.prices
            }
        }
    }
</script>
<style>
</style>
