import Vue from 'vue'
import VueRouter from 'vue-router'

import axios from 'axios'
import VueAxios from 'vue-axios'



Vue.use(VueRouter);
Vue.use(VueAxios, axios);

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"


import { routes } from './routes/routes.js';
import  store  from './store';
import App from './App.vue'


Vue.config.productionTip = false;


const router = new VueRouter({
    mode: 'history',
    routes: routes
});

console.log(store.state.loginStatus)

router.beforeEach((to, from, next) => {
  
  if(to.meta.requiresAuth){
      if (store.state.loginStatus) {
          next();
      } else {
        next({ name: 'Login' })
      }
  }else  {
      next();
  }
})

axios.interceptors.request.use(function (config) {

  if ( store.state.loginStatus ){
    let headers ={};
    headers.Authorization = "Bearer "+store.state.token;
    config['headers'] = headers;
  }
  console.log(config)
  return config;
}, function (error) {
  alert('fallo la solicitud' + error)
  return Promise.reject(error);
});


axios.interceptors.response.use(function (response) {
  if( response.status == 401|| response.data.code == 401 ){
    localStorage.removeItem('token')
    router.replace('/Login')
  }
  return response;
}, function (error) {

  if(error.statusCode==500){
    console.log(error);
  }

return Promise.reject(error);
});

console.log(axios.defaults.headers.common)


const app = new Vue({
    el: '#app',
    store:store,
    router: router,
    render: h => h(App),
});

export default app

