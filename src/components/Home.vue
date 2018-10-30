<template>
    <div class="row">
        <div class="col-12 mb-0 pb-0 jumbotron d-flex flex-column justify-content-center" :style="{backgroundImage: 'url(' + homeData.img + ')'}">
            <div class="row bg-custom-transparent">
                <img class="col-12 img-fluid img-logo" :src="homeData.logo">
                <div class="col-12 text-center">
                    <h1 class="text-custom-primary display-4">{{ homeData.title }}</h1>
                    <p class="lead text-custom-secondary"> {{ homeData.content }}</p>
                    <div class="row">
                        <hr class="my-4 col-10 col-md-6 col-lg-4">
                    </div>
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
        border-radius: 0;
    }

    .img-logo {
        max-height: 20vh;
    }

    .bg-custom-transparent {
        background: rgba(255,255,255,0.4);
    }
</style>
