<template>
    <div class="d-md-flex">
        <div class="card text-center mx-3" v-for="person in persons">
            <img class="card-img-top rounded-circle p-3" :src="person.img">
            <div class="card-body">
                <h1 class="card-title">{{ person.name }}</h1>
                <p class="card-text">{{ person.details }}</p>
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
