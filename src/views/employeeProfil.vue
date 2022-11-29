<template>

    <body id="landing" class="sidebar-open">
        <div id="dashboardPage">
            <employeeNavbarVue />
 <div v-if="loading" style="background:rgba(0,0,0,0.3);height:100vh;width:100vw;position:fixed;top:0;left:0;z-index: 100;"> 
         <div class="ring">Loading</div>
    </div>
            <main style="margin-left:-200px;margin-right:10px">

                <div class="page-breadcrumb">
                    <div class="row">
                        <div class="col-6">
                            <h4 class="page-title">Profil de l'employé</h4>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="/employeeDashboard">Accueil</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Profil de l'employé</li>
                                </ol>
                            </nav>
                        </div>

                    </div>
                </div>
                <div class="dashboard">
                 
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="profile-card-4 z-depth-3">
                                        <div class="card">
                                            <div class="card-body text-center bg-primary rounded-top">
                                             
                                                    <div v-if="profileimgage === ''"  class="avatar-upload">
        <div class="avatar-edit">
            <input type='file' id="imageUpload" @change="handleFileUpload($event)" accept=".png, .jpg, .jpeg" />
            <label for="imageUpload"></label>
        </div>
        <div class="avatar-preview">
          <img
                        src="@/assets/img/hotels/59710428.png"
                        class="rounded-circle img-fluid"
                        style="
                          border-radius: 160px;
                          image-resolution: 3000000dpi;
                          background-color: #000;
                          background-position: center;
                          background-size: cover;
                          background-repeat: no-repeat;
                          max-width: 100%;
                          max-height: 100%;
                          height: 180px;
                          width: 180px;
                        "
                      />
        </div>
    </div>


                    <div v-else  class="avatar-upload">
        <div class="avatar-edit">
            <input type='file' id="imageUpload" @change="handleFileUpload($event)" accept=".png, .jpg, .jpeg" />
            
            <label for="imageUpload"></label>
        </div>
        <div class="avatar-preview">
          <a :href="pic" target="_blank" rel="noopener noreferrer">

                        
<img
  :src="pic"
  style="
    border-radius: 160px;
    image-resolution: 30dpi;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    max-width: 100%;
    max-height: 100%;
    height: 192px;
    width: 192px;
  "
/>
</a>
        </div>
    </div>



                                                <header></header>
                                                <h5 class="mb-1 text-white" style="text-transform: capitalize">
                                                    {{ firstName + " " + lastName }}
                                                </h5>
                                            </div>
                                            <div class="card-body" style="position:relative; display:flex; height:50px">
                                                
                                                        <div style="position:relative; margin-top:-1px" >
                                                            <i class="fa fa-envelope"></i>
                                                        </div>
                                                        <div class="list-details" style="position:relative; margin-left:20px">
                                                            <span>{{ email }}</span>
                                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-8">
                                    <div class="card z-depth-3"  style="height: 350px">
                                        <div class="card-body">
                                            <ul class="nav nav-pills nav-pills-primary nav-justified">

                                                <li class="nav-item">
                                                    <a href="javascript:void();" data-target="#messages"
                                                        data-toggle="pill" class="nav-link"><i
                                                            class="icon-envelope-open"></i>
                                                        <span class="hidden-xs">Mettre à jour le profil</span></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="javascript:void();" data-target="#edit" data-toggle="pill"
                                                        class="nav-link"><i class="icon-note"></i>
                                                        <span class="hidden-xs">Changer mot de passe</span></a>
                                                </li>
                                            </ul>
                                            <div class="tab-content p-3">
                                                <div class="tab-pane active show" id="messages">
                                                    <form>
                                                        <div class="form-group row">
                                                            <label
                                                                class="col-lg-3 col-form-label form-control-label">Prénom</label>
                                                            <div class="col-lg-9">
                                                                <input v-model="firstName" class="form-control"
                                                                    type="text" required />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label
                                                                class="col-lg-3 col-form-label form-control-label">Nom de famille</label>
                                                            <div class="col-lg-9">
                                                                <input v-model="lastName" class="form-control"
                                                                    type="text" required />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label
                                                                class="col-lg-3 col-form-label form-control-label">
                                                                Numéro portal</label> 
                                                            <div class="col-lg-9">
                                                                <input v-model="tel" class="form-control"
                                                                    type="tel" required />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label
                                                                class="col-lg-3 col-form-label form-control-label">E-mail</label>
                                                            <div class="col-lg-9">
                                                                <input v-model="email" class="form-control" type="email"
                                                                    required />
                                                            </div>
                                                        </div>

                                                        <div class="form-group row">
                                                            <label
                                                                class="col-lg-3 col-form-label form-control-label"></label>
                                                            <div class="col-lg-9">
                                                                <input @click="updateprofile" type="button"
                                                                    class="btn btn-primary" value="Envoyer" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="tab-pane" id="edit">
                                                    <form>
                                                        <div class="form-group row">
                                                            <label
                                                                class="col-lg-5 col-form-label form-control-label">Ancien mot de passe</label>
                                                            <div class="col-lg-7">
                                                                <input v-model="oldpassword" class="form-control"
                                                                    type="text" required />
                                                            </div>
                                                        </div>

                                                        <div class="form-group row">
                                                            <label
                                                                class="col-lg-5 col-form-label form-control-label">Nouveau mot de passe</label>
                                                            <div class="col-lg-7">
                                                                <input v-model="newpassword" class="form-control"
                                                                    type="text" required />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label
                                                                class="col-lg-5 col-form-label form-control-label">Confirmer nouveau mot de passe</label>
                                                            <div class="col-lg-7">
                                                                <input class="form-control" type="text" required />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row" >
                                                            <label
                                                                class="col-lg-3 col-form-label form-control-label"></label>
                                                            <div class="col-lg-9">
                                                                <input @click="updatepassword" type="button"
                                                                    class="btn btn-primary" value="Envoyer" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                </div>
            </main>
        </div>
    </body>
</template>

<script>
import Swal from 'sweetalert2';
import employeeNavbarVue from '../components/employeeNavbar.vue'
export default {
    components: {
        employeeNavbarVue,
    },
    data() {
        return {
            pic: "@/assets/img/hotels/59710428.jpg",
            loading:false,
            file: "",
            revlength: "",
            annlength: "",
            firstName: "",
            artlength: "",
            email: "",
            id: "",
            lastName: "",
            password: "",
            oldpassword: "",
            newpassword: "",
            pseudo:"",
            fileInput: null,
            icon: "",
            code: '',
            tel:"",
        };
    },

    async created() {
        var axios = require("axios");

        var axios3 = require("axios");

        var config3 = {
            method: "get",
            url:
                "http://46.105.36.240:3000/user/" +
                localStorage.getItem("userId") +
                "/reservations",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("access-token"),
            },
        };

        axios3(config3)
            .then((res) => {
                this.revlength = res.data.length;
            })
            .catch(function (error) {
                console.log(error);
            });

        var axios1 = require("axios");
        var config1 = {
            method: "get",
            url:
                "http://46.105.36.240:3000/users/" +
                localStorage.getItem("userId") +
                "/announcements",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("access-token"),
            },
        };

        axios1(config1)
            .then((res) => {
                this.annlength = res.data.length;
            })
            .catch(function (error) {
                console.log(error);
            });

        var config = {
            method: "get",
            url: "http://46.105.36.240:3000/profile",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("access-token"),
            },
        };

        axios(config)
            .then((res) => {
                this.id = res.data.id;
                this.firstName = res.data.firstName;
                this.lastName = res.data.lastName;
                this.email = res.data.email;
                this.tel = res.data.phone;
                this.pseudo = res.data.pseudo;
                this.profileimgage = res.data.profileimgage;
                if (this.profileimgage !== "") {
                    this.pic = "http://46.105.36.240:3000/" + this.profileimgage;
                }
                this.role_dtos_id = Object.values(res.data.roleDtos)[0];
                this.role_dtos_name = Object.values(res.data.roleDtos)[1];
            })
            .catch(function (error) {
                console.log(error);
                localStorage.clear()
        window.location.href = "/"
            });
    },
    methods: {


        handleFileUpload(e) {
            
            this.icon = e.target.files[0];
this.loading = true;
            var axios = require("axios");
            var FormData = require("form-data");
            var data = new FormData();
            data.append("file", this.icon);

            var config = {
                method: "put",
                url: "http://46.105.36.240:3000/upload/profile/image",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("access-token"),
                },
                data: data,
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    window.location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                    window.location.reload();
                });
        },

        updatepassword() {
            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    var axios = require("axios");
                    var config = {
                        method: "get",
                        url:
                            "http://46.105.36.240:3000/user/update/" +
                            this.oldpassword +
                            "/" +
                            this.newpassword +
                            "/password",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + localStorage.getItem("access-token"),
                        },
                    };

                    axios(config)
                        .then(function (response) {
                            console.log(JSON.stringify(response.data));
                            Swal.fire("Saved!", "", "success");
                            window.location.reload();
                        })
                        .catch(function (error) {
                            console.log(error);
                            Swal.fire("Failed!", "Something Went Wrong!.", "error");
                        });
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });
        },

        updateprofile() {
            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    var axios = require("axios");
                    var data = JSON.stringify({
                        "profileimgage": "",
                        "firstName": this.firstName,
                        "lastName": this.lastName,
                        "pseudo": "DGA-EMPLOYEE",
                        "email": this.email,
                        "phone": this.tel,
                        roleDtos: [
                            {
                                id: 2,
                                name: "ROLE_CLIENT",
                            },
                        ],
                        status: "ENABLED",
                    });

                    var config = {
                        method: "put",
                        url: "http://46.105.36.240:3000/update/user",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + localStorage.getItem("access-token"),
                        },
                        data: data,
                    };

                    axios(config)
                        .then(function (response) {
                            console.log(JSON.stringify(response.data));
                            Swal.fire("Saved!", "", "success");
                        })
                        .catch(function (error) {
                            console.log(error);
                            Swal.fire("Failed!", "Something Went Wrong!.", "error");
                        });
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });
        },
    },

}
</script>

<style lang="scss" scoped>
.disp {
    display: flex;
    align-items: center;
    justify-content: center;
}

.info-user {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.cadre1 .cont1 svg {
    position: relative;
    width: 80px;
    height: 80px;
}

.cadre1 .cont1 svg circle {
    width: 70px;
    height: 70px;
    fill: none;
    stroke-width: 9;
    stroke: rgb(255, 255, 255);
    transform: translate(5px, 5px);
    stroke-dasharray: 220;
    stroke-dashoffset: 220;
}

.cadre1 .cont1 svg circle:nth-child(1) {
    stroke-dashoffset: 0;
    stroke: #ffffff;
}

.cadre1 .cont1 svg circle:nth-child(2) {
    stroke: #006ab1;
    transition: 1s;
}

.dashboard {
    width: 100%;
    min-height: 100px;
    position: relative;
}

/* cadre 1 */
.cadre1 {
    width: 68%;
    min-height: 150px;
    display: flex;
    justify-content: space-between;
    float: left;
    flex-wrap: wrap;
    margin-bottom: 30px;
}

.cadre1 .cont1 {
    width: 30%;
    height: auto;
    display: flex;
    justify-items: center;
    padding: 0;
    margin: 10px 0px;
}

.cadre1 .cont1 .stat1 {
    width: 110%;
    height: 100px;
    background: linear-gradient(230deg, #fff, rgb(0, 0, 255) 60%);
    ;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.3s;
    /* border: 0.5px solid blue; */
    box-shadow: 0 0 10px rgb(90, 90, 90);
    display: flex;
    align-items: center;
    justify-content: center;
}

.cadre1 .cont1 .stat1:hover {
    width: 105%;
    height: 105px;
}

.c1 {
    width: 85px;
    height: 85px;
    border-radius: 50%;
    background: #808080;
    box-shadow: inset 0 0 4px #d0d0d0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.c1 .c2 {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: #f3f3f3;
    box-shadow: 0 0 4px #d0d0d0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.c1 .c2 .c3 {
    width: 66px;
    height: 66px;
    border-radius: 50%;
    background: rgb(255, 87, 87);
    box-shadow: 0 0 4px #414141;
    display: flex;
    align-items: center;
    justify-content: center;
}

.c1 .c2 .c3 .c4 {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background: linear-gradient(45deg, rgb(255, 87, 87), rgb(184, 48, 48));
    box-shadow: 0 0 1px #414141;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cadre1 .cont1 .stat2 {
    width: 100%;
    height: 100px;
    background: linear-gradient(-90deg, #ffffff, rgb(93, 105, 93), #202c33 50%);
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.311);
    display: flex;
    align-items: center;
    border: 1px solid black;
    justify-content: center;
}

.cadre1 .cont1 .stat3 {
    width: 100%;
    height: 100px;
    cursor: pointer;
    background: #f3f3f3;
    border-radius: 10px;
    box-shadow: inset 0 0 20px #fff, 0 0 10px rgba(0, 0, 0, 0.411);
    display: flex;
    align-items: center;
    justify-content: center;
}

/* cadre2 */
.cadre2 {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;
    margin-bottom: 15px;
    padding-top: 10px;
}

.chargeOut {
    height: 8px;
    width: 100%;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    transition: 1s;
}

.chargeIn {
    height: 8px;
    background: rgb(255, 87, 87);
    border-radius: 10px;
    transition: 1s;
}

.cadre2 .cont2 {
    background: linear-gradient(225deg, #ffffff, #202c33 16%);
    width: 90%;
    min-height: 100px;
    text-align: justify;
    overflow: hidden;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.411);
}

.cont2 .test2,
.cont4 .test2 {
    width: 100%;
    height: 55px;
    display: flex;
    border-bottom: 1px solid silver;
}

.cont4 .test2 {
    height: 45px;
}

.cont2 .test2 .info2,
.cont4 .test2 .info2 {
    width: 30%;
    height: 100%;
}

.cont2 .test2 .bars,
.cont4 .test2 .bars {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    height: 100%;
}

/* Cadre3 */
.cadre3 {
    width: 68%;
    min-height: 150px;
    display: flex;
    justify-content: space-between;
    float: left;
    flex-direction: column;
}

.cadre3 .cont3 {
    width: 100%;
    min-height: 100px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.411);
    overflow: hidden;
    border: 1px solid black;
    background: linear-gradient(135deg, #ffffff, #202c33 16%);
    margin-bottom: 50px;
}

.cadre3 .cont3 .tete-table {
    min-height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    font-size: 17px;
    text-transform: uppercase;
    color: white;
}

.cadre3 .cont3 .tete-table .pp-em {
    width: 15%;
    min-height: 50px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-left: 8px;
}

.cadre3 .cont3 .tete-table .name-em {
    width: 30%;
    min-height: 50px;
    padding-left: 8px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.cadre3 .cont3 .tete-table .tel-em {
    width: 20%;
    min-height: 50px;
    padding-left: 8px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.cadre3 .cont3 .tete-table .mail-em {
    width: 35%;
    min-height: 50px;
    padding-left: 8px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.cadre3 .cont3 .tete-table .star-em {
    width: 15%;
    min-height: 50px;
    padding-left: 8px;
    display: flex;
    align-items: flex-end;
}

.cadre3 .cont3 .corps-table {
    width: 100%;
    min-height: 10px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid silver;
    color: #e6e6e6;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 200;
}

.cadre3 .cont3 .corps-table .col1 {
    height: 50px;
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cadre3 .cont3 .corps-table .col2 {
    height: 50px;
    width: 30%;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cadre3 .cont3 .corps-table .col3 {
    height: 50px;
    width: 20%;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cadre3 .cont3 .corps-table .col4 {
    height: 50px;
    width: 35%;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cadre4 {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    float: right;
    padding-top: 40px;
}

.cadre4 .cont4 {
    background: linear-gradient(-135deg, #ffffff, #202c33 16%);
    width: 90%;
    min-height: 50px;
    padding: 10px;
    text-align: justify;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.411);
    margin-bottom: 10px;
}

.mon-profile {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    border: 1px solid white;
}

.list-titre {
    padding-bottom: 10px;
    font-size: 20px;
    margin-left: 10px;
}

#namanyay-search-btn {
    background: #0099ff;
    color: white;
    font: 'trebuchet ms', trebuchet;
    padding: 10px 20px;
    border-radius: 0 10px 10px 0;
    -moz-border-radius: 0 10px 10px 0;
    -webkit-border-radius: 0 10px 10px 0;
    -o-border-radius: 0 10px 10px 0;
    border: 0 none;
    font-weight: bold;
}

#namanyay-search-box {
    background: #eee;
    padding: 10px;
    border-radius: 10px 0 0 10px;
    -moz-border-radius: 10px 0 0 10px;
    -webkit-border-radius: 10px 0 0 10px;
    -o-border-radius: 10px 0 0 10px;
    border: 0 none;
    width: 160px;
}

@import url(https://fonts.googleapis.com/css?family=Lato:700);


body {
    font-family: 'Lato', sans-serif;
    background-color: #202c3300;
    width: 100%;
    margin: 0;
}

.container {
    min-width: 675px;
}

h1 {
    color: #fff;
    text-align: center;
    margin-top: 90px;
}


p {
    text-align: center;
}

p a {
    color: #dd1111;
}

h2 {
    opacity: 0;
    color: rgb(0, 0, 0);
    text-transform: uppercase;
    text-align: center;
}

h2.title-one {
    animation: load-heading 1.6s linear;
    animation-fill-mode: forwards;
    -webkit-animation: load-heading 1.6s linear;
    -webkit-animation-fill-mode: forwards;
    animation-delay: 1s;
    -webkit-animation-delay: 1s;
}

h2.title-two {
    animation: load-heading 1.6s linear;
    animation-fill-mode: forwards;
    -webkit-animation: load-heading 1.6s linear;
    -webkit-animation-fill-mode: forwards;
    animation-delay: 2s;
    -webkit-animation-delay: 2s;
}

h2.title-three {
    animation: load-heading 1.6s linear;
    animation-fill-mode: forwards;
    -webkit-animation: load-heading 1.6s linear;
    -webkit-animation-fill-mode: forwards;
    animation-delay: 2.5s;
    -webkit-animation-delay: 2.5s;
}

@keyframes load-heading {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@-webkit-keyframes load-heading {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}


.rings {
    height: 200px;
    padding-left: 2em;
}

.arrow {
    position: relative;
    height: 0px;
    width: 0px;
    border-top: 18px solid #ff8008;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    position: absolute;
    bottom: 40px;
    left: 57px;
    z-index: 1;
    animation: load-arrow 1.6s linear;
    animation-fill-mode: forwards;
    -webkit-animation: load-arrow 1.6s linear;
    -webkit-animation-fill-mode: forwards;
}

@keyframes load-arrow {
    from {
        transform: translate(0, 0);
    }

    to {
        transform: translate(0, 55px);
    }
}

@-webkit-keyframes load-arrow {
    from {
        -webkit-transform: translate(0, 0);
    }

    to {
        -webkit-transform: translate(0, 55px);
    }
}

.pie {
    width: 140px;
    height: 140px;
    position: relative;
    border-radius: 140px;
    background-color: #DD1111;
    float: left;
    margin-right: 10px;
}

.pie .title {
    position: absolute;
    bottom: -40px;
    text-align: center;
    width: 100%;
    color: rgb(0, 0, 0);
}

.mask {
    position: absolute;
    width: 100%;
    height: 100%;
}

.outer-right {
    clip: rect(0px 140px 140px 70px);
}

.inner-right {
    background-color: #ff6701;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    clip: rect(0px 70px 140px 0px);
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
}

.pie1 .inner-right {
    transform: rotate(280deg);
    animation: load-right-pie-1 1s linear;
    -webkit-animation: load-right-pie-1 1s linear;
    -webkit-transform: rotate(280deg);
}

@keyframes load-right-pie-1 {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(280deg);
    }
}

@-webkit-keyframes load-right-pie-1 {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(280deg);
    }
}


.pie2 .inner-right {
    transform: rotate(10deg);
    animation: load-right-pie-2 1s linear;
    -webkit-animation: load-right-pie-2 1s linear;
    -webkit-transform: rotate(10deg);
}

@keyframes load-right-pie-2 {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(10deg);
    }
}

@-webkit-keyframes load-right-pie-2 {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(10deg);
    }
}


.pie3 .inner-right {
    transform: rotate(340deg);
    animation: load-right-pie-3 1s linear;
    -webkit-animation: load-right-pie-3 1s linear;
    -webkit-transform: rotate(340deg);
}

@keyframes load-right-pie-3 {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(340deg);
    }
}

@-webkit-keyframes load-right-pie-3 {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(340deg);
    }
}

.outer-left {
    clip: rect(0px 70px 140px 0px);
}

.inner-left {
    background-color: #ff8725;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    clip: rect(0px 70px 140px 0px);
    transform: rotate(-180deg);
    -webkit-transform: rotate(-180deg);
}


.content {

    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 20px;
    left: 20px;
    line-height: 100px;
    font-family: arial, sans-serif;
    font-size: 25px;
    color: #224761;
    text-align: center;
    z-index: 2;
}

.content span {
    opacity: 0;
    animation: load-content 3s;
    animation-fill-mode: forwards;
    animation-delay: 0.6s;
    -webkit-animation: load-content 3s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-delay: 0.6s;
}

@keyframes load-content {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@-webkit-keyframes load-content {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.circles {
    position: relative;
    min-height: 250px;
    left: 5em;
}

.circles .circle-one {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    background-color: #1bb7ff;
    top: 100px;
    z-index: 2;
    font-size: 18px;
    color: #fff;
}

.circles .circle-two {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    background-color: #fff;
    left: 55px;
    font-size: 30px;
    color: #DD1111;
}

.circles>div {
    position: relative;
    -webkit-transform: scale(0);
    transform: scale(0);
    position: absolute;
    animation: circles-load 1s cubic-bezier(0.17, 0.67, .58, 1.2);
    animation-fill-mode: forwards;
    animation-delay: 2s;
    -webkit-animation: circles-load 1s cubic-bezier(0.17, 0.67, .58, 1.2);
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-delay: 2s;
}

.circles .text {
    position: absolute;
    top: 25%;
    left: 20%;
}

@keyframes circles-load {
    50% {
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

@-webkit-keyframes circles-load {
    50% {
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}


.h-bars>div {
    width: 0;
    height: 30px;
    border-radius: 2px;
    display: block;
    position: relative;
}

.h-bars *:before {
    position: absolute;
    left: -125px;
    top: 4px;
    opacity: 0;
    color: #fff;
}

.h-bars *:after {
    top: 4px;
    opacity: 0;
    position: absolute;
    color: #fff;
}

@keyframes bars-after {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@-webkit-keyframes bars-after {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.h-bars .bar-one:before {
    content: 'Comments';
    animation: bars-after 1s;
    animation-delay: 2.5s;
    animation-fill-mode: forwards;
    -webkit-animation: bars-after 1s;
    -webkit-animation-delay: 2.5s;
    -webkit-animation-fill-mode: forwards;
}

.h-bars .bar-one {
    background-color: #1645c8;
    animation: bars-bar-one 1s;
    animation-fill-mode: forwards;
    animation-delay: 2.5s;
    -webkit-animation: bars-bar-one 1s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-delay: 2.5s;
}

.h-bars .bar-one:after {
    content: '108 Is The Record For A Single Pen';
    right: -260px;
    animation: bars-after 1s;
    animation-fill-mode: forwards;
    animation-delay: 2.5s;
    -webkit-animation: bars-after 1s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-delay: 2.5s;
}

@keyframes bars-bar-one {
    from {
        width: 0;
    }

    to {
        width: 50px;
    }
}

@-webkit-keyframes bars-bar-one {
    from {
        width: 0;
    }

    to {
        width: 50px;
    }
}

.h-bars .bar-two:before {
    content: 'Pens Featured';
    animation: bars-after 1s;
    animation-delay: 2.6s;
    animation-fill-mode: forwards;
    -webkit-animation: bars-after 1s;
    -webkit-animation-delay: 2.6s;
    -webkit-animation-fill-mode: forwards;
}

.h-bars .bar-two {
    background-color: #0c8ec0;
    animation: bars-bar-two 1s;
    animation-fill-mode: forwards;
    animation-delay: 2.6s;
    -webkit-animation: bars-bar-two 1s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-delay: 2.6s;
}

.h-bars .bar-two:after {
    content: '13,972 By The CodePen Staff';
    right: -225px;
    animation: bars-after 1s;
    animation-fill-mode: forwards;
    animation-delay: 2.6s;
    -webkit-animation: bars-after 1s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-delay: 2.6s;
}

.passwordInput {
    margin-top: 5%;
    text-align: center;
}

.displayBadge {
    margin-top: 5%;
    display: none;
    text-align: center;
}

@keyframes bars-bar-two {
    from {
        width: 0;
    }

    to {
        width: 180px;
    }
}

@-webkit-keyframes bars-bar-two {
    from {
        width: 0;
    }

    to {
        width: 180px;
    }
}

.h-bars .bar-three:before {
    content: 'Pens Hearted';
    animation: bars-after 1s;
    animation-delay: 2.6s;
    animation-fill-mode: forwards;
    -webkit-animation: bars-after 1s;
    -webkit-animation-delay: 2.6s;
    -webkit-animation-fill-mode: forwards;
}

.h-bars .bar-three {
    background-color: #c0392b;
    animation: bars-bar-three 1s;
    animation-fill-mode: forwards;
    animation-delay: 2.7s;
    -webkit-animation: bars-bar-three 1s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-delay: 2.7s;
}

.h-bars .bar-three:after {
    content: '941,146 By The  Community';
    right: -220px;
    animation: bars-after 1s;
    animation-fill-mode: forwards;
    animation-delay: 2.6s;
    -webkit-animation: bars-after 1s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-delay: 2.6s;
}

@keyframes bars-bar-three {
    from {
        width: 0;
    }

    to {
        width: 330px;
    }
}

@-webkit-keyframes bars-bar-three {
    from {
        width: 0;
    }

    to {
        width: 330px;
    }
}

.h-bars .bar-four:before {
    content: 'Forks';
    animation: bars-after 1s;
    animation-delay: 2.6s;
    animation-fill-mode: forwards;
    -webkit-animation: bars-after 1s;
    -webkit-animation-delay: 2.6s;
    -webkit-animation-fill-mode: forwards;
}

.h-bars .bar-four {
    background-color: #27b096;
    animation: bars-bar-four 1s;
    animation-fill-mode: forwards;
    animation-delay: 2.8s;
    -webkit-animation: bars-bar-four 1s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-delay: 2.8s;
}

.h-bars .bar-four:after {
    content: '2,967 Is The Record For One Single Pen';
    right: -290px;
    animation: bars-after 1s;
    animation-fill-mode: forwards;
    animation-delay: 2.6s;
    -webkit-animation: bars-after 1s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-delay: 2.6s;
}

@keyframes bars-bar-four {
    from {
        width: 0;
    }

    to {
        width: 90px;
    }
}

@-webkit-keyframes bars-bar-four {
    from {
        width: 0;
    }

    to {
        width: 90px;
    }
}

.h-bars .bar-five:before {
    content: 'CodePen Haters  ';
    animation: bars-after 1s;
    animation-delay: 2.6s;
    animation-fill-mode: forwards;
    -webkit-animation: bars-after 1s;
    -webkit-animation-delay: 2.6s;
    -webkit-animation-fill-mode: forwards;
}

.h-bars .bar-five {
    background-color: #95a5a6;
    animation: bars-bar-five 1s;
    animation-fill-mode: forwards;
    animation-delay: 2.8s;
    -webkit-animation: bars-bar-five 1s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-delay: 2.8s;
}

.h-bars .bar-five:after {
    content: 'Are You Serious?';
    right: -130px;
    animation: bars-after 1s;
    animation-fill-mode: forwards;
    animation-delay: 2.6s;
    -webkit-animation: bars-after 1s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-delay: 2.6s;
}

@keyframes bars-bar-five {
    from {
        width: 0;
    }

    to {
        width: 3px;
    }
}

@-webkit-keyframes bars-bar-five {
    from {
        width: 0;
    }

    to {
        width: 3px;
    }
}

a {
    text-decoration: none;
}

.stat a {
    color: #094F80;
    letter-spacing: 2px;
    transition: all 1s ease;
    -moz-transition: all 1s ease;
    -webkit-transition: all 1s ease;
}

.stat a:hover {
    color: #fff;
}

.date {
    color: #fff;
    font-size: .6em;
}

.quote {
    color: #094F80;
    font-size: .8em;
    font-style: italic;

}

.auth {
    color: #fff;
    margin-left: 30%;
    font-size: .6em;
}

.gre {
    background: green;
}

.org {
    background: orange;
}

@media only screen and (min-width:600px) {
    .statistics>div {
        display: block;
        max-width: 100%;
        float: none;
    }

    .h-bars {
        margin-left: 25%;
    }

    h2 {
        text-align: left;
        margin-left: 15%;
    }

}

@media only screen and (min-width:900px) {

    .statistics {
        width: 100%;
    }

    .statistics>div {
        display: inline-block;
        max-width: 100%;
        margin: 0;
    }

    h2 {
        text-align: center;
        margin-left: -1em;

    }
}


.avatar-upload {
    position: relative;
    max-width: 205px;
    margin: 50px auto;
    .avatar-edit {
        position: absolute;
        right: 12px;
        z-index: 1;
        top: 10px;
        input {
            display: none;
            + label {
                display: inline-block;
                width: 34px;
                height: 34px;
                margin-bottom: 0;
                border-radius: 100%;
                background: #FFFFFF;
                border: 1px solid transparent;
                box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
                cursor: pointer;
                font-weight: normal;
                transition: all .2s ease-in-out;
                &:hover {
                    background: #f1f1f1;
                    border-color: #d6d6d6;
                }
                &:after {
                    content: "\f030";
                    font-family: 'FontAwesome';
                    color: #757575;
                    position: absolute;
                    top: 5px;
                    left: 0;
                    right: 0;
                    text-align: center;
                    margin: auto;
                }
            }
        }
    }
    .avatar-preview {
        width: 192px;
        height: 192px;
        position: relative;
        border-radius: 100%;
        border: 6px solid #f8f8f8;
        margin-top: -40px;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
        > div {
            width: 100%;
            height: 100%;
            border-radius: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
    }
}
</style>