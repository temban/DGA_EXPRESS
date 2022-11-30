<template>
  <div style="">
    <div style="margin-left: 60px">
      <lognavVue />
    </div>
    <usersidebarVue />
    <div class="col-md-12">
      <div class="banner">
        <div class="messages">
          <div id="topic-1" class="message-topic"><label style="position:relative; margin-top:10px;">NB</label></div>
          <div id="message-1" class="message-content">
            <span>DGA Express recommande FORTEMENT à tous les vendeurs d’expédier les articles
               aux clients en recommandé et de s’assurer d’avoir un numéro de suivi pour le tracking en temps réel.</span>
          </div>
          
        </div>
      </div>
      <hr>
    </div>
    <div>
      <div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Info</h5>

                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="">
                  <div>
                    <div
                      class="container bootstrap snippets bootdey"
                      style="background: #d9dedf"
                    >
                      <section id="contact" class="gray-bg padding-top-bottom">
                        <div class="container bootstrap snippets bootdey">
                          <div class="row">
                            <div
                              class="im"
                              style="
                                width: 100%;
                                display: flex;
                                flex-wrap: wrap;
                              "
                            >
                              <div
                                v-for="(im, id) in path"
                                v-bind:key="id"
                                style="
                                  max-width: 100%;
                                  margin: 8px;
                                  max-height: 100%;
                                  height: 190px;
                                  width: 200px;
                                "
                              >
                                <button
                                v-if="mainImage !== im"
                                  v-on:click="
                                    deleteArtImage(article.id, im, id)
                                  "
                                  style="
                                    height: 20px;
                                    width: 20px;
                                    border-radius: 50%;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    font-size: 13px;
                                    margin-top: 20px;
                                    margin-left: 180px;

                                    position: absolute;
                                  "
                                  type="button"
                                  class="btn btn-sm btn-danger mr-1"
                                >
                                  <i
                                    class="fas fa-close"
                                    style="font-size: 15px"
                                  ></i>
                                </button>
                                <img
                                  :src="`https://dga-express.com:8443/article/image?file=${im}`"
                                  style="
                                    border-radius: 10px;

                                    background-position: center;
                                    background-size: cover;
                                    background-repeat: no-repeat;
                                    max-width: 100%;
                                    margin: 8px;
                                    max-height: 100%;
                                    height: 190px;
                                    width: 200px;
                                  "
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <form
                              id="Highlighted-form"
                              class="col-sm-6 col-sm-offset-3"
                              novalidate=""
                            >
                              <!-- End email input -->
                              <div class="form-group">
                                <div class="controls">
                                  <h6>Nom de l'article </h6>
                                  <input
                                    v-model="article.name"
                                    id="contact-mail"
                                    name="email"
                                    class="
                                      form-control
                                      requiredField
                                      Highlighted-label
                                    "
                                    type="email"
                                    readonly
                                  />
                                  <i class="fa fa-user"></i>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="controls">
                                  <h6>Catégorie</h6>
                                  <input
                                    v-model="article.cathegory.name"
                                    id="contact-mail"
                                    name="email"
                                    class="
                                      form-control
                                      requiredField
                                      Highlighted-label
                                    "
                                    type="email"
                                    readonly
                                  />
                                  <i class="fa fa-list-alt"></i>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="controls">
                                  <h6>Adresse</h6>
                                  <input
                                    v-model="article.location"
                                    id="contact-mail"
                                    name="email"
                                    class="
                                      form-control
                                      requiredField
                                      Highlighted-label
                                    "
                                    type="email"
                                    readonly
                                  />
                                  <i class="fa fa-map-marker"></i>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="controls">
                                  <h6>Quantité</h6>
                                  <input
                                    v-model="article.quantity"
                                    id="contact-mail"
                                    name="email"
                                    class="
                                      form-control
                                      requiredField
                                      Highlighted-label
                                    "
                                    type="email"
                                    readonly
                                  />
                                  <i class="fa fa-sort-amount-up"></i>
                                </div>
                              </div>

                              <div class="form-group">
                                <div class="controls">
                                  <h6>Prix</h6>
                                  <input
                                    v-model="article.price"
                                    id="contact-mail"
                                    name="email"
                                    class="
                                      form-control
                                      requiredField
                                      Highlighted-label
                                    "
                                    type="email"
                                    readonly
                                  />
                                  <i class="fa fa-money"></i>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="controls">
                                  <h6>Method de Paiement</h6>
                                  <input
                                    v-model="article.paymentMethod"
                                    id="contact-mail"
                                    name="email"
                                    class="
                                      form-control
                                      requiredField
                                      Highlighted-label
                                    "
                                    type="email"
                                    readonly
                                  />
                                  <i v-if="article.paymentMethod.length >15" class="fa fa-credit-card"></i>
                                  <i v-else class="fa fa-mobile" style="font-size:35px"></i>
                                </div>
                              </div>

                              <div class="form-group">
                                <div class="controls">
                                  <h6>La description</h6>
                                  <textarea
                                    v-model="article.description"
                                    id="contact-message"
                                    name="comments"
                                    placeholder="Your message"
                                    class="
                                      form-control
                                      requiredField
                                      Highlighted-label
                                    "
                                    rows="3"
                                    readonly
                                  ></textarea>
                                  <i class="fa fa-comment"></i>
                                </div>
                              </div>
                            </form>
                            <!-- End Highlighted-form -->
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
    </div>
    <div class="container">
      <b-container
        style="margin-left: 32px; margin-bottom: 30px; background-color: white"
      >
        <h3 class="mt-2 mb-3 float-left text-primary">Mes Articles</h3>
        <button
          @click="createArt()"
          style="display: flex; align-items: center; justify-content: left"
          class="create"
        >
          <i
            class="fa fa-plus"
            style="
              font-size: 20px;
              color: white;
              margin-top: 20px;
              margin-left: -22px;
            "
          ></i>
          <span style="font-size: 18x; margin-left: -10px">Publier un Article</span>
        </button>
        <table class="table table-striped">
            
          <thead>
            <tr>
              <th scope="col">Article</th>
              <th scope="col">Catégorie</th>
              <th scope="col">quantité</th>
              <th scope="col">prix</th>
              <th scope="col">Adresse</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <th colspan="8"><div v-if="error" > 
                   <tableEmptyVue/>
                   </div> </th>    
          <tbody style="text-transform: capitalize">
            <tr v-for="item in articles" v-bind:key="item.id">
              <td>{{ item.name }}</td>
              <td>{{ item.cathegory.name }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.location.slice(0, 14) }}...</td>
              <td>
                <form>
                  <!-- <button  v-on:click="view(user.id)" data-target="#exampleModal" data-toggle="modal" style="height:45px; width:40px;  margin-right:5px;" type="button" class="btn btn-sm btn-info mr-1" disabled><i class="fa fa-eye" style="font-size:20px"></i></button>-->

                  <button
                    @click="view(item)"
                    data-target="#exampleModal"
                    data-toggle="modal"
                    style="height: 45px; width: 40px; margin-right: 5px"
                    type="button"
                    class="btn btn-sm btn-info mr-1"
                  >
                    <i class="fa fa-eye" style="font-size: 20px"></i>
                  </button>
                  <router-link
                    style="height: 45px; width: 40px"
                    class="btn btn-sm btn-info mr-1"
                    :to="{ name: 'EditArticle', params: { id: item.id } }"
                    ><i class="fa fa-pencil" style="font-size: 20px"></i
                  ></router-link>
                  <button
                    @click="deleteArticle(item.id)"
                    style="height: 45px; width: 40px"
                    type="button"
                    class="btn btn-sm btn-danger"
                  >
                    <i class="fa fa-trash" style="font-size: 20px"></i>
                  </button>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </b-container>
      <!-- Fim tabela -->
    </div>
    <div style="position:relative; margin-bottom:-60px; left:0; right:0"> <footerVue /></div>
  </div>
</template>

<script>
import tableEmptyVue from "../components/tableEmpty.vue";
import Swal from "sweetalert2";
import footerVue from "@/components/footer.vue";
import lognavVue from "../components/lognav.vue";
import usersidebarVue from "../components/usersidebar.vue";
export default {
  name: "MyAnnoucements",
  data() {
    return {
        error: false,
      loading: true,
      users: [],
      users1: [],
      id: "",
      articles: [],
      path: [],
      mainImage: "",
      article: {
        paymentMethod:"",
        name: "",
        description: "",
        price: 0,
        quantity: 0,
        status: "",
        date: "",
        location: "",
        cathegory: {
          name: "",
        },
      },
    };
  },
  components: {
    lognavVue,
    usersidebarVue,
    footerVue,
    tableEmptyVue
  },
  // Ao criar o componente, é feito uma requisição GET para a API do backend
  async created() {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("access-token")
    );

    var requestOptions = { 
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://dga-express.com:8443/user/" +
        JSON.parse(localStorage.getItem("infoUser")).id +
        "/articles/",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
       
        if (JSON.parse(result).length==0) {
              this.error=true 
          } else {
            this.articles = JSON.parse(result);
          }
        console.log('blaise' + result);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        console.log("error", error);
        this.error=true;
        localStorage.clear()
        window.location.href = "/"
      });
  },
  methods: {
    deleteArtImage(Artid, ImgName, id) {
      let name = "";
      let count = 0;
      for (let i = 0; i < ImgName.length; i++) {
        if (count == 7) {
          name = name + ImgName[i];
        }
        if (ImgName[i] == "/") {
          count = count + 1;
        }
      }
      this.path.splice(id, 1);
      var axios = require("axios");

      var config = {
        method: "GET",
        url:
          "https://dga-express.com:8443/delete/article/" +
          Artid +
          "/image/" +
          name,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    deleteArticle(id) {
      console.log(id);
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          width: 7000,
          confirmButton: "btn btn-danger ml-3",
          cancelButton: "btn btn-success ",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Êtes-vous sûr?",
          text: "Vous ne pourrez pas revenir en arrière!",
          icon: "warning",
          confirmButtonText: "Oui, supprimer!",
          showCancelButton: true,
          cancelButtonText: "Non, Annuler!", 
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append(
              "Authorization",
              "Bearer " + localStorage.getItem("access-token")
            );

            var requestOptions = {
              method: "DELETE",
              headers: myHeaders,
              redirect: "follow",
            };

            fetch(
              "https://dga-express.com:8443/delete/article/" + id,
              requestOptions
            )
              .then((response) => response.text())
              .then((result) => {
                console.log(result);
                swalWithBootstrapButtons.fire(
                  "Supprimé!",
              "Votre article a été supprimée.",
              "success"
                );
                window.location.reload();
              })
              .catch((error) => console.log("error", error));
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Annulée",
              "Opération annulée :)",
              "error"
            );
          }
        });
    },
    lockedAnn() {
      Swal.fire({
        icon: "error",
        title: "Oops... Traveled Has Been Reserverd!",
        text: "Contact DGA Client Service for more Info!",
      });
    },

    createArt() {
      window.location.href = "/createarticle";
    },

    view(item) {
      this.article = item;

      var requestOptions5 = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        "https://dga-express.com:8443/article/paths/" + item.id,
        requestOptions5
      )
        .then((response) => response.text())
        .then((result) => {
          this.path = JSON.parse(result);
          this.mainImage = item.mainImage;
        })
        .catch((error) => console.log("error", error));
    },

    noUpdate() {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    },

    deleteUser(id) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          width: 7000,
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append(
              "Authorization",
              "Bearer " + localStorage.getItem("access-token")
            );

            var requestOptions = {
              method: "DELETE",
              headers: myHeaders,
              redirect: "follow",
            };

            fetch(
              "https://dga-express.com:8443/delete/article/" + id,
              requestOptions
            )
              .then((response) => response.text())
              .then((result) => {
                console.log(result);
                swalWithBootstrapButtons.fire(
                  "Deleted!",
                  "Your file has been deleted.",
                  "success"
                );
                window.location.reload();
              })
              .catch((error) => console.log("error", error));
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "Your imaginary file is safe :)",
              "error"
            );
          }
        });
    },
  },
};
</script>

<style lang="scss" >
.my-img0 {
  width: 100%;
  height: 100%;
}

.my-img {
  width: 100%;
  height: 300px;
}

.create {
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  will-change: box-shadow, transform;
  background: radial-gradient(100% 100% at 100% 0%, #f0b07c 0%, #ff9100 100%);
  box-shadow: 0px 2px 4px rgb(247, 152, 43),
    0px 7px 13px -3px rgba(241, 188, 12, 0.993),
    inset 0px -3px 0px rgba(241, 103, 61, 0.795);
  padding: 0 32px;
  border-radius: 6px;
  color: #fff;
  height: 58px;
  width: 24%;
  float: right;
  margin: 10px 0 10px 0;
  font-size: 18px;
  text-shadow: 0 1px 0 rgba(241, 173, 94, 0.932);
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}

.create:hover {
  box-shadow: 0px 4px 8px rgb(255, 145, 1),
    0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #f37018;
  transform: translateY(-2px);
}

.create:active {
  box-shadow: inset 0px 3px 7px #ff7504;
  transform: translateY(2px);
}

.h6 {
  font-size: 18px;
  font-weight: 600;
}

.contact-item .icon {
  display: block;
  font-size: 48px;
  color: #5cc9df;
  text-shadow: -2px 2px 0 rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.contact-item .icon:hover {
  color: #5cc9df;
  -webkit-transform: scale(1.3) translateY(-10px);
  transform: scale(1.3) translateY(-10px);
}

.bl_form {
}

.bl_form input {
  background: rgba(255, 255, 255, 0.1);
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

#Highlighted-form .form-group [class*="fa"] {
  display: block;
  width: 45px;
  position: absolute;
  top: 0;
  left: 5px;
  margin-top: 35px;
  color: rgb(255, 115, 0);
  font-size: 24px;
  line-height: 52px;
  text-align: center;
  font-weight: 300;
  -webkit-transition: color 0.3s ease-out;
  transition: color 0.3s ease-out;
}

#Highlighted-form .form-group [class*="fa"].active {
  color: #ccc;
}

#Highlighted-form.no-placeholder .form-group [class*="fa"] {
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

.banner {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: stretch;
  height: 60px;
  
}
.banner > div {
  padding: 0.82rem;
  height: 60px;
}

.messages {
  flex: 1 1 auto;
  background-color: #e9e9e9;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
}
.messages div {
  /*animation: move .5s ease-in-out 0.5s 4 alternate;*/
  overflow:hidden;
  border: 1px solid transparent;
  font-family: Century Gothic, sans-serif;
  height: 60px;
}
.message-topic {
  font-weight: bold;
  font-size: 1.25rem;
  margin-right: 1rem;
 
}
.message-content {
  font-size: 1.22rem;
}
#topic-1 {
  animation: showup-1 20s infinite;
  border-right: 1px solid #666;
}
#message-1 {
  height:0px;
  animation: reveal-1 20s infinite;
}
#message-1 span {
  position: relative;
  animation: slidein-1 20s infinite;
}

@keyframes showup-1 {
    0% {opacity:0;border-right-color: transparent;}
    20% {opacity:1;}
    35% {border-right-color: #AAA;}
    80% {opacity:1;}
    100% {opacity:0;}
}
@keyframes reveal-1 {
    0% {opacity:0;width:0px;height:0;}
    20% {opacity:1;width:0px;height:30px;}
    30% {width:1300px; height: 60px;}
    80% {opacity:1;}
    100% {opacity:0;width:1300px;height:60px; }
}
@keyframes slidein-1 {
    0% { margin-left:-600px; }
    20% { margin-left:-600px; }
    30% { margin-left:0px; }
    100% { margin-left:0px; }
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