<template>
  <main>
      <section class="cover">
          <h1>Picfolio</h1>
          <img src="~@/assets/login-image.jpg" alt="login-image">
          <h3>The most awesome designers portfolios site.</h3>
      </section>
      <section class="form">
          <div class="tabs" ref="tabs">
              <a href="#" @click="selectTab" class="tab-item active">
                login
              </a>
              <a href="#" @click="selectTab" class="tab-item">
                register
              </a>
              <div class="line" ref="line"></div>
          </div>
          <section class="tab-items" ref="tabItems">
              <div class="tab-item">
                  <form ref="login">
                      <text-field 
                        placeholder="Type your awesome text here."
                        v-model="loginUsername"
                        title="username"
                      ></text-field>
                  </form>
              </div>
          </section>
      </section>
  </main>
</template>
<script>
    import TextField from './TextField'
    export default {
        components: {TextField},
        data () {
            return {
                loginUsername: null,
                activeItem: 0
            }
        },
        methods: {
            selectTab (ev) {
                $(this.$refs.tabs).children().removeClass('active')
                $(ev.target).addClass('active')
                const width = $(ev.target).outerWidth()
                const left = $(ev.target).position().left
                $(this.$refs.line).css({width, left})
            }
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
