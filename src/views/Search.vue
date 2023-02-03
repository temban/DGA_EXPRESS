<template>
<div>
    <div >
    <navtravelVue/>
    </div>
    <div style="margin: 30px 0 38px 550px;" v-if="loading" class="loader"></div>


  <div class="container">
<div class="main-body">

      <!-- /Breadcrumb -->

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-3 gutters-sm">

        <div class="col mb-3" v-for="user in users" :key="user.userId">
        

 <div class="card" style="border-radius: 15px; padding:-90px">
          <div class="card-body text-center">
            <div class="mt-3 mb-4">
              <img src="@/assets/img/hotels/59710428.jpg"
                class="rounded-circle img-fluid" style="width: 100px;" />
            </div>
            <h4 style="text-transform: capitalize" class="mb-2">{{ user.userDto.firstName + " "+  user.userDto.lastName}}</h4>
                 <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
            <div style="padding:0 10px 0  10px;" class="d-flex justify-content-between text-center mt-5 mb-2">
              <div>
                <p class="mb-2 h5" style="font-size: 16px;animation: fadeIn 5s;">From</p>
                <p style="text-transform: capitalize" class="text-muted mb-0"><i class="fas fa-map-marker-alt mr-2 text-primary"></i>{{ user.departuretown }}</p>
               <p class="text-muted mb-0"><i class="fas fa-clock mr-2 text-primary"></i>{{ user.arrivaldate  }}</p>
              </div>
              
             <div>
                <p class="mb-2 h5" style="font-size: 16px;animation: fadeIn 5s;">To</p>
                <p style="text-transform: capitalize" class="text-muted mb-0"><i class="fas fa-map-marker-alt mr-2 text-primary"></i>{{ user.destinationtown  }}</p>
                  <p class="text-muted mb-0"><i class="fas fa-clock mr-2 text-primary"></i>{{ user.departuredate  }}</p>
              </div>
              
            </div>

                   <div>
                  <i class="fas fa-weight-hanging mr-2 text-primary"></i>
            <span >{{ user.quantity }}Kg  ------------------>  {{ user.price }}<i class="fas fa-euro mr-2 text-primary"></i>/Kg</span>
            <span class="mx-2"></span>
            </div>
         
         <div >
          
                   <!-- document -->
            <span v-if="user.document">
             <i class="fas fa-file-invoice mr-2 text-primary"></i>
              <span>Accept Documents--------->{{ 200 }}<i class="fas fa-euro mr-2 text-primary"></i></span>
            </span>
                 <!--    <span v-else>
              <p>No Documents</p>
            </span> -->
         </div>
         

         <div style="margin-left:-20px">
            <!-- pc -->
             <span class="mx-2"></span>
            <span v-if="user.computer">
            <i class="fas fa-laptop mr-2 text-primary"></i>
              <span>Accept Computer---------->{{ 300}}<i class="fas fa-euro mr-2 text-primary"></i></span>
            </span>
            <!--   <span v-else>
              <p>No Computer</p>
            </span> -->
         </div>
            
           <div style="margin-top:20px" class="mb-2 pb-2">
              <button v-if="isLogged === true" type="button" v-on:click="view(user.id)" data-target="#exampleModal" data-toggle="modal" style="height:35px; float:left ;" class="btn btn-outline-primary btn-floating">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </button>

              <button v-else type="button" v-b-modal.modal-multi-4 style="height:35px; float:left ;" class="btn btn-outline-primary btn-floating">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </button>


                 <button v-if="isLogged === false"  v-b-modal.modal-multi-4  type="button"  style="height:38px; float:right ;"  class="btn btn-primary btn-rounded btn-sm btn-floating">
              Book now
            </button>
          
          
          <router-link v-if="isLogged === true && user.userDto.id!==userIdAnnouncement" style="height:38px; float:right ; " type="submit"  :to="{ name: 'Hotel', params: { id: user.id} }" class="btn btn-primary btn-rounded btn-sm btn-floating">Book Now</router-link>

         
           </div>
        
          </div>
        </div>
        </div>

      </div>
    </div>
    </div>
<div>
 
<div> 
     <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> Info</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
           <div class="">
    <div>
    <div class="container bootstrap snippets bootdey" style="background:#d9dedf; ">
    <section id="contact" class="gray-bg padding-top-bottom">
    	<div class="container bootstrap snippets bootdey">
            <div class="row">
				<form id="Highlighted-form" class="col-sm-6 col-sm-offset-3" action="contact.php" method="post" novalidate="">
                    <!-- End email input -->
					<div class="form-group">
					 
						<div class="controls">
						<h6>Restriction</h6>   <textarea v-model="restriction" id="contact-message" name="comments" placeholder="Your message" class="form-control requiredField Highlighted-label"  rows="6" readonly></textarea>
						<i class="fa fa-comment"></i>
						</div>
					</div><!-- End textarea -->
				</form><!-- End Highlighted-form -->
			</div>	
		</div>	
	</section>
    </div>      
</div>
</div>
      </div>
    </div>
  </div>
</div>
</div>




</div>
<footerVue/>
    </div>
</template>
<script>
import axios from 'axios'
import footerVue from '../components/footer.vue';
import navtravelVue from '../components/navtravel.vue';
import Swal from 'sweetalert2'
export default {
  name: "Search",
      data() {
      return {
         loading: true,
        userIdAnnouncement: localStorage.getItem('userId'),
          isLogged: this.checkIfIsLogged(),
         id: '',
      users: [],
        modalShow: false,
       pseudo: '',
      email: '',
      password: '',
      useremail:'',
        departuretown:'',
      destinationtown:'',
      quantity: '',
      computer: '',
      document:'',
      restriction: '',
      price: '',
      departuredate: '',
      arrivaldate: '',
      firstName: '',
      lastName: '',
       source: this.$route.params.source,
       destination: this.$route.params.destination,
      }
    },
  components: {
    navtravelVue, 
    footerVue
  },

        async created() {
   

            console.log(this.$route.params.source,this.$route.params.destination);

    var axios = require('axios');
var config = {
  method: 'get',
  url:this.$url+'/search/paris/kumba/announcements',
  headers: { 
    'Content-Type': 'application/json',
'Authorization': 'Bearer '+ localStorage.getItem('access-token')
  }
};

axios(config)
.then(res => {
            this.users = res.data
            console.log( localStorage.getItem('source'));
          this.loading = false
        })
.catch(function (error) {
  console.log(error);
});

  this.$bus.$on('logged', () => {
      this.isLogged = this.checkIfIsLogged()
    });

  },

  methods:{

    view(id){


            var axios = require('axios');
var config = {
  method: 'get',
  url:this.$url+'/announcement/'+id+'/users',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
     },
};

axios(config)
.then(res => {
        this.firstName = res.data.userDto.firstName;
        this.lastName = res.data.userDto.lastName;
        this.departuredate = res.data.departuredate;
        this.arrivaldate = res.data.arrivaldate;
        this.departuretown = res.data.departuretown;
        this.destinationtown = res.data.destinationtown;
        this.restriction = res.data.restriction;
        this.quantity = res.data.quantity;
        this.price = res.data.price;
        this.document = res.data.document;
        this.computer = res.data.computer;
      })
.catch(function (error) {
  console.log(error);
  
});
    },

       checkIfIsLogged () {
      let token = localStorage.getItem('access-token')
      //localStorage.getItem('access-token')
      if (token) {
        return true
      } else {
        return false
      }
    },


     signup() {
      let newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        pseudo: this.pseudo,
        email: this.email,
        password: this.password
      }
      axios.post(this.$url+'/signup', newUser)
        {
          this.$router.push('/');
        }
    },

       onSubmit(event){
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
  url:this.$url+'/login',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

axios(config)
.then(function (response) {
      
      Swal.fire({
  icon: 'success',
  title: ' Succesfully Login!',
  showConfirmButton: false,
  timer: 1500
})
window.location.href = "/"
      //const accesstoken = Object.values(temp)[0];
     // const naccesstoken = Object.values(accesstoken)[1.19];
     const temp = response.data;
     const refreshtoken = Object.values(temp)[0];
      const accesstoken = Object.values(temp)[1];
  console.log(JSON.stringify(accesstoken));
  console.log(JSON.stringify(refreshtoken));

localStorage.setItem('refresh-token', refreshtoken);
localStorage.setItem('access-token', accesstoken);
this.$bus.$emit('logged', 'User logged');
  

})
.catch(function (error) {
            if (error.response.status === 500) {
          Swal.fire(
      'Login Failed!',
      'Please Check Your Credentials!.',
      'error'
    )       }   if (error.response.status === 401) {
          Swal.fire(
      'Login Failed!',
      'User Does Not Exist!.',
      'error'
    )
        } if(error.response.status === 404) {
              Swal.fire(
      'Failed!',
      'Something Went Wrong!.',
      'error'
    )
        }
  console.log(error);
});
}
  }
};
</script>
<style>
    .h6{
    font-size:18px;
    font-weight:600;
}

.contact-item .icon{
    display:block;
    font-size:48px;
    color:#5cc9df;
    text-shadow:-2px 2px 0 rgba(0,0,0,0.1);
    -webkit-transition:all .3s ease-out;
    transition:all .3s ease-out;
}

.contact-item .icon:hover{
    color:#5cc9df;
    -webkit-transform:scale(1.3) translateY(-10px);
    transform:scale(1.3) translateY(-10px);
}


.bl_form {
}

.bl_form input {
	background: rgba(255,255,255,0.10);
	box-shadow: 0 4px 0px rgba(0,0,0,0.2);
	border: none;
	color: white;
	border-radius: 5px;
	font-size: 16px;
	outline: none;
}

.lb_wrap .lb_label.top, .lb_wrap .lb_label.bottom {
	left: 66px !important;
}

.lb_wrap .lb_label.left {
	left: 0;
}

.lb_label {
	font-size:18px;
	font-weight: 400;
	color: rgb(0, 0, 0);
}

.no-placeholder .lb_label {
	display:none;
}

.lb_label.active {
	color: #aaa;
}

#Highlighted-form .form-group label{
    display:none;
    font-size:18px;
    font-weight:100;
    text-transform:uppercase;
}

#Highlighted-form.no-placeholder .form-group label{
    display:block;
}

#Highlighted-form .controls {
    padding:0;
    margin-top:10px;
}

#Highlighted-form.no-placeholder .controls {
    margin-top:0;
}

#Highlighted-form .form-control {
	display:inline;
    width:400px;
    background:#fff;
    border:none;
    border-radius:5px;
    outline:none;
    box-shadow:0 4px 0 rgba(0,0,0,0.05);
    height:48px;
    font-size:18px;
    color:rgb(0, 0, 0);
    font-weight:400;
    padding-left:54px;
}

#Highlighted-form .form-group.half-width{
    width:40%;
    float:left;
}

#Highlighted-form .form-group{
    position:relative;
}

#Highlighted-form .form-group [class*=fa] {
    display:block;
    width:45px;
    position:absolute;
    top:0;
    left:5px;
      margin-top: 25px;
    color:rgb(255, 115, 0);
    font-size:24px;
    line-height:52px;
    text-align:center;
    font-weight:300;
	-webkit-transition:color .3s ease-out;
	transition:color .3s ease-out;
}

#Highlighted-form .form-group [class*=fa].active{
    color:#ccc;
}

#Highlighted-form.no-placeholder .form-group [class*=fa]{
    top:10px;
}

#Highlighted-form textarea.form-control {
    height:100px;
      width:400px;
	min-width:100%;
    font-size:18px;
    font-weight:400;
    line-height:24px;
	padding-top:14px;
	vertical-align:top;
}

#Highlighted-form .form-control:focus {
    outline:none;
    box-shadow:0 4px 0 rgba(0,0,0,0.05);
}

#Highlighted-form .error-message {
    padding:5px 0;
    position:absolute;
    top:-35px;
    right:0;
    font-size:15px;
    line-height:24px;
    font-weight:400;
    color:#ff3345;
    z-index:10;
}

#Highlighted-form.no-placeholder .error-message {
    top:0;
}

</style>