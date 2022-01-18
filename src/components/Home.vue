<template>
  <div class="row d-flex justify-content-center">
      <div class="col-md-6">
          <div class="card px-5 py-5" id="form1">
              <form class="form-data" @submit.prevent="createClient" enctype="multipart/form-data">
                  <div class="forms-inputs mb-4"> <span>Nombre</span> <input v-model="name" type="text"  class="form-contro" />
                  </div>
                  <div class="forms-inputs mb-4"> <span>Email</span> <input v-model="email"  type="email" class="form-contro" />
                  </div>
                  <div class="forms-inputs mb-4"> <span>DNI</span> <input v-model="dni" type="text"  class="form-contro" />
                  </div>
                  <div class="forms-inputs mb-4"> <span>Direccion</span> <input v-model="address"  type="tex" class="form-contro" />
                  </div>
                  <div class="forms-inputs mb-4"> <span>Telefono</span> <input v-model="phone" type="text"  class="form-contro" />
                  </div>
                  <div class="forms-inputs mb-4"> <span>ciudad</span> <input v-model="city"  type="text" class="form-contro" />
                  </div>
                  <div class="mb-3"> <button type="submit" class="btn btn-dark w-100">Crear Cliente</button> </div>
              </form>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      name:'', 
      email:'',
      dni:'', 
      address:'', 
      phone:'', 
      city:''
    }
  }, 
  methods: {
      createClient(){
          let self = this;
          let data = new FormData();
          data.append('name', this.name);
          data.append('email', this.email);
          data.append('dni', this.dni);
          data.append('address', this.address);
          data.append('phone', this.phone);
          data.append('city', this.city);

          this.axios
          .post('https://dashboard.onexerp.co/api/public/api/v2/client', data)
          .then(function (){
              self.$router.replace('/lista');
          }).catch(function (error) {
              console.log(error);
              console.log(error.response.data);
          });
      }
  }
}
</script>