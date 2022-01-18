<template>
  <div class="row d-flex justify-content-center">
      <div class="col-md-6">
         <table class="table">
            <thead>
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">DNI</th>
                <th scope="col"> Telefono </th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="lista in list" :key="lista.id">
                <td>{{lista.name}}</td>
                <td>{{lista.email}}</td>
                <td>{{lista.dni}}</td>
                <td>{{lista.phone}}</td>
                <td> <button @click="eliminar(lista.id)">Eliminar</button> </td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      list: []
    }
  },
  created(){
        let self = this;
        this.axios
        .get('https://dashboard.onexerp.co/api/public/api/v2/client')
        .then(function (response){
            self.list = response.data.success;
        }).catch(function (error) {
            console.log(error);
        });
  },
  methods: {
      eliminar(id){
            console.log(id);
            let self = this
            this.axios
            .delete('https://dashboard.onexerp.co/api/public/api/v2/client/'+id).then(function (response){
                self.$router.replace('/lista');
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>