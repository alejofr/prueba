<template>
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
          <div class="card px-5 py-5" id="form1">
              <form class="form-data" @submit.prevent="loginForm" enctype="multipart/form-data">
                  <div class="forms-inputs mb-4"> <span>Usuario</span> <input v-model="user.username" type="text"  class="form-contro" />
                  </div>
                  <div class="forms-inputs mb-4"> <span>Contraseña</span> <input v-model="user.clave"  type="password" class="form-contro" />
                  </div>
                  <div class="mb-3"> <button type="submit" class="btn btn-dark w-100">Login</button> </div>
              </form>
          </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data(){
    return {
      user:{
         username: '',
         clave: '',
         token: ''
      },
    }
  },
  methods: {
    ...mapActions(['addToken']),
    loginForm(){
      console.log(this.user);
      let self = this;
      let data = new FormData();
        data.append('username', this.user.username);
        data.append('password', this.user.clave);

      this.axios
      .post('https://dashboard.onexerp.co/api/public/api/v2/login', data)
      .then(function (response){
           self.addToken(response.data.success.token);
           self.$router.replace('/');
      }).catch(function (error) {
          console.log(error);
      });
    }
  }
}
</script>

