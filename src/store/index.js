import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Vueaxios from 'vue-axios'
Vue.use(Vuex)
Vue.use(Vueaxios,axios);
export default new Vuex.Store({
  state: {
    products:[],cat:[],cart:[]
  },
  getters:{
    getProducts(state)
    {
      return state.products;
    },
    getProducts1(state)
    {
      return state.cat;
    }
    ,
    getProducts2(state)
    {
      return state.cart;
    }
  },
  mutations: {
    setProducts(state,val)
    {
      state.products=val;
    },
    setProducts1(state,val)
    {
      state.cat=val;
    },
    setProducts2(state,val)
    {
      state.cart=val;
    }
  },
  actions: {
    getMobileItem({commit}){
      Vue.axios.get('https://fakestoreapi.com/products').then(resp=>{
        // console.log(resp.data)
        commit('setProducts',resp.data)
      })

    }
,

    // getMobileItem({commit}){
    //   let headers = {"Access-Control-Allow-Origin":"http://10.20.2.193:899","Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    //   "Access-Control-Allow-Headers": "X-PINGOTHER, Content-Type"9,
    //   "Access-Control-Max-Age": 86400
    //   }
    //   axios.get('http://10.20.2.193:8999/cart/getcartproduct', {headers:headers}).then(resp=>{
    //     console.log(resp.data)
    //     commit('setProducts',resp.data)
    //   })

    // }

 getallproduct({commit}){
      axios.get('http://10.20.2.193:8999/product/getallproduct').then(resp=>{
        // console.log(resp.data)
        commit('setProducts',resp.data)
      })

    },

    getproductsbyid({commit}){
      axios.get('http://10.20.2.193:8999/product/getallproduct').then(resp=>{
        // console.log(resp.data)
        commit('setProducts1',resp.data)
      })

    },

    getcart({commit}){
      axios.get('http://10.20.2.193:8999/cart/getcartproduct').then(resp=>{
        // console.log(resp.data)
        commit('setProducts2',resp.data)
      })

    },


    // getcart({commit}){
    //   axios.get('https://fakestoreapi.com/products').then(resp=>{
    //     // console.log(resp.data)
    //     commit('setProducts2',resp.data)
    //   })

    // },
    getproductsbycategory({commit}){
      axios.get('http://10.20.2.193:8999/cart/getproductbycategory').then(resp=>{
        // console.log(resp.data)
        commit('setProducts1',resp.data)
      })

    },
    addtocart(){
      axios.post('http://10.20.2.193:8999/cart/addtocart', {
       
        "id": "123",
        "productId": 213,
        "merchantId": 324,
        "userId": 324,
        "quantity": 32455,
        "timeStamp": "12/324",
        "dateStamp": "12/34/34"
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    }




  },
  modules: {
  }
})
