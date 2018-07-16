<template>
<div class = "Table">
    <div class="Row Heading">
        <div class="Cell"> First Name</div>
        <div class="Cell"> Last Name</div>
        <div class="Cell"> Contact</div>
        <div class="Cell"> Action</div>
    </div> 
    <div class="Row" v-for="(phone,index) in inputData" :phone="phone" :key="index">
        <div class = "Cell"><p>{{phone.firstname}}</p></div>
        <div class = "Cell"><p>{{phone.lastname}}</p></div>
        <div class = "Cell"><p>{{phone.number}}</p></div>
        <div class = "Cell">
        <p><button v-on:click = "inputData.splice(index,1)">X</button></p>
        </div> 
    </div>
</div>    
</template>


<script>

export default {
  name: 'Customer',
  props: ['inputData']

}
</script>

<style>
.Table{
  display: table;
  width:100%;
}
.Heading{
  display: table-row;
  font-weight: bold;
  text-align: center;
}
.Row{
  display: table-row;
}
.Cell{
  display: table-cell;
  border: solid;
  border-width: thin;
  padding-left: 5px;
  padding-right: 5px;
  width:25%;
}.btn{
  width:100px;
  background-color: grey;
  color: white;
}
</style>
