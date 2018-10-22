<template>
  <div>
    <app-home :homeData="home"></app-home>
    <app-features :features="features"></app-features>
    <app-about :persons="about"></app-about>
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

<style>
</style>
