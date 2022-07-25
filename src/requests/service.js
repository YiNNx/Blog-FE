import axios from 'axios'
import authHeader from '@/utils/auth'

axios.defaults.timeout = 50000
axios.defaults.baseURL = 'http://api.blog.just-plain.fun:3000/api/v1/'
axios.defaults.headers = authHeader()

class UserService {
  getPublicContent () {
    return axios.get('all')
  }

  getUserBoard () {
    return axios.get('user')
  }

  getModeratorBoard () {
    return axios.get('mod')
  }

  getAdminBoard () {
    return axios.get('admin')
  }
}
export default new UserService()
