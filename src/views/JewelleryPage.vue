<template>
  <v-app class="body">
    
    <RightSideBar />

  <v-container>
     <v-toolbar >
      <!-- header1 -->
       
        <h1 class="head1">CLICK QUICK</h1>
        
        <v-spacer></v-spacer>
        <br>
        <h1 class="search"><v-text-field
          label="Find It ... Love It ... Buy It ..."
          class="pt-8 d-none d-sm-flex"
        
          
          prepend-inner-icon="mdi-magnify"
          
          
          
          rounded
          outlined
          
        ></v-text-field></h1>
        

      </v-toolbar>
      <br> 

  </v-container>


   
<div class = "product-items">
                    <!-- single product -->
<div @click="handleProductClick(product1.productId)" v-for="product1 in products" :key="product1" >

                    <div class = "product">
                        <div class = "product-content">
                            <div class = "product-img">
                               <img class="laptop-photo" :src="product1.productImage" alt="">
                            </div>
                            <div class = "product-btns">
                                <button type = "button" class = "btn-cart"> add to cart
                                    <span><i class = "fas fa-plus"></i></span>
                                </button>
                                <button type = "button" class = "btn-buy"> buy now
                                    <span><i class = "fas fa-shopping-cart"></i></span>
                                </button>
                            </div>
                        </div>

                        <div class = "product-info">
                            <!-- <div class = "product-info-top"> -->
                            <center>
                           
                                <div class="price">
                            <p class = "product-price"> &#x20B9;  {{product1.defaultMerchantPrice}}</p>
                            </div>
                            <!-- </div> -->
                            <div  class = "product-name">{{product1.productTitle}}</div>
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

import RightSideBar from "../components/RightSideBar.vue";

import{mapActions} from 'vuex';
import{mapGetters} from 'vuex';
export default {
   name: 'WomenPage',
components: {
  
    RightSideBar,
  },
  
  
   computed:{
    ...mapGetters(['getProducts1'])
  },
  
  created()
  {
this.getItem()
// const productId = this.$route.params.cat
this.axios.get(`http://10.20.2.193:8999/product/getproductbycategory/?category=${this.category}`).then(resp => {
           this.products = resp.data
            // console.log(resp.data)


  }
)    
  },
  methods: {...mapActions(['getproductsbycategory']),

  getItem()
    {
      this.handleProductClick()
    },
    handleProductClick(productCat){
      this.axios.get(`http://10.20.2.193:8999/product/getproductbycategory/?category=${productCat}`).then(resp => {
           this.products = resp.data
            // console.log(resp.data)


  })
            // console.log(productCat)

            // this.$router.push(`/CategoryPage/${productCat}/${productId}`)
            // console.log(productId)
        }
  },
  
   data(){
       return {
           products:[],
        category: 'jewellery'


       }
   }
}
</script>

<style scoped>


.laptop-photo{
    height: 220px;
    width: 200px;
      display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5px;
}
.v-toolbar
{
  background:gold;

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
.black--text:hover{
  font-style: italic;
  font-weight: 900;
  background:gold;
/* background:purple; */
}
.black--text{
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
 /* background-image: url("https://st2.depositphotos.com/3199515/6996/v/950/depositphotos_69967429-stock-illustration-yellow-green-light-background.jpg"); */

  padding: 25px;
  
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
    font-family: cursive;
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
}
.price{
  /* background: #e1f5e1; */
  /* border: #343434;
  border-radius: 30px;
  width: 120px;
  height: 35px; */


}


.product-name{
    color: black;
    display: block;
    text-decoration: none;
    font-size: 18px;
    /* text-transform: uppercase; */
    font-weight: bold;
    align-items: center;
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
    opacity: 1;
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