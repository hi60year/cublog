<template>
    <q-dialog class="error_dialog" v-model="show" persistent transition-show="jump-up" transition-hide="jump-down">
       <q-card class="bg-negative text-white">
         <q-bar>
           <q-icon name="warning" style="margin-right:10px"/>
           错误
 
           <q-space></q-space>
 
           <q-btn dense flat icon="close" v-close-popup>
             <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
           </q-btn>
         </q-bar>
         <div class="error_dialog_content">
            <q-card-section>
            <div class="text-h6">{{title}}</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
            <slot/>
            </q-card-section>
         </div>
       </q-card>
     </q-dialog>
</template>

<style lang="scss" scoped>
    .error_dialog_content {
        padding: 10px 30px 10px 30px;
        width: 500px
    }
    .error_dialog {
        width: 500px
    }
</style>

<script>
export default {
    name: 'ErrorDialog',
    data () {
        return {
            show: false
        }
    },
    props: ['title']
}
</script>