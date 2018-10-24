<template>
    <div class="flex-grow-1 row">
        <header class="col-12">
        	<h1 class="text-center my-3">Features</h1>
        </header>
        <div class="col-12">
            <div class="row">
                <div class="col-12" v-for="feature in features">
                    <div class="row bg-light py-3">
                        <div class="col-12 col-md-4 offset-md-2">
                            <img class="img-fluid img-thumbnail" :src="feature.img">
                        </div>
                        <div class="col-12 col-md-6">
                            <h2 class="">{{ feature.title }}</h2>
                            <hr class="my-3">
                            <p class="">{{ feature.longDescription }}</p>
                            <ul class="list-group">
                                <li class="list-group-item" v-for="property in feature.properties">
                                    {{ property }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr class="mb-3">
                </div>
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
