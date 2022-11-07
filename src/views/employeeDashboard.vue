<template>

    <body id="landing" class="sidebar-open">
        <div id="dashboardPage">
            <employeeNavbar />

            <main style="margin-left:-200px;margin-right:10px">
                <div>
                    <div>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel" v-if="pop === `new`">Nouvel Employé
                                        </h5>
                                        <h5 class="modal-title" id="exampleModalLabel" v-if="pop === `sub`">Les Sub
                                            Infos</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="">
                                            <div>
                                                <div class=" bootstrap snippets bootdey">
                                                    <b-form v-if="pop === `new`" @submit="signup($event)">


                                                        <b-form-group id="input-group-2" label-for="input-2">
                                                            <b-form-input v-model="firstName" placeholder="Prénom"
                                                                required></b-form-input>
                                                        </b-form-group>
                                                        <b-form-group id="input-group-2" label-for="input-2">
                                                            <b-form-input v-model="lastName" placeholder="Nom de famille"
                                                                required></b-form-input>
                                                        </b-form-group>
                                                        <b-form-group id="input-group-2" label-for="input-2">
                                                            <b-form-input v-model="phone" type="tel"
                                                                placeholder="Numéro" required></b-form-input>
                                                        </b-form-group>
                                                        <b-form-group id="input-group-1" label-for="input-1">
                                                            <b-form-input id="input-1" v-model="email" type="email"
                                                                placeholder="E-mail" required></b-form-input>
                                                        </b-form-group>
                                                        <b-form-group id="input-group-2" type="password"
                                                            label-for="input-2">
                                                            <b-form-input type="password" v-model="password"
                                                                placeholder="Mot de Passe" id="text-password"
                                                                aria-describedby="password-help-block"></b-form-input>
                                                        </b-form-group>



                                                        <div class="form-fields">
                                                            <b-button type="submit" variant="primary">Créer un employé
                                                            </b-button>
                                                        </div>
                                                    </b-form>
                                                    <b-form v-if="pop === `sub`" @submit="updadeSubInformation($event)">
                                                        <b-form-group id="input-group-2" label-for="input-2"
                                                            label="Information :">
                                                            <b-form-textarea id="textarea" v-model="subInfo.informations"
                                                                placeholder="Informations" rows="2" max-rows="4" required>
                                                            </b-form-textarea>
                                                        </b-form-group>
                                                        <b-form-group id="input-group-1" label-for="input-1"
                                                            label="Monnaie  :">
                                                            <div>
                                                                <b-form-select v-model="subInfo.currency"
                                                                    :options="options">
                                                                </b-form-select>
                                                            </div>
                                                        </b-form-group>
                                                        <b-form-group id="input-group-2" label-for="input-2"
                                                            label="Prix par Ordinateur :">
                                                            <b-form-input v-model="subInfo.computerPrice" type="text"
                                                                placeholder="Prix par Ordinateur" required></b-form-input>
                                                        </b-form-group>
                                                        <b-form-group id="input-group-1" label-for="input-1"
                                                            label="Prix par Document :">
                                                            <b-form-input id="input-1" v-model="subInfo.documentPrice"
                                                                type="text" placeholder="Prix par Document" required>
                                                            </b-form-input>
                                                        </b-form-group>
                                                        <b-form-group id="input-group-1" label-for="input-1"
                                                            label="Lien:">
                                                            <b-form-input id="input-1" v-model="subInfo.link"
                                                                type="text" placeholder="Lien" required>
                                                            </b-form-input>
                                                        </b-form-group>


                                                        <div class="form-fields">
                                                            <b-button type="submit" variant="primary">Envoyer
                                                            </b-button>
                                                        </div>
                                                    </b-form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="page-breadcrumb">
                    <div class="row">
                        <div class="col-6">
                            <h4 class="page-title">Tableau de bord</h4>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="/employeeDashboard">Accueil</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Tableau de bord</li>
                                </ol>
                            </nav>
                        </div>

                    </div>
                </div>


                <div class="dashboard">

                    <div class="cadre1">
                        <div class="cont1">
                            <div class="stat1">
                                <div class="info-user" style="width: 40%; height: 100%; display: flex;">
                                    <span style="color: #fff;">Utilisateurs</span>

                                    <span style="color: #fff;position: relative; left:-30%;"><i
                                            class="fa fa-user-circle"></i></span>
                                </div>
                                <div class="c1">
                                    <div class="c2">
                                        <div class="c3">
                                            <div class="c4">
                                                <span style="color: #fff;">{{ use }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cont1">
                            <div class="stat2">
                                <div class="info-user" style="width: 30%; height: 100%; display: flex;color:#fff;">
                                    <span>Articles</span>
                                    <span>{{ data.postedArticles }}</span>
                                    <span><i class="fa fa-shopping-cart i"
                                            style="position: relative; left:-40%;"></i></span>
                                </div>
                                <div class="disp" style="position: relative; width: 40%;height: 100%;">
                                    <span style="color:#fff;">{{ p1 }}%</span>
                                    <svg style="position: absolute;">
                                        <circle cx="35" cy="35" r="35"></circle>
                                        <circle cx="35" cy="35" r="35"
                                            :style="`stroke-dashoffset: calc(220 - (220 * ${p1}}) / 100);`"></circle>
                                    </svg>
                                    <span
                                        style="position: absolute; bottom:0px;right:-25px;font-size: 12px;color: #000;">disponible</span>
                                </div>
                            </div>
                        </div>
                        <div class="cont1">
                            <div class="stat2">
                                <div class="info-user" style="width: 30%; height: 100%; display: flex;color:#fff;">
                                    <span>Voyageurs</span>
                                    <span>{{ data.postedAnnouncements }}</span>
                                    <span><i class="fa fa-plane i" style="position: relative; left:-40%;"></i></span>
                                </div>
                                <div class="disp" style="position: relative; width: 40%;height: 100%;">
                                    <span style="color:#fff;">{{ p2 }}%</span>
                                    <svg style="position: absolute;">
                                        <circle cx="35" cy="35" r="35"></circle>
                                        <circle cx="35" cy="35" r="35"
                                            :style="`stroke-dashoffset: calc(220 - (220 * ${p2}}) / 100);`"></circle>
                                    </svg>
                                    <span
                                        style="position: absolute; bottom:0px;right:-25px;font-size: 12px;color: #000;">disponible</span>
                                </div>
                            </div>
                        </div>
                        <div class="cont1">
                            <div class="stat2">
                                <div class="info-user" style="width: 30%; height: 100%; display: flex;color:#fff;">
                                    <span>Réservations</span>
                                    <span>{{ data.reservations }}</span>
                                    <span><i class="fa fa-suitcase i" style="position: relative; left:-40%;"></i></span>

                                </div>
                                <div class="disp" style="position: relative; width: 40%;height: 100%;">
                                    <span style="color:#fff;">{{ p3 }}%</span>
                                    <svg style="position: absolute;">
                                        <circle cx="35" cy="35" r="35"></circle>
                                        <circle cx="35" cy="35" r="35"
                                            :style="`stroke-dashoffset: calc(220 - (220 * ${p3}}) / 100);`"></circle>
                                    </svg>
                                    <span
                                        style="position: absolute; bottom:0px;right:-25px;font-size: 12px;color: #000;">disponible</span>
                                </div>
                            </div>
                        </div>
                        <div class="cont1">
                            <div class="stat2">
                                <div class="info-user" style="width: 30%; height: 100%; display: flex;color:#fff;">
                                    <span>Achats</span>
                                    <span>0</span>
                                    <span><i class="fa fa-cart-arrow-down i"
                                            style="position: relative; left:-40%;"></i></span>
                                </div>
                                <div class="disp" style="position: relative; width: 40%;height: 100%;">
                                    <span style="color:#fff;">0%</span>
                                    <svg style="position: absolute;">
                                        <circle cx="35" cy="35" r="35"></circle>
                                        <circle cx="35" cy="35" r="35"
                                            :style="`stroke-dashoffset: calc(220 - (220 * ${1}}) / 100);`"></circle>
                                    </svg>
                                    <span
                                        style="position: absolute; bottom:0px;right:-25px;font-size: 12px;color: #000;">disponible</span>
                                </div>
                            </div>
                        </div>
                        <div class="cont1">
                            <div class="stat2">
                                <div class="info-user" style="width: 30%; height: 100%; display: flex;color:#fff;">
                                    <span>Ventes</span>
                                    <span>0</span>
                                    <span><i class="fa fa-money" style="position: relative; left:-40%;"></i></span>
                                </div>
                                <div class="disp" style="position: relative; width: 40%;height: 100%;">
                                    <span style="color:#fff;">0%</span>
                                    <svg style="position: absolute;">
                                        <circle cx="35" cy="35" r="35"></circle>
                                        <circle cx="35" cy="35" r="35"
                                            :style="`stroke-dashoffset: calc(220 - (220 * ${1}}) / 100);`"></circle>
                                    </svg>
                                    <span
                                        style="position: absolute; bottom:0px;right:-25px;font-size: 12px;color: #000;">disponible</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cadre2">
                        <div class="cont2">
                            <div class="test2">
                                <div class="info2 disp">
                                    <div class="pourc disp"
                                        style="color:white;border: 2px solid white;height:45px;width: 45px;border-radius: 50%; font-size: 13px;">
                                        {{ dp1 }}%
                                    </div>
                                </div>
                                <div class="bars" style="position: relative;">
                                    <div
                                        style="display:flex;width: 20px;text-align: end;padding-right: 10px;font-size: 13px;float: right;position: absolute;right: 0px;top: 0px;">
                                        <span><i class="fa fa-trash" style="color: red;font-size: 14px;"></i></span>
                                    </div>
                                    <div style="color: white;">Voyages supprimés</div>
                                    <div class="disp mr-1" style="height: 30%;width: 100%;">
                                        <div class="chargeOut">
                                            <div class="chargeIn" :style="`width: ${dp1}%;`"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="test2">
                                <div class="info2 disp">
                                    <div class="pourc disp"
                                        style="color:white;border: 2px solid white;height:45px;width: 45px;border-radius: 50%;font-size: 13px;">
                                        {{ dp2 }}%
                                    </div>
                                </div>
                                <div class="bars" style="position: relative;">
                                    <div
                                        style="display:flex;width: 20px;text-align: end;padding-right: 10px;font-size: 13px;float: right;position: absolute;right: 0px;top: 0px;">
                                        <span><i class="fa fa-trash" style="color: red;font-size: 14px;"></i></span>
                                    </div>
                                    <div style="color: white;">Réservations supprimées</div>
                                    <div class="disp mr-1" style="height: 30%;width: 100%;">
                                        <div class="chargeOut">
                                            <div class="chargeIn" :style="`width: ${dp2}%;`"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="test2">
                                <div class="info2 disp">
                                    <div class="pourc disp"
                                        style="color:white;border: 2px solid white;height:45px;width: 45px;border-radius: 50%;font-size: 13px;">
                                        {{ dp3 }}%
                                    </div>
                                </div>
                                <div class="bars" style="position: relative;">
                                    <div
                                        style="display:flex;width: 20px;text-align: end;padding-right: 10px;font-size: 13px;float: right;position: absolute;right: 0px;top: 0px;">
                                        <span><i class="fa fa-trash" style="color: red;font-size: 14px;"></i></span>
                                    </div>
                                    <div style="color: white;">Articles supprimés</div>
                                    <div class="disp mr-1" style="height: 30%;width: 100%;">
                                        <div class="chargeOut">
                                            <div class="chargeIn" :style="`width: ${dp3}%;`"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="test2">
                                <div class="info2 disp">
                                    <div class="pourc disp"
                                        style="color:white;border: 2px solid white;height:45px;width: 45px;border-radius: 50%;font-size: 13px;">
                                        {{ dp4 }}%
                                    </div>
                                </div>
                                <div class="bars" style="position: relative;">
                                    <div
                                        style="display:flex;width: 20px;text-align: end;padding-right: 10px;font-size: 13px;float: right;position: absolute;right: 0px;top: 0px;">
                                        <span><i class="fa fa-trash" style="color: red;font-size: 14px;"></i></span>
                                    </div>
                                    <div style="color: white;">Utilisateurs supprimés</div>
                                    <div class="disp mr-1" style="height: 30%;width: 100%;">
                                        <div class="chargeOut">
                                            <div class="chargeIn" :style="`width: ${dp4}%;`"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cadre3">
                        <div class="list-titre">Tous les employés</div>
                        <div class="cont3">
                            <div class="tete-table">
                                <div class="pp-em">profil</div>
                                <div class="name-em">Nom</div>
                                <div class="tel-em">Numéro</div>
                                <div class="mail-em">E-mail</div>
                            </div>
                            <hr>
                            <div v-for="item in employee" class="corps-table" v-bind:key="item.id">
                                <div class="col1">
                                    <img class="mon-profile" v-if="item.profileimgage == ``" src="@/assets/img/pp.png"
                                        alt="profile" />
                                    <img class="mon-profile" v-else
                                        :src="`http://46.105.36.240:3000/${item.profileimgage}`" alt="profile" />
                                </div>
                                <div class="col2 text-uppercase">{{ item.firstName + " " + item.lastName }}</div>
                                <div class="col3">{{ item.phone }}</div>
                                <div class="col4">{{ item.email }}</div>

                            </div>
                        </div>
                    </div>
                    <div class="cadre4">
                        <div class="cont4">
                            <div class="test2">
                                <div class="info2 disp">
                                    <div class="pourc disp"
                                        style="color:white;border: 2px solid white;height:40px;width: 40px;border-radius: 50%;font-size: 12px;">
                                        {{ anCon }}%
                                    </div> 
                                </div>
                                <div class="bars" style="position: relative;">
                                    <div
                                        style="display:flex;width: 15px;text-align: end;padding-right: 10px;font-size: 13px;float: right;position: absolute;right: 0px;top: -10px;">
                                        <span><i class="fa fa-check" style="color: green;"></i></span>
                                    </div>
                                    <div style="color: white;">Voyages validés</div>
                                    <div class="disp mr-1" style="height: 30%;width: 100%;">
                                        <div class="chargeOut">
                                            <div class="chargeIn gre" :style="`width: ${anCon}%;`"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="test2">
                                <div class="info2 disp">
                                    <div class="pourc disp"
                                        style="color:white;border: 2px solid white;height:40px;width: 40px;border-radius: 50%;font-size: 12px;">
                                        {{ anPen }}%
                                    </div>
                                </div>
                                <div class="bars" style="position: relative;">
                                    <div
                                        style="display:flex;width: 15px;text-align: end;padding-right: 10px;font-size: 13px;float: right;position: absolute;right: 0px;top: -10px;">
                                        <span><i class="fa fa-pause" style="color: orange;font-size: 14px;"></i></span>
                                    </div>
                                    <div style="color: white;">Voyages en attente</div>
                                    <div class="disp mr-1" style="height: 30%;width: 100%;">
                                        <div class="chargeOut">
                                            <div class="chargeIn org" :style="`width: ${anPen}%;`"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cont4">
                            <div class="test2">
                                <div class="info2 disp">
                                    <div class="pourc disp"
                                        style="color:white;border: 2px solid white;height:40px;width: 40px;border-radius: 50%;font-size: 12px;">
                                        {{ reCon }}%
                                    </div>
                                </div>
                                <div class="bars" style="position: relative;">
                                    <div
                                        style="display:flex;width: 15px;text-align: end;padding-right: 10px;font-size: 13px;float: right;position: absolute;right: 0px;top: -10px;">
                                        <span><i class="fa fa-check" style="color: green;font-size: 14px;"></i></span>
                                    </div>
                                    <div style="color: white;">Réservations confirmées</div>
                                    <div class="disp mr-1" style="height: 30%;width: 100%;">
                                        <div class="chargeOut">
                                            <div class="chargeIn gre" :style="`width: ${reCon}%;`"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="test2">
                                <div class="info2 disp">
                                    <div class="pourc disp"
                                        style="color:white;border: 2px solid white;height:40px;width: 40px;border-radius: 50%;font-size: 12px;">
                                        {{ rePen }}%
                                    </div>
                                </div>
                                <div class="bars" style="position: relative;">
                                    <div
                                        style="display:flex;width: 15px;text-align: end;padding-right: 10px;font-size: 13px;float: right;position: absolute;right: 0px;top: -10px;">
                                        <span><i class="fa fa-pause" style="color: orange;font-size: 14px;"></i></span>
                                    </div>
                                    <div style="color: white;">Réservations en attente</div>
                                    <div class="disp mr-1" style="height: 30%;width: 100%;">
                                        <div class="chargeOut">
                                            <div class="chargeIn org" :style="`width: ${rePen}%;`"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="sub" data-target="#exampleModal" data-toggle="modal" class="cont4"
                            @click="() => { this.pop = `new` }"
                            style="background: green;color: #fff;display: flex;align-items: center;flex-direction: row;cursor: pointer;">
                            <i class="fa fa-plus"
                                style="display: flex;align-items: center;justify-content: center;"></i><span>Ajouter un nouvel employé</span>
                        </div>
                        <div v-if="sub" data-target="#exampleModal" data-toggle="modal" class="cont4"
                            @click="() => { this.pop = `sub` }"
                            style="background: orange;color: #fff;display: flex;align-items: center;flex-direction: row;cursor: pointer;">
                            <i class="fa fa-pencil"
                                style="display: flex;align-items: center;justify-content: center;"></i><span>Sub
                                informations</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </body>
</template>

<script>
    import employeeNavbar from '../components/employeeNavbar.vue';
import Swal from 'sweetalert2';
export default {
    components: {
        employeeNavbar,
    },
    data() {
        return {
            pop: 'new',
            firstName: "",
            lastName: '',
            password: "",
            phone: "",
            email: '',
            use: 0,
            dp1: 0,
            dp2: 0,
            dp3: 0,
            dp4: 0,
            loading: true,
            data: {},
            p1: 0,
            p2: 0,
            p3: 0,
            anPen: 0,
            anCon: 0,
            rePen: 0,
            reCon: 0,
            employee: [],
            subInfo: {
                informations: "",
                currency: "",
                computerPrice: "",
                documentPrice: "",
                user: {},
                link: ""
            },

            options: [
                { value: "", text: 'Choisissez la devise' },
                { value: '€', text: 'Euro' },
                { value: '$', text: 'Dollar' },
                { value: "XAF", text: 'Fcfa' },
                { value: "₽", text: "rouble russe" }
            ],
            sub: false,
        }
    },
     created() {
        var axiosprofile = require('axios');
var configprofile = {
  method: 'get',
  url: 'http://46.105.36.240:3000/profile',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
  },
};

axiosprofile(configprofile)
.then(res => {
           
localStorage.setItem('userId', res.data.id);
localStorage.setItem('pseudo', res.data.pseudo);
        if (res.data.pseudo == "Admin") {
            this.sub = true
        }
        var axios = require('axios');
        var data = '';

        var config = {
            method: 'get',
            url: 'http://46.105.36.240:3000/statistics',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access-token')
            },

            data: data
        };

       axios(config).then(res => {
            this.data = res.data
            let a = this.data
            this.use = a.registeredUsers
            this.loading = false
            if (a) {
                if (a.postedAnnouncements !== 0) {

                    this.p2 = Math.round((a.postedAnnouncements - a.deletedAnnouncements) * 100 / a.postedAnnouncements)
                    this.dp1 = Math.round(a.deletedAnnouncements * 100 / a.postedAnnouncements)
                    this.anPen = Math.round(a.pendingValidationAnnouncements * 100 / a.postedAnnouncements)
                    this.anCon = Math.round(a.validatedAnnouncements * 100 / a.postedAnnouncements)
                }
                if (a.reservations !== 0) {
                    this.p3 = Math.round((a.reservations - a.deletedReservations) * 100 / a.reservations)
                    this.dp2 = Math.round(a.deletedReservations * 100 / a.reservations)
                    this.rePen = Math.round(a.pendingValidationReservations * 100 / a.reservations)
                    this.reCon = Math.round(a.confirmReservations * 100 / a.reservations)
                }
                if (a.postedArticles !== 0) {
                    this.p1 = Math.round((a.postedArticles - a.deletedArticle) * 100 / a.postedArticles)
                    this.dp3 = Math.round(a.deletedArticle * 100 / a.postedArticles)
                }
            }
        })
            .catch(function (error) {
                this.loading = false
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Échec de Connexion !',
                })
                this.loading = false
                console.log(error);
            });


       
      })
.catch(function (error) {
  console.log(error);
});

     
        var myHeaders0 = new Headers();
        myHeaders0.append("Content-Type", "application/json");
        myHeaders0.append("Authorization", "Bearer " + localStorage.getItem('access-token'));

        var requestOptions0 = { method: 'GET', headers: myHeaders0, redirect: 'follow' };

        fetch("http://46.105.36.240:3000/users", requestOptions0)
            .then(response => response.text())
            .then(result => {
                for (let i = 0; i < JSON.parse(result).length; i++) {
                    if (JSON.parse(result)[i].pseudo == "DGA-EMPLOYEE") {
                        this.employee.push(JSON.parse(result)[i])
                    }
                }

            })
            .catch(error => console.log('error', error));




        var requestOptions1 = { method: 'GET', redirect: 'follow' };

         fetch("http://46.105.36.240:3000/sub/informations/view", requestOptions1)
            .then(response => response.text())
            .then(result => {
                if (JSON.parse(result).length !== 0) {
                    this.subInfo = JSON.parse(result)[0]
                    console.log(result);
                }
            })
            .catch(error => console.log('error', error));
        this.use = this.use - this.employee.length

    },
    methods: {
        updadeSubInformation(event) {
            event.preventDefault()
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer " + localStorage.getItem("access-token"));
            this.subInfo.user = JSON.parse(localStorage.getItem("userInfo"))
            var raw = JSON.stringify(this.subInfo);

            var requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://46.105.36.240:3000/sub/informations", requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result);
                    Swal.fire({
                        icon: 'success',
                        title: ' Mise à jour réussie !',
                        showConfirmButton: true,
                        timer: 1500
                    })
                })
                .catch(error => console.log('error', error));
        },
        signup(event) {
            this.loading = true
            event.preventDefault()
            var axios = require('axios');
            var data = JSON.stringify({
                "firstName": this.firstName,
                "lastName": this.lastName,
                "pseudo": "DGA-EMPLOYEE",
                "phone": this.phone,
                "profileimgage": '',
                "email": this.email,
                "password": this.password
            });


            var config = {
                method: 'post',
                url: 'http://46.105.36.240:3000/signup',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };


            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response));
                    Swal.fire({
                        icon: 'success',
                        title: ' Enregistré avec succès !',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    //window.location.href = "/"
                })
                .catch(function (error) {
                    console.log(error);
                    if (error.response.status === 500) {
                        Swal.fire(
                            "Échec de l'inscription !",
                            "L'utilisateur existe déjà!.",
                            'error'
                        )
                    } if (error.response.status === 404) {
                        Swal.fire(
                            'Échec!',
                            'Échec de Connexion !.',
                            'error'
                        )
                    }

                });
        }
    },


}
</script>

<style>
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

.info-user .i {
    background: #fff;
    color: #202d33;
    padding: 3px;
    font-size: 19px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 15px 20px;
    height: 25px;
    width: 25px;

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
</style>