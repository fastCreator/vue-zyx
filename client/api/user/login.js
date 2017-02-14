import request from './../request'

export function login (email,pass) {
  return request.post('/login', {email:email,pass:pass})
}
