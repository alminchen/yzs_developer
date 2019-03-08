const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function request(url, page, maxtime, success, fail) {
  if (typeof success != 'function' || typeof fail != 'function') {
    return
  }
  var app = getApp();
  wx.request({
    url: url,
    data: {
      page: page,
      maxtime: maxtime
    },
    success: function (res) {
      if (res.statusCode == 200) {
        success(res.data)
      }
    },
    fail: function () {
      fail('网络错误')
    }
  })
}

module.exports = {
  formatTime: formatTime,
  request: request
}
