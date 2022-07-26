<template>
  <div class="compose">
    <ComposePost/>
  </div>
</template>

<script>
// @ is an alias to /src
import ComposePost from '@/components/ComposePost.vue'

export default {
  name: 'ComposeView',
  components: {
    ComposePost
  }
}
</script>
