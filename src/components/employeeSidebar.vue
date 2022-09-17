<template>
  <div>

    <nav class="main-menu">
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

      <ul>
        <li>
          <a href="/employeeDashboard">
            <i class="fa fa-home fa-2x"></i>
            <span class="nav-text"> Tableau de bord </span>
          </a>
        </li>
        <li>
          <a href="/employeeAllUsers">
            <i class="fa fa-user fa-2x"></i>
            <span class="nav-text"> Tous les utilisateurs </span>
          </a>
        </li>
        <li class="has-subnav">
          <a href="/employeeAllTravels">
            <i class="fa fa-plane" aria-hidden="false"></i>
            <span class="nav-text">Tous les voyages</span>
          </a>
        </li>
        <li class="has-subnav">
          <a href="/employeeAllReservations">
            <i class="fa fa-list-alt" aria-hidden="true"></i>
            <span class="nav-text"> Toutes les réservations </span>
          </a>
        </li>
        <li class="has-subnav">
          <a href="/employeeAllarticles">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <span class="nav-text"> Tous les articles </span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
            <span class="nav-text"> Tous les achats </span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-money" aria-hidden="true"></i>
            <span class="nav-text"> Historique de paiement </span>
          </a>
        </li>
        <li class="has-subnav">
          <a href="/employeeAllCategories">
            <i class="fa fa-bars" aria-hidden="true"></i>
            <span class="nav-text"> Toutes catégories</span>
          </a>
        </li>
        <li class="has-subnav">
          <a href="/employeeSuggest">
            <i class="fa fa-question" aria-hidden="true"> <span class="icon-button__badge" >{{num}}</span></i>
            <span class="nav-text"> Toutes les suggestions </span>
          </a>
        </li>
      </ul>
      <ul class="logout">
        <li>
          <a @click="singout" href="#">
            <i class="fa fa-power-off fa-2x"></i>
            <span class="nav-text"> Se déconnecter </span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
    import $ from 'jquery';
export default {
  name: "employeeSidebar",
  data() {
        return {
          num:"",
          articleData:[],
        }
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
             console.log("get", JSON.parse( event.data))
             for(let i=0; i<JSON.parse( event.data.length); i++){
              addBlock(articleData.newNotification[i].title, articleData.newNotification[i].content)
             }
            })
        })






  let notif = (title, body) => {
     const options = {
       body: body,
       icon: `https://upload.wikimedia.org/wikipedia/fr/thumb/b/b6/Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg/langfr-280px-Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg.png`,
       badge: `https://upload.wikimedia.org/wikipedia/fr/thumb/b/b6/Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg/langfr-280px-Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg.png`
     };
     const n = new Notification(title, options)
     console.log("n",n);
   }
   
var axios = require('axios');
var config = {
  method: 'get',
  url: 'http://46.105.36.240:3000/profile',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
  },
};
   axios(config)
   .then(res => {
this.currenUser = res.data.id;
let url = 'http://192.168.16.117:4000/subcribe?userId='+this.currenUser;
   let ev = new EventSource(url);
   ev.addEventListener('LatesNews', function (event) {
      this.articleData = JSON.parse(event.data)  
      console.log("notif if", this.articleData)
      this.num =  this.articleData.newNotification.length;
     if (Notification.permission === "granted") {
       notif(this.articleData.newNotification.length, this.articleData.newNotification.length)
         this.num =  this.articleData.newNotification.length;
       console.log("notif if", this.num)
     
       localStorage.setItem('notif', this.num)  
     } else if (Notification.permission !== "dinied") {
       Notification.requestPermission().then(perm => {
         if (perm === 'granted') {
           notif(this.articleData.title, this.articleData.content)
           console.log("notif else", this.articleData.content.length)
         }
       })

     }
     
   })
        //localStorage.setItem('refresh-token', refreshtoken);
        //localStorage.setItem('access-token', accesstoken);
      })

},
  methods: {
    singout() {
      localStorage.removeItem("access-token");
      localStorage.clear();
      window.location.href = "/";
    },
  },
};
</script>

<style>
@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);
@import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);

.fa-2x {
  font-size: 2em;
}

.fa {
  position: relative;
  display: table-cell;
  width: 60px;
  height: 40px;
  text-align: center;
  vertical-align: middle;
  font-size: 20px;
}

.main-menu:hover,
nav.main-menu.expanded {
  width: 250px;
  overflow: visible;
}

.main-menu {
  background: #212121;
  border-right: 1px solid #e5e5e5;
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100%;
  left: 0;
  width: 60px;
  overflow: hidden;
  -webkit-transition: width 0.05s linear;
  transition: width 0.05s linear;
  -webkit-transform: translateZ(0) scale(1, 1);
  z-index: 1000;
}




.icon-button__badge {
  position: absolute;
  top: -4px;
  right: 5px;
  width: 35px;
  height: 35px;
  background: red;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.main-menu>ul {
  margin: 7px 0;
}

.main-menu li {
  position: relative;
  display: block;
  width: 250px;
}

.main-menu li>a {
  position: relative;
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  color: #999;
  font-family: arial;
  font-size: 14px;
  text-decoration: none;
  -webkit-transform: translateZ(0) scale(1, 1);
  -webkit-transition: all 0.1s linear;
  transition: all 0.1s linear;
}

.main-menu .nav-icon {
  position: relative;
  display: table-cell;
  width: 60px;
  height: 36px;
  text-align: center;
  vertical-align: middle;
  font-size: 18px;
}

.main-menu .nav-text {
  position: relative;
  display: table-cell;
  vertical-align: middle;
  width: 190px;
  font-family: "Titillium Web", sans-serif;
}

.main-menu>ul.logout {
  position: absolute;
  left: 0;
  bottom: 0;
}

.no-touch .scrollable.hover {
  overflow-y: hidden;
}

.no-touch .scrollable.hover:hover {
  overflow-y: auto;
  overflow: visible;
}

a:hover,
a:focus {
  text-decoration: none;
}

nav {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

nav ul,
nav li {
  outline: 0;
  margin: 0;
  padding: 0;
}

.main-menu li:hover>a,
nav.main-menu li.active>a,
.dropdown-menu>li>a:hover,
.dropdown-menu>li>a:focus,
.dropdown-menu>.active>a,
.dropdown-menu>.active>a:hover,
.dropdown-menu>.active>a:focus,
.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,
.dashboard-page nav.dashboard-menu ul li.active a {
  color: #fff;
  background-color: #5fa2db;
}

.area {
  float: left;
  background: #e2e2e2;
  width: 100%;
  height: 100%;
}

@font-face {
  font-family: "Titillium Web";
  font-style: normal;
  font-weight: 300;
  src: local("Titillium WebLight"), local("TitilliumWeb-Light"),
    url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff) format("woff");
}
</style>