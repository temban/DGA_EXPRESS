<template>
  <div>
    <lognavVue />
    <div style="margin: 30px 0 38px 550px;" v-if="loading" class="loader"></div>
    <b-container style="margin-bottom:20px;">
      <b-row align-v="start">
        <!-- About Hotel -->
        <b-col lg="6" class="mb-2 mb-lg-0">

          <div class="card" style="border-radius:15px;height:60% ">

            <div class="card-body text-center">

              <div class="mt-1 mb-1">
                <div v-if="profileimgage === ''" class="mt-1 mb-1">
                  <img src="@/assets/img/hotels/59710428.png" class="rounded-circle img-fluid" style="border-radius: 160px;
                    image-resolution: 3000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:300px; width: 190px;" />
                </div>

                <img v-else :src="'http://46.105.36.240:3000/' + profileimgage" style="border-radius:55px;
                image-resolution: -300000000dpi;  
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    flex-shrink: 0;
                     max-width: 100%;
                      max-height: 100%;
                      height:300px; width: 350px;
                " />

              </div>
              <h4 style="text-transform: capitalize" class="mb-2">{{ firstName + " " + lastName }}</h4>
              <span v-if="stars > 0" class="fa fa-star checked"></span>
              <span v-else class="fa fa-star"></span>

              <span v-if="stars > 1" class="fa fa-star checked"></span>
              <span v-else class="fa fa-star"></span>

              <span v-if="stars > 2" class="fa fa-star checked"></span>
              <span v-else class="fa fa-star"></span>

              <span v-if="stars > 3" class="fa fa-star checked"></span>
              <span v-else class="fa fa-star"></span>

              <span v-if="stars > 4" class="fa fa-star checked"></span>
              <span v-else class="fa fa-star"></span>
              <div style="padding:0 20px 0  20px; margin-top:-100px;"
                class="d-flex justify-content-between text-center mt-3 mb-2">
                <div>
                  <p class="mb-2 h5" style="font-size: 18px;animation: fadeIn 5s;">De</p>
                  <p class="text-muted mb-0"><i class="fas fa-map-marker-alt mr-2 text-primary"></i>{{
                      departuretown.slice(0, 25)
                  }}...</p>
                  <p class="text-muted mb-0"><i class="fas fa-clock mr-2 text-primary"></i>{{ arrivaldate }}</p>
                </div>

                <div>
                  <p class="mb-2 h5" style="font-size:18px; animation: fadeIn 5s;">À</p>
                  <p class="text-muted mb-0"><i class="fas fa-map-marker-alt mr-2 text-primary"></i>{{
                      destinationtown.slice(0, 25)
                  }}...</p>
                  <p class="text-muted mb-0"><i class="fas fa-clock mr-2 text-primary"></i>{{ departuredate }}</p>
                </div>

              </div>
              <div>
                <i class="fas fa-weight-hanging mr-0 text-primary"></i>
                <span>{{ quantity }}Kg-------------------------------> {{ price
                    }}<b style="color: rgb(63, 167, 247);">{{
                        subInfo.currency
                      }}</b>/Kg</span
                  > 
                <span class="mx-2"></span>
              </div>

              <div style="margin-left:-38px">
                <!-- document -->
                <span v-if="document">
                  <i class="fas fa-file-invoice mr-2 text-primary"></i>
                  <span>Accepte les documents----------------->{{ subInfo.documentPrice
                      }}<b style="color: rgb(63, 167, 247)">{{
                        subInfo.currency
                      }}</b></span>
                </span>
                <!--    <span v-else>
              <p>No Documents</p>
            </span> -->
              </div>

              <div style="margin-left:-49px">
                <!-- pc -->
                <span class="mx-2"></span>
                <span v-if="computer">
                    <span> <i class="fas fa-laptop mr-2 text-primary"></i>
                      Accepte les Ordinateur---------------------->{{ subInfo.computerPrice
                      }}<b style="color: rgb(63, 167, 247)">{{
                        subInfo.currency
                      }}</b></span>
                </span>
                <!--   <span v-else>
              <p>No Computer</p>
            </span> -->
              </div>

              <div>
                <textarea v-model="restriction" name="name"
                  style="font-family:sans-serif;margin-top:30px;font-size:1.2em;width:100%; height:60px;"
                  readonly></textarea>
              </div>

            </div>
          </div>
        </b-col>



        <b-col lg="6" class="sticky p-lg-0">
          <b-card class="shadow" style="border-radius:15px;height:60%">
            <div class="d-flex justify-content-between align-items-end flex-wrap">
              <h2 class="mb-0" style="justify-content:center; color:skyblue; font-weight:200px">Reserver</h2>

            </div>
            <hr>

            <form>
              <!-- Email input -->
              <div class="row">
                <div class="column">
                  <div class="form-outline mb-1">
                    Obligatoire*
                    <input
                      onkeyup="if(this.value.length > 0) document.getElementById('reservation_button').disabled = false; else document.getElementById('reservation_button').disabled = true;"
                      v-model="receiver" type="text" class="form-control" required />
                    <h6 class="mb-0" style=" color:skyblue; font-weight:20px"> Nom du destinataire</h6>

                  </div>
                </div>
                <div class="column">
                  <div class="form-outline mb-1">
                    Obligatoire*
                    <input
                    id="phone" 
              type="tel"
                name="tel"
                      onkeyup="if(this.value.length > 0) document.getElementById('reservation_button').disabled = false; else document.getElementById('reservation_button').disabled = true;"
                      v-model="tel" class="form-control" required />
                    <h6 class="mb-0" style=" color:skyblue; font-weight:20px"> Numéro du destinataire</h6>

                  </div>
                </div>
              </div>

              <div class="row" style="margin-top:10px">
                <div class="column">
                  <div class="form-outline mb-1">
                    Obligatoire*
                    <input
                      onkeyup="if(this.value.length > 0) document.getElementById('reservation_button').disabled = false; else document.getElementById('reservation_button').disabled = true;"
                      v-model="receivernumbercni" type="text" class="form-control" required />
                    <h6 class="mb-0" style=" color:skyblue; font-weight:20px"> Numéro de carte d'identité du destinataire</h6>
                  </div>
                </div>
                <div class="column">
                  <div class="form-outline mb-3">
                    Obligatoire*
                    <input v-bind="quantity"
                      @change="() => { if (quantitykilo > quantity || quantitykilo < 1) { quantitykilo = 1 } }"
                      v-model="quantitykilo" type="number" id="form4Example2" class="form-control" required />
                    <h6 class="mb-0" style=" color:skyblue; font-weight:20px"> Respectez l'intervalle de kilo(s) du voyageur</h6>
                  </div>

                </div>
              </div>


              <div class="row">
                <div class="column">
                  <div v-if="document" class="input_field checkbox_option">
                    <input v-if="document" v-model="document1" type="checkbox" id="cb1">
                    <label for="cb1" style="margin-left:5px">Avez-vous des documents ?</label>
                  </div>
                  <div class="form-outline mb-1" v-if="document1">
                    Obligatoire*
                    <input
                      onkeyup="if(this.value.length > 0) document.getElementById('reservation_button').disabled = false; else document.getElementById('reservation_button').disabled = true;"
                      v-model="quantDocument" type="number" class="form-control" required />
                    <h6 class="mb-0" style=" color:skyblue; font-weight:20px">Quantité de document(s)</h6>
                  </div>
                </div>
                <div class="column">
                  <div v-if="computer" class="input_field checkbox_option">
                    <input v-model="computer1" type="checkbox" id="cb2">
                    <label for="cb2" style="margin-left:5px">Avez-vous un ordinateur?</label>
                  </div>
                  <div v-if="computer1" class="form-outline mb-3">
                    Obligatoire*
                    <input v-model="quantPC" type="number" id="form4Example2" class="form-control" required />
                    <h6 class="mb-0" style=" color:skyblue; font-weight:20px">Quantité de PC</h6>
                  </div>
                </div>
              </div>

              <!-- Message input -->Obligatoire*
              <div class="form-outline mb-3">

                <textarea
                  onkeyup="if(this.value.length > 0) document.getElementById('reservation_button').disabled = false; else document.getElementById('reservation_button').disabled = true;"
                  v-model="description" class="form-control" rows="2" required></textarea>
                <h6 class="mb-0" style=" color:skyblue; font-weight:20px">La description</h6>
              </div>

              <button id="reservation_button" @click="book()" type="button" value="Click to begin!" style=" display:flex;
                      align-items:center;
                      justify-content:center;" class="create" disabled>
                <i class="fa fa-plus" style="font-size:20px;color:white; margin-top:3px;margin-left:-25px"></i>
                <span style="font-size:20px; margin-left:10px">
Réserver ce voyage</span></button>
              <!-- Submit button -->
            </form>
          </b-card>
        </b-col>
      </b-row>

    </b-container>
    <footerVue />
  </div>
</template>

<script>
    import $ from "jquery"
import lognavVue from "../components/lognav.vue"
import Swal from 'sweetalert2'
import footerVue from "@/components/footer.vue"
import bookingValidation from "@/mixins/validation/booking-validation.js"
import validateState from "@/mixins/validation/validate-state.js"

export default {
  name: "Reservation",
  components: {
    lognavVue,
    footerVue
  },
  mixins: [bookingValidation, validateState],
  data() {
    return {
        subInfo:[],
      stars: '',
      loading: true,
      id: this.$route.params.id,
      departuretown: '',
      destinationtown: '',
      quantity: '',
      computer: '',
      document: '',
      restriction: '',
      price: '',
      departuredate: '',
      arrivaldate: '',
      firstName: '',
      lastName: '',
      receivernumbercni: '',
      receiver: '',
      tel: '',
      document1: '',
      computer1: '',
      quantDocument: 0,
      quantPC: 0,
      quantitykilo: 0,
      description: '',
      date: '',
      profileimgage: '',
    }
  },
  mounted(){
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

 var input = document.getElementById("phone");
    window.intlTelInput(input,({
      // options here 
    }));
 
    $(document).ready(function() {
        $('.iti__flag-container').click(function() { 
          var countryCode = $('.iti__selected-flag').attr('title');
          countryCode = countryCode.replace(/[^0-9]/g,'')
          $('#phone').val("+"+countryCode);
       });
    });
    },
  async created() {
    var requestOptions1 = { method: 'GET', redirect: 'follow' };

    fetch("http://46.105.36.240:3000/sub/informations/view", requestOptions1)
      .then(response => response.text())
      .then(result => {
        if (JSON.parse(result).length !== 0) {
          this.subInfo = JSON.parse(result)[0]
        }
      })
      .catch(error => console.log('error', error));
    var axios = require('axios');
    var config = {
      method: 'get',
      url: 'http://46.105.36.240:3000/announcement/' + this.id + '/users',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access-token')
      },
    };

    axios(config)
      .then(res => {
        this.stars = res.data.userDto.stars;
        this.profileimgage = res.data.userDto.profileimgage
        this.firstName = res.data.userDto.firstName;
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
        this.loading = false

        localStorage.setItem('annid', res.data.id);
        localStorage.setItem('Ann-departuredate', res.data.departuredate);
        localStorage.setItem('Ann-arrivaldate', res.data.arrivaldate);
        localStorage.setItem('Ann-departuretown', res.data.departuretown);
        localStorage.setItem('Ann-destinationtown', res.data.destinationtown);

        localStorage.setItem('Ann-restriction', res.data.restriction);
        localStorage.setItem('Ann-quantity', res.data.quantity);
        localStorage.setItem('Ann-price', res.data.price);
        localStorage.setItem('Ann-computer', res.data.computer);
        localStorage.setItem('Ann-document', res.data.document);

        localStorage.setItem('Ann-id', res.data.userDto.id);
        localStorage.setItem('Ann-firstName', res.data.userDto.firstName);
        localStorage.setItem('Ann-lastName', res.data.userDto.lastName);
        localStorage.setItem('Ann-email', res.data.userDto.email);
        localStorage.setItem('Ann-pseudo', res.data.userDto.pseudo);
        localStorage.setItem('Ann-id', res.data.userDto.id);

        //localStorage.setItem('refresh-token', refreshtoken);
        //localStorage.setItem('access-token', accesstoken);
      })
      .catch(function (error) {
        console.log(error);
        localStorage.clear()
        window.location.href = "/"
      });

  },
  methods: {
    // Sets the visitors count according to type (adult or infant)
    setVisitorCount(type, $event) {
      if (type === "adult") {
        this.form.adultCount = $event;
      }
    },

    // if basic requirements for booking is satisfied, redirect to reservation page with props
    book() {
      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: "Si le kilo saisi n'est pas dans l'intervalle, il est réduit  1 kg!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, Reserver!'
      }).then((result) => {
        if (result.isConfirmed) {
          var axios = require('axios');
          var data = JSON.stringify({
            "description": this.description,
            "documents": this.document1,
            "computer": this.computer1,
            "receiver": this.receiver,
            "track": "string",
            "quantityDocument": this.quantDocument,
            "quantityComputer": this.quantPC,
            "tel": this.tel,
            "receivernumbercni": this.receivernumbercni,
            "status": "ENABLED",
            "date": this.date,
            "quantitykilo": this.quantitykilo,
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
              "id": this.id,
              "departuredate": localStorage.getItem('Ann-departuredate'),
              "arrivaldate": localStorage.getItem('Ann-arrivaldate'),
              "departuretown": localStorage.getItem('Ann-departuretown'),
              "destinationtown": localStorage.getItem('Ann-destinationtown'),
              "quantity": localStorage.getItem('Ann-quantity'),
              "computer": localStorage.getItem('Ann-computer'),
              "restriction": localStorage.getItem('Ann-restriction'),
              "document": localStorage.getItem('Ann-document'),
              "status": "ENABLED",
              "cni": "string",
              "ticket": "string",
              "covidtest": "string",
              "price": localStorage.getItem('Ann-price'),
              "validation": true,
              "userDto": {
                "id": localStorage.getItem('Ann-id'),
                "firstName": localStorage.getItem('Ann-firstName'),
                "lastName": localStorage.getItem('Ann-lastName'),
                "pseudo": localStorage.getItem('Ann-pseudo'),
                "email": localStorage.getItem('Ann-email'),
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
            method: 'post',
            url: 'http://46.105.36.240:3000/addReservation',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('access-token')
            },
            data: data
          };

          axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
              Swal.fire(
                'Réussie!',
                'Votre réservation a été réussie!.',
                'success'
              )
              window.location.href = "/MyReservations"
            })
            .catch(function (error) {
              console.log(error);
              Swal.fire(
                'Échec!',
                "Quelque chose s'est mal passé !",
                'error'
              )
            });

        }
      })
    },

    // magically fills the form.
    formMagic() {
      const date = new Date();

      this.form.adultCount = 2;
      this.form.infantCount = 1;
      this.form.checkInDate = new Date();
      this.form.checkOutDate = new Date(date.setDate(date.getDate() + 3));
      this.form.bedSize = "king";
      this.form.included = "all-in";
    }
  }
};
</script>

<style lang="scss">
.column {
  float: center;
  width: 50%;

  padding-left: 10px;
  padding-right: 10px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>