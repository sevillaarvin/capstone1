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
                "setIsSearching",
                "setSearchQuery",
                "setSearchResults",
                "setSearchResponse"
            ]),
            onSubmit(event) {
                event.preventDefault()
                /*
                const url = "/api?q=" + this.search
                this.axios.get(url).then(res => {
                    this.setSearchResults(res.data)
                }, err => {
                    console.error(err.status)
                    console.error(err.url)
                    console.error(err)
                })
                */
                const data = `[
                    {
                        "title": "Craigslist",
                        "description": "1BR Condo",
                        "location": "Quezon City",
                        "price": "PHP 1,000.00"
                    },
                    {
                        "title": "title2",
                        "description": "description2",
                        "location": "location2",
                        "price": "PHP 1,000.00"
                    },
                    {
                        "title": "title2",
                        "description": "description2",
                        "location": "location2",
                        "price": "PHP 1,000.00"
                    },
                    {
                        "title": "title2",
                        "description": "description2",
                        "location": "location2",
                        "price": "PHP 1,000.00"
                    },
                    {
                        "title": "title2",
                        "description": "description2",
                        "location": "location2",
                        "price": "PHP 1,000.00"
                    },
                    {
                        "title": "title2",
                        "description": "description2",
                        "location": "location2",
                        "price": "PHP 1,000.00"
                    },
                    {
                        "title": "title2",
                        "description": "description2",
                        "location": "location2",
                        "price": "PHP 1,000.00"
                    },
                    {
                        "title": "title3",
                        "description": "description3",
                        "location": "location3",
                        "price": "PHP 1,000.00"
                    }
                ]`

                this.setSearchResponse(this.$store.getters.getSearchQuery)
                this.setIsSearching(true)
                this.setSearchResults("{}")
                setTimeout(() => {
                    this.setSearchResults(data)
                    this.setIsSearching(false)
                }, 3000)
                this.$router.push({name: "Results"})
            }
        },
    }
</script>
<style>
</style>

