export default function (obj) {
  let url = obj.url || ''
  let method = obj.method || 'post'
  let data = obj.data || {}

  // 配置url
  url = 'https://hxauth.xiaoyansuo.cn/' + url;
    // 加载状态设置
    mpvue.showLoading({
      title: '正在加载'
    })
  return new Promise((resolve, reject) => {
    // 发送请求
    mpvue.request({
      url,
      method,
      data,
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success(info) {

        resolve(info.data)
        // 关闭加载
        mpvue.hideLoading()
      }
    })
  })
}
