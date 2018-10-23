<template>
    <footer class="bg-transparent">
        <ul class="nav justify-content-center">
            <li class="nav-item" v-for="link in links">
                <a class="nav-link" :href="link.link">{{ link.name }}</a>
            </li>
            <span class="d-flex align-items-center " v-html="copyright"></span>
        </ul>
    </footer>
</template>
<script>
    export default {
        props: {
            links: Array,
            copyright: String
        }
    }
</script>
<style>
</style>
