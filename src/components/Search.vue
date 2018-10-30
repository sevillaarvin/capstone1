<template>
    <div class="row">
        <div class="col-12 p-5">
            <div class="row">
                <div class="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <form class="input-group" @submit="onSubmit">
                        <input class="form-control" type="text" placeholder="Find your dream home..." v-model="search">
                        <div class="input-group-append">
                            <span class="input-group-text" @click="onSubmit"><i class="fas fa-search"></i></span>
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
                "setStandBy",
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
                        "description": "Fully furnished 1BR Condo",
                        "img": "/static/property1.jpeg",
                        "location": "Quezon City",
                        "rating": "5",
                        "price": "PHP 20,000.00 / mo"
                    },
                    {
                        "title": "Reddit",
                        "description": "Semi furnished Studio Type",
                        "img": "/static/property2.jpeg",
                        "location": "Caloocan",
                        "rating": "4",
                        "price": "PHP 15,000.00 / mo"
                    },
                    {
                        "title": "Lamudi",
                        "description": "Apartment for rent",
                        "img": "/static/property3.jpeg",
                        "location": "Makati",
                        "rating": "5",
                        "price": "PHP 9,000.00 / mo"
                    },
                    {
                        "title": "OLX",
                        "description": "McKinley Condominum",
                        "img": "/static/property4.jpeg",
                        "location": "BGC",
                        "rating": "5",
                        "price": "PHP 543.00 / day"
                    },
                    {
                        "title": "Rentpad",
                        "description": "BSA Towers bedspace",
                        "img": "/static/property5.jpeg",
                        "location": "Mandaluyong",
                        "rating": "4",
                        "price": "PHP 5,000.00 / mo"
                    },
                    {
                        "title": "Locanto",
                        "description": "2BR Condo semi-furnished",
                        "img": "/static/property6.jpeg",
                        "location": "Pasig",
                        "rating": "4",
                        "price": "PHP 200,000.00 / year"
                    },
                    {
                        "title": "Airbnb",
                        "description": "Condo-type for rent",
                        "img": "/static/property7.jpeg",
                        "location": "Pasay",
                        "rating": "3",
                        "price": "PHP 8,000.00 / mo"
                    },
                    {
                        "title": "Craigslist",
                        "description": "Town house fully-furnished",
                        "img": "/static/property8.jpeg",
                        "location": "Laguna",
                        "rating": "4",
                        "price": "PHP 9,000.00 / mo"
                    },
                    {
                        "title": "MyProperty",
                        "description": "Apartment for rent unfurnished",
                        "img": "/static/property9.jpeg",
                        "location": "Cavite",
                        "rating": "5",
                        "price": "PHP 7,500.00 / mo"
                    },
                    {
                        "title": "Lamudi",
                        "description": "Apartment for rent",
                        "img": "/static/property10.jpg",
                        "location": "Batangas",
                        "rating": "2",
                        "price": "PHP 5,000.00 / mo"
                    }
                ]`

                this.setSearchResponse(this.$store.getters.getSearchQuery)
                this.setIsSearching(true)
                this.setSearchResults("{}")

                /*
                setTimeout(this.message("Test"), 0)
                this.setStandBy("asdf")
                setTimeout(this.message("Hmmmmm"), 1000)
                */
                setTimeout(() => {this.setStandBy("Analyzing behavior...")}, 1000)
                setTimeout(() => {this.setStandBy("Building profile..")}, 2000)
                setTimeout(() => {this.setStandBy("Curating list...")}, 3000)
                setTimeout(() => {this.setStandBy("Contemplating life..")}, 4000)
                setTimeout(() => {this.setStandBy("Contemplating life...")}, 4500)
                setTimeout(() => {this.setStandBy("Contemplating life....")}, 5000)
                setTimeout(() => {this.setStandBy("Contemplating life.....")}, 5500)
                setTimeout(() => {this.setStandBy("Contemplating life......")}, 6000)
                setTimeout(() => {
                    this.setSearchResults(data)
                    this.setIsSearching(false)
                }, 7000)
                this.$router.push({name: "Results"})
            }
        },
    }
</script>
<style>
</style>

