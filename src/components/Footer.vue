<template>
    <footer class="bg-transparent">
        <ul class="nav justify-content-center">
            <li class="nav-item" v-for="link in links">
                <router-link :to="link.name">
                    <a class="nav-link">{{ link.description }}</a>
                </router-link>
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
