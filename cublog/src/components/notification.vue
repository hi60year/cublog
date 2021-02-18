<template>
  <div>
    <q-card class="my-card" style="cursor:pointer" @click="dialog_on = true">
      <q-card-section>
        <div class="text-h6"><slot name="title" /></div>
        <div class="text-subtitle2"><slot name="sender"/></div>
      </q-card-section>
      <q-card-section>
        <slot name="description"/>
      </q-card-section>
    </q-card>

    <q-dialog v-model="dialog_on" persistent>
      <q-card style="width:80%" class="q-py-sm q-px-md">
        <q-card-section>
          <div class="text-h6"><slot name="title" /></div>
        </q-card-section>
        <q-card-section class="row justify-center">
          <span><slot name="body"/></span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            class="full-width"
            style="letter-spacing:5px"
            flat
            label="关闭"
            color="primary"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "notification",
  data() {
    return {
      dialog_on: false,
    };
  },
};
</script>
