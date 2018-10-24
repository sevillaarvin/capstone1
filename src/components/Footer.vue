<template>
    <footer class="row bg-transparent">
        <ul class="col-12 p-3 nav justify-content-center">
            <li class="nav-item" v-for="social in socials">
                <a class="nav-link btn shadow rounded-circle mx-3" :class="social.effect" href="">
                    <i :class="social.icon" class="text-light"></i>
                </a>
            </li>
        </ul>
        <ul class="col-12 nav justify-content-center">
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
            socials: Array,
            copyright: String
        }
    }
</script>
<style scoped>
    .btn-fb {
        background-color: #3b5998;
    }

    .btn-go {
        background-color: #dd4b39;
    }

    .btn-tw {
        background-color: #55acee;
    }

    .btn-li {
        background-color: #0082ca;
    }
</style>
