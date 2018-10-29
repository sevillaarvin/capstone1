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

        <div class="row flex-grow-1" slot="content">
            <aside class="col-12 col-md-4 col-lg-2 border-right">
                <form>
                    <h4 v-if="'' != getSearchResponse">Search results for <strong>{{ getSearchResponse }}</strong></h4>
                    <h4 v-else>Search results for all properties</h4>
                    <hr>
                    <h5 class="text-center">Filter</h5>
                    <div>
                        <b-form-group label="Location">
                            <b-form-checkbox-group v-model="selectedLocation" name="location" :options="optionsLocation">
                            </b-form-checkbox-group>
                        </b-form-group>
                    </div>
                    <div>
                        <b-form-group label="Type">
                            <b-form-checkbox-group v-model="selectedType" name="type" :options="optionsType">
                            </b-form-checkbox-group>
                        </b-form-group>
                    </div>
                    <div>
                        <label>Minimum Price - {{ minPrice }}</label>
                        <b-form-input v-model="minPrice" type="range" min="0" max="99999" step="500"/>
                    </div>
                    <div>
                        <label>Maximum Price - {{ maxPrice }}</label>
                        <b-form-input v-model="maxPrice" type="range" min="0" max="99999" step="500"/>
                    </div>
                    <div>
                        <label>Ratings</label>
                        <div>
                            <span class="fa fa-star" :class="{checked: checked > star - 1}" @click="onClickRating(star)" v-for="star in 5"></span>
                        </div>
                    </div>
                    <div>
                        <label>Date</label>
                        <b-form-input v-model="date" type="date"/>
                    </div>
                    <div>
                        <b-form-group label="Source">
                            <b-form-checkbox-group v-model="selectedSource" name="source" :options="optionsSource">
                            </b-form-checkbox-group>
                        </b-form-group>
                    </div>
                </form>
            </aside>
            <main class="col-12 col-md-8 col-lg-10 d-flex flex-column">
                <div class="row">
                    <header class="col-12 py-2 p-md-3 border-bottom">
                        <div class="row">
                            <h3 class="col d-none d-lg-block text-center">Sort by</h3>
                            <div class="col input-group">
                                <b-dropdown id="ddown1" text="Relevance" class="m-md-2 mx-auto">
                                    <b-dropdown-item>Ascending</b-dropdown-item>
                                    <b-dropdown-item>Descending</b-dropdown-item>
                                </b-dropdown>
                            </div>
                            <div class="col input-group">
                                <b-dropdown id="ddown2" text="Price" class="m-md-2 mx-auto">
                                    <b-dropdown-item>Highest to Lowest</b-dropdown-item>
                                    <b-dropdown-item>Lowest to Heighest</b-dropdown-item>
                                </b-dropdown>
                            </div>
                            <div class="col input-group">
                                <b-dropdown id="ddown3" text="Rating" class="m-md-2 mx-auto">
                                    <b-dropdown-item>Ascending</b-dropdown-item>
                                    <b-dropdown-item>Descending</b-dropdown-item>
                                </b-dropdown>
                            </div>
                            <div class="col input-group">
                                <b-dropdown id="ddown4" text="Date" class="m-md-2 mx-auto">
                                    <b-dropdown-item>Most Recent First</b-dropdown-item>
                                    <b-dropdown-item>Most Recent Last</b-dropdown-item>
                                </b-dropdown>
                            </div>
                        </div>
                    </header>
                </div>
                <div class="row flex-grow-1">
                    <section class="col-12 my-3 d-flex">

                        <div class="flex-grow-1 d-flex flex-column align-items-center" v-if="searching">
                            <h1 class="text-center">{{ getStandBy }}</h1>
                            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                        </div>

                        <div v-else-if="standby">Search your dream home...</div>

                        <div class="row flex-grow-1" v-else>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col border m-1 p-1" v-for="result in getSearchResultsJSON">
                                        <div class="card-body">
                                            <img class="card-img-top img-fluid img-thumbnail" :src="result.img">
                                            <div class="text-center">
                                                <span v-for="star in 5"><span class="fa fa-star" :class="{checked: star <= result.rating}"></span></span>
                                            </div>
                                            <hr>
                                            <h3 class="card-title text-center">{{ result.price }}</h3>
                                            <h5 class="card-title text-center">{{ result.title }}</h5>
                                            <p class="card-subtitle">{{ result.description }} {{ getSearchResponse }}</p>
                                            <p class="card-text"><small>{{ result.location }}</small></p>
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
        created() {
            console.log(this.getStandBy)
        },
        data() {
            return {
                selectedLocation: [],
                optionsLocation: [
                    {text: "NCR", value: "ncr"},
                    {text: "Region 1", value: "region1"},
                    {text: "Region 2", value: "region2"}
                ],
                selectedType: [],
                optionsType: [
                    {text: "1BR", value: "1br"},
                    {text: "2BR", value: "2br"},
                    {text: "Studio Type", value: "studio"},
                    {text: "Apartment", value: "apartment"},
                    {text: "Condo", value: "condo"},
                ],
                minPrice: 0,
                maxPrice: 10000,
                checked: 0,
                date: 0,
                selectedSource: [],
                optionsSource: [
                    {text: "Craigslist", value: "craigslist"},
                    {text: "Reddit", value: "reddit"},
                    {text: "Lamudi Type", value: "lamudi"},
                    {text: "OLX", value: "olx"},
                    {text: "Rentpad", value: "rentpad"},
                ],
            }
        },
        props: {
            appData: Object
        },
        computed: {
            ...mapGetters([
                "getStandBy",
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
            ]),
            onClickRating(star) {
                this.checked = star
            },
        },
        beforeRouteLeave(to, from, next) {
            this.setSearchQuery("")
            next()
        }
    }
</script>
<style scoped>
    .checked {
        color: orange; 
    }

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
