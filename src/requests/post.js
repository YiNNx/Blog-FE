import axios from 'axios'
import authHeader from '@/utils/auth'

axios.defaults.timeout = 50000
axios.defaults.baseURL = 'https://blog.just-plain.fun/api/v1/'
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

  GetPosts () {
    return axios.get('/post').then(response => response)
  }

  GetPostDetail (pid) {
    return axios.get('/post/' + pid).then(response => response)
  }
}

export default new PostService()
