<template>
  <div id="app" class="app">
      <router-view/>
  </div>
</template>

<script>

// import $ from "jquery";
export default {
  name: "App",
  components: {
    
  },
  data() {
    return {
    }
  },

   async mounted() {
 

//    var axios = require('axios');
//var FormData = require('form-data');
//var fs = require('fs');
//var data = new FormData();
//data.append('file', fs.createReadStream('/C:/Users/Blaise_A/Downloads/profileImg.jpg'));

//var config = {
//  method: 'put',
//  url: '/upload/profile/image',
//  headers: { 
//    'Content-Type': 'application/json', 
//    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZW1iYW5ibGFpc2UxMkBnbWFpbC5jb20iLCJyb2xlcyI6WyJST0xFX0NMSUVOVCJdLCJpc3MiOiJodHRwOi8vNDYuMTA1LjM2LjI0MDozMDAwL3JlZnJlc2hUb2tlbiIsImV4cCI6MTY1OTU0OTc4OH0.T_c1PteRj2BUOiqHxrbMeAWFaL5ADCASeDoXnlrQE48', 
//    ...data.getHeaders()
//  },
//  data : data
//};

//axios(config)
//.then(function (response) {
//  console.log(JSON.stringify(response.data));
//})
//.catch(function (error) {
//  console.log(error);
//});




function refreshtoken() { 

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://dga-express.com:8443/refreshToken',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  const temp = response.data;
     const refreshtoken = Object.values(temp)[0];
      const accesstoken = Object.values(temp)[1];
  console.log(JSON.stringify(accesstoken));
  console.log(JSON.stringify(refreshtoken));

localStorage.setItem('refresh-token', refreshtoken);
localStorage.setItem('access-token', accesstoken);
  console.log('Fresh-Token!');
})
.catch(function (error) {
  console.log(error);
//   localStorage.clear();
//window.location.reload();
});
}setInterval(refreshtoken, 114000);



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
localStorage.setItem('infoUser',JSON.stringify(res.data))          
localStorage.setItem('userId', res.data.id);
localStorage.setItem('firstName', res.data.firstName);
localStorage.setItem('profileImage', res.data.profileimgage);
localStorage.setItem('lastName', res.data.lastName);
localStorage.setItem('pseudo', res.data.pseudo);
localStorage.setItem('tel', res.data.phone);
localStorage.setItem('email', res.data.email)


this.currenUser = res.data.id;
window.onbeforeunload = () => {
  localStorage.removeItem('isAuth');
}
        //localStorage.setItem('refresh-token', refreshtoken);
        //localStorage.setItem('access-token', accesstoken);
      })
.catch(function (error) {
  console.log(error);
//  localStorage.clear()
// window.location.href = "/"
});


// var x = 0;
  
//   function myFunction() {
  
//     x++;
//     function addBlock( content){
      
//       var btn = document.getElementById("eventBtn");
//       btn.innerHTML = 0;
//           btn.innerHTML = content; 
         
  
//                x = document.createElement("article");
//               var para = document.createElement("p");
//               para.innerHTML =content;
//               x.appendChild(para); 
//               document.getElementById("pack").appendChild(x)
//           }
  
//           $(document).ready(function(){
  
//   var userID = "1b6bad9d-8e08-4c0c-9f32-7aa544996a64";
//     $("#userspan").text(userID);
//      var urlEndpoint ='http://192.168.16.117:4000/subcribe?userId=03deabeb-84ab-45c4-b1d3-f3cfa2bb07cd'; 
//      var eventSource = new EventSource(urlEndpoint);
   
//      eventSource.addEventListener("LatesNews", function (event){
//       var articleData = JSON.parse( event.data);
  
  
  
      
//       for(let i=0; i<articleData.notificationSize; i++){
//        console.log("test",articleData.newNotification[i].title, articleData.newNotification[i].content)
//       addBlock(articleData.notificationSize, articleData.newNotification[i].content)
//       }
      
//       })
//   })
  
        
//   }setInterval(myFunction, 1000)
//   console.log(myFunction)
  
  
  
        
  

let notif = (title, body) => {
     const options = {
       body: body,
       icon: `https://upload.wikimedia.org/wikipedia/fr/thumb/b/b6/Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg/langfr-280px-Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg.png`,
       badge: `https://upload.wikimedia.org/wikipedia/fr/thumb/b/b6/Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg/langfr-280px-Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg.png`
     };
     const n = new Notification(title, options)
     console.log(n);
   }
  
let url = 'https://dga-express.com:8443/subcribe?userId=ae6043af-4db2-45a5-ab43-e2b6927f332';
   let ev = new EventSource(url);
   

   ev.addEventListener('LatesNews', function (event) {
     let articleData = JSON.parse(event.data)
     console.log(articleData);
       

     if (Notification.permission === "granted") {
      
     notif(articleData.newNotification[articleData.notificationSize-1].title, articleData.newNotification[articleData.notificationSize-1].content)
     
     } else if (Notification.permission !== "dinied") {
       Notification.requestPermission().then(perm => {
         if (perm === 'granted') {
     notif(articleData.notificationSize, articleData.newNotification[articleData.notificationSize-1].content)
         }
       })

     }
   })
        //localStorage.setItem('refresh-token', refreshtoken);
        //localStorage.setItem('access-token', accesstoken);



  },
}
</script>
