<template>
    <b-navbar class="row bg-custom-transparent text-custom-primary" toggleable="md" type="light" variant="">
    
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    
        <b-navbar-brand :to="{name: 'Landing'}">
            <img  class="img-fluid img-logo rounded-circle" :src="navData.logo" alt="logo">
        </b-navbar-brand>
        <router-link :to="{name: 'Landing'}" active-class="active" exact>
            <strong class="text-custom-primary">Rentlify</strong>
        </router-link>
    
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="ml-auto">
                <b-nav-item v-for="link in navData.links" :to="{name: link.name}" exact>
                    {{ link.description }}
                </b-nav-item>
                <router-link class="px-md-2 py-2 py-md-0" v-for="action in navData.actions" :to="{name: action.name}" v-if="action.view == isLoggedIn">
                    <b-button :variant="action.variant" @click="signOut(action.name)">{{ action.description }}</b-button>
                </router-link>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
<script>
    export default {
        props: {
            navData: Object,
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters.isLoggedIn
            }
        },
        methods: {
            signOut(action) {
                if(action == "Logout") {
                    this.$store.dispatch("setLoggedIn", false)
                }
            }
        }
    }
</script>
<style scoped>
    .img-logo {
	    min-width: 50px;
        max-width: 50px;
    }

    .bg-custom-transparent {
        background: rgba(255,255,255,0.3);
    }
</style>
