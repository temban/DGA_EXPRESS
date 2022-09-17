<template>
  <div style="">
   <div v-if="loading" style="background:rgba(0,0,0,0.3);height:100vh;width:100vw;position:fixed;top:0;left:0;z-index: 100;"> 
         <div class="ring">Loading</div>
    </div>
    <div style="margin-left: 60px">
      <lognavVue />
    </div>
    <usersidebarVue />
    <b-container>
      <input id="step2" type="checkbox" />
      <input id="step3" type="checkbox" />

      <div id="part1" class="form-group">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Nouveau Voyage</h3>
          </div>

          <form class="form-body">
            <div>
              <div>
                <label class="form-label" for="name">
Date de départ</label>
                <input
                  v-model="departuredate"
                  class="input-text"
                  type="date"
                  name="date"
                  id="date"
                  placeholder="Date de départ"
                />
              </div>

              <div>
                <label class="form-label" for="last-name">
Ville de départ</label>
                <input
                  id="departuretown"
                  type="text"
                  placeholder="Ville, Pays"
                  ref="origin"
                  class="input-text"
                />
              </div>
              <div>
                <label class="form-label" for="mail">Prix par Kilo <span style="font-weight:bold; color:orangered">/{{subInfo.currency}}</span></label>
                <input
                  v-model="price"
                  class="input-text"
                  type="number"
                  name="mail"
                  id="input"
                  placeholder="name@overwatch.com"
                />
              </div>

              <div class="form-footer">
                <div class="form-check">
                  <input
                    v-model="computer"
                    type="checkbox"
                    name="newsletter"
                    id="newsletter"
                  />
                  <label for="newsletter">Avez-vous un ordinateur?<span style="font-weight:bold; color: orangered"> {{"  " +subInfo.computerPrice + subInfo.currency}}/Pc </span></label>
                </div>
         <label style="margin-bottom:5px" class="form-label" for="name">La description</label>
            <textarea id="input" class="input-text"  v-model="restriction" name="name"  style="color:black;font-size:1.2em;width:210%" ></textarea>
          
                <!--<button
                  type="button"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                  class="create1"
                >
                  Cancel
                </button>-->
              </div>
            </div>

            <div>
              <div>
                <label class="form-label" for="password">Date d'arrivée</label>
                <input
                  v-model="arrivaldate" 
                  class="input-text"
                  type="date"
                  name="date"
                  id="date"
                  placeholder="Date d'arrivée"
                />
              </div>
              <div>
                <label class="form-label" for="password-confirmation"
                  >Ville de destination</label
                >
                <input
                  id="destinationtown"
                  type="text"
                  placeholder="Ville, Pays"
                  ref="destination"
                  class="input-text"
                />
              </div>
              <div>
                <label class="form-label" for="password">Quantité <span style="font-weight:bold; color:orangered">/Kg</span></label>
                <input
                  v-model="quantity"
                  class="input-text"
                  type="number"
                  name="date"
                  id="input"
                  placeholder="Quantity"
                />
              </div>

              <div class="form-footer">
                <div class="form-check">
                  <input
                    v-model="document"
                    type="checkbox"
                    name="conditions"
                    id="conditions"
                  />
                  <label for="conditions" class="highlighted">
                    Avez-vous un document ? <span style="font-weight:bold; color: orangered"> {{" "+subInfo.documentPrice + subInfo.currency}}/Doc</span>
                  </label>
                </div>

                <label
                  @click="onSubmit"
                  for="step2"
                  class="create"
                  style="
                  margin-top:175px; 
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <div type="button">+
Créer une annonce</div>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div id="part2" class="form-group">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Ajoutez vos documents...</h3>
          </div>

          <form class="form-body" style="margin-bottom: -32px">
            <div>
           
              <div>
                
                <div style="flex-direction:row; display:flex">
                  <div class="file file--upload">
                    <label for="covid">
                      <i class="material-icons">cloud_upload</i><h6>Covid Test </h6>
                    </label>
                    <input
                      id="covid"
                      type="file"
                      @change="previewImage"
                      accept="image/gif,application/pdf,
                        image/jpeg, image/png"
                     
                    />
                    
                  </div>
  <div  style="top:-15px; position:relative">

<div class="image-preview" v-if="covidtest.length > 0">
                    <button
                    type="button"
                    style="height: 45px; width: 45px; padding-bottom:5px; border-radius:50px; "
                    class="btn btn-sm btn-success "
                  >
                    <i class="fa fa-check" style="font-size:25px"></i>
                  </button>
                  </div>
                  <div class="image-preview" v-else>
                     <button
                    type="button"
                    style="height: 45px; width: 45px; padding-bottom:5px; border-radius:50px; "
                    class="btn btn-sm btn-secondary "
                  >
                    <i class="fa fa-check" style="font-size:25px"></i>
                  </button>
                  </div>

  </div>


                  
                </div>
              </div>


              
              <div style="margin-top:60px">
                <div style="flex-direction:row; display:flex">
   
                  <div class="file file--upload" > 
                    <label for="tiket">
                      <i class="material-icons">cloud_upload</i><h6> Billet d'avion</h6>
                    </label>
                    <input
                    style="width:100%"
                      id="tiket"
                      type="file"
                      @change="previewImage1"
                        accept="application/pdf,
                        image/jpeg, image/png"
                    />
                  </div>

<div style="top:-15px; position:relative">
    <div class="image-preview" v-if="tiket.length > 0">
                    <button
                    type="button"
                    style="height: 45px; width: 45px; padding-bottom:5px; border-radius:50px; "
                    class="btn btn-sm btn-success "
                  > 
                    <i class="fa fa-check" style="font-size:25px"></i>
                  </button>
                  </div>
                  <div class="image-preview" v-else>
                     <button
                    type="button"
                    style="height: 45px; width: 45px; padding-bottom:5px; border-radius:50px; "
                    class="btn btn-sm btn-secondary "
                  >
                    <i class="fa fa-check" style="font-size:25px"></i>
                  </button>
                  </div>
</div>
                
                </div>
              
              </div>
              
            </div>

            <div> 

              <div>
                <div>

                  <div class="file file--upload">
                    <label for="cni" >
                      <i class="material-icons">cloud_upload</i><h6> Passeport/CNI</h6>
                    </label>
                    <input
                      id="cni"
                      type="file"
                      @change="previewImage2"
                      accept="image/gif,
                        image/jpeg, image/png"
                    />
                  </div>

                  <div class="image-preview" v-if="cni_p.length > 0">
                    <img class="preview" :src="cni_p" />
                  </div>

                  <div class="image-preview" v-else>
                    <img
                            src="@/assets/img/hotels/passport.jpg"
                            class="preview"
                            style="margin-right: 25px; "
                          />
                  </div>

                </div>
              </div>
              <div class="form-footer">
                <label
                   v-on:click="ticketUpload()"
                  class="create"
                  style="
                    margin-bottom: 30px;
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

    <div>
      <input type="text" v-model="location" />
      <ul>
        <li v-for="(result, i) in searchResults" :key="i">
          {{ result }} // list of all places
        </li>
      </ul>
    </div>

    <div style="margin-top: 30px; margin-bottom: 0px">
      <footerVue />
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Swal from "sweetalert2";
import footerVue from "@/components/footer.vue";
import usersidebarVue from "../components/usersidebar.vue";
import lognavVue from "../components/lognav.vue";
export default {
  name: "CreateAnnouncement",
  data() {
    return {
        subInfo:[],
        loading: false,
      modalShow: false, 
      departuredate: "2022-11-13T09:30:10.925Z",
      arrivaldate: "2022-12-13T09:30:10.925Z",
      departuretown: this.place,
      destinationtown: this.place,
      quantity: 23,
      computer: null,
      restriction: "no bottles",
      document: null,
      cni: "Empty",
      ticket: "Empty",
      tiket: "",
      covidtest: "",
      cni_p: "",
      price: 200,
      id: "",
      autocomplete: "",
    };
  },

  components: {
    lognavVue,
    usersidebarVue,
    footerVue,
  },
  created() {
  },
  mounted() {
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

    $('body').on('change', '#tiket', function(evt) {
        var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
 charactersLength));
   }
           const input = evt.currentTarget;
           const previousFile = input.files[0];
        //   const oldfilename = input.files[0].name;
  const newName = result + document.getElementById("tiket").files[0].name;
  const newFile = new File([previousFile], newName);   
  
  // hack to update the selected file
  const dT = new DataTransfer();
  dT.items.add(newFile);
  input.files = dT.files;
  console.log('Ticket file: ' + input.files.item(0).name);
});
    
$('body').on('change', '#covid', function(evt) {
        var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength)); 
   }
           const input = evt.currentTarget;
           const previousFile = input.files[0];
        //   const oldfilename = input.files[0].name;
  const newName = result + document.getElementById("covid").files[0].name;
  const newFile = new File([previousFile], newName);   
  
  // hack to update the selected file
  const dT = new DataTransfer(); 
  dT.items.add(newFile);
  input.files = dT.files;
  console.log('Covid file: ' + input.files.item(0).name);
});
    $('body').on('change', '#cni', function(evt) {
        var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
           const input = evt.currentTarget;
           const previousFile = input.files[0];
        //   const oldfilename = input.files[0].name;
  const newName = result + document.getElementById("cni").files[0].name;
  const newFile = new File([previousFile], newName);   
  
  // hack to update the selected file
  const dT = new DataTransfer(); 
  dT.items.add(newFile);
  input.files = dT.files;
  console.log('CNI file: ' + input.files.item(0).name);
});

   var requestOptions1 = { method: 'GET', redirect: 'follow' };

        fetch("http://46.105.36.240:3000/sub/informations/view", requestOptions1)
            .then(response => response.text())
            .then(result => {
                if (JSON.parse(result).length!==0) {
                    this.subInfo = JSON.parse(result)[0]
                } 
            })
            .catch(error => console.log('error', error));

    
    for (let ref in this.$refs) {
      let autocomplete = new window.google.maps.places.Autocomplete(
        this.$refs[ref]
      );

      autocomplete.addListener("place_changed", () => {
        let place = autocomplete.getPlace();
        console.log(place);
      });
    }
    
  },
  methods: {

 makeid() {

   var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 5; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
     let ticket = document.getElementById("tiket").files[0].name;
      this.tiket= result+ticket;
   console.log(this.tiket);
},
 


    async ticketUpload() {
this.loading=true;
         this.tiket = document.getElementById("tiket").files[0];
  
        let cniUpload =()=>{
          let covidUpload =()=>{
              this.covid = document.getElementById("covid").files[0];
             

      var axios = require("axios");
      var FormData = require("form-data");
      var data = new FormData();
      data.append("file", this.covid);

      var config = {
        method: "put",
        url:
          "http://46.105.36.240:3000/upload/covid/test/image/" +
          localStorage.getItem("AnnIdPic"),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
        data: data,
      };

       axios(config)
        .then(function (response) {
          Swal.fire(
            "Succès!",
            "Vos fichiers ont été envoyés.",
            "success"
          );
          window.location.href = "/MyAnnouncements";
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          Swal.fire("échec!", "Réessayer.", "warning");
          window.location.reload();
          console.log(error);
        });
            }
          this.cni = document.getElementById("cni").files[0];

      var axios = require("axios");
      var FormData = require("form-data");
      var data = new FormData();
      data.append("file", this.cni);

      var config = {
        method: "put",
        url:
          "http://46.105.36.240:3000/upload/passport/image/" +
          localStorage.getItem("AnnIdPic"),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
            if (response.status === 200) {
              covidUpload();
             } else{
                 Swal.fire("échec!", "Réessayer.", "warning");
                 window.location.reload();
             }
        })
        .catch(function (error) {
          Swal.fire("échec!", "Réessayer.", "warning");
          window.location.reload();
          console.log(error);
        });
        }
      var axios = require("axios");
      var FormData = require("form-data");
      var data = new FormData();
      data.append("file", this.tiket);

      var config = {
        method: "put",
        url:
          "http://46.105.36.240:3000/upload/tiket/image/" +
          localStorage.getItem("AnnIdPic"),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
        data: data,
      };

      await axios(config)
        .then(function (response) {
             if (response.status === 200) {
              cniUpload();
             } else{
                 Swal.fire("échec!", "Réessayer.", "warning");
                 window.location.reload();
             }
            
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
           Swal.fire("Billet d'avion!", "échec!", "warning");
           window.location.reload();
          console.log(error);
        });
    },

    previewImage: function (event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          this.covidtest = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    previewImage1: function (event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          this.tiket = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    previewImage2: function (event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          this.cni_p = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    onSubmit(event) {

   if(document.getElementById("input").value==0){
         Swal.fire("échec!", "remplissez tous les champs de texte!", "warning");
      } 
      else if(document.getElementById("date").value==0){
         Swal.fire("échec!", "La date n'a pas été remplie!", "warning");
      }else{
      Swal.fire({
        title: "Complétez votre voyage",
        text: "Pour compléter votre voyage ajouter les documents requis!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui, Completer !",
      }).then((result) => {
        if (result.isConfirmed) {
          event.preventDefault();
          var axios = require("axios");
          var data = JSON.stringify({
            departuredate: this.departuredate,
            arrivaldate: this.arrivaldate,
            departuretown: document
              .getElementById("departuretown")
              .value.toLowerCase(),
            destinationtown: document
              .getElementById("destinationtown")
              .value.toLowerCase(),
            quantity: this.quantity,
            computer: this.computer,
            restriction: this.restriction,
            document: this.document,
            cni: "string",
            ticket: "string",
            covidtest: "string",
            price: this.price,
            validation: false,
            userDto: {
              id: localStorage.getItem("userId"),
              firstName: localStorage.getItem("firstName"),
              lastName: localStorage.getItem("lastName"),
              pseudo: localStorage.getItem("pseudo"),
              email: localStorage.getItem("email"),
              roleDtos: [
                {
                  id: 2,
                  name: "ROLE_CLIENT",
                },
              ],
              password: "qwerty.123",
              status: "ENABLED",
            },
          });

          var config = {
            method: "post",
            url: "http://46.105.36.240:3000/createAnnouncement",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("access-token"),
            },
            data: data,
          };
          axios(config)
            .then(function (response) {
              console.log(response.data.id);
              
              localStorage.setItem("AnnIdPic", response.data.id);
              localStorage.setItem(
                "newAnnSourceTown",
                response.data.departuretown
              );
              localStorage.setItem(
                "newAnnDestinationTown",
                response.data.destinationtown
              );
              console.log(JSON.stringify(response.data.id));
            })
            .catch(function (error) {
              Swal.fire("échec!", "Réessayer.", "warning");
               window.location.reload();
              console.log(error);
            });
        }
      });   
      }
    },
  },
};
</script>


<style lang="scss">
$yellow: #f5ba1a;
$black: #000000;
$grey: #cccccc;

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
  margin-bottom: 20px;
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
    > div {
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
    > span {
      position: absolute;
      left: 0;
      top: 0;
      color: #333;
      height: 100%;
      border-right: 1px solid $grey;
      text-align: center;
      width: 30px;
      > i {
      }
    }
  }
  .textarea_field {
    > span {
      > i {
      }
    }
  }
  input {
    &[type="text"],
    &[type="email"],
    &[type="password"] {
      width: 500px;
      padding: 8px 10px 9px 35px;
      height: 35px;
      border: 1px solid $grey;
      box-sizing: border-box;
      outline: none;
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }
    &[type="text"]:hover,
    &[type="email"]:hover,
    &[type="password"]:hover {
      background: #f8f8f8;
    }
    &[type="text"]:focus,
    &[type="email"]:focus,
    &[type="password"]:focus {
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
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: darken($yellow, 7%);
      }
      &:focus {
        background: darken($yellow, 7%);
      }
    }
    &[type="checkbox"],
    &[type="radio"] {
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
.checkbox_option {
  label {
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
    color: darken($yellow, 7%);
  }
}
@-webkit-keyframes check {
  0% {
    height: 0;
    width: 0;
  }
  25% {
    height: 0;
    width: 7px;
  }
  50% {
    height: 20px;
    width: 7px;
  }
}

@keyframes check {
  0% {
    height: 0;
    width: 0;
  }
  25% {
    height: 0;
    width: 7px;
  }
  50% {
    height: 20px;
    width: 7px;
  }
}

@-webkit-keyframes expand {
  0% {
    -webkit-transform: scale3d(1, 0, 1);
    opacity: 0;
  }
  25% {
    -webkit-transform: scale3d(1, 1.2, 1);
  }
  50% {
    -webkit-transform: scale3d(1, 0.85, 1);
  }
  75% {
    -webkit-transform: scale3d(1, 1.05, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    opacity: 1;
  }
}

@keyframes expand {
  0% {
    -webkit-transform: scale3d(1, 0, 1);
    transform: scale3d(1, 0, 1);
    opacity: 0;
  }
  25% {
    -webkit-transform: scale3d(1, 1.2, 1);
    transform: scale3d(1, 1.2, 1);
  }
  50% {
    -webkit-transform: scale3d(1, 0.85, 1);
    transform: scale3d(1, 0.85, 1);
  }
  75% {
    -webkit-transform: scale3d(1, 1.05, 1);
    transform: scale3d(1, 1.05, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    opacity: 1;
  }
}

@-webkit-keyframes bounce {
  0% {
    -webkit-transform: translate3d(0, -25px, 0);
    opacity: 0;
  }
  25% {
    -webkit-transform: translate3d(0, 10px, 0);
  }
  50% {
    -webkit-transform: translate3d(0, -6px, 0);
  }
  75% {
    -webkit-transform: translate3d(0, 2px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes bounce {
  0% {
    -webkit-transform: translate3d(0, -25px, 0);
    transform: translate3d(0, -25px, 0);
    opacity: 0;
  }
  25% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
  50% {
    -webkit-transform: translate3d(0, -6px, 0);
    transform: translate3d(0, -6px, 0);
  }
  75% {
    -webkit-transform: translate3d(0, 2px, 0);
    transform: translate3d(0, 2px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
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
}

.input-text {
  background-color: var(--white);
  box-sizing: border-box;
  padding: 15px 12px;
  font-family: "Montserrat", sans-serif;
  border-radius: 8px;
  margin-bottom: 30px;
  border: 2px solid transparent;
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
  border: 1px solid rgba(0, 0, 0, 0.257);
  padding: 5px;
}

.file {
  position: relative;
  width: 78%;
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
.custom-file-input {
  padding: 5px;
  color: #999;
  border: 1px solid #000;
  vertical-align: middle;
}
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}

.custom-file-input {
  padding: 5px;
  color: #999;
  border: 1px solid #000;
  vertical-align: middle;
}
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: "Browse";
  color: #666;
  display: inline-block;
  background: #fff;
  border: 1px solid #999;
  border-radius: 3px;
  margin: -3px 0 -3px -3px;
  padding: 5px 20px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-align: center;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
}
.custom-file-input:hover::before {
  border-color: black;
}
.custom-file-input:active {
  outline: 0;
}
.custom-file-input:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
.columnButtton {
  float: left;
  width: 50%;
    padding-left: 20px;
}
.columnImage {
  float: right;
  width: 50%;
    padding-right: 20px;
}
.row{
    
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
