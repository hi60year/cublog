<template>
    <q-page class="bg-grey-3 row justify-center items-start" padding>
        <q-card class="col-10 q-pa-md">
            <q-card-section>
                <div class="text-h5" style="letter-spacing:2px">新文章</div>
                <div class="q-mt-md">
                    请选择标签：
                    <q-input dense v-model="article_tag_searcher"
                             type="text"
                             style="width: 200px; display: inline-block"
                             @focus="tag_selector=true"
                             @blur="tag_selector=false">
                        <template v-slot:append>
                            <q-icon v-if="article_tag_searcher === ''" name="search"></q-icon>
                            <q-icon v-else name="clear" class="cursor-pointer" @click="article_tag_searcher = ''"></q-icon>
                        </template>
                    </q-input>
                    
                    <q-slide-transition>
                        <!-- 这里没有使用Quasar调色板，因为目前没有找到指定颜色透明度的好办法 -->
                        <div class="shadow-3 z-max q-ma-md"
                            style="position:absolute; border-radius: 5px; background:rgba(68, 249, 255, 0.5)"
                            v-show="tag_selector">
                            <!-- TODO: 需要后端进行注入 -->
                            <!-- 此处由于有滑动过渡特效需要一个整体的div所以新加一层div -->
                            <div style="width: 400px; height:200px" class="q-pa-md q-gutter-sm">
                                <q-btn no-caps unelevated padding="none xs" size="sm" color="grey" text-color="white" label="c++"/>
                                <q-btn no-caps unelevated padding="none xs" size="sm" color="grey" text-color="white" label="c++-qt"/>
                            </div>
                        </div>
                    </q-slide-transition>
                    <div class="q-mt-lg">
                        自动储存<q-btn flat size="sm" round color="primary" dense @click="auto_save_info=true">?</q-btn>：
                        <div class="q-gutter-sm" style="display:inline">
                            <q-radio v-model="auto_save_duration" val="none" label="不自动保存"/>
                            <q-radio v-model="auto_save_duration" val="min_1" label="1分钟"/>
                            <q-radio v-model="auto_save_duration" val="min_2" label="2分钟"/>
                            <q-radio v-model="auto_save_duration" val="min_5" label="5分钟"/>

                        </div>
                        
                    </div>
                </div>
            </q-card-section>
        </q-card>
        <q-dialog v-model="auto_save_info">
            <q-card class="q-pa-lg bg-info text-white">
                <h6 class="q-my-sm">自动储存</h6>
                <p>自动储存是在您编辑过程中将您的文章自动储存为草稿的功能。</p>
                <p>如果选择了“不自动保存”以外的选项，自动保存功能会根据相应的时间间隔将草稿上传到云端进行保存。</p>
                <p>但是请注意，尽管有自动储存功能，由于服务本身的限制，最小的自动上传间隔也有1分钟，因此手动上传到草稿是更好的办法。</p>
            </q-card>
        </q-dialog>
    </q-page>
</template>

<script>
export default {
    name: 'newArticle',
    data () {
        return {
            article_tag_searcher: '',
            tag_selector: false,
            auto_save_duration: 'none',
            auto_save_info: false
        }
    }
}
</script>