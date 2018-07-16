<template>
  <div class="hello">
    <h1> {{msg}}</h1>
    <section>
      <form id="register" @submit.prevent="registrationForm">
        <div>
        <span> First Name</span>
        <input type = "text" name="firstname" placeholder = "Enter First Name" v-model = "contact.firstname" v-validate="'required'" :class="{ 'is-danger': errors.has('firstname') }" />
        <span> Last Name</span>
        <input type = "text" name="lastname" placeholder = "Enter Last Name" v-model = "contact.lastname" v-validate="'required'" :class="{ 'is-danger': errors.has('lastname') }"/>
        <span> Contact</span>
        <input type = "text" name="number" placeholder = "Enter Contact Number" v-model = "contact.number" v-validate="'required|numeric'" :class="{ 'is-danger': errors.has('number') }"/>
        <button id="btn" class="button" :disabled="errors.any()">ADD</button>
        <button id="btn" class="button" v-on:click="reset">RESET</button>
        </div>
        <div>
          <span v-show="errors.has('firstname')" class="is-danger">{{ errors.first('firstname') }}</span>
          <span v-show="errors.has('lastname')" class="is-danger">{{ errors.first('lastname') }}</span>
          <span v-show="errors.has('number')" class="is-danger">{{ errors.first('number') }}</span>
        </div>
      </form>
    </section>

      <h2>Customer Details</h2>
      <Customer v-bind:inputData="phones"></Customer>
  </div>
</template>

<script>
import Customer from '@/components/Customer' 

export default {
  name: 'hello',
  components:{
      Customer
  },
  data () {
    return {
      msg: 'Welcome to Phone Book Registry App',
        phones:[
        {firstname: 'Sebastian1', lastname: 'Eschweiler1',number: '1234567899'},
        {firstname: 'Sebastian2', lastname: 'Eschweiler2',number: '7234567899'},
        {firstname: 'Sebastian3', lastname: 'Eschweiler3',number: '4234567859'},
        {firstname: 'Sebastian4', lastname: 'Eschweiler4',number: '2564567899'},
     ],
      contact:{
        firstname: null,
        lastname: null,
        number: null
      }
    }
  },
  methods :{
    addContact : function() {
      this.phones.push(this.contact);
      this.reset();
      },
      registrationForm: function( e) {

        this.$validator.validateAll().then((result) => {
              if (result) {
                alert('Form validated succesfully');
                this.addContact();
              }
          });
      },
      reset(){
        this.contact = {
              firstname: null,
              lastname:null,
              number:null
            }
        this.$validator.reset();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: #42b983;
}
.is-danger{
  color: red;
  font-weight: 700;
}
input.is-danger{
  border:1px solid red;
}
</style>
