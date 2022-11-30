<template>
    <div>
        <div>
            <b-navbar toggleable="lg" type="dark" variant="white">
                <b-container>
                    <div class="header__logo">
                       <a class="header__logo-img" href="/"> </a>
                    </div>







                    <b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav class="ml-auto">
                            <div class="ml-auto">
                                <div class="dl">
                                    
                                </div>
                            </div>
                        </b-navbar-nav>
                        
                        

                        <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
    <template #button-content >
      <i class="fa fa-caret-down" style="font-size:25px; position:absolute;z-index: 2; top: 34px;
            bottom: 0;
            left: 42px;
            right: 0;"></i>
     
    <button type="button" class="icon-button">
    <span class="material-icons">notifications</span>
    <div id="span" ><span class="icon-button__badge1" ></span> </div>
  </button>
 
       
    </template>


<div style="position:relative;width:230px; margin: 0px">
  <b-dropdown-item  
    href="#"  @click="removeemployeenewValidated" 
    > <h6 style="margin-left:-16px">Voyage Validé </h6>
    <span
    style="position: absolute;
  top: -8px;
  right: 0;
  min-width: 40px;
  min-height: 40px;
  background: red;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;" 
    id="newValidated">{{newValidated}}</span>
    </b-dropdown-item>
    <hr style="position:relative; margin:0 0 0 0; border: none;
        height: 2px;
        background: grey;" />
    <b-dropdown-item 
    href="#"  @click="removeaddReservation" ><h6 style="margin-left:-16px">Nouvelle Réservation</h6>
    <span  style="position: absolute;
  top:39px;
  right: 0;
  min-width: 40px; 
  min-height: 39px;
  background: red;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;" 
 id="addreservation">{{addReservation}}</span>
  </b-dropdown-item>
  <hr style="position:relative; margin:0 0 0 0; border: none;
        height: 2px;
        background: grey;" />
      <b-dropdown-item  href="#"  
      @click="removeconfirmReservation"> 
      <h6 style="margin-left:-16px">Réservation confirmée</h6><span style="position: absolute;
  bottom: -8px;
  right: 0;
  min-width: 40px;
  min-height: 40px;
  background: red;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;"  id="confirmReservation">{{confirmReservation}}</span></b-dropdown-item> </div>
   
  
  </b-dropdown>
 






     
    <button type="button" class="icon-button">
    <span class="material-icons">mail</span>
    <span class="icon-button__badge" id="money">0</span>
  </button>







                        <a href="/Register"> <div v-if="isLogged === false" style="margin: 0 20px 0 20px">
<button type="button" class="btn btn-outline-primary">
S'identifier</button>
</div></a>
          <a href="/Register"><div v-if="isLogged === false">
<button type="button" class="btn btn-outline-primary">Inscription</button>

</div></a>
                        
                        <div v-if="isLogged === true">
                            <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
                                <template #button-content>
                                   
<div style="max-width: 100%;
                      max-height: 100%;
                      height:50px; width: 50px;z-index: 3;"> 
<i class="fa fa-caret-down" style="font-size:25px; position:absolute;z-index: 2; top: 35px;
            bottom: 0;
            left: 60px;
            right: 0;"></i>
  <img v-if="profileimgage!==''" :src=pic style="border-radius: 160px;
                    image-resolution: 30000000000000dpi;  
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:100px; width: 100px;" 
                      
                    /> 

              
         
<img v-else src="@/assets/img/hotels/59710428.png" 
                class="rounded-circle img-fluid" style="border-radius: 160px;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:50px; width: 50px;"   />
</div>
                                </template>
                                <b-dropdown-item href="/userDashboard">Manage Account</b-dropdown-item>
                                <b-dropdown-item @click="singout">Logout</b-dropdown-item>
                            </b-dropdown>
                        </div>
                    </b-collapse>
                </b-container>
            </b-navbar>
        </div>

       
    
 <div  v-if="subInfo.informations">
    <b-navbar type="primary" variant="primary" class="nav justify-content-center">
      <h6 style="color:beige; margin-bottom: 2px; font-size: medium;"><img height="25px" width="40px" src="@/assets/img/uk.png">{{ subInfo.informations + ' '}}<a target="_blank" rel="noopener noreferrer" :href="subInfo.link" style="color:white;"><u>page</u></a></h6>
  </b-navbar>
</div>
  
 <div v-else>
 <b-navbar  type="primary" variant="primary" class="nav justify-content-center">
      <h6 style="color:beige; margin-bottom: 2px; font-size: medium;"><img height="25px" width="40px" src="@/assets/img/uk.png">Welcome To DGA Our Goal Is To Satisfy You</h6>
  </b-navbar>
 </div>

        <NavbarVue />
    </div>
</template>

<script>
    import NavbarVue from "../Navbar.vue";
import $ from "jquery"; 
export default {
    name: "lognav",
    data() {
        return {
            newValidated:"",
      addReservation:"",
      confirmReservation:"",
            subInfo:{},
            source: "",
            destination: "",
            isLogged: this.checkIfIsLogged(),
            facilityOptions: [],
            location: "",
            filter: {
                selectedFacilities: [],
                locationSearch: "",
            },
            query: {},
            textInput: "",
            textInput1: "",
            tabInit: [
                ["Franc", "yaounde"],
                ["Ida", "douala"],
                ["Abel", "Magba"],
                ["Eric", "nkonsamba"],
                ["ZOGNING", "ouest"],
                ["Ulrich", "messassi"],
                ["Allpha", "nord"],
                ["Amélia", "bamenda"],
                ["Luc", "tchad"],
                ["Jean", "paris"],
                ["Georges", "paris"],
                ["Henry", "Canada"],
            ],
            tabFin: [],
        };
    },
    components: {
        NavbarVue,
           
    },

    mounted(){
    document.getElementById('span').style.display = 'none';
    document.getElementById('money').style.display = 'none';
    
    function notifications() {
         
      document.getElementById("money").innerHTML = localStorage.getItem("notificationSizeValidated")
      if(localStorage.getItem("notificationSizeValidated") !== null){
    document.getElementById('money').style.display = 'block';
  } else{
    document.getElementById('money').style.display = 'none';
  }

      if(localStorage.getItem("notificationSizeValidated") !== null|| localStorage.getItem("addreservation") !== null ||localStorage.getItem("confirmReservation") !== null){
    document.getElementById('span').style.display = 'block';
  } else{
    document.getElementById('span').style.display = 'none';
  }
   
}setInterval(notifications, 1000)



    if(localStorage.getItem("notificationSizeValidated") !== null){
    
    this.newValidated = localStorage.getItem("notificationSizeValidated");
    
  } 
  else{
    this.newValidated = 0;
  } 

  if(localStorage.getItem("addreservation") !== null){
    
    this.addReservation = localStorage.getItem("addreservation");
    this.notif = true;
  } 
  else{
    this.addReservation = 0;
  } 
  if(localStorage.getItem("confirmReservation") !== null){
    
    this.confirmReservation = localStorage.getItem("confirmReservation");
    this.notif = true;
  } 
  else{
    this.confirmReservation = 0;
    
  } 



console.log(localStorage.getItem("notificationSizeValidated"))
  var x = 0;
  var y = 0;
  
let notif = (title, body) => {
     const options = {
       body: body,
       icon: `https://upload.wikimedia.org/wikipedia/fr/thumb/b/b6/Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg/langfr-280px-Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg.png`,
       badge: `https://upload.wikimedia.org/wikipedia/fr/thumb/b/b6/Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg/langfr-280px-Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg.png`
     };
     const n = new Notification(title, options)
     console.log(n);
   }

function myFunction() {

  x++;
  y++;
 
 
}setInterval(myFunction, 1000)

// setTimeout(function(){
//     window.location.reload();
// }, 10000);


  function validated(size, content){
    
            var btn = document.getElementById("newValidated");
            btn.innerHTML = size; 
            x = document.createElement("article");
            var para = document.createElement("p");
            para.innerHTML =size;
            localStorage.setItem("notificationSizeValidated", para.innerHTML =size);
            x.appendChild(para); 

            var btn1 = document.getElementById("pack");
            btn1.innerHTML = content; 
             y = document.createElement("article1");
            var para1 = document.createElement("p1");
            var css = para1.innerHTML =content;
            localStorage.setItem("item", {css});
            console.log(css)
            y.appendChild(para1); 
            
        }

        function addreservation( content){
    
    var btn = document.getElementById("addreservation");
    btn.innerHTML = 0;
        btn.innerHTML = content; 
       

             x = document.createElement("article");
            var para = document.createElement("p");
            para.innerHTML =content;
            localStorage.setItem("addreservation", para.innerHTML =content);
            
            x.appendChild(para); 
            document.getElementById("pack").appendChild(x)
            
        }

        function confirm( content){
    
    var btn = document.getElementById("confirmReservation");
    btn.innerHTML = 0;
        btn.innerHTML = content; 
       

             x = document.createElement("article");
            var para = document.createElement("p");
            para.innerHTML =content;
            localStorage.setItem("confirmReservation", para.innerHTML =content);
            this.notif = true;
            x.appendChild(para); 
            document.getElementById("pack").appendChild(x)
            
        }

        var axios = require('axios');
var config = {
  method: 'get',
  url: 'https://dga-express.com:8443/profile',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
  },
};

 axios(config)
.then(res => {
    this.userID  = res.data.id;
    console.log('profile: ',res.data.id);

    $(document).ready(function(){
 

 var urlEndpoint ='https://dga-express.com:8443/subcribe?userId=' + res.data.id;
 var accessPoint = new EventSource(urlEndpoint);


 accessPoint.addEventListener("validationSuggest", function (event){
  var newValidated = JSON.parse( event.data);
   if (Notification.permission === "granted") {
    
   notif(newValidated.newNotification[newValidated.notificationSize-1].title, newValidated.newNotification[newValidated.notificationSize-1].content)
   
   } else if (Notification.permission !== "denied") {
     Notification.requestPermission().then(perm => {
       if (perm === 'granted') {
   notif(newValidated.notificationSize, newValidated.newNotification[newValidated.notificationSize-1].content)
       }
     })

   }

  
  for(let i=0; i<newValidated.notificationSize; i++){
  //  console.log("test",newSuggestion.newNotification[i].title, newSuggestion.newNotification[i].content)
  validated(newValidated.notificationSize, newValidated.newNotification[newValidated.notificationSize-1].content)
  }
  
  })

  accessPoint.addEventListener("addReservation", function (event){
  var addReservation = JSON.parse( event.data);
  console.log("travels",addReservation)

   if (Notification.permission === "granted") {
    
   notif(addReservation.newNotification[addReservation.notificationSize-1].title, addReservation.newNotification[addReservation.notificationSize-1].content)
   
   } else if (Notification.permission !== "dinied") {
     Notification.requestPermission().then(perm => {
       if (perm === 'granted') {
   notif(addReservation.notificationSize, addReservation.newNotification[addReservation.notificationSize-1].content)
       }
     })

   }

  
  for(let i=0; i<addReservation.notificationSize; i++){
  //  console.log("travels",newTravels.newNotification[i].title, newTravels.newNotification[i].content)
  addreservation(addReservation.notificationSize)
  }
  
  })



  accessPoint.addEventListener("confirmReservation", function (event){
  var confirmReservation = JSON.parse( event.data);
  console.log("confirmReservation",confirmReservation)

   if (Notification.permission === "granted") {
    
   notif(confirmReservation.newNotification[confirmReservation.notificationSize-1].title, confirmReservation.newNotification[confirmReservation.notificationSize-1].content)
   
   } else if (Notification.permission !== "denied") {
     Notification.requestPermission().then(perm => {
       if (perm === 'granted') {
   notif(confirmReservation.notificationSize, confirmReservation.newNotification[confirmReservation.notificationSize-1].content)
       }
     })

   }

  
  for(let i=0; i<confirmReservation.notificationSize; i++){
  //  console.log("travels",newTravels.newNotification[i].title, newTravels.newNotification[i].content)
  confirm(confirmReservation.notificationSize)
  }
  
  })
})

  
      })
.catch(function (error) {
  console.log(error);
});




},

   async created() {
              var axios = require('axios');
var config = {
  method: 'get',
  url: 'https://dga-express.com:8443/profile',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
  },
};

await axios(config)
.then(res => {
    this.profileimgage = res.data.profileimgage;
      this.pic='https://dga-express.com:8443/'+ res.data.profileimgage;
    console.log('profile: ',res.data.profileimgage);
localStorage.setItem('profileImage', res.data.profileimgage);
      })
.catch(function (error) {
  console.log(error);
});

    this.$bus.$on("logged", () => {
      this.isLogged = this.checkIfIsLogged();
    });
    this.tabFin = this.tabInit
    await fetch("https://dga-express.com:8443/announcements")
    .then(response => response.json())
    .then(data => {
        for (let  i= 0;  i< data.length; i++) {
            this.tabInit.push([data[i].departuretown,data[i].destinationtown])
        }
          
     // this.idAnn= data[2].userDto.id
      //console.log( data[2].userDto.id);
    })
    .catch(err => {
      console.error(err);
    });


    
var requestOptions1 = { method: 'GET', redirect: 'follow' };

        fetch("https://dga-express.com:8443/sub/informations/view", requestOptions1)
            .then(response => response.text())
            .then(result => {
                if (JSON.parse(result).length!==0) {
                    this.subInfo = JSON.parse(result)[0]
                } 
                console.log(this.subInfo)
            })
            .catch(error => console.log('error', error));

        this.$bus.$on("logged", () => {
            this.isLogged = this.checkIfIsLogged();
        });
        this.tabFin = this.tabInit
    },

    watch: {
        // watch the search filter. if it changes set queries for searching
        filter: {
            handler: function (filter) {
                this.query.facilities =
                    filter.selectedFacilities.length > 0
                        ? filter.selectedFacilities.join(",")
                        : "";
                this.query.departure_town =
                    filter.locationSearch !== "" > 0 ? filter.locationSearch : "";

                this.$router.push({
                    path: "/Announcements",
                    query: this.query,
                });
            },
            deep: true,
        },
    },

    methods: {


        removeemployeenewValidated(){
      window.localStorage.removeItem('notificationSizeValidated');
      window.location.href = "/MyAnnouncements";
    },

    removeaddReservation(){
      window.localStorage.removeItem('addreservation');
      window.location.href = "/MyReservations";
    },
    removeconfirmReservation(){
      window.localStorage.removeItem('confirmReservation');
      window.location.href = "/MyReservations";
    },
    
        search() {
            var val = this.source;
            var val1 = this.destination;
            if (val == "" && val1 == "") {
                this.tabFin = this.tabInit;
                return true;
            }
            this.tabFin = [];
            var regexp = "\\b(.*)";
            for (var i in val) {
                regexp += "(" + val[i] + ")(.*)";
            }
            regexp += "\\b";

            var regexp1 = "\\b(.*)";
            for (var j in val1) {
                regexp1 += "(" + val1[j] + ")(.*)";
            }
            regexp1 += "\\b";

            for (let i = 0; i < this.tabInit.length; i++) {
                let span = this.tabInit[i];
                let result = span[0].match(new RegExp(regexp, "i"));
                let result1 = span[1].match(new RegExp(regexp1, "i"));
                if (result || result1) {
                    let mot = "";
                    let mot1 = "";
                    for (let j in result) {
                        if (j > 0) {
                            if (j % 2 == 0) {
                                mot += '<span class="resultat">' + result[j] + "</span>";
                            } else {
                                mot += result[j];
                            }
                        }
                    }
                    for (let k in result1) {
                        if (k > 0) {
                            if (k % 2 == 0) {
                                mot1 += '<span class="resultat">' + result1[k] + "</span>";
                            } else {
                                mot1 += result1[k];
                            }
                        }
                    }
                    if (mot && mot1) {
                        this.tabFin.push([mot, mot1]);
                    }
                }
            }
        },
        singout() {
            localStorage.removeItem("access-token");
            this.isLogged = this.checkIfIsLogged();
            localStorage.clear();
            window.location.href = "/";
        },
        checkIfIsLogged() {
            let token = localStorage.getItem("access-token");
            //localStorage.getItem('access-token')
            if (token) {
                return true;
            } else {
                return false;
            }
        },
    },
};
</script>

<style lang="scss">
#cadre {
    background-color: rgb(200, 200, 200);
    width: 300px;
    height: 300px;
    position: absolute;
    padding: 50px;
    border-radius: 5px;
    border: 2px solid rgb(214, 187, 97);
    z-index: 100;
    transition: 1s;
}

#liste li {
    list-style-type: none;
}

.resultat {
    background-color: blue;
    color: white;
}

nav {
    &.primary-navigation {
        display: block;
        text-align: center;
        font-size: 16px;

        .dropdown {
            position: absolute;
            z-index: 100;
        }

        ul li {
            list-style: none;
            margin: 0 auto;
            border-left: 2px solid #3ca0e7;
            display: inline-block;
            padding: 0 30px;
            position: relative;
            text-decoration: none;
            text-align: center;
            font-family: arvo;
        }

        li a {
            color: black;
        }

        li a:hover {
            color: #3ca0e7;
        }

        li:hover {
            cursor: pointer;
        }

        ul li ul {
            visibility: hidden;
            opacity: 0;
            position: absolute;
            padding-left: 0;
            left: 0;
            display: none;
            background: white;
        }

        ul li:hover>ul,
        ul li ul:hover {
            visibility: visible;
            opacity: 1;
            display: block;
            min-width: 250px;
            text-align: left;
            padding-top: 20px;
            box-shadow: 0px 3px 5px -1px #ccc;
        }

        ul li ul li {
            clear: both;
            width: 100%;
            text-align: left;
            margin-bottom: 20px;
            border-style: none;
        }

        ul li ul li a:hover {
            padding-left: 10px;
            border-left: 2px solid #3ca0e7;
            transition: all 0.3s ease;
        }
    }
}

a {
    text-decoration: none;

    &:hover {
        color: #3ca0e7;
    }
}

ul li ul li a {
    transition: all 0.5s ease;
}

.icon-button {
    margin: 8px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    color: #333333;
    background: #dddddd;
    border: none;
    outline: none;
    border-radius: 50%;
}

.icon-button:hover {
    cursor: pointer;
}

.icon-button:active {
    background: #cccccc;
}

.icon-button__badge {
  position: absolute;
  top: -16px;
  right: -15px;
  min-width: 25px;
  min-height: 25px;
  background: red;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.icon-button__badge1 {
  position: absolute;
  top: -5px;
  right: -6px;
  min-width: 15px;
  min-height: 15px;
  background: green;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}













* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>