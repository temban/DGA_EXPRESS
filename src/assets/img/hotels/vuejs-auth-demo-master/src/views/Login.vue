<template>
  <div id="app">
    <b-container>
      <b-row class="justify-content-md-center mt-4">
         <b-col col md="8">
          <b-card 
          header="DGA-EXPRESS FORM"
          header-bg-variant="primary"
          header-text-variant="white"
          >
          <b-card-text>
            <b-form @submit="onSubmit">
              <b-form-group 
              description="Enter your user name"
              label="User Name"
              >
              <b-form-input v-model="useremail" required ></b-form-input>
             </b-form-group>
            <b-form-group 
              description="Enter your password"
              label="Password"
              >
              <b-form-input v-model="password" type="password" required > </b-form-input>
             </b-form-group>
             <b-form-group>
              <b-button  type="submit" variant="outline-primary" >Enter</b-button>
             </b-form-group>
            </b-form>
          </b-card-text>
          </b-card>
         </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
 data(){
  return{
    useremail:'',
    password:''
  }
 },
 methods: {
    onSubmit(event){
    event.preventDefault()
    var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'useremail': this.useremail,
  'password': this.password 
});
axios.get('https://dga-express.com:8443/announcements').then(function (response) {
  console.log(JSON.stringify(response.data));
})
var config = {
  method: 'post',
  url: 'https://dga-express.com:8443/login',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
}
 }}
</script>