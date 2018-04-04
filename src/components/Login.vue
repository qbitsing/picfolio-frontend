<template>
  <main>
    <section class="cover">
      <h1>Picfolio</h1>
      <img src="~@/assets/login-image.jpg" alt="login-image">
      <h3>The most awesome designers portfolios site.</h3>
  </section>
  <section class="form">
    <div class="tabs" ref="tabs">
      <a @click="selectTab" class="tab-item">
        login
      </a>
      <a @click="selectTab" class="tab-item">
        register
      </a>
      <div class="line" ref="line"></div>
    </div>
    <section class="tab-items" ref="tabItems">
        <div class="tab-item-cont">
          <form ref="login">
            <text-field 
              placeholder="Type your awesome text here."
              v-model="loginEmail"
              title="username"
            ></text-field>
            <text-field 
              placeholder="Type your password here."
              v-model="loginPassword"
              type="password"
              title="PASSWORD"
            ></text-field>
            <button class="primary" @click=login>send</button>
          </form>
        </div>
        <div class="tab-item-cont">
          <form ref="Register">
            <text-field 
              placeholder="Type your email here."
              v-model="registerEmail"
              title="email"
            ></text-field>
            <text-field 
              placeholder="Type your name here."
              v-model="registerName"
              title="name"
            ></text-field>
            <text-field 
              placeholder="Type your password here."
              v-model="registerPassword"
              type="password"
              title="PASSWORD"
            ></text-field>
            <text-field 
              placeholder="Confirm password here."
              v-model="registerConfirmPassword"
              type="password"
              title="confirm"
            ></text-field>
            <button @click="register" class="primary">send</button>
          </form>
        </div>
      </section>
    </section>
  </main>
</template>
<script>
import TextField from './TextField'
import http from '@/utils/http'
export default {
  components: {TextField},
  data () {
    return {
      loginEmail: null,
      loginPassword: null,
      registerPassword: null,
      registerConfirmPassword: null,
      registerName: null,
      registerEmail: null,
      activeItem: 0
    }
},
methods: {
  selectTab (ev) {
      ev.preventDefault()
      $(this.$refs.tabs).children().removeClass('active')
      $(ev.target).addClass('active')
      const index = $(ev.target).index()
      $(this.$refs.tabItems).children().removeClass('active')
      this.$refs.tabItems.children[index].classList.add('active')
      const width = $(ev.target).outerWidth()
      const left = $(ev.target).position().left
      $(this.$refs.line).css({width, left})
    },
    async login (ev) {
      ev.preventDefault()
      let body = {
        email: this.loginEmail,
        password: this.loginPassword
      }
      let response = await http('login', 'POST', body)
      response = await response.json()
      if (response) {
        const session = btoa(JSON.stringify(response))
        localStorage.setItem('session', session)
        this.$router.push('/profile')
      } else {
        alert('Credenciales incorrectos')
        this.loginPassword = null
      }
    },
    async register(ev) {
      ev.preventDefault()
      if (this.registerPassword === this.registerConfirmPassword) {
        const body = {
          email: this.registerEmail,
          password: this.registerPassword,
          name: this.registerName
        }
        let response = await http('register', 'POST', body)
        response = await response.json()
        console.log(response)
        if(response.status === 400) {
          alert('El correo ya ha sido tomado')
        } else {
          const session = btoa(JSON.stringify(response))
          localStorage.setItem('session', session)
          this.$router.push('/profile')
          this.registerEmail = null
        }
      } else alert('las contraseñas no coinciden')
    }
  },
  mounted () {
    this.$refs.tabs.children[0].click()
  },
  created () {
    try {
      decrypt('session')
      this.$router.push('/profile')
    } catch(e) {}
  }
}
</script>
<style scoped>
    .tabs {
        background: rgba(200,200,200,.3);
        text-transform: uppercase;
        display: flex;
        position: relative;
    }
    .tab-items {
      position: relative;
      width: 100%;
    }
    .tab-item-cont {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      opacity: 0;
      transition-delay: 0s, .2s;
      transition-duration: .5s, .3s;
      transition-property: transform, opacity;
      transform: scale(0);
    }
    .tab-item-cont.active {
      opacity: 1;
      transform: scale(1);
    }
    .tab-item {
        font-weight: 500;
        display: block;
        padding: 15px 20px;
        color: #fff;
    }
    .tab-item.active {
        font-weight: bold;
    }
    .line {
        transition: .3s;
        background: #0097e6;
        height: 4px;
        width: 80px;
        bottom: 0;
        left: 0;
        position: absolute;
    }
    main {
        display: flex;
    }
    .cover {
        background: #e74e39;
        box-shadow: 5px 1px 18px #000;
        z-index: 10;
        width: 50%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h1 {
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-size: 40px;
    }
    img {
        width: 300px;
        margin: 25px;
    }
    .form {
        padding: 50px;
        background: #0f243d;
        width: 50%;
        height: 100vh;
    }
    @media (max-width: 880px) {
        .cover {
            display: none;
        }
        .form {
            width: 100%;
        }
    }
</style>
