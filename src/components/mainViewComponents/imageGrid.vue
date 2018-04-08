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
        <img :src="post.image">
      </div>
    </div>
    <h2 class="no-posts" v-else>
      <i class="fas fa-exclamation-triangle"></i>
      Aún no hay posts!
      </h2>
    <modal :state=modalState @close="modalState = false">
      <section v-if="selectedPost" class="content" slot="content">
        <div class="image-cont">
            <img :src=selectedPost.image id="modalImage">
        </div>
        <div class="info">
            <div class="user-data">
                <div class="profile">
                    <a href="">{{userdata.name}}</a>
                    <p>{{selectedPost.description}}</p>
                </div>
                <a href="" class="follow">Follow</a>
            </div>
            <div class="comments">
                <p v-for="comment in selectedPost.comments" :key="comment.id">
                  <a @click="$router.push(`user/${comment.user.id}`)" class="username">{{comment.user.name}}</a> {{comment.comment}}
                </p>
            </div>
            <div class="actions">
                <div class="icons">
                    <div>
                        <span class="icon">
                            <i class="far fa-heart"></i>
                        </span>
                        <span class="icon">
                            <i class="far fa-comment"></i>
                        </span>
                    </div>
                    <span class="icon">
                        <i class="far fa-bookmark"></i>
                    </span>
                </div>
                <a class="number">{{selectedPost.likes}} me gusta.</a>
                <span class="date">16 de Marzo</span>
            </div>
            <div class="make-comment">
                <input @keyup.enter=comentar v-model=textComment placeholder="Type a comment." type="text">
            </div>
          </div>
      </section>
    </modal>
  </main>
</template>
<script>
    import Modal from './../Modal'
    import http  from '@/utils/http'
    import {mapState} from 'vuex'
    export default {
      computed: mapState(['posts']),
      data () {
        return {
          modalState: false,
          textComment: null,
          selectedPost: null
        }
      },
      components: {Modal},
      methods: {
        selectImage(post) {
          console.log('select')
          this.selectedPost = post
          this.selectedPost.comments
          this.modalState = true
        },
        async comentar() {
          if(this.textComment) {
            let body = {
              user_id: this.userdata.id,
              post_id: this.selectedPost.id,
              comment: this.textComment
            }
            let res = await http('comments', 'POST', body)
            res = await res.json()
            this.textComment = null
            body.user = this.userdata
            this.selectedPost.comments.push(body)
            this.posts.forEach(e => {
              if (e.id == body.post_id) e.push(body)
            })
          }
        }
      },
      props: ['userdata']
    }
</script>
<style scoped>
main {
  padding: 15px 0;
}
.content>.image-cont {
  background: black;
  display: flex;
  align-items: center;
}
.make-comment input {
  width: 100%;
  outline: none;
  font-size: 16px;
  border: 0;
  padding: 0px 13px;
  box-sizing: border-box;
}
.make-comment input:focus {
  border: 0;
}
.content>.image-cont img{
  width: 100%;
}
.info {
  color: black;
  position: relative;
  padding: 10px 20px;
}
.info a {
  color: #222;
  font-weight: bold;
}
.info .user-data{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 7px;
  border-bottom: .6px solid #ccc;
}
.profile {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.profile p {
  margin-top: 10px;
  color: #666;
}
.info .user-data .follow {
  background: #00a8ff;
  align-self: flex-end;
  color: #fff;
  padding: 6px;
  font-weight: 400;
  border-radius: 3px;
}
.comments {
  padding: 15px 0;
  border-bottom: .6px solid #ccc;
  height: 50%;
  min-height: 20%;
}
.comments p {
  margin-bottom: 12px;
}
.actions {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}
.actions .icons {
  display: flex;
  justify-content: space-between;
  font-size: 25px;
}
.actions .number {
  margin: 10px 0;
}
.actions .date {
  text-transform: uppercase;
  color: #999;
  font-size: 14px;
}
.make-comment {
  position: absolute;
  bottom: 0;
  left: 0;
  padding-top: 4px;
  width: 100%;
  border-top: .8px solid #ccc;
}
.content {
  width: 950px;
  max-width: 90%;
  height: 550px;
  max-height: 85vh;
  overflow: hidden;
  border-radius: 4px;
  display: grid;
  background: white;
  transition-duration: .3s, .5s;
  transition-property: opacity, transform;
  grid-template-columns: 1fr 400px;
}
.no-posts {
  color: blue;
  text-align: center;
  padding: 40px;
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