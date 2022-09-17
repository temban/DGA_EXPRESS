<template>
 <div class="login">

  <body>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                 <div class="navbar-brand">latest News</div>
                </div>
            </div>
        </nav>
        <div class="panel panel-primary text-center" >
          <h4>News Timeline for user <span id="userspan" class="spanStyle"></span></h4>
        </div>
        <div class="container pstyle text-center" id="pack">
            <!-- <div class="panel panel-primary">
                News Timeline
            </div> -->
        </div>
    </body>



        <!-- <form @submit="onLogin">
          <label for="chk" aria-hidden="true" >Login</label>
          <input v-model="useremail" type="email" name="email" placeholder="Email" required=" Please Insert Your E-mail!" />
          <input
          v-model="password"
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          />
        
          <button class="button1" type="submit" style="margin-top:40px">Login   
          <div class="spinner-border text-light spinner-border-sm" role="status" v-if="login">
          <span class="sr-only">Loading...</span></div>
          </button>
          <div class="login-choice" style="margin-top:30px"><span>or SignIn with</span></div>
          <SocialLogin />
        </form>


        <button @click="balance"> balance</button> -->
      </div>


<!-- <body>
    <div class="container">
        <form class="form-horizontal" id="validateForm">
            <fieldset>
                
             Password input
                <div class="form-group">
                    <label class="col-md-12 control-label" for="passwordinput">
                        Password
                    </label>
                    <div class="col-md-12">
                        <input id="password" class="form-control input-md"
                        name="password" type="password" 
                        placeholder="Enter your password" >
                        <span v-if="!state" class="show-pass" v-on:click="toggle()">
                            <i class="far fa-eye"></i>
                        </span>
                        <span v-else class="show-pass" v-on:click="toggle()">
                            <i class="fa fa-eye-slash"></i>
                        </span>
                        <div id="popover-password">
                            <p><span id="result"></span></p>
                            <div class="progress">
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
            </fieldset>
        </form>   
    </div>
   <script src="main.js"></script>
</body> -->
</template>

<script>
  import $ from 'jquery';
import Swal from "sweetalert2";
export default {
  name: "loginmodelVue",
  data() {
    return {
        login:false,
      loading: false,
      modalShow: false,
      useremail: "",
      password: "",
       firstName: "test",
      lastName: "test",
      pseudo: "test",
      tel: "",
      state: false
    };
  },
  components: {
  },
   mounted(){
    function addBlock(title, content){
            var a = document.createElement("article");

  
            var h= document.createElement("H3");
            var t =  document.createTextNode(title);
            h.appendChild(t);

            var para = document.createElement("p");
            para.innerHTML =content;
            a.appendChild(h);
            a.appendChild(para);
            document.getElementById("pack").appendChild(a)
        }


        $(document).ready(function(){

         var userID = "1b6bad9d-8e08-4c0c-9f32-7aa544996a64";
           $("#userspan").text(userID);
            var urlEndpoint ='http://192.168.16.117:4000/subcribe?userId=1b6bad9d-8e08-4c0c-9f32-7aa544996a64';
            var eventSource = new EventSource(urlEndpoint);
          
            eventSource.addEventListener("LatesNews", function (event){
             var articleData = JSON.parse( event.data);
             for(let i=0; i<JSON.parse( event.data.length); i++){
              addBlock(articleData.newNotification[i-1].title, articleData.newNotification[i-1].content)
             }
             
            })
        })

             




let password = document.getElementById("password");
let passwordStrength = document.getElementById("password-strength");
let lowUpperCase = document.querySelector(".low-upper-case i");
let number = document.querySelector(".one-number i");
let specialChar = document.querySelector(".one-special-char i");
let eightChar = document.querySelector(".eight-character i");

password.addEventListener("keyup", function(){
    let pass = document.getElementById("password").value;
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
        document.getElementById("password").setAttribute("type","password");
        this.state = false;
    }else{
        document.getElementById("password").setAttribute("type","text")
        this.state = true;
    }
   
},
balance(){
  var axios = require('axios');
var config = {
  method: 'get',
  url: 'https://client.cinetpay.com/v1/transfer/check/balance',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token-scinet')
  },
};

axios(config)
.then(res => {
  console.log("balance", res.data);
// localStorage.setItem('infoUser',JSON.stringify(res.data))          
      })


.catch(function (error) {
  console.log(error);
});
},

    onLogin(event) {
      this.login = true;
      event.preventDefault();
      var axios = require("axios");

      var qs = require("qs");
      var data = qs.stringify({
        apikey : "105244761630ded20620d71.99923870",
        password : "mVQi6N59CEh97vz4",
      });
      var config = {
        method: "post",
        url: "https://client.cinetpay.com/v1/auth/login",
        data: data,
      };

      axios(config)
        .then(function (response) {
          // const refreshtokenscinet = Object.values(temp)[0];
          // localStorage.setItem("refresh-token-scinet", refreshtokenscinet);
          localStorage.setItem("access-token-scinet", response.data.data.token);
          console.log(response);


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
  .navbar {
      min-height: 80px;
  }
  .navbar-brand{
      margin: auto;
      font-size: 2.5rem;
  }
  .panel{
      padding-top: 20px;
      padding-bottom:20px;
  }
  .pstyle{
      font-size: 2rem;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
      </style>













<!--<template>
  <div id="app">
    <div v-if="this.alert.display" class="alert">
      {{ alert.message }}
    </div>
    <div class="input">
      <br />
      <input v-model="userInput" type="text" placeholder="Dynamic Search..." />
    </div>
    <div class="explanation">
      <i>
        <b>Explanation:</b>
        You can search with the username
        <small>(Bret, Antonette, etc.)</small>
        at the top of the cards.
      </i>
    </div>
    <div class="container">
      <div class="card" v-for="user in searchResult" :key="user.id">
        <div class="header">
          <span class="subHeaderText">{{ user.destinationtown }}</span>
          <span class="headerText">{{ user.departuredate }}</span>
        </div>
        <div class="footer">
          <span class="descriptionText">{{ user.destinationtown }}</span>
          <span class="descriptionText">{{ user.arrivaldate }}</span>
          <span class="descriptionText">{{ user.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: "",
      searchResult: [],
      users: [],
      alert: {
        display: false,
        message: ""
      }
    };
  },
  created() {

    fetch("http://46.105.36.240:3000/announcements")
    .then(response => response.json())
    .then(data => {
  this.users = data.reverse();
        this.searchResult = this.users;
          this.loading = false
     // this.idAnn= data[2].userDto.id
      //console.log( data[2].userDto.id);
    })
    .catch(err => {
      console.error(err);
    });
  },
  watch: {
    userInput(word) {
      if (word.length > 0) {
        this.searchResult = this.users.filter((element) =>
          element.destinationtown.includes(word)
        );
        if (this.searchResult.length === 0) {
          this.alert.message = "This username not found.";
          this.alert.display = true;
          console.log("Not Found!");
        } else {
          this.alert.message = "";
          this.alert.display = false;
        }
      } else {
        this.searchResult = this.users;
      }
    }
  },
  methods: {
    doSomething() {
      alert("Hello!");
    }
  }
};
</script>

<style lang="scss">
// variables
$headerTextColor: #404040;
$headerTextSize: 1.6em;
$headerTextWeight: 700;

$subHeaderTextColor: #808080;
$subHeaderTextSize: 1em;
$subHeaderTextWeight: 400;

$descriptionTextColor: #404040;
$descriptionTextSize: 1em;
$descriptionTextWeight: 400;

$lightBackground: #fbf8fb;
$darkBackground: #7882a4;
$textHoverColor: #f2f2f2;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  letter-spacing: 0.03em;
}

.container {
  display: flex;
  margin: 4px;
  justify-content: center;
  flex-wrap: wrap;
}

.alert {
  position: absolute;
  bottom: 36px;
  right: 36px;
  padding: 10px 14px 10px 14px;
  background-color: #f2f2f2;
  border-radius: 14px;
  color: $subHeaderTextColor;
  font-size: $subHeaderTextSize;
  font-weight: $subHeaderTextWeight;
}

.input {
  display: flex;
  justify-content: center;
  margin-top: 1em;

  input {
    min-width: 280px;
    padding: 12px;
    border-width: 2px;
    background-color: $lightBackground;
    color: $subHeaderTextColor;
    border-radius: 14px;
    border: none;

    &:focus {
      outline: none;
    }
  }
}

.explanation {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2em 3em 1em 3em;
  color: $descriptionTextColor;
  font-size: $descriptionTextSize;
  font-weight: $descriptionTextWeight;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5em;
  margin: 18px;
  padding: 12px;
  background-color: $lightBackground;
  border-radius: 32px;
  min-width: 280px;
  min-height: 220px;
  transition: 125ms;

  .header {
    display: flex;
    flex-direction: column;
    gap: 0.4em;
  }
  .footer {
    display: flex;
    flex-direction: column;
    gap: 0.4em;
  }

  .headerText {
    color: $headerTextColor;
    font-size: $headerTextSize;
    font-weight: $headerTextWeight;
    border-bottom: 1px solid #bb6464;
  }

  .subHeaderText {
    color: $subHeaderTextColor;
    font-size: $subHeaderTextSize;
    font-weight: $subHeaderTextWeight;
  }

  .descriptionText {
    color: $descriptionTextColor;
    font-size: $descriptionTextSize;
    font-weight: $descriptionTextWeight;
  }

  &:hover {
    transform: translate(0) scale(1.1);
    background-color: $darkBackground;
    cursor: pointer;
    transition: 125ms;
    .headerText {
      color: $textHoverColor;
    }
    .subHeaderText {
      color: $textHoverColor;
    }
    .descriptionText {
      color: $textHoverColor;
    }
  }
  &:active {
    transform: translate(0) scale(1);
  }
}
</style>-->
