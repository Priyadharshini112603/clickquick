
<template>

<v-app class="body">
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
      <br />


      <br> 
 <div class="layout"> 
      <div class="row d-flex justify-content-center">
        <div class="col-3 text-left">
          <div class="d-flex justify-content-center">
            <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" width="150" alt="">
           
          </div>
          <CENTER> <h3 class="h6" >Profile</h3></CENTER>
      

             <div class="form-group">
                
              <label class="form"  for="exampleInputEmail1">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>


            <div class="form-group">
                
              <label class="form"  for="exampleInputEmail1">Phone Number</label>
              <input type="text" maxlength="10" pattern="\d{10}" class="form-control" title="Please enter exactly 10 digits" >
            </div>



            <div class="form-group">
                
              <label class="form"  for="exampleInputEmail1">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>



            <div class="form-group">
                
              <label class="form"  for="exampleInputEmail1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>


              <div class="form-group">
                 <center>
              
                        <router-link to="/MerchantLogin" ><button type="submit" class="btn btn-primary btn-block">Update</button></router-link> 

                 </center>
 


          
            </div>
           
         
          </div>
           </div>
            
          </div>
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
              
<div class="basket-product" v-for="product in cart" :key="product" >
<!-- <div class="basket-product" v-for="product in getProducts" :key="product" > -->
        <div class="item">
          <div class="product-image">
           <!-- <img  :src="product.image" alt="Placholder Image 2" class="product-frame" width="100px" height="100px"> -->
          </div>
          <div class="product-details">
             <h1><strong><span class="item-q">{{product.quantity}}</span> x {{product.productId}}</strong></h1>
            <p><strong>Color Size</strong></p>
            <p>Product Code </p>
          </div>
        </div>
        <div class="price">{{product.userid}}</div>
        <div class="quantity">
          <input type="number" v-model=product.quantity min="1" class="quantity-field">
        </div>
       
       
      
</div>
      
    </div>
    
  </main>
        
     
</v-app>

      
  
      
      



    
  
</template>




<script>
// import RightSideBar from "../components/RightSideBar.vue";


export default {
   name: 'AccountPage',
   components: {
    // SideBar,
    // RightSideBar,
    // HeaderPage
  },
  methods:{
       
  }
   
}
</script>

<style scoped>






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


.icon{
  margin-left:540px;
}

  .Order {
    text-align: center;
  }
  .login-form-container {
    padding: 60px;
    box-shadow: 0px 2px 5px 2px black;
    margin-top: 30px;
    height: 820px;
  }
  .form-control {
    border-radius: 0%;
    height: 30px;
  }
  .btn {
    margin-top: 80px;
    /* justify-content: space-around; */
  }
  
.layout{
  /* border: 1px solid black; */
margin-left: 340px; 
margin-top: 10px; 

  width: 650px;
  height: 550px;
	box-shadow: 0 2px rosybrown, 0 3px #777;
  border-radius: 50px;
  
}


.col-5 text-left login-form-container
{
    height: 50px;
}
.form-control{
  border-radius: 0%;
  height: 30px;
  width: 300px;
  /* margin-left: 10px; */
  margin-left: -80px;

   /* justify-content: space-around; */
  
}
.h6{
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  font-size:25px;

}
.form{
  margin-left: -80px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;

}
.btn{
 /* background: green; */
   margin-top:5px;
   /* justify-content: space-around; */
   width: 200px;
   margin-left: -25px;
   color:aliceblue;
  

}

 .a-divider.a-divider-break {
    text-align: center;
    position: relative;
    top: 2px;
    padding-top: 1px;
    margin-bottom: 14px;
    line-height: 0;
  margin-left: -20px;
  width: 200px;

}
div {
    display: block;
}
.a-ember body {
    font-family: 'Times New Roman', Times, serif;
}

.a-button-text {
    background-color: transparent;
    border: 0;
    display: block;
    font-family: Arial,sans-serif;
    font-size: 13px;
    line-height: 29px;
    margin: 0;
    outline: 0;
    padding: 0 10px 0 11px;
    text-align: center;
    white-space: nowrap;
   margin-left: -20px;
  width: 200px;
  padding-bottom: 10px;

}
.search {
  padding: 15px;
  width: 620px;
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
.quantity,
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
.quantity,
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


.product-price {
  
  color: rgb(12, 12, 12);

  text-decoration: none;
  font-size: 25px;
 
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
}

.discount{
  text-decoration: line-through;
  color: grey;
  font-size: 20px;
}
.sub{
  color: #e02c2c;
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

.product-price {
  
  color: rgb(12, 12, 12);

  text-decoration: none;
  font-size: 25px;
 
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
}

.discount{
  text-decoration: line-through;
  color: grey;
  font-size: 20px;
}
.sub{
  color: #e02c2c;
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



