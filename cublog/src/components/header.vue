<template>
    <q-header elevated class="bg-blue-grey-4 text-white row">
      <q-toolbar class="col-10 offset-1" id="head_toolbar">
        <q-toolbar-title>
          <q-avatar style="margin-right : 10px">
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          cublog
        </q-toolbar-title>
          <div class="q-gutter-md">
            <q-btn id="register" type="a" href="" md color="primary" border-rounded unelevated padding="xs lg">
              注册
            </q-btn>
            <q-btn id="login" type="router-link" to="/login" target="_top" md color="grey-7" border-rounded unelevated padding="xs lg">
              登陆
            </q-btn>
          </div>
      </q-toolbar>
    </q-header>
</template>

<style lang="scss">
  #head_toolbar{
    padding-top: 15px;
    padding-bottom: 15px;
  }
</style>

<script>
export default {
    name: 'header'
}
</script>