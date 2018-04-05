<template>
  <main>
    <div v-if="posts.length" class="images-container">
      <div class="image" v-for="post in posts" @click="selectImage(post)" :key=post.id>
        <div class="overlay">
          <div class="cont">
            <div class="counter">
              <span class="icon">
                <i class="fas fa-heart"></i>
              </span>
              <span class="number">{{post.likes}}</span>
            </div>
            <div class="counter">
              <span class="icon">
                <i class="fas fa-comment"></i>
              </span>
              <span class="number">{{post.comments.length}}</span>
            </div>
          </div>
        </div>
        <img :src="post.imageURL">
      </div>
    </div>
    <h2 v-else>Aún no hay posts!</h2>
  </main>
</template>
<script>
    export default {
      methods: {
        selectImage(post) {
          this.$emit('select', post)
        }
      },
      props: ['posts']
    }
</script>
<style scoped>
main {
  margin: 15px 0;
  min-height: calc(100vh - 30px);
}
.images-container {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 40vh;
}
.icon {
    cursor: pointer;
}
.image {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: .35s;
}
.image:hover .overlay {
    background: rgba(0,0,0,.75);
}
.image:hover .overlay .cont {
    transform: scale(1);
}
.overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
}
.overlay .cont {
    display: flex;
    transition-duration: .3s;
    transition-delay: .2s;
    transform: scale(0);
}
.overlay .cont div {
    margin: 20px;
}
.image:hover {
    box-shadow: 3px 3px 13px rgb(41, 38, 38), -2px -2px 5px rgb(41,38,38);
}
.image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.image > .overlay {
    transition: .6s;
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>