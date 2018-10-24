<template>
    <div class="row">
        <div class="col-12 d-flex flex-column flex-lg-row">
            <div class="card text-center m-3" v-for="person in persons">
                <img class="card-img-top rounded-circle p-3" :src="person.img">
                <div class="card-body">
                    <h1 class="card-title">{{ person.name }}</h1>
                    <p class="card-text">{{ person.details }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            persons: Array
        }
    }
</script>
<style scoped>
</style>
