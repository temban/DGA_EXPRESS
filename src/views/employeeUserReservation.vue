<template>
<body id="landing" class="sidebar-open">
    <div id="dashboardPage">
        <employeeNavbarVue/>


<div> 
     <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Réservation du client</h5>
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
				<form id="Highlighted-form" class="col-sm-6 col-sm-offset-3">
                       <div class="form-group">
                              <div class="controls">
                                <h6>Nom du destinataire</h6>
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
                        <input v-model="annDtouserDtoId" type="hidden">
						<h6>Prix Total</h6><input v-model="totalprice" id="contact-name" name="contactName" class="form-control requiredField Highlighted-label"  type="text" readonly>
						<i class="fa fa-money" style="margin-bottom:-30px"></i>
                        
					  </div>
					</div><!-- End name input -->
                    <div class="form-group">
					 
					  <div class=" controls">
					<h6> Date de réservation</h6><input v-model="date"  id="contact-mail" name="email" class="form-control requiredField Highlighted-label" type="text" readonly>
						<i class="fa fa-calendar"></i>
					  </div>
					</div>
                    <div class="form-group">
					 
						<div class="controls">
						<h6>La Description</h6>   <textarea v-model="description" id="contact-message" name="comments" placeholder="Your message" class="form-control requiredField Highlighted-label"  rows="6" readonly></textarea>
						<i class="fa fa-comment"></i>
						</div>
					</div><!-- End textarea -->
          <div style="display:flex;width:400px"> <hr /> </div>
                           
                           <h5 class="modal-title" id="exampleModalLabel" style="display:flex;width:300px">
                             Informations sur l'annonce </h5>
                       <!-- End name input -->
						
					<div class="form-group">
                            
					  <div class="controls">
						<h6>Voyageur</h6><input v-model="annDtoFirstName" id="contact-name" name="contactName" class="form-control requiredField Highlighted-label"  type="text" readonly>
						<i class="fa fa-user" style="margin-bottom:-30px"></i>
					  </div>
					</div><!-- End name input -->
                      <div class="form-group">
                            
					  <div class="controls">
						<h6>Ville de départ</h6><input v-model="annDtoDeparturetown" id="contact-name" name="contactName" class="form-control requiredField Highlighted-label"  type="text" readonly>
						<i class="fa fa-map-marker" style="margin-bottom:-30px"></i>
					  </div>
					</div><!-- End name input -->
                    <div class="form-group">
                            
					  <div class="controls">
						<h6>ville de destination</h6><input v-model="annDtodestinationtown" id="contact-name" name="contactName" class="form-control requiredField Highlighted-label"  type="text" readonly>
						<i class="fa fa-map-marker" style="margin-bottom:-30px"></i>
					  </div>
					</div><!-- End name input -->
					<div class="form-group">
                            
					  <div class="controls">
						<h6>Date de départ</h6><input v-model="annDtoDeparturedate" id="contact-name" name="contactName" class="form-control requiredField Highlighted-label"  type="text" readonly>
						<i class="fa fa-calendar" style="margin-bottom:-30px"></i>
					  </div>
					</div><!-- End name input -->
                    <div class="form-group">
					
					  <div class="controls">
					<h6>Date d'arrivée</h6> <input v-model="annDtoArrivaldate" id="contact-name" name="contactName"  class="form-control requiredField Highlighted-label" data-new-placeholder="Your name" type="text" readonly>
						<i class="fa fa-calendar"></i>
					  </div>
					</div>
                    
					  <div class="form-group">
					
					  <div class=" controls">
                    <h6>Qté de kilo disponible</h6>  <input v-model="annDtoQty" id="contact-mail" name="email" class="form-control requiredField Highlighted-label"  type="email"  readonly>
						<i class="fa fa-balance-scale" aria-hidden="true"></i>
					  </div>
			
                    <div class="form-group1">
					  <div class="controls">
					<h6>prix /kg</h6> <input v-model="annDtoPrice" id="contact-name" name="contactName" class="form-control requiredField Highlighted-label"  type="text" readonly>
						<i class="fa fa-money"></i>
					  </div>
					</div>
		            </div>

                <div class="form-group">
					
          <div class=" controls">
                  <h6>Qté de kilo disponible</h6>  <input v-model="annDtoQty" id="contact-mail" name="email" class="form-control requiredField Highlighted-label"  type="email"  readonly>
          <i class="fa fa-balance-scale" aria-hidden="true"></i>
          </div>
              </div>

              <div class="form-group">
					
          <div class=" controls">
                  <h6>Method de Paiement</h6>  
                  <a v-if="cop" style="position:absolute; right:-163px; top:-2px"><i v-on:click="copyText()" class="fa fa-copy mye"
                                                                style="font-size:28px;padding-bottom:10px; margin-top: 38px;color:green"></i> </a>
                                                               
                                                                <a style="position:absolute; right:-163px; top:-2px" v-else><i v-on:click="copyText()" class="fa fa-copy mye"
                                                                style="font-size:28px;padding-bottom:10px; margin-top: 38px;"></i> </a>
                                                                      
                  <input v-model="paymentMethod" id="contact-mail" name="email" class="form-control requiredField Highlighted-label"  type="email"  readonly>
                  <i class="fa fa-credit-card" v-if="paymentMethod.length >15"></i>
<i class="fa fa-mobile" style="font-size:35px" v-else></i>
          </div>
              </div>

            
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

<div> 
     <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">My Reservation</h5>
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
				<form id="Highlighted-form" class="col-sm-6 col-sm-offset-3">
					  	<div class="form-group">
                            
					  <div  class="controls">
                        <input v-model="annDtouserDtoId" type="hidden">
						<h6>Total Price</h6><input v-model="annDtoid" id="contact-name" name="contactName" class="form-control requiredField Highlighted-label"  type="text" readonly>
						<i class="fa fa-copy" style="margin-bottom:-30px"></i>
                        
					  </div>
					</div><!-- End name input -->
                    <div class="form-group">
					 
					  <div class=" controls">
					<h6> Reservation Date</h6><input v-model="date"  id="contact-mail" name="email" class="form-control requiredField Highlighted-label" type="text" readonly>
						<i class="fa fa-calendar"></i>
					  </div>
					</div>
                    <div class="form-group">
					 
						<div class="controls">
						<h6>My Description</h6>   <textarea v-model="description" id="contact-message" name="comments" placeholder="Your message" class="form-control requiredField Highlighted-label"  rows="6" readonly></textarea>
						<i class="fa fa-comment"></i>
						</div>
					</div><!-- End textarea -->
                       <hr> 
                        <h5 class="modal-title" id="exampleModalLabel">Announcement Info</h5>


                       <!-- End name input -->
						
					<div class="form-group">
                            
					  <div class="controls">
						<h6>Traveller</h6><input v-model="annDtoFirstName" id="contact-name" name="contactName" class="form-control requiredField Highlighted-label"  type="text" readonly>
						<i class="fa fa-user" style="margin-bottom:-30px"></i>
					  </div>
					</div><!-- End name input -->

					<div class="form-group">
                            
					  <div class="controls">
						<h6>Departure Date</h6><input v-model="annDtoDeparturedate" id="contact-name" name="contactName" class="form-control requiredField Highlighted-label"  type="text" readonly>
						<i class="fa fa-calendar" style="margin-bottom:-30px"></i>
					  </div>
					</div><!-- End name input -->
                    <div class="form-group">
					
					  <div class="controls">
					<h6>Arrival Date</h6> <input v-model="annDtoArrivaldate" id="contact-name" name="contactName"  class="form-control requiredField Highlighted-label" data-new-placeholder="Your name" type="text" readonly>
						<i class="fa fa-calendar"></i>
					  </div>
					</div>
                    
					  <div class="form-group">
					
					  <div class=" controls">
                    <h6>Announcement kilo Qty</h6>  <input v-model="annDtoQty" id="contact-mail" name="email" class="form-control requiredField Highlighted-label"  type="email"  readonly>
						<i class="fa fa-balance-scale" aria-hidden="true"></i>
					  </div>
			
                    <div class="form-group1">
					  <div class="controls">
					<h6>Announcement price /kg</h6> <input v-model="annDtoPrice" id="contact-name" name="contactName" class="form-control requiredField Highlighted-label"  type="text" readonly>
						<i class="fa fa-money"></i>
					  </div>
					</div>
		            </div>
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


   <main style="margin-left:-200px;margin-right:10px; ">
 <div style="margin: 30px 0 38px 550px;" v-if="loading" class="loader"></div>

            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">{{firstname+ " " +lastname}}</h4>
                    <table class="table">
                        <thead>
                           <tr> <th scope="col">Propriétaire</th>
              <th scope="col">ville de départ</th>
              <th scope="col">ville de destination</th>
                 <th scope="col">Documents</th>
              <th scope="col"> Quantité réservée</th>
                 <th scope="col">Ordinateur</th>
               <th scope="col">Confirmation</th>
               <th class="font-w700">Suivi</th>
          <th  scope="col"> Action</th>
        </tr>
      </thead>
      <tbody style="text-transform: capitalize">
    <tr v-for="user in users" :key="user.id" >
    <td >{{ user.announcementDto.userDto.lastName}}</td>

        <td >{{ user.announcementDto.departuretown.slice(0, 14) }}...</td>
              <td>{{ user.announcementDto.destinationtown.slice(0, 14) }}...</td>

               <td  v-if="user.documents"><div style="position:relative;margin-left:25px">{{user.quantityDocument}}</div> </td>
               
               <td  v-else><i class="fa fa-remove" style="font-size:25px;color:red"></i></td>
                    <td> <div style="position:relative;margin-left:25px">{{user.quantitykilo}}</div></td>
               <td  v-if="user.computer">{{user.quantityComputer}}</td>
               
               <td  v-else><i class="fa fa-remove" style="font-size:25px;color:red"></i></td> 
                 <td v-if="user.confirm">
                              <span class="badge badge-success font-weight-100">Confirmé</span>
                            </td>
                              <td v-else>
                              <span class="badge badge-warning font-weight-100">En cours...</span>
                            </td>

                            <td v-if="user.track === 'complete' && !user.paid"> 

                    
<a type="submit" name="learn" value="myimage" style="border-radius: 30px" @click="sendPaymentProof(user)">
<img src="@/assets/img/hotels/pay.jpg" class="rounded-circle img-fluid" style="
    image-resolution: 3000000dpi; 
    background-color: #000; 
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    max-width: 100%;
    max-height: 100%;
    height: 50px; 
    width: 45px;
    margin-bottom: -15px;
    margin-top: 0px;
    border: 2px solid black;
  " />
</a>

</td>
<td v-else-if="user.track === 'complete' && user.paid">
<span class="badge badge-primary font-weight-100">Payé</span>
</td>
<td v-else>
<span class="badge badge-warning font-weight-100">En Cours...</span>
</td>
                        <td>
            <form>
                 <!-- <button  v-on:click="view(user.id)" data-target="#exampleModal" data-toggle="modal" style="height:45px; width:40px;  margin-right:5px;" type="button" class="btn btn-sm btn-info mr-1" disabled><i class="fa fa-eye" style="font-size:20px"></i></button>--> 
                
                  <button  v-on:click="view(user.id)" data-target="#exampleModal" data-toggle="modal" style="height:45px; width:40px;  margin-right:5px;" type="button" class="btn btn-sm btn-info mr-1">
                  	<i class="fa fa-eye" style="font-size:20px"></i>
                  </button>
            <button style="height:45px; width:40px;" v-on:click="deleteUser(user.id)" type="button" class="btn btn-sm btn-danger"><i class="fa fa-trash" style="font-size:20px"></i></button>
            
           </form>
          </td>
          
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
                          </tr>
                        </tbody>
                      </table>
                </div>
            </div>


            <!-- Footer -->
<footer>
    <p>&copy; SHINTHEO. All Rights Reserved. <br />Designed and Developed by <a href="https://sazzad.me">SHINTHEO</a>.</p>
</footer>

        </main>
    </div>
    </body>
</template>

<script>
import Swal from 'sweetalert2';
import employeeNavbarVue from '../components/employeeNavbar.vue'
export default {
  name: 'MyReservations',
  data() {
    return {

        loading: true,
      users: [],
      userId:localStorage.getItem('userId'),
         id: this.$route.params.id,
         firstname: this.$route.params.firstName,
      lastname: this.$route.params.lastName,
      date:'',
      totalprice:'',
   description:'',
  annDtoDeparturedate: "",
  annDtoArrivaldate: "",
  annDtoDeparturetown:'',
  annDtodestinationtown:'',
   annDtoFirstName: "",
    annDtoQty:"",
  restriction: "",
  annDtoPrice: "",
  annDtoid:"",
  annDtoStatus:"",
  annDtouserDtoId:"",
cardNumber:'',
cop: false,
      tel:'',
      receiver:'',
      paymentMethod:''
    }
  },
     components: {
    employeeNavbarVue
  },

   async created() {


    
   var axios = require('axios');

var config = {
  method: 'get', 
  url: 'https://dga-express.com:8443/user/'+this.id+'/reservations',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer '+ localStorage.getItem('access-token') }
};

axios(config)
.then(res => {
            this.users = res.data.reverse();
             this.loading = false
        })
.catch(function (error) {
     this.loading = false
        Swal.fire({
  icon: 'warning',
  title: 'Oops...No Reservation found!',
})
  console.log(error);
  localStorage.clear()
        window.location.href = "/"
});

  },
  methods: {
    copyText() {
      navigator.clipboard.writeText(this.paymentMethod).then(() => {
        this.cop = true;
        alert('text copied: ' + this.paymentMethod)
      })
    },

    sendPaymentProof(item){
console.log("items", item)
let sendPaymentProof = [];
sendPaymentProof = item;
localStorage.setItem("sendPaymentProof", JSON.stringify(sendPaymentProof))
window.location.href="/employeeSendRevPaymentProof"

},


lockedAnn(){
    Swal.fire({
  icon: 'error',
  title: 'Oops... Announcement Has Been Deletet!',
  text: 'Contact DGA Client Service for more Info!',
  footer: '<a href="">Why do I have this issue?</a>'
})
},

    
lockedRev(){
    Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text:  'Oops... Reservation Has Been Deletet!',
  footer: '<a href="">Why do I have this issue?</a>'
})
},


 view(id) {
var axios = require('axios');
var config = {
  method: 'get',
  url: 'https://dga-express.com:8443/reservations/'+id,
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
     },
};

axios(config)
.then(res => {
        this.annDtoStatus= res.data.announcementDto.status;
        this.date = res.data.date;
        this.description = res.data.description;
        this.annDtoid = res.data.announcementDto.id;
         this.annDtoDeparturetown  = res.data.announcementDto.departuretown;
        this.annDtodestinationtown = res.data.announcementDto.destinationtown;
        this.annDtoDeparturedate = res.data.announcementDto.departuredate;
        this.annDtoArrivaldate = res.data.announcementDto.arrivaldate;
        this.annDtoFirstName = res.data.announcementDto.userDto.firstName;
        this.annDtoQty = res.data.announcementDto.quantity;
        this.restriction = res.data.announcementDto.restriction;
        this.annDtoPrice = res.data.announcementDto.price;
        this.annDtouserDtoId = res.data.announcementDto.userDto.id;
        this.totalprice =  res.data.totalprice
        this.receiver = res.data.receiver;
          this.cardNumber =  res.data.receivernumbercni;
          this.paymentMethod = res.data.announcementDto.paymentMethod;
          this.tel =  res.data.tel;
        //localStorage.setItem('refresh-token', refreshtoken);
        //localStorage.setItem('access-token', accesstoken);
      })
.catch(function (error) {
  console.log(error);
   localStorage.clear()
window.location.href = "/"

});

  },

 deleteUser(id) {
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    width: 7000,
    confirmButton: 'btn btn-success ml-3',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

swalWithBootstrapButtons.fire({
  title: 'Êtes-vous sûr?',
                text: "Vous ne pourrez pas revenir en arrière!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Oui,  Supprimer',
                cancelButtonText: 'Non, Annuler!',
                reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {


var axios = require('axios');
var config = {
  method: 'delete',
  url: 'https://dga-express.com:8443/delete/'+id+'/reservations',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer '+ localStorage.getItem('access-token')}
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
        window.location.reload();
})
.catch(function (error) {
  console.log(error);
});


    swalWithBootstrapButtons.fire(

      'supprimé!',
                        'Cette Reservation a été supprimé.',
                        'success'
    )
  } 
})
      },

   
   
  }
}
</script>

<style scoped>
    .h6{
    font-size:18px;
    font-weight:600;
}

.contact-item .icon{
    display:block;
    font-size:48px;
    color:#75e1f7;
    text-shadow:-2px 2px 0 rgba(0,0,0,0.1);
    -webkit-transition:all .3s ease-out;
    transition:all .3s ease-out;
}

.contact-item .icon:hover{
    color:#d9dedf;
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
    height:40px;
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
      margin-top: 31px;
    color:rgb(255, 115, 0);
    font-size:24px;
    line-height:52px;
    text-align:center;
    font-weight:300;
	-webkit-transition:color .3s ease-out;
	transition:color .3s ease-out;
}
#Highlighted-form .form-group1 [class*=fa] {
    display:block;
    width:45px;
    position:absolute;
    top:0;
    left:5px;
      margin-top: 110px;
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
.mye{
  height: 42px;
  background: #D1D1D1;


}
.cop {
  color: #0f0;
}
</style>
