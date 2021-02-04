<!--
  该文件是主要页面的布局文件，位于/main路由下。该页面完成了对页眉、页尾、左侧菜单的实现。
  所有的主要页面都是/main的子路由。
-->
<template>
  <q-layout view="hHh LpR lff">
  <!-- TODO: 需要加入登录后的另一个header并控制登陆前后使用不同的header -->
  <q-header elevated class="bg-blue-grey-4 text-white">
    <q-toolbar id="head_toolbar">
      <q-btn flat round icon="menu" @click="left = !left" />
      <q-toolbar-title>
        <q-avatar style="margin-left:10px">
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
        </q-avatar>
        cublog
        <q-input dark dense standout ref="searchbox"
                 v-model="search" input-class="text-right" class="q-ml-md" style="width:230px; display:inline-block"
                 :placeholder="searchbox_placeholder||'按下ctrl+alt+f聚焦于此'"
                 @focus="searchbox_placeholder='在此输入...   按回车确认'"
                 @blur="searchbox_placeholder=null">
          <template v-slot:append>
            <q-icon v-if="search === ''" name="search"></q-icon>
            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''"></q-icon>
          </template>
        </q-input>
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

  <q-drawer
  v-model="left"
  side="left"
  :width="250"
  >
    <q-scroll-area style="height: calc(100% - 120px); margin-top: 120px; border-right: 1px solid #ddd">
      <q-list padding>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="account_box"></q-icon>
          </q-item-section>
    
          <q-item-section>
            主页
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="inbox"></q-icon>
          </q-item-section>
    
          <q-item-section>
            通知
          </q-item-section>
        </q-item>
    
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="bookmark"></q-icon>
          </q-item-section>
    
          <q-item-section>
            收藏
          </q-item-section>
        </q-item>
    
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="dashboard"></q-icon>
          </q-item-section>
    
          <q-item-section>
            仪表盘
          </q-item-section>
        </q-item>
    
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="drafts"></q-icon>
          </q-item-section>
    
          <q-item-section>
            草稿
          </q-item-section>
        </q-item>
        <!--匹配以/main/new开始的路由，如果匹配成功，使新文章item亮起-->
        <q-item clickable v-ripple :active="/^\/main\/new\/?[^/]*$/.test($route.path)" @click="$router.push({path: '/main/new'})">
          <q-item-section avatar>
            <q-icon name="edit"></q-icon>
          </q-item-section>
    
          <q-item-section>
            新文章
          </q-item-section>          
        </q-item>
      </q-list>
    </q-scroll-area>
 
    <!-- TODO: 以下部分需要在和后端交互后修改 -->
    <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 120px">
      <div class="absolute-bottom bg-transparent">
        <q-avatar size="56px" class="q-mb-sm">
          <img src="https://avatars.githubusercontent.com/u/25002504?s=400&u=231a59706651e739a8a35ad9308bd0cf3d05bfeb&v=4">
        </q-avatar>
        <div class="text-weight-bold">Constructor<q-badge color="primary" text-color="white" label="Moderator" style="margin-left:10px"/></div>
      </div>
    </q-img>
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
      left: 0,
      search: '',
      searchbox_placeholder: null
    }
  },
  components: {
    Footer
  },
  methods: {
    enterCallback(e) {
      if (e.keyCode === 70 && e.ctrlKey && e.altKey) {
        this.$refs.searchbox.focus();
      }
    }
  },
  created () {
    window.addEventListener("keyup", this.enterCallback)
  }
}

</script>