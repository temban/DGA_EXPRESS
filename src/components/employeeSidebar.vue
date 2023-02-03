<template>
  <div>

    <nav class="main-menu">
    

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
          <a href="#" @click="removeemployeeAllTravels">
            <i class="fa fa-plane" aria-hidden="false"><span class="icon-button__badge" id="travel">{{travel}}</span></i>
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
          <a href="/employeeUserAllSales">
            <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
            <span class="nav-text"> Toutes les ventes </span>
          </a>
        </li>
        <li>
          <a href="/employeeAllPurchases">
            <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
            <span class="nav-text"> Tous les achats </span>
          </a>
        </li>
        <li>
          <a href="/employeePaymentHistory">
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
          <a href="/employeeSuggest" @click="removeemployeeSuggest">
            <i class="fa fa-question" aria-hidden="true"> <span class="icon-button__badge" id="suggest">{{this.suggest}}</span></i>
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
          
          suggest:'', 
          travel:'',
          articleData:[],
        }
    },
mounted(){
  console.log("notificationSizeTravel", localStorage.getItem("notificationSizeTravel"))
  console.log("notificationSizeSuggest", localStorage.getItem("notificationSizeSuggest"))
  document.getElementById('travel').style.display = 'none';
    document.getElementById('suggest').style.display = 'none';
    

    $(document).ready(function(){
   var urlEndpoint = 'https://dga-express.com:8443/subcribe?userId=ae6043af-4db2-45a5-ab43-e2b6927f3325';
   var accessPoint = new EventSource(urlEndpoint);


   accessPoint.addEventListener("LatesNews", function (event){
    var newSuggestion = JSON.parse( event.data);

     if (Notification.permission === "granted") {
      
     notif(newSuggestion.newNotification[newSuggestion.notificationSize-1].title, newSuggestion.newNotification[newSuggestion.notificationSize-1].content)
     
     } else if (Notification.permission !== "denied") {
       Notification.requestPermission().then(perm => {
         if (perm === 'granted') {
     notif(newSuggestion.notificationSize, newSuggestion.newNotification[newSuggestion.notificationSize-1].content)
         }
       })

     }

  
    for(let i=0; i<newSuggestion.notificationSize; i++){
     console.log("test", newSuggestion.notificationSize)
    suggest(newSuggestion.notificationSize, newSuggestion.newNotification[i].content)
    }
    
    })

    accessPoint.addEventListener("announcementNews", function (event){
    var newTravels = JSON.parse( event.data);
    console.log("travels",newTravels)

     if (Notification.permission === "granted") {
      
     notif(newTravels.newNotification[newTravels.notificationSize-1].title, newTravels.newNotification[newTravels.notificationSize-1].content)
     
     } else if (Notification.permission !== "dinied") {
       Notification.requestPermission().then(perm => {
         if (perm === 'granted') {
     notif(newTravels.notificationSize, newTravels.newNotification[newTravels.notificationSize-1].content)
         }
       })

     }

    
    for(let i=0; i<newTravels.notificationSize; i++){
    //  console.log("travels",newTravels.newNotification[i].title, newTravels.newNotification[i].content)
    travel(newTravels.notificationSize)
    }
    
    })
})


    function notifications() {
         
      document.getElementById("travel").innerHTML = localStorage.getItem("notificationSizeTravel")
      document.getElementById("suggest").innerHTML = localStorage.getItem("notificationSizeSuggest")
      
      if(localStorage.getItem("notificationSizeTravel") !== null){
    document.getElementById('travel').style.display = 'block';
  } else{
    document.getElementById('travel').style.display = 'none';
  }

      if(localStorage.getItem("notificationSizeSuggest") !== null){
    document.getElementById('suggest').style.display = 'block';
  } else{
    document.getElementById('suggest').style.display = 'none';
  }
   
}setInterval(notifications, 1000)

  
  if( localStorage.getItem("notificationSizeTravel") === null){
    this.travel = 0;
    // document.getElementById("travel").style.display = "none"
    
  } 
  else{
    this.travel =localStorage.getItem("notificationSizeTravel");
  }

   if(localStorage.getItem("notificationSizeSuggest") === null){
    this.suggest = 0;
    // document.getElementById("suggest").style.display = "none"
  
  } 
  else{
    this.suggest = localStorage.getItem("notificationSizeSuggest");
  } 


console.log("travel", localStorage.getItem("notificationSizeTravel"))
  var x = 0;
  
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
}setInterval(myFunction, 1000)


  function suggest( content){
    
    var btn = document.getElementById("suggest");
    btn.innerHTML = 0;
        btn.innerHTML = content; 
       

             x = document.createElement("article");
            var para = document.createElement("p");
            para.innerHTML =content;
            localStorage.setItem("notificationSizeSuggest", para.innerHTML =content);
            console.log("dfdfsfsfsfsdf", para.innerHTML =content)
            x.appendChild(para); 
            document.getElementById("pack").appendChild(x)
            
        }


        function travel( content){
    
    var btn = document.getElementById("travel");
    btn.innerHTML = 0;
        btn.innerHTML = content; 
       

             x = document.createElement("article");
            var para = document.createElement("p");
            para.innerHTML =content;
            localStorage.setItem("notificationSizeTravel", para.innerHTML =content);
            
            x.appendChild(para); 
            document.getElementById("pack").appendChild(x)
            
        }



    

},
  methods: {
    removeemployeeSuggest(){
      window.localStorage.removeItem('notificationSizeSuggest');
    },
    removeemployeeAllTravels(){
      window.localStorage.removeItem('notificationSizeTravel');
      window.location.href = "/employeeAllTravels";
    },
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
  min-width: 25px;
  min-height: 15px;
  background: red;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 2px;
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