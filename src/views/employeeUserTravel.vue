
<template>
  <body id="landing" class="sidebar-open">
    <div id="dashboardPage">
      <employeeNavbarVue />

      <div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">L'annonce du client</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="">
                  <div>
                    <div
                      class="container bootstrap snippets bootdey"
                      style="background: #d9dedf"
                    >
                      <section id="contact" class="gray-bg padding-top-bottom">
                        <div class="container bootstrap snippets bootdey">
                          <div class="row">
                            <form
                              id="Highlighted-form"
                              class="col-sm-6 col-sm-offset-3"
                              action="contact.php"
                              method="post"
                              novalidate=""
                            >
                              <div class="form-group">
                                <div class="controls">
                                  <h6>Date de départ</h6>
                                  <input
                                    v-model="departuredate"
                                    id="contact-name"
                                    name="contactName"
                                    class="
                                      form-control
                                      requiredField
                                      Highlighted-label
                                    "
                                    type="text"
                                    readonly
                                  />
                                  <i
                                    class="fa fa-calendar"
                                    style="margin-bottom: -30px"
                                  ></i>
                                </div>
                              </div>
                              <!-- End name input -->
                              <div class="form-group">
                                <div class="controls">
                                  <h6>Date d'arrivée</h6>
                                  <input
                                    v-model="arrivaldate"
                                    id="contact-name"
                                    name="contactName"
                                    class="
                                      form-control
                                      requiredField
                                      Highlighted-label
                                    "
                                    data-new-placeholder="Your name"
                                    type="text"
                                    readonly
                                  />
                                  <i class="fa fa-calendar"></i>
                                </div>
                              </div>
                             

 <div class="form-group">
                              <div class="controls">
                                <h6>Ville de départ</h6>
                                <input v-model="departuretown " id="contact-name" name="contactName" class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  " type="text" readonly />
                                <i  class="fa fa-map-marker" style="margin-bottom: -30px"></i>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="controls">
                                <h6>Ville de destination</h6>
                                <input v-model="destinationtown" id="contact-name" name="contactName" class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  " type="text" readonly />
                                <i  class="fa fa-map-marker" style="margin-bottom: -30px"></i>
                              </div>
                            </div> 

                            <div class="form-group">
                              <div class="controls">
                                <h6>Method de Paiement</h6>
                                <input
                                  v-model="paymentMethod"
                                  id="contact-name"
                                  name="contactName"
                                  class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  "
                                  data-new-placeholder="Your name"
                                  type="text"
                                  readonly
                                />
                                <i class="fa fa-credit-card" v-if="paymentMethod.length >15"></i>
                                   <i class="fa fa-mobile" style="font-size:35px" v-else></i>
                                 </div>
                            </div>

    <a :href="tiket" target="_blank" rel="noopener noreferrer"><div style="display: flex; align-items: center; justify-content: center"
          class="createButton"><i
            class="far fa-images"
            style="
              font-size: 20px;
              color: white;
              margin-left: -22px;
            "
          ></i>
          <span style="font-size: 20px; margin-left: 10px">Billet d'avion</span>
          </div></a>

              <a :href="passport" target="_blank" rel="noopener noreferrer"><div style="display: flex; align-items: center; justify-content: center"
          class="createButton"><i
            class="far fa-images"
            style="
              font-size: 20px;
              color: white;
              margin-left: -22px;
            "
          ></i>
          <span style="font-size: 20px; margin-left: 10px">Passport/CNI</span>
          </div></a>

              <a :href="covid" target="_blank" rel="noopener noreferrer"><div style="display: flex; align-items: center; justify-content: center"
          class="createButton"><i
            class="far fa-images"
            style="
              font-size: 20px;
              color: white;
              margin-left: -22px;
            "
          ></i>
          <span style="font-size: 20px; margin-left: 10px">Covid Test</span>
          </div></a>
                       




                             



                              <!-- End email input -->
                              <div class="form-group">
                                <div class="controls">
                                  <h6>Restriction</h6>
                                  <textarea
                                    v-model="restriction"
                                    id="contact-message"
                                    name="comments"
                                    placeholder="Your message"
                                    class="
                                      form-control
                                      requiredField
                                      Highlighted-label
                                    "
                                    rows="6"
                                    readonly
                                  ></textarea>
                                  <i class="fa fa-comment"></i>
                                </div>
                              </div>
                              <!-- End textarea -->
                            </form>
                            <!-- End Highlighted-form -->
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
      <main style="margin-left: -200px; margin-right: 10px">
        <div
          style="margin: 30px 0 38px 550px"
          v-if="loading"
          class="loader"
        ></div>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{{firstname + " " + lastname}}</h4>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Ville de départ</th>
                  <th scope="col">Ville d'arrivée</th>
                  <th scope="col" style="margin-left: -600px">Documents</th>
                  <th scope="col">Quantité</th>
                  <th scope="col">Computer</th>
                  <th scope="col">Prix/Kg</th>
                  <th scope="col">Validation</th>
                  <th style="margin-left: 40px" scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>{{ user.departuretown.slice(0, 14)}}...</td>
                  <td>{{ user.destinationtown.slice(0, 14)}}...</td>
                  <td v-if="user.document">
                    <i
                      class="fa fa-check"
                      style="font-size: 25px; color: lime"
                    ></i>
                  </td>
                  <td v-else>
                    <i
                      class="fa fa-remove"
                      style="font-size: 25px; color: red"
                    ></i>
                  </td>
                  <td>{{ user.quantity }}</td>
                  <td v-if="user.computer">
                    <i
                      class="fa fa-check"
                      style="font-size: 25px; color: lime"
                    ></i>
                  </td>
                  <td v-else>
                    <i
                      class="fa fa-remove"
                      style="font-size: 25px; color: red"
                    ></i>
                  </td>
                  <td>{{ user.price }}</td>
                  <td v-if="user.validation">
                    <span class="badge badge-success font-weight-100"
                      >Validated</span
                    >
                  </td>
                  <td v-else>
                    <span class="badge badge-warning font-weight-100"
                      >Pending...</span
                    >
                  </td>
                  <td>
                    <form>
                      <!-- <button  v-on:click="view(user.id)" data-target="#exampleModal" data-toggle="modal" style="height:45px; width:40px;  margin-right:5px;" type="button" class="btn btn-sm btn-info mr-1" disabled><i class="fa fa-eye" style="font-size:20px"></i></button>-->

                      <button
                        v-on:click="view(user.id)"
                        data-target="#exampleModal"
                        data-toggle="modal"
                        style="height: 45px; width: 40px; margin-right: 5px"
                        type="button"
                        class="btn btn-sm btn-info mr-1"
                      >
                        <i class="fa fa-eye" style="font-size: 20px"></i>
                      </button>

                      
                            <button v-if="!user.validation"  v-on:click="valid(user.id)" style="height: 45px; width: 40px" type="button"
                  class="btn btn-sm btn-success mr-1">
                  <i class="fa fa-check" style="font-size: 20px"></i>
                </button>
                      <button v-else style="height:45px; width:40px;  margin-right:5px;" type="button" class="btn btn-sm btn-danger mr-1">
                      <i class="fas fa-user-lock" style="font-size:18px; margin-right: 5px;"></i></button>
                      <button
                        style="height: 45px; width: 40px"
                        v-on:click="deleteUser(user.id)"
                        type="button"
                        class="btn btn-sm btn-danger"
                      >
                        <i class="fa fa-trash" style="font-size: 20px"></i>
                      </button>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Footer -->
        <footer>
          <p>
            &copy; SHINTHEO. All Rights Reserved. <br />Designed and Developed
            by <a href="https://sazzad.me">SHINTHEO</a>.
          </p>
        </footer>
      </main>
    </div>
  </body>
</template>


<script>
import Swal from "sweetalert2";
import employeeNavbarVue from "../components/employeeNavbar.vue";
export default {
  name: "MyAnnoucements",
  data() {
    return {
      paymentMethod:'',
      loading: true,
      users: [],
      users1: [],
      id: this.$route.params.id,
      firstname: this.$route.params.firstName,
      lastname: this.$route.params.lastName,
      departuredate: "",
      arrivaldate: "",
      departuretown: "",
      destinationtown: "",
      quantity: "",
      computer: null,
      restriction: "",
      document: null,
          cni: "",
      ticket: "",
      covidtest: "",
      passport: "",
      tiket: "",
      covid: "",
      price: "",
      userDtoId: "",
      firstName: "",
      lastName: "",
      pseudo: "",
      email: "",
    };
  },
  components: {
    employeeNavbarVue,
  },

  async created() {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://46.105.36.240:3000/users/" + this.id + "/announcements",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access-token"),
      },
    };

    axios(config)
      .then((res) => {
        this.users = res.data.reverse();
        this.loading = false;
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });

        console.log(error);
      });
  },
  methods: {
    valid(id) {
      Swal.fire({
        title: "Valider le voyage",
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "Valider",
        denyButtonText: ``,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

var axios = require('axios');
var config = {
  method: 'get',
  url: 'http://46.105.36.240:3000/admin/dashboard/validation/'+ id,
  headers: { 
    Authorization: "Bearer " + localStorage.getItem("access-token"),
     'Content-Type': 'application/json',
  },
};

axios(config)
.then(function (response) {
  window.location.reload();
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


          
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    },
    createAnn() {
      window.location.href = "/createAnnouncement";
    },

    view(id) {
      var axios = require("axios");
      var config = {
        method: "get",
        url: "http://46.105.36.240:3000/announcement/"+id+"/users",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
      };

      axios(config)
        .then((res) => {
          this.departuredate = res.data.departuredate;
          this.arrivaldate = res.data.arrivaldate;
          this.departuretown = res.data.departuretown;
          this.destinationtown = res.data.destinationtown;
          this.departuretown = res.data.departuretown;
          this.quantity = res.data.quantity;
          this.covidtest = res.data.covidtest;
          this.paymentMethod = res.data.paymentMethod;
          this.computer = res.data.computer;
          this.restriction = res.data.restriction;
          this.document = res.data.document;
          this.cni = res.data.cni;
          this.passport = "http://46.105.36.240:3000/passport/" + this.cni;
          this.ticket = res.data.ticket;
          this.tiket = "http://46.105.36.240:3000/tiket/" + this.ticket;
          this.covidtest = res.data.covidtest;
          this.covid = "http://46.105.36.240:3000/covidTest/" + this.covidtest;
          this.price = res.data.price;
          this.id = res.data.id;
          this.userDtoId = res.data.userDto.id;
          this.firstName = res.data.userDto.firstName;
          this.lastName = res.data.userDto.lastName;
          this.pseudo = res.data.userDto.pseudo;
          this.email = res.data.userDto.email;

          console.log(JSON.stringify(res.data.id));
          console.log(JSON.stringify(res.data.departuredate));
          console.log(JSON.stringify(res.data.arrivaldate));
          console.log(JSON.stringify(res.data.departuretown));
          console.log(JSON.stringify(res.data.destinationtown));

          //localStorage.setItem('refresh-token', refreshtoken);
          //localStorage.setItem('access-token', accesstoken);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    noUpdate() {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    },

    deleteUser(id) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          width: 7000,
          confirmButton: "btn btn-success ml-3",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: 'Êtes-vous sûr?',
          text: "Vous ne pourrez pas revenir en arrière!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Oui,  Supprimer',
                cancelButtonText: 'Non, Annuler!',
          reverseButtons: true
        })
        .then((result) => {
          if (result.isConfirmed) {
            var axios = require("axios");
            var config = {
              method: "delete",
              url: "http://46.105.36.240:3000/delete/" + id + "/announcements",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("access-token"),
              },
            };

            axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
                window.location.href = "/employeeAllUsers";
              })
              .catch(function (error) {
                console.log(error);
              });

            swalWithBootstrapButtons.fire(
              'supprimé!',
'Ce Voyage a été supprimé.',
'success'
            );
          }
        });
    },
  },
};
</script>

<style>
#namanyay-search-btn {
  background: #0099ff;
  color: white;
  font: "trebuchet ms", trebuchet;
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

.h6 {
  font-size: 18px;
  font-weight: 600;
}

.contact-item .icon {
  display: block;
  font-size: 48px;
  color: #5cc9df;
  text-shadow: -2px 2px 0 rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.contact-item .icon:hover {
  color: #5cc9df;
  -webkit-transform: scale(1.3) translateY(-10px);
  transform: scale(1.3) translateY(-10px);
}

.bl_form {
}

.bl_form input {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 0px rgba(0, 0, 0, 0.2);
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
}

.lb_wrap .lb_label.top,
.lb_wrap .lb_label.bottom {
  left: 66px !important;
}

.lb_wrap .lb_label.left {
  left: 0;
}

.lb_label {
  font-size: 18px;
  font-weight: 400;
  color: rgb(0, 0, 0);
}

.no-placeholder .lb_label {
  display: none;
}

.lb_label.active {
  color: #aaa;
}

#Highlighted-form .form-group label {
  display: none;
  font-size: 18px;
  font-weight: 100;
  text-transform: uppercase;
}

#Highlighted-form.no-placeholder .form-group label {
  display: block;
}

#Highlighted-form .controls {
  padding: 0;
  margin-top: 10px;
}

#Highlighted-form.no-placeholder .controls {
  margin-top: 0;
}

#Highlighted-form .form-control {
  display: inline;
  width: 400px;
  background: #fff;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.05);
  height: 48px;
  font-size: 18px;
  color: rgb(0, 0, 0);
  font-weight: 400;
  padding-left: 54px;
}

#Highlighted-form .form-group.half-width {
  width: 40%;
  float: left;
}

#Highlighted-form .form-group {
  position: relative;
}

#Highlighted-form .form-group [class*="fa"] {
  display: block;
  width: 45px;
  position: absolute;
  top: 0;
  left: 5px;
  margin-top: 35px;
  color: rgb(255, 115, 0);
  font-size: 24px;
  line-height: 52px;
  text-align: center;
  font-weight: 300;
  -webkit-transition: color 0.3s ease-out;
  transition: color 0.3s ease-out;
}

#Highlighted-form .form-group [class*="fa"].active {
  color: #ccc;
}

#Highlighted-form.no-placeholder .form-group [class*="fa"] {
  top: 10px;
}

#Highlighted-form textarea.form-control {
  height: 100px;
  width: 400px;
  min-width: 100%;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  padding-top: 14px;
  vertical-align: top;
}

#Highlighted-form .form-control:focus {
  outline: none;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.05);
}

#Highlighted-form .error-message {
  padding: 5px 0;
  position: absolute;
  top: -35px;
  right: 0;
  font-size: 15px;
  line-height: 24px;
  font-weight: 400;
  color: #ff3345;
  z-index: 10;
}

#Highlighted-form.no-placeholder .error-message {
  top: 0;
}
</style>