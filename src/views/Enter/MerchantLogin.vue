<template>
  <div id="app">
      <img class="icon" src="iconlogo.png" alt="" width="400px">
      
  <div class="layout"> 
      <div class="row d-flex justify-content-center">
        <div class="col-5 text-left">
          <div class="d-flex justify-content-center">
            <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" width="150" alt="">
           
          </div>
          <CENTER> <h3 class="h6" >Seller</h3></CENTER>
          <br>
<form class="form" @submit="formSubmit">

          <div >
            
            <div class="form-group">
                
              <label class="form"  for="exampleInputEmail1" >Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="email"
                pattern=".+@globex\.com" size="30" 
              />
            </div>
            <div class="form-group">
              <label class="form" for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" 
                v-model="password"
              />
              <br>
              <div class="form-group">
                 <center>
              
                        <router-link to="/HomeMerchant" ><button type="submit" class="btn btn-primary btn-block">Login</button></router-link> 

                 </center>
               </div>
<div class="a-divider a-divider-break"><h5>New to Click Quick?</h5></div>
<router-link to="/MerchantSignUp" >
<span id="auth-create-account-link" class="a-button a-button-span12 a-button-base"><span class="a-button-inner"><a id="createAccountSubmit" tabindex="6" href="" class="a-button-text">
          Create your Click Quick account
        </a></span></span></router-link>




              <!-- <h3>New To Click Quick</h3><br>
              <p>Create an Account</p> -->
               <div class="form-group">
                 <center>
                        <router-link to="/MerchantSignUp" ><button class="btn btn-primary">Sign Up as Merchant</button></router-link> 

                 <!-- <button @click="login()" type="submit" class="btn btn-primary btn-block">Sign Up as Merchant</button> -->
                        <router-link to="/UserLogin" ><button  class="btn btn-primary ">Login as User</button></router-link> 

                 </center>
               </div>
            </div>
           
         
          </div>



</form>


           </div>
            
          </div>
        </div>
      </div>
      

      
      



    
  
</template>
<script>

export default {
   name: 'UserLogin',
   
data(){

return {


email: 'Enter email',

password: '',



// productCategory: "Men"

}

},
methods: {
formSubmit(e) {
  e.preventDefault();
 this.axios.get(`http://10.20.2.203:8082/check?username=${this.email}&password=${this.password}`).then(resp=>{
        console.log(resp.data);
        console.log("hello")
        if(resp.data.result==true){
          // console.log("sucess")
          this.getusername(this.email)
          this.$router.push("/HomeMerchant")
        }else{
          alert("resp.data.message")
        }
        
      })

}
  
}
}
</script>


<style>


.icon{
  margin-left:540px;
}
.layout{
  border: 1px solid black;
margin-left: 540px; 
margin-top: 10px; 

  width: 400px;
  height: 620px;
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
</style>
