<template>
  <q-layout view="hHh lpr fff">
    <Header/>
    <div id="page">
      <q-page-container>
        <Introduction/>
      </q-page-container>
      <Footer/>
    </div>
  </q-layout>
</template>

<script>
import Introduction from '../components/Introduction.vue'
import Footer from '../components/footer/footer.vue'
import Header from '../components/header.vue'

export default {
  name: 'Home',

  components: {
    Introduction,
    Footer,
    Header
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style lang="scss">
  #page{
    background: url(../../public/background.jpg) 0 / cover fixed;
  }
</style>
