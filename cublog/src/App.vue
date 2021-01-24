<template>
  <q-layout view="hHh lpr fff">

    <q-header elevated class="bg-primary text-white row">
      <q-toolbar class="col-10 offset-1">
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          cublog
        </q-toolbar-title>
          <div class="q-gutter-sm">
            <q-btn type="a" href="" target="_top" md color="green-7" rounded>
              注册
            </q-btn>
            <q-btn type="a" href="" target="_top" md color="grey-7" rounded>
              登陆
            </q-btn>
          </div>
      </q-toolbar>
    </q-header>
    
    <q-page-container>
      <Introduction />
    </q-page-container>
    <Footer/>
  </q-layout>
</template>

<script>
import Introduction from './components/Introduction.vue'
import Footer from './components/footer/footer.vue'

export default {
  name: 'LayoutDefault',

  components: {
    Introduction,
    Footer
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
</style>
