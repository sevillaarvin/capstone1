<template>
  <div class="bg-transparent">
    <app-home class="bg-transparent mb-3 h-custom-full" :homeData="home"></app-home>
    <app-features class="d-md-flex mb-3 h-custom-full bg-light py-3" :features="features"></app-features>
    <app-about class="h-custom-full" :persons="about"></app-about>
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
</style>
