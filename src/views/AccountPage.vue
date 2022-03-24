
<template>

<v-app class="body">
    <RightSideBar />

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
 <div class="layout"> 
      <div class="row d-flex justify-content-center">
        <div class="col-5 text-left">
          <div class="d-flex justify-content-center">
            <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" width="150" alt="">
           
          </div>
          <CENTER> <h3 class="h6" >Seller</h3></CENTER>
          <br>
           

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
                
              <label class="form"  for="exampleInputEmail1">Retype Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
              <div class="form-group">
                 <center>
              
                        <router-link to="/MerchantLogin" ><button type="submit" class="btn btn-primary btn-block">Register</button></router-link> 

                 </center>
 


              <!-- <h3>New To Click Quick</h3><br>
              <p>Create an Account</p> -->
               <div class="form-group">
                 <center>
               <router-link to="/UserLogin" >  <button type="submit" class="btn btn-primary btn-block">Login as User</button></router-link>
                        <router-link to="/MerchantLogin" ><button type="submit" class="btn btn-primary btn-block">Login as Merchant</button></router-link> 

                 </center>
               </div>
            </div>
           
         
          </div>
           </div>
            
          </div>
        
     </v-container>
</v-app>

      
  
      
      



    
  
</template>




<script>
import RightSideBar from "../components/RightSideBar.vue";


export default {
   name: 'AccountPage',
   components: {
    // SideBar,
    RightSideBar,
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
margin-left: 540px; 
margin-top: 10px; 

  width: 400px;
  height: 740px;
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
  width: 820px;
}
</style>



