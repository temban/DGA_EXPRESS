<template>
<div>


  <b-button v-b-modal.modal-multi-4 variant="outline-primary" size="sm" class="log">login</b-button>

  <b-modal id="modal-multi-4" title="Login into Your DGA Account" hide-footer>
   
    <form @submit="onSubmit">
        <div style="margin: 10px 0 10px 200px;" v-if="loading" class="loader"></div>
        <h2 class="heading">Login</h2>
        <div class="form-fields">
          <input v-model="useremail" id="email" name="email" type="email" placeholder="Email Address" required>
        </div>
        <div class="form-fields">
          <input v-model="password"  id="password" name="password" type="password" placeholder="Password" required>
        </div>
        <div class="form-fields">
          <button class="signIn" name="commit" type="submit">
            Sign In
          </button>
        </div>
        <div class="login-choice"><span>or Sign In with</span></div>
        <SocialLogin />
    </form>
    <div class="footer">
       <p>Don't have an account? <a v-b-modal.modal-multi-5> <u style="color:blue">Create one now</u></a></p>
    </div>
  
  </b-modal>
</div>
 
</template>

<script>
import SocialLogin from '@/components/SocialLogin'
import Swal from 'sweetalert2'
export default {
    name: "loginmodelVue",
       data() {
      return {
          loading: false,
        modalShow: false,
        useremail:'',
        password:''
      }
    }, 
components: {
    SocialLogin,

},
 methods: {
onSubmit(event) {
      this.loading = true
      event.preventDefault()
      var axios = require('axios');


      var qs = require('qs');
      var data = qs.stringify({
        'useremail': this.useremail,
        'password': this.password
      });
      var config = {
        method: 'post',
        url: this.$url+'/login',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
      };

      axios(config)
        .then(function (response) {
          const temp = response.data;
          const refreshtoken = Object.values(temp)[0];
          const accesstoken = Object.values(temp)[1];
          localStorage.setItem('refresh-token', refreshtoken);
          localStorage.setItem('access-token', accesstoken);
          
          var config0 = {
            method: 'get',
            url: this.$url+'/profile',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('access-token')
            },
          };

          axios(config0)
            .then(res => {
              let a = res.data
              if (a.pseudo == "DGA-EMPLOYEE"|| a.pseudo == "Admin") {
                window.location.href = "/employeeDashboard"
              }else{
                console.log(a);
                 window.location.href = "/userDashboard";
                //window.location.reload()
              }
            })
            .catch(function (error) {
              console.log(error);
            });
            this.$bus.$emit('logged', 'User logged');


        })
        .catch(function (error) {
          if (error.response.status === 500) {
            Swal.fire(
              'Login Failed!',
              'Please Check Your Credentials!.',
              'error'
            )
          }
          if (error.response.status === 401) {
            Swal.fire(
              'Login Failed!',
              'User Does Not Exist!.',
              'error'
            )

          } if (error.response.status === 404) {
            Swal.fire(
              'Failed!',
              'Something Went Wrong!.',
              'error'
            )
          }
          console.log(error);

        });
    }
 }}
</script>

<style>

</style>