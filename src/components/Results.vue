<template>
    <app-page>
        <div class="row" slot="nav">
            <div class="col-12">
                <slot name="nav"></slot>
            </div>
        </div>

        <div class="row bg-custom-tertiary" slot="search">
            <div class="col-12">
                <slot name="search"></slot>
            </div>
        </div>

        <div class="row h-100" slot="content">
            <aside class="col-12 col-md-4 col-lg-2 bg-success">
                <h3 v-show="'' != getSearchResponse">Search results for {{ getSearchResponse }}</h3>
                <h5 class="text-center">Filter</h5>
                <div class="input-group">
                    <label>Location</label>
                </div>
                <div class="input-group">
                    <label>Type</label>
                </div>
                <div class="input-group">
                    <label>Price</label>
                </div>
                <div class="input-group">
                    <label>Ratings</label>
                </div>
                <div class="input-group">
                    <label>Date</label>
                </div>
                <div class="input-group">
                    <label>Source</label>
                </div>
            </aside>
            <main class="col-12 col-md-8 col-lg-10 d-flex flex-column">
                <div class="row">
                    <header class="col-12 border-bottom">
                        <div class="row">
                            <h3 class="col">Sort by</h3>
                            <div class="col input-group">
                                <label>Relevance</label>
                            </div>
                            <div class="col input-group">
                                <label>Price</label>
                            </div>
                            <div class="col input-group">
                                <label>Rating</label>
                            </div>
                            <div class="col input-group">
                                <label>Date</label>
                            </div>
                        </div>
                    </header>
                </div>
                <div class="row flex-grow-1">
                    <section class="col-12 my-3 d-flex">
                        <div class="flex-grow-1 d-flex flex-column align-items-center" v-if="searching">
                            <h1 class="text-center">Acquiring data...</h1>
                            <div class="col lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                        </div>
                        <div v-else-if="standby">Search your dream home...</div>
                        <div class="row flex-grow-1 border border-primary" v-else>
                            <div class="col-12">
                                <div class="card-columns">
                                    <div class="card col" v-for="result in getSearchResultsJSON">
                                        <div class="card-body">
                                            <img class="card-img-top img-fluid" src="">
                                            <h3 class="card-title text-center">{{ result.price }}</h3>
                                            <h5 class="card-title text-center">{{ result.title }}</h5>
                                            <p class="card-subtitle">{{ result.description }}</p>
                                            <p class="card-text">{{ result.location }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>

        <div class="row bg-custom-tertiary text-custom-other2" slot="footer">
            <div class="col-12">
                <slot name="footer"></slot>
            </div>
        </div>
    </app-page>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    import Page from './Page.vue'

    export default {
        props: {
            appData: Object
        },
        computed: {
            ...mapGetters([
                "getIsSearching",
                "getSearchQuery",
                "getSearchResults",
                "getSearchResultsJSON",
                "getSearchResponse"
            ]),
            standby() {
                return !this.getIsSearching && this.getSearchResults == "{}" 
            },
            searching() {
                return this.getIsSearching
            },
            done() {
                return !this.getIsSearching && this.getSearchResults != "{}"
            }
        },
        components: {
            appPage: Page
        },
        methods: {
            ...mapActions([
                "setSearchQuery"
            ])
        },
        beforeRouteLeave(to, from, next) {
            this.setSearchQuery("")
            next()
        }
    }
</script>
<style scoped>
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ellipsis div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #333;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}
</style>
