<template>

    <body id="landing" class="sidebar-open">
        <div id="dashboardPage">
            <employeeNavbarVue />
            
        </div>
        <main class="comments" style="margin-left:-150px;padding-top: 100px;">
            <div class="comment" v-for="(item, i) in suggest.reverse()" v-bind:key="i">
                <div class="comment-head">
        
                   <tableEmptyVue/>
         
                    <img class="my-pp" v-if="item.user.profileimgage == ``" src="@/assets/img/hotels/59710428.jpg"
                        alt="profile" />
                    <img class="my-pp" v-else :src="`http://46.105.36.240:3000/${item.user.profileimgage}`"
                        alt="profile" />
                    <div class="user-info">
                        <div class="name">{{ item.user.firstName + " " + item.user.lastName }}</div>
                        <div class="date">{{ item.date }}</div>
                    </div>
                    <div v-if="item.validated" class="ok"
                        style="position:absolute;right: 0;font-size: 13px;display: flex;align-items: center;"><i
                            class="fa fa-check-circle-o"
                            style="display: flex;align-items: center;justify-content: end;width: 20px;"></i><span
                            style="margin-left: 4px;">suggest ok</span></div>
                    <div v-else class="no-ok"
                        style="position:absolute;right: 0;font-size: 13px;display: flex;align-items: center;"><i
                            class="fa fa-check-circle-o"
                            style="display: flex;align-items: center;justify-content: end;width: 20px;"></i><span
                            style="margin-left: 4px;">suggest no-read</span></div>
                </div>
                <div class="comment-body">
                    <p>
                        {{ item.content }}
                    </p>
                    <div class="end">
                        <i v-if="item.validated" class="fa fa-thumbs-up" style="cursor: pointer; transform: scale(1.2); color: #5b5bff;"></i>
                        <i v-else class="fa fa-thumbs-up" @click="like(item.id)"></i>
                    </div>
                </div>
            </div>
<div><input v-model="notifNum"/></div>
        </main>
    </body>
</template>

<script>
// import Swal from 'sweetalert2';
import tableEmptyVue from "../components/pageNotFoundNoData.vue";
import employeeNavbarVue from '../components/employeeNavbar.vue'
export default {
    components: {
        employeeNavbarVue,
        tableEmptyVue
    },
    data() {
        return {
            suggest: [],
            error: true,
            notifNum:'',
        }
    },
    async mounted() {
//         let notif = (title, body) => {
//      const options = {
//        body: body,
//        icon: `https://upload.wikimedia.org/wikipedia/fr/thumb/b/b6/Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg/langfr-280px-Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg.png`,
//        badge: `https://upload.wikimedia.org/wikipedia/fr/thumb/b/b6/Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg/langfr-280px-Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg.png`
//      };
//      const n = new Notification(title, options)
//      console.log(n);
//    }
   
// var axios = require('axios');
// var config = {
//   method: 'get',
//   url: 'http://46.105.36.240:3000/profile',
//   headers: { 
//     'Content-Type': 'application/json', 
//     'Authorization': 'Bearer ' + localStorage.getItem('access-token')
//   },
// };
//    axios(config)
// .then(res => {
// this.currenUser = res.data.id;
// let url = 'http://192.168.16.117:4000/subcribe?userId='+this.currenUser;
//    let ev = new EventSource(url);
//    ev.addEventListener('LatesNews', function (event) {
//      let articleData = JSON.parse(event.data)
//      if (Notification.permission === "granted") {
//        notif(articleData.title, articleData.content)
       
//        console.log("notif if", articleData)
//      } else if (Notification.permission !== "dinied") {
//        Notification.requestPermission().then(perm => {
//          if (perm === 'granted') {
//            notif(articleData.title, articleData.content)
//            console.log("notif else", articleData.content.length)
//          }
//        })

//      }
     
//    })
//         //localStorage.setItem('refresh-token', refreshtoken);
//         //localStorage.setItem('access-token', accesstoken);
//       })

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${localStorage.getItem("access-token")}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://46.105.36.240:3000/view/suggest", requestOptions)
            .then(response => response.text())
            .then(result => { 
                
                if (JSON.parse(result).length==0) {
              this.error=true 
          } else {
            this.suggest = JSON.parse(result); 
          }
            })
            .catch(error => console.log('error', error));
    },
    methods: {
        like(id) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer "+localStorage.getItem('access-token'));

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("http://46.105.36.240:3000/check/suggestion/" + id, requestOptions)
                .then(response => response.text())
                .then(result => {console.log(result);window.location.reload()})
                .catch(error => console.log('error', error));
        }
    },


}
</script>

<style>
.comments {
    min-height: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.comments .comment {
    width: 600px;
    max-height: 300px;
    box-shadow: 0 0 5px rgb(122, 122, 122);
    margin-bottom: 10px;
}

.comments .comment .comment-head {
    display: flex;
    align-items: center;
    margin: 5px;
    position: relative;
    height: 40px;
}

.comments .comment .my-pp {
    display: flex;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    margin-right: 10px;
    border: 2px solid #2423ff;
}

.comments .comment .comment-head .user-info {
    height: 100%;
    display: flex;
    width: 300px;
    flex-direction: column;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    color: rgb(56, 56, 56);
}

.comments .comment .comment-head .user-info .date {
    color: rgb(68, 68, 68);
    font-size: 11px;
}

.comments .comment .comment-body {
    border-top: 1px solid silver;
}

.comments .comment .comment-body p {
    font-size: 15px;
    padding: 10px 20px;
    margin: 0;
}

.comments .comment .comment-body .end {
    width: 100%;
    font-size: 10px;
    text-align: end;
    height: 35px;
    color: rgb(134, 134, 134);
    position: relative;
}

.comments .comment .comment-body .end i {
    max-height: 20px;
    position: absolute;
    right: 0;
    transition: .3s;
}

.comments .comment .comment-body .end i:hover {
    cursor: pointer; transform: scale(1.2); color: #5b5bff;
}

.comment .ok {
    background: rgb(214, 255, 214);
    height: 25px;
    padding: 2px 10px;
    border-radius: 20px;
    color: #51a985;
}

.comment .no-ok {
    background: rgb(255, 214, 214);
    height: 25px;
    padding: 2px 10px;
    border-radius: 20px;
    color: #a95151;
}
</style>