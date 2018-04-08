<template>
  <div>
      <p-header :user=session></p-header>
      <image-grid :userdata=session></image-grid>
  </div>
</template>
<script>
import PHeader from './mainViewComponents/header'
import ImageGrid from './mainViewComponents/imageGrid'
import http  from '@/utils/http'
import {mapState} from 'vuex'
export default {
  components: {PHeader, ImageGrid},
  data () {
    return {
      session: null
    }
  },
  computed: mapState(['posts']),
  async created () {
    try {
      this.session = decrypt('session')
      let posts = await http(`user/${this.session.id}/posts`)
      posts = await posts.json()
      this.$store.commit('SET_POSTS', posts.data.posts.reverse())
    } catch (e) {
      this.$router.push('/')
    }
  }
}
</script>
<style>

</style>
