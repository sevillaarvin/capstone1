<template>
    <div class="">
        <div class="jumbotron bg-transparent">
            <h1 class="display-4">{{ homeData.title }}</h1>
            <p class="lead"> {{ homeData.content }}</p>
            <hr class="my-4">
	    <p class="text-light">{{ homeData.details }}</p>
            <div class="text-center">
                <a class="btn btn-primary" href="">{{ homeData.callToAction }}</a>
                <a class="btn btn-outline-primary" href="">{{ homeData.secondaryAction }}</a>
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
