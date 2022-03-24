<template class="bg">

<div class="bg">

<link rel="stylesheet"

href="https://unpkg.com/purecss@1.0.0/build/pure-min.css"

integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w"

crossorigin="anonymous">

<h2 class="cart_heading">Add new Product</h2>
<form class="pure-form pure-form-aligned form" @submit="formSubmit">

<fieldset>

<div class="pure-control-group">

<label for="category">Enter Category:</label>

<input class="form_field" type="text" placeholder="Enter category" v-model="productCategory" />

</div>



<div class="pure-control-group">

<label for="details">Enter Description:</label>

<input class="form_field" type="text" placeholder="Enter Product Details" v-model="productDescription"/>

</div>

<div class="pure-control-group">

<label for="image">Enter Image URL:</label>

<input class="form_field" type="text" placeholder="Enter Product Image URL" v-model="productImage"/>

</div>

<div class="pure-controls">

<button type="submit" class="pure-button pure-button-primary btn btn-success">Submit</button>

</div>

</fieldset>

</form>

</div>

</template>
<script>

export default {

name: "addProduct",

data(){

return {



productDescription: 'Add Description',

productImage: 'Add image URL',



productCategory: "Men"

}

},

methods: {

formSubmit(e) {

e.preventDefault();

let currentObj = this;

console.log(this)

this.axios.post('http://10.20.2.193:8999/product/addproduct', {

productCategory: this.productCategory.toLowerCase(),

productDescription: this.productDescription,

productImage: this.productImage,



})

.then(function (response) {

currentObj.output = response.data;

})

.catch(function (error) {

currentObj.output = error;
console.log("error")


});

}

}

}

</script>