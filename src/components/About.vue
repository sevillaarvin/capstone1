<template>
    <div class="d-md-flex">
        <div class="card text-center" v-for="person in persons">
            <img class="card-img-top rounded-circle img-thumbnail" :src="person.img">
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
<style>
</style>
