<template>
    <div class="row">
        <div class="col-12 p-5">
            <div class="row">
                <div class="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <form class="input-group" @submit="onSubmit">
                        <input class="form-control" type="text" placeholder="Find your dream home..." v-model="search">
                        <div class="input-group-append">
                            <span class="input-group-text"><i class="fas fa-search"></i></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'

    export default {
        computed: {
            search: {
                get() {
                    return this.$store.getters.getSearchQuery
                },
                set(value) {
                    this.setSearchQuery(value)
                }
            }
        },
        methods: {
            ...mapActions([
                "setSearchQuery"
            ]),
            onSubmit(event) {
                event.preventDefault()
                this.setSearchQuery(this.search)
                this.$router.push({name: "Results"})
            }
        },
        beforeRouteLeave(to, from, next) {
            console.log("test")
            this.setSearchQuery("")
            next()
        }
    }
</script>
<style>
</style>

