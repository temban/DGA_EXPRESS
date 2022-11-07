How to turn off Admit to meeting in Google Meet?<template>

<div>
 <div style="margin-left:60px;">
    <lognavVue/>
    </div>
<usersidebarVue/>

    <b-container>
      <input id="step2" type="checkbox" />
      <input id="step3" type="checkbox" />

      <div id="part1" class="form-group">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Détails de l'annonce</h3>
          </div>

          <form class="form-body">
            <div>
  
              <div>
                 <input  v-model="id" type="hidden" name="name" placeholder="Departure Date" />
                <label class="form-label" for="name">Date de départ</label>
                <input
                  v-model="departuredate"
                  class="input-text"
                  type="text"
                  name="date"
                  id="date"
                  placeholder="Date de départ"
                  readonly
                />
              </div>

              <div>
                <label class="form-label" for="last-name">Ville de départ</label>
                 <input v-model="departuretown" type="text"  class="input-text" readonly/>
              </div>
              <div>
                <label class="form-label" for="mail">Prix par Kilo</label>
                <input
                readonly
                  v-model="price"
                  class="input-text"
                  type="text"
                  name="mail"
                  id="mail"
                  placeholder="Prix par Kilo"
                />
              </div>

              <div class="form-footer">
                <div class="form-check">
                  <input
                  readonly
                   onclick="javascript: return false;"
                    v-model="computer"
                    type="checkbox"
                    name="newsletter"
                    id="newsletter"
                  />
                  <label for="newsletter">Accepte les ordinateur?</label>
                </div>
         
<div  >
                <h6>Restriction</h6>
            <textarea class="input-text" v-model="restriction" name="name"  style="font-size:1.2em;width:210%" readonly></textarea>
          </div>
              </div>
            </div>

            <div>
              <div>
                <label class="form-label" for="password">Date d'arrivée</label>
                <input
                readonly
                  v-model="arrivaldate"
                  class="input-text"
                  type="text"
                  name="date"
                  id="date"
                  placeholder="Arrival Date"
                />
              </div>
              <div>
                <label class="form-label" for="password-confirmation">Ville de destination</label
                >
                <input v-model="destinationtown" type="text"  class="input-text" readonly/>
              </div>
              <div>
                <label class="form-label" for="password">Quantité </label>
                <input
                readonly
                  v-model="quantity"
                  class="input-text"
                  type="text"
                  name="date"
                  id="date"
                  placeholder="Arrival Date"
                />
              </div>

              <div class="form-footer"> 
            
                <div class="form-check">
                  <input
                  onclick="javascript: return false;"
                    v-model="document"
                    type="checkbox"
                    name="conditions"
                    id="conditions"
                  />
                  <label for="conditions" class="highlighted">
                    Accepte les documents
                  </label>
                </div>
              </div>
            </div>
            
          </form>
        </div>
      </div>

      <div style="margin-bottom: 20px"></div>
    </b-container>
<b-container>

      <div id="part1" class="form-group">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Envoyer</h3>
          </div>

          <form class="form-body">
            <div>
  
              <div>
                 <input  v-model="id1" type="hidden" name="name" placeholder="Departure Date" />
                 <input  v-model="annId"  type="hidden" name="name" placeholder="Departure Date" />
                <label class="form-label" for="name">Nom du destinataire</label>
                <input
                v-model="receiver"
                  class="input-text"
                  placeholder="Departure Date"
                  
                />
              </div>
               <div>
                <label class="form-label" for="password-confirmation">Numéro de carte d'identité du destinataire</label
                >
                <input v-model="receivernumbercni" type="text"  class="input-text" />
                <input v-model="totalprice" type="hidden"  class="input-text" readonly/>
                <input v-model="date" type="hidden"  class="input-text" readonly/>
                <input v-model="track" type="hidden"  class="input-text" readonly/>
                <input v-model="confirm" type="hidden"  class="input-text" readonly/>
              </div>
             

              <div class="form-footer">
            <div   class="form-check">
                <div> 
                <input v-if="document" v-model="doc" type="checkbox" id="cb1"> 
            <label for="cb1"  v-if="document">Avez-vous des Documents</label>
            <p v-else>.</p> 
                </div>
           
            </div> 
<div  >
                <label class="form-label" for="name">La Description</label>
            <textarea class="input-text"  v-model="desc" name="name"  style="color:black;font-size:1.2em;width:210%" ></textarea>
          
          </div>
              </div>
            </div>

            <div>
              <div>
                <label class="form-label" for="last-name">Numéro de téléphone du destinataire</label>
                 <input v-model="tel" type="tel" name="tel" style="width:171%"  class="input-text" id="phone"/> 
              </div>
             
 <div>
                <label class="form-label" for="mail" style="margin-top:33px">Qté réservée</label>
                <input
                  v-bind="quantity" 
                 @change="() => { if(qtykilo > quantity || qtykilo < 1) { qtykilo = 1 }}" 
                 v-model="qtykilo" type="number"
                  class="input-text"
                 
                  name="mail"
                  id="mail"
                  placeholder="Qté réservée"
                  readonly
                /> 
              </div>
              <div class="form-footer">
                <div  class="form-check">
                    <div> 
                   <input  v-if="computer" v-model="pc" type="checkbox" id="cb2">
    	 <label for="cb2"  v-if="computer">Avez-vous des ordinateurs?</label>
         <p v-else>.</p>
                    </div>
          
            </div>

                <label
                  @click="onSubmit"
                  class="create"
                  style=" margin-top: 210px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <div type="button">Envoyer</div>
                </label>
              </div>
            </div>
            
          </form>
        </div>
      </div>

      <div style="margin-bottom: 20px"></div>
    </b-container>
    <div style="position:relative; margin-bottom:-60px; left:0; right:0"> <footerVue /></div>
</div>

</template>

<script>
import $ from "jquery";
import Swal from 'sweetalert2';
import footerVue from "@/components/footer.vue"
import usersidebarVue from "../components/usersidebar.vue";
import lognavVue from '../components/lognav.vue';
    export default {
    name: "EditAnnouncement",
       data() {
      return {
             id1: this.$route.params.id,
             annId:'',
        modalShow: false,
  departuredate: "",
  arrivaldate: "",
  departuretown: "",
  destinationtown: "",
  quantity: "",
  computer: null,
  restriction: "",
  document: null,
  price:"",
  name:'',
receiver:'',
date:'',
totalprice:'',
track:'',
confirm: '',
receivernumbercni:'',
tel:'',
  doc: null,
  pc: null,
  desc: "",
  qtykilo: "",
  
    
      }
    }, 
       
    components:{
          lognavVue,
        usersidebarVue,
        footerVue
    },

   mounted(){
    var requestOptions1 = { method: 'GET', redirect: 'follow' };

fetch("http://46.105.36.240:3000/sub/informations/view", requestOptions1)
    .then(response => response.text())
    .then(result => {
        if (JSON.parse(result).length!==0) {
            this.subInfo = JSON.parse(result)[0]
        } 
    })
    .catch(error => console.log('error', error));
 var input = document.getElementById("phone");
    window.intlTelInput(input,({
      // options here 
    }));
 
    $(document).ready(function() {
        $('.iti__flag-container').click(function() { 
          var countryCode = $('.iti__selected-flag').attr('title');
          countryCode = countryCode.replace(/[^0-9]/g,'')
          $('#phone').val("+"+countryCode+" ");
       });
    });
    },

   async created() {
var axios = require('axios');
var config = {
  method: 'get',
  url: 'http://46.105.36.240:3000/reservations/'+this.id1,
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
     },
};

axios(config)
.then(res => {
    this.annId=res.data.announcementDto.id
        this.departuredate = res.data.announcementDto.departuredate;
        this.arrivaldate = res.data.announcementDto.arrivaldate;
        this.departuretown = res.data.announcementDto.departuretown;
        this.destinationtown = res.data.announcementDto.destinationtown;
        this.quantity = res.data.announcementDto.quantity;

        this.computer = res.data.announcementDto.computer;
        this.restriction = res.data.announcementDto.restriction;
        this.document = res.data.announcementDto.document;
        this.price = res.data.announcementDto.price;
        this.id = res.data.announcementDto.id;
 
        this.date= res.data.date
        this.totalprice= res.data.totalprice
        this.track= res.data.track
        this.confirm= res.data.confirm
        this.receiver= res.data.receiver
        this.tel= res.data.tel
        this.receivernumbercni= res.data.receivernumbercni
        this.pc = res.data.computer;
        this.desc = res.data.description;
        this.doc = res.data.documents;
        this.qtykilo = res.data.quantitykilo;
        this.name = res.data.announcementDto.userDto.firstName +' '+ res.data.announcementDto.userDto.lastName ;

       

       
localStorage.setItem('annrevid', res.data.announcementDto.id);
localStorage.setItem('Annrev-departuredate', res.data.announcementDto.departuredate);
localStorage.setItem('Annrev-arrivaldate', res.data.announcementDto.arrivaldate);
localStorage.setItem('Annrev-departuretown', res.data.announcementDto.departuretown);
localStorage.setItem('Annrev-destinationtown', res.data.announcementDto.destinationtown);
        
localStorage.setItem('Annrev-restriction', res.data.announcementDto.restriction);
localStorage.setItem('Annrev-quantity', res.data.announcementDto.quantity); 
localStorage.setItem('Annrev-price', res.data.announcementDto.price);
localStorage.setItem('Annrev-computer', res.data.announcementDto.computer);
localStorage.setItem('Annrev-document', res.data.announcementDto.document);
localStorage.setItem('Annrev-cni', res.data.announcementDto.cni);
localStorage.setItem('Annrev-ticket', res.data.announcementDto.ticket);
localStorage.setItem('Annrev-covidtest', res.data.announcementDto.covidtest);

localStorage.setItem('Annrev-id', res.data.announcementDto.userDto.id);
localStorage.setItem('Annrev-firstName', res.data.announcementDto.userDto.firstName);
localStorage.setItem('Annrev-lastName', res.data.announcementDto.userDto.lastName);
localStorage.setItem('Annrev-email', res.data.announcementDto.userDto.email);
localStorage.setItem('Annrev-pseudo', res.data.announcementDto.userDto.pseudo);
localStorage.setItem('Annrev-id', res.data.announcementDto.userDto.id)



      console.log(JSON.stringify( res.data.date));  

        //localStorage.setItem('refresh-token', refreshtoken);
        //localStorage.setItem('access-token', accesstoken);
      })
.catch(function (error) {
     localStorage.clear()
        window.location.href = "/"
  console.log(error);
});

  },


 methods: {

  onSubmit(event){
  Swal.fire({
  title: '',
  text: "Voulez-vous enregistrer les modifications",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Update!'
}).then((result) => {
  if (result.isConfirmed) {
        event.preventDefault()
var axios = require('axios');
var data = JSON.stringify({

   "id":  this.id1,
  "description": this.desc,
  "documents": this.doc,
  "computer": this.pc,
  "status": "ENABLED",
  "quantitykilo": this.qtykilo,
   "receiver": this.receiver,
  "receivernumbercni": this.receivernumbercni,
  "tel": this.tel,
  "confirm": this.confirm,
  "date": this.date,
  "totalprice": this.totalprice,
  "track": this.track,
  "userDto": {
     "id": localStorage.getItem('userId'),
    "firstName": localStorage.getItem('firstName'),
    "lastName": localStorage.getItem('lastName'),
    "pseudo": localStorage.getItem('pseudo'),
    "email": localStorage.getItem('email'),
    "roleDtos": [
      {
        "id": 2,
        "name": "ROLE_CLIENT"
      }
    ],
    "status": "ENABLED"
  },
 "announcementDto": {

      "id":  this.annId,
    "departuredate": localStorage.getItem('Annrev-departuredate') ,
    "arrivaldate": localStorage.getItem('Annrev-arrivaldate') ,
    "departuretown": localStorage.getItem('Annrev-departuretown') ,
    "destinationtown": localStorage.getItem('Annrev-destinationtown') ,
    "quantity": localStorage.getItem('Annrev-quantity') ,
    "computer":  localStorage.getItem('Annrev-computer') ,
    "restriction": localStorage.getItem('Annrev-restriction') ,
    "document": localStorage.getItem('Annrev-document') ,
    "status": "ENABLED",


     "cni": localStorage.getItem('Annrev-cni') ,
    "ticket": localStorage.getItem('Annrev-ticket') ,
    "covidtest": localStorage.getItem('Annrev-covidtest') ,
    "price": localStorage.getItem('Annrev-price') ,
    "validation": true,
    "userDto": {
      "id":  localStorage.getItem('Annrev-id') ,
      "firstName": localStorage.getItem('Annrev-firstName') ,
      "lastName":localStorage.getItem('Annrev-lastName') ,
      "pseudo": localStorage.getItem('Annrev-pseudo') ,
      "email": localStorage.getItem('Annrev-email') ,
      "roleDtos": [
        {
          "id": 2,
          "name": "ROLE_CLIENT"
        }
      ],
      "status": "ENABLED"
    }
  }

});

var config = {
  method: 'put',
  url: 'http://46.105.36.240:3000/update/reseravtion',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer '+ localStorage.getItem('access-token') },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  Swal.fire('Enregistrée!', '', 'success')
   window.location.href = "/MyReservations"
})
.catch(function (error) {
  Swal.fire(
      'échec!',
      'Réessayer!.',
      'error'
    )
  console.log(error);
});
  
  }
})
}}
    }
</script>


<style lang="scss">

$yellow:#f5ba1a;
$black:#000000;
$grey:#cccccc;


.clearfix {
	&:after {
		content: "";
		display: block;
		clear: both;
		visibility: hidden;
		height: 0;
	}
}
.form_wrapper {
	background: rgb(255, 251, 241);
	width: 100%;
    margin-bottom:20px;
	max-width: 100%;
	box-sizing: border-box;
	padding: 25px;
	position: relative;
	z-index: 1;
	border-top: 5px solid $yellow;
	-webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
	-moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    -webkit-transition: none;
    transition: none;
    -webkit-animation: expand 0.8s 0.6s ease-out forwards;
    animation: expand 0.8s 0.6s ease-out forwards;
    opacity: 0;
	h2 {
		font-size: 1.5em;
		line-height: 1.5em;
		margin: 0;
	}
    	h6 {
		font-size: 1em;
		line-height: 1em;
		margin-: 0;
	}
	.title_container {
		text-align: center;
		padding-bottom: 15px;
	}
	h3 {
		font-size: 1.1em;
		font-weight: normal;
		line-height: 1.5em;
		margin: 0;
	}
    label {
        font-size: 12px;
    }
	.row {
		margin: 10px -15px;
		>div {
			padding: 0 15px;
			box-sizing: border-box;
		}
	}
	.col_half {
		width: 50%;
		float: left;
	}
	.input_field {
		position: relative;
		margin-bottom: 10px;
        -webkit-animation: bounce 0.6s ease-out;
  	     animation: bounce 0.6s ease-out;
		>span {
			position: absolute;
			left: 0;
			top: 0;
			color: #333;
			height: 100%;
			border-right: 1px solid $grey;
			text-align: center;
			width: 30px;
			>i {
			}
		}
	}
	.textarea_field {
		>span {
			>i {
			}
		}
	}
	input {
    &[type="text"], &[type="email"], &[type="password"] {
      width: 500px;
      padding: 8px 10px 9px 35px;
      height: 35px;
      border: 1px solid $grey;
      box-sizing: border-box;
      outline: none;
      -webkit-transition: all 0.30s ease-in-out;
      -moz-transition: all 0.30s ease-in-out;
      -ms-transition: all 0.30s ease-in-out;
      transition: all 0.30s ease-in-out;
    }
    &[type="text"]:hover, &[type="email"]:hover, &[type="password"]:hover {
      background: #f8f8f8;
    }
    &[type="text"]:focus, &[type="email"]:focus, &[type="password"]:focus {
      -webkit-box-shadow: 0 0 2px 1px rgb(255, 153, 0);
      -moz-box-shadow: 0 0 2px 1px rgb(255, 153, 0);
      box-shadow: 0 0 2px 1px rgb(255, 153, 0);
      border: 1px solid $yellow;
      background: #f7f7f7;
    }
    &[type="submit"] {
		background: $yellow;
		height: 35px;
		line-height: 35px;
		width: 100%;
		border: none;
		outline: none;
		cursor: pointer;
		color: #fff;
		font-size: 1.1em;
		margin-bottom: 10px;
		-webkit-transition: all 0.30s ease-in-out;
		-moz-transition: all 0.30s ease-in-out;
		-ms-transition: all 0.30s ease-in-out;
		transition: all 0.30s ease-in-out;
		&:hover {
			background: darken($yellow,7%);
		}
		&:focus {
			background: darken($yellow,7%);
		}
	}    
    &[type="checkbox"], &[type="radio"] {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  }
}
.form_container {
	.row {
		.col_half.last {
			border-left: 1px solid $grey;
		}
	}
}
.checkbox_option{
    label{
        margin-right: 1em;
        position: relative;
        &:before {
          content: "";
          display: inline-block;
          width: 1.1em;
          height: 1.1em;
          margin-right: 0.5em;
          vertical-align: -2px;
          border: 2px solid $grey;
          padding: 0.12em;
          background-color: transparent;
          background-clip: content-box;
          transition: all 0.2s ease;
        }
        &:after {
          border-right: 2px solid $black;
          border-top: 2px solid $black;
          content: "";
          height: 20px;
          left: 2px;
          position: absolute;
          top: 7px;
          transform: scaleX(-1) rotate(135deg);
          transform-origin: left top;
          width: 7px;
          display: none;
        }
    }
    input {
    &:hover + label:before {
      border-color: $black;
    }
    &:checked + label {
      &:before {
        border-color: $black;
      }
      &:after {
        -moz-animation: check 0.8s ease 0s running;
        -webkit-animation: check 0.8s ease 0s running;
        animation: check 0.8s ease 0s running;
        display: block;
        width: 7px;
        height: 20px;
        border-color: $black;
      }
    }
  }
}
.radio_option {
  label {
      margin-right: 1em;
    &:before {
      content: "";
      display: inline-block;
      width: 0.8em;
      height: 0.8em;
      margin-right: 0.5em;
      border-radius: 100%;
      vertical-align: -3px;
      border: 2px solid $grey;
      padding: 0.15em;
      background-color: transparent;
      background-clip: content-box;
      transition: all 0.2s ease;
    }
  }
  input {
    &:hover + label:before {
      border-color: $black;
    }
    &:checked + label:before {
      background-color: $black;
      border-color: $black;
    }
  }
}
.credit {
	position: relative;
	z-index: 1;
	text-align: center;
	padding: 15px;
	color: $yellow;
	a {
		color: darken($yellow,7%);
	}
}
@-webkit-keyframes check {
  0% { height: 0; width: 0; }
  25% { height: 0; width: 7px; }
  50% { height: 20px; width: 7px; }
}

@keyframes check {
  0% { height: 0; width: 0; }
  25% { height: 0; width: 7px; }
  50% { height: 20px; width: 7px; }
}

@-webkit-keyframes expand { 
	0% { -webkit-transform: scale3d(1,0,1); opacity:0; }
	25% { -webkit-transform: scale3d(1,1.2,1); }
	50% { -webkit-transform: scale3d(1,0.85,1); }
	75% { -webkit-transform: scale3d(1,1.05,1); }
	100% { -webkit-transform: scale3d(1,1,1);  opacity:1; }
}

@keyframes expand { 
	0% { -webkit-transform: scale3d(1,0,1); transform: scale3d(1,0,1);  opacity:0; }
	25% { -webkit-transform: scale3d(1,1.2,1); transform: scale3d(1,1.2,1); }
	50% { -webkit-transform: scale3d(1,0.85,1); transform: scale3d(1,0.85,1); }
	75% { -webkit-transform: scale3d(1,1.05,1); transform: scale3d(1,1.05,1); }
	100% { -webkit-transform: scale3d(1,1,1); transform: scale3d(1,1,1);  opacity:1; }
}


@-webkit-keyframes bounce { 
	0% { -webkit-transform: translate3d(0,-25px,0); opacity:0; }
	25% { -webkit-transform: translate3d(0,10px,0); }
	50% { -webkit-transform: translate3d(0,-6px,0); }
	75% { -webkit-transform: translate3d(0,2px,0); }
	100% { -webkit-transform: translate3d(0,0,0); opacity: 1; }
}

@keyframes bounce { 
	0% { -webkit-transform: translate3d(0,-25px,0); transform: translate3d(0,-25px,0); opacity:0; }
	25% { -webkit-transform: translate3d(0,10px,0); transform: translate3d(0,10px,0); }
	50% { -webkit-transform: translate3d(0,-6px,0); transform: translate3d(0,-6px,0); }
	75% { -webkit-transform: translate3d(0,2px,0); transform: translate3d(0,2px,0); }
	100% { -webkit-transform: translate3d(0,0,0); transform: translate3d(0,0,0); opacity: 1; }
}
@media (max-width: 600px) {
	.form_wrapper {
		.col_half {
			width: 100%;
			float: none;
		}
	}
	.bottom_row {
		.col_half {
			width: 50%;
			float: left;
		}
	}
	.form_container {
		.row {
			.col_half.last {
				border-left: none;
			}
		}
	}
	.remember_me {
		padding-bottom: 20px;
	}
}

.create{
    
                display: inline-block;
                outline: 0;
                border: 0;
                cursor: pointer;
                will-change: box-shadow,transform;
                background: radial-gradient( 100% 100% at 100% 0%, #f0b07c 0%, #ff9100 100% );
                box-shadow: 0px 2px 4px rgb(247, 152, 43), 0px 7px 13px -3px rgba(241, 188, 12, 0.993), inset 0px -3px 0px rgba(241, 103, 61, 0.795);
                padding: 0 32px;
                border-radius: 6px;
                color: #fff;
                height: 48px;
                width:100%;
                float: center;
                font-size: 18px;
                text-shadow: 0 1px 0 rgba(241, 173, 94, 0.932);
                transition: box-shadow 0.15s ease,transform 0.15s ease;
                }
                .create:hover {
                    box-shadow: 0px 4px 8px rgb(255, 145, 1), 0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #f37018;
                    transform: translateY(-2px);
                }
                .create:active{
                    box-shadow: inset 0px 3px 7px #ff7504;
                    transform: translateY(2px);
                }
                
.create1 {
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  will-change: box-shadow, transform;
  background: radial-gradient(100% 100% at 100% 0%, #f07c7c 0%, #ff0000 100%);
  box-shadow: 0px 2px 4px rgb(255, 98, 98),
    0px 7px 13px -3px rgba(252, 104, 104, 0.993),
    inset 0px -3px 0px rgba(241, 103, 61, 0.795);
  padding: 0 32px;
  border-radius: 6px;
  color: #fff;
  height: 48px;
  width: 100%;
  float: center;
  font-size: 18px;
  text-shadow: 0 1px 0 rgba(241, 94, 94, 0.932);
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}
.create:hover {
  box-shadow: 0px 4px 8px rgb(255, 1, 1), 0px 7px 13px -3px rgb(45 35 66 / 30%),
    inset 0px -3px 0px #f37018;
  transform: translateY(-2px);
}
.create:active {
  box-shadow: inset 0px 3px 7px #ff0404;
  transform: translateY(2px);
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
  height: 48px;
  width: 100%;
  float: center;
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

:root {
  --dark: #5a5a5a;
  --beige: #a0d4ff;
  --gold: #ff9d00;
  --brown: #ff8800;
  --white: #ffffff;
}

/* :: Base :: */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  max-width: 100%;
  vertical-align: top;
}

a {
  color: inherit;
}

input,
[type="submit"] {
  all: unset;
  width: 100%;
}

[type="submit"] {
  cursor: pointer;
}

/* :: Layout :: */
.container {
  width: min(1030px, 90%);
  margin-inline: auto;
}

.form-header {
  text-align: center;
  margin-bottom: 25px;
}

/* :: Modules :: */
.form-icon {
  max-width: 90px;
  margin-bottom: 28px;
}

.form-title {
  font-size: 22px;
  margin: 0 auto 16px;
}

.form-subtitle {
  font-size: 18px;
  margin-block: 0;
}

.benefits {
  list-style-type: none;
  text-align: left;
  margin-top: 30px;
}

.benefits-item {
  margin-bottom: 16px;
}

.benefits-icon {
  font-size: 20px;
  margin-right: 5px;
}

.form-body {
  background-color: var(--beige);
  padding: 20px 15px;
  border-radius: 8px;
}

.form-label {
  margin-bottom: 12px;
  display: block;
  font-weight: bold;
  color: #000;
}

.input-text {
  background-color: var(--white);
  box-sizing: border-box;
  padding: 10px 9px;
  font-family: "Montserrat", sans-serif;
  border-radius: 8px;
  font-size: 18px;
  margin-bottom: 30px;
  border: 2px solid transparent;
  color: #000;
}

.input-text:focus-visible,
.input-text:focus {
  border: 2px solid var(--brown);
}

.form-legend {
  margin-bottom: 25px;
}

.form-footer > *:not(:last-child) {
  margin-bottom: 25px;
}

.form-check {
  font-size: 14px;
}

.form-submit {
  background-color: var(--gold);
  color: var(--white);
  text-align: center;
  font-weight: 600;
  padding-block: 10px;
  border-radius: 8px;
}

/* :: State :: */
.highlighted {
  font-weight: 600;
}

/* :: Mediaqueries :: */
@media screen and (min-width: 700px) {
  .form-body {
    display: flex;
    gap: 60px;
    justify-content: space-between;
    padding: 28px 30px;
  }

  .form-body > div {
    width: 50%;
  }

  .benefits {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    margin-top: 40px;
  }

  .benefits-item {
    width: 33%;
    margin-bottom: 0;
    text-align: center;
  }
}

/* :: checkbox styles :: */
[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  position: absolute;
  left: 0;
  opacity: 0.01;
}

[type="checkbox"]:not(:checked) + label,
[type="checkbox"]:checked + label {
  position: relative;
  padding-left: 28px;
  cursor: pointer;
}

/* checkbox aspect */
[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  background: var(--white);
  border-radius: 50%;
  -webkit-transition: all 0.275s;
  transition: all 0.275s;
}

[type="checkbox"]:checked + label:before {
  background: var(--brown);
}

/* checked mark aspect */
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  background: var(--gold);
}

/* checked mark aspect changes */
[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
}

[type="checkbox"]:checked + label:after {
  opacity: 1;
}

.form-container {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  input[type="text"],
  input[type="email"],
  input[type="phone"],
  input[type="number"],
  textarea {
    width: 90%;
    margin: 20px auto;
    border: 1px solid white;
    box-shadow: 0 0 1px 1px white;
  }
  textarea {
    min-height: 150px;
  }
  .panel {
    background: rgba(0, 0, 0, 0.2);
    .panel-heading {
      margin-bottom: 20px;
    }
  }
  .btn-group {
    width: 90%;
    margin: 0 auto 10px auto;
  }
  .back {
    float: left;
  }
  .continue {
    float: right;
  }
}

/* Multi-Part CSS */
input[type="checkbox"] {
  position: absolute;
  /* Position the checkbox in upper left corner */

  opacity: 0;
}

/* Styling Parts */
#part1,
#part2,
#part3 {
  z-index: 2;
  display: block;
  height: auto;
  opacity: 1;
  transition: opacity 1s ease-in-out;
}

/* Hidden Parts */
#part2,
#part3 {
  opacity: 0;
  height: 0;
  overflow: hidden;
}

/* Show Step 2 & Hide Step 1 */
#step2:checked ~ #part2 {
  opacity: 1;
  height: auto;
}
#step2:checked ~ #part1 {
  opacity: 0;
  height: 0;
  display: none;
}

/* Show Step 3  & Hide Step 2 */
#step3:checked ~ #part3 {
  opacity: 1;
  height: auto;
}
#step3:checked ~ #part2 {
  opacity: 0;
  width: 0;
  height: 0;
}

.file-upload-form,
.image-preview {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 20px;
}
img.preview {
  width: 300px;
  background-color: white;
  border: 1px solid #ddd;
  padding: 5px;
}

.file {
  position: relative;
  width: 70%;
  justify-content: left;
  align-items: center;
}

.file > input[type="file"] {
  display: none;
}

.file > label {
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  outline: 0;
  user-select: none;
  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
  border-style: solid;
  border-radius: 4px;
  border-width: 1px;
  background-color: hsl(0, 0%, 100%);
  color: hsl(0, 0%, 29%);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.file > label:hover {
  border-color: hsl(0, 0%, 21%);
}

.file > label:active {
  background-color: hsl(0, 0%, 96%);
}

.file > label > i {
  padding-right: 5px;
}

.file--upload > label {
  color: hsl(204, 86%, 53%);
  border-color: hsl(204, 86%, 53%);
}

.file--upload > label:hover {
  border-color: hsl(204, 86%, 53%);
  background-color: hsl(204, 86%, 96%);
}

.file--upload > label:active {
  background-color: hsl(204, 86%, 91%);
}

.file--uploading > label {
  color: hsl(48, 100%, 67%);
  border-color: hsl(48, 100%, 67%);
}

.file--uploading > label > i {
  animation: pulse 5s infinite;
}

.file--uploading > label:hover {
  border-color: hsl(48, 100%, 67%);
  background-color: hsl(48, 100%, 96%);
}

.file--uploading > label:active {
  background-color: hsl(48, 100%, 91%);
}

.file--success > label {
  color: hsl(141, 71%, 48%);
  border-color: hsl(141, 71%, 48%);
}

.file--success > label:hover {
  border-color: hsl(141, 71%, 48%);
  background-color: hsl(141, 71%, 96%);
}

.file--success > label:active {
  background-color: hsl(141, 71%, 91%);
}

.file--danger > label {
  color: hsl(348, 100%, 61%);
  border-color: hsl(348, 100%, 61%);
}

.file--danger > label:hover {
  border-color: hsl(348, 100%, 61%);
  background-color: hsl(348, 100%, 96%);
}

.file--danger > label:active {
  background-color: hsl(348, 100%, 91%);
}

.file--disabled {
  cursor: not-allowed;
}

.file--disabled > label {
  border-color: #e6e7ef;
  color: #e6e7ef;
  pointer-events: none;
}

@keyframes pulse {
  0% {
    color: hsl(48, 100%, 67%);
  }
  50% {
    color: hsl(48, 100%, 38%);
  }
  100% {
    color: hsl(48, 100%, 67%);
  }
}
</style>
