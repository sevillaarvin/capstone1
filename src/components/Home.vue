<template>
    <div class="bg-image">
        <!--
        <div class="card text-center bg-transparent">
            <div class="card-body">
                <h1 class="card-title">{{ homeData.title }}</h1>
                <p class="card-text">{{ homeData.content }}</p>
                <a class="btn btn-primary">{{ homeData.callToAction }}</a>
                <a class="btn btn-outline-secondary">{{ homeData.secondaryAction }}</a>
            </div>
        </div>
        -->
        <div class="jumbotron bg-transparent">
            <h1 class="display-4">{{ homeData.title }}</h1>
            <p class="lead"> {{ homeData.content }}</p>
            <hr class="my-4">
            <div class="text-center text-light">
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
