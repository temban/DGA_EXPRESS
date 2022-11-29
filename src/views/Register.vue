
<template>
  <body>
    <!-- <div class="mt-1 mb-1">
      <a  href="/"  style="
                     
                     background-position: center;
background-size: cover;
background-repeat: no-repeat;
display: flex;
height: 170%;
width: 350%; 
margin-bottom: -25px;
margin-left: -80px;
position: relative;
                   ">
                     <img
                        
                        src="@/assets/img/home3.png"
                      />
    </a>  
                        </div> -->
                      
               <div class="header__logo">
                 <a href="/" class="sign__logo2-img">  </a>  
          </div>

    <div class="main" style="margin-top: 30px">
    <a  href="/" style="   height: 55px; z-index: 100;position:absolute;;
                          width: 55px;">
                     <img
                        style="
                        position:absolute;
                          border-radius: 70px;
                          height: 35px;
                          width: 35px;
                          margin-top: 30px;
                          left: 10px; 
                        " 
                        src="@/assets/img/hotels/back.png"
                      />
    </a>            
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div class="signup">
        <form  @submit="onLogin">
          <label for="chk" aria-hidden="true" >S'identifier</label>
          <input v-model="useremail" type="email" name="email" placeholder="E-mail" required=" Please Insert Your E-mail!" />
          <input
          v-model="passwordLogin"
          id="pass2"
            type="password"
            name="pswd"
            placeholder="Mot de passe"
            required=""
          />
       
          <span class="show-pass" v-on:click="toggle2()"  v-if="!state2">    <i class="far fa-eye"  style=" float: right;
        margin-right: 50px;
        margin-top: -50px; 
        position: relative;
        font-size:25px"></i> </span>    
                       
                        <span v-else class="show-pass" v-on:click="toggle2()" style=" float: right;
        margin-right: 50px; 
        margin-top: -50px;
        position: relative;">
                            <i class="fa fa-eye-slash" style="font-size:25px;"></i>
                        </span>

               <div class="login-choice"><a href="/forgot-password"><span>or SignIn with</span>  </a></div>          
        
          <button class="button1" type="submit" style="margin-top:30px">S'identifier   
          <div class="spinner-border text-light spinner-border-sm" role="status" v-if="login">
          <span class="sr-only">Loading...</span></div>
          </button>
        </form>
      </div>

      <div class="login">
        <form @submit="signup">
          <label for="chk" aria-hidden="true" style="margin-top: 10px"
            >Inscription</label
          >
          <div class="row" style="margin-top: -50px">
            <div class="column_left">
              <input
              id="imput"
               v-model="firstName"
                type="name"
                name="txt"
                placeholder="Prénom"
                required=""
              />
              <input 
              id="imput"
              style="margin-top:-12px" 
               v-model="pseudo" type="name" 
               name="txt" placeholder="Pseudo" 
               required="" />

               
               <div  style="margin-top:-12px">
               <input
               id="pass"
             v-model="confPassword" type="password"
                name="pass"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                placeholder="Mot de passe"
                required=""
              /> <span v-if="!state" class="show-pass" v-on:click="toggle()" style=" float: right;
        margin-right: 30px;
        margin-top: -50px;
        position: relative;
        z-index: 2;">
                            <i class="far fa-eye" style="font-size:20px;"></i>
                        </span>
                        <span v-else class="show-pass" v-on:click="toggle()" style=" float: right;
        margin-right: 30px;
        margin-top: -50px;
        position: relative;
        z-index: 2;">
                            <i class="fa fa-eye-slash" style="font-size:20px;"></i>
                        </span> 
                      
                      
                        <div id="popover-password">
                            <p><span id="result"></span></p>
                            <div class="progress" style="position: relative;
    margin-top: -25px; margin-bottom:20px; width: 90%; margin-left:14px;">
                                <div id="password-strength" 
                                    class="progress-bar" 
                                    role="progressbar" 
                                    aria-valuenow="40" 
                                    aria-valuemin="0" 
                                    aria-valuemax="100" 
                                    style="width:0%">
                                </div>
                            </div>
                            

                            
                            <div style="display: none;">
                            <ul class="list-unstyled">
                                <li class="">
                                    <span class="low-upper-case">
                                        <i class="fas fa-circle" aria-hidden="true"></i>
                                        &nbsp;Lowercase &amp; Uppercase
                                    </span>
                                </li>
                                <li class="">
                                    <span class="one-number">
                                        <i class="fas fa-circle" aria-hidden="true"></i>
                                        &nbsp;Number (0-9)
                                    </span> 
                                </li>
                                <li class="">
                                    <span class="one-special-char">
                                        <i class="fas fa-circle" aria-hidden="true"></i>
                                        &nbsp;Special Character (!@#$%^&*)
                                    </span>
                                </li>
                                <li class="">
                                    <span class="eight-character">
                                        <i class="fas fa-circle" aria-hidden="true"></i>
                                        &nbsp;Atleast 8 Character
                                    </span>
                                </li>
                            </ul>
                            </div>
                            
                        </div>
                      </div>
              
              
            </div>

            <div class="column_right">
              <input
              id="imput"
               v-model="lastName"
                type="name"
                name="txt"
                placeholder="Nom de famille"
                required=""
              />
              <div style="margin-left:13px; margin-top:-12px;">
                <input 
               style=" width:95%"
               v-model="tel" 
              id="phone" 
              type="tel"
                name="tel"
              class="phone"
                placeholder="Numéro de téléphone"
                required=""
              />
              </div>
               <div style=" margin-top:-12px">
                  <input
                  id="pass1"
               v-model="password"
                type="password"
                name="pswd" 
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                placeholder="Confirmez le Mot de passe"
                required=""
              /><span v-if="!state1" class="show-pass" v-on:click="toggle1()" style=" float: right;
        margin-right: 30px;
        margin-top: -50px;
        position: relative;
        z-index: 2;">
                            <i class="far fa-eye" style="font-size:20px;"></i>
                        </span>
                        <span v-else class="show-pass" v-on:click="toggle1()" style=" float: right;
        margin-right: 30px;
        margin-top: -50px;
        position: relative;
        z-index: 2;">
                            <i class="fa fa-eye-slash" style="font-size:20px;"></i>
                        </span> </div>
           
            </div>
          </div> 
             
   <input
   style="margin-top:-12px; width:94%; padding-left:30px" 
   id="imput1"
               v-model="useremail"
                type="email" 
                name="email"
                placeholder="E-mail"
                required=""
              />           
  
<span style="width:45%; height:30px;margin-top: -13px; margin-left:160px;  display:flex; align-items:center; justify-content: center;">
 <input
 id="imput11"
 v-model="condition"
   style="width:15px; height:15px; background: red; " 
                type="checkbox" required/> 
               
                <span >
                  J'accepte les <a href="/Conditions">
                <u style="color: blue">Termes et Conditions</u></a
              >. </span>
</span>
             <div style="position: relative; margin-top:68px;"> <button @click="signup" type="button" class="button">S'inscrire
             <div class="spinner-border text-light spinner-border-sm" role="status" v-if="loginOn">
          <span class="sr-only">Loading...</span></div>
          </button>
         
        </div>
          
          
        </form>
      </div>
    </div>
  </body>
</template>

<script>
import $ from "jquery";
import Swal from "sweetalert2";
export default {
  name: "loginmodelVue",
  data() {
    return {
      state2: false,
      loginOn:false,
        login:false,
      loading: false,
      modalShow: false,
      useremail: "",
      password: "",
      passwordLogin:"",
       firstName: "",
      lastName: "",
      pseudo: "",
      tel: "",
      condition: false,
      state: false,
      state1: false
    };
  },
  components: {
  },
   mounted(){
 
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



    
let password = document.getElementById("pass");
let passwordStrength = document.getElementById("password-strength");
let lowUpperCase = document.querySelector(".low-upper-case i");
let number = document.querySelector(".one-number i");
let specialChar = document.querySelector(".one-special-char i");
let eightChar = document.querySelector(".eight-character i");

password.addEventListener("keyup", function(){
    let pass = document.getElementById("pass").value;
    checkStrength(pass);
});





function checkStrength(password) {
    let strength = 0;

    //If password contains both lower and uppercase characters
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        strength += 1;
        lowUpperCase.classList.remove('fa-circle');
        lowUpperCase.classList.add('fa-check');
    } else {
        lowUpperCase.classList.add('fa-circle');
        lowUpperCase.classList.remove('fa-check');
    }
    //If it has numbers and characters
    if (password.match(/([0-9])/)) {
        strength += 1;
        number.classList.remove('fa-circle');
        number.classList.add('fa-check');
    } else {
        number.classList.add('fa-circle');
        number.classList.remove('fa-check');
    }
    //If it has one special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        strength += 1;
        specialChar.classList.remove('fa-circle');
        specialChar.classList.add('fa-check');
    } else {
        specialChar.classList.add('fa-circle');
        specialChar.classList.remove('fa-check');
    }
    //If password is greater than 7
    if (password.length > 7) {
        strength += 1;
        eightChar.classList.remove('fa-circle');
        eightChar.classList.add('fa-check');
    } else {
        eightChar.classList.add('fa-circle');
        eightChar.classList.remove('fa-check');   
    }

    // If value is less than 2
    if (strength < 2) {
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.add('progress-bar-danger');
        passwordStrength.style = 'width: 10%';
    } else if (strength == 3) {
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-warning');
        passwordStrength.style = 'width: 60%';
    } else if (strength == 4) {
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-success');
        passwordStrength.style = 'width: 100%';
    }
}
    },
  methods: {

    toggle(){
    if(this.state){
        document.getElementById("pass").setAttribute("type","password");
        this.state = false;
    }else{
        document.getElementById("pass").setAttribute("type","text")
        this.state = true;
    }
  },

  toggle1(){
    if(this.state1){
        document.getElementById("pass1").setAttribute("type","password");
        this.state1 = false;
    }else{
        document.getElementById("pass1").setAttribute("type","text")
        this.state1 = true;
    }
  },
  toggle2(){
    if(this.state2){
        document.getElementById("pass2").setAttribute("type","password");
        this.state2 = false;
    }else{
        document.getElementById("pass2").setAttribute("type","text")
        this.state2 = true;
    }
  },
     signup(event) {
      if(document.getElementById("phone").value==0){
         Swal.fire("Failed!", "Input your Phone Number!", "warning");
      }
      else if(document.getElementById("imput").value==0){
         Swal.fire("Failed!", "please fill all inputes!", "warning");
      }
      else if(document.getElementById("imput1").value==0){
         Swal.fire("Failed!", "Input your E-mail!", "warning");
      }
      else if(this.condition==false){
         Swal.fire("Failed!", "Accept Terms and Conditions!", "warning");
      }
      else if(this.password != this.confPassword) {
         Swal.fire("Failed!", "Password does not match!", "warning");
      }
      else if(document.getElementById("pass").value==0) {
         Swal.fire("Failed!", "Password is Empty!", "warning");
      }
      else if(document.getElementById("pass1").value==0) {
         Swal.fire("Failed!", "Password is Empty!", "warning");
      }
      else{ 
      this.loginOn = true;
      let onLogin =()=>{
       event.preventDefault();
      var axios = require("axios");

      var qs = require("qs");
      var data = qs.stringify({
        useremail: this.useremail,
        password: this.password,
      });
      var config = {
        method: "post",
        url: "http://46.105.36.240:3000/login",
        data: data,
      };

      axios(config)
        .then(function (response) {
          const temp = response.data;
          const refreshtoken = Object.values(temp)[0];
          const accesstoken = Object.values(temp)[1];
          localStorage.setItem("refresh-token", refreshtoken);
          localStorage.setItem("access-token", accesstoken);

          var config0 = {
            method: "get",
            url: "http://46.105.36.240:3000/profile",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("access-token"),
            },
          };

          axios(config0)
            .then((res) => {
              let a = res.data;
              if (a.pseudo == "DGA-EMPLOYEE" || a.pseudo == "Admin") {
                window.location.href = "/employeeDashboard";
              } else {
                console.log(a);
                window.location.href = "/userDashboard";
                //window.location.reload()
              }
            })
            .catch(function (error) {
              console.log(error);
            });
          this.$bus.$emit("logged", "User logged");
        })
        .catch(function (error) {
          if (error.response.status === 500) {
            Swal.fire(
              "Login Failed!",
              "Please Check Your Credentials!.",
              "error"
            );
          }
          if (error.response.status === 401) {
            Swal.fire("Login Failed!", "User Does Not Exist!.", "error");
          }
          if (error.response.status === 404) {
            Swal.fire("Failed!", "Something Went Wrong!.", "error");
          }
          console.log(error);
        }); 
      }

      var axios = require("axios");
      var data = JSON.stringify({
        "firstName": this.firstName,
        "lastName": this.lastName,
        "pseudo": this.pseudo,
        "phone": this.tel,
        "profileimgage": "",
        "email": this.useremail,
        "password": this.password,
      });

      var config = {
        method: "post",
        url: "http://46.105.36.240:3000/signup",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
               if (response.status === 200) {
            onLogin();
          }
            this.loading = false;
           this.load = true;
          console.log(JSON.stringify(response));
          
            
          //window.location.href = "/";
        })
        .catch(function (error) {
          console.log(error);
          if (error.response.status === 500) {
            Swal.fire("Registration Failed!", "User Already Exist!.", "error");
          }
          if (error.response.status === 404) {
            Swal.fire("Failed!", "Something Went Wrong!.", "error");
          }
        });
 
      }
    },
//signup(event) {
//      this.login = true;

//      let onLogin =()=>{
//       event.preventDefault();
//      var axios = require("axios");

//      var qs = require("qs");
//      var data = qs.stringify({
//        useremail: this.useremail,
//        password: this.password,
//      });
//      var config = {
//        method: "post",
//        url: "http://46.105.36.240:3000/login",
//        data: data,
//      };

//      axios(config)
//        .then(function (response) {
//          const temp = response.data;
//          const refreshtoken = Object.values(temp)[0];
//          const accesstoken = Object.values(temp)[1];
//          localStorage.setItem("refresh-token", refreshtoken);
//          localStorage.setItem("access-token", accesstoken);

//          var config0 = {
//            method: "get",
//            url: "http://46.105.36.240:3000/profile",
//            headers: {
//              "Content-Type": "application/json",
//              Authorization: "Bearer " + localStorage.getItem("access-token"),
//            },
//          };

//          axios(config0)
//            .then((res) => {
//              let a = res.data;
//              if (a.pseudo == "DGA-EMPLOYEE" || a.pseudo == "Admin") {
//                window.location.href = "/employeeDashboard";
//              } else {
//                console.log(a);
//                window.location.href = "/userDashboard";
//                //window.location.reload()
//              }
//            })
//            .catch(function (error) {
//              console.log(error);
//            });
//          this.$bus.$emit("logged", "User logged");
//        })
//        .catch(function (error) {
//          if (error.response.status === 500) {
//            Swal.fire(
//              "Login Failed!",
//              "Please Check Your Credentials!.",
//              "error"
//            );
//          }
//          if (error.response.status === 401) {
//            Swal.fire("Login Failed!", "User Does Not Exist!.", "error");
//          }
//          if (error.response.status === 404) {
//            Swal.fire("Failed!", "Something Went Wrong!.", "error");
//          }
//          console.log(error);
//        }); 
//      }

//      var axios = require("axios");
//      var data = JSON.stringify({
//        "firstName": this.firstName,
//        "lastName": this.lastName,
//        "pseudo": this.pseudo,
//        "phone": this.tel,
//        "profileimgage": "",
//        "email": this.useremail,
//        "password": this.password,
//      });

//      var config = {
//        method: "post",
//        url: "http://46.105.36.240:3000/signup",
//        headers: {
//          "Content-Type": "application/json",
//        },
//        data: data,
//      };

//      axios(config)
//        .then(function (response) {
//               if (response.status === 200) {
//            Swal.fire("Registration success", "welcome", "success");
//            onLogin();
//          }
//            this.loading = false;
//           this.load = true;
//          console.log(JSON.stringify(response));
          
            
//          //window.location.href = "/";
//        })
//        .catch(function (error) {
//          console.log(error);
//          if (error.response.status === 500) {
//            Swal.fire("Registration Failed!", "User Already Exist!.", "error");
//          }
//          if (error.response.status === 404) {
//            Swal.fire("Failed!", "Something Went Wrong!.", "error");
//          }
//        });
//    },





    onLogin(event) {
      this.login = true;
      event.preventDefault();
      var axios = require("axios");

      var qs = require("qs");
      var data = qs.stringify({
        useremail: this.useremail,
        password: this.passwordLogin,
      });
      var config = {
        method: "post",
        url: "http://46.105.36.240:3000/login",
        data: data,
      };

      axios(config)
        .then(function (response) {
          const temp = response.data;
          const refreshtoken = Object.values(temp)[0];
          const accesstoken = Object.values(temp)[1];
          localStorage.setItem("refresh-token", refreshtoken);
          localStorage.setItem("access-token", accesstoken);

          var config0 = {
            method: "get",
            url: "http://46.105.36.240:3000/profile",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("access-token"),
            },
          };

          axios(config0)
            .then((res) => {
              let a = res.data;
              if (a.pseudo == "DGA-EMPLOYEE" || a.pseudo == "Admin") {
                window.location.href = "/employeeDashboard";
              } else {
                console.log(a);
                window.location.href = "/userDashboard";
                //window.location.reload()
              }
            })
            .catch(function (error) {
              console.log(error);
            });
          this.$bus.$emit("logged", "User logged");
        })
        .catch(function (error) {
          if (error.response.status === 500) {
            Swal.fire(
              "Login Failed!",
              "Please Check Your Credentials!.",
              "error"
            );
          }
          if (error.response.status === 401) {
            Swal.fire("Login Failed!", "User Does Not Exist!.", "error");
          }
          if (error.response.status === 404) {
            Swal.fire("Failed!", "Something Went Wrong!.", "error");
          }
          console.log(error);
        });
    },
  },
};
</script>


<style>
.columns {
  width: 50%;
}
body {
  margin: 20px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  font-family:  "Times New Roman", Times, serif;
  background: linear-gradient(to bottom, #388bff, #388bff, #fff, #fff);
}
.main {
  width: 600px;
  height: 560px;
  position: relative;
  background: rgb(0, 187, 255);
  overflow: hidden;
  background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38")
    no-repeat center/ cover;
  border-radius: 10px;
  box-shadow: 5px 20px 50px rgba(35, 19, 7, 0.444);
}
#chk {
  display: none;
}

.signup {
  position: relative;
  width: 100%;
  height: 100%;
}
label {
  color: #fff;
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 20px 60px 60px 60px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
/* label1 {
  color: #fff;
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 20px 60px 60px 60px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s ease-in-out;
} */
input {
  font-size: 20px;
  width: 90%;
  height: 40px;
  background: #fff;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  padding: 10px;
  border: 2px solid black;
  outline: 19px;
  border-radius: 5px;
}
.button1 {
  width: 60%;
  height: 40px;
  padding: 10px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: #fff;
  background: #ff922b;
  font-size: 1em;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
}
.button1:hover {
  background: #ff7300;
}
.button {
  width: 60%;
  height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: #fff;
  background: #00a6ff;
  font-size: 1em;
  font-weight: bold;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
}
.button:hover {
  background: #0176cf;
}
.iti__flag-container{
    z-index:9;
}
.login {
  
  height: 760px;
  background: linear-gradient(to bottom, #f8961e, rgb(246, 205, 167));

  /*background: rgb(255, 154, 60);*/
  border-radius: 60% / 10%;
  transform: translateY(-105px);
  transition: 0.8s ease-in-out;
}
.login label {
  color: #0274ff;
  transform: scale(0.6);
}

#chk:checked ~ .login {
  transform: translateY(-510px);
}
#chk:checked ~ .login label {
  transform: scale(1);
} 
#chk:checked ~ .signup label {
  transform: scale(0.6);
}
.column_left {
  float: left;
  width: 50%;
  padding-left: 20px;
}
.column_right {
  float: left;
  width: 50%;
  padding-right: 20px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.phone{
   margin-right:7px;
   margin-top:12px; 
}
.green{
  box-shadow: inset 0 0 5px green;
  box-shadow: 0 0 10px green;
}
.red{
  box-shadow: inset 0 0 5px red;
  box-shadow:  0 0 10px red;
}

.progress {
    height: 5px !important;
    
}
.progress-bar-danger {
    background-color: #e90f10;
}
.progress-bar-warning{
    background-color: #3d2b02;
}
.progress-bar-success{
    background-color: #02b502;
}
</style>


