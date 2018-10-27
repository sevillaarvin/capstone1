<template>
    <div class="row">
        <div class="col-12 mb-0 pb-0 jumbotron bg-transparent d-flex flex-column justify-content-center">
            <div class="row">
                <div class="col-12 text-center">
                    <h1 class="display-4">{{ homeData.title }}</h1>
                    <p class="lead"> {{ homeData.content }}</p>
                    <hr class="my-4">
    	            <p class="text-light">{{ homeData.details }}</p>
                </div>
                <!--
                <div class="col-6 py-5">
                    <div class="row text-center">
                        <div class="col-12 p-3">
                            <a class="btn btn-primary" href="">{{ homeData.callToAction }}</a>
                        </div>
                        <div class="col-12 p-3">
                            <a class="btn btn-outline-primary" href="">{{ homeData.secondaryAction }}</a>
                        </div>
                    </div>
                </div>
                -->
            </div>
            <slot name="search"></slot>
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
<style scoped>
</style>
