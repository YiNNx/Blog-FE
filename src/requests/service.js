import axios from 'axios'
import authHeader from '@/utils/auth'

axios.defaults.timeout = 50000
axios.defaults.baseURL = 'https://blog.just-plain.fun/api/v1/'
axios.defaults.headers = authHeader()

class UserService {
  getPublicContent () {
    return axios.get('all')
  }
}
export default new UserService()
