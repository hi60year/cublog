<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white row">
      <q-toolbar class="col-10 offset-1">
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          cublog
        </q-toolbar-title>
          <div class="q-gutter-sm">
            <q-btn type="a" href="" md color="green-7">
              注册
            </q-btn>
            <q-btn type="a" href="" md color="grey-7">
              登陆
            </q-btn>
          </div>
      </q-toolbar>
    </q-header>
    
    <q-page-container>
      <Introduction />
    </q-page-container>
  </q-layout>
</template>

<script>
import Introduction from './components/Introduction.vue'

export default {
  name: 'LayoutDefault',

  components: {
    Introduction
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
