<template>
    <div class="row">
        <div class="col-12 mb-0 pb-0 jumbotron d-flex flex-column justify-content-center" :style="{backgroundImage: 'url(' + homeData.img + ')'}">
            <div class="row">
                <div class="col-12 text-center">
                    <h1 class="display-4">{{ homeData.title }}</h1>
                    <p class="lead"> {{ homeData.content }}</p>
                    <hr class="my-4 col-12 col-md-6">
    	            <p class="lead">{{ homeData.details }}</p>
                </div>
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
    .jumbotron {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
    }
</style>
