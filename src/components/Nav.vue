<template>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#app-nav-content" @click.prevent>
            <span class="navbar-toggler-icon"></span>
        </button>
        <router-link :to="{name: 'Landing'}">
            <a class="navbar-brand mx-auto" href="#">
                <img class="logo rounded-circle d-inline-block align-top" :src="logo" alt="" width="50" height="50">
            </a>
        </router-link>
        <div class="collapse navbar-collapse" id="app-nav-content">
            <ul class="navbar-nav">
                <router-link v-for="link in links" :to="{name: link.name}">
                    <li class="nav-item">
                        <a class="nav-link" href="#">{{ link.description }}</a>
                    </li>
                </router-link>
            </ul>
            <form class="form-inline my-2 d-md-none">
                <input class="form-control" type="search" placeholder="Quezon City rent">
                <button class="btn btn-success" type="submit">Search</button>
            </form>
        </div>
        <form class="form-inline my-2">
            <input class="form-control d-none d-md-inline" type="search" placeholder="Quezon City rent">
            <button class="btn btn-success d-none d-lg-inline" type="submit">Search</button>
        </form>
    </nav>
</template>
<script>
    export default {
        props: {
            links: Array,
            logo: String
        }
    }
</script>
<style scoped>
    /*
    .logo {
        background-color: #fffc31;
    }
    */
</style>
