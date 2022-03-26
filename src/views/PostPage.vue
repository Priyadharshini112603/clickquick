<template>
  <!-- <div class="cart">
  <div class="hello">
         <img class="laptop-photo" :src="product.image" alt="">
        <p class="category details">Category: {{product.category}}</p>
         <p class="id details" >ID: {{product.id}}</p>
         <p class="title details">{{product.title}}</p>
         <p class="description details">Description: {{product.description}}</p>
         <p class="price details">Price: Rs{{product.price}}</p>
         
         <button class="cart-btn">Add to cart</button>
    </div>
</div> -->

  <v-app class="body">
    <!-- <SideBar :drawer="drawer" /> -->
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

    <div id="container">
      <div class="product-details">
        <h2><b>{{product.productName}}</b></h2>
        <br>
        <br>

        <div class="information">
     <!-- <b>Description:</b> -->
      {{product.productDescription}}
        </div>
        <br>
         <div class="information">
      Sold By: {{product.defaultMerchantName}}
        </div>
        <div class="control">
          <button class="btn" @click="handlecart()">
            <span class="price">₹ {{product.defaultMerchantPrice}}</span>
            <span class="shopping-cart"
              ><i class="fa fa-shopping-cart" aria-hidden="true"></i
            ></span>
            <span class="buy">Add Cart</span>
          </button>
        </div>
      </div>

      <div class="product-image">
                             <div>  <img   :src="product.productImage" alt="" width="100px" height="130px"></div>


       
      </div>
       <!-- <div class="product-image"> -->
    </div>
    <!-- </div> -->
  </v-app>
</template>

<script>
// import RightSideBar from "../components/RightSideBar.vue";
// import SideBar from "../components/SideBar";
export default {
  name: "productDetails",
  components: {
    // SideBar,
    // RightSideBar,
  },
  created() {
    const productId = this.$route.params.id;
    this.axios
      .get(`http://10.20.2.203:8081/product/getproductbyid?id=${productId}`)
      .then((resp) => {
        this.product = resp.data.data;
      });
  },
  data() {
    return {
      product:[],
//       userid: '',
// productid: '',
// quantity: '',
// merchantid:''
    };
  },
  methods:{
    handlecart()
    {


let currentObj = this;

console.log(this)
console.log(this.product.productId)
console.log(this.product.defaultMerchantId)

// console.log(this.product.productId)


this.axios.post('http://10.20.2.203:8084/addtocart', {
userid:1,
productId:this.product.productId,

quantity:1,
merchantId:this.product.defaultMerchantId,

// password:this.password,
// repassword:this.repassword,







// userPhone: "3434343432"



})

.then(function (response) {

currentObj.output = response.data;
alert("success")


})

.catch(function (error) {

currentObj.output = error;
alert("error")


});

}

}
    };
</script>

<style scoped>

.v-toolbar {
  background: gold;
}
.head1 {
  margin: 1em 0 0.5em 0;
  color: #343434;
  font-weight: bolder;
  /* font-family: 'Ultra', sans-serif;    */
  font-size: 40px;
  line-height: 42px;
  font-style: italic;
  font-family: "Times New Roman", Times, serif;
  text-transform: uppercase;
  text-shadow: 0 2px rosybrown, 0 3px #777;

  padding-bottom: 15px;
}
.head2 {
  margin-left: 30px;
  color: #e02c2c;
  font-style: italic;

  font-weight: bolder;
  /* font-family: 'Ultra', sans-serif;    */
  font-size: 35px;
  /* line-height: 42px; */
  /* text-decoration: underline; */
  font-family: cursive;
  /* text-transform: uppercase; */
  /* text-shadow: 0 2px gold, 0 3px #777; */
  /* padding-bottom: 15px; */
}
.black--text:hover {
  font-style: italic;
  font-weight: 900;
  background: gold;
  /* background:purple; */
}
.black--text {
  /* font-style: italic; */
  font-weight: 900;
  /* background:gold; */
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
.v-text-field {
  color: black;
}
.pt-5 d-none d-sm-flex {
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

.search {
  padding: 15px;
  width: 620px;
}

.headcon {
  background-image: url("https://st2.depositphotos.com/3199515/6996/v/950/depositphotos_69967429-stock-illustration-yellow-green-light-background.jpg");

  padding: 25px;
}

.cart {
  display: flex;
  font-family: "Times New Roman", Times, serif;
  flex-direction: row;
  border: #40aa87;
  flex-wrap: wrap;
  justify-content: centre;
  padding: 25px 32px;
  background-image: url("https://images.unsplash.com/photo-1614208194190-5bf690ad8a98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80");
}

.laptops {
  border-radius: 60px;
  width: 120px;
  height: 120px;
}

.images {
  border: 1px solid;
  border-radius: 10px;
  /* line-height: 5px; */
  margin: 10px;
}
button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  /* display: inline-block; */
  font-size: 16px;
  /* margin: 4px 2px; */
  cursor: pointer;
}

.p {
  display: flex;
  border: none;
  text-align: left;
}

.button {
  background-color: #465458;
}
.template {
  background-color: #40aa87;
}
.cart-btn {
  background-color: rgb(205, 228, 74);
  border-radius: 10px;
  margin-left: 500px;
  border: 10px;
  height: 40px;
  width: 320px;

  /* text-align: center; */
}

.cart-btn:hover {
  background-color: #40aa87;
}

.laptop-photo {
  height: 320px;
  width: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5px;
  padding-bottom: 25px;
  border-radius: 20px;
}

.hello {
  background-color: rgb(206, 227, 236);
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  /* border-radius: 20px ; */
  /* overflow: ; */
  transition: transform 0.2s;
  width: 1280px;
  /* border: 1px solid black; */
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.hello:hover {
  transform: scale(1.1);
}

.main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
  margin: auto;
  margin-top: 50px;
}

.details {
  margin: 10px 20px;
  line-height: 15px;
}

.category {
  font-size: 40px;
  color: rgb(14, 13, 13);
}

.title {
  height: 14px;

  overflow: hidden;
  text-overflow: ellipsis;
}

.product-card {
  box-shadow: rgba(223, 122, 122, 0.24) 0px 3px 8px;
  width: 600px;
  background: white;
  padding: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  border-radius: 20px;
}
.product-card h1 {
  font-size: 20px;
  margin-bottom: 4px;
}
.product-card h4 {
  font-size: 16px;
  color: rgb(7, 7, 7);
}

.product-info {
  display: flex;
  align-items: center;
}
/* .product-price{
  background: #f1ca46;
  color: #0b0c0c;
  font-size: 16px;
  padding: 15px;
  border: 2px solid;
  border-radius: 20px;

  font-weight: 700;
} */
.product-button {
  margin-left: auto;
  /* color: #7ed6df; */
  text-decoration: none;
  border: 2px solid;
  padding: 8px 24px;
  border-radius: 20px;
  transition: 0.4s linear;
  background: #f1ca46;
  color: #0b0c0c;
  font-size: 20px;
  padding: 15px;
  font-weight: 700;
}

.product-button:hover {
  transform: scale(1.06);
}

@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700;900&display=swap");

/* :root{
    --white-light: rgba(255, 255, 255, 0.5);
    --alice-blue: #f8f9fa;
    --carribean-green: #40c9a2;
    --gray: #ededed;
} */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
}

/* Utility stylings */
img {
  width: 100%;
  display: block;
}
.container {
  width: 88vw;
  margin: 0 auto;
}
.lg-title,
.md-title,
.sm-title {
  font-family: "Roboto", sans-serif;
  padding: 0.6rem 0;
  text-transform: capitalize;
}
.lg-title {
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
  padding: 1.3rem 0;
  opacity: 0.9;
}
.md-title {
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
}
.sm-title {
  font-weight: 300;
  font-size: 1rem;
  text-transform: uppercase;
}
.text-light {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  opacity: 0.5;
  margin: 0.4rem 0;
}

/* product section */
.products {
  /* background: blue; */
  padding: 3.2rem 0;
}
.products .text-light {
  text-align: center;
  width: 50%;
  margin: 0.9rem auto;
}
.product {
  margin: 1rem;
  position: relative;
}
.product-content {
  /* background: rgb(247, 247, 247); */
  /* padding: 3rem 0.5rem 2rem 0.5rem; */
  cursor: pointer;
  /* border: 2px solid #343434; */
  padding: 5px;
}
.product-img {
  /* background: rgb(235, 226, 203); */
  box-shadow: 0 0 20px 10px white;
  width: 250px;
  height: 250px;
  /* margin: 0 auto; */
  /* border-radius: 50%; */
  transition: background 0.5s ease;
}
.product-btns {
  display: flex;
  justify-content: center;
  margin-top: 1.4rem;
  opacity: 0;
  transition: opacity 0.6s ease;
  /* background: rgb(235, 226, 203); */
}
.btn-cart,
.btn-buy {
  background: transparent;
  border: 1px solid black;
  padding: 0.8rem 0;
  width: 125px;
  font-family: "Times New Roman", Times, serif;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: all 0.6s ease;
  font-size: 13px;
  font-weight: bold;
}
.btn-cart {
  background: white;
  color: rgb(15, 15, 15);
}
.btn-cart:hover {
  background: rgb(168, 235, 154);
}
.btn-buy {
  background: white;
  color: rgb(15, 15, 15);
}
.btn-buy:hover {
  background: rgb(168, 235, 154);
  color: rgb(17, 16, 16);
}
.product-info {
  /* background: rgb(235, 226, 203); */

  /* background: rgb(236, 227, 173)); */
  padding: 5px;
  height: 115px;
  overflow: hidden;
}

.product-name {
  color: black;
  display: block;
  text-decoration: none;
  font-size: 18px;
  /* text-transform: uppercase; */
  font-weight: bold;
  align-items: center;
  /* overflow: hidden; */
}
.product-cat {
  color: black;
  display: block;
  text-decoration: none;
  font-size: 18px;
  /* text-transform: uppercase; */
  font-weight: 800;
}
.product-price {
  /* padding-top: 0.6rem; */
  /* padding-right: 0.6rem; */
  /* display: inline-block; */
  color: rgb(228, 61, 61);
  /* display: block; */
  text-decoration: none;
  font-size: 25px;
  /* text-transform: uppercase; */
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
}
/* .product-price:first-of-type{
    text-decoration: line-through;
    color: greenyellow;
} */
.product-img img {
  transition: transform 0.6s ease;
}
.product:hover .product-img img {
  transform: scale(1.1);
}
.product:hover .product-img {
  background: rgb(238, 237, 232);
}
.product:hover .product-btns {
  opacity: 2;
}

/* product collection */
.product-collection {
  padding: 3.2rem 0;
}
.product-collection-wrapper {
  padding: 3.2rem 0;
}
/* .product-col-left{
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url("images/fashion-img-1.jpg") center/cover no-repeat;
}
.product-col-r-top{
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url("images/fashion-img-2.png") center/cover no-repeat;
} */
.flex {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 50vh;
  padding: 2rem 1.5rem 3.2rem;
  margin: 5px;
}

.product-col-content {
  text-align: center;
  color: white;
}
.product-collection .text-light {
  opacity: 1;
  font-size: 0.8;
  font-weight: 400;
  line-height: 1.7;
}
.btn-dark {
  background: black;
  color: rgb(248, 246, 246);
  outline: 0;
  border-radius: 25px;
  padding: 0.7rem 1rem;
  border: 0;
  margin-top: 1rem;
  cursor: pointer;
  transition: all 0.6s ease;
  font-size: 1rem;
  font-family: inherit;
}
.btn-dark:hover {
  background: rgb(170, 204, 120);
}

/* 
.product-items{
  background: rgb(235,;
} */

/* Media Queries */
@media screen and (min-width: 992px) {
  .product-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .product-col-r-bottom {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 1200px) {
  .product-items {
    grid-template-columns: repeat(3, 1fr);
  }
  .product {
    margin-right: 1rem;
    margin-left: 1rem;
  }
  .products .text-light {
    width: 50%;
  }
}

@media screen and (min-width: 1336px) {
  .product-items {
    grid-template-columns: repeat(4, 1fr);
  }
  .product-collection-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .flex {
    height: 60vh;
  }
  .product-col-left {
    height: 121.5vh;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bree+Serif&family=EB+Garamond:ital,wght@0,500;1,800&display=swap");

body {
  background: #dfc2f2;
  background-image: linear-gradient(to right, #ffffb3, #ffe6e6);
  background-attachment: fixed;
  background-size: cover;
}

#container {
  box-shadow: 0 15px 30px 1px grey;
  background: rgba(255, 255, 255, 0.9);
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  margin: 5em auto;
  height: 550px;
  width: 1050px;
}

.product-details {
  position: relative;
  text-align: left;
  overflow: hidden;
  padding: 30px;
  height: 100%;
  float: left;
  width: 60%;
  font-family: 'Times New Roman', Times, serif;
}
.information{
  overflow:scroll;
  height: 100px;
  padding-bottom: 5px;
  font-family: 'Times New Roman', Times, serif;


}
#container .product-details h1 {
  /* font-family: "Bebas Neue", cursive; */
  display: inline-block;
  position: relative;
  font-size: 30px;
  color: #344055;
  margin: 0;
}

#container .product-details h1:before {
  position: absolute;
  content: "";
  right: 0%;
  top: 0%;
  transform: translate(25px, -15px);
  font-family: "Bree Serif", serif;
  display: inline-block;
  background: #ffe6e6;
  border-radius: 5px;
  font-size: 14px;
  padding: 5px;
  color: white;
  margin: 0;
  animation: chan-sh 6s ease infinite;
  font-weight: bold;
}

.hint-star {
  display: inline-block;
  margin-left: 0.5em;
  color: gold;
  width: 50%;
}

/* #container .product-details > p {
  font-family: "EB Garamond", serif;
  text-align: center;
  font-size: 18px;
  color: #7d7d7d;
} */
.control {
  position: absolute;
  bottom: 20%;
  /* left: 22.8%; */
}
.btn {
  transform: translateY(0px);
  transition: 0.3s linear;
  background: rgb(81, 168, 240);
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  border: none;
  color: #eee;
  padding: 0;
  margin: 0;
  width: 300px;

}

.btn:hover {
  transform: translateY(-6px);
  background:#5479eb;
}

.btn span {
  /* font-family: "Farsan", cursive; */
  transition: transform 0.3s;
  display: inline-block;
  padding: 10px 20px;
  font-size: 25px;
  margin: 0;
  font-family: 'Times New Roman', Times, serif;

}
.btn .price,
.shopping-cart {
  background: #333;
 
}

.btn .price {
  transform: translateX(-10%);
     padding-right: 10px;
    margin-left: -45px;
}

.btn .shopping-cart {
  transform: translateX(-100%);
  position: absolute;
  background: #333;
  z-index: 1;
  left: 0;
  top: 0;
}

.btn .buy {
  z-index: 3;
  font-weight: bolder;
}

.btn:hover .price {
  transform: translateX(-110%);
}

.btn:hover .shopping-cart {
  transform: translateX(0%);
}

.product-image {
  transition: all 0.3s ease-out;
  display: inline-block;
  position: relative;
  overflow: hidden;
  height:500px;
  /* float: right; */
  width:400px;
  display: inline-block;
  margin-top:-10px;
  /* background: rosybrown; */
}

#container img {
  width: 350px;
  height: 400px;
  margin-top:60px;
  margin-right:100px;
}

.images1:hover{
 background: rgb(81, 168, 240);
 border-radius: 100px;
}

.info {
  /* background: rgba(248, 236, 236, 0.9); */
  font-family:cursive;
  transition: all 0.3s ease-out;
  transform: translateX(-100%);
  position: absolute;
  /* line-height: 1.8; */
  /* text-align: left; */
  font-size: 15px;
  cursor: no-drop;
  color: white;
  height: 110px;
  width: 220px;
  /* margin-left: 15px; */
  border-radius: 20px;

 

}

.info1 {
  text-align: center;
  margin-top :10px;
  margin-bottom:10px;
  margin-right :10px;
  font-weight: bold;
  font-size: 20px;
  font-family:  cursive;
  color:white;
  /* border: 1px solid  white;  */
  /* border-radius: 20px; */
   /* background: rgb(247, 210, 49); */
   /* margin-left: 5px; */

    
 }
  .product-image:hover .info {
  transform: translateX(0);
}

.info ul div {
  transition: 0.3s ease;
}
/*
.info ul li:hover {
  transform: translateX(50px) scale(1.3);
} */

.product-image:hover img {
  transition: all 0.3s ease-out;
}
.product-image:hover img {
  transform: scale(1.2, 1.2);
}

.v-application .info {
    background-color: rgb(243, 158, 158);
    border-color: black;
}

.button{
  height: 20px;
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