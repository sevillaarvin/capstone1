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
            <aside class="col-12 col-md-4 bg-success">
                <h3 class="text-center">Filter</h3>
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
            <main class="col-12 col-md-8">
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
                    <section class="col-12 mt-5">
                        <div class="d-flex flex-column align-items-center">
                            <h1 class="text-center">Acquiring data...</h1>
                            <div class="col lds-ellipsis"><div></div><div></div><div></div><div></div></div>
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
    import { mapActions } from 'vuex'
    import Page from './Page.vue'

    export default {
        props: {
            appData: Object
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
