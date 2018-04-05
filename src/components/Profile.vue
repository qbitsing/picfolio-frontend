<template>
  <div class="container">
      <p-header :user=session></p-header>
      <image-grid :posts=posts></image-grid>
  </div>
</template>
<script>
import PHeader from './mainViewComponents/header'
import ImageGrid from './mainViewComponents/imageGrid'
import http  from '@/utils/http'
export default {
  components: {PHeader, ImageGrid},
  data () {
    return {
      session: null,
      posts: []
    }
  },
  async created () {
    try {
      this.session = decrypt('session')
      let posts = await http(`user/${this.session.id}/posts`)
      posts = await posts.json()
      this.posts = posts.data.posts
      console.log(this.posts)

    } catch (e) {
      this.$router.push('/')
    }
  }
}
</script>
<style>

</style>
