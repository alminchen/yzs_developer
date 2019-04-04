<template>
  <div class="login-wrap">
    <div style="padding-top:.88rem">
      <div class="login-head">
        <img src="../../assets/images/login.png" alt>
      </div>

      <div class="form-list">
        <input type="text" name="tel" v-model="phone" placeholder="请输入您的手机号码" maxlength="11">
      </div>
      <div class="form-list getCode">
        <input type="text" name="code" v-model="verify" placeholder="请输入短信验证码" maxlength="6">
        <button class="getMsg">获取验证码</button>
      </div>
      <div class="login-btn" @click.stop="loginIn">登录</div>
      <div class="agreement">
        已同意
        <router-link to="/" class="main-color">《用户服务协议》</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import * as action from "@/store/action";
export default {
  name: "Login",
  data() {
    return {
      name: "",
      verifyCode: "",
      phone: "",
      verify: ""
    };
  },
  mounted() {},
  methods: {
    loginIn() {

      this.$store.commit(action.LOGIN,'b88626c0-0cf4-43f2-a184-7b0528bdc3a4');
      this.$router.push("/index");
    }
  }
};
</script>

<style scoped lang="less">
.login-wrap {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
}
.login-head {
  margin: 60/100rem 0 80/100rem 0;
  text-align: center;
}
.login-head image {
  width: 250/100rem;
  height: 87/100rem;
}

body {
  background-color: #fff;
}
.login-head {
  margin: 60/100rem 0 80/100rem 0;
  text-align: center;
}
.login-head img {
  width: 250/100rem;
  height: 87/100rem;
}

.form-list {
  margin: 0 30/100rem 30/100rem;
  height: 90/100rem;
  border-radius: 5/100rem;
  opacity: 0.9;
}
.form-list input {
  font-size: 14px;
  width: 100%;
  background-color: #f8f8f8;
  padding-left: 20/100rem;
  height: 90/100rem;
  line-height: 90/100rem;
}

.form-list input::-webkit-input-placeholder {
  color: #999999;
}
.form-list input::-moz-placeholder {
  /* Firefox 19+ */
  color: #999999;
}
.form-list input::-ms-input-placeholder {
  color: #999;
}

.getCode {
  display: flex;
  justify-content: space-between;
}
.getCode input {
  width: 430/100rem;
}
.getMsg {
  background-color: #f00;
  width: 210/100rem;
  height: 90/100rem;
  background-color: #fff;
  line-height: 90/100rem;
  text-align: center;
  color: #222;
  font-size: 14px;
  margin: 0;
  letter-spacing: 2/100rem;
}
.login-btn {
  margin: 0 30/100rem;
  height: 90/100rem;
  background-color: #f5174a;
  border-radius: 5/100rem;
  opacity: 0.9;
  color: #fff;
  text-align: center;
  line-height: 90/100rem;
  font-size: 32/100rem;
}
.agreement {
  display: flex;
  justify-content: center;

  font-size: 12/100rem;
  margin: 24/100rem 30/100rem 0 0;
}

.form-list {
  margin: 0 30/100rem 30/100rem;
  font-size: 14/100rem;
  height: 90/100rem;
  border-radius: 5/100rem;
  opacity: 0.9;
}
.form-list input {
  background-color: #f8f8f8;
  padding-left: 20/100rem;
  height: 90/100rem;
  line-height: 90/100rem;
}
.getCode {
  display: flex;
  justify-content: space-between;
}
.getCode input {
  width: 430/100rem;
}

.login-btn {
  margin: 0 30/100rem;
  height: 90/100rem;
  background-color: #f5174a;
  border-radius: 5/100rem;
  opacity: 0.9;
  color: #ffffff;
}
.agreement {
  display: flex;
  justify-content: center;
  font-size: 12/100rem;
  margin: 24/100rem 30/100rem 0 0;
}
</style>
