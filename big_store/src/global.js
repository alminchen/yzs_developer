var u = navigator.userAgent
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
var userId = null
export default window['getUser'] = (obj) => {
  if (userId == null) {
    var message = {
      'Message': '页面加载完用户信息',
      'Status': false,
      'StatusCode': 1,
      'Data': null,
      'method': 'returnUserData'
    }
    if (isAndroid) {
      window.huozhan.postMessage(JSON.stringify(message))
    }
    if (isIOS) {
      window.webkit.messageHandlers.huozhan.postMessage(message)
    }
  }
}
