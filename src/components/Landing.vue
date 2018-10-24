<template>
  <div class="row bg-transparent">
    <div class="col-12">
        <app-home class="bg-transparent mb-3 h-custom-full" :homeData="home"></app-home>
    </div>
    <div class="col-12">
        <app-features class="d-md-flex mb-3 h-custom-full bg-light py-3" :features="features"></app-features>
    </div>
    <div class="col-12">
        <app-about class="h-custom-half mb-3" :persons="about"></app-about>
    </div>
  </div>
</template>

<script>
import Home from './Home.vue'
import Features from './Features.vue'
import About from './About.vue'

export default {
  name: 'app',
  props: {
    appData: Object
  },
  data () {
    return {
        home: this.appData.home,
        features: this.appData.features,
        about: this.appData.about
    }
  },
  components: {
    appHome: Home,
    appFeatures: Features,
    appAbout: About
  }
}
</script>

<style scoped>
    .h-custom-full {
        min-height: 80vh;
    }

    .h-custom-half {
        min-height: 40vh;
    }
</style>
