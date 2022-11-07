<template>

  <body id="landing" class="sidebar-open">
    <div id="dashboardPage">
      <employeeNavbarVue />
    </div>
    <div>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                L'annonce du client
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="">
                <div>
                  <div class="container bootstrap snippets bootdey" style="background: #d9dedf">
                    <section id="contact" class="gray-bg padding-top-bottom">
                      <div class="container bootstrap snippets bootdey">
                        <div class="row">
                          <form id="Highlighted-form" class="col-sm-6 col-sm-offset-3" action="contact.php"
                            method="post" novalidate="">
                            
                            <div class="form-group">
                              <div class="controls">
                                <h6>Voyageur</h6>
                                <input v-model="owner" id="contact-name" name="contactName" class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  " type="text" readonly />
                                <i class="fa fa-user" style="margin-bottom: -30px"></i>
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
                            <!-- End name input -->
                            <div class="form-group">
                              <div class="controls">
                                <h6>Date d'arrivée</h6>
                                <input v-model="arrivaldate" id="contact-name" name="contactName" class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  " data-new-placeholder="Your name" type="text" readonly />
                                <i class="fa fa-calendar"></i>
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
          <span style="font-size: 20px; margin-left: 10px">Passeport/CNI</span>
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
                       



                            <div class="form-group">
                              <div class="controls">
                                <h6>Restriction</h6>
                                <textarea v-model="restriction" id="contact-message" name="comments"
                                  placeholder="Your message" class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  " rows="3" readonly></textarea>
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
    <div class="card card-hover" style="margin-left: 70px; margin-bottom: 0px">
      <div class="card-body" style="margin-top: 90px; margin-left: 50px">
        <h4 class="card-title fs-3 text-primary">All travels</h4>
        <table class="
            table table-striped table-hover table-borderless table-vcenter
            font-size-sm
          ">
          <thead>
            <tr >
              <th class="font-w100">Propriétaire</th>
              <th class="font-w100">Date de départ</th>
              <th class="font-w100">Date d'arrivée</th>
              <th class="font-w100">Document</th>
              <th class="font-w100">Quantité</th>
              <th class="font-w100">PC</th>
              <th class="font-w100">Validation</th>
              <th class="font-w100">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in announces" v-bind:key="item.id">
              <td class="d-none d-sm-table-cell">
                <span class="font-w100 text-uppercase">{{
                    item.userDto.lastName
                }}</span>
              </td>
              <td>
                <span class="font-size-sm">{{ item.departuredate }}</span>
              </td>
              <td>
                <span class="font-w100">{{ item.arrivaldate }}</span>
              </td>
              <td>
                <i v-if="item.document" class="fa fa-check text-success" style="font-size: 20px"></i>
                <i v-else class="fa fa-remove text-danger" style="font-size: 25px"></i>
              </td>
              <td>
                <span class="font-w100">{{ item.quantity }}kg</span>
              </td>
              <td>
                <i v-if="item.computer" class="fa fa-check text-success" style="font-size: 20px"></i>
                <i v-else class="fa fa-remove text-danger" style="font-size: 25px"></i>
              </td>
              <td>
                <span v-if="item.validation" class="badge badge-success font-weight-100">Validé</span>
                <span v-else class="badge badge-warning font-weight-100">En attendant...</span>
              </td>
              <!-- <td >
                              <span class="badge badge-success font-weight-100">Confirmed</span>
                            </td>
                            <td>
                              <span class="badge badge-default font-weight-100">Failed</span>
                            </td> -->
              <td>
                <button v-if="!item.validation" v-on:click="valid(item.id)" style="height: 45px; width: 40px" type="button"
                  class="btn btn-sm btn-success mr-1">
                  <i class="fa fa-check" style="font-size: 20px"></i>
                </button>
                      <button v-else style="height:40px; width:35px;  margin-right:5px;" type="button" class="btn btn-sm btn-danger mr-1">
                      <i class="fas fa-user-lock" style="font-size:18px; margin-right: 5px;"></i></button>
                      
                <button v-on:click="view(item.id)" data-target="#exampleModal" data-toggle="modal"
                  style="height: 45px; width: 40px" type="button" class="btn btn-sm btn-info mr-1">
                  <i class="fa fa-eye" style="font-size: 20px"></i>
                </button>

                <button v-on:click="deleteUser(item.id)" style="height: 45px; width: 40px" type="button"
                  class="btn btn-sm btn-danger mr-1">
                  <i class="fa fa-trash" style="font-size: 20px"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </body>
</template>

<script>
import employeeNavbarVue from "../components/employeeNavbar.vue";
import Swal from "sweetalert2";
export default {
  name: "employeeAllTravels",
  data() {
    return {
      announces: [],
      loading: true,
      users: [],
      users1: [],
      id: "",
      woner:'',
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
      paymentMethod:''
    };
  },
  components: {
    employeeNavbarVue,
  },
  async created() {
    window.localStorage.removeItem('notificationSizeTravel');
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("access-token")
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "http://46.105.36.240:3000/admin/dashboard/announcements",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        this.announces = JSON.parse(result);
      })
      .catch((error) => console.log("error", error));

  },
  methods: {
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
                window.location.href = "/employeeAllTravels";
              })
              .catch(function (error) {
                console.log(error);
              });

              swalWithBootstrapButtons.fire(

'supprimé!',
'Ce Voyage a été supprimé.',
'success'
)
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "Your imaginary file is safe :)",
              "error"
            );
          }
        });
    },
    view(id) {
      var axios = require("axios");
      var config = {
        method: "get",
        url: "http://46.105.36.240:3000/announcement/" + id + "/users",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
      };

      axios(config)
        .then((res) => {
            this.owner = res.data.userDto.firstName +" "+ res.data.userDto.lastName;
          this.departuredate = res.data.departuredate;
          this.arrivaldate = res.data.arrivaldate; 
          this.departuretown = res.data.departuretown;
          this.destinationtown = res.data.destinationtown;
          this.departuretown = res.data.departuretown;
          this.quantity = res.data.quantity;
          this.covidtest = res.data.covidtest;
          this.computer = res.data.computer;
          this.restriction = res.data.restriction;
          this.document = res.data.document;
          this.paymentMethod = res.data.paymentMethod;
          this.cni = res.data.cni;
          this.passport = "http://46.105.36.240:3000/passport/" + this.cni;
          this.ticket = res.data.ticket;
          this.tiket = "http://46.105.36.240:3000/tiket/" + this.ticket;
          this.covidtest = res.data.covidtest;
          this.covid = "http://46.105.36.240:3000/covidTest/" + this.covidtest;
          this.price = res.data.price;
          this.id = res.data.id;
 
          //localStorage.setItem('refresh-token', refreshtoken);
          //localStorage.setItem('access-token', accesstoken);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    
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

  },
};
</script>

<style>
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