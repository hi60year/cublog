
<template>
  <q-layout view="hHh lpR fff">
    <Header/>
    <q-page-container>
      <router-view />
    </q-page-container>
    <Login/>
    <Footer/>
     

  </q-layout>
</template>

<script>
import Footer from '../components/footer/page-footer.vue'
import Login from '../components/login.vue'
import Header from '../components/page-header.vue'

export default {
  data () {
    return {
    }
  },
  components: {
      Footer,
      Login,
      Header
  }
}
</script>