<template>
    <footer class="row">
        <!-- SOCIAL LINKS -->
        <section class="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <ul class="p-0 p-md-3 nav justify-content-center">
                <li class="nav-item" v-for="social in footerData.socials">
                    <a class="nav-link shadow rounded-circle mx-3 my-3 my-md-0" :class="social.effect" :href="social.link" target="_blank">
                        <i :class="social.icon" class="text-light"></i>
                    </a>
                </li>
            </ul>
        </section>

        <!-- LEGAL LINKS -->
        <section class="col-12 col-md-6">
            <ul class="nav justify-content-center">
                <li class="nav-item" v-for="link in footerData.links">
                    <router-link :to="link.name">
                        <a class="nav-link text-light">{{ link.description }}</a>
                    </router-link>
                </li>
            </ul>
            <div v-for="otherLink in footerData.others" class="text-center">
                <span v-html="otherLink" class="text-light"></span>
            </div>
        </section>
    </footer>
</template>
<script>
    export default {
        props: {
            footerData: Object
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
