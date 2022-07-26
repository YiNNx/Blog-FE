import axios from 'axios'
import authHeader from '@/utils/auth'

axios.defaults.timeout = 50000
axios.defaults.baseURL = 'http://api.blog.just-plain.fun:3000/api/v1/'
axios.defaults.headers = authHeader()

class PostService {
  Post (title, content) {
    return axios.post(
      '/post', {
        title: title,
        content: content
      })
      .then(response => {
        if (response.data.success) {
          alert('post successfully!')
        }
      })
      .catch(failResponse => {
        alert('No authorization :(')
      })
  }

  LogOut () {
    localStorage.removeItem('token')
  }
}

export default new PostService()
