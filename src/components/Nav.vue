<template>
    <b-navbar class="row" toggleable="md" type="dark" variant="info">
    
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    
        <b-navbar-brand href="#">
            <img class="logo rounded-circle border border-dark" :src="navData.logo" alt="logo">
        </b-navbar-brand>
    
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="ml-auto">
                <b-nav-item v-for="link in navData.links" :to="{name: link.name}" exact>
                    {{ link.description }}
                </b-nav-item>
                <router-link class="px-md-2 py-2 py-md-0" v-for="action in navData.actions" :to="action.name">
                    <b-button :variant="action.variant">{{ action.description }}</b-button>
                </router-link>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>

<!--    <nav class="row navbar navbar-expand-md">-->
<!--        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#app-nav-content">-->
<!--            <span class="navbar-toggler-icon"></span>-->
<!--        </button>-->
<!---->
<!--        <router-link class="mx-auto" :to="{name: 'Landing'}">-->
<!--            <a class="navbar-brand" href="#">-->
                <!-- TODO: remove border -->
<!--                <img class="logo rounded-circle border border-dark" :src="navData.logo" alt="logo">-->
<!--            </a>-->
<!--        </router-link>-->
<!---->
<!--        <div class="collapse navbar-collapse" id="app-nav-content">-->
<!--            <ul class="navbar-nav">-->
<!--                <router-link v-for="link in navData.links" :to="{name: link.name}">-->
<!--                    <li class="nav-item">-->
<!--                        <a class="nav-link" href="#">{{ link.description }}</a>-->
<!--                    </li>-->
<!--                </router-link>-->
<!--            </ul>-->
<!--            <form class="form-inline my-2 d-md-none">-->
<!--                <input class="form-control" type="search" placeholder="Quezon City rent">-->
<!--                <button class="btn btn-success" type="submit">Search</button>-->
<!--            </form>-->
<!--        </div>-->
<!--        <form class="form-inline my-2">-->
<!--            <input class="form-control d-none d-md-inline" type="search" placeholder="Quezon City rent">-->
<!--            <button class="btn btn-success d-none d-lg-inline" type="submit">Search</button>-->
<!--        </form>-->
<!--    </nav>-->
</template>
<script>
    export default {
        props: {
            navData: Object,
        },
    }
</script>
<style scoped>
    .logo {
        max-height: 5vh;
    }
</style>
