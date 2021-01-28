
<template>
  <q-layout view="hHh lpR fff">

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

export default {
  data () {
    return {
    }
  },
  components: {
      Footer,
      Login
  }
}
</script>