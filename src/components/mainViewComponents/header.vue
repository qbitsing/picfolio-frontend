<template>
  <header ref="header">
    <img src="~@/assets/smoke.png" class="image-cover">
    <a @click="logout" class="logout">
      <i class="fas fa-sign-out-alt"></i>
      Logout
    </a>
    <div class="title">
      <h1>{{user.name}}</h1>
      <button class="circle primary"><i class="fas fa-pencil-alt"></i></button>
    </div>
    <h3>{{user.slogan ? user.slogan : 'This is my awesome slogan fuckers!'}}</h3>
    <a @click=goDown class="down"><i class="fas fa-angle-down"></i></a>
    <input @change="pick" type="file" ref="file">
    <button @click="$refs.file.click()" class="primary">
      <i class="fas fa-camera"></i>
      Upload photo
    </button>
    <modal :state=modalState @close=closeModal>
      <section slot="content" class="content">
        <div class="image-cont">
          <img :src=selectedImage >
        </div>
        <div class="desc">
          <h3>Descripción.</h3>
          <text-field v-model=description placeholder="Añade una descripción."></text-field>
        </div>
        <div class="actions">
          <loader-button :loading=loading @click=post text="POST IT!"></loader-button>
        </div>
      </section>
    </modal>
  </header>
</template>
<script>
  import TextField from './../TextField'
  import LoaderButton from './../LoaderButton'
  import Modal from './../Modal'
  import http from '@/utils/http'
  import {mapState} from 'vuex'
  export default {
    components: {Modal, TextField, LoaderButton},
    props: ['user'],
    computed: mapState(['posts']),
    created () {
      this.session = decrypt('session')
    },
    data () {
      return {
        selectedImage: null,
        modalState: false,
        description: null,
        loading: false,
        session: {}
      }
    },
    methods: {
      closeModal () {
        this.modalState = false
      },
      async post() {
        this.loading = true
        let body = {
          user_id: this.session.id,
          image: this.selectedImage,
          description: this.description || ''
        }
        console.log(body)
        let res = await http('posts', 'POST', body)
        res = await res.json()
        res.comments = []
        this.posts.unshift(res)
        this.loading = false
        this.modalState = false
        
      },
      async pick(ev) {
        const fr = new FileReader()
        const result = () => new Promise((rs, rj) =>{
          fr.onload = function() {
            try {
              atob(fr.result.split('base64,')[1])
              rs(fr.result)
            } catch(e) {
              rj('Fichero dañado')
            }
          }
        })
        fr.readAsDataURL(this.$refs.file.files[0])
        this.selectedImage = await result()
        this.modalState = true
      },
      goDown() {
        window.$('html,body').animate({
          scrollTop: $(this.$refs.header).outerHeight()},
          'slow');
      },
      logout () {
        localStorage.removeItem('session'),
        this.$router.push('/')
      }
    }
  }
</script>
<style scoped>
.content {
  width: 500px;
  max-width: 80%;
}
.content img {
  width: 100%;
}
.logout {
  position: fixed;
  color: #999;
  top: 0;
  right: 0;
  margin: 25px;
  transition: .3s;
  font-size: 23px;
  font-weight: bold;
}
input[type="file"] {
  display: none;
}
.logout:hover {
  color: #ccc;
}
.image-cover {
  width: 100%;
  object-fit: cover;
  height: 100vh;
  position: absolute;
  z-index: 0;
  top: 0;
  opacity: .8;
  left: 0;
}
header {
  background-color: rgba(12,3,3,.9);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
header h1 {
  font-size: 80px;
  margin: 0 25px;
}
.title {
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
}
header>h3 {
  z-index: 15;
  font-size: 17px;
  text-shadow: 1px 1px rgba(121, 58, 58, 0.356);
  margin: 20px 0;
  transition: .3s;
}
header>h3:hover {
  text-shadow: 1px 1px 2px rgba(241, 233, 233, 0.92);
}
header>.down {
  z-index: 15;
  font-size: 55px;
  transition-duration: .3s, .5s, .5s;
  transition-property: color, font-size, background, transform;
  background: white;
  width: 60px;
  height: 60px;
  display: flex;
  color: rgba(38, 122, 247, 0.95) !important;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
header>.down:hover {
  color: rgba(12,3,3,.8) !important;
  background: rgba(241, 233, 233, 0.4);
  font-size: 65px;
  transform: scale(1.1)
}
button {
  z-index: 15;
  margin: 20px 0;
}
</style>
