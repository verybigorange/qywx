<template>
  <div style="padding-top:1.1rem;">
    <img class="icon" :src="require('images/success.png')" alt="" />
    <p class="tip">客户资料已提交</p>
    <div class="form">
        <div class="item">
          <p class="title">客户名称：</p>
          <p class="info">{{client_name}}</p>
        </div>
        <div class="item">
          <p class="title">联系人：</p>
          <p class="info">{{contact_name}}</p>
        </div>
        <div class="item">
          <p class="title">手机号：</p>
          <p class="info">{{mobile}}</p>
        </div>
    </div>
    <!-- <div class="btn-box">
       <mt-button  class="submit" type="primary" @click="ok" >完成</mt-button>
    </div> -->
  </div>
</template>

<script>
import { Button } from 'mint-ui'

export default {
  components: {
    'mt-button': Button
  },
  data() {
    return {
      client_name: '',
      contact_name: '',
      mobile: '',
      url: ''
    }
  },
  mounted() {
    const query = this.$route.query
    this.client_name = query.client_name
    this.contact_name = query.contact_name
    this.mobile = query.mobile
    // setTimeout(() => {
    //   this.$router.push(`/workbench?url=${query.url}`)
    // }, 3000)
  },
  methods: {
    // 完成
    ok() {}
  }
}
</script>

<style lang="scss" scoped>
$h: 0.7rem;
.icon {
  width: 1.6rem;
  height: 1.6rem;
  margin: 0 auto;
  display: block;
  margin-bottom: 0.5rem;
}
.tip {
  font-size: 0.38rem;
  color: #222;
  text-align: center;
}
.form {
  padding-top: 0.8rem;
  .title {
    font-size: 0.3rem;
    color: #999999;
    height: $h;
    line-height: $h;
    display: inline-block;
  }
  .info {
    font-size: 0.32rem;
    color: #222;
    height: $h;
    line-height: $h;
    display: inline-block;
    width: calc(100% - 1.5rem);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: right;
  }
  .item {
    display: flex;
    justify-content: space-between;
    margin-left: 0.3rem;
    padding: 0.15rem 0.2rem 0.15rem 0;
    border-top: 0.01rem solid #eee;
    &:last-child {
      border-bottom: 0.01rem solid #eee;
    }
  }
}
.btn-box {
  margin-top: 0.3rem;
  width: 100%;
  padding: 0 0.3rem;
  overflow: hidden;
  .submit {
    background: $base_green !important;
    width: 100%;
  }
}
</style>