import axios from 'axios'

const handleStatus = (res) => {
  if (res.status === 200) {
    return Promise.resolve(res.data)
  } else {
    return Promise.reject(res)
  }
}
export default {
  get (url, params) {
    let queryString = []
    if(params)
    Object.keys(params).forEach(key => params[key] && queryString.push(`${key}=${params[key]}`))
    if (queryString.length > 0) {
      queryString = queryString.join('&')
      url += `?${queryString}`
    }

    return axios
      .get(url)
      .then(handleStatus)
      .catch(error => {
        console.log(error)
      })
  },

  post (url, params) {
    return axios
      .post(url, params)
      .then(handleStatus)
      .catch(error => {
        console.log(error)
      })
  }
}
