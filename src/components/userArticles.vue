<template>
    <div>
        <div class="wrapper">
 <div class="profile-card active">
     <div class="profile-card-header" v-if="this.image !==''">
             <img :src="'http://46.105.36.240:3000/'+this.image" alt=""/>
     </div>
     <div class="profile-card-header" v-else>
             <img src="@/assets/img/hotels/59710428.png"  alt=""/>
     </div>
   
     <div class="profile-card-body">
       <h3>{{this.name}}</h3>
     </div>
     <div class="profile-card-footer">
        <p style="color:white">Bienvenue dans la boutique de <span style="color:orange;"><b>{{this.name}}</b></span></p>
     </div>
 </div>
</div>

<b-modal id="modal-multi-payment" title="DGA Express" hide-footer>
      
      <div class="popover-container">
  <div class="popover-header">
    <span>Moyen de Paiement</span>
    <h6>5€ (3280 XAF) sera ajouté au prix total à des fins fiscales</h6>
  </div>
  
  <div class="payment-buttons">

    <button class="payment-button" @click="momo()">
      <i class="fa fa-mobile fa-2x" style="font-size:45px; left: 7px; top: 28px; position: absolute;" ></i>
      <span class="payment-button-text" style="margin-left: 36px;">Mobile Money</span>
    </button>

    <button class="payment-button"  v-on:click="card()">
      <i class="fa fa-credit-card fa-2x" style="font-size:35px; left: 5px; top: 30px; position: absolute;" ></i>
       <span class="payment-button-text" style="margin-left: 55px;">Par Carte</span>
    </button>
    

    
    <div >
    </div>
  </div>
  
</div>
 
 </b-modal>

      <div>
        <lognavVue />
      </div>
      <div v-if="loading"
        style="background:rgba(0,0,0,0.3);height:100vh;width:100vw;position:fixed;top:0;left:0;z-index: 100;">
        <div class="ring">Loading</div>
      </div>
      <b-modal id="modal-multi-4" title="DGA Express" hide-footer>
     
     <form @submit="onSubmit">
         <div style="margin: 10px 0 10px 200px;" v-if="loding" class="loader"></div>
         <h2 class="heading">S'identifier</h2>
         <div class="form-fields">
           <input v-model="useremail" id="email" name="email" type="email" placeholder="E-mail" required>
         </div>
         <div class="form-fields">
           <input v-model="password"  id="password" name="password" type="password" placeholder="Mot de Passe" required>
         </div>
         <div class="form-fields">
           <button class="signIn" name="commit" type="submit" >
             S'identifier<div class="spinner-border text-light spinner-border-sm" role="status" v-if="login" style="margin-left:10px">
           <span class="sr-only" >Loading...</span></div>
           </button>
         </div>
         <div class="login-choice"><span>ou S'identifier avec</span></div>
         <SocialLogin />
     </form>
     <div class="footer">
        <p>Vous n'avez pas de compte ? <a href="/Register"> <u style="color:blue">
  Inscrivez-vous ici</u></a></p>
     </div>
   
   </b-modal>
  
      <div class="container">
        <div class="main-body">
  
          <!-- /Breadcrumb -->
  
  
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
  
            <div class="col mb-3" v-for="(item, idx) in articles" v-bind:key="idx">
              <!--v-if="item.mainImage !== ''"-->
  
              <div class="card ma-cart" style="border-radius: 15px; padding:-90px">
                <div class="card-body text-left">
                  <img class="d-block img-fluid w-100 imgSlide"
                    :src="`http://46.105.36.240:3000/article/image?file=${item.mainImage}`" alt="image slot">
  
                  <span class="mb-1 art-title">{{  item.name  }}</span><br />
                  <span class="mb-1 art-0 text-muted"><i class="fa fa-chevron-down text-warning"></i> {{
                     item.cathegory.name 
                    }}</span><br />
                  <br />
                  <span class="mb-1 art-0"><i class="fa fa-map-marker text-warning"></i> {{  item.location.slice(0, 20) 
                    }}...</span><br />
                  <span class="mb-1 text-muted art-0"><i class="fa fa-money text-warning"></i> {{  item.price  }} <b
                      style="color: rgb(63, 167, 247);">{{  subInfo.currency  }}</b></span>
                  <h6 style="text-transform: capitalize" class="mb-2 text-muted text-art"><i
                      class="fa fa-user text-warning"></i> {{  item.user.firstName  }}</h6>
  
  
                  <div style="margin-top:20px" class="mb-2 pb-2">
                    <button type="button" v-on:click="view(item)" data-target="#exampleModal" data-toggle="modal"
                      style="height:35px; float:left ;" class="btn btn-outline-primary btn-floating">
                      <i class="fa fa-eye" aria-hidden="true"></i>
                    </button>
                    <button v-if="infoUser.id !== item.user.id" @click="tchat(item, item.user)"
                      style="height:35px; float:left ;" class="btn btn-outline-primary btn-floating ml-1">
                      <i class="fa fa-comment" aria-hidden="true"></i>
                    </button>
  
  
                    <button v-if="isLogged === true && infoUser.id !== item.user.id" @click="addToCard(item)"
                     type="button" style="height:38px; float:right ;"
                      class="btn btn-warning btn-rounded btn-sm btn-floating">
                      + À la carte
                    </button>
                    <button v-if="isLogged === false" v-b-modal.modal-multi-4 type="button"
                      style="height:38px; width:50%;  float:right ;"
                      class="btn btn-outline-warning btn-rounded btn-sm btn-floating">
                      S'identifier
                    </button>
  
                  </div>
  
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 v-if="sortCart == `art`" class="modal-title" id="exampleModalLabel"> Info</h5>
                  <h5 v-else-if="sortCart == `basket`" class="modal-title" id="exampleModalLabel">le Panier</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="">
                    <div>
                      <div class="container bootstrap snippets bootdey" style="background:#d9dedf; ">
                        <section id="contact" class="gray-bg padding-top-bottom">
                          <div v-if="sortCart == `art`" class="container bootstrap snippets bootdey">
                            <div class="row">
                              <b-carousel id="carousel-1" class="my-img" v-model="slide" controls background="#000"
                                img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #000;"
                                @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
                                <b-carousel-slide v-for="(top, id) in path" class="my-img" v-bind:key="id">
                                  <template #img class="img">
                                    <img class="d-block img-fluid w-100 my-img0"
                                      :src="`http://46.105.36.240:3000/article/image?file=${top}`" alt="image slot">
                                  </template>
                                </b-carousel-slide>
                              </b-carousel>
                            </div>
                            <div class="row">
                              <form id="Highlighted-form" class="col-sm-6 col-sm-offset-3" novalidate="">
                                <!-- End email input -->
                                <div class="form-group">
                                  <div class=" controls">
                                    <h6>Article</h6> <input v-model="article.name" id="contact-mail" name="email"
                                      class="form-control requiredField Highlighted-label" type="email" readonly>
                                    <!-- <i class="fa fa-hospital"></i> -->
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div class=" controls">
                                    <h6>Catégorie</h6> <input v-model="article.cathegory.name" id="contact-mail"
                                      name="email" class="form-control requiredField Highlighted-label" type="email"
                                      readonly>
                                    <!-- <i class="fa fa-hospital"></i> -->
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div class=" controls">
                                    <h6>Adresse</h6> <input v-model="article.location" id="contact-mail" name="email"
                                      class="form-control requiredField Highlighted-label" type="email" readonly>
                                    <!-- <i class="fa fa-hospital"></i> -->
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div class=" controls">
                                    <h6>Quantité</h6> <input v-model="article.quantity" id="contact-mail" name="email"
                                      class="form-control requiredField Highlighted-label" type="email" readonly>
                                    <!-- <i class="fa fa-hospital"></i> -->
                                  </div>
                                </div>
  
                                <div class="form-group">
                                  <div class=" controls">
                                    <h6>Prix</h6> <input v-model="article.price" id="contact-mail" name="email"
                                      class="form-control requiredField Highlighted-label" type="email" readonly>
                                    <!-- <i class="fa fa-hospital"></i> -->
                                  </div>
                                </div>
  
                                <div class="form-group">
                                  <div class="controls">
                                    <h6>La Description</h6> <textarea v-model="article.description" id="contact-message"
                                      name="comments" placeholder="Your message"
                                      class="form-control requiredField Highlighted-label" rows="3" readonly></textarea>
                                    <!-- <i class="fa fa-comment"></i> -->
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div class=" controls">
                                    <h6>Propriétaire</h6> <input v-model="article.user.firstName" id="contact-mail" name="email"
                                      class="form-control requiredField Highlighted-label" type="email" readonly>
                                    <!-- <i class="fa fa-hospital"></i> -->
                                  </div>
                                </div>
  
                              </form><!-- End Highlighted-form -->
                            </div>
                          </div>
                          <div v-else-if="sortCart == `basket`" class="container bootstrap snippets bootdey">
                            <table class="table table-striped table-hover table-borderless table-vcenter font-size-sm">
                              <thead>
                                <tr class="text-uppercase">
                                  <th class="font-w100">Nom</th>
                                  <th class="font-w100">Qté</th>
                                  <th class="font-w100">Dispo</th>
                                  <th class="font-w100">UP</th>
                                  <th class="font-w100">Supp</th>
  
                                </tr>
                              </thead>
                              <tbody style="text-transform: capitalize">
                                <tr v-for="(item, idx) in basket" v-bind:key="idx">
                                  <td>{{  item.name.slice(0, 14)  }}...</td>
                                  <td><input style="position:relative; max-width: 30px;" @change="newTotal" type="number" v-model="quantities[idx]" min="1"
                                      :max="item.quantity"></td>
                                  <td>{{  item.quantity  }}</td>
                                  <td>{{  item.price  }}</td>
                                  <td @click="remov(idx)" class="btn text-danger close">&times;</td>
                                </tr>
                                
                              </tbody>
                            </table>
                            <div class="text-uppercase pb-4">
                              Total <span class="">{{  total  }} <b style="color: rgb(63, 167, 247);">{{
                                   subInfo.currency 
                                  }}</b></span>
                             <button v-b-modal.modal-multi-payment type="button" data-target="#exampleModal"
      data-toggle="modal" style="height:38px; float:right ;"
                              class="btn btn-warning btn-rounded btn-sm btn-floating"> Payer </button>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
  
  
        <div v-if="errors">
          <pageNotFoundVue />
        </div>
        <div v-if="errors1">
          <pageNotFoundNoDataVue />
        </div>
  
      </div>
      <button @click="viewBasket" type="button" class="icon-button panier" data-target="#exampleModal"
        data-toggle="modal">
        <span class="material-icons">shopping_cart</span>
        <span class="icon-button__badge">{{  basket.length  }}</span>
      </button>
    </div>
  </template>
  <script>
  
  import pageNotFoundNoDataVue from "./pageNotFoundNoData.vue";
  import pageNotFoundVue from "./pageNotFound.vue"
  import axios from 'axios'
  import Swal from 'sweetalert2'
  export default {
    name: "allTravels",
    data() {
      return {
        image:"",
        name:'',
        id1: this.$route.params.id1,
        login:false,
        infoUser: {},
        errors: false,
        errors1: false,
        loading: true,
        loeding: false,
        userIdAnnouncement: localStorage.getItem('userId'),
        isLogged: this.checkIfIsLogged(),
        id: '',
        users1: [],
        articles: [],
        path: [],
        modalShow: false,
        article: {
          name: "",
          description: "",
          price: 0,
          quantity: 0,
          status: "",
          date: "",
          location: "",
          cathegory: {
            name: ''
          },
          user: { firstName: '' }
        },
        sortCart: "art",
        total: 0,
        basket: [],
        quantities: [],
        employee: [],
        subInfo: [],
      }
    },
    components: {
      pageNotFoundVue,
      pageNotFoundNoDataVue,
  
    },
  
    async mounted() {
         
        var axios = require('axios');

var config = {
  method: 'get',
  url: "http://46.105.36.240:3000/user/"+ this.id1 +"/articles/",
  headers: { 
    'Content-Type': 'application/json', 
    Authorization: "Bearer " + localStorage.getItem("access-token"),
},
};

axios(config)
      .then((res) => {
        if (res.data == "") {
              this.loading = false;
              this.errors = true
            } else {
              this.loading = false;
              this.allArticles = res.data.reverse();
              for (let p = 0; p < this.allArticles.length; p++) {
                if (
                  this.allArticles[p].mainImage !== ""
                ) {
                  this.articles.push(this.allArticles[p]);
                 
                }
              }
  
              this.name =  this.allArticles[0].user.firstName + " " + this.allArticles[0].user.lastName;
              this.image = this.allArticles[0].user.profileimgage;
            }
       

      })
      .catch(function (error) {
        this.errors1 = true
        this.loading = false;
        console.log(error);
      });
        // await fetch("http://46.105.36.240:3000/user/"+this.id+"/articles")
        //   .then(response => response.json())
        //   .then((data) => {
        //     if (data == "") {
        //       this.loading = false;
        //       this.errors = true
        //     } else {
        //       this.loading = false;
        //       this.allArticles = data.reverse();
        //       for (let p = 0; p < this.allArticles.length; p++) {
        //         if (
        //           this.allArticles[p].mainImage !== ""
        //         ) {
        //           this.articles.push(this.allArticles[p]);
        //         }
        //       }
  
  
        //     }
        //   })
        //   .catch((err) => {
        //     console.error(err);
        //     this.errors1 = true
        //     this.loading = false;
        //   });
      var requestOptions1 = { method: 'GET', redirect: 'follow' };
  
      fetch("http://46.105.36.240:3000/sub/informations/view", requestOptions1)
        .then(response => response.text())
        .then(result => {
          if (JSON.parse(result).length !== 0) {
            this.subInfo = JSON.parse(result)[0]
          }
        })
        .catch(error => console.log('error', error));
  
  
      let bask = JSON.parse(localStorage.getItem("basket"))
      if (bask) {
        this.basket = bask[0]
        this.quantities = bask[1]
        this.total = 0
        for (let i = 0; i < this.basket.length; i++) {
          this.total += this.basket[i].price * this.quantities[i]
        }
      }
      this.$bus.$on('logged', () => {
        this.isLogged = this.checkIfIsLogged()
      }),
 
      this.infoUser = JSON.parse(localStorage.getItem("infoUser"))
      console.log(this.infoUser);
    },
  
    methods: {
      card(){
  if( this.subInfo.currency === "XAF"){
  this.realTotal = (this.total + 3280)/650;
}else if( this.subInfo.currency === "€"){
  this.realTotal = this.total + 5;
}


localStorage.setItem("Market-Card-TotalPrice", this.realTotal)
 window.location.href="/myArticleCardPayment"

     
},
   
momo() {


if( this.subInfo.currency === "XAF"){
  this.realTotal = this.total + 3280;
}else if( this.subInfo.currency === "€"){
  this.realTotal = (this.total + 5)*650;
}

      

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
       
      var raw = JSON.stringify({
        "apikey": "105244761630ded20620d71.99923870",
        "site_id": "798029",
        "transaction_id": Math.floor(Math.random() * 100000000).toString(),
        "mode": "PRODUCTION",
        "amount": this.realTotal,
        "currency": "XAF",
        "alternative_currency": "USD",
        "description": "Buy The Articcles",
        "customer_id": this.infoUser.id,
        "customer_name": `${this.infoUser.firstName} ${this.infoUser.lastName}`,
        "customer_surname": this.infoUser.pseudo,
        "customer_email": this.infoUser.email,
        "customer_phone_number": this.infoUser.email,
        "customer_address": "Antananarivo",
        "customer_city": "Antananarivo",
        "customer_country": "CM",
        "customer_state": "CM",
        "customer_zip_code": "065100",
        "notify_url": "https://webhook.site/"+this.infoUser.id,
        "return_url": "http://localhost:8080/MarketPlace",
        "channels": "ALL",
        "metadata": "user1",
        "lang": "FR",
        "invoice_data": {
          "Donnee1": "",
          "Donnee2": "",
          "Donnee3": ""
        }
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://api-checkout.cinetpay.com/v2/payment", requestOptions)
        .then(response => response.text())
        .then(result => {
          let res = JSON.parse(result)
          console.log(res)
          window.open(res.data.payment_url,'_blank');
        })
        .catch(error => console.log('error', error));   

   
    },


  
      tchat(art, sender) {
        localStorage.setItem("smsRecieve", JSON.stringify(sender))
        localStorage.setItem("art", JSON.stringify(art))
        window.location.href = "/chatArticles"
      },
      view(item) {
        this.sortCart = "art"
        this.article = item
        var requestOptions5 = {
          method: 'GET',
          redirect: 'follow'
        };
  
        fetch("http://46.105.36.240:3000/article/paths/" + item.id, requestOptions5)
          .then(response => response.text())
          .then(result => {
            this.path = JSON.parse(result)
          })
          .catch(error => console.log('error', error));
      },
      checkIfIsLogged() {
        let token = localStorage.getItem('access-token')
        //localStorage.getItem('access-token')
        if (token) {
          return true
        } else {
          return false
        }
      },
      signup() {
        let newUser = {
          firstName: this.firstName,
          lastName: this.lastName,
          pseudo: this.pseudo,
          email: this.email,
          password: this.password
        }
        axios.post('http://46.105.36.240:3000/signup', newUser)
        {
          this.$router.push('/');
        }
      },
      
      onSubmit(event) {
        this.login = true;
        event.preventDefault();
        var axios = require("axios");
  
        var qs = require("qs");
        var data = qs.stringify({
          useremail: this.useremail,
          password: this.password,
        });
        var config = {
          method: "post",
          url: "http://46.105.36.240:3000/login",
          data: data,
        };
  
        axios(config)
          .then(function (response) {
            const temp = response.data;
            const refreshtoken = Object.values(temp)[0];
            const accesstoken = Object.values(temp)[1];
            localStorage.setItem("refresh-token", refreshtoken);
            localStorage.setItem("access-token", accesstoken);
  
            var config0 = {
              method: "get",
              url: "http://46.105.36.240:3000/profile",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("access-token"),
              },
            };
  
            axios(config0)
              .then((res) => {
                let a = res.data;
                if (a.pseudo == "DGA-EMPLOYEE" || a.pseudo == "Admin") {
                  window.location.href = "/employeeDashboard";
                } else {
                  console.log(a);
                  window.location.reload()
                }
              })
              .catch(function (error) {
                console.log(error);
              });
            this.$bus.$emit("logged", "User logged");
          })
          .catch(function (error) {
            if (error.response.status === 500) {
              Swal.fire(
                "Échec de connexion",
                "Veuillez vérifier vos informations d'identification!.",
                "error"
              );
            }
            if (error.response.status === 401) {
              Swal.fire("Login Failed!", "L'utilisateur n'existe pas!.", "error");
            }
            if (error.response.status === 404) {
              Swal.fire("Échec!", "Échec de connexion!", "error");
            }
            console.log(error);
          });
      },
      // onLoginArt(event) {
      //   this.loeding = true;
      //   event.preventDefault();
      //   var axios = require('axios');
  
  
      //   var qs = require('qs');
      //   var data = qs.stringify({
      //     'useremail': this.useremail,
      //     'password': this.password
      //   });
      //   var config = {
      //     method: 'post',
      //     url: 'http://46.105.36.240:3000/login',
      //     headers: {
      //       'Content-Type': 'application/x-www-form-urlencoded'
      //     },
      //     data: data
      //   };
  
      //   axios(config)
      //     .then(function (response) {
  
      //       window.location.reload();
      //       //const accesstoken = Object.values(temp)[0];
      //       // const naccesstoken = Object.values(accesstoken)[1.19];
      //       const temp = response.data;
      //       const refreshtoken = Object.values(temp)[0];
      //       const accesstoken = Object.values(temp)[1];
      //       console.log(JSON.stringify(accesstoken));
      //       console.log(JSON.stringify(refreshtoken));
  
      //       localStorage.setItem('refresh-token', refreshtoken);
      //       localStorage.setItem('access-token', accesstoken);
      //       this.$bus.$emit('logged', 'User logged');
  
  
      //     })
      //     .catch(function (error) {
      //       if (error.response.status === 500) {
      //         Swal.fire(
      //           'Login Failed!',
      //           'Please Check Your Credentials!.',
      //           'error'
      //         )
      //       } if (error.response.status === 401) {
      //         Swal.fire(
      //           'Login Failed!',
      //           'User Does Not Exist!.',
      //           'error'
      //         )
      //       } if (error.response.status === 404) {
      //         Swal.fire(
      //           'Failed!',
      //           'Something Went Wrong!.',
      //           'error'
      //         )
      //       }
      //       console.log(error);
      //     });
      // },
      sendMessage(item) {
        localStorage.setItem("art", JSON.stringify(item));
        window.location.href = "/chatArticles"
        localStorage.setItem("smsRecieve", JSON.stringify(item.user))
      },
      addToCard(item) {
        for (let i = 0; i < this.basket.length; i++) {
          if (item == this.basket[i]) {
            Swal.fire(
              '',
              'Cet article est déjà dans votre panier!',
              'warning'
            )
            return
          }
        }
        this.basket.push(item)
        this.quantities.push("1")
        this.total += item.price
        localStorage.setItem("basket", JSON.stringify([this.basket, this.quantities]))
  
      },
      viewBasket() {
        this.sortCart = "basket"
      },
      remov(idx) {
        this.basket.splice(idx, 1)
        this.quantities.splice(idx, 1)
        this.total = 0
        for (let i = 0; i < this.basket.length; i++) {
          this.total += this.basket[i].price * this.quantities[i]
        }
        localStorage.setItem("basket", JSON.stringify([this.basket, this.quantities]))
      },
      newTotal() {
        this.total = 0
        for (let i = 0; i < this.basket.length; i++) {
          this.total += this.basket[i].price * this.quantities[i]
        }
      }
    }
  };
  </script>
  <style lang="scss">

$popover-container-color: #fff;
$back-button-background: #999;
$back-button-color: #fff;
$hover-color: #5d9cec;
$method-button-color: #999;


.popover-container {

  .popover-header {
    flex: 1;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
  }

  .payment-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0;
    
    .payment-button {
      display: flex;
      align-items: center;
      position: relative;
      min-width: 40%;
      margin: 3px;
      padding: 15px 0 15px 0;
      border: 1px solid $method-button-color;
      border-radius: 5px;
      color: $method-button-color;
      font-weight: 300;
      
      &:last-child {
        margin: 10px 0;
      }
      
      &:hover {
        background-color: $hover-color;
        color: $popover-container-color;
        cursor: pointer;
      }
      
      &:hover i {
        color: $popover-container-color;
      }
      
      i {
        font-size: 30px;
        position: absolute;
        top: 60%;
        transform: translateY(-50%);
        color: $hover-color;
      }
      
      .payment-button-text {
        margin: 0 auto;
        font-size: 20px;
      }
    }
  }
}



  .imgSlide {
    height: 130px;
  }
  
  .art-title {
    font-size: 16px;
  }
  
  .art-0 {
    font-size: 15px;
  }
  
  .text-art {
    font-size: 15px;
  }
  
  .panier {
    position: fixed;
    bottom: 5px;
    left: 5px;
    z-index: 100;
  }
  
  .h6 {
    font-size: 18px;
    font-weight: 600;
  }
  
  .my-img0 {
    width: 100%;
    height: 100%;
  }
  
  .my-img {
    width: 100%;
    height: 300px;
  }
  
  
  .contact-item .icon {
    display: block;
    font-size: 48px;
    color: #5cc9df;
    text-shadow: -2px 2px 0 rgba(0, 0, 0, 0.1);
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
  }
  
  .contact-item .icon:hover {
    color: #5cc9df;
    -webkit-transform: scale(1.3) translateY(-10px);
    transform: scale(1.3) translateY(-10px);
  }
  
  .ma-cart {
    overflow: hidden;
  }
  
  .bl_form input {
    background: rgba(255, 255, 255, 0.10);
    box-shadow: 0 4px 0px rgba(0, 0, 0, 0.2);
    border: none;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
  }
  
  .lb_wrap .lb_label.top,
  .lb_wrap .lb_label.bottom {
    left: 66px !important;
  }
  
  .lb_wrap .lb_label.left {
    left: 0;
  }
  
  .lb_label {
    font-size: 18px;
    font-weight: 400;
    color: rgb(0, 0, 0);
  }
  
  .no-placeholder .lb_label {
    display: none;
  }
  
  .lb_label.active {
    color: #aaa;
  }
  
  #Highlighted-form .form-group label {
    display: none;
    font-size: 18px;
    font-weight: 100;
    text-transform: uppercase;
  }
  
  #Highlighted-form.no-placeholder .form-group label {
    display: block;
  }
  
  #Highlighted-form .controls {
    padding: 0;
    margin-top: 10px;
  }
  
  #Highlighted-form.no-placeholder .controls {
    margin-top: 0;
  }
  
  #Highlighted-form .form-control {
    display: inline;
    width: 400px;
    background: #fff;
    border: none;
    border-radius: 5px;
    outline: none;
    box-shadow: 0 4px 0 rgba(0, 0, 0, 0.05);
    height: 48px;
    font-size: 18px;
    color: rgb(0, 0, 0);
    font-weight: 400;
    padding-left: 54px;
  }
  
  #Highlighted-form .form-group.half-width {
    width: 40%;
    float: left;
  }
  
  #Highlighted-form .form-group {
    position: relative;
  }
  
  #Highlighted-form .form-group [class*=fa] {
    display: block;
    width: 45px;
    position: absolute;
    top: 0;
    left: 5px;
    margin-top: 25px;
    color: rgb(255, 115, 0);
    font-size: 24px;
    line-height: 52px;
    text-align: center;
    font-weight: 300;
    -webkit-transition: color .3s ease-out;
    transition: color .3s ease-out;
  }
  
  #Highlighted-form .form-group [class*=fa].active {
    color: #ccc;
  }
  
  #Highlighted-form.no-placeholder .form-group [class*=fa] {
    top: 10px;
  }
  
  #Highlighted-form textarea.form-control {
    height: 100px;
    width: 400px;
    min-width: 100%;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    padding-top: 14px;
    vertical-align: top;
  }
  
  #Highlighted-form .form-control:focus {
    outline: none;
    box-shadow: 0 4px 0 rgba(0, 0, 0, 0.05);
  }
  
  #Highlighted-form .error-message {
    padding: 5px 0;
    position: absolute;
    top: -35px;
    right: 0;
    font-size: 15px;
    line-height: 24px;
    font-weight: 400;
    color: #ff3345;
    z-index: 10;
  }
  
  #Highlighted-form.no-placeholder .error-message {
    top: 0;
  }
  body {
    background-color: rgba(177, 177, 177, 0.623);
      height: 100vh;
    }














    $primary-color: rgb(84, 157, 218);
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

.wrapper{
    
  left:14%;
   position:relative;
}
.profile-card{
    position:relative;
    background-color: #fff;
   box-shadow:0px 0px 18px rgb(255, 255, 255);
   width:1100px;
   text-align:center;
   margin-right:20px;
  margin-bottom:20px;
  
  &:hover,&.active{
      .profile-card-header{
    
        &:after{
          background-color:$primary-color;
           transition:all 0.6s ease;
      
      }
        img{
            border:5px solid $primary-color;
        }
    }
    .profile-card-footer{
       background-color:$primary-color;
       transition:all 0.6s ease;
    }
  }
  &-header{
    height:150px;
    position:relative;
    z-index:1;
    overflow:hidden;
    &:after{
      position:absolute;
      content:'';
      border-bottom-left-radius: 50% ;
      border-bottom-right-radius: 50% ;
      width:1100px;
      height:200px;
      z-index:-1;
      left:0;
      top:0;
      margin-top:-80px;
      
    }
    img{
      width:170px;
      height:150px;
      border-radius:50%;
      position:absolute;
      bottom:0;
      left:0;
      right:0;
      margin:auto;
      border:5px solid #fff;
      padding:2px;
      background-color:#fff;
      transition:all 0.5s ease;
    }
  }
  
  &-body{
   
    h3{
      color:#000;
      text-transform:capitalize;
      font-size:25px;
      margin-top:50px;
      margin-bottom:15px;
      font-weight:600;
    }
    p{
      color:#444;
      text-transform:capitalize;
    }
  }
  
  &-footer{
    height:50px;
    line-height:50px;
   
    ul{
      margin-left:0;
      li{
        display:inline-block;
        text-align:left;
        a{
          color:#fff;
          margin-left:15px;
        }
      }
    }
  } 
}
@media screen and (max-width:650px){
  .wrapper{
    flex-direction:column;
    
  }
}

.row:after {
    content: "";
    display: table;
    clear: both;
     opacity: 2;
  }

  pan
  {
    display:block;
    position:absolute;
    top:calc(50% - 2px);
    left:50%;
    width:50%;
    height:4px;
    background:transparent;
    transform-origin:left;
    animation:animate 2s linear infinite;
  }
  pan:before
  {
    content:'';
    position:absolute;
    width:16px;
    height:16px;
    border-radius:50%;
    background:#fff000;
    top:-6px;
    right:-8px;
    box-shadow:0 0 20px #fff000;
  }
  @keyframes animateC
  {
    0%
    {
      transform:rotate(0deg);
    }
    100%
    {
      transform:rotate(360deg);
    }
  }
  @keyframes animate
  {
    0%
    {
      transform:rotate(45deg);
    }
    100%
    {
      transform:rotate(405deg);
    }
  }
  </style>