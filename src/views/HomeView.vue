<template>
  <dev class="header">
    <h1>Hi, this is YiNN's Blog</h1>
  </dev>
  <HomePage />
</template>

<script>
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'HomeView',
  components: { HomePage },
  data () {
    return {
    }
  },
  created() {
  }
}

</script>

<style scoped>
.header {
  padding: 0 25%;
}
.header h1 {
  text-align: left;
  height: 15rem;
  padding: 0 25%;
}

</style>
