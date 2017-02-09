import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/home', component: require('src/views/home') },
  { path: '*', redirect: '/home' }
];

export default new VueRouter({ routes });
