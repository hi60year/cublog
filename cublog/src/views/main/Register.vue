<template>
    <q-page padding class="column justify-start items-center bg-grey-3">
        <h4 style="letter-spacing:5px">注册cublog账号</h4>
        <div style="width:700px">
            <q-stepper
            v-model="step"
            ref="stepper"
            color="primary"
            animated
            >
                <q-step
                    :name="1"
                    title="输入基本信息"
                    icon="assignment"
                    :done="step > 1"
                >
                    
                    用户名
                    <q-input outlined v-model="username" type="text" dense class="input_section"
                             :rules="[required_field_checker]" lazy-rules/>
                    邮箱
                    <q-input outlined v-model="email" type="email" dense class="input_section"
                             :rules="[required_field_checker, email_valid_checker]" lazy-rules/>
                    密码
                    <q-input outlined v-model="password" type="password" dense class="input_section"
                             :rules="[required_field_checker]" lazy-rules/>
                    确认密码
                    <q-input outlined v-model="password_confirm" type="password" dense class="input_section"
                             :rules="[required_field_checker, repeat_password_checker]" lazy-rules  @keyup.enter="$refs.continue.click()"/>
                </q-step>

                <!-- TODO: 在错误验证码情况下拒绝继续 -->
                <q-step
                    :name="2"
                    title="验证邮箱"
                    icon="assignment"
                    :done="step > 2"
                >
                    一封带有验证码的邮件已经被发送至您的邮箱：{{email}}，请注意查收。填入验证码以继续。
                    <q-input outlined v-model="email_captcha" label="验证码" type="text" dense class="input_section" @keyup.enter="$refs.continue.click()"/>
                    <br>
                    未收到邮件？点击右边的按钮重新发送
                    <q-btn unelevated
                           color="secondary"
                           :disable="!resend_email_enabled"
                           :label="resend_email_enabled ? '重发邮件' : `等待${resend_email_counter}秒后重发`"
                           @click="resend()"
                           style="margin-left:20px" />
                </q-step>
            
                <q-step
                    :name="3"
                    title="选择您喜欢的内容"
                    icon="assignment"
                    :done="step > 3"
                >
                    在此，请您选择几个您感兴趣的内容，以便我们推送相关文章，您也可以先跳过该步骤并在之后的个人设置中进行调整。
                </q-step>
            
                <q-step
                    :name="4"
                    title="完成"
                    icon="assignment"
                >
                    一切就绪！<br><br>
                    您的账户已经被创建成功，cublog感谢您的加入。
                </q-step>
        
                <template v-slot:navigation>
                    <q-stepper-navigation>
                    <q-btn @click="continue_step()"
                           :loading="loading_btn_next"
                           color="primary"
                           :label="step === 4 ? '开始您的cublog之旅！' : '继续'"
                           padding="xs lg"
                           ref="continue"></q-btn>
                    </q-stepper-navigation>
                </template>
            </q-stepper>

            <q-dialog v-model="unable_to_continue_step1" position="top">
                <q-card style="width: 550px; margin-top:10px">
                    <q-card-section class="row items-center">
                        <span class="q-ml-sm" style="color: red">错误：不能继续，请检查您是否已经正确填入信息。</span>
                    </q-card-section>
                </q-card>
            </q-dialog>
        </div>
    </q-page>
</template>

<style lang="scss" scoped>
    .input_section {
        //width: 300px;
        margin-bottom: 5px;
        margin-top: 10px;
    }
</style>

<script>
const RESEND_CD = 30;

export default {
    name: 'register',
    data () {
        return {
            step: 1,
            username: '',
            password: '',
            password_confirm: '',
            email: '',
            unable_to_continue_step1: false,
            loading_btn_next: false,
            email_captcha: '',
            resend_email_enabled: false,
            resend_email_counter: RESEND_CD
            
        }
    },
    methods: {
      repeat_password_checker(val) {
          return val === this.password || '*重复的密码不正确'
      },
      required_field_checker(val) {
          return !!val || '*此项必填'
      },
      email_valid_checker(val) {
          return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(val) || '*请输入正确的邮箱地址'
      },
      continue_step() {
          if (this.step == 1) {
              this.loading_btn_next = true;
              //延时执行，以免发生意外错误
              setTimeout(()=>{
              if ([
                  this.required_field_checker(this.username),
                  this.required_field_checker(this.password),
                  this.required_field_checker(this.password_confirm),
                  this.required_field_checker(this.email),
                  this.repeat_password_checker(this.password_confirm),
                  this.email_valid_checker(this.email)
              ].every(x => x === true)) {
                  this.loading_btn_next = false;
                  this.$refs.stepper.next();
                  //启用下一页的倒计时
                  this.resend_email_count();
                  this.loading_btn_next = false;
                  return
              } else {
                  this.unable_to_continue_step1 = true;
                  this.loading_btn_next = false;
                  return
              }}, 1000)
          }
          else this.$refs.stepper.next()
      },
      resend_email_count() {
          let interval = setInterval(() => {
              if (this.resend_email_counter > 0) this.resend_email_counter--;
              else {this.resend_email_enabled = true; clearInterval(interval)}
          }, 1000);
      },
      resend() {
          this.resend_email_enabled = false;
          this.resend_email_counter = RESEND_CD;
          this.resend_email_count();
      }
    }
}
</script>