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

 <div class="product-card">
      <h1>Category: {{product.category}}</h1>
      <h4>{{product.title}}</h4>
      
    
       <img class="laptop-photo" :src="product.image" alt="">
      
      <div class="product-info">
        <div class="product-price">Price: Rs{{product.price}}</div>
        <a href="#" class="product-button">Add to Cart</a>
      </div>
    </div>
      </v-container>
  </v-app>
</template>

<script>
// import Vue from 'vue'
import RightSideBar from "../components/RightSideBar.vue";
// import SideBar from "../components/SideBar";
import{mapGetters} from 'vuex';
export default {
   name: 'productDetails',
   components: {
    // SideBar,
    RightSideBar,
  },
   computed:{
    ...mapGetters(['getProducts'])
  },
   created(){
      //  const productCat = this.$route.params.cat
      // //  this.axios.get(`https://fakestoreapi.com/products/${productId}`).then(resp => {
      // //      this.product = resp.data
      // //  })
      // Vue.axios.get('https://fakestoreapi.com/products').filter(function fil(item){
      //   if(item.category===productCat)
      //   return item;
      // }).then(resp=>{
      //     this.product = resp.data});
      
   },
   
  
   data(){
       return {
           product: {}
       }
   }
}
</script>

<style scoped>


/* header */
.body{
 /* background-image: url("https://st2.depositphotos.com/3199515/6996/v/950/depositphotos_69967429-stock-illustration-yellow-green-light-background.jpg"); */


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
	color:white;
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
 background-image: url("https://st2.depositphotos.com/3199515/6996/v/950/depositphotos_69967429-stock-illustration-yellow-green-light-background.jpg");

  padding: 25px;
  
}




/* body */
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
.template{
    background-color: #40aa87;

}
.cart-btn{
    background-color: rgb(205, 228, 74);
    border-radius: 10px;
    margin-left: 500px;
    border: 10px ;
    height: 40px;
    width: 320px;
    
    /* text-align: center; */
}

.cart-btn:hover{
    background-color: #40aa87;
}

.laptop-photo{
    height: 320px;
    width: 300px;
      display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5px;
  padding-bottom: 25px;
  border-radius: 20px;


}

.hello{
  background-color: rgb(206, 227, 236);
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  /* border-radius: 20px ; */
  /* overflow: ; */
 transition: transform .2s;
 width: 1280px;
 /* border: 1px solid black; */
 justify-content:center;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
    font-size: 40px;
    color: rgb(14, 13, 13);
}

.title{
    height: 14px;
    
    overflow: hidden;
    text-overflow: ellipsis;
}
















.product-card{
box-shadow: rgba(223, 122, 122, 0.24) 0px 3px 8px;
  width: 600px;
  background: white;
  padding: 40px;
  position: absolute;
   left: 50%; 
  top: 50%; 
  transform: translate(-50%,-50%);
  text-transform: uppercase;
  border-radius: 20px;
}
.product-card h1{
  font-size: 20px;
  margin-bottom: 4px;
}
.product-card h4{
  font-size: 16px;
  color: rgb(7, 7, 7);
}


.product-info{
  display: flex;
  align-items: center;
}
.product-price{
  background: #f1ca46;
  color: #0b0c0c;
  font-size: 16px;
  padding: 15px;
  border: 2px solid;
  border-radius: 20px;

  font-weight: 700;
}
.product-button{
  margin-left: auto;
  /* color: #7ed6df; */
  text-decoration: none;
  border: 2px solid;
  padding: 8px 24px;
  border-radius: 20px;
  transition: .4s linear;
   background: #f1ca46;
  color: #0b0c0c;
  font-size: 20px;
  padding: 15px;
  font-weight: 700;
}
 
.product-button:hover{
  transform: scale(1.06);
}










</style>