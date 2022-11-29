<template>

    <div style="">
        <div style="margin-left:60px;">
            <lognavVue />
        </div>
        <usersidebarVue />

<div v-if="loading" style="background:rgba(0,0,0,0.3);height:100vh;width:100vw;position:fixed;top:0;left:0;z-index: 100;"> 
         <div class="ring">Loading</div>
    </div>

 <b-container  style="margin-bottom:60px; position:relative">
      <div id="part1" class="form-group">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Modifier Article</h3>
          </div>
          <form class="form-body">
            <div>
              <div>
                <label class="form-label" for="name">Nom de d'article</label>
                <input
                  v-model="art.name"
                  class="input-text"
                  type="text"
                  name="date"
                  id="date"
                  placeholder="Nom de d'article"
                />
              </div>

            
              <div>
                <label class="form-label" for="mail">Quantité</label>
                <input
                  v-model="art.quantity"
                  class="input-text"
                  type="number"
                  name="mail"
                  id="mail"
                  placeholder="Quantité"
                />
              </div>
                <div>
                <label class="form-label" for="password">Catégories </label>
               <select style="width:100%; height:50px; border-radius: 10px; margin-bottom:25px; padding: 5px 0 5px 20px; font-size: 18px;" v-model="art.cathegory" name="cathegory" class="form-select special-select"
                        aria-label="Default select example">
                        <option  v-for="item in cates" :value="item" v-bind:key="item.id">{{ item.name }}</option>
                      <input 
                     
                  class="input-text"
                  type="text"
                  name="mail"
                  id="mail"
                  placeholder="Catégories"
                />
                      </select>
              </div>

                <label style="margin-bottom:5px" class="form-label" for="name">La Description</label>
            <textarea class="input-text"  v-model="art.description" name="name"  style="color:black;font-size:1.2em;width:210%; margin-bottom: 100px;" ></textarea>
          
              <!--<div class="form-footer">

                <button
                  type="button"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                  class="create1"
                >
                  Cancel
                </button>
              </div>-->
            </div>

            <div>
                  <div>
                <label class="form-label" for="last-name">Adresse</label>
                <input
                 ref="location"
                 v-model="art.location"
                  class="input-text"
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Location"
                />

              </div>
                <!--<label class="form-label" for="last-name">test</label>
                <place-autocomplete-field  
                 v-model="art.location" 
                 v-place-autofill.city="location"
                  class="input-text"
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Location"
                api-key="AIzaSyBqGsItihGIZC0ne2zMmsrGmNqfyMGhG4Y"
                ></place-autocomplete-field>-->

              <div>
                <label class="form-label" for="password">Prix <span style="font-weight:bold; color:orangered">  {{this.subInfo.currency}}</span></label>
                <input
                v-model="art.price"
                  class="input-text"
                  type="number"
                  name="date"
                  id="date"
                  placeholder="Arrival Date"
                />
              </div>
              
              <h5 style="position:relative; margin-bottom: -15px; margin-left: 10px;" >Je souhaite être payé par?</h5>

<div class="form-footer">
  
  <div   style="position:relative; display:flex; margin-top: 25px;">
    <div>
                  <label class="control control--radio">Mobile Money
      <input type="radio" name="radio" id="chkPassport" />
      <div class="control__indicator"></div>
    </label>
     <div class="select" id="dvPassport" style="display:none;">

      <input
      style="width: 230px;"
                v-model="art.paymentMethod"
                  class="input-text"
                  id="phone" 
              type="tel"
                name="tel"
                  placeholder="+237 670-105-992"
                />
    </div>
                </div>
   


                <div style="position:absolute; left:180px"> 

                  <label class="control control--radio">Carte Bancaire
      <input type="radio" name="radio" id="chkPassport1" />
      <div class="control__indicator"></div>
    </label>
         <div class="select" id="dvPassport1" style="display:none;" >
          <input id="credit-card-number" inputmode="numeric" v-model="art.paymentMethod" style="width: 250px;"
                  class="input-text" placeholder="4242 4242 4242 4242 4242"/>

        
    </div>
                </div>

  </div>


                <label
                 @click="onSubmit"
                  for="step2"
                  class="create"
                  style="position: absolute;width: 320px; bottom:30px; right: 30px; 
                    display: flex; 
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <div type="button"> Envoyer</div>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>

  <div class="form-group">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Modifier les images de l'articles</h3>
          </div>

          <form class="form-body" style="margin-bottom: -32px">
            <div>
              <div>
              
                <div>
                  <div class="file file--upload">
                    <label for="items1">
                      <i class="material-icons">cloud_upload</i><h6>Image principale</h6>
                    </label>
                    <input
                      id="items1"
                      type="file"
                      @change="item1"
                      accept="image/gif,application/pdf,
                        image/jpeg, image/png"
                     
                    />
                    
                  </div>
                  <div class="image-preview" v-if="pic1.length > 0">
                    <img class="preview" :src="pic1" />
                  </div> 
                  <div class="image-preview" v-else>
                    <img
                            src="@/assets/img/hotels/item.jpg"
                            class="preview"
                            style="margin-right: 25px; "
                          />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="file file--upload">
                    <label for="items2"> 
                      <i class="material-icons">cloud_upload</i><h6>Image-1</h6>
                    </label>
                    <input
                      id="items2"
                      type="file"
                      @change="item2"
                    />
                  </div>
 <div class="image-preview" v-if="pic2.length > 0">
                    <img class="preview" :src="pic2" />
                  </div>
                  <div class="image-preview" v-else>
                    <img
                            src="@/assets/img/hotels/item.jpg"
                            class="preview"
                            style="margin-right: 25px; "
                          />
                  </div>
                
                </div>
               
              </div>
              
            </div>

            <div>
              <div>
                <div>
                  <div class="file file--upload">
                    <label for="items3">
                      <i class="material-icons">cloud_upload</i><h6>Image-2</h6>
                    </label>
                    <input
                      id="items3"
                      type="file"
                      @change="item3"
                      accept="image/*" 
                    />
                  </div>
 <div class="image-preview" v-if="pic3.length > 0">
                    <img class="preview" :src="pic3" />
                  </div>
                  <div class="image-preview" v-else>
                    <img
                            src="@/assets/img/hotels/item.jpg"
                            class="preview"
                            style="margin-right: 25px; "
                          />
                  </div>
                 
                </div>
                 
              </div>
                <div class="form-footer">

                <label 
                  v-on:click="uploadItem2()"
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
        <footerVue />
    </div>

</template>

<script>
import $ from 'jquery';
import Swal from 'sweetalert2';
import footerVue from "@/components/footer.vue";
import lognavVue from "../components/lognav.vue";
import usersidebarVue from "../components/usersidebar.vue";
export default {
    name: "EditAnnouncement",
    data() {
        return {
          subInfo:[],
             loading: false,
             pic1:'',
      pic2:'',
      pic3:'',
            id: this.$route.params.id,
            modalShow: false,
            cates: [],
            cate: {},
            art: {}
            
        }
    },

    components: {
        lognavVue,
        usersidebarVue,
        footerVue
    },
mounted() {

  

  const ccInputElement = document.querySelector('#credit-card-number');

ccInputElement.format = () => {
	// split at cursor position
	let cursorPosition = ccInputElement.selectionStart;
	let partBeforeCursorPosition = ccInputElement.value.substring(0, cursorPosition);
	let partAfterCursorPosition = ccInputElement.value.substring(cursorPosition);
	
	// remove whitespace, set cursor position accordingly
	const originalLength = partBeforeCursorPosition.length;
	partBeforeCursorPosition = partBeforeCursorPosition.replace(/\s/gi, '');
	cursorPosition -= originalLength - partBeforeCursorPosition.length;
	partAfterCursorPosition = partAfterCursorPosition.replace(/\s/gi, '');
	const ccNumber = partBeforeCursorPosition + partAfterCursorPosition;
	
	// break into groups of 4 digits
	const parts = ccNumber.match(/.{1,4}/g);
	
	// add spaces, set cursor position accordingly
	ccInputElement.value = parts?.join(' ') || '';
	cursorPosition += Math.floor(cursorPosition * 1/4);
	ccInputElement.setSelectionRange(cursorPosition, cursorPosition);
};

ccInputElement.addEventListener('input', ccInputElement.format);

ccInputElement.addEventListener('keydown', event => {
	const cursorPosition = ccInputElement.selectionStart;

	// when the cursor is positioned after a space, deleting applies to the space and the digit before the space
	if (event.key == 'Backspace') {	
		// if space before cursor and no selection, remove two characters and set cursor position accordingly
		if (cursorPosition == ccInputElement.selectionEnd
				&& ccInputElement.value[cursorPosition - 1] == ' ') {
			event.preventDefault();
			const newCursorPosition = cursorPosition - 2;
			ccInputElement.value = ccInputElement.value.substring(0, newCursorPosition) + ccInputElement.value.substring(cursorPosition);
			ccInputElement.setSelectionRange(newCursorPosition, newCursorPosition);
			ccInputElement.format();
		}
	}
	else if (event.key == 'ArrowRight') {
		if (ccInputElement.value[cursorPosition + 1] == ' ') {
			const newCursorPosition = cursorPosition + 1;
			ccInputElement.setSelectionRange(newCursorPosition, newCursorPosition);
		}
	}
	else if (event.key == 'ArrowLeft') {
		if (ccInputElement.value[cursorPosition - 1] == ' ') {
			const newCursorPosition = cursorPosition - 1;
			ccInputElement.setSelectionRange(newCursorPosition, newCursorPosition);
		}
	}
});

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



    $(function () {
        $("#chkPassport").click(function () {
            if ($(this).is(":checked")) {
                $("#dvPassport").show();
                $("#dvPassport1").hide();
            } else {
                $("#dvPassport").hide();
                $("#AddPassport").show();
            }
        });
    });
    $(function () {
        $("#chkPassport1").click(function () {
            if ($(this).is(":checked")) {
                $("#dvPassport1").show();
                $("#dvPassport").hide();
            } else {
                $("#dvPassport1").hide();
                $("#AddPassport1").show();
            }
        });
    });



    for (let ref in this.$refs) {
          let autocomplete = new window.google.maps.places.Autocomplete(this.$refs[ref]);

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        console.log(place);
       })
    }

    var requestOptions1 = { method: 'GET', redirect: 'follow' };

fetch("http://46.105.36.240:3000/sub/informations/view", requestOptions1)
    .then(response => response.text())
    .then(result => {
        if (JSON.parse(result).length!==0) {
            this.subInfo = JSON.parse(result)[0]
        } 
    })
    .catch(error => console.log('error', error));
},
    async created() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("access-token"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://46.105.36.240:3000/cathegories", requestOptions)
            .then(response => response.text())
            .then(result => this.cates = JSON.parse(result))
            .catch(error => console.log('error', error));


        fetch("http://46.105.36.240:3000/articles/" + this.id, requestOptions)
            .then(response => response.text())
            .then(result => {
                this.art = JSON.parse(result)
                this.cate = this.art.cathegory
                console.log(result);
            })
            .catch(error => {console.log('error', error)
                  
        localStorage.clear()
        window.location.href = "/"
          });

    },
    methods: {

  async uploadItem2(){
    this.loading=true;
 let uploadItem3 =()=>{ 
    let uploadItem1 =()=>{
     this.pic1 = document.getElementById('items1').files[0];

var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
data.append('file', this.pic1);
data.append('articleId', this.id);

var config = {
  method: 'put',
  url: 'http://46.105.36.240:3000/upload/main/article/image',
  headers: { 
    'Content-Type': 'application/json', 
'Authorization': 'Bearer ' + localStorage.getItem('access-token'),
  },
  data : data
};

axios(config)
.then(function (response) {
  Swal.fire("Succès!", "Vos images ont été envoyés.", "success");
     window.location.href = "/MyArticles"
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  Swal.fire("échec!", "Réessayer.", "warning");
  console.log(error);
  window.location.reload();
});
    }
        this.pic3 = document.getElementById('items3').files[0];

        var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
data.append('file', this.pic3);

var config = {
  method: 'put',
   url: 'http://46.105.36.240:3000/upload/article/images/'+this.id,
  headers: { 
    'Content-Type': 'application/json', 
'Authorization': 'Bearer ' + localStorage.getItem('access-token'),
  },
  data : data
};

 axios(config)
.then(function (response) {
   if (response.status === 200) {
              uploadItem1();
             }
})
.catch(function (error) {
  Swal.fire("échec!", "Réessayer.", "warning");
  console.log(error);
  window.location.reload();
});

 }
       this.pic2 = document.getElementById('items2').files[0];

        var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
data.append('file', this.pic2);

var config = {
  method: 'put',
  url: 'http://46.105.36.240:3000/upload/article/images/'+this.id,
  headers: { 
    'Content-Type': 'application/json', 
'Authorization': 'Bearer ' + localStorage.getItem('access-token'),
  },
  data : data
};

await axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
     if (response.status === 200) {
              uploadItem3();
             }
})
.catch(function (error) {
  Swal.fire("échec!", "Réessayer.", "warning");
  console.log(error);
   window.location.reload();
});
 },

 




    item1(event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          this.pic1 = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    item2(event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          this.pic2 = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    item3(event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          this.pic3 = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },


        onSubmit(event) {

          Swal.fire({
  title: 'Souhaitez-vous enregistrer les modifications?',
  confirmButtonText: 'Envoyer',
  denyButtonText: `Annuler`,
}).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                     this.loading=true; 
                    event.preventDefault()
                    // fonction de update
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");
                    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("access-token"));

                    var raw = JSON.stringify(this.art);

                    var requestOptions = {
                        method: 'PUT',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                    };

                    fetch("http://46.105.36.240:3000/update/article/", requestOptions)
                        .then(response => response.text())
                        .then(result => {
                          Swal.fire('Enregistrée!', '', 'success')
                            console.log(result);
                            window.location.reload();
                            
                        })
                        .catch(error => {
                          Swal.fire(
      'échec!',
      'Réessayer!.',
      'error'
    )
                            window.location.reload();
                            console.log('error', error)
                        });


                    
                } else if (result.isDenied) {
                  Swal.fire('Les modifications ne sont pas enregistrées', '', 'info')
                }
            })
        }
    }
}
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
        color: #000;

        >span {
            position: absolute;
            left: 0;
            top: 0;
            color: rgb(0, 0, 0);
            height: 100%;
            border-right: 1px solid $grey;
            text-align: center;
            width: 30px;

            >i {}
        }
    }

    .textarea_field {
        >span {
            >i {}
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
            -webkit-transition: all 0.30s ease-in-out;
            -moz-transition: all 0.30s ease-in-out;
            -ms-transition: all 0.30s ease-in-out;
            color: #000;
            transition: all 0.30s ease-in-out;
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
            -webkit-transition: all 0.30s ease-in-out;
            -moz-transition: all 0.30s ease-in-out;
            -ms-transition: all 0.30s ease-in-out;
            transition: all 0.30s ease-in-out;

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
        &:hover+label:before {
            border-color: $black;
        }

        &:checked+label {
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
        &:hover+label:before {
            border-color: $black;
        }

        &:checked+label:before {
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

.create {

    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    will-change: box-shadow, transform;
    background: radial-gradient(100% 100% at 100% 0%, #f0b07c 0%, #ff9100 100%);
    box-shadow: 0px 2px 4px rgb(247, 152, 43), 0px 7px 13px -3px rgba(241, 188, 12, 0.993), inset 0px -3px 0px rgba(241, 103, 61, 0.795);
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
    box-shadow: 0px 4px 8px rgb(255, 145, 1), 0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #f37018;
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
  font-weight:40px;
  padding: 10px 9px;
  font-size: 18px;
  border-radius: 8px;
  margin-bottom: 30px;
  color: #000;
  border: 2px solid transparent;
}

.input-text:focus-visible,
.input-text:focus {
  border: 2px solid var(--black);
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
  width: 80%;
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

.contain {
  width: 100%;
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
}
h3 {
  font-family: 'Alegreya Sans', sans-serif;
  position: relative;
  font-weight: 300;
  margin-bottom: 20px;
}
.control-group1 {
  display: inline-block;
  vertical-align: top;
  background: rgba(180, 215, 254, 0.668);
  text-align: left;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  padding: 30px;
  width: 500px;
  height: 250px;
  margin: 10px;
  border-radius: 30px;
}
.control {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 18px;
}
.control input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.control__indicator {
  position: absolute;
  top: 2px;
  left: 0;
  height: 20px;
  width: 20px;
  background: #e6e6e6;
}
.control--radio .control__indicator {
  border-radius: 50%;
}
.control:hover input ~ .control__indicator,
.control input:focus ~ .control__indicator {
  background: #ccc;
}
.control input:checked ~ .control__indicator {
  background: #2aa1c0;
}
.control:hover input:not([disabled]):checked ~ .control__indicator,
.control input:checked:focus ~ .control__indicator {
  background: #0e647d;
}
.control input:disabled ~ .control__indicator {
  background: #e6e6e6;
  opacity: 0.6;
  pointer-events: none;
}
.control__indicator:after {
  content: '';
  position: absolute;
  display: none;
}
.control input:checked ~ .control__indicator:after {
  display: block;
}
.control--checkbox .control__indicator:after {
  left: 8px;
  top: 4px;
  width: 3px;
  height: 8px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.control--checkbox input:disabled ~ .control__indicator:after {
  border-color: #7b7b7b;
}
.control--radio .control__indicator:after {
  left: 7px;
  top: 7px;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background: #fff;
}
.control--radio input:disabled ~ .control__indicator:after {
  background: #7b7b7b;
}
.select {
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
  width: 100%;
}
.select select {
  display: inline-block;
  width: 40%;
  cursor: pointer;
  padding: 10px 15px;
  outline: 0;
  border: 0;
  border-radius: 0;
  background: #e6e6e6f0;
  color: #ffffff;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.select select::-ms-expand {
  display: none;
}
.select select:hover,
.select select:focus {
  color: #000;
  background: rgba(204, 204, 204, 0.749);
}
.select select:disabled {
  opacity: 0.5;
  pointer-events: none;
}
.select__arrow {
  position: absolute;
  top: 16px;
  left: 145px;
  width: 0;
  height: 0;
  pointer-events: none;
  border-style: solid;
  border-width: 8px 5px 0 5px;
  border-color: #7b7b7b transparent transparent transparent;
}
.select select:hover ~ .select__arrow,
.select select:focus ~ .select__arrow {
  border-top-color: #000;
}
.select select:disabled ~ .select__arrow {
  border-top-color: #ccc;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
.custom-field {
  position: relative;
  font-size: 18px;
  border-top: 20px solid transparent;
  margin-bottom: 45px;
  display: inline-block;
  --field-padding: 12px;
}
.custom-field input {
    position: relative;
  border: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #f2f2f2;
  padding: var(--field-padding);
  border-radius: 5px;
  width: 390px;
  outline: none;
  font-size: 18px;
  margin-top: -50px;
 
}
.custom-field .placeholder {
  position: absolute;
  left: var(--field-padding);
  width: calc(100% - (var(--field-padding) * 2));
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  top: 14px;
  line-height: 100%;
  transform: translateY(-50%);
  color: #aaa;
  transition: top 0.3s ease, color 0.3s ease, font-size 0.3s ease;
}
.custom-field input.dirty + .placeholder,
.custom-field input:focus + .placeholder,
.custom-field input:not(:placeholder-shown) + .placeholder {
  top: -20px;
  font-size: 14px;
  color: #222;
}

</style>
