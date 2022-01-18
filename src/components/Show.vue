<template>
  <div class="row d-flex justify-content-center">
      <div class="col-md-6">
          <div class="card px-5 py-5" id="form1">
              <form class="form-data" @submit.prevent="updateClient" enctype="multipart/form-data">
                  <div class="forms-inputs mb-4"> <span>Nombre</span> <input v-model="lista.name" type="text"  class="form-contro" />
                  </div>
                  <div class="forms-inputs mb-4"> <span>Email</span> <input v-model="lista.email"  type="email" class="form-contro" />
                  </div>
                  <div class="forms-inputs mb-4"> <span>DNI</span> <input v-model="lista.dni" type="number"  class="form-contro" />
                  </div>
                  <div class="forms-inputs mb-4"> <span>Direccion</span> <input v-model="lista.address"  type="tex" class="form-contro" />
                  </div>
                  <div class="forms-inputs mb-4"> <span>Telefono</span> <input v-model="lista.phone" type="text"  class="form-contro" />
                  </div>
                  <div class="forms-inputs mb-4"> <span>ciudad</span> <input v-model="lista.city"  type="text" class="form-contro" />
                  </div>
                  <div class="mb-3"> <button type="submit" class="btn btn-dark w-100">Actualizar Cliente</button> </div>
              </form>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            lista: {}
        }
    },
    created (){
        let self = this;
        this.axios
        .get('https://dashboard.onexerp.co/api/public/api/v2/client/'+this.$route.params.id)
        .then(function (response){
            self.lista = response.data.success;
        }).catch(function (error) {
            console.log(error);
        });
    },
    methods: {
        updateClient(){
            let self = this;
            this.lista['dni'] = Number(this.lista['dni']);
          
            this.axios
            .put('https://dashboard.onexerp.co/api/public/api/v2/client/'+this.$route.params.id, this.lista)
            .then(function (){
                self.$router.replace('/lista');
            }).catch(function (error) {
                console.log(error);
            });
          
        }
    }
}
</script>