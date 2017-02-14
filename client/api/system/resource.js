import request from './../request'

export function getTree (params) {
  return request.get('/tree', params)
}

export function getTable (params) {
  return request.get('/table', params)
}
