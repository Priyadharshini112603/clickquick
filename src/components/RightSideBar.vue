<template>
  <v-navigation-drawer
    v-model="drawer1"
    app
    color="white"
    mini-variant
    mini-variant-width="190"
  

    right
  >
    
<h1 class="head1"><center>Offers On</center></h1>
  <div class="right" >
		
<img  class="img" @click="handleCategory(1)" src="https://static.zipmoney.com.au/store-assets/Seed-Heritage-complete.png" width="180px" height="120px" >
<br>


		<img  class="img" @click="handleCategory(1)"  src="https://media.istockphoto.com/photos/young-man-in-shopping-looking-for-presents-consumerism-fashion-picture-id1214561965?k=20&m=1214561965&s=170667a&w=0&h=jQfb5__blmnnYZUu50Dlg-Kjy5e5DWt1i19EdISyIpE=" width="180px" height="120px">
<br>
		<img   class="img" @click="handleCategory(1)" src="https://images.unsplash.com/photo-1584208124193-df98a65afaf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2glMjBzaG9wfGVufDB8fDB8fA%3D%3D&w=1000&q=80" width="180px" height="120px">
<br>
	</div>


    <div
      style="
        position: absolute;
        bottom: 20px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
      "
    >
       <router-link to="/cart" >
 <v-btn class="change ">
      <v-icon class="con">mdi-cart-outline</v-icon> </v-btn ></router-link>
      <router-link to="/Account" ></router-link>
      <router-link to="/" >
 <v-btn  class="change ">
      <v-icon class="con">mdi-home-outline</v-icon> </v-btn ><br /></router-link>
      <router-link to="/Account" >
<v-btn  class="change ">
      <v-icon class="con">mdi-account-circle</v-icon> </v-btn ></router-link>
      
<router-link to="/UserLogin" >
      <v-btn class="change">
      <v-icon class="con">mdi-login</v-icon> </v-btn ><br /></router-link>


       <router-link to="/UserLogin" >
      <v-btn  class="change">
      <v-icon class="con">mdi-logout</v-icon> </v-btn ></router-link>

       <router-link to="/addproduct" >
      <v-btn class="change">
      <v-icon class="con">mdi-account-star</v-icon> </v-btn ></router-link>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    drawer1: null,
  }),
  methods:{
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
  }
};
</script>

<style>
.v-btn:not(.v-btn--round).v-size--default.changewith {
  height: 45px !important;
  min-width: 30px !important;
  padding: 0 12px;
}
.top {
  margin-top: 150px;
}
.con:hover{
	background:rosybrown;
        
}
.con{
  font-size: 50px;

}
.change{
  margin: 5px;
  font-size: 20px;

}
.img{
  /* border: 1px solid black; */
  border-radius: 20px;
  margin: 2px;
}
.right{
	/* flex-basis: 50%; */
	max-width: 300px;
	/* max-height: 400px; */

	margin-left: 5px;
  /* padding-bottom:10px; */
}

button{
	background: black;
	color: white;
	font-weight: bold;
	border: none;
	outline: none;
  /* padding: 10px 20px; */
	/* margin-bottom: 20px; */
}

.head1{
	margin: 1em 0 0.5em 0;
	color: rgb(240, 194, 133);
	font-weight:bolder;
	/* font-family: 'Ultra', sans-serif;    */
	font-size: 30px;
	/* line-height: 42px; */
  font-style:italic;
  font-family:'Times New Roman', Times, serif;
	text-transform: uppercase;
	/* text-shadow: 0 2px rgb(7, 7, 7), 0 3px #777; */
	/* text-border: 2px solid black; */
  /* padding-bottom: 5px; */
  /* text-decoration: underline; */
   text-shadow:
   -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;
}



hovertext {
  position: relative;
  border-bottom: 1px dotted black;
}

.hovertext:before {
  content: attr(data-hover);
  visibility: hidden;
  opacity: 0;
  width: 140px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 5px 0;
  transition: opacity 1s ease-in-out;

  position: absolute;
  z-index: 1;
  left: 0;
  top: 110%;
}

.hovertext:hover:before {
  opacity: 1;
  visibility: visible;
}
</style>
