<template>
    <div>
        <employeeSidebarVue />
        <!-- Main Menu -->
        <div class="topbar" style="height: 80px;background: linear-gradient(90deg, #fff, blue);">
            <div class="container-fluid" style="margin-left:-30px;height: 160px;">
                <div class="row">
                    <div class="col-md-5 hidden-xs">
                        <div class="header1__logo">
                            <router-link :to="{ name: 'employeeDashboard' }" class="header1__logo-img"></router-link>
                        </div>
                    </div>
                    <div class="col-md-7 text-right">
                        <ul>
                            <!-- Profile Menu -->
                            <li class="btn-group user-account">
                                <a href="javascript:;" class="btn dropdown-toggle" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <div class="user-content">
                                        <div class="user-name">{{firstName+" "+lastName}}</div>
                                        <div class="user-plan">DGA {{pseudo}}</div>
                                    </div>
                                    <img v-if="this.profileimgage !==''"  class="avatar"  :src="pic" style="border-radius: 160px;
                    image-resolution: 30000000000000dpi;  
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:70px; width: 70px;" 
                      
                    /> 
                    <img class="avatar" v-else src="@/assets/img/hotels/59710428.png" style="border-radius: 160px;
                    image-resolution: 3000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:70px; width: 70px;"   />
                                 
                                </a>
                                <ul class="dropdown-menu dropdown-menu-right">
                                    <li v-if="pseudo ==='DGA-EMPLOYEE'"><a href="/employeeProfil" class="animsition-link dropdown-item wave-effect"><i
                                                class="feather icon-user"></i> Profil</a></li>
                                    <li><a @click="singout" class="animsition-link dropdown-item wave-effect"><i
                                                class="feather icon-log-in"></i>Se déconnecter</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
</template>
<script>
import employeeSidebarVue from './employeeSidebar.vue'
export default {
    name: "adminNavbar",
    components: {
        employeeSidebarVue,
    },
    data() {
        return {
             pic:"",
             pseudo:"",
             firstName:'',
                lastName:"",
                profileimgage:''
            //     infoUser: {
            //     firstName:'',
            //     lastName:"",
            //     profileimgage:''
            // }
        }
    },
    mounted() {
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
    this.profileimgage = res.data.profileimgage;
    this.pseudo = res.data.pseudo
    this.firstName = res.data.firstName;
    this.lastName = res.data.lastName;
      this.pic='http://46.105.36.240:3000/'+ res.data.profileimgage;
    console.log('profile: ',res.data.profileimgage);
localStorage.setItem('profileImage', res.data.profileimgage);
      })
.catch(function (error) {
  console.log(error);
});

        // this.infoUser = JSON.parse(localStorage.getItem("infoUser"))
        
    },

    created () {

    },
    methods: {
        singout() {
            localStorage.removeItem("access-token");
            localStorage.clear();
            window.location.href = "/";
        },
    },
}
</script>

<style>
</style>