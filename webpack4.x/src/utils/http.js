/* eslint-disable space-before-function-paren */
'use strict'

import axios from 'axios'
import qs from 'qs'

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function checkStatus(response) {
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
  }
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode(res) {
  if (res.status === -404) {
    alert(res.msg)
    return false
  }
  if (res.data && (!res.data.status)) {
    alert(res.data.error_msg)
    return false
  }
  return res
}

export default {
  post(url, data) {
    axios({
      method: 'post',
      baseURL: 'http://192.168.1.139:3200',
      url,
      data: qs.stringify(data),
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(res => {
      console.log(res)
    })
    // const res = checkStatus(response)
    // return checkCode(res)
  },
  get(url, params, cal) {
    axios({
      method: 'get',
      baseURL: 'http://192.168.1.139:3200',
      url,
      params,
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(res => {
      const resultIn = checkStatus(res)
      const result = checkCode(resultIn)
      if (typeof cal === 'function') {
        cal && cal(result)
        // return cal(result)
      }
    })
  }
}
