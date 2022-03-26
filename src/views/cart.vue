<template> 
<v-app class="body">
    <!-- <HeaderPage/> -->
  
    <!-- <RightSideBar /> -->
      <v-toolbar class="tool">
        <div class="nightlihe"><h2>CLICK QUICK</h2></div>

        <v-spacer></v-spacer>

        <h1 class="search">
          <v-text-field
            label="Find It ... Love It ... Buy It ..."
            class="pt-8 d-none d-sm-flex"
         
            rounded
            outlined
          ></v-text-field>
        </h1>
        <router-link to="/" >
 <v-btn class="change ">
      <v-icon class="con">mdi-magnify</v-icon> </v-btn ></router-link>
   
        <router-link to="/cart" >
 <v-btn class="change ">
      <v-icon class="con">mdi-cart-outline</v-icon> </v-btn ></router-link>
      <!-- <router-link to="/Account" ><v-icon class="con">mdi-cart-outline</v-icon> </v-btn ></router-link> -->
      <router-link to="/" >
 <v-btn  class="change ">
      <v-icon class="con">mdi-home-outline</v-icon> </v-btn ><br /></router-link>
      <router-link to="/Account" >
<v-btn  class="change ">
      <v-icon class="con">mdi-account-circle</v-icon> </v-btn ></router-link>
      
<router-link to="/UserLogin" >
      <v-btn class="change">
      <v-icon class="con">mdi-login</v-icon> </v-btn ><br /></router-link>


       <router-link to="/" >
      <v-btn  class="change">
      <v-icon class="con">mdi-logout</v-icon> </v-btn ></router-link>

       <router-link to="/AboutUs" >
      <v-btn class="change">
      <v-icon class="con">mdi-account-star</v-icon> </v-btn ></router-link>
    
      </v-toolbar>
     
          
    <main>
    <div class="basket">
       
      <div class="basket-labels">

        <ul>
          <li class="item item-heading">ITEM</li>
          <li class="price">PRICE</li>
          <li class="quantity">QUANTITY</li>
          <li class="subtotal">SUB TOTAL</li>
          
        </ul>
        
      </div>
          <div class="remove1">
          <button @click="removeall()">Remove All</button>
        </div>     
<div class="basket-product" v-for="product in cart" :key="product" >
<!-- <div class="basket-product" v-for="product in getProducts" :key="product" > -->
        <div class="item"> 
          <div class="product-image">
           <!-- <img  :src="product.image" alt="Placholder Image 2" class="product-frame" width="100px" height="100px"> -->
              <img class="laptop-photo" :src="product.image" alt="" />

          </div>
          <div class="product-details">
             <h1><strong><span class="item-q">{{product.quantity}}</span> x {{product.productName}}</strong></h1>
            <p><strong>Sold By:{{product.merchantName}}</strong></p>
            <!-- <p>Product Code </p> -->
          </div>
        </div>
        <div class="price">{{product.price*2}}</div>
        <div class="quantity">
          <input type="number"   v-model=product.quantity min="1" class="quantity-field">

          <button @click="handleItem(product.quantity, product.id)">update</button>
          
          </div>
          <!-- <button onclick="handleItem()">CONFIRM</button> -->
 
        
        <div class="remove">
        <div class="subtotalprice" > ₹ {{product.price*2*product.quantity}}</div>
          <button @click="remove(product.cartId)">Remove</button>
        </div>
       
      
</div>
      
    </div>
    <aside>
      <div class="summary">
        <!-- <div class="summary-total-items"><span class="total-items"></span>Your Basket</div> -->
           <div class="summary-total-items"><span class="total-items"></span>Proceed to Buy (1 Items)</div>
        <div class="summary-subtotal">
          <div class="subtotal-title">Subtotal</div>
          <div class="subtotal-value final-value" id="basket-subtotal">{{this.total*2}}</div>
          
        </div>
         
       

        <!-- <div class="summary-delivery">
          <select name="delivery-collection" class="summary-delivery-selection">
              <option value="0" selected="selected">Select Collection or Delivery</option>
             <option value="collection">Collection</option>
             <option value="first-class">Royal Mail 1st Class</option>
             <option value="second-class">Royal Mail 2nd Class</option>
             <option value="signed-for">Royal Mail Special Delivery</option>
          </select>
        </div> -->
     
      
        <div class="summary-subtotal">
          <div class="subtotal-title">Discount</div>
          <div class="subtotal-value final-value"  id="basket-subtotal1">- {{this.total}}</div>
          
        </div>
       

        <!-- <div class="summary-delivery">
          <select name="delivery-collection" class="summary-delivery-selection">
              <option value="0" selected="selected">Select Collection or Delivery</option>
             <option value="collection">Collection</option>
             <option value="first-class">Royal Mail 1st Class</option>
             <option value="second-class">Royal Mail 2nd Class</option>
             <option value="signed-for">Royal Mail Special Delivery</option>
          </select>
        </div> -->
      <div class="summary-subtotal">
          <div class="total-title">Total</div>
          <div class="subtotal-value final-value" id="basket-subtotal">{{this.total}}</div>
          
        </div>
       
        <div class="summary-checkout">
          <button class="checkout-cta">Go to Secure Checkout</button>
        </div>
      </div>
    </aside>
  </main>
</v-app>
</template>

<script>
// import RightSideBar from "../components/RightSideBar.vue";
import{mapGetters} from 'vuex';
import{mapActions} from 'vuex';

import Vue from 'vue'

export default {
   name: 'CartPage',
   components: {
    // SideBar,
    // RightSideBar,
    // HeaderPage
  },
  data: () => ({
      cart:[],product:[],cartid:[],total:0
  }),
  computed:{
    ...mapGetters(['getCart'])
  },
  created()
  {
this.getItem()
  },
  methods: {...mapActions(['getcartproduct']),

  getItem()
    {
      Vue.axios.get('http://10.20.2.203:8084/cart?userId=1').then(resp=>{
        // commit('setProducts',resp.data)
        this.cart=resp.data.data;
        
        console.log(resp.data.data[0].cartId)
        console.log(this.cartid)
        this.cartid=resp.data.data.cartId;

        console.log(resp.data.data);
        for(let i=0;i<this.cart.length ; i++){
            this.total += this.cart[i].quantity *this.cart[i].price;
        }
        console.log(this.total)

      })
    },
    handleItem(quantitys,id)
    {
      // Vue.axios.update('http://10.20.2.203:8084/updatecart?id=1').then(resp=>{
      //   this.cart=resp.data.data;


let currentObj = this;

console.log(this)

this.axios.put(`http://10.20.2.203:8084/updatecart?id=${id}`, {
quantity:quantitys,


// repassword:this.repassword,







// userPhone: "3434343432"



})

.then(function (response) {

currentObj.output = response.data;

})

.catch(function (error) {

currentObj.output = error;
console.log("error")


});
this.total=0;
for(let i=0;i<this.cart.length ; i++){
            this.total += this.cart[i].quantity *this.cart[i].price;
        }
        console.log(this.total)


},
    remove(cardid)
    {
  

      Vue.axios.delete(`http://10.20.2.203:8084/delete?id=${cardid}`).then(resp=>{
        this.cart=resp.data.data;
        if(resp.data.result==true){
          // console.log("sucess")
          this.$router.go()
        }else{
          alert("error")
        }

      })

    },
    removeall()
    {
      Vue.axios.delete(`http://10.20.2.203:8084/deleteAll?userId=1`).then(resp=>{
        this.cart=resp.data.data;
        if(resp.data.result==true){
          // console.log("sucess")
          this.$router.go()
        }else{
          alert("error")
        }

      })

    

    },


   
}
}
</script>

<style scoped>
.subtotalprice{
  
  
  font-size: 16px;

}
#basket-subtotal1{
  color: red;
}

.cart {
  display: flex;
  font-family:'Times New Roman', Times, serif;
  flex-direction: row;
  border:#40aa87;
  flex-wrap: wrap;
  justify-content: centre;
  padding: 25px 32px;
 background-image: url("https://images.unsplash.com/photo-1614208194190-5bf690ad8a98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80");

}
.givecolor{
  color: red;
}

.update{
 

  margin: 5px;
  color:white
}

.buttoncart{
  border: 1px solid black;
  background: green;
  margin-top: 5px;
  margin-bottom: 5px;
  /* cursor:alias; */
  
}

.head1{
	margin: 1em 0 0.5em 0;
	color: #343434;
	font-weight:bolder;
	/* font-family: 'Ultra', sans-serif;    */
	font-size: 40px;
	line-height: 42px;
  font-style:italic;
  font-family:'Times New Roman', Times, serif;
	text-transform: uppercase;
	text-shadow: 0 2px rosybrown, 0 3px #777;

  padding-bottom: 15px;
}
.head2{
	margin-left: 30px;
	color: #e02c2c;
  font-style:italic;

	font-weight:bolder;
	/* font-family: 'Ultra', sans-serif;    */
	font-size: 35px;
	/* line-height: 42px; */
  /* text-decoration: underline; */
  font-family:cursive;
	/* text-transform: uppercase; */
	/* text-shadow: 0 2px gold, 0 3px #777; */
  /* padding-bottom: 15px; */
}


.black--text{
  /* font-style: italic; */
  font-weight: 900;
  /* background:gold; */
  /* color: white; */
  /* background:gold; */
/* background:purple; 
*/
margin-left: 30px ;
font-size: 20px;
}
.black--text:hover{
  font-style: italic;
  font-weight: 900;
  background:rgb(250, 237, 237);
  /* color: white; */
  font-family: 'Times New Roman', Times, serif;
/* background:purple; */
}
.v-tabs {
  width: 60% !important;
}
.v-btn.withoutupercase {
  
  text-transform: none !important;
}
/*div{
  display:inline-block;
  float:left;
  color:#fff;
  font-size:10px;
}*/
.v-text-field{
  color: black;
}
.pt-5 d-none d-sm-flex{
  color: black;
}
.three {
  width: 50px;
  height: 50px;
}

.four {
  width: 50px;
  height: 25px;
  background: rgb(253, 250, 250);
}
.five {
  width: 50px;
  height: 25px;
  background: #6cbb82;
}
.six {
  width: 50px;
  height: 25px;
  background: #f1f1ef;
   background: #b6ecee;
}

.search{
  padding: 15px;
  width: 620px;
}

.headcon{
 background-image: url("https://st2.depositphotos.com/3199515/6996/v/950/depositphotos_69967429-stock-illustration-yellow-green-light-background.jpg");

  padding: 25px;
  
}



@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700,600);

html,
html a {
  -webkit-font-smoothing: antialiased;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
}

body {
  background-color: #fff;
  color: #666;
  font-family: 'Open Sans', sans-serif;
  font-size: 62.5%;
  margin: 0 auto;
}

a {
  border: 0 none;
  outline: 0;
  text-decoration: none;
}

strong {
  font-weight: bold;
}

p {
  margin: 0.75rem 0 0;
}

h1 {
  font-size: 0.75rem;
  font-weight: normal;
  margin: 0;
  padding: 0;
}

input,
button {
  border: 0 none;
  outline: 0 none;
}

button {
  background-color: #666;
  color: #fff;
}

button:hover,
button:focus {
  background-color: #555;
}

img,
.basket-module,
.basket-labels,
.basket-product {
  width: 100%;
}

input,
button,
.basket,
.basket-module,
.basket-labels,
.item,
.price,
.quantity,.quantity1,
.subtotal,
.basket-product,
.product-image,
.product-details {
  float: left;
}

.price:before,
.subtotal:before,
.subtotal-value:before,
.total-value:before,
.promo-value:before {
  content: '₹ ';
}

.hide {
  display: none;
}
.quantity1{
  background: #6cbb82;
  width: 20px;
}

main {
  clear: both;
  font-size: 0.75rem;
  margin: 0 auto;
  overflow: hidden;
  padding: 1rem 0;
  width: 960px;
}

.basket,
aside {
  padding: 0 1rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.basket {
  width: 70%;
}

.basket-module {
  color: #111;
}

label {
  display: block;
  margin-bottom: 0.3125rem;
  
}



.basket-labels {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-top: 1.625rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  color: #111;
  display: inline-block;
  padding: 0.625rem 0;
}

li.price:before,
li.subtotal:before {
  content: '';
}

.item {
  width: 55%;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  font-size: 15px;

}
.item-q{
  width: 55%;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  font-size: 12px;

}

.price,
.quantity,.quantity1,
.subtotal {
  width: 15%;
   font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  font-size: 15px;
}

.subtotal {
  text-align: right;
}

.remove {
  bottom: 1.125rem;
  float: right;
  position: absolute;
  right: 0;
  text-align: right;
  width: 45%;
  font-weight: bold;
}

.remove button {
  background-color: transparent;
  color: rgb(238, 64, 64);
  
  float: none;
  text-decoration: underline;
  text-transform: uppercase;
  font-size: 15px;
  padding: 20px;


}



.remove1 {
  /* bottom: 0rem; */
  /* float: right; */
  position: absolute;
  /* right: 0; */
  /* text-align: right; */
  width: 25%;
  font-size: 15px;
  /* padding: 30px; */
  margin-top: 5px;
  margin-left: 550px;
  font-weight: bold;
}

.remove1 button {
  background-color: transparent;
  color: rgb(238, 64, 64);
  /* float: none; */
  text-decoration: underline;
  text-transform: uppercase;
}

.item-heading {
  padding-left: 4.375rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.basket-product {
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
  position: relative;
}

.product-image {
  width: 35%;
}

.product-details {
  width: 65%;
}

.product-frame {
  border: 1px solid #aaa;
}

.product-details {
  padding: 0 1.5rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.quantity-field {
  background-color: #ccc;
  border: 1px solid rgb(2, 2, 2);
  border-radius: 4px;
  font-size: 15px;
  padding: 2px;
  width: 3.75rem;
}

aside {
  float: right;
  position: relative;
  width: 30%;
}

.summary {
  background-color: white;
  border: 1px solid black;
  padding: 1rem;
  position: fixed;
  width: 250px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.summary-total-items {
  color: black;
  font-size: 0.875rem;
  text-align: center;
}

.summary-subtotal,
.summary-total {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  clear: both;
  margin: 1rem 0;
  overflow: hidden;
  padding: 0.5rem 0;
  color: black;
  
}

.subtotal-title,
.subtotal-value,
.total-title,
.total-value,
.total-title1,
.promo-value {
  color: #111;
  float: left;
  width: 50%;
}


.summary-delivery {
  padding-bottom: 3rem;
}

.subtotal-value,
.total-value {
  text-align: right;
}

.total-title {
  font-weight: bold;
  text-transform: uppercase;
}
.total-title1 {
  font-weight: bold;
  text-transform: uppercase;
  margin-left:50px;

}

.summary-checkout {
  display: block;
}

.checkout-cta {
  display: block;
  float: none;
  font-size: 15px;
  text-align: center;
  text-transform: uppercase;
  padding: 0.625rem 0;
  width: 100%;
    background: rgb(170, 204, 120);
  color: #111;
  font-weight: 500;
}



@media screen and (max-width: 640px) {
  aside,
  .basket,
  .summary,
  .item,
  .remove {
    width: 100%;
  }
  .basket-labels {
    display: none;
  }
  .basket-module {
    margin-bottom: 1rem;
  }
  .item {
    margin-bottom: 1rem;
  }
  .product-image {
    width: 40%;
  }
  .product-details {
    width: 60%;
  }
  .price,
  .subtotal {
    width: 33%;
  }
  .quantity {
    text-align: center;
    width: 34%;
    
  }
  .quantity-field {
    float: none;
  }
  .remove {
    bottom: 0;
    text-align: left;
    margin-top: 0.75rem;
    position: relative;
  }
  .remove button {
    padding: 0;
  }
  .summary {
    margin-top: 1.25rem;
    position: relative;
  }
}

@media screen and (min-width: 641px) and (max-width: 960px) {
  aside {
    padding: 0 1rem 0 0;
  }
  .summary {
    width: 28%;
  }
}

@media screen and (max-width: 960px) {
  main {
    width: 100%;
  }
  .product-details {
    padding: 0 1rem;
  }
}
.tool{
  margin-top:10px;
  margin-left:10px;
  margin-right:10px;
  height:1px;
  flex:none;

}
.nightlihe{
	font-size:20px;
	font-weight: bold;
	text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #f0bed7, 0 0 20px #d3acbf, 0 0 30px #ecdae6, 0 0 40px #cfa3b9, 0 0 50px #ecc8da, 0 0 55px #ebd4df;
    /* letter-spacing: 5px; */
    opacity:1;
    color:rgb(43, 39, 41);
    /* font-family:cursive */
    font-family: 'Times New Roman', Times, serif;
}
</style>