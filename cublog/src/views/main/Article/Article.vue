<!--
    这个文件是博客文章的布局文件，路由位于/main/article下。
    
-->
<template>
    <q-page padding class="q-pt-xl column justify-start items-center bg-grey-3">
        <div class="row">
            <div class="col-2">
                <q-card class="my-card q-mr-md">
                    <q-card-section>
                        <q-avatar size="56px" class="q-mb-sm">
                            <img src="https://avatars.githubusercontent.com/u/25002504?s=400&u=231a59706651e739a8a35ad9308bd0cf3d05bfeb&v=4">
                        </q-avatar>
                        <div class="text-weight-bold">Constructor<q-badge color="primary" text-color="white" label="Moderator" style="margin-left:10px"/></div>
                    </q-card-section>
                    <q-separator inset/>
                    <q-card-section>
                        <div>文章：10</div>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-8 column justify-start items-center">
                <q-card style="padding-left:10px; padding-right:5px">
                    <q-card-section class = "row justify-between items-start">
                        <div>
                            <div class="text-h6">Awa Awa Awa</div>
                            <q-badge color="grey" text-color="white" label="c++" class="q-mr-sm"/>
                            <q-badge color="grey" text-color="white" label="c++-qt" class="q-mr-sm"/>
                            <q-badge color="grey" text-color="white" label="GUI" class="q-mr-sm"/>
                        </div>
                        <div>
                            <q-icon name="star" size="md" color="grey" style="display:block" />
                            <center style="margin-top: 5px">60</center>
                        </div>
                    </q-card-section>
                    <q-separator  inset/>
                    <q-card-section>
                        <div v-for="i in 5000" :key="i" style="display:inline-block">awa</div>
                    </q-card-section>
                </q-card>
                <q-card class="q-mt-lg q-px-md q-py-sm" style="width:100%">
                    <q-card-section>
                        <q-avatar size="32px" class="q-mb-sm">
                            <img src="https://avatars.githubusercontent.com/u/25002504?s=400&u=231a59706651e739a8a35ad9308bd0cf3d05bfeb&v=4">
                        </q-avatar>
                        <div class="q-mx-sm text-primary" style="display:inline-block">Constructor:</div>
                        <div style="display:inline-block">awa awa awa awa awa</div>
                    </q-card-section>
                    <q-separator/>
                    <q-card-section>
                        <q-avatar size="32px" class="q-mb-sm">
                            <img src="https://avatars.githubusercontent.com/u/25002504?s=400&u=231a59706651e739a8a35ad9308bd0cf3d05bfeb&v=4">
                        </q-avatar>
                        <div class="q-mx-sm text-primary" style="display:inline-block">Constructor:</div>
                        <div style="display:inline-block">
                            awa awa awa awa awa awa qwq awa awa qwq awa awa awa
                            awa awa awa awa awa awa qwq awa awa qwq awa awa awa
                            awa awa awa awa awa awa qwq awa awa qwq awa awa awa
                            awa awa awa awa awa awa qwq awa awa qwq awa awa awa
                            awa awa awa awa awa awa qwq awa awa qwq awa awa awa
                        </div>
                    </q-card-section>
                </q-card>
                <div style="width:100%; border-radius:5px" class="bg-white q-mt-lg column">
                    <q-editor
                    v-model="comment"
                    toolbar-text-color="white"
                    toolbar-toggle-color="yellow-8"
                    toolbar-bg="primary"
                    :toolbar="[['bold', 'italic', 'strike', 'underline']]"
                    style="width:100%; border:none; border-radius:5px;"
                    @focus="comment_editor_visited ? null : (comment_editor_visited=true, comment='')"
                    />
                    <q-btn color="primary"
                           icon="upload"
                           label="提交"
                           @click="comment_submit()"
                           class="self-end"
                           :disable="!comment_editor_visited || !comment"/>
                </div>
            </div>
            <div class="col-2"></div>
        </div>
        <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="cyan-4"></q-btn>
        </q-page-scroller>
    </q-page>
</template>

<script>
export default {
    name: 'Article',
    data () {
        return {
            comment: '在此发表您的评论...<br>点击提交键或ctrl+Enter键以提交',
            comment_editor_visited: false
        }
    },
    methods: {
        comment_submit() {
            this.$q.notify({
                message: '评论成功提交！',
                color: 'green-4',
                textColor: 'white',
                icon: 'done'
            })
        }
    }
}
</script>