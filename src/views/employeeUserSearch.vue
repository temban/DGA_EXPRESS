<template>
<body id="landing" class="sidebar-open">
    <div id="dashboardPage">
        <employeeNavbarVue/>

        <mainmethod>
            <div  class="page-breadcrumb">
    <div class="row">
        <div class="col-6">
            <h4 class="page-title">Dashboard</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                </ol>
            </nav>
        </div>
        <div class="col-6">
            <div class="text-right">
                <small>Users</small>
                <h5 class="text-info">3,458</h5>
            </div>
        </div>
    </div>
</div>
 <div style="margin: 30px 0 38px 550px;" v-if="loading" class="loader"></div>
<div class="container-fluid">

    <div class="row">
        <div class="col-sm-12">
            <div class="card">
                <div class="card-body">
                    <!-- title -->
                    <div class="d-md-flex align-items-center">
                        <div>
                            <h4 class="card-title">All DGA Users</h4>
                        </div>
                        <div class="ml-auto">
                            <div class="dl">
                               <form id="searchthis" action="/search" style="display:inline;" method="get">
                         <input id="namanyay-search-box" name="q" size="70" type="text" placeholder="Search user by mail! "/>
                         <input id="namanyay-search-btn" value="Search" type="submit"/>
                                       </form>
                            </div>
                        </div>
                    </div>
                    <!-- title -->
                </div>
                <div class="table-responsive">
                    <table class="table v-middle">
                        <thead>
                            <tr class="bg-light">
                                <th class="border-top-0">Full Name</th>
                                <th class="border-top-0">Pseudo</th>
                                <th class="border-top-0"> Email</th>
                                <th class="border-top-0">phone Number</th>
                                <th class="border-top-0">Action</th>
                            </tr>
                        </thead>
                        <tbody>
 <tr   v-for="user in users" :key="user.id">
    <td><div class="d-flex align-items-center">
         <div  class="m-r-10"><a  style="border-radius:40px" class="btn btn-circle btn-info text-white">{{ user.firstName[0] +""+ user.lastName[0] }}</a></div>
         <div class=""><h4 class="m-b-0 font-16">{{ user.firstName +"  "+ user.lastName }}</h4></div></div></td>
          <td>{{ user.pseudo }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
           <td>
            <form>
            <!-- <button  v-on:click="view(user.id)" data-target="#exampleModal" data-toggle="modal" style="height:45px; width:40px;  margin-right:5px;" type="button" class="btn btn-sm btn-info mr-1" disabled><i class="fa fa-eye" style="font-size:20px"></i></button>--> 
            <router-link style="height:40px; width:80px; background-color:orange" class="btn btn-sm btn-info mr-1" :to="{ name: 'employeeUserTravel', params: { id: user.id} }">Travels</router-link>
            <router-link style="height:40px; width:110px;" class="btn btn-sm btn-info mr-1" :to="{ name: 'employeeUserReservation', params: { id: user.id} }">Reservations</router-link>
            <button style="height:40px; width:40px;" v-on:click="deleteUser(user.id)" type="button" class="btn btn-sm btn-danger"><i class="fa fa-trash" style="font-size:20px"></i></button>
            
           </form>
          </td>
</tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</div>


            <!-- Footer -->
<footer>
    <p>&copy; Bootadmin. All Rights Reserved. <br />Designed and Developed by <a href="https://sazzad.me">Sazzad Hossain</a>.</p>
</footer>

        </mainmethod>
    </div>
    </body>
</template>

<script>
import Swal from 'sweetalert2';
import employeeNavbarVue from '../components/employeeNavbar.vue'
export default {
components:{
  employeeNavbarVue
},
data() {
    return {
         email: this.$route.params.email,
          loading: true,
      users: [],
    }
  },
 async created() {
var axios = require('axios');
var data = '';

var config = {
  method: 'get',
  url: 'https://dga-express.com:8443/user/friedrich@gmail.com/users',
  headers: { 
    'Content-Type': 'application/json', 
  'Authorization': 'Bearer ' + localStorage.getItem('access-token')  },
  data : data
};

axios(config).then(res => {
            this.users = res.data.reverse();
              this.loading = false
        })
.catch(function (error) {
     this.loading = false
    Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',
})
  this.loading = false
  console.log(error);
  localStorage.clear()
        window.location.href = "/"
});
 },
methods:{

 deleteUser(id) {
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    width: 7000,
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

swalWithBootstrapButtons.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, cancel!',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {


var axios = require('axios');
var config = {
  method: 'delete',
  url: 'https://dga-express.com:8443/delete/user/'+id+'/users',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer '+ localStorage.getItem('access-token')}
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  window.location.href = "/employeeAllUsers"
})
.catch(function (error) {
  console.log(error);
});


    swalWithBootstrapButtons.fire(

      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Cancelled',
      'Your imaginary file is safe :)',
      'error'
    )
  }
})
      },
}

}
</script>

<style>
#namanyay-search-btn {
background:#0099ff;
color:white;
font: 'trebuchet ms', trebuchet;
padding:10px 20px;
border-radius:0 10px 10px 0;
-moz-border-radius:0 10px 10px 0;
-webkit-border-radius:0 10px 10px 0;
-o-border-radius:0 10px 10px 0;
border:0 none;
font-weight:bold;
}
 
#namanyay-search-box {
background: #eee;
padding:10px;
 border-radius:10px 0 0 10px;
-moz-border-radius:10px 0 0 10px;
-webkit-border-radius:10px 0 0 10px;
-o-border-radius:10px 0 0 10px;
border:0 none;
width:160px;
 }
</style>