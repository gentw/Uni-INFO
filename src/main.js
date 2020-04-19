import Vue from 'vue';
import Resource from 'vue-resource'
import Router from 'vue-router'



import App from './components/App.vue';

import HomeComponent from './components/HomeComponent.vue';
import AboutComponent from './components/AboutComponent.vue';

Vue.use(Router);
Vue.use(Resource);

var routes = [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },

    {
      path: '/about',
      name: 'about',
      component: AboutComponent
    },


];


// Set up a new router
var router = new Router({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes: routes
});


new Vue({
  router: router,
  render: h => h(App)
}).$mount('#website');