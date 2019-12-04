<script>
import request from "./utils/request";
export default {
  // 登录
  created() {
    mpvue.login({
      success: async res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var code = res.code;
        console.log(code);
        const message = await request({
          url: "wxapp/login",
          data: { code },
          header: {
            "content-type": "application/x-www-form-urlencoded"
          }
        });
      }
    });
  }
};
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
