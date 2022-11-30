
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
            <h4>
      Just provide your email<br> 
      and we can do the rest
    </h4>
    <formgroup>
      <input type="text" name="email" />
      <label for="email"><br>Email</label>
      <span>enter your email</span>
    </formgroup>
    
  
    <button id="login-btn">Next</button>
    <p>Did you remember? <a href="">Sign In</a></p>
   
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
          url: "https://dga-express.com:8443/login",
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
              url: "https://dga-express.com:8443/profile",
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
          url: "https://dga-express.com:8443/signup",
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
  //        url: "https://dga-express.com:8443/login",
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
  //            url: "https://dga-express.com:8443/profile",
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
  //        url: "https://dga-express.com:8443/signup",
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
          url: "https://dga-express.com:8443/login",
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
              url: "https://dga-express.com:8443/profile",
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
  *, *:before, *:after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}




h2, img {
  text-align: center;
  color: white;
  font-weight: 10;
  text-shadow: 0px 1px rgba(0, 0, 0, 0.3);
}
h4{
  text-align: center;
  color:black;
  font-size: 1.1em;
  font-family: times;
  font-style:normal;
  line-height: 130%;
 opacity: .6;
}

form { 
  width: 100%;
  overflow: hidden;
  height:100%;
  background-color: #fefefe00;
  padding: 21px 13px;
  border-radius: 21px;
  -webkit-box-shadow: 0px 5px 34px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 5px 34px rgba(0, 0, 0, 0.1);
}

formgroup {
  position: relative;
  width: 90%;
  justify-content: center;
  display: block;
  margin-top: 10em;
  font-size: 1em;
}
formgroup input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #888888;
  padding: 8px 0;
  font-size: inherit !important;
  margin-bottom: 13px;
  outline: none;
  opacity: 0.7;
  font-weight: 600;
}
formgroup input:focus {
  opacity: 1;
  border-bottom: 2px solid #F71442;
  color: #F71442;
}
formgroup label {
  position: absolute;
  font-size: 0.8em;
  top: -1em;
  left: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  opacity: 0.7;
  color: #888888;
  text-transform: uppercase;
}
formgroup span {
  position: absolute;
  top: -1em;
  left: -500px;
  opacity: 0;
  color: #333333;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.8em;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
formgroup input:focus + label {
  left: 500px;
  opacity: 0;
}
formgroup input:focus ~ span {
  left: 0;
  opacity: 1;
}

.forgot {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 1em;
  font-weight: bold;
  margin-top: 21px;
  opacity: 0.8;
}

#login-btn {
  border: none;
  color: #FEFEFE;
  padding: 0.8em 0;
  font-size: 1em;
  font-weight: 300;
  width: 100%;
  border-radius: 55px;
  -webkit-box-shadow: 0px 3px 21px rgba(255, 100, 0, 0.7);
          box-shadow: 0px 3px 21px rgba(255, 100, 0, 0.7);
  background: -webkit-gradient(linear, left top, right top, from(#F98340), to(#F71442));
  background: linear-gradient(to right, #F98340, #F71442);
  background-size: 100%;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
}

.social {
  margin-top: 1.8em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.social button {
  width: 50%;
  margin: 0 8px;
  padding: 10px 0;
  font-size: 0.9em;
  border: none;
  border-radius: 34px;
  -webkit-box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.2);
          box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.2);
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.social #facebook {
  background: #1F4788;
  background: -webkit-gradient(linear, left top, right top, from(#4B77BE), to(#1F4788));
  background: linear-gradient(to right, #4B77BE, #1F4788);
  background-size: 100%;
}
.social #google {
  background: #FEFEFE;
  background: -webkit-gradient(linear, left top, right top, from(#FEFEFE), to(#f1f1f1));
  background: linear-gradient(to right, #FEFEFE, #f1f1f1);
  background-size: 100%;
  color: #F71442;
}

p {
  color: white;
  text-align: center;
}
p a {
  color: inherit;
  text-decoration: none;
  font-weight: bold;
}

/***** For Tablets *******/
@media screen and (min-width: 480px) {
  .container-center {
    width: 70%;
  }

  #login-btn {
    padding: 0.8em 0;
    font-size: 1.2em;
  }
}
/***** For Desktop Monitors *******/
@media screen and (min-width: 768px) {
  .container-center {
    width: 500px;
  }
}

  </style>
  
  
  