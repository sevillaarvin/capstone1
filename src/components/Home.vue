<template>
    <div>
        <div class="card text-center">
            <img class="card-img-top" :src="homeData.img">
            <div class="card-body">
                <h1 class="card-title">{{ homeData.title }}</h1>
                <p class="card-text">{{ homeData.content }}</p>
                <a class="btn btn-primary">{{ homeData.callToAction }}</a>
                <a class="btn btn-outline-secondary">{{ homeData.secondaryAction }}</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            homeData: Object
        }
    }
</script>
<style>
</style>
