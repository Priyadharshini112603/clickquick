
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
    

      <!-- <h4>{{product.title}}</h4>
      
    
       <img class="laptop-photo" :src="product.image" alt="">
      
      <div class="product-info">
        <div class="product-price">Price: Rs{{product.price}}</div>
        <a href="#" class="product-button">Add to Cart</a>
      </div> -->
    
 <!-- <v-app-bar class="vapp" > -->
        <v-tabs >
          <!-- <v-tabs-slider color="gold"></v-tabs-slider> -->
  
          <v-tab class="black--text">ABOUT US</v-tab>
          
<!--           
          <v-tab class="withoutupercase">Transactions</v-tab>
          <v-tab class="withoutupercase">Engagement Rate</v-tab> -->
        </v-tabs>
        <v-spacer></v-spacer>
        
      <!-- </v-app-bar> -->

  <div class="hero">
    <div class="container">
      <div class="hero_container">
        <h1 class="head2">Happiness is not in money, but in shopping</h1>
        <p></p>
      </div>
      <div class="hero_image">
        <img src="https://wallpapercave.com/wp/wp1877575.jpg" alt="">
      </div>
    </div>
  </div>
  
  <div class="about">
    <div class="container">
      <div class="box">
        <h2>Services</h2>
        <p class="p">The world is moved not only by the mighty shoves of the heroes, but also by the aggregate of the tiny pushes of each honest worker who strive hard to provide best services.</p>
      </div>
      
      <div class="box">
        <h2>Facilities</h2>
        <p class="p">We cannot solve our problems with the same thinking we used when we created them.</p>
      </div>
      
      <div class="box1">
        <h2>Team</h2>
        <!-- <p>PRIYA</p>
        <p>VENU</p>
        <p>AMIT</p>
        <p>YATIN</p>
        <p>MIRGANK</p> -->






      </div>
      
    </div>
  </div>
</v-app>
</template>

<script>
// import RightSideBar from "../components/RightSideBar.vue";


export default {
   name: 'AboutUs',
   components: {
    // SideBar,
    // RightSideBar,
    // HeaderPage
  },
  methods:{
       handleCategory(productCat){
          if(productCat==1)
          {
              productCat="men's clothing";
          }
          
          
          
            this.$router.push(`CategoryPage/${productCat}`)
            // console.log(productCat)
        }

  }
   
}
</script>

<style scoped>
.search{
  padding: 15px;
  width: 620px;
}

v-tabs {
  width: 60%;
}


.head1{
	margin: 1em 0 0.5em 0;
	/* color: #343434; */
	font-weight:bolder;
	font-family: "Great Vibes", georgia,cursive;   
	font-size: 35px;
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
	color: #a36464;
  font-style:italic;

	font-weight:bolder;
	/* font-family: 'Ultra', sans-serif;    */
	font-size: 35px;
	/* line-height: 42px; */
  /* text-decoration: underline; */
  font-family:'Times New Roman',cursive;
	/* text-transform: uppercase; */
	/* text-shadow: 0 2px rgb(8, 8, 8), 0 2px rgb(14, 9, 9); */
  /* padding-bottom: 15px; */
  text-shadow:
   -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;
  
}
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');





.header {
  background: white;
}
.p{
    font-family: cursive;
    font-weight: bold;
    color: rgb(161, 131, 106);
}
.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header .container .logo a {
  color: #03045e;
  font-size: 2rem;
  font-weight: bold;
}

.header .container .navbar a {
  color: #03045e;
  margin-right: 1rem;
  text-transform: uppercase;
}

.header .container .navbar a:last-child {
  margin-right: 0;
}

.hero {
  background:white;
}

.hero .container {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.hero .container .hero_image {
  flex-basis: 50%;
}

.hero .container .hero_image img {
  width: 100%;
}

.hero .container .hero_container {
  flex-basis: 50%;
}

.hero .container .hero_container h1 {
  /* color: black; */
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero .container .hero_container p {
  color: black;
  font-size: 1.5rem;
}

.about  .container {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}

.about .container .box {
  flex: 1;
  background: rgb(243, 235, 235);
  text-align: center;
  color: black;
  padding: 1rem;
  border-radius: .5rem;
}
.about .container .box1 {
  flex: 1;
  background: rgb(243, 235, 235);
  /* background: rgb(233, 197, 197); */
  text-align: center;
  color: black;
  padding: 1rem;
  border-radius: .5rem;
}

.about .container .box h2 {
  margin-bottom: .5rem;
}


@media(max-width: 758px) {
  .hero .container {
    flex-direction: column;
    text-align: center;
  }
  
  .hero .container .hero_container h1 {
    font-size: 2rem;
  }
  
  .hero .container .hero_container p {
    font-size: 1rem;
  }
  
  .about  .container {
    flex-direction: column;
  }
}.black--text:hover{
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
  font-size: 30px;
  margin-left:30px ;
  /* background:gold; */
  /* color: white; */
  /* background:gold; */
/* background:purple; */
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