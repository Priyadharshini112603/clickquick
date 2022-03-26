<template>
  <v-app class="body">
    <!-- <RightSideBar /> -->
      <!-- header -->
    
      <v-toolbar class="tool">
        <div class="nightlihe"><h2>CLICK QUICK</h2></div>

        <v-spacer></v-spacer>

        <!-- <h1 class="search">
          <v-text-field
            label="Find It ... Love It ... Buy It ..."
            class="pt-8 d-none d-sm-flex"
          prepend-inner-icon="mdi-magnify"
         
            rounded
            outlined
          ></v-text-field>
        </h1> -->
        <!-- <router-link to="/" >
 <v-btn class="change ">
      <v-icon class="con">mdi-magnify</v-icon> </v-btn ></router-link> -->
<!--    
        <router-link to="/cart" >
 <v-btn class="change ">
      <v-icon class="con">mdi-cart-outline</v-icon></v-btn ></router-link> -->
      <!-- <router-link to="/Account" ><v-icon class="con">mdi-cart-outline</v-icon> </v-btn ></router-link> -->
   
      <router-link to="/Account" >
<v-btn  class="change ">
      <v-icon class="con">mdi-account-circle</v-icon></v-btn ></router-link>
      
<!-- <router-link to="/UserLogin" >
      <v-btn class="change">
      <v-icon class="con">mdi-login</v-icon></v-btn ><br /></router-link> -->


       <router-link to="/" >
      <v-btn  class="change">
      <v-icon class="con">mdi-logout</v-icon></v-btn ></router-link>

       <router-link to="/AboutUs" >
      <v-btn class="change">
      <v-icon class="con">mdi-account-star</v-icon></v-btn ></router-link>
    
      </v-toolbar>
      <br />
   

    <div class="product-items">
      <!-- single product -->
      <div
        @click="handleProductClick(product.productId)"
        v-for="product in getProducts"
        :key="product"
      >
        <div class="product">
          <div class="product-content">
            <div class="product-img">
              <img class="laptop-photo" :src="product.productImage" alt="" />
            </div>
            <!-- <div class="product-btns">
              <button type="button" class="btn-cart">
                add to cart
                <span><i class="fas fa-plus"></i></span>
              </button>
            </div> -->
          </div>

          <div class="product-info">
            <!-- <div class = "product-info-top"> -->
            <center>
              <div class="price">
                <div class="product-price">&#x20B9; {{ product.defaultMerchantPrice}}  <span class="discount">&#x20B9; {{product.defaultMerchantPrice*2}}</span><sub class="sub">  50% off</sub></div>
              </div>
              <!-- </div> -->
              <div class="product-name">{{ product.productName}}</div>
              <!-- <div class = "product-cat">{{product.category}}</div> -->
              <!-- <p class = "product-price">$ 150.00</p> -->
            </center>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
// import RightSideBar from "../components/RightSideBar.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data: () => ({}),
  components: {
    // RightSideBar,
  },
  computed: {
    ...mapGetters(["getProducts"]),
  },

  created() {
    this.getItem();
  },
  methods: {
    ...mapActions(["getallproduct"]),

    getItem() {
      this.getallproduct();
    },
    handleProductClick(productId) {
      this.$router.push(`productDetails/${productId}`);
      console.log(productId);
    },

    
    handleMen() {
      this.$router.push("men");
    },
    handleWomen() {
      this.$router.push("women");
    },
    handleElectronics() {
      this.$router.push("electronics");
    },
    handleJewellery() {
      this.$router.push("jewellery");
    },
  },
};
</script>
<style scoped>
.head1 {
  margin: 1em 0 0.5em 0;
  /* color: #343434; */
  font-weight: bolder;
  font-family: "Great Vibes", georgia, cursive;
  font-size: 40px;
  line-height: 42px;
  font-style: italic;
  /* font-family:"Shippori Mincho B1", serif,cursive; */
  text-transform: uppercase;
  text-shadow: 0 2px rosybrown, 0 3px #777;
  padding-bottom: 15px;
  color: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
}
.discount{
  text-decoration: line-through;
  color: grey;
  font-size: 20px;
}

.head2 {
  margin-left: 30px;
  color: #e02c2c;
  font-style: italic;

  font-weight: bolder;
 
  font-size: 35px;
 
  font-family: "Times New Roman", Times, serif;
}
.black--text:hover {
  font-style: italic;
  font-weight: 900;
  background: rgb(250, 237, 237);
  /* color: white; */
  font-family: "Times New Roman", Times, serif;
  /* background:purple; */
}
.black--text1:hover {
  font-style: italic;
  font-weight: 900;
  background: rgb(250, 237, 237);
  /* color: white; */
  font-family: "Times New Roman", Times, serif;
  /* background:purple; */
}
.black--text {
  font-weight: 900;

}
.black--text1 {
  font-weight: 900;
  font-size: 30px;
  font-family: cursive;
  /* text-decoration:underline; */
  /* text-transform: uppercase; */
  font-style: italic;
  color: rosybrown;

}
.v-tabs {
  width: 60% !important;
}

.v-text-field {
  color: black;
}
/* .search {
  padding: 15px;
  width: 420px;
} */

.headcon {
  background-image: url("https://st2.depositphotos.com/3199515/6996/v/950/depositphotos_69967429-stock-illustration-yellow-green-light-background.jpg");

  padding: 25px;
}

/* products */


.laptop-photo {
  height: 220px;
  width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5px;
}
.vapp{
   margin-top:10px;
  margin-left:35px;
  margin-right:10px;
  width: 1350px;
  margin-bottom: 50px;

}

.hello {
  background-color: white;
  display: flex;
  /* color: #343434; */
  flex-direction: column;
  margin: 20px auto;
  border-radius: 20px;
  padding: 15px;
  overflow: hidden;
  transition: transform 0.2s;
  width: 300px;
  height: 400px;
  /* border: 1px solid black; */
  box-shadow: rgba(136, 126, 126, 0.35) 0px 5px 15px;
}

.hello:hover {
  transform: scale(1.1);
}

/* banner */

.banner {
  margin: 30px 0;
}

.slider-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  /* gap: 10px; */
  -webkit-border-radius: var(--border-radius-md);
  border-radius: var(--border-radius-md);
  overflow: auto hidden;
  -webkit-scroll-snap-type: inline mandatory;
  -ms-scroll-snap-type: inline mandatory;
  scroll-snap-type: inline mandatory;
  overscroll-behavior-inline: contain;
  width: 1350px;
      /* width: 1000px; */
    margin-left: -100px;
    /* height: 1000px; */
}

.slider-item {
  position: relative;
  min-width: 100%;
  max-height: 150px;
  aspect-ratio: 1 / 1;
  -webkit-border-radius: var(--border-radius-md);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  scroll-snap-align: start;
}

.slider-item .banner-img {
  width: 100%;
  height: 800px;
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
  /* -webkit-border-radius: var(--border-radius-md); */
  border-radius: 10px;
}

.banner-subtitle {
  color: orange;
  font-size: 10px;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.banner-title {
  color: rgb(223, 169, 99);
  font-size: var(--fs-1);
  text-transform: uppercase;
  /* line-height: 1; */
  margin-top: 3px;
}

.banner-text {
  display: none;
}

.banner-btn {

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

.banner-btn:hover {
  background: black;
}

.banner {
  margin: 30px 0;
}

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
  overflow: auto;
  scroll-snap-align: start;
}

.slider-item .banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right;
}


.banner-content {
  background: rgb(233, 151, 45);
  position: absolute;
  bottom: 135px;
  left: 85px;
  right: 25px;
  width: 400px;
  padding: 20px 25px;
  border-radius: var(--border-radius-md);
}

.banner-subtitle {
  color: rgb(233, 15, 51);
  font-size: 40px;
  font-weight: 900;
  text-transform: capitalize;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.banner-title {
  color: black;
  font-size: var(--fs-1);
  text-transform: uppercase;
  line-height: 1;
  margin-bottom: 10px;
}

.banner-text {
  display: none;
}

.banner-btn {
  background: rgb(243, 132, 132);
  color: white;
  width: max-content;
  font: size 11px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 30px;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1);
}

.banner-btn:hover {
  background: black;
}

@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700;900&display=swap");


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
  
  cursor: pointer;
  /* border: 2px solid #343434; */
  padding: 5px;
}
.product-img {

  box-shadow: 0 0 20px 10px white;
  width: 250px;
  height: 250px;

  transition: background 0.5s ease;
}
.product-btns {
  display: flex;
  justify-content: center;
  margin-top: 1.4rem;
  opacity: 0;
  transition: opacity 0.6s ease;
 
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
  font-size: 16px;
  /* text-transform: uppercase; */
  font-weight:300px;
  align-items: center;
  /* overflow: hidden; */
}
.sub{
  color: #e02c2c;
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
  
  color: rgb(12, 12, 12);

  text-decoration: none;
  font-size: 25px;
 
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
}

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

.product-collection {
  padding: 3.2rem 0;
}
.product-collection-wrapper {
  padding: 3.2rem 0;
}

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




.nightlihe{
	font-size:25px;
	font-weight: bold;
	text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #f0bed7, 0 0 20px #d3acbf, 0 0 30px #ecdae6, 0 0 40px #cfa3b9, 0 0 50px #ecc8da, 0 0 55px #ebd4df;
    /* letter-spacing: 5px; */
    opacity:1;
    color:rgb(43, 39, 41);
    /* font-family:cursive */
    font-family: 'Times New Roman', Times, serif;
}


.tool{
  margin-top:10px;
  margin-left:10px;
  margin-right:10px;

}
/* .change{
  font-size: 5px;
} */
</style>
