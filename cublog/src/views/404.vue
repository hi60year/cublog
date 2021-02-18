<template>
  <q-layout view="hHr LpR lFf">
    <q-page padding class="row justify-center items-center bg-primary">
      <q-card class="q-pa-md shadow-4">
        <q-card-section>
          <div class="row">
            <img src="https://i.loli.net/2021/02/16/9ANJngctrap7zU5.jpg" />
            <div style="width:300px" class="q-ml-lg column justify-between">
              <div>
                <div class="text-h6 text-red">404 Error</div>
                <div class="text-subtitle2 q-mt-md">
                  这个页面找不到了，试试别的页面吧
                </div>
              </div>
              <q-btn color="green" class="self-end" label="回到主页" @click="$router.push({path:'/'})"/>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-page>
  </q-layout>
</template>

<script>
export default {
  name: "page404",
};
</script>
