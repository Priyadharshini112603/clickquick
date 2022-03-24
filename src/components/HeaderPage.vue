<template>
  <v-app class="body">
  
   <br>
   <br>

     <v-toolbar >
      <!-- header1 -->
       
        <h1 class="head1">CLICK QUICK</h1>
        
        <v-spacer></v-spacer>
        <br>
        <h1 class="search"><v-text-field
          label="Find It ... Love It ... Buy It ..."
          class="pt-5 d-none d-sm-flex"
          
          filled
          prepend-inner-icon="mdi-magnify"
          solo
          flat
          background-color="white"
          rounded
          outlined
          color="black"
        ></v-text-field></h1>
        

      </v-toolbar>
      
   
  </v-app>
</template>

<script>
export default {
    name:'HeaderPage'
 
};
</script>

<style>
/* .body{
 background-image: url("https://st2.depositphotos.com/3199515/6996/v/950/depositphotos_69967429-stock-illustration-yellow-green-light-background.jpg");


} */
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
	text-shadow: 0 2px gold, 0 3px #777;
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


.search{
  padding: 15px;
  width: 820px;
}
/* 
.headcon{
 /* background-image: url("https://st2.depositphotos.com/3199515/6996/v/950/depositphotos_69967429-stock-illustration-yellow-green-light-background.jpg"); */

  /* padding: 25px; 
  
} */
</style>
