<template>
  <q-layout view="hHh LpR lff">
  <q-header elevated class="bg-blue-grey-4 text-white">
    <q-toolbar id="head_toolbar">
      <q-btn flat round icon="menu" @click="left = !left" />
      <q-toolbar-title>
        <q-avatar style="margin-left:10px">
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
        </q-avatar>
        cublog
      </q-toolbar-title>
      <div class="q-gutter-md" style="margin-right:60px">
        <q-btn id="register" type="router-link" to="/main/register" md color="primary" border-rounded unelevated padding="xs lg">
          注册
        </q-btn>
        <q-btn id="login" type="router-link" to="/login" target="_top" md color="grey-7" border-rounded unelevated padding="xs lg">
          登陆
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>

  <q-drawer v-model="left" side="left" bordered>
    
  </q-drawer>

  <q-page-container>
    <router-view />
  </q-page-container>

  <Footer/>

  </q-layout>
</template>

<script>
import Footer from '../../components/footer/page-footer.vue'

export default {
  data () {
    return {
      left: 0
    }
  },
  components: {
    Footer
  }
}
</script>