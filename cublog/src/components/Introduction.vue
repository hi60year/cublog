<template>
  <q-page ref="page" class = "column justify-center items-center">
    <div id="content">
      <center><img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" style="width:100px; height:100px"></center>
      <h3>cublog</h3>
      <div class="row justify-around items-start">
        <div class="sub">
          <h4>标题</h4>
          <text-body1>awa awa awa awa awa awa awa awa awa awa awa awa awa awa awa awa awa awa</text-body1>
        </div>
        <div class="sub">
          <h4>标题</h4>
          <text-body1>awa awa awa awa awa awa awa awa awa awa awa awa awa awa awa awa awa awa</text-body1>
        </div>
        <div class="sub">
          <h4>标题</h4>
          <text-body1>awa awa awa awa awa awa awa awa awa awa awa awa awa awa awa awa awa awa</text-body1>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
  #content{
    background-position: center top;
    background-size: cover;
    width : 80%;
    border-radius: 10px;
    text-align: center;
    padding-bottom : 50px;
    position: absolute;
    z-index: 2;
    overflow: hidden;
  }
  #content::after{
    width : 100%;
    background-image: url(../../public/background.jpg);
    background-position: center top;
    background-size: cover;
    background-attachment: fixed;
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -ms-filter: blur(10px);
    -o-filter: blur(10px);
    filter: blur(10px);
    border-radius: 3px;
    text-align: center;
    padding-bottom : 30px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    margin: -20px;
  }
  #content center {
    margin-top: 50px;
  }
  #content h3 {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  #content h4 {
    margin-top: 30px;
    letter-spacing: 5px;
  }
  #content h3,h4,text-body1{
    color: white;
  }
  .sub {
    width: 27%;
  }
</style>

<script>
export default {
  name: 'Introduction',
  components: {
  },
}
</script>
