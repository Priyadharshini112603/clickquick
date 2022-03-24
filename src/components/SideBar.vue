<template>
  <!-- <v-navigation-drawer
    v-model="drawer"
    app
    color="white"
    mini-variant
    mini-variant-width="110"
    right
  >
    
<h1 class="head1"><center>CART</center></h1>
    

    <div
      
    >
      <v-btn dark class="changewith mb-3">
        <v-icon class=""><router-link></v-icon> </v-btn
      ><br />
      <v-badge bordered color="#6F0DFF" dot overlap>
        <v-btn dark class="changewith">
          <v-icon class="">mdi-android-messages</v-icon>
        </v-btn>
      </v-badge>
    </div> -->

    <!-- <v-card flat color="" class="rounded-xl mx-4 py-10"> -->
      <!-- <v-list flat class="">
        <v-list-item-group v-model="selectedItem">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            active-class="border"
            v-slot="{ active }"
            :ripple="false"
          >
            <v-list-item-content>
              <v-icon
                v-text="item.icon"
                :color="active ? 'grey' : 'black'"
              
              ></v-icon>
              
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list> -->

<!-- 
    </v-card>
  </v-navigation-drawer> -->




  <v-app class="body">
  <v-container >
        
     <v-toolbar >
      <!-- header1 -->
       
        <h1 class="head1">CLICK QUICK</h1>
        
        <v-spacer></v-spacer>
        
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
         
        ></v-text-field></h1>
        

      </v-toolbar>
      <br> 
  </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    drawer: null,
  }),
};
// export default {
//   data: () => ({
//     selectedItem: 0,

//     items: [
//       { icon: "mdi-home-outline" },
//       { icon: "mdi-cart-outline" },
//       { icon: "mdi-account-circle" },
//       {icon:"mdi-logout"},
       
//     ],
//   }),
//   props: ["drawer"],
//   watch: {
//     drawer(value) {
//       return value;
//     },
//   },
// };
</script>
<style>
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
  font-family:'Times New Roman', Times, serif;
	/* text-transform: uppercase; */
	/* text-shadow: 0 2px gold, 0 3px #777; */
  /* padding-bottom: 15px; */
}
.black--text:hover{
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
  /* background:gold; */
  /* color: white; */
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
