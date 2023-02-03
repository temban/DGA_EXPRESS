<template>
  <div style="">
    <div style="margin-left: 60px">
      <lognavVue />
    </div>
    <usersidebarVue />

    <b-modal id="modal-multi-payment" title="DGA Express" hide-footer>
      
      <div class="popover-container">
  <div class="popover-header">
    <span>Moyen de Paiement</span>
    <h6>5€ (3280 XAF) sera ajouté au prix total à des fins fiscales</h6>
  </div>
  
  <div class="payment-buttons">

    <button class="payment-button" @click="momo()">
      <i class="fa fa-mobile fa-2x" style="font-size:45px; left: -12px; top: 28px; position: absolute;" ></i>
      <span class="payment-button-text" style="margin-left: 36px;">Mobile Money</span>
    </button>

    <button class="payment-button"  v-on:click="card()">
      <i class="fa fa-credit-card fa-2x"></i>
       <span class="payment-button-text" style="margin-left: 55px;">Par Carte</span>
    </button>
    

    
    <div >
    </div>
  </div>
  
</div>
 
 </b-modal>





 


    <div>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Ma Réservation</h5>
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
                          <form id="Highlighted-form" class="col-sm-6 col-sm-offset-3">
                            <input v-model="annDtouserDtoId" type="hidden" />

                            <div class="form-group" v-if="paidReservation === true && confirm === true && userId !== annDtouserDtoId &&
                            annDtoStatus === 'ENABLED'">
                              <div class="controls">

                                <h6 style="display:flex;width:300px">Code de la transaction</h6>
                                <input v-model="revId" id="code" name="contactName"
                                  class="form-control requiredField Highlighted-label" type="text" readonly />
                                <a v-if="cop"><i v-on:click="copyText()" class="fa fa-copy mye"
                                    style="font-size:25px;padding-bottom:13px; margin-top: 37px;margin-left: -5px;color:green"></i> </a>

                                <a v-else><i v-on:click="copyText()" class="fa fa-copy mye"
                                    style="font-size:25px;padding-bottom:13px; margin-top: 37px;margin-left: -5px;"></i> </a>
                              </div>
                            </div>

                            <!-- End name input -->
                            <div class="form-group">
                              <div class="controls">
                                <h6>Propriétaire</h6>
                                <input v-model="owner" id="contact-mail" name="email" class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  " type="text" readonly />
                                <i class="fa fa-user"></i>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="controls">
                                <h6 style="display:flex;width:300px">Prix Total Des Kilos</h6>
                                <input v-model="totalprice" id="contact-mail" name="email" class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  " type="text" readonly />
                                <i class="fa fa-money"></i>
                              </div>
                            </div>
                            <div class="form-group" v-if="doc">
                              <div class="controls">
                                <h6 style="display:flex;width:300px">Prix Total Des Documents</h6>
                                <input v-model="docPric" id="contact-mail" name="email" class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  " type="text" readonly />
                                <i class="fa fa-money"></i>
                              </div>
                            </div>
                            <div class="form-group" v-if="pc">
                              <div class="controls">
                                <h6 style="display:flex;width:300px">Prix Total Des Ordinateurs</h6>
                                <input v-model="pcPrice" id="contact-mail" name="email" class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  " type="text" readonly />
                                <i class="fa fa-money"></i>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="controls">
                                <h6 style="display:flex;width:400px">Nom du destinataire</h6>
                                <input
                                  v-model="receiver"
                                  id="contact-mail"
                                  name="email"
                                  class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  "
                                  type="text"
                                  readonly
                                />
                                <i class="fa fa-user"></i>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="controls">
                                <h6 style="display:flex;width:400px">Numéro de téléphone du destinataire</h6>
                                <input
                                  v-model="tel"
                                  id="contact-mail"
                                  name="email"
                                  class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  "
                                  type="text"
                                  readonly
                                />
                                <i class="fa fa-phone"></i>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="controls">
                                <h6 style="display:flex;width:400px">Numéro d'identification du destinataire</h6>
                                <input
                                  v-model="cardNumber"
                                  id="contact-mail"
                                  name="email"
                                  class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  "
                                  type="text"
                                  readonly
                                />
                                <i class="fa fa-list-alt"></i>
                              </div>
                            </div>

                            <div class="form-group">
                              <div class="controls">
                                <h6>Date de réservation</h6>
                                <input v-model="date" id="contact-mail" name="email" class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  " type="text" readonly />
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="controls">
                                <h6>Ma description</h6>
                                <textarea v-model="description" id="contact-message" name="comments"
                                  placeholder="Your message" class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  " rows="6" readonly></textarea>
                                <i class="fa fa-comment"></i>
                              </div>
                            </div>
                            <!-- End textarea -->
                            <div style="display:flex;width:400px"> <hr /> </div>
                           
                            <h5 class="modal-title" id="exampleModalLabel" style="display:flex;width:300px">
                              Informations sur l'annonce
                            </h5>


                            <div class="form-group">
                              <div class="controls">
                                <h6>Voyageur</h6>
                                <input v-model="annDtoFirstName" id="contact-name" name="contactName" class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  " type="text" readonly />
                                <i class="fa fa-user" style="margin-bottom: -30"></i>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="controls">
                                <h6>Ville de départ</h6>
                                <input v-model="departuretown" id="contact-name" name="contactName" class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  " type="text" readonly />
                                <i class="fa fa-calendar" style="margin-bottom: -30px"></i>
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
                                <i class="fa fa-calendar" style="margin-bottom: -30px"></i>
                              </div>
                            </div>
                            <!-- End name input -->

                            <div class="form-group">
                              <div class="controls">
                                <h6>Date de départ</h6>
                                <input v-model="annDtoDeparturedate" id="contact-name" name="contactName" class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  " type="text" readonly />
                                <i class="fa fa-calendar" style="margin-bottom: -30px"></i>
                              </div>
                            </div>
                            <!-- End name input -->
                            <div class="form-group">
                              <div class="controls">
                                <h6>Date d'arrivée</h6>
                                <input v-model="annDtoArrivaldate" id="contact-name" name="contactName" class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  " data-new-placeholder="Your name" type="text" readonly />
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>

                            <div class="form-group">
                              <div class="controls">
                                <h6>Qté de kilo disponible</h6>
                                <input v-model="annDtoQty" id="contact-mail" name="email" class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  " type="email" readonly />
                                <i class="fa fa-balance-scale" aria-hidden="true"></i>
                              </div>

                              <div class="form-group1">
                                <div class="controls">
                                  <h6>prix / kg</h6>
                                  <input v-model="annDtoPrice" id="contact-name" name="contactName" class="
                                      form-control
                                      requiredField
                                      Highlighted-label
                                    " type="text" readonly />
                                  <i class="fa fa-money"></i>
                                </div>
                              </div>
                            </div>
                            <!-- End email input -->
                            <div class="form-group">
                              <div class="controls">
                                <h6>Restriction</h6>
                                <textarea v-model="restriction" id="contact-message" name="comments"
                                  placeholder="Your message" class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  " rows="6" readonly></textarea>
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

    <div>
      <div class="modal fade" id="exampleModal0" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Payment</h5>
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

                          <form @submit.prevent="makePayment(item)" id="searchthis" style="display: inline">
                            <div class="btn-wrapper">
                              <input id="namanyay-search-box" size="40" type="text" placeholder="Transaction Code! "
                                v-model.number="amount" />
                              <input id="namanyay-search-btn" value="Payer" type="submit" />
                            </div>

                          </form>

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

      <div style="margin-left: 100px; margin-bottom: 30px; background-color: white; width: 90%;">
        <!--<h3 class="mt-2 mb-3 float-left text-primary">My Travel Reservations</h3>
     <button
          @click="createAnn()"
          style="display: flex; align-items: center; justify-content: left"
          class="create"
        >
          <i
            class="fa fa-plus"
            style="
              font-size: 20px;
              color: white;
              margin-top: 20px;
              margin-left: -22px;
            "
          ></i>
          <span style="font-size: 20px; margin-left: -10px">New Travel</span>
        </button>-->

        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Voyageur</th>
              <th scope="col">Départ</th>
              <th scope="col">Destination</th>
              <th scope="col">Réservateur</th>
              <th scope="col">Doc</th>
              <th scope="col">Qté réservée</th>
              <th scope="col">ordinateur</th>
              <th scope="col">Statut</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <th colspan="8">
            <div v-if="error">
              <tableEmptyVue />
            </div>
          </th>

          <tbody style="text-transform: capitalize; margin:30px; position:relative">
            <tr v-for="user in users" :key="user.id" >

              <a v-on:click="view1(user.announcementDto.id, user.announcementDto.userDto.id)"
                data-target="#exampleModal12" data-toggle="modal">
                <img v-if="user.announcementDto.userDto.profileimgage !== ''" v-bind:src="
                  urel+'/' +
                  user.announcementDto.userDto.profileimgage
                " style="width: 60px; height: 60px; border-radius: 30px" />
                <img v-else src="@/assets/img/hotels/59710428.png"
                  style="width: 60px; height: 60px; border-radius: 30px" />
              </a>

              <td>{{  user.announcementDto.departuretown.slice(0, 14) }}...</td>
              <td>{{  user.announcementDto.destinationtown.slice(0, 14)  }}...</td>
              <td>{{  user.userDto.firstName+ " "+ user.userDto.lastName}}</td>

              <td v-if="user.documents" >
                <div style="position:relative;margin-left:15px">{{user.quantityDocument}}</div> 
              </td>
              <td v-else>
                <i class="fa fa-remove" style="font-size: 25px; color: red"></i>
              </td>
              <td style="position:relative; padding-right:-40px"> <div style="position:relative;margin-left:25px">{{  user.quantitykilo  }}</div> </td>
              <td v-if="user.computer">
                <div style="position:relative;margin-left:25px">{{user.quantityComputer}}</div> 
                
              </td>
              <td v-else >
                <i class="fa fa-remove" style="font-size: 25px; color: red"></i>
              </td>


              <td v-if="userId === user.announcementDto.userDto.id && user.paid && user.track == 'complete'  && user.confirm">
                <span  class="badge badge-primary font-weight-100">vous avez été payés</span>

              </td>
              <td v-else-if="userId !== user.userDto.id &&user.confirm && user.track !== 'complete'">
                <span class="badge badge-success font-weight-100">Confirmé</span>
              </td>
              <td v-else-if="userId !== user.userDto.id && user.confirm && user.track === 'complete'">
                <span class="badge badge-primary font-weight-100">Achevé</span>
              </td>

              <td v-else-if="userId === user.userDto.id && user.track === 'complete'" >
                <span class="badge badge-primary font-weight-100">Achevé</span>
            </td>
            <td v-else-if="userId === user.userDto.id && user.confirm && user.paidReservation">
                <span class="badge badge-primary font-weight-100">Ok</span>
              </td>
              <td v-else-if="userId === user.userDto.id && user.confirm">
             
                <a type="submit" name="learn" value="myimage" style="border-radius: 30px" v-b-modal.modal-multi-payment @click="beforPay(user)"   
                    >
                  <img src="@/assets/img/hotels/pay.jpg" class="rounded-circle img-fluid" style="
                      image-resolution: 3000000dpi;
                      background-color: #000;
                      background-position: center;
                      background-size: cover;
                      background-repeat: no-repeat;
                      max-width: 100%;
                      max-height: 100%; 
                      height: 60px;
                      width: 55px;
                      margin-bottom: -10px;
                      margin-top: -10px;
                      border: 2px solid black;"/>  
                </a>
                
    

              </td>
              <td v-else>
                <span class="badge badge-warning font-weight-100">Attente de confirmation</span>
              </td>
            
              <td>
                <form>
                  <!-- <button style="height:45px; width:40px;  margin-right:5px;" v-on:click="deleteUser(user.id)" type="submit" class="btn btn-sm btn-danger"><i class="fa fa-trash" style="font-size:20px"></i></button>
              -->
                  <button v-if="user.announcementDto.status === 'ENABLED'" v-on:click="view(user.id)"
                    data-target="#exampleModal" data-toggle="modal" style="height: 40px; width: 35px; margin-right: 5px"
                    type="button" class="btn btn-sm btn-info mr-1">
                    <i class="fa fa-eye" style="font-size: 20px"></i>
                  </button>
                  <button v-else-if="
                    user.announcementDto.status === 'DISABLED' &&
                    user.status === 'DISABLED'
                  " v-on:click="lockedRev()" style="height: 40px; width: 35px; margin-right: 5px" type="button"
                    class="btn btn-sm btn-danger mr-1">
                    <i class="fa fa-trash" style="font-size: 20px"></i>
                  </button>
                  <button v-on:click="lockedAnn()" v-else style="height: 40px; width: 35px; margin-right: 5px"
                    type="button" class="btn btn-sm btn-danger mr-1">
                    <i class="fas fa-lock" style="font-size: 20px"></i>
                  </button>

                  <router-link v-if="
                    userId === user.userDto.id &&
                    user.announcementDto.status === 'ENABLED' &&
                    !user.confirm
                  " class="btn btn-sm btn-info mr-1" :to="{ name: 'EditReservation', params: { id: user.id } }"
                    style="height: 40px; width: 35px"><i class="fa fa-pencil" style="font-size: 20px"></i></router-link>
                  <button v-else-if="
                    user.announcementDto.status === 'DISABLED' &&
                    user.status === 'DISABLED'
                  " v-on:click="lockedRev()" style="height: 40px; width: 35px; margin-right: 5px" type="button"
                    class="btn btn-sm btn-danger mr-1">
                    <i class="fa fa-trash" style="font-size: 20px"></i>
                  </button>
                  <button v-on:click="lockedAnn()" v-else style="height: 40px; width: 35px; margin-right: 5px"
                    type="button" class="btn btn-sm btn-danger mr-1">
                    <i class="fas fa-user-lock" style="font-size: 18px; margin-right: 5px"></i>
                  </button>

                  <button v-if="
                    userId === user.userDto.id &&
                    user.announcementDto.status === 'ENABLED' &&
                    user.status === 'ENABLED' && user.track !== 'complete'
                  " v-on:click="chatStorDataMyRevReceiver2(user.id)"
                    style="height: 40px; width: 35px; margin-right: 5px" type="button" class="btn btn-sm btn-info mr-1">
                    <i class="fa fa-commenting" aria-hidden="true" style="font-size: 20px"></i>
                  </button>
                  <button v-else-if="
                    userId === user.announcementDto.userDto.id &&
                    user.announcementDto.status === 'ENABLED' &&
                    user.status === 'ENABLED' && user.track !== 'complete'
                  " v-on:click="chatStorDataMyAnnReceiver1(user.id)"
                    style="height: 40px; width: 35px; margin-right: 5px" type="button" class="btn btn-sm btn-info mr-1">
                    <i class="fa fa-commenting" aria-hidden="true" style="font-size: 20px"></i>
                  </button>
                  <button v-on:click="lockedAnn()" v-else style="height: 40px; width: 35px; margin-right: 5px"
                    type="button" class="btn btn-sm btn-danger mr-1">
                    <i class="fas fa-user-lock" style="font-size: 18px; margin-right: 5px"></i>
                  </button>
                  <button v-if="
                    userId !== user.userDto.id &&
                    user.announcementDto.status === 'ENABLED' &&
                    user.status === 'ENABLED' &&
                    !user.confirm
                  " type="button" v-on:click="confirmReservation(user.id)" style="height: 40px; width: 35px"
                    class="btn btn-sm btn-success mr-1">
                    <i class="fa fa-check" style="font-size: 20px"></i>
                  </button>
                  <button v-else v-on:click="lockedRev()" style="height: 40px; width: 35px; margin-right: 5px"
                    type="button" class="btn btn-sm btn-danger mr-1">
                    <i class="fas fa-user-lock" style="font-size: 18px; margin-right: 5px"></i>
                  </button>

                  <!--
            <button v-if="userId!==user.announcementDto.id && user.announcementDto.status==='ENABLED' " style="height:45px; width:40px;  margin-right:5px;" type="button" class="btn btn-sm btn-info mr-1">
                  	<i class="far fa-check-circle" style="font-size:20px"></i>
                  </button>
                    <button  v-on:click="locked()"  v-else-if="serId!==user.announcementDto.id && user.announcementDto.status==='ENABLED' " style="height:45px; width:40px;  margin-right:5px;" type="button" class="btn btn-sm btn-danger mr-1">
                  	<i class="far fa-check-clock" style="font-size:20px"></i>
                  </button>  
                  <button  v-on:click="locked()"  v-else style="height:45px; width:40px;  margin-right:5px;" type="button" class="btn btn-sm btn-danger mr-1">
                  	<i class="fas fa-user-lock" style="font-size:20px"></i>
                  </button> 
                  --->
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Fim tabela -->

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
  name: "MyReservations",
  data() {
    return {
      paidReservation:"",
      urel:this.$url,
      firstName:"",
      revlength:"",
      pcPrice:"",
      docPric:"",
      total_Rev:"",
      articlelength:"",
      travellength:"",
      lastName:"",
      stars:"",
      comments:"",
      amount: this.totalprice,
      loading: true,
      error: false,
      users: [],
      userId: localStorage.getItem("userId"),
      id: "",
      date: "",
      departuretown: "",
      destinationtown: "", 
      cop: false,
      description: "",
      annDtoDeparturedate: "",
      annDtoArrivaldate: "",
      annDtoFirstName: "",
      annDtoQty: "",
      restriction: "",
      annDtoPrice: "",
      annDtoid: "",
      annDtoStatus: "",
      annDtouserDtoId: "",
      profileimgage: "",
      totalprice: "",
      pic: "",
      owner: "",
      track: "",
      confirm: '',
      revId: "",
      infoUser:{},
      total:0,
      cardNumber:'',
      tel:'',
      receiver:'',
      doc:"",
      pc:"",
    };
  },
  components: {
    lognavVue,
    usersidebarVue,
    footerVue,
    tableEmptyVue
  },
mounted(){
  window.localStorage.removeItem('addreservation');
  window.localStorage.removeItem('confirmReservation');
},
  async created() {
    var axios = require("axios");

    var config = {
      method: "get",
      url:
        this.$url+"/user/" +
        localStorage.getItem("userId") +
        "/reservations",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access-token"),
      },
    };

    axios(config)
      .then((res) => {
        if (res.data == "") {
          this.error = true
        } else {
          this.users = res.data.reverse();
        }
 console.log("paiy", this.users)
        this.loading = false;
      })
      .catch(function (error) {
        this.error = true

        console.log(error);
        localStorage.clear()
        window.location.href = "/"
      });
      this.infoUser = JSON.parse(localStorage.getItem("infoUser"))
  },
  methods: {
   
    copyText() {
      navigator.clipboard.writeText(this.revId).then(() => {
        this.cop = true;
        alert('text copied: ' + this.revId)
      })
    },
    confirmReservation(id) {
      Swal.fire({
        title: "Confirmer le voyage",
        showDenyButton: true,
        confirmButtonText: "Confirmer",
        denyButtonText: `Annuler`,
        reverseButtons: true,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          var axios = require("axios");
          var config = {
            method: "get",
            url: this.$url+"/reservations/" + id,
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("access-token"),
            },
          };

          axios(config)
            .then((res) => {
              res.data.confirm = true;
              var data0 = JSON.stringify(res.data);
              var config0 = {
                method: "put",
                url: this.$url+"/update/reseravtion",
                headers: {
                  "Content-Type": "application/json",
                  Authorization:
                    "Bearer " + localStorage.getItem("access-token"),
                },
                data: data0,
              };

              axios(config0)
                .then(function (response) {
                  console.log(response);
                  window.location.reload();
                })
                .catch(function (error) {
                  console.log(error);
                  Swal.fire("Échec!", "Quelque chose s'est mal passé!.", "error");
                });

            })
            .catch(function (error) {
              console.log(error);
            });

          /*var axios = require('axios');
var data = JSON.stringify(
  {
    "id": this.id,
   "departuredate": this.departuredate,
  "arrivaldate": this.arrivaldate,
  "departuretown": this.departuretown,
  "destinationtown": this.destinationtown,
  "quantity": this.quantity,
  "computer": this.computer,
  "restriction": this.restriction,
  "document": this.document,
  "status": "ENABLED",
  "cni": this.cni,
  "ticket": this.ticket,
  "covidtest": this.covidtest,
  "price": this.price,
  "validation": true,
  "userDto": {
    "id": this.userDtoId,
    "firstName": this.firstName,
    "lastName": this.lastName,
    "pseudo": this.pseudo,
    "email": this.email,
    "roleDtos": [
      {
        "id": 2,
        "name": "ROLE_CLIENT"
      }
    ],
    "status": "ENABLED"
    }
  });

var config = {
  method: 'put',
  url: this.$url+'/update/announcement',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer '+ localStorage.getItem('access-token') },
  data : data
};

axios(config)
.then(function (response) {
  
      console.log(JSON.stringify(response.data.id));    
  console.log(JSON.stringify(response.data.departuredate));
    console.log(JSON.stringify(response.data.arrivaldate));
  console.log(JSON.stringify(response.data.departuretown));
  console.log(JSON.stringify(response.data.destinationtown));
    window.location.href = "/MyAnnouncements"
})
.catch(function (error) {
  console.log(error);
   Swal.fire(
      'Failed!',
      'Something went wrong!.',
      'error'
    )
    
});*/
          Swal.fire("Validé!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Aucun changement!", "", "info");
        }
      });
    },
    lockedAnn() {
      Swal.fire({
        icon: "error",
        title: "Oops... Announcement Has Been Deletet!",
        text: "Contact DGA Client Service for more Info!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    },
    lockedRev() {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Oops... Reservation Has Been Deletet!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    },
    chatStorDataMyAnnReceiver1(id) {
      var axios = require("axios");
      var config = {
        method: "get",
        url: this.$url+"/reservations/" + id,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
      };

      axios(config)
        .then((res) => {
          this.annDtoStatus = res.data.announcementDto.status;
          this.date = res.data.date;
          this.description = res.data.description;
          this.annDtoid = res.data.announcementDto.id;
          this.annDtoDeparturedate = res.data.announcementDto.departuredate;
          this.annDtoArrivaldate = res.data.announcementDto.arrivaldate;
          this.annDtoFirstName = res.data.announcementDto.userDto.firstName;
          this.annDtoQty = res.data.announcementDto.quantity;
          this.restriction = res.data.announcementDto.restriction;
          this.annDtoPrice = res.data.announcementDto.price;
          this.annDtouserDtoId = res.data.announcementDto.userDto.id;

          localStorage.setItem("Rev-id", res.data.id);
          localStorage.setItem("Rev-description", res.data.description);
          localStorage.setItem("Rev-documents", res.data.documents);
          localStorage.setItem("Rev-computer", res.data.computer);
          localStorage.setItem("Rev-quantitykilo", res.data.quantitykilo);
          localStorage.setItem("Rev-date", res.data.date);
          localStorage.setItem("Rev-totalprice", res.data.totalprice);

          localStorage.setItem("AnnRev-id", res.data.announcementDto.id);
          localStorage.setItem(
            "AnnRev-departuredate",
            res.data.announcementDto.departuredate
          );
          localStorage.setItem(
            "AnnRev-arrivaldate",
            res.data.announcementDto.arrivaldate
          );
          localStorage.setItem(
            "AnnRev-departuretown",
            res.data.announcementDto.departuretown
          );
          localStorage.setItem(
            "AnnRev-destinationtown",
            res.data.announcementDto.destinationtown
          );
          localStorage.setItem(
            "AnnRev-restriction",
            res.data.announcementDto.restriction
          );
          localStorage.setItem(
            "AnnRev-quantity",
            res.data.announcementDto.quantity
          );
          localStorage.setItem("AnnRev-price", res.data.announcementDto.price);
          localStorage.setItem(
            "AnnRev-computer",
            res.data.announcementDto.computer
          );
          localStorage.setItem(
            "AnnRev-document",
            res.data.announcementDto.document
          );

          localStorage.setItem("receiver-id", res.data.userDto.id);
          localStorage.setItem(
            "receiver-firstName",
            res.data.userDto.firstName
          );
          localStorage.setItem("receiver-lastName", res.data.userDto.lastName);
          localStorage.setItem("receiver-email", res.data.userDto.email);
          localStorage.setItem("receiver-pseudo", res.data.userDto.pseudo);
          localStorage.setItem(
            "receiver-prifil-image",
            res.data.userDto.profileimgage
          );

          window.location.href = "/chatRoomMyRev";
          console.log(
            JSON.stringify("blaise" + res.data.announcementDto.status)
          );
          console.log(
            JSON.stringify("blaise" + res.data.announcementDto.status)
          );
          console.log(
            JSON.stringify("blaise" + res.data.announcementDto.status)
          );
          //localStorage.setItem('refresh-token', refreshtoken);
          //localStorage.setItem('access-token', accesstoken);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    chatStorDataMyRevReceiver2(id) {
      var axios = require("axios");
      var config = {
        method: "get",
        url: this.$url+"/reservations/" + id,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
      };

      axios(config)
        .then((res) => {
          this.annDtoStatus = res.data.announcementDto.status;
          this.date = res.data.date;
          this.description = res.data.description;
          this.annDtoid = res.data.announcementDto.id;
          this.annDtoDeparturedate = res.data.announcementDto.departuredate;
          this.annDtoArrivaldate = res.data.announcementDto.arrivaldate;
          this.annDtoFirstName = res.data.announcementDto.userDto.firstName;
          this.annDtoQty = res.data.announcementDto.quantity;
          this.restriction = res.data.announcementDto.restriction;
          this.annDtoPrice = res.data.announcementDto.price;
          this.annDtouserDtoId = res.data.announcementDto.userDto.id;

          localStorage.setItem("Rev-id", res.data.id);
          localStorage.setItem("Rev-description", res.data.description);
          localStorage.setItem("Rev-documents", res.data.documents);
          localStorage.setItem("Rev-computer", res.data.computer);
          localStorage.setItem("Rev-quantitykilo", res.data.quantitykilo);
          localStorage.setItem("Rev-date", res.data.date);
          localStorage.setItem("Rev-totalprice", res.data.totalprice);

          localStorage.setItem("AnnRev-id", res.data.announcementDto.id);
          localStorage.setItem(
            "AnnRev-departuredate",
            res.data.announcementDto.departuredate
          );
          localStorage.setItem(
            "AnnRev-arrivaldate",
            res.data.announcementDto.arrivaldate
          );
          localStorage.setItem(
            "AnnRev-departuretown",
            res.data.announcementDto.departuretown
          );
          localStorage.setItem(
            "AnnRev-destinationtown",
            res.data.announcementDto.destinationtown
          );
          localStorage.setItem(
            "AnnRev-restriction",
            res.data.announcementDto.restriction
          );
          localStorage.setItem(
            "AnnRev-quantity",
            res.data.announcementDto.quantity
          );
          localStorage.setItem("AnnRev-price", res.data.announcementDto.price);
          localStorage.setItem(
            "AnnRev-computer",
            res.data.announcementDto.computer
          );
          localStorage.setItem(
            "AnnRev-document",
            res.data.announcementDto.document
          );

          localStorage.setItem(
            "receiver-id",
            res.data.announcementDto.userDto.id
          );
          localStorage.setItem(
            "receiver-firstName",
            res.data.announcementDto.userDto.firstName
          );
          localStorage.setItem(
            "receiver-lastName",
            res.data.announcementDto.userDto.lastName
          );
          localStorage.setItem(
            "receiver-email",
            res.data.announcementDto.userDto.email
          );
          localStorage.setItem(
            "receiver-pseudo",
            res.data.announcementDto.userDto.pseudo
          );
          localStorage.setItem(
            "receiver-prifil-image",
            res.data.announcementDto.userDto.profileimgage
          );
          window.location.href = "/chatRoomMyRev";
          console.log(
            JSON.stringify("blaise" + res.data.announcementDto.status)
          );
          //localStorage.setItem('refresh-token', refreshtoken);
          //localStorage.setItem('access-token', accesstoken);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    view1(id, id2) {


      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Bearer " + localStorage.getItem('access-token'));

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(this.$url+"/user/" + id2 + "/articles/", requestOptions)
        .then(response => response.text())
        .then(result => {
          this.articlelength = JSON.parse(result).length;
          console.log(result);
        })
        .catch(error => {

          console.log('error', error)
        });


      var axios1 = require("axios");
      var config1 = {
        method: "get",
        url: this.$url+"/users/" + id2 + "/announcements",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
      };
      axios1(config1)
        .then((res) => {
          this.travellength = res.data.length;
          console.log(res.data.length);
        })
        .catch(function (error) {
          console.log(error);
        });

      var axios3 = require("axios");
      var config3 = {
        method: "get",
        url: this.$url+"/user/" + id2 + "/reservations",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
      };

      axios3(config3)
        .then((res) => {
          this.revlength = res.data.length;
          console.log(res.data.length);
        })
        .catch(function (error) {
          console.log(error);
        });

      var axioscomment = require("axios");
      var configcomment = {
        method: "get",
        url: this.$url+"/user/comments/" + id,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
      };

      axioscomment(configcomment)
        .then((res) => {
          this.comments = res.data;
        })
        .catch(function (error) {
          this.loading = false;
          Swal.fire({
            icon: "warning",
            title: "Oops...No Reservation found!",
          });
          console.log(error);
        });

      var axios = require("axios");
      var config = {
        method: "get",
        url: this.$url+"/announcement/" + id + "/users",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
      };

      axios(config)
        .then((res) => {
          this.profileimgage = res.data.userDto.profileimgage;
          this.stars = res.data.userDto.stars;
          this.pic = this.$url+"/" + this.profileimgage;
          this.firstName = res.data.userDto.firstName;
          this.lastName = res.data.userDto.lastName;
          this.pseudo = res.data.userDto.pseudo;
          this.departuredate = res.data.departuredate;
          this.arrivaldate = res.data.arrivaldate;
          this.departuretown = res.data.departuretown;
          this.destinationtown = res.data.destinationtown;
          this.restriction = res.data.restriction;
          this.quantity = res.data.quantity;
          this.price = res.data.price;
          this.document = res.data.document;
          this.computer = res.data.computer;
          this.annlength = res.data.length;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    view(id) {
      var axios = require("axios");
      var config = {
        method: "get",
        url: this.$url+"/reservations/" + id,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
      };

      axios(config)
        .then((res) => { 
          
          var requestOptions1 = { method: "GET", redirect: "follow" };

fetch(this.$url+"/sub/informations/view", requestOptions1)
  .then((response) => response.text())
  .then((result) => {
      this.subInfo = JSON.parse(result)[0];
      this.subInfo.computerPrice;
  this.subInfo.documentPrice;
  console.log("sub",   this.subInfo.documentPrice, this.subInfo.computerPrice)


  this.revId = res.data.id;
  this.doc = res.data.documents;
  this.pc = res.data.computer;
          this.confirm = res.data.confirm;
          this.track = res.data.track;
          this.owner = res.data.userDto.firstName + "  " + res.data.userDto.lastName;
          this.annDtoStatus = res.data.announcementDto.status;
          this.date = res.data.date;
          this.description = res.data.description;
          this.annDtoid = res.data.announcementDto.id;
          this.annDtoDeparturedate = res.data.announcementDto.departuredate;
          this.annDtoArrivaldate = res.data.announcementDto.arrivaldate;
          this.annDtoFirstName = res.data.announcementDto.userDto.firstName + "  " + res.data.announcementDto.userDto.lastName;

          this.stars = res.data.announcementDto.userDto.stars;
          this.departuretown = res.data.announcementDto.departuretown;
          this.destinationtown = res.data.announcementDto.destinationtown;
          this.annDtoQty = res.data.announcementDto.quantity;
          this.restriction = res.data.announcementDto.restriction;
          this.annDtoPrice = res.data.announcementDto.price;
          this.annDtouserDtoId = res.data.announcementDto.userDto.id;
          this.profileimgage = res.data.announcementDto.userDto.profileimgage;
          this.totalprice = res.data.totalprice;
          this.pic = this.$url+"/" + this.profileimgage;
          this.receiver = res.data.receiver;
          this.cardNumber =  res.data.receivernumbercni;
          this.tel =  res.data.tel;
          this.paidReservation = res.data.paidReservation,

          this.docPric = res.data.quantityDocument * this.subInfo.documentPrice;
          this.pcPrice = res.data.quantityComputer * this.subInfo.computerPrice;
          this.totalprice = res.data.totalprice;

          this.total_Rev = (res.data.quantityDocument * this.subInfo.documentPrice) + (res.data.quantityComputer * this.subInfo.computerPrice) + res.data.totalprice + 3280;
  })
  .catch((error) => console.log("error", error));
    //localStorage.setItem('refresh-token', refreshtoken);
          //localStorage.setItem('access-token', accesstoken);
        })
        .catch(function (error) {
          console.log(error);
        });



    },
card(){
  
this.carteBancaire();
this.beforPay();
},


    carteBancaire() {
      
  window.location.href = "/myReservationCardPayment";
},
    beforPay(item){ 

      var requestOptions1 = { method: "GET", redirect: "follow" };

fetch(this.$url+"/sub/informations/view", requestOptions1)
.then((response) => response.text())
.then((result) => {
this.subInfo = JSON.parse(result)[0];
this.subInfo.computerPrice;
this.subInfo.documentPrice;
console.log("revPayId",item.id);
    localStorage.setItem("revPayId",item.id);
console.log("sub",this.subInfo.currency,   this.subInfo.documentPrice, this.subInfo.computerPrice)

if( this.subInfo.currency ==="XAF"){

var axios = require("axios");
var config = {
  method: "get",
  url: this.$url+"/reservations/" + item.id,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("access-token"),
  },
};

axios(config)
  .then((res) => { 
    this.annDtoQty = res.data.announcementDto.quantity;
    this.annDtoPrice = res.data.announcementDto.price;
    this.totalprice = res.data.totalprice;


    this.total_Rev = ((res.data.quantityDocument * this.subInfo.documentPrice) + (res.data.quantityComputer * this.subInfo.computerPrice) + this.totalprice +3280)/660;
})
 


.catch((error) => console.log("error", error));
//localStorage.setItem('refresh-token', refreshtoken);
    //localStorage.setItem('access-token', accesstoken);
 

}else if(this.subInfo.currency ==="€"){
var axios1 = require("axios");
var config1 = {
  method: "get",
  url: this.$url+"/reservations/" + item.id,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("access-token"),
  },
};

axios1(config1)
  .then((res) => { 
    this.annDtoQty = res.data.announcementDto.quantity;
    this.annDtoPrice = res.data.announcementDto.price;
    this.totalprice = res.data.totalprice;
    this.total_Rev = (res.data.quantityDocument * this.subInfo.documentPrice) + (res.data.quantityComputer * this.subInfo.computerPrice) + this.totalprice +5;

  })
.catch((error) => console.log("error", error));
//localStorage.setItem('refresh-token', refreshtoken);
    //localStorage.setItem('access-token', accesstoken);
 

}

 
  })
  .catch(function (error) {
    console.log(error);
  });

  console.log("totalPrice", this.total_Rev);
  localStorage.setItem("Payment_total_Price", this.total_Rev);


      this.totalPrice = this.total_Rev;
      this.revPayId = item.id;
     this.departuretown = item.announcementDto.departuretown;
     this.destinationtown = item.announcementDto.destinationtown;
     this.departuredate = item.announcementDto.departuredate;
     this.arrivaldate = item.announcementDto.arrivaldate;
     this.names = item.announcementDto.userDto.firstName+" "+item.announcementDto.userDto.lastName;
     this.profileImage = item.announcementDto.userDto.profileimgage;
     this.quantityDocument = item.quantityDocument;
     this.quantityComputer = item.quantityComputer;
     this.quantitykilo = item.quantitykilo;

    this.description = item.description;

     console.log("departuretown",this.departuretown);
     localStorage.setItem("Payment_departuretown", this.departuretown);

     console.log("destinationtown",this.destinationtown);
     localStorage.setItem("Payment_destinationtown", this.destinationtown);

     console.log("departuredate",this.departuredate);
     localStorage.setItem("Payment_departuredate", this.departuredate);

     
     console.log("arrivaldate",this.arrivaldate);
     localStorage.setItem("Payment_arrivaldate", this.arrivaldate);

     console.log("names",this.names);
     localStorage.setItem("Payment_name", this.names);

     console.log("quantityDocument",this.quantityDocument);
     localStorage.setItem("Payment_quantityDocument", this.quantityDocument);

     console.log("quantityComputer",this.quantityComputer);
     localStorage.setItem("Payment_quantityComputer", this.quantityComputer);

     console.log("quantitykilo",this.quantitykilo);
     localStorage.setItem("Payment_quantitykilo", this.quantitykilo);


     console.log("description",this.description);
     localStorage.setItem("Payment_description", this.description);

     console.log("profileImage",this.profileImage);
     localStorage.setItem("Payment_profileImage", this.profileImage);
    },
    momo() {

          var requestOptions1 = { method: "GET", redirect: "follow" };

fetch(this.$url+"/sub/informations/view", requestOptions1)
  .then((response) => response.text())
  .then((result) => {
    this.subInfo = JSON.parse(result)[0];
    this.subInfo.computerPrice;
  this.subInfo.documentPrice;
      
  console.log("sub",this.subInfo.currency,   this.subInfo.documentPrice, this.subInfo.computerPrice)

if( this.subInfo.currency ==="XAF"){
 
    var axios = require("axios");
      var config = {
        method: "get",
        url: this.$url+"/reservations/" + this.payRvId,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
      };

      axios(config)
        .then((res) => { 
          this.annDtoQty = res.data.announcementDto.quantity;
          this.annDtoPrice = res.data.announcementDto.price;
          this.totalprice = res.data.totalprice;


          this.total_Rev = (res.data.quantityDocument * this.subInfo.documentPrice) + (res.data.quantityComputer * this.subInfo.computerPrice) + this.totalprice +3280;
  })
  .catch((error) => console.log("error", error));
    //localStorage.setItem('refresh-token', refreshtoken);
          //localStorage.setItem('access-token', accesstoken);
       

}else if(this.subInfo.currency ==="€"){
  var axios1 = require("axios");
      var config1 = {
        method: "get",
        url: this.$url+"/reservations/" + this.payRvId,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
      };

      axios1(config1)
        .then((res) => { 
          this.annDtoQty = res.data.announcementDto.quantity;
          this.annDtoPrice = res.data.announcementDto.price;
          this.totalprice = res.data.totalprice;
          this.total_Rev =          ((res.data.quantityDocument * this.subInfo.documentPrice) + (res.data.quantityComputer * this.subInfo.computerPrice) + this.totalprice +5)*660;

        })
  .catch((error) => console.log("error", error));
    //localStorage.setItem('refresh-token', refreshtoken);
          //localStorage.setItem('access-token', accesstoken);
       

}    
        })
        .catch(function (error) {
          console.log(error);
        });

        
      let t = Math.floor(Math.random() * 100000000).toString()
      this.to =100;
      console.log(t);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      let corps = {
        "apikey": "105244761630ded20620d71.99923870",
        "site_id": "798029",
        "transaction_id": t,
        "mode": "PRODUCTION",
        "amount":  this.total_Rev,
        "currency": "XAF",
        "alternative_currency": "USD",
        "description": "Pour la reservation du "+ this.departuredate,
        "customer_id": this.infoUser.id,
        "customer_name": `${this.infoUser.firstName} ${this.infoUser.lastName}`,
        "customer_surname": this.infoUser.pseudo,
        "customer_email": this.infoUser.email,
        "customer_phone_number": this.infoUser.email,
        "customer_address": "",
        "customer_city": "",
        "customer_country": "",
        "customer_state": "",
        "customer_zip_code": "",
        "notify_url": "https://webhook.site/" + this.infoUser.id,
        "return_url": "http://localhost:8080/MyReservations",
        "channels": "ALL",
        "metadata": "user1",
        "lang": "FR",
        "invoice_data": {
          "voyageur":this.travelPlaces,
          "traget": "De "+this.departuretown+" à "+this.destinationtown,
          "receveur": this.receiver+"; CNI: "+ this.receivernumbercni
        }
      }
      
      console.log(corps.invoice_data)

      var raw = JSON.stringify(corps);

      var requestOptions = {
        method: 'POST', 
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://api-checkout.cinetpay.com/v2/payment", requestOptions)
        .then(response => response.text())
        .then(result => {
          let res = JSON.parse(result)
          console.log(res)
          window.open(res.data.payment_url, '_blank');
          window.location.reload();
        })
        .catch(error => console.log('error', error));


     
    },



    async deleteUser(id) {
      var axios = require("axios");

      var config = {
        method: "delete",
        url: this.$url+"/user/" + id + "/reservations",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          localStorage.clear();
          window.location.href = "/";
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600);

$popover-container-color: #fff;
$back-button-background: #999;
$back-button-color: #fff;
$hover-color: #5d9cec;
$method-button-color: #999;


.popover-container {

  .popover-header {
    flex: 1;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
  }

  .payment-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0;
    
    .payment-button {
      display: flex;
      align-items: center;
      position: relative;
      min-width: 40%;
      margin: 3px;
      padding: 15px 0 15px 0;
      border: 1px solid $method-button-color;
      border-radius: 5px;
      color: $method-button-color;
      font-weight: 300;
      
      &:last-child {
        margin: 10px 0;
      }
      
      &:hover {
        background-color: $hover-color;
        color: $popover-container-color;
        cursor: pointer;
      }
      
      &:hover i {
        color: $popover-container-color;
      }
      
      i {
        font-size: 30px;
        position: absolute;
        top: 60%;
        transform: translateY(-50%);
        color: $hover-color;
      }
      
      .payment-button-text {
        margin: 0 auto;
        font-size: 20px;
      }
    }
  }
}
.h6 {
  font-size: 18px;
  font-weight: 600;
}


.contact-item .icon {
  display: block;
  font-size: 48px;
  color: #75e1f7;
  text-shadow: -2px 2px 0 rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.contact-item .icon:hover {
  color: #d9dedf;
  -webkit-transform: scale(1.3) translateY(-10px);
  transform: scale(1.3) translateY(-10px);
}

.bl_form {}

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
  height: 40px;
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
  margin-top: 31px;
  color: rgb(255, 115, 0);
  font-size: 24px;
  line-height: 52px;
  text-align: center;
  font-weight: 300;
  -webkit-transition: color 0.3s ease-out;
  transition: color 0.3s ease-out;
}

#Highlighted-form .form-group1 [class*="fa"] {
  display: block;
  width: 45px;
  position: absolute;
  top: 0;
  left: 5px;
  margin-top: 110px;
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
  width: 20%;
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

.h6 {
  font-size: 18px;
  font-weight: 600;
}

.mye {
  position: relative;
  display: flex;
  height: 42px;
  align-items: center;
  justify-content: center;
  background: #D1D1D1;
}

.cop {
  color: #0f0;
}

.row:after {
    content: "";
    display: table;
    clear: both;
     opacity: 2;
  }

  pan
  {
    display:block;
    position:absolute;
    top:calc(50% - 2px);
    left:50%;
    width:50%;
    height:4px;
    background:transparent;
    transform-origin:left;
    animation:animate 2s linear infinite;
  }
  pan:before
  {
    content:'';
    position:absolute;
    width:16px;
    height:16px;
    border-radius:50%;
    background:#fff000;
    top:-6px;
    right:-8px;
    box-shadow:0 0 20px #fff000;
  }
  @keyframes animateC
  {
    0%
    {
      transform:rotate(0deg);
    }
    100%
    {
      transform:rotate(360deg);
    }
  }
  @keyframes animate
  {
    0%
    {
      transform:rotate(45deg);
    }
    100%
    {
      transform:rotate(405deg);
    }
  }
</style>
