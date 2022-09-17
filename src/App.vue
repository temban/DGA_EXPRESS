<template>
  <div id="app" class="app">
      <router-view/>
  </div>
</template>

<script>


export default {
  name: "App",
  components: {
    
  },
  data() {
    return {
    }
  },

   async created() {


//    var axios = require('axios');
//var FormData = require('form-data');
//var fs = require('fs');
//var data = new FormData();
//data.append('file', fs.createReadStream('/C:/Users/Blaise_A/Downloads/profileImg.jpg'));

//var config = {
//  method: 'put',
//  url: 'http://46.105.36.240:3000/upload/profile/image',
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
  url: 'http://46.105.36.240:3000/refreshToken',
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
  url: 'http://46.105.36.240:3000/profile',
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
   //localStorage.clear()
//window.location.href = "/"
});

let notif = (title, body) => {
     const options = {
       body: body,
       icon: `https://upload.wikimedia.org/wikipedia/fr/thumb/b/b6/Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg/langfr-280px-Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg.png`,
       badge: `https://upload.wikimedia.org/wikipedia/fr/thumb/b/b6/Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg/langfr-280px-Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg.png`
     };
     const n = new Notification(title, options)
     console.log(n);
   }
   axios(config)
.then(res => {
this.currenUser = res.data.id;
let url = 'http://192.168.16.117:4000/subcribe?userId='+this.currenUser;
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
        //localStorage.setItem('refresh-token', refreshtoken);
        //localStorage.setItem('access-token', accesstoken);
      })


  },
}
</script>
