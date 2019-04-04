//测试域名以及线上域名切换
var http = {
    'test': function () {
        return 'http://192.168.1.7:89/B2CApp/Common.svc'
    },
    'online': function () {
        return "https://app.shunyingglobal.cn/B2CApp/Common.svc"
    }
}
//获取Url上的参数
var getUrl = {
    'getUrlKey': function (name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(
            location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
    }
}