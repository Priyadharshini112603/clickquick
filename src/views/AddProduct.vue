<template>
  <v-app class="body">
     <v-toolbar class="tool">
        <div class="nightlihe"><h2>CLICK QUICK</h2></div>

        <v-spacer></v-spacer>

       
       
   
    
      <!-- <router-link to="/Account" ><v-icon class="con">mdi-cart-outline</v-icon> </v-btn ></router-link> -->
      <router-link to="/" >
 <v-btn  class="change ">
      <v-icon class="con">mdi-home-outline</v-icon> </v-btn ><br /></router-link>
      <router-link to="/Account" >
<v-btn  class="change ">
      <v-icon class="con">mdi-account-circle</v-icon> </v-btn ></router-link>
     


       <router-link to="/MerchantLogin" >
      <v-btn  class="change">
      <v-icon class="con">mdi-logout</v-icon> </v-btn ></router-link>

       <router-link to="/AboutUs" >
      <v-btn class="change">
      <v-icon class="con">mdi-account-star</v-icon> </v-btn ></router-link>
    
      </v-toolbar> 
        

    <div class="header">
        <div class="seller">
        
            <div class="add-product-form">
                
                <div class="data">
<!--     
                    <form action="homepage">
                    <label for="name">Name:</label>
                    <div class="searchproduct"><input type="text" id="name" placeholder="&#128270;Item name..."  size="30" ></div><br>
                    <label for="category">Category:</label>
                   <div class="Category" ><input type="text" id="category" placeholder="Category..." size="30"/></div><br>
                   <div class="price"> <label for="price">Price:</label></div>
                    <input type="text" id="price" placeholder="0.00" size="30"/>
                    <button id="add-product-button" class="button"><h1>Add New product</h1></button> -->
                    <!-- <form action="homepage"> -->
                        <!-- <div class="hello">
                            
                         <label for="name">ProductName:</label><br>
                         <input type="text" id="name" placeholder="Item name..."  size="30" ><br><br>
                         <label for="product category">ProductCategory:</label><br>
                         <label><input type="text" id="head" name="head"  width="48" height="48"></label><br><br>
                         <label for="default merchant price">ProductPrice:</label><br>
                         <input type="text" id="price" placeholder="0.00" size="30" width="48" height="48"/><br><br>
                         <label for="product image">ProductImage:</label><br>
                         <input type="text" id="price" placeholder="0.00" size="30" width="48" height="48"/><br><br>
                         <label for="product title">ProductTitle:</label><br>
                         <input type="text" id="quantity" name="" width="48" height="48"><br><br>
                         <label for="product description">ProductDescription:</label><br>
                         <input type="text" id="quantity" name="" width="48" height="48">
                         
                        </div>
                        <button @click="submit()" type="submit" class="btn btn-primary btn-block" width="30" height="48">ADD</button><br><br>
                         -->
                         <div class="layout"> 
      <div class="row d-flex justify-content-center">
        <div class="col-5 text-left">
         
<form class="form"  @submit="formSubmit">
    <br>
        <center><h4 class="heading">ADD PRODUCT</h4></center>
           

             <div class="form-group">
                
              <label class="form"  for="exampleInputEmail1">ProductName:</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                 v-model="productName"
              />
            </div>


            <div class="form-group">
                
              <label class="form"  for="exampleInputEmail1">ProductCategory:</label>
              <input type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                 v-model="productCategory">
            </div>



            <div class="form-group">
                
              <label class="form"  for="exampleInputEmail1">ProductPrice:</label>
              <input
           type="number"
                class="form-control"
                id="exampleInputEmail1"
               
                 v-model="defaultMerchantPrice"
              />
            </div>



            <div class="form-group">
                
              <label class="form"  for="exampleInputEmail1">ProductImage:</label>
              <input
               type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                 v-model="productImage"
              />
            </div>


            <div class="form-group">
                
              <label class="form"  for="exampleInputEmail1">ProductTitle:</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                 v-model="productTitle"
              />
            </div>
             <div class="form-group">
                
              <label class="form"  for="exampleInputEmail1">ProductDescription:</label>
              <input
                type="text"
                class="form-control1"
                
               
                 v-model="productDescription"
                
              />
            </div>
             <div class="form-group">
                
              <label class="form"  for="exampleInputEmail1">ProductQuantity</label>
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                 v-model="quantity"
              />
            </div>
              <div class="form-group">
                 <center>
              
                       <button type="submit" class="btn btn-primary btn-block">Post</button>

                 </center>
 


              <!-- <h3>New To Click Quick</h3><br>
              <p>Create an Account</p> -->
           
            </div>
</form>
         
          </div>
           </div>
            
          </div>
        
    
      
  </div>
      
      
                    
                   
                </div>
              
                <!-- <div class="panel">
                    <button id="add-product-button" class="button">Add</button>

                </div> -->
            </div>
        </div>


    <!-- </div> -->
  </v-app>          
</template>
      

    
    <script>
import swal from 'sweetalert';

    export default {
  name: "AddProduct",
  data(){
    return{
    productCategory: "",

productImage: "",

productTitle: "",

productDescription: "",
defaultMerchantId: 1,

defaultMerchantName:"PRIYA",
productName:"",


defaultMerchantPrice:0,

productPrice:2000,

quantity: 0,


  }
  },
    methods:{

formSubmit(e) {
  e.preventDefault();
// let currentObj = this;

 this.axios.post(`http://10.20.2.203:8083/merchant/addmerchantproduct`,{
productCategory: this.productCategory,

productImage:this.productImage,

productTitle:this.productTitle,

productDescription:this.productDescription,
defaultMerchantId:1,

// defaultMerchantName:this.defaultMerchantId,
productName:this.productName,


defaultMerchantPrice:this.defaultMerchantPrice,

// productPrice:this.productPrice,

quantity: this.quantity,})
.then(resp=>{

        console.log(resp.data);
        console.log("hello")
        if(resp.data.result==true){
          // console.log("sucess")
          // this.getusername(this.email)
           swal({
            title:"ADD PRODUCT",
            icon:"success",
            button:"done"
          })
          // this.$router.push("/HomeMerchant")
        }else{
          alert("error")
         
        }
        
      })

// else{
//   alert("Enter Correct Creditials")
// }


}
    }
    }
    
    </script>
    
    <style>
    
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


.v-tabs {
  width: 200% !important;
}
 
.v-btn{
    margin-top:20px;
}



.conatiner {
	width: 100%;
	height: 500px;
}
.wrap {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
}

.box {
	margin: 10px;
	width: 300px;
	height: 490px;
	text-align: center;
	border-radius: 3px;
	-webkit-transition: 200ms ease-in-out;
	-o-transition: 200ms ease-in-out;
	transition: 200ms ease-in-out;
	-webkit-box-shadow: 0 0 15px rgba(0,0,0,0.3);
	box-shadow: 0 0 15px rgba(0,0,0,0.3);
}
.box:hover {
	margin-bottom: -10px;
	-webkit-box-shadow: 0 0 5px rgba(0,0,0,0.7);
	box-shadow: 0 0 5px rgba(0,0,0,0.7);
}
.box h1 {
	color: #fff;
	padding: 30px;
	margin-top: 100px;
	text-align: center;
	font-weight: 100;
	font-size: 25px;
	background: rgba(0,0,0,0.8);
	-webkit-box-shadow: 0 0 30px rgba(0,0,0,0.7);
	box-shadow: 0 0 30px rgba(0,0,0,0.8);
}


.poster {
	width: 130px;
	height:130px;
	margin: 120px auto;
	position: relative;
	border-radius: 100px;
}
.poster h4 {
	top: 16px;
	color: #fff;
	position: relative;
	font-size: 80px;
	text-align: center;
	font-weight: 100;
}
.one {
	background: url('https://www.syrow.com/wp-content/uploads/2018/11/rawpixel-783345-unsplash-e1541840661992-1080x675.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}

.two {
	background: url('https://media.istockphoto.com/photos/phishing-mobile-phone-hacker-or-cyber-scam-concept-password-and-login-picture-id1303145712?b=1&k=20&m=1303145712&s=170667a&w=0&h=47u9tKw3bPAQcac-frwG4U7pXPG6tbO9N4yYLrhaJck=');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}
.three {
	background: url('https://img1.wallspic.com/originals/6/8/8/3/4/143886-black_and_red_round_light-3000x3000.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}

.five {
	background: url('https://wallpaperaccess.com/full/656693.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}
/* POSTER*/
.p1 {
	background: #2b5876;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #4e4376, #2b5876);  /* Chrome 10-25, Safari 5.1-6 */
	background: -webkit-gradient(linear, left top, right top, from(#4e4376), to(#2b5876));
	background: -webkit-linear-gradient(left, #4e4376, #2b5876);
	background: -o-linear-gradient(left, #4e4376, #2b5876);
	background: linear-gradient(to right, #4e4376, #2b5876); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	-webkit-box-shadow: 0 0 20px darkblue;
	box-shadow: 0 0 20px darkblue;
}

.p2 {
	background: #f857a6;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #ff5858, #f857a6);  /* Chrome 10-25, Safari 5.1-6 */
	background: -webkit-gradient(linear, left top, right top, from(#ff5858), to(#f857a6));
	background: -webkit-linear-gradient(left, #ff5858, #f857a6);
	background: -o-linear-gradient(left, #ff5858, #f857a6);
	background: linear-gradient(to right, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	-webkit-box-shadow: 0 0 20px #fa3380;
	box-shadow: 0 0 20px #fa3380;
}

.p3 {
	background: #dad160;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #e9ad54, #4776E6);  /* Chrome 10-25, Safari 5.1-6 */
	background: -webkit-gradient(linear, left top, right top, from(#8E54E9), to(#4776E6));
	background: -webkit-linear-gradient(left, #8E54E9, #4776E6);
	background: -o-linear-gradient(left, #8E54E9, #4776E6);
	background: linear-gradient(to right, #8E54E9, #4776E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	-webkit-box-shadow: 0 0 20px lightblue;
	box-shadow: 0 0 20px lightblue;
}

.p4 {
	background: #1FA2FF;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #A6FFCB, #12D8FA, #1FA2FF);  /* Chrome 10-25, Safari 5.1-6 */
	background: -webkit-gradient(linear, left top, right top, from(#A6FFCB), color-stop(#12D8FA), to(#1FA2FF));
	background: -webkit-linear-gradient(left, #A6FFCB, #12D8FA, #1FA2FF);
	background: -o-linear-gradient(left, #A6FFCB, #12D8FA, #1FA2FF);
	background: linear-gradient(to right, #A6FFCB, #12D8FA, #1FA2FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	-webkit-box-shadow: 0 0 20px skyblue;
 box-shadow: 0 0 20px skyblue;
}


.p5 {
	background: #AA076B;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #61045F, #AA076B);  /* Chrome 10-25, Safari 5.1-6 */
	background: -webkit-gradient(linear, left top, right top, from(#61045F), to(#AA076B));
	background: -webkit-linear-gradient(left, #61045F, #AA076B);
	background: -o-linear-gradient(left, #61045F, #AA076B);
	background: linear-gradient(to right, #61045F, #AA076B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	-webkit-box-shadow: 0 0 20px purple;
	box-shadow: 0 0 20px purple;
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

 /*  */
   


.icon{
  margin-left:540px;
}
.layout{
  border: 1px solid black;
margin-left: 540px; 
margin-top: 10px; 

  width: 400px;
  height: 800px;
	box-shadow: 0 2px rosybrown, 0 3px #777;
  border-radius: 50px;
  
}
.Order
{
 
  /* text-align: center; */
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
  margin-left: -20px;
background: rgb(204, 202, 202);
  border: 1px solid gray;

   /* justify-content: space-around; */
  
}
.form-control1{
  border-radius: 0%;
  height: 130px;
  width: 300px;
  /* margin-left: 10px; */
  margin-left: -20px;
  border: 1px solid gray;
background: rgb(204, 202, 202);

   /* justify-content: space-around; */
  
}
.h6{
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;

}
.form{
  margin-left: -10px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;

}
.btn{
 /* background: green; */
   margin-top:5px;
   /* justify-content: space-around; */
   width: 280px;
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
  margin-left: 20px;
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
   margin-left: 20px;
  width: 200px;
  padding-bottom: 10px;

}
.form{
  margin-left: -40px;
}
   .heading{
       font-size: 22px;
       margin-left: 20px;
       font-weight: bold;
       text-align: center;
   }
 
    </style>
    