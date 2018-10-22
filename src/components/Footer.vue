<template>
    <footer>
        <ul class="nav justify-content-center">
            <li class="nav-item" v-for="link in links">
                <a class="nav-link" :href="link.link">{{ link.name }}</a>
            </li>
        </ul>
    </footer>
</template>
<script>
    export default {
        props: {
            links: Array
        }
    }
</script>
<style>
</style>
