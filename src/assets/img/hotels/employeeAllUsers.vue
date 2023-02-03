<template>

  <div id="landing" class="sidebar-open">
    <div id="dashboardPage">
      <employeeNavbarVue />

      <main style="margin-left:-200px;margin-right:10px">
        <div class="page-breadcrumb">
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
                      <h4 class="card-title">All DGA Clients</h4>
                    </div>
                    <div class="ml-auto">
                      <div class="dl">
                        <form id="searchthis" action="/search" style="display:inline;" method="get">
                          <input style="width:50%; float:right " id="namanyay-search-box" v-model="userInput" name="q" size="70" type="text"
                            placeholder="Search user by mail! " />
                        </form>
                      </div>
                    </div>
                  </div>
                  <!-- title -->
                </div>
                <div class="table-responsive">
                  <div v-if="this.alert.display" class="alert">
                    {{ alert.message }}
                  </div>
                  <table class="table v-middle">
                    <thead>
                      <tr class="bg-light">
                        <th class="border-top-0">Full Name</th>
                        <th class="border-top-0">Pseudo</th>
                        <th class="border-top-0"> Email</th>
                        <th class="border-top-0">phone Number</th>
                        <th class="border-top-0">Status</th>
                        <th class="border-top-0">Action</th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr v-for="user in searchResult" :key="user.id">
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="m-r-10"><a v-on:click="view(user.id)" data-target="#exampleModal"
                                data-toggle="modal" style="border-radius:40px"
                                class="btn btn-circle btn-info text-white">{{ user.firstName[0] + "" + user.lastName[0]
                                }}</a></div>
                            <div class="">
                              <h4 class="m-b-0 font-16">{{ user.firstName + " " + user.lastName }}</h4>
                            </div>
                          </div>
                        </td>
                        <td>{{ user.pseudo }}</td>
                        <td>{{ user.email }}</td>
                        <!-- <td>
                          <span class="font-w600">
                            <span v-if="user.status = 'ENABLED'"
                              class="badge badge-success font-weight-100">Active</span>
                            <span v-else class="badge badge-danger font-weight-100">Disabled</span>
                          </span>
                        </td> -->
                        <td>{{ user.phone }}</td>
                        <td>
                <span v-if="user.status ==='ENABLED'" class="badge badge-success font-weight-100">Active</span>
                <span v-else class="badge badge-danger font-weight-100">De-activated</span>
              </td>
                        <td>
                          <form>
                            <!-- <button  v-on:click="view(user.id)" data-target="#exampleModal" data-toggle="modal" style="height:45px; width:40px;  margin-right:5px;" type="button" class="btn btn-sm btn-info mr-1" disabled><i class="fa fa-eye" style="font-size:20px"></i></button>-->
                            <router-link style="height:40px; width:80px;"
                              class="btn btn-sm btn-info mr-1"
                              :to="{ name: 'employeeUserArticle', params: { id: user.id } }">Articles</router-link>
                            <router-link style="height:40px; width:80px; background-color:orange"
                              class="btn btn-sm btn-info mr-1"
                              :to="{ name: 'employeeUserTravel', params: { id: user.id } }">Travels</router-link>
                            <router-link style="height:40px; width:110px;" class="btn btn-sm btn-info mr-1"
                              :to="{ name: 'employeeUserReservation', params: { id: user.id } }">Reservations
                            </router-link>
                            <button style="height:40px; width:40px;" v-on:click="deleteUser(user.id)" type="button"
                              class="btn btn-sm btn-danger"><i class="fa fa-trash" style="font-size:20px"></i></button>

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


        <div>
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">{{ this.name }}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <!-- End name input -->
                <div style="height: 300px;width:500px">
                  <img :src="pic" style="
                    image-resolution: 3000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 99.5%;
                      max-height: 100%;
                      height: 300px;width:500px">
                </div>
 
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  </body>
</template>

<script>
import Swal from 'sweetalert2';
import employeeNavbarVue from '../components/employeeNavbar.vue'
export default {
  components: {
    employeeNavbarVue
  },
  data() {
    return {
      userInput: "",
      loading: true,
      users: [],
      searchResult: [],
      email: '',
      id: '',
      pic: "",
      name: '',
      alert: {
        display: false,
        message: ""
      }
    }
  },
  async created() {
    var axios = require('axios');
    var data = '';

    var config = {
      method: 'get',
      url: this.$url+'/admin/users',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access-token')
      },
      data: data
    };

    axios(config).then(res => {
      let a = []
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].pseudo !=="DGA-EMPLOYEE" && res.data[i].pseudo !== "Admin") {
          a.push(res.data[i])
        }
      }
      console.log(JSON.stringify(a));
      this.users = a.reverse();
      this.searchResult = this.users;
      this.loading = false;
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
      });
  },



  watch: {
    userInput(word) {
      if (word.length > 0) {
        this.searchResult = this.users.filter((element) =>
          element.email.includes(word)
        );
        if (this.searchResult.length === 0) {
          this.alert.message = "This username not found.";
          this.alert.display = true;
          console.log("Not Found!");
        } else {
          this.alert.message = "";
          this.alert.display = false;
        }
      } else {
        this.searchResult = this.users;
      }
    }
  },

  methods: {

    view(id) {
      var axios = require('axios');
      var config = {
        method: 'get',
        url: this.$url+'/users/' + id,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access-token')
        },
      };

      axios(config)
        .then(res => {
          this.name1 = res.data.firstName;
          this.name2 = res.data.lastName;
          this.name = this.name1 + " " + this.name2;
          this.profileimgage = res.data.profileimgage;
          this.totalprice = res.data.totalprice;
          this.pic = this.$url+'/' + this.profileimgage
          //localStorage.setItem('refresh-token', refreshtoken);
          //localStorage.setItem('access-token', accesstoken);
        })
        .catch(function (error) {
          console.log(error);

        });

    },

    deleteUser(id) {
      console.log(id);
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

          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Authorization", "Bearer " + localStorage.getItem("access-token"));

          var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
          };

          fetch(this.$url+"/delete/user/" + id + "/users", requestOptions)
            .then(response => response.text())
            .then(result => {
              console.log(result)
              swalWithBootstrapButtons.fire(

                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              window.location.reload()
            })
            .catch(error => console.log('error', error));

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

<style lang="scss">
#namanyay-search-btn {
  background: #0099ff;
  color: white;
  font: 'trebuchet ms', trebuchet;
  padding: 10px 20px;
  border-radius: 0 10px 10px 0;
  -moz-border-radius: 0 10px 10px 0;
  -webkit-border-radius: 0 10px 10px 0;
  -o-border-radius: 0 10px 10px 0;
  border: 0 none;
  font-weight: bold;
}

#namanyay-search-box {
  background: #eee;
  padding: 10px;
  border-radius: 10px 0 0 10px;
  -moz-border-radius: 10px 0 0 10px;
  -webkit-border-radius: 10px 0 0 10px;
  -o-border-radius: 10px 0 0 10px;
  border: 0 none;
  width: 160px;
}

.alert {
  position: absolute;
  bottom: 66px;
  right: 36px;
  margin-right: 430px;
  padding: 10px 14px 10px 14px;
  background-color: #f2f2f2;
  border-radius: 14px;
  color: red;
  font-size: 18px;
  font-weight: 200px;
}
</style>