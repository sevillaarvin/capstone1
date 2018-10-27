<template>
    <b-navbar class="row bg-transparent" toggleable="md" type="light" variant="">
    
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    
        <b-navbar-brand href="#" :to="{name: 'Landing'}">
            <img  class="img-logo rounded-circle border border-dark" :src="navData.logo" alt="logo">
        </b-navbar-brand>
        <router-link :to="{name: 'Landing'}">
            <span class="text-dark">Rentlify</span>
        </router-link>
    
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
</template>
<script>
    export default {
        props: {
            navData: Object,
        }
    }
</script>
<style scoped>
    .img-logo {
	min-width: 50px;
    }
</style>
