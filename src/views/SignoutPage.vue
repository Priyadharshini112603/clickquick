
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
    <v-container >
        
     <v-toolbar >
      <!-- header1 -->
       
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
     </v-container>
 <div >
      <h1>THANKYOU</h1>
      <!-- <h4>{{product.title}}</h4>
      
    
       <img class="laptop-photo" :src="product.image" alt="">
      
      <div class="product-info">
        <div class="product-price">Price: Rs{{product.price}}</div>
        <a href="#" class="product-button">Add to Cart</a>
      </div> -->
    </div>
</v-app>
</template>

<script>
export default {
   name: 'SignoutPage',
   
}
</script>

<style scoped>
.cart {
  display: flex;
  font-family:'Times New Roman', Times, serif;
  flex-direction: row;
  border:#40aa87;
  flex-wrap: wrap;
  justify-content: centre;
  padding: 25px 32px;
 /* background-image: url("https://images.unsplash.com/photo-1614208194190-5bf690ad8a98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"); */

}

.body{
 /* background-image: url("https://st2.depositphotos.com/3199515/6996/v/950/depositphotos_69967429-stock-illustration-yellow-green-light-background.jpg"); */


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
 background-image: url("https://st2.depositphotos.com/3199515/6996/v/950/depositphotos_69967429-stock-illustration-yellow-green-light-background.jpg");

  padding: 25px;
  
}





</style>