<template>
  <div class="container">
      <p-header :user=session></p-header>
      <image-grid :posts=posts></image-grid>
  </div>
</template>
<script>
import PHeader from './mainViewComponents/header'
import ImageGrid from './mainViewComponents/imageGrid'
export default {
  components: {PHeader, ImageGrid},
  data () {
    return {
      session: null,
      posts: [
        {
          id: 1,
          likes: 18,
          comments: ['hola', '123'],
          imageURL: 'https://media.istockphoto.com/photos/plant-growing-picture-id510222832?k=6&m=510222832&s=612x612&w=0&h=Pzjkj2hf9IZiLAiXcgVE1FbCNFVmKzhdcT98dcHSdSk='
        },
        {
          id: 2,
          likes: 6,
          comments: [],
          imageURL: 'https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg'
        }
      ]
    }
  },
  created () {
    try {
      this.session = decrypt('session')
    } catch (e) {
      this.$router.push('/')
    }
  }
}
</script>
<style>

</style>
