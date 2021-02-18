<template>
  <q-page class="bg-grey-3 row justify-center items-start" padding>
    <q-card class="col-10 q-pa-md">
      <q-card-section>
        <div class="text-h5" style="letter-spacing:2px">新文章</div>
        <div class="q-mt-md">
          请选择标签：
          <q-input
            dense
            v-model="article_tag_searcher"
            type="text"
            style="width: 200px; display: inline-block"
            @focus="tag_selector = true"
            @blur="tag_selector = false"
          >
            <template v-slot:append>
              <q-icon v-if="article_tag_searcher === ''" name="search"></q-icon>
              <q-icon
                v-else
                name="clear"
                class="cursor-pointer"
                @click="article_tag_searcher = ''"
              ></q-icon>
            </template>
          </q-input>

          <q-slide-transition>
            <!-- 这里没有使用Quasar调色板，因为目前没有找到指定颜色透明度的好办法 -->
            <div
              class="shadow-3 z-max q-ma-md"
              style="position:absolute; border-radius: 5px; background:rgba(68, 249, 255, 0.5)"
              v-show="tag_selector"
            >
              <!-- TODO: 需要后端进行注入 -->
              <!-- 此处由于有滑动过渡特效需要一个整体的div所以新加一层div -->
              <div
                style="width: 400px; height:200px"
                class="q-pa-md q-gutter-sm"
              >
                <q-btn
                  no-caps
                  unelevated
                  padding="none xs"
                  size="sm"
                  color="grey"
                  text-color="white"
                  label="c++"
                />
                <q-btn
                  no-caps
                  unelevated
                  padding="none xs"
                  size="sm"
                  color="grey"
                  text-color="white"
                  label="c++-qt"
                />
              </div>
            </div>
          </q-slide-transition>
          <div class="q-mt-lg">
            自动储存<q-btn
              flat
              size="sm"
              round
              color="primary"
              dense
              @click="auto_save_info = true"
              >?</q-btn
            >：
            <div class="q-gutter-sm" style="display:inline">
              <q-radio
                v-model="auto_save_duration"
                val="none"
                label="不自动保存"
              />
              <q-radio v-model="auto_save_duration" val="min_1" label="1分钟" />
              <q-radio v-model="auto_save_duration" val="min_2" label="2分钟" />
              <q-radio v-model="auto_save_duration" val="min_5" label="5分钟" />
            </div>
          </div>
          <div v-if="editor === '' && md_input === ''">
            使用的编辑模式<q-btn
              flat
              size="sm"
              round
              color="primary"
              dense
              @click="edit_mode_info = true"
              >?</q-btn
            >：
            <q-radio v-model="edit_mode" val="ordinary" label="一般编辑器" />
            <q-radio
              v-model="edit_mode"
              val="markdown"
              label="Markdown编辑器"
            />
          </div>

          <q-toggle
            v-if="edit_mode === 'markdown'"
            v-model="md_prev"
            color="green"
            class="q-mt-md"
            label="markdown preview"
          />

          <!-- 在这里可以折叠代码，因为这个editor它真的很大块 -->
          <form
            autocorrect="off"
            autocapitalize="off"
            autocomplete="off"
            spellcheck="false"
          >
            <q-editor
              v-if="edit_mode === 'ordinary'"
              class="q-mt-lg markdown-body"
              v-model="editor"
              ref="article_editor"
              :dense="$q.screen.lt.md"
              style="min-height:600px"
              @paste.native="(evt) => pasteCapture(evt)"
              :definitions="{
                insert_photo: {
                  tip: '插入一张图片',
                  icon: 'insert_photo',
                  handler: insert_photo,
                },
              }"
              :toolbar="[
                [
                  {
                    label: $q.lang.editor.align,
                    icon: $q.iconSet.editor.align,
                    fixedLabel: true,
                    options: ['left', 'center', 'right', 'justify'],
                  },
                ],
                [
                  'bold',
                  'italic',
                  'strike',
                  'underline',
                  'subscript',
                  'superscript',
                ],
                ['hr', 'link', 'insert_photo'],
                ['print', 'fullscreen'],
                [
                  {
                    label: $q.lang.editor.formatting,
                    icon: $q.iconSet.editor.formatting,
                    list: 'no-icons',
                    options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
                  },
                  {
                    label: $q.lang.editor.fontSize,
                    icon: $q.iconSet.editor.fontSize,
                    fixedLabel: true,
                    fixedIcon: true,
                    list: 'no-icons',
                    options: [
                      'size-1',
                      'size-2',
                      'size-3',
                      'size-4',
                      'size-5',
                      'size-6',
                      'size-7',
                    ],
                  },
                  'removeFormat',
                ],
                ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
                ['undo', 'redo'],
              ]"
            ></q-editor>
          </form>

          <center>
            <form
              autocorrect="off"
              autocapitalize="off"
              autocomplete="off"
              spellcheck="false"
            >
              <textarea
                v-if="edit_mode === 'markdown'"
                contenteditable
                style="user-modify: read-write-plaintext-only; border-radius: 5px; height: 500px; width:90%; caret-color:blue; 
              font-family:Consolas; resize:none; border:none"
                class="shadow-2 q-mt-lg q-py-md q-px-sm"
                :value="md_input"
                @input="md_edit_update"
              >
              </textarea>
            </form>
          </center>

          <div
            v-if="md_prev"
            v-html="compiledMarkdown"
            class="q-mt-lg markdown-body"
          ></div>
        </div>

        <q-btn
          :disable="editor === '' && md_input === ''"
          flat
          class="q-mt-lg"
          color="green"
          icon="drafts"
          label="储存到草稿"
          @click="submit()"
        />
        <q-btn
          :disable="editor === '' && md_input === ''"
          class="full-width q-mt-md"
          color="primary"
          icon="check"
          label="提交"
          @click="submit()"
        />
      </q-card-section>
    </q-card>

    <!-- 页面内容和动态内容的分界 -->

    <q-dialog v-model="auto_save_info">
      <q-card class="q-pa-lg bg-info text-white">
        <h6 class="q-my-sm">自动储存</h6>
        <p>自动储存是在您编辑过程中将您的文章自动储存为草稿的功能。</p>
        <p>
          如果选择了“不自动保存”以外的选项，自动保存功能会根据相应的时间间隔将草稿上传到云端进行保存。
        </p>
        <p>
          但是请注意，尽管有自动储存功能，由于服务器本身的限制，最小的自动上传间隔也有1分钟，因此手动上传到草稿是更好的办法。
        </p>
      </q-card>
    </q-dialog>
    <q-dialog v-model="edit_mode_info">
      <q-card class="q-pa-lg bg-info text-white">
        <h6 class="q-my-sm">编辑模式</h6>
        <p>cublog提供两种编辑模式。</p>
        <p>
          对于一般用户，我们建议您选择一般编辑器，它提供了丰富的编辑支持，并且达到所见即所得的效果。
        </p>
        <p>如果您对markdown非常熟悉，也可以使用markdown进行编辑。</p>
        <p>警告：一旦开始编辑，您就不能再更改编辑模式</p>
      </q-card>
    </q-dialog>
    <q-dialog v-model="img_input" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">请输入图片URL</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="img_src"
            @keyup.enter="
              +(function() {
                img_input = false;
                emitter.emit('img_inputed');
              })()
            "
          />
        </q-card-section>

        <q-separator />

        <q-card-section>
          或者：
          <center>
            <q-file
              style="max-width: 300px"
              align="center"
              v-model="filesImages"
              outlined
              dense
              class="q-mt-md"
              label="上传图片，大小小于5M"
              accept=".jpg, image/*"
              max-file-size="5242880"
              @rejected="onRejected"
            />
          </center>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="取消" v-close-popup />
          <q-btn
            flat
            label="确定"
            v-close-popup
            @click="emitter.emit('img_inputed')"
            :disable="!(img_src || filesImages)"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<style scoped>
[contenteditable]:focus {
  outline: none;
}
code {
  font-family: Consolas;
}
</style>

<script>
import events from "events";
import _ from "lodash";
import marked from "marked";
import "github-markdown-css";

export default {
  name: "newArticle",
  data() {
    return {
      article_tag_searcher: "",
      tag_selector: false,
      auto_save_duration: "none",
      auto_save_info: false,
      edit_mode: null,
      edit_mode_info: false,
      editor: "",
      img_input: false,
      img_src: "",
      emitter: null,
      filesImages: null,
      md_prev: true,
      md_input: "",
    };
  },
  methods: {
    insert_photo() {
      this.img_input = true;
    },
    async add_photo() {
      if (this.filesImages && this.img_src) {
        this.$q.notify({
          type: "negative",
          message: `同时提供url和上传文件是无效的。请只使用一种上传方式。`,
        });
        return;
      }

      if (this.img_src) {
        this.$refs.article_editor.runCmd(
          "insertHTML",
          `<img src=${this.img_src}/>`
        );
        this.img_src = "";
      } else if (this.filesImages) {
        let res = undefined;
        try {
          // TODO: 完成上传功能
          this.$refs.article_editor.runCmd(
            "insertHTML",
            `<img src=${res?.img}/>`
          );
          throw new Error("目前上传功能未实现，请指定URL。");
        } catch (error) {
          this.$q.notify({
            type: "negative",
            message: `上传失败，${error.name} : ${error.message}`,
          });
        }
        this.filesImages = null;
      }
    },

    md_edit_update(e) {
      _.debounce((e) => {
        this.md_input = e.target.value;
      }, 300)(e);
    },
    /**
     * Capture the <CTL-V> paste event, only allow plain-text, no images.
     *
     * see: https://stackoverflow.com/a/28213320
     *
     * @param {object} evt - array of files
     * @author Daniel Thompson-Yvetot
     * @license MIT
     */
    pasteCapture(evt) {
      // Let inputs do their thing, so we don't break pasting of links.
      if (evt.target.nodeName === "INPUT") return;
      let text, onPasteStripFormattingIEPaste;
      evt.preventDefault();
      if (evt.originalEvent && evt.originalEvent.clipboardData.getData) {
        text = evt.originalEvent.clipboardData.getData("text/plain");
        this.$refs.article_editor.runCmd("insertText", text);
      } else if (evt.clipboardData && evt.clipboardData.getData) {
        text = evt.clipboardData.getData("text/plain");
        this.$refs.article_editor.runCmd("insertText", text);
      } else if (window.clipboardData && window.clipboardData.getData) {
        if (!onPasteStripFormattingIEPaste) {
          onPasteStripFormattingIEPaste = true;
          this.$refs.article_editor.runCmd("ms-pasteTextOnly", text);
        }
        onPasteStripFormattingIEPaste = false;
      }
    },
  },
  created() {
    this.emitter = new events.EventEmitter();
    this.emitter.on("img_inputed", this.add_photo);
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.md_input, { sanitize: true });
    },
  },
};
</script>
