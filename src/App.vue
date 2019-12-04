<script>
import request from "./utils/request";
export default {
  mounted() {
    // 登录
    mpvue.login({
      success: async res => {
        let code = res.code;
        const message = await request({
          url: "login",
          data: { code }
        });
        // 判断
        if (message.data.succ === 0) {
        } else if (message.data.succ === 1) {
          console.log(1);

          if (message.data.user === null) {
            wx.redirectTo({
              url: "/pages/login/main"
            });
            let Cookie = message.header["Set-Cookie"];
            mpvue.getUserInfo({
              success: async res => {
                await request({
                  url: "reg",
                  data: { encryptedData: res.encryptedData, iv: res.iv },
                  header: { Cookie }
                });
              }
            });
          }
        }

        // wx.request({
        //   method: "post",
        //   url: "https://hxauth.xiaoyansuo.cn/wxapp/login",
        //   data: { code },
        //   header: {
        //     "content-type": "application/x-www-form-urlencoded"
        //   },
        //   success(res) {
        //     console.log(res.header["Set-Cookie"]);
        //     mpvue.setStorageSync(
        //       "sessionId",
        //       JSON.stringify(res.header["Set-Cookie"])
        //     );

        //     if (res.data.succ == 0) {
        //     } else if (res.data.succ == 1) {
        //       if (res.data.user == null) {
        //         let SetCookie = res.header["Set-Cookie"];

        //         wx.getUserInfo({
        //           success: res => {
        //             console.log(res);
        //             wx.request({
        //               method: "post",
        //               url: "https://hxauth.xiaoyansuo.cn/wxapp/reg",
        //               data: { encryptedData: res.encryptedData, iv: res.iv },
        //               header: {
        //                 "content-type": "application/x-www-form-urlencoded",
        //                 Cookie: SetCookie
        //               }
        //             });
        //             //  await request({

        //             //  });
        //           }
        //         });
        //       }
        //     }
        //   }
        // });
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
