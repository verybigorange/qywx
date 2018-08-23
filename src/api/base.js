import http from 'utils/http'
import axios from 'axios'
import {
  host
} from '@/config.js'
// 登陆
export function login(code) {
  return http({
    url: '/oauth/token',
    data: {
      grant_type: 'qy_weixin_suite',
      client_id: 1,
      client_secret: 'syjIoXiFY7wrjZiUQDRPel4DSrtcWz9SZqBfX5Pw',
      code,
      app_name: 'zntk'
    },
    method: 'post'
  })
}

// 登陆
// eslint-disable-next-line
export function refreshToken(refresh_token) {
  return axios({
    baseURL: `${host}`,
    timeout: 60000, // 请求超时时间
    url: '/oauth/token',
    headers: {
      Authorization: 'Bearer ' + sessionStorage.getItem('access_token')
    },
    data: {
      grant_type: 'refresh_token',
      client_id: 1,
      client_secret: 'syjIoXiFY7wrjZiUQDRPel4DSrtcWz9SZqBfX5Pw',
      refresh_token
    },
    method: 'post'
  })
}

// 获取用户信息
export function getUserInfo() {
  return http({
    url: '/api/v1/users/info',
    method: 'get'
  })
}