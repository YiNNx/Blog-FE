import axios from 'axios'

axios.defaults.timeout = 50000
axios.defaults.baseURL = 'http://localhost:3000/api/v1/'

// axios.interceptors.request.use(config => {
//   // ...
//   return config
// }, error => {
//   return Promise.error(error)
// })

function LogIn (email, pwd) {
  return axios.get(
    '/token', {
      params: {
        email: email,
        pwd: pwd
      }
    })
    .then(successResponse => {
      alert('log in successfully!')
    })
    .catch(failResponse => {
      alert('log in failed\ncheck your email and password')
    })
}

export {
  LogIn
}
