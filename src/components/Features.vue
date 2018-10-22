<template>
    <div class="d-md-flex">
        <div class="card text-center" v-for="feature in features">
            <img class="card-img-top" :src="feature.img">
            <div class="card-body">
                <h1 class="card-title">{{ feature.title }}</h1>
                <p class="card-text">{{ feature.content }}</p>
                <a class="btn btn-primary">{{ feature.read }}</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            features: Array
        }
    }
</script>
<style>
</style>
