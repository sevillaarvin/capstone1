<template>
    <div class="flex-grow-1 d-flex flex-column">
        <header>
        	<h1 class="text-center my-3">Features</h1>
        </header>
        <div class="row">
            <div class="col-12" v-for="feature in features">
                <div class="row bg-light">
                    <div class="col-4 offset-2">
                        <img class="img-fluid img-thumbnail" :src="feature.img">
                    </div>
                    <div class="col-6">
                        <h2 class="">{{ feature.title }}</h2>
                        <hr class="my-3">
                        <p class="">{{ feature.longDescription }}</p>
                    </div>
                </div>
                <hr class="mb-3">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                features: this.appData.features
            }
        },
        props: {
            appData: Object
        },
        components: {
        }
    }
</script>
<style scoped>
    .text-custom-dark {
        color: #1F2421;
    }
</style>
