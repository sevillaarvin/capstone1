<template>
    <div class="">
        <div class="card text-center mx-3" v-for="feature in features">
            <img class="card-img-top img-fluid" :src="feature.img">
            <div class="card-body">
                <h1 class="card-title">{{ feature.title }}</h1>
                <p class="card-text">{{ feature.content }}</p>
                <a class="btn btn-primary" href="">{{ feature.read }}</a>
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
<style scoped>
</style>
