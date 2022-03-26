
  

  <template>
  <div id="app">
           <img class="icon" src="iconlogo.png" alt="" width="400px">
  <div class="layout"> 
      <div class="row d-flex justify-content-center">
        <div class="col-5 text-left">
          <div class="d-flex justify-content-center">
            <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" width="150" alt="">
           
          </div>
          <CENTER> <h3 class="h6" >Buyer</h3></CENTER>
          <br>
<form class="form">
           

             <div class="form-group">
                
              <label class="form"  for="exampleInputEmail1">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                 v-model="name"
              />
            </div>


            <div class="form-group">
                
              <label class="form"  for="exampleInputEmail1">Phone Number</label>
              <input type="text" maxlength="10" pattern="\d{10}" class="form-control" 
              title="Please enter exactly 10 digits" key="" 
               v-model="phonenumber">
            </div>



            <div class="form-group">
                
              <label class="form"  for="exampleInputEmail1">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                 v-model="email"
              />
            </div>



            <div class="form-group">
                
              <label class="form"  for="exampleInputEmail1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                 v-model="password"
              />
            </div>


            <div class="form-group">
                
              <label class="form"  for="exampleInputEmail1">Retype Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                 v-model="repassword"
              />
            </div>
              <div class="form-group">
                 <center>
              
                        <router-link to="/UserLogin" ><button @click="formSubmit()" type="submit" class="btn btn-primary btn-block">Register</button></router-link> 

                 </center>
 


              <!-- <h3>New To Click Quick</h3><br>
              <p>Create an Account</p> -->
               <div class="form-group">
                 <center>
               <router-link to="/UserLogin" >  <button class="btn btn-primary btn-block">Login as User</button></router-link>
                        <router-link to="/MerchantLogin" ><button  class="btn btn-primary btn-block">Login as Merchant</button></router-link> 

                 </center>
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
   name: '  UserSignUp',
   data(){

return {

name: 'Enter name',
phonenumber: 'Enter phonenumber',
email: 'Enter email',

password: '',

repassword: '',





// productCategory: "Men"

}

},
methods: {
  handle()
  {
    console.log("sucesss")
  },

formSubmit(e) {

e.preventDefault();

let currentObj = this;




if(this.password==this.repassword){
this.axios.post('http://10.20.2.203:8082/addUser', {



userName: this.email,
userPhone: this.phonenumber,
userEmail: this.name,

userpassword: this.password,


// "userName": this.email,
// "userPhone": this.phonenumber,
// "userEmail": this.name,

// "userPassword": this.password,
// "userName: "Amit",
//     "userEmail": "hello",
//     "userPhone": "82783",
//     "userPassword": "kdhjshdjhd"

// repassword: '',

// userPhone: "3434343432"



})

.then(function (response) {

currentObj.output = response.data;

})

.catch(function (error) {

currentObj.output = error;
console.log("error")


});

}

else{
  alert("Enter Correct Creditials")
}

}
   
  
}
}
</script>


<style scoped>


.icon{
  margin-left:540px;
}
.layout{
  border: 1px solid black;
margin-left: 540px; 
margin-top: 10px; 

  width: 400px;
  height: 750px;
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
