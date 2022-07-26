import axios from 'axios'
import authHeader from '@/utils/auth'

axios.defaults.timeout = 50000
axios.defaults.baseURL = 'http://api.blog.just-plain.fun:3000/api/v1/'
axios.defaults.headers = authHeader()

// axios.interceptors.request.use(config => {
//   // ...
//   return config
// }, error => {
//   return Promise.error(error)
// })
class AuthService {
  LogIn (email, pwd) {
    return axios.get(
      '/token', {
        params: {
          email: email,
          pwd: pwd
        }
      })
      .then(response => {
        if (response.data.success) {
          localStorage.setItem('token', response.data.data.token)
          alert('log in successfully!')
        }
      })
      .catch(failResponse => {
        alert('log in failed\ncheck your email and password')
      })
  }

  LogOut () {
    localStorage.removeItem('token')
  }
}

export default new AuthService()
