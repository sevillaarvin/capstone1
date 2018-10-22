<template>
    <div class="flex-grow-1 d-flex align-items-center justify-content-around">
        <div class="card text-center" v-for="price in prices">
            <div class="card-body">
                <h1 class="card-title">{{ price.title }}</h1>
                <p class="card-text">{{ price.details }}</p>
                <ul class="list-group">
                    <li class="list-group-item" v-for="unit in price.units">
                        {{ unit }}
                    </li>
                </ul>
            </div>
            <div class="card-body">
                <a class="card-link btn btn-primary" href="#">Purchase</a>
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
