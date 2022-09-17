<template>
  <div style="">
     <div style="margin-left: 60px">
      <lognavVue />
    </div>
    <usersidebarVue />
 <div v-if="loadings" style="background:rgba(0,0,0,0.3);height:100vh;width:100vw;position:fixed;top:0;left:0;z-index: 100;"> 
         <div class="ring">Loading</div>
    </div>
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
              <h5 class="modal-title" id="exampleModalLabel">
                Mon annonce de voyage
              </h5>
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
                                <h6>Ville de départ</h6>
                                <input
                                  v-model="departuretown"
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
                                  class="fa fa-map-marker"
                                  style="margin-bottom: -30px"
                                ></i>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="controls">
                                <h6>Ville de destination</h6>
                                <input
                                  v-model="destinationtown"
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
                                  class="fa fa-map-marker"
                                  style="margin-bottom: -30px"
                                ></i>
                              </div>
                            </div>
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
          <span style="font-size: 20px; margin-left: 10px">Passeport</span>
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
    <div style="margin: 30px 0 38px 50%" v-if="loading" class="loader"></div>
    <div class="container">
      <b-container
        style="margin-left: 32px; margin-bottom: 30px; background-color: white"
      >
        <h3 class="mt-2 mb-3 float-left text-primary">
          Mes annonces de voyage
        </h3>
        <button
          @click="createAnn()"
          style="display: flex; align-items: center; justify-content: center"
          class="create"
        >
          <i
            class="fa fa-plus"
            style="
              font-size: 20px;
              color: white;
              margin-top: 20px;
              margin-left: -48px;
            "
          ></i>
          <span style="font-size: 18px; margin-left: -15px">Nouveau voyage</span>
        </button>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">La Source</th>
              <th scope="col">Destination</th>
              <th scope="col" style="margin-left: -600px">Documents</th>
              <th scope="col">Qté</th>
              <th scope="col">ordinateur</th>
              <th scope="col">Prix</th>
              <th style="margin-left: 40px" scope="col">Action</th>
            </tr>
          </thead>
           <th colspan="8"><div v-if="tableEmpty" > 
                   <tableEmptyVue/>
                   </div> </th>  
          <tbody style="text-transform: capitalize">
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.departuretown.slice(0, 20) }}...</td>
              <td>{{ user.destinationtown.slice(0, 20) }}...</td>
              <td v-if="user.document">
                <i class="fa fa-check" style="font-size: 25px; color: lime"></i>
              </td>
              <td v-else>
                <i class="fa fa-remove" style="font-size: 25px; color: red"></i>
              </td>
              <td>{{ user.quantity }}</td>
              <td v-if="user.computer">
                <i class="fa fa-check" style="font-size: 25px; color: lime"></i>
              </td>
              <td v-else>
                <i class="fa fa-remove" style="font-size: 25px; color: red"></i>
              </td>
              <td>{{ user.price }}</td>
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
                  <button
                    v-if="user.reserved"
                    v-on:click="lockedAnn()"
                    style="height: 45px; width: 40px; margin-right: 5px"
                    type="button"
                    class="btn btn-sm btn-danger mr-1"
                  >
                    <i class="fas fa-user-lock" style="font-size: 20px"></i>
                  </button>
                  <router-link
                    v-else
                    style="height: 45px; width: 40px"
                    class="btn btn-sm btn-info mr-1"
                    :to="{ name: 'EditAnnouncement', params: { id: user.id } }"
                    ><i class="fa fa-pencil" style="font-size: 20px"></i
                  ></router-link>
                  <button
                    v-if="user.reserved"
                    v-on:click="lockedAnn()"
                    style="height: 45px; width: 40px; margin-right: 5px"
                    type="button"
                    class="btn btn-sm btn-danger mr-1"
                  >
                    <i class="fas fa-user-lock" style="font-size: 20px"></i>
                  </button>
                  <button
                    v-else
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
      </b-container>
      <!-- Fim tabela -->
    </div>
    <div style="position:relative; margin-bottom:-60px; left:0; right:0"> <footerVue /></div>
  </div>
</template>

<script>
import tableEmptyVue from "../components/tableEmpty.vue";
import Swal from "sweetalert2";
import footerVue from "@/components/footer.vue";
import lognavVue from "../components/lognav.vue";
import usersidebarVue from "../components/usersidebar.vue";
export default {
  name: "MyAnnoucements",
  data() {
    return {
      loading: true,
      loadings: false,
       tableEmpty: false,
      users: [],
      users1: [],
      id: "",
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
      mytest: "",
    };
  },
  components: {
    lognavVue,
    tableEmptyVue,
    usersidebarVue,
    footerVue,
  },
  // Ao criar o componente, é feito uma requisição GET para a API do backend
  async created() {
    var userID = Math.floor((Math.random( ) * 1000) +1);
console.log(userID);
let notif = (title, body) => {
     const options = {
       body: body,
       icon: `https://upload.wikimedia.org/wikipedia/fr/thumb/b/b6/Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg/langfr-280px-Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg.png`,
       badge: `https://upload.wikimedia.org/wikipedia/fr/thumb/b/b6/Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg/langfr-280px-Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg.png`
     };
     const n = new Notification(title, options)
     console.log(n);
   }
   let url = 'http://192.168.16.117:4000/subcribe?userId=130fca97-6797-4b63-ba46-4d9290a595f2';
   let ev = new EventSource(url);
   ev.addEventListener('LatesNews', function (event) {
     let articleData = JSON.parse(event.data)
     if (Notification.permission === "granted") {
       notif(articleData.title, articleData.content)
     } else if (Notification.permission !== "dinied") {
       Notification.requestPermission().then(perm => {
         if (perm === 'granted') {
           notif(articleData.title, articleData.content)
         }
       })

     }
   })
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append( "Authorization", "Bearer " + localStorage.getItem("access-token") );

    //var requestOptions = { method: "GET", headers: myHeaders, redirect: "follow", };

    //fetch( "http://46.105.36.240:3000/passport/Screenshot_20220531-020256.png", requestOptions )
    //  .then((response) => response.text())
    //  .then((result) => {
    //    console.log(result);
    //    this.mytest = JSON.parse(result);
    //  }) 
    //  .catch((error) => console.log("error", error));

    var axios = require("axios");

    var config = {
      method: "get",
      url:
        "http://46.105.36.240:3000/users/" +
        localStorage.getItem("userId") +
        "/announcements",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access-token"),
      },
    };

    axios(config)
      .then((res) => {
         if (res.data=="") {
              this.tableEmpty=true
          } else {
             this.users = res.data.reverse();
          }
        
        this.loading = false;
          
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
this.error=true
        console.log(error);
      });
  },
  methods: {
    lockedAnn() {
      Swal.fire({
        icon: "error",
        title: "Oops... Traveled Has Been Reserverd!",
        text: "Contact DGA Client Service for more Info!",
      });
    },

    createAnn() {
      window.location.href = "/createAnnouncement";
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
          this.cni = res.data.cni;
          this.passport = "http://46.105.36.240:3000/passport/" + this.cni;
          this.ticket = res.data.ticket;
          this.tiket = "http://46.105.36.240:3000/tiket/" + this.ticket;
          this.covidtest = res.data.covidtest;
          this.covid = "http://46.105.36.240:3000/covidTest/" + this.covidtest;
          this.price = res.data.price;
          this.id = res.data.id;
          this.annlength = res.data.length;

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
          confirmButton: "btn btn-danger ml-3",
          cancelButton: "btn btn-success ",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Êtes-vous sûr?",
          text: "Vous ne pourrez pas revenir en arrière!",
          icon: "warning",
          confirmButtonText: "Oui, supprimer!",
          showCancelButton: true,
          cancelButtonText: "Non, Annuler!", 
          reverseButtons: true,
          
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
                window.location.reload();
              })
              .catch(function (error) {
                window.location.reload();
                console.log(error);
              });

            swalWithBootstrapButtons.fire(
              "Supprimé!",
              "Votre annonce a été supprimée.",
              "success"
            );
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Annulée",
              "Opération annulée :)",
              "error"
            );
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.create {
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  will-change: box-shadow, transform;
  background: radial-gradient(100% 100% at 100% 0%, #f0b07c 0%, #ff9100 100%);
  box-shadow: 0px 2px 4px rgb(247, 152, 43),
    0px 7px 13px -3px rgba(241, 188, 12, 0.993),
    inset 0px -3px 0px rgba(241, 103, 61, 0.795);
  padding: 0 32px;
  border-radius: 6px;
  color: #fff;
  height: 58px;
  width: 22%;
  float: right;
  margin: 10px 0 10px 0;
  font-size: 18px;
  text-shadow: 0 1px 0 rgba(241, 173, 94, 0.932);
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}
.create:hover {
  box-shadow: 0px 4px 8px rgb(255, 145, 1),
    0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #f37018;
  transform: translateY(-2px);
}
.create:active {
  box-shadow: inset 0px 3px 7px #ff7504;
  transform: translateY(2px);
}




.createButton {
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  will-change: box-shadow, transform;
  background: radial-gradient(100% 100% at 100% 0%, #f0b07c 0%, #ff9100 100%);
  box-shadow: 0px 2px 4px rgb(247, 152, 43),
    0px 7px 13px -3px rgba(54, 206, 248, 0.993),
    inset 0px -3px 0px rgba(241, 103, 61, 0.795);
  padding: 0 32px;
  border-radius: 6px;
  color: #fff;
  height: 58px;
  width: 200%;
  float: center;
  margin: 10px 0 10px 0;
  font-size: 18px;
  text-shadow: 0 1px 0 rgba(241, 173, 94, 0.932);
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}
.createButton:hover {
  box-shadow: 0px 4px 8px rgb(255, 145, 1),
    0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #f37018;
  transform: translateY(-2px);
}
.createButton:active {
  box-shadow: inset 0px 3px 7px #ff7504;
  transform: translateY(2px);
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