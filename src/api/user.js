import request from '@/utils/request';

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data,
  });
}

export function getInfo() {
  return request({
    url: '/user/get',
    method: 'get',
  });
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post',
  });
}

export function getAllUsers() {
  return request({
    url: '/user/getAllUsers',
    method: 'get',
  });
}
