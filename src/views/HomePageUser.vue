<template>
  <v-app class="body">
    <!-- <HeaderPage/> -->
  
    <RightSideBar />
    <v-container >
        
     <v-toolbar >
      <!-- <img src="icon2.png" alt="" width="2px"> -->
    
       
       <h1 class="head1">CLICK QUICK</h1>
    
        <v-spacer></v-spacer>
        
        <h1 class="search"><v-text-field
          label="Find It ... Love It ... Buy It ..."
          class="pt-8 d-none d-sm-flex"
        
          
          prepend-inner-icon="mdi-magnify"
          
          
          
          rounded
          outlined
         
        ></v-text-field></h1>
        

      </v-toolbar>
      <br> 

     <!-- header2 -->
      <v-app-bar class="vapp" >
        <v-tabs >
          <!-- <v-tabs-slider color="gold"></v-tabs-slider> -->
  
          <v-tab class="black--text" @click="handleCategory(1)">MEN'S CLOTHINGS</v-tab>
          <v-tab class="black--text" @click="handleCategory(2)">WOMEN'S CLOTHINGS</v-tab>
          <v-tab class="black--text" @click="handleCategory(3)">ELECTRONICS</v-tab>
          <v-tab class="black--text" @click="handleCategory(4)">JEWELLERY</v-tab>
  
<!--           
          <v-tab class="withoutupercase">Transactions</v-tab>
          <v-tab class="withoutupercase">Engagement Rate</v-tab> -->
        </v-tabs>
        <v-spacer></v-spacer>
        
      </v-app-bar>
 
 </v-container>

<!-- banner -->

    <div class="banner">

      <div class="container">

        <div class="slider-container has-scrollbar">
          

<div class="slider-item">

            <img src="banner 16.png" alt="new fashion summer sale" class="banner-img">

            

          </div>
          <div class="slider-item">

            <img src="banner17.jpeg" alt="new fashion summer sale" class="banner-img">

            

          </div>
          <div class="slider-item">

            <img src="banner-1.jpg" alt="modern sunglasses" class="banner-img">

            <div class="banner-content">

              <p class="banner-subtitle">Trending items</p>

              <h2 class="banner-title">Women's latest fashion sale</h2>

             

              <a href="#" class="banner-btn">Shop now</a>

            </div>
          </div>

            <div class="slider-item">

            <img src="banner-7.png" alt="new fashion summer sale" class="banner-img">

            

          </div>


            <div class="slider-item">

            <img src="banner-12.jpeg" alt="new fashion summer sale" class="banner-img">
            <div class="banner-content">

              <p class="banner-subtitle">Sale Offer</p>

              <h2 class="banner-title">New fashion summer sale</h2>

             

              <a href="#" class="banner-btn">Shop now</a>

            </div>


            

          </div>
            <div class="slider-item">

            <img src="banner-8.jpeg" alt="new fashion summer sale" class="banner-img">

            

          </div>
          

          <div class="slider-item">

            <img src="banner-2.jpg" alt="modern sunglasses" class="banner-img">

            <div class="banner-content">

              <p class="banner-subtitle">Trending accessories</p>

              <h2 class="banner-title">Modern sunglasses</h2>

              

              <a href="#" class="banner-btn">Shop now</a>

            </div>

          </div>
          <div class="slider-item">

            <img src="banner-10.jpeg" alt="new fashion summer sale" class="banner-img">

            

          </div>


          <div class="slider-item">

            <img src="banner13.jpg" alt="new fashion summer sale" class="banner-img">

            

          </div>

          <div class="slider-item">

            <img src="banner-3.jpg" alt="new fashion summer sale" class="banner-img">

            <div class="banner-content">

              <p class="banner-subtitle">Sale Offer</p>

              <h2 class="banner-title">New fashion summer sale</h2>

             

              <a href="#" class="banner-btn">Shop now</a>

            </div>

          </div>
          <div class="slider-item">

            <img src="banner-10.jpg" alt="new fashion summer sale" class="banner-img">

            

          </div>


<div class="slider-item">

            <img src="banner-6.jpeg" alt="new fashion summer sale" class="banner-img">

            

          </div>


          <div class="slider-item">

            <img src="banner-11.jpeg" alt="new fashion summer sale" class="banner-img">

            

          </div>
          <div class="slider-item">

            <img src="banner14.jpeg" alt="new fashion summer sale" class="banner-img">

            

          </div>


        </div>

      </div>

    </div>





<!-- products -->


 <!-- <h2 class="head1">SHOP NOW</h2> -->
  
      <!-- <div class="cart"> -->
    <!-- <div class="images" v-for="prod in getProducts" :key="prod"> -->
        <!-- <div @click="handleProductClick(product.id)" v-for="product in getProducts" :key="product" class="hello">
         <img class="laptop-photo" :src="product.image" alt="">
         <p class="category details">Category: {{product.category}}</p>
         <p class="title details">{{product.title}}</p>
         <p class="price details">Price: Rs{{product.price}}</p>
        
         <button class="cart-btn">Add to cart</button>
    </div>
  </div> -->

<div class = "product-items">
                    <!-- single product -->
<div @click="handleProductClick(product.id)" v-for="product in getProducts" :key="product" >

                    <div class = "product">
                        <div class = "product-content">
                            <div class = "product-img">
                               <img class="laptop-photo" :src="product.image" alt="">
                            </div>
                            <div class = "product-btns">
                                <button type = "button" class = "btn-cart"> add to cart
                                    <span><i class = "fas fa-plus"></i></span>
                                </button>
                               
                            </div>
                        </div>

                        <div class = "product-info">
                            <!-- <div class = "product-info-top"> -->
                            <center>
                           
                                <div class="price">
                            <p class = "product-price"> &#x20B9;  {{product.price}}</p>
                            </div>
                            <!-- </div> -->
                            <div  class = "product-name">{{product.title}}</div>
                                 <!-- <div class = "product-cat">{{product.category}}</div> -->
                            <!-- <p class = "product-price">$ 150.00</p> -->
                            </center>
                        </div>

                        
                    </div>
</div>
</div>
<v-container>
<v-app-bar class="vapp" >
        <v-tabs >
       
<div class = "product-items">
                    <!-- single product -->
<div @click="handleProductClick(product.id)" v-for="product in getProducts" :key="product" >

                    <div class = "product">
                        <div class = "product-content">
                            <div class = "product-img">
                               <img class="laptop-photo" :src="product.image" alt="">
                            </div>
                            <div class = "product-btns">
                                <button type = "button" class = "btn-cart"> add to cart
                                    <span><i class = "fas fa-plus"></i></span>
                                </button>
                               
                            </div>
                        </div>

                        <div class = "product-info">
                            <!-- <div class = "product-info-top"> -->
                            <center>
                           
                                <div class="price">
                            <p class = "product-price"> &#x20B9;  {{product.price}}</p>
                            </div>
                            <!-- </div> -->
                            <div  class = "product-name">{{product.title}}</div>
                                 <!-- <div class = "product-cat">{{product.category}}</div> -->
                            <!-- <p class = "product-price">$ 150.00</p> -->
                            </center>
                        </div>

                        
                    </div>
</div>
</div>
        </v-tabs>
        <v-spacer></v-spacer>
        
      </v-app-bar>
 
 </v-container>







      
      
    
     
  </v-app>
</template>

<script>
import RightSideBar from "../components/RightSideBar.vue";
// import SideBar from "../components/SideBar";
// import HeaderPage from "../components/HeaderPage";

import{mapActions} from 'vuex';
import{mapGetters} from 'vuex';

export default {
  name: "HomePageUser",
  data: () => ({
    
  }),
  components: {
    // SideBar,
    RightSideBar,
    // HeaderPage
  },
  computed:{
    ...mapGetters(['getProducts'])
  },
  
  created()
  {
this.getItem()
  },
  methods: {...mapActions(['getMobileItem']),

  getItem()
    {
      this.getMobileItem()
    },
    handleProductClick(productId){
            this.$router.push(`productDetails/${productId}`)
            console.log(productId)
        },
        handleCategory(productCat){
          if(productCat==1)
          {
              productCat="men's clothing";
          }
          else if(productCat==2)
          {
              productCat="women's clothing";
          }
          else if(productCat==3)
          {
              productCat="electronics";
          }
          else if(productCat==4)
          {
              productCat="jewelery";
          }
            console.log(productCat)
          
          
            this.$router.push(`CategoryPage/${productCat}`)
            console.log(productCat)
        }
          
        
  },
};
</script>
<style scoped>
.body{
 /* background-image: url("https://st2.depositphotos.com/3199515/6996/v/950/depositphotos_69967429-stock-illustration-yellow-green-light-background.jpg"); */


}

.head1{
	margin: 1em 0 0.5em 0;
	/* color: #343434; */
	font-weight:bolder;
	font-family: "Great Vibes", georgia,cursive;   
	font-size: 40px;
	line-height: 42px;
  font-style:italic;
  /* font-family:"Shippori Mincho B1", serif,cursive; */
	text-transform: uppercase;
	text-shadow: 0 2px rosybrown, 0 3px #777;
  padding-bottom: 15px;
  color: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
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
  font-family:'Times New Roman', Times, serif;
	/* text-transform: uppercase; */
	/* text-shadow: 0 2px gold, 0 3px #777; */
  /* padding-bottom: 15px; */
}
.black--text:hover{
  font-style: italic;
  font-weight: 900;
  background:rgb(250, 237, 237);
  /* color: white; */
  font-family: 'Times New Roman', Times, serif;
/* background:purple; */
}
.black--text{
  /* font-style: italic; */
  font-weight: 900;
  /* background:gold; */
  /* color: white; */
  /* background:gold; */
/* background:purple; */
}
.v-tabs {
  width: 60% !important;
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
  width: 820px;
}

.headcon{
 background-image: url("https://st2.depositphotos.com/3199515/6996/v/950/depositphotos_69967429-stock-illustration-yellow-green-light-background.jpg");

  padding: 25px;
  
}

/* products */

.cart {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  flex-direction: row;
  border: none;
  flex-wrap: wrap;
  justify-content: centre;
  
  padding: 25px 30px;
  background-repeat: repeat;
 /* background-image: url("https://st2.depositphotos.com/3199515/6996/v/950/depositphotos_69967429-stock-illustration-yellow-green-light-background.jpg"); */

}

.laptops {
  border-radius: 10px;
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



.button {
  background-color: #465458;
}
.cart-btn{
    background-color: gold;
    border-radius: 10px;
    margin: 10px;
    border: 0px ;
    height: 40px;
    color: #343434;
    padding: 10px;
    font-weight: bold;
}

.cart-btn:hover{
    background-color: goldenrod;
}

.laptop-photo{
    height: 220px;
    width: 200px;
      display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5px;
}

.hello{
  background-color: white;
  display: flex;
  /* color: #343434; */
  flex-direction: column;
  margin: 20px auto;
  border-radius: 20px ;
  padding: 15px;
  overflow: hidden;
 transition: transform .2s;
 width: 300px;
 height: 400px;
 /* border: 1px solid black; */
 box-shadow: rgba(136, 126, 126, 0.35) 0px 5px 15px;
}

.hello:hover{
    transform: scale(1.1);
}

.main{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
  margin: auto;
  margin-top: 50px;
}

.details{
    margin: 10px 20px;
    line-height: 15px;
}

.category{
    font-size: px;
    color: rgb(5, 5, 5);
    font-weight: 700;
}

.title{
    height: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
}



/* banner */


.banner { margin: 30px 0; }

.slider-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 10px;
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
  overflow: auto hidden;
  -webkit-scroll-snap-type: inline mandatory;
      -ms-scroll-snap-type: inline mandatory;
          scroll-snap-type: inline mandatory;
  overscroll-behavior-inline: contain;
}

.slider-item {
  position: relative;
  min-width: 100%;
  max-height: 50px;
  aspect-ratio: 1 / 1;
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
  overflow: hidden;
  scroll-snap-align: start;
}

.slider-item .banner-img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: right;
     object-position: right;
}

.banner-content {
  background: hsla(0, 0%, 100%, 0.8);
  position: absolute;
  bottom: 25px;
  left: 25px;
  right: 25px;
  padding: 20px 25px;
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
}

.banner-subtitle {
  color: orange;
  font-size:10px;
  font-weight:500;
  text-transform: capitalize;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.banner-title {
  color:rgb(223, 169, 99);
  font-size: var(--fs-1);
  text-transform: uppercase;
  /* line-height: 1; */
  margin-top: 3px;
}

.banner-text { display: none; }

.banner-btn {
  /* background: var(--salmon-pink); */
  /* color: var(--white); */
  /* width: -webkit-max-content; */
  /* width: -moz-max-content; */
  /* width: max-content; */
  font-size: var(--fs-11);
  font-weight: var(--weight-600);
  text-transform: uppercase;
  padding: 4px 10px;
  -webkit-border-radius: var(--border-radius-sm);
          border-radius: var(--border-radius-sm);
  -webkit-transition: var(--transition-timing);
  -o-transition: var(--transition-timing);
  transition: var(--transition-timing);
}

.banner-btn:hover { background: var(--eerie-black); }


.banner { margin: 30px 0; }

.slider-container {
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: var(--border-radius-md);
  overflow: auto hidden;
  scroll-snap-type: inline mandatory;
  overscroll-behavior-inline: contain;
}

.slider-item {
  position: relative;
  min-width: 100%;
  max-height: 450px;
  aspect-ratio: 1 / 1;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  scroll-snap-align: start;
}

.slider-item .banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right;
}

.banner-content {
  background:rgb(233, 151, 45);
  position: absolute;
  bottom: 135px;
  left: 85px;
  right: 25px;
  width: 400px;
  padding: 20px 25px;
  border-radius: var(--border-radius-md);
}

.banner-subtitle {
  color:rgb(233, 15, 51);
  font-size:40px;
  font-weight:900;
  text-transform: capitalize;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.banner-title {
  color:black;
  font-size: var(--fs-1);
  text-transform: uppercase;
  line-height: 1;
  margin-bottom: 10px;
}

.banner-text { display: none; }

.banner-btn {
  background: rgb(243, 132, 132);
  color: white;
  width: max-content;
  font: size 11px;;
  font-weight:600;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius:30px;
  transition:cubic-bezier(0.165, 0.84, 0.44, 1);
}

.banner-btn:hover { background:black; }




/* notification */
 .notification-toast { bottom: 30px; }

.notification-toast {
  position: fixed;
  bottom: 80px;
  left: 200px;
  right: 20px;
  background: whitesmoke;
  width: 400px;
  height:120px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgb(8, 8, 8);
  transform: translateX(calc(-100% - 40px));
  transition: 0.5s ease-in-out;
  z-index: 5;
  animation: slideInOut 9000000s ease-in-out infinite;
}

@keyframes slideInOut {

  0%,
  45%,
  100% {
    transform: translateX(calc(-100% - 40px));
    opacity: 0;
    visibility: hidden;
  }

  50%,
  95% {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }

}

.notification-toast.closed { display: none; }

.toast-close-btn {
  /* position: absolute; */
  /* margin-top: 2px; */
  /* margin-left:1px; */
  background-color: rgb(252, 241, 242);
  /* font-size: x-small; */
  border: 1px solid black;
  border-radius: 15px;
color: #343434;

}

.toast-close-btn ion-icon { width: 1px; 
height: 1px;
 
}

.toast-banner {
  width: 100px;
  height: 90px;
  /* border: 1px solid black; */
  border-radius: 15px;
}

.toast-banner img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  object-position: center;
}

.toast-detail {
  width: calc(100% - 85px);
  padding-right: 10px;
}

.toast-message {
  font-size: 15px;
  color: rgb(201, 59, 59);
  margin-bottom: 8px;
  font-family: cursive;
  font-style: italic;
  font-weight: 300;
}

.toast-title {
  font-size: 17px;
  font-weight: 500;
  color: black;
   font-family: cursive;
  font-style: italic;
}

.toast-meta {
  font-size: 15px;
  color: rgb(13, 90, 95);
   font-family: cursive;
  font-style: italic;
}













@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700;900&display=swap');

/* :root{
    --white-light: rgba(255, 255, 255, 0.5);
    --alice-blue: #f8f9fa;
    --carribean-green: #40c9a2;
    --gray: #ededed;
} */
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
}

/* Utility stylings */
img{
    width: 100%;
    display: block;
}
.container{
    width: 88vw;
    margin: 0 auto;
}
.lg-title,
.md-title,
.sm-title{
    font-family: 'Roboto', sans-serif;
    padding: 0.6rem 0;
    text-transform: capitalize;
}
.lg-title{
    font-size: 2.5rem;
    font-weight: 500;
    text-align: center;
    padding: 1.3rem 0;
    opacity: 0.9;
}
.md-title{
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
}
.sm-title{
    font-weight: 300;
    font-size: 1rem;
    text-transform: uppercase;
}
.text-light{
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    opacity: 0.5;
    margin: 0.4rem 0;
}

/* product section */
.products{
    /* background: blue; */
    padding: 3.2rem 0;
}
.products .text-light{
    text-align: center;
    width: 50%;
    margin: 0.9rem auto;
}
.product{
    margin: 1rem;
    position: relative;
}
.product-content{
    /* background: rgb(247, 247, 247); */
    /* padding: 3rem 0.5rem 2rem 0.5rem; */
    cursor: pointer;
    /* border: 2px solid #343434; */
    padding: 5px;
}
.product-img{
    /* background: rgb(235, 226, 203); */
    box-shadow: 0 0 20px 10px white;
    width: 250px;
    height: 250px;
    /* margin: 0 auto; */
    /* border-radius: 50%; */
    transition: background 0.5s ease;
}
.product-btns{
    display: flex;
    justify-content: center;
    margin-top: 1.4rem;
    opacity: 0;
    transition: opacity 0.6s ease;
    /* background: rgb(235, 226, 203); */

}
.btn-cart, .btn-buy{
    background: transparent;
    border: 1px solid black;
    padding: 0.8rem 0;
    width: 125px;
    font-family: 'Times New Roman', Times, serif;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    transition: all 0.6s ease;
    font-size: 13px;
    font-weight:bold;
}
.btn-cart{
    background: white;
    color: rgb(15, 15, 15);
}
.btn-cart:hover{
    background: rgb(168, 235, 154);
}
.btn-buy{
    background: white;
    color: rgb(15, 15, 15);
    
}
.btn-buy:hover{
    background: rgb(168, 235, 154);
    color: rgb(17, 16, 16);
}
.product-info{
    /* background: rgb(235, 226, 203); */
  
    /* background: rgb(236, 227, 173)); */
    padding: 5px;
    height: 115px;
    overflow: hidden;
}



.product-name{
    color: black;
    display: block;
    text-decoration: none;
    font-size: 18px;
    /* text-transform: uppercase; */
    font-weight: bold;
    align-items: center;
    /* overflow: hidden; */
}
.product-cat{
    color: black;
    display: block;
    text-decoration: none;
    font-size: 18px;
    /* text-transform: uppercase; */
    font-weight:800;
}
.product-price{
    /* padding-top: 0.6rem; */
    /* padding-right: 0.6rem; */
    /* display: inline-block; */
    color: rgb(228, 61, 61);
    /* display: block; */
    text-decoration: none;
    font-size: 25px;
    /* text-transform: uppercase; */
    font-weight: bold;
    font-family:'Times New Roman', Times, serif;
}
/* .product-price:first-of-type{
    text-decoration: line-through;
    color: greenyellow;
} */
.product-img img{
    transition: transform 0.6s ease;
}
.product:hover .product-img img{
    transform: scale(1.1);
}
.product:hover .product-img{
    background: rgb(238, 237, 232);
}
.product:hover .product-btns{
    opacity: 2;
}


/* product collection */
.product-collection{
    padding: 3.2rem 0;
}
.product-collection-wrapper{
    padding: 3.2rem 0;
}
/* .product-col-left{
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url("images/fashion-img-1.jpg") center/cover no-repeat;
}
.product-col-r-top{
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url("images/fashion-img-2.png") center/cover no-repeat;
} */
.flex{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 50vh;
    padding: 2rem 1.5rem 3.2rem;
    margin: 5px;
}

.product-col-content{
    text-align: center;
    color: white;
}
.product-collection .text-light{
    opacity: 1;
    font-size: 0.8;
    font-weight: 400;
    line-height: 1.7;
}
.btn-dark{
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
.btn-dark:hover{
    background: rgb(170, 204, 120);
}

/* 
.product-items{
  background: rgb(235,;
} */




/* Media Queries */
@media screen and (min-width: 992px){
    .product-items{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .product-col-r-bottom{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}
@media screen and (min-width: 1200px){
    .product-items{
        grid-template-columns: repeat(3, 1fr);
    }
    .product{
        margin-right: 1rem;
        margin-left: 1rem;
    }
    .products .text-light{
        width: 50%;
    }
}

@media screen and (min-width: 1336px){
    .product-items{
        grid-template-columns: repeat(4, 1fr);
    }
    .product-collection-wrapper{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .flex{
        height: 60vh;
    }
    .product-col-left{
        height: 121.5vh;
    }
}

 



 



</style>
