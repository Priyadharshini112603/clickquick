import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeUser from '../views/HomePageUser.vue'
import HomeMerchant from '../views/HomePageMerchant.vue'
import CartPage from '../views/CartPage.vue'
import AccountPage from '../views/AccountPage.vue'
import SignoutPage from '../views/SignoutPage.vue'
import AboutUs from '../views/AboutUs.vue'
import productDetails from '../views/PostPage.vue'
import men from '../views/MenPage.vue'
import women from '../views/WomenPage.vue'
import electronics from '../views/ElectronicsPage.vue'
import jewellery from '../views/JewelleryPage.vue'
import categoryproduct from '../views/CategoryProduct.vue'
import MerchantLogin from '../views/Enter/MerchantLogin.vue'
import MerchantSignUp from '../views/Enter/MerchantSignUp.vue'
import UserSignUp from '../views/Enter/UserSignUp.vue'
import UserLogin from '../views/Enter/UserLogin.vue'
import addproduct from '../views/product.vue'

// import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'
import Vueaxios from 'vue-axios'
// import Category from './components/CategoryPage.vue'
// import AccountPage from './components/AccountPage.vue'
// import CartPage from './components/CartPage.vue'
// import PaymentPage from './components/PaymentPage.vue'
// import ProductPage from './components/ProductPage.vue'
// import productDetails from './PagesSection/PostPage.vue'
Vue.use(VueRouter)
Vue.use(Vuex);
Vue.use(Vueaxios,axios);
const store={
  state:{
    products:[],
    items:[]
  },

  getters:{
    
  },
  mutations:{
    
    
    setItems(state,val)
    {
      state.items=val;
    }
    
  },
  actions:{ 
    
    
   
    
  },

}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Cart',
    name: 'CartPage',
   
    component: CartPage
  },
  {
    path: '/Account',
    name: 'AccountPage',
   
    component: AccountPage
  },
  {
    path: '/Signout',
    name: 'SignoutPage',
   
    component: SignoutPage
  },
  
   {path:'/productDetails/:id',
  name:'productDetails',
  component:productDetails},
  {path:'/men',
  name:'men',
  component:men},
  {path:'/women',
  name:'women',
  component:women},
  {path:'/electronics',
  name:'electronics',
  component:electronics},
  {path:'/jewellery',
  name:'jewellery',
  component:jewellery},
  {path:'/CategoryPage/:cat/:id',
  name:'CategoryProduct',
  component:categoryproduct},
  {path:'/UserLogin',
  name:'UserLogin',
  component:UserLogin},
  {path:'/MerchantLogin',
  name:'MerchantLogin',
  component:MerchantLogin},
  {path:'/AboutUs',
  name:'AboutUs',
  component:AboutUs}, 
  {path:'/MerchantSignUp',
  name:'MerchantSignUp',
  component:MerchantSignUp},
  {path:'/UserSignUp',
  name:'UserSignUp',
  component:UserSignUp},
  {
    path: '/HomeUser',
    name: 'HomePageUser',
    component: HomeUser
  },
  {
    path: '/HomeMerchant',
    name: 'HomePageMerchant',
    component: HomeMerchant
  },
  {
    path: '/addproduct',
    name: 'addproduct',
    component: addproduct
  },
]
new Vue({
store:new Vuex.Store(store)})
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
