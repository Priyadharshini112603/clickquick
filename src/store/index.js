import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Vueaxios from 'vue-axios'
Vue.use(Vuex)
Vue.use(Vueaxios,axios);
export default new Vuex.Store({
  state: {
    products:[],userName:'',
  },
  getters:{
    getProducts(state)
    {
      return state.products;
    },
    getUserName(state)
    {
      return state.userName;
    },
  
  },
  mutations: {
    setProducts(state,val)
    {
      state.products=val;
    },
    setUserName(state,val)
    {
      state.userName=val;
    },
    
  },
  actions: {
 getallproduct({commit}){
      axios.get('http://10.20.2.203:8081/product/getallproduct').then(resp=>{
        console.log(resp.data.data)
        commit('setProducts',resp.data.data)
      })

    },
    getusername({commit},val){
     
        commit('setUserName',val)


    },

  
  },
  modules: {
  }
})
