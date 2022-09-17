<template>
  <div>
     
   <b-modal id="modal-multi-4" title="DGA Express" hide-footer>
   
    <form @submit="onSubmit">
        <div style="margin: 10px 0 10px 200px;" v-if="loding" class="loader"></div>
        <h2 class="heading">S'identifier</h2>
        <div class="form-fields">
          <input v-model="useremail" id="email" name="email" type="email" placeholder="E-mail" required>
        </div>
        <div class="form-fields">
          <input v-model="password"  id="password" name="password" type="password" placeholder="Mot de passe" required>
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
    <div v-if="loading" style="background:rgba(0,0,0,0.3);height:100vh;width:100vw;position:fixed;top:0;left:0;z-index: 100;"> 
         <div class="ring">Loading</div>
    </div>
  

    <div> 
      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Statistiques</h5>
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
                    <div class="card">
                      <div
                        class="card-body text-center bg-primary rounded-top"
                        style="height: 300px"
                      >
                        <div v-if="profileimgage === ''" class="mt-1 mb-1">
                          <img
                            src="@/assets/img/hotels/59710428.png"
                            class="rounded-circle img-fluid"
                            style="
                              border-radius: 60px;
                              image-resolution: 3000000dpi;
                              background-color: #000;
                              background-position: center;
                              background-size: cover;
                              background-repeat: no-repeat;
                              max-width: 100%;
                              max-height: 100%;
                              height: 190px;
                              width: 190px;
                            "
                          />
                        </div>
                        <div v-else>
                          <a
                            :href="pic"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              :src="pic"
                              style="
                                border-radius: 160px;
                                image-resolution: 3000000000dpi;
                                background-color: #000;
                                background-position: center;
                                background-size: cover;
                                background-repeat: no-repeat;
                                max-width: 100%;
                                max-height: 100%;
                                height: 220px;
                                width: 220px;
                              "
                            />
                          </a>
                        </div>
                        <!-- 
                 <i class="fa fa-camera" style="font-size:48px;color:red"></i>
                -->
                        <h5
                          class="mb-1 text-white"
                          style="text-transform: capitalize"
                        >
                          {{ firstName + " " + lastName }}
                        </h5>
                        <div style="padding:10px">
 <span v-if="stars>0" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>

                  <span v-if="stars>1" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>
                  
                   <span v-if="stars>2" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>

                  <span v-if="stars>3" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>

                   <span v-if="stars>4" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>
                        </div>
                       
                      </div>
                      <div class="card-body">
                        <div class="row text-center mt-1">
                          <div v-if="travellength > 0" class="col p-2">
                            <h4 class="mb-1 line-height-5">
                              {{ travellength }}
                            </h4>
                            <small class="mb-0 font-weight-bold">Voyage(s)</small>
                          </div>

                          <div v-else class="col p-2">
                            <h4 class="mb-1 line-height-5">0</h4>
                            <small class="mb-0 font-weight-bold">Voyage(s)</small>
                          </div>

                          <div v-if="revlength > 0" class="col p-2">
                            <h4 class="mb-1 line-height-5">{{ revlength }}</h4>
                            <small class="mb-0 font-weight-bold"
                              >Réservation(s)</small
                            >
                          </div>
                          <div v-else class="col p-2">
                            <h4 class="mb-1 line-height-5">0</h4>
                            <small class="mb-0 font-weight-bold"
                              >Réservation(s)</small
                            >
                          </div>
                          <div v-if="articlelength > 0" class="col p-2">
                            <h4 class="mb-1 line-height-5">{{ articlelength }}</h4>
                            <small class="mb-0 font-weight-bold"
                              >Article(s)</small
                            >
                          </div>
                          <div v-else class="col p-2">
                            <h4 class="mb-1 line-height-5">0</h4>
                            <small class="mb-0 font-weight-bold"
                              >Article(s)</small
                            >
                          </div>
                          <div class="col p-2">
                            <h4 class="mb-1 line-height-5">0</h4>
                            <small class="mb-0 font-weight-bold">Achat(s)</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-22" style="margin-top: -20px">
                      <h6 class="mt-2 mb-3">Témoignages</h6>
                      <table
                        class="table table-hover table-striped"
                        style="background-color: #74befb"
                      >
                        <tbody>
                          <div
                            style="
                              overflow: scroll;
                              height: 280px;
                              border-radius: 10px;
                            "
                          >
                            <div v-for="comment in comments" :key="comment.id">
                              <div class="row">
                                <div class="column1">
                                  <img v-if=" comment.booker.profileimgage !==''"
                                    :src="
                                      'http://46.105.36.240:3000/' +
                                      comment.booker.profileimgage
                                    "
                                    style="
                                      width: 50px;
                                      height: 50px;
                                      border-radius: 55px;
                                    "
                                  />
                                   <img v-else
                  src="@/assets/img/hotels/59710428.png"
                   style="
                                      width: 50px;
                                      height: 50px;
                                      border-radius: 55px;
                                    "
                />
                                </div>
                                <div class="column2">
                                  <p
                                    style="
                                      // layout
                                      position: relative;
                                      margin: 5px;
                                      background-color: #fff;
                                      display: flex;
                                      width: fit-content;
                                      max-width: 90%;
                                      // looks
                                      color: red;
                                      padding: 10px;
                                      font-size: 1em;
                                      border-radius: 0.5rem;
                                      box-shadow: 0 0.125rem 0.5rem
                                          rgba(0, 0, 0, 0.3),
                                        0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
                                    "
                                  >
                                    {{ comment.content }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <lognavVue />
    </div>

    <form
      action="#"
      id="header-search-people"
      class="form-area"
      novalidate="novalidate"
      autocomplete="off"
    >
      <div class="row">
        <div class="col-md-10">
          <div class="styled-input wide multi">
            <div class="last-name" id="input-last-name">
              <input
              placeholder=""
                style="text-transform: capitalize"
                v-model="userInput"
                type="text"
                name="ln"
                id="input"
                autocomplete="on"
                required
              />
              <label>Ville de départ</label>
              <svg
                class="icon--check"
                width="21px"
                height="17px"
                viewBox="0 0 21 17"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                >
                  <g
                    id="UI-Elements-Forms"
                    transform="translate(-255.000000, -746.000000)"
                    fill-rule="nonzero"
                    stroke="#81B44C"
                    stroke-width="3"
                  >
                    <polyline
                      id="Path-2"
                      points="257 754.064225 263.505943 760.733489 273.634603 748"
                    ></polyline>
                  </g>
                </g>
              </svg>
              <svg
                class="icon--error"
                width="15px"
                height="15px"
                viewBox="0 0 15 15"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                >
                  <g
                    id="UI-Elements-Forms"
                    transform="translate(-550.000000, -747.000000)"
                    fill-rule="nonzero"
                    stroke="#D0021B"
                    stroke-width="3"
                  >
                    <g id="Group" transform="translate(552.000000, 749.000000)">
                      <path
                        d="M0,11.1298982 L11.1298982,-5.68434189e-14"
                        id="Path-2-Copy"
                      ></path>
                      <path
                        d="M0,11.1298982 L11.1298982,-5.68434189e-14"
                        id="Path-2-Copy-2"
                        transform="translate(5.564949, 5.564949) scale(-1, 1) translate(-5.564949, -5.564949) "
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div class="city" id="input-city">
              <input
              placeholder=""
                style="text-transform: capitalize"
                v-model="userInput1"
                type="text"
                name="city"
                id="input1"
                autocomplete="off"
              />
              <label>Ville d'arrivée</label>
              <svg
                class="icon--check"
                width="21px"
                height="17px"
                viewBox="0 0 21 17"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                >
                  <g
                    id="UI-Elements-Forms"
                    transform="translate(-255.000000, -746.000000)"
                    fill-rule="nonzero"
                    stroke="#81B44C"
                    stroke-width="3"
                  >
                    <polyline
                      id="Path-2"
                      points="257 754.064225 263.505943 760.733489 273.634603 748"
                    ></polyline>
                  </g>
                </g>
              </svg>
              <svg
                class="icon--error"
                width="15px"
                height="15px"
                viewBox="0 0 15 15"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                >
                  <g
                    id="UI-Elements-Forms"
                    transform="translate(-550.000000, -747.000000)"
                    fill-rule="nonzero"
                    stroke="#D0021B"
                    stroke-width="3"
                  >
                    <g id="Group" transform="translate(552.000000, 749.000000)">
                      <path
                        d="M0,11.1298982 L11.1298982,-5.68434189e-14"
                        id="Path-2-Copy"
                      ></path>
                      <path
                        d="M0,11.1298982 L11.1298982,-5.68434189e-14"
                        id="Path-2-Copy-2"
                        transform="translate(5.564949, 5.564949) scale(-1, 1) translate(-5.564949, -5.564949) "
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div v-if="this.alert.display" class="alert">
      {{ alert.message }}
    </div>

    <div class="container">
      <div class="main-body">
        <!--<div class="row">
          <div class="column">
         
          </div>
          <div class="column">
            
          </div>
        </div>-->

        <!-- /Breadcrumb -->

        <div 
          class="
            row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-3
            gutters-sm
          "
        >
          <div
            class="col-md-1 mb-1"
            v-for="user in searchResult"
            :key="user.id"
          >
            <div
              class="card"
              style="border-radius: 15px;"
            >
              <div class="card-body text-center">
                       <button  v-if="isLogged === true" data-target="#exampleModal1" v-on:click="view(user.id, user.userDto.id)"
                    data-toggle="modal" style="border-radius: 160px;">
  <div v-if="user.userDto.profileimgage===''" class="mt-1 mb-1" >
              <img src="@/assets/img/hotels/59710428.png" 
                class="rounded-circle img-fluid" style="border-radius: 160px;
                    image-resolution: 3000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:190px; width: 190px;"  />
            </div>
            <div v-else class="mt-1 mb-1">
              <img :src="'http://46.105.36.240:3000/'+user.userDto.profileimgage"
                class="rounded-circle img-fluid" style="border-radius: 160px;
                    image-resolution: 300000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:190px; width: 190px;"/>
            </div>
            </button>
            <button  v-else v-b-modal.modal-multi-4 type="button"
                    data-toggle="modal" style="border-radius: 160px;">
  <div v-if="user.userDto.profileimgage===''" class="mt-1 mb-1" >
              <img src="@/assets/img/hotels/59710428.png" 
                class="rounded-circle img-fluid" style="border-radius: 160px;
                    image-resolution: 3000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:190px; width: 190px;"  />
            </div>
            <div v-else class="mt-1 mb-1">
              <img :src="'http://46.105.36.240:3000/'+user.userDto.profileimgage"
                class="rounded-circle img-fluid" style="border-radius: 160px;
                    image-resolution: 300000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:190px; width: 190px;"/>
            </div>
            </button>
                <a data-target="#exampleModal" data-toggle="modal">
                  <h4 style="text-transform: capitalize" class="mb-2">
                    {{ user.userDto.firstName + " " + user.userDto.lastName }}
                  </h4>
                </a>
                 <span v-if="user.userDto.stars>0" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>

                 <span v-if="user.userDto.stars>1" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>
                  
                   <span v-if="user.userDto.stars>2" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>

                  <span v-if="user.userDto.stars>3" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>

                   <span v-if="user.userDto.stars>4" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>
                <div
                  class="d-flex justify-content-between text-center mt-1 mb-1"
                >
                  <div>
                    <p class="mb-0 h6">De</p>
                    <p
                      style="
                      float:left;
                        font-size: 18px;
                        animation: fadeIn 5s; 
                        text-transform: capitalize;
                      "
                      class="text-muted mb-0"
                    >
                      <i class="fas fa-map-marker-alt mr-2 text-primary"></i
                      >{{ user.departuretown.slice(0, 10) }}...
                    </p>
                    <p
                      style="float:left;font-size: 16px; animation: fadeIn 5s"
                      class="text-muted mb-0" 
                    >
                      <i class="fas fa-clock mr-2 text-primary"></i
                      >{{ user.arrivaldate }}
                    </p>
                  </div>

                  <div>
                    <p class="mb-0 h6">À</p>
                    <p
                      style="
                      float:left;
                        font-size: 18px;
                        animation: fadeIn 5s;
                        text-transform: capitalize;
                      "
                      class="text-muted mb-0"
                    >
                      <i class="fas fa-map-marker-alt mr-2 text-primary"></i
                      >{{ user.destinationtown.slice(0, 10) }}...
                    </p>
                    <p
                      style="float:left;font-size: 16px; animation: fadeIn 5s"
                      class="text-muted mb-0"
                    >
                      <i class="fas fa-clock mr-2 text-primary"></i
                      >{{ user.departuredate }}
                    </p>
                  </div>
                </div>

                <div>
                  <i class="fas fa-weight-hanging mr-2 text-primary"></i>
                  <span
                    >{{ user.quantity }}Kg -------> {{ user.price
                    }}<b style="color: rgb(63, 167, 247);">{{ subInfo.currency}}</b>/Kg</span
                  >

                  <span class="mx-2"></span>
                </div>

                <div>
                  <!-- document -->
                  <span v-if="user.document">
                    <i class="fas fa-file-invoice mr-2 text-primary"></i>
                    <span
                      >Document(s)------>{{ subInfo.documentPrice
                      }}<b style="color: rgb(63, 167, 247)">{{
                        subInfo.currency
                      }}</b></span
                    >
                  </span>
                  <!--    <span v-else>
              <p>No Documents</p>
            </span> -->
                </div>

                <div style="margin-left: -20px">
                  <!-- pc -->
                  <span class="mx-2"></span>
                  <span v-if="user.computer">
                    <i class="fas fa-laptop mr-2 text-primary"></i>
                    <span
                      >Ordinateur------->{{ subInfo.computerPrice
                      }}<b style="color: rgb(63, 167, 247)">{{
                        subInfo.currency
                      }}</b></span
                    >
                  </span>
                  <!--   <span v-else>
              <p>No Computer</p>
            </span> -->
                </div>

                <div style="margin-top: 8px" class="mb-2 pb-2">
                  <button
                    v-if="isLogged === true"
                    type="button"
                    v-on:click="view(user.id)"
                    data-target="#exampleModal"
                    data-toggle="modal"
                    style="height: 35px; float: left"
                    class="btn btn-outline-primary btn-floating"
                  >
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </button>

                  <button
                    v-else
                    type="button"
                    v-b-modal.modal-multi-4
                    style="height: 35px; float: left"
                    class="btn btn-outline-primary btn-floating"
                  >
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </button>

                  <button
                    v-if="isLogged === false"
                    v-b-modal.modal-multi-4
                    type="button"
                    style="height: 38px; float: right"
                    class="btn btn-primary btn-rounded btn-sm btn-floating"
                  >
                  Reserver
                  </button>

                  <router-link
                    v-if="
                      isLogged === true &&
                      user.userDto.id !== userIdAnnouncement
                    "
                    style="height: 38px; float: right"
                    type="submit"
                    :to="{ name: 'Reservation', params: { id: user.id } }"
                    class="btn btn-primary btn-rounded btn-sm btn-floating"
                    >Reserver</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="errors" > 
                   <pageNotFoundVue/>
                   </div> 
                   <div v-if="errors1"><pageNotFoundNoDataVue/></div>
      </div>
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
                            <form
                              id="Highlighted-form"
                              class="col-sm-6 col-sm-offset-3"
                              action="contact.php"
                              method="post"
                              novalidate=""
                            >
                            <div class="form-group">
                              <div class="controls">
                                <h6><i
                                  class="fa fa-map-marker"
                                  style="margin-bottom: -30"
                                ></i>Ville de départ</h6>
                                <textarea
                                  v-model="departuretown"
                                  id="contact-name"
                                  name="contactName"
                                  style= "height:70px;"
                                  class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  "
                                  type="text"
                                  readonly
                                ></textarea>
                                
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="controls">
                                <h6>Ville d'arrivée</h6>
                                <textarea
                                  v-model="destinationtown"
                                  id="contact-name"
                                  name="contactName"
                                   style= "height:70px;"
                                  class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  "
                                  type="text"
                                  readonly
                                ></textarea>
                               <i class="fa fa-map-marker"></i>
                              </div>
                            </div>
                              <!-- End email input -->
                              <div class="form-group">
                                <div class="controls">
                                  <h6>Restriction</h6>
                                  <textarea
                                    v-model="restriction"
                                    id="contact-message"
                                    name="comments"
                                    placeholder="Your message"
                                    class="
                                      form-control
                                      requiredField
                                      Highlighted-label
                                    "
                                    rows="6"
                                    readonly
                                  ></textarea>
                                  <!-- <i class="fa fa-comment"></i> -->
                                </div>
                              </div>
                              <!-- End textarea -->
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
  </div>
</template>
<script>
import SocialLogin from "@/components/SocialLogin";
import pageNotFoundNoDataVue from "./pageNotFoundNoData.vue";
import pageNotFoundVue from "./pageNotFound.vue";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "allTravels",
  data() {
    return {
      login:false,
        stars:'',
      userInput: "",
      userInput1: "",
      searchResult: [],
      users: [],
      alert: {
        display: false,
        message: "",
      },
      loading: true,
      loding: false,
      userIdAnnouncement: localStorage.getItem("userId"),
      isLogged: this.checkIfIsLogged(),
      id: "",
      users1: [],
      subInfo: [],
      modalShow: false,
      pseudo: "",
      email: "",
      password: "",
      useremail: "",
      departuretown: "",
      destinationtown: "",
      quantity: "",
      computer: "",
      document: "",
      restriction: "",
      price: "",
      departuredate: "",
      arrivaldate: "",
      firstName: "",
      lastName: "",
      profileimgage: "",
      pic: "",
      artlength: "",
      revlength:'',
      travellength:'',
      comments: [],
      errors:false,
      errors1:false,
      articlelength:'',
    };
  },
  components: {
    pageNotFoundVue,
    pageNotFoundNoDataVue,
    SocialLogin
  },
mounted() {
 var input = document.getElementById( 'input');
 var input1 = document.getElementById('input1'); 
 let autocomplete = new window.google.maps.places.Autocomplete(input);
 let autocomplete1 = new window.google.maps.places.Autocomplete(input1);
 return autocomplete,autocomplete1;
},
  async created() {

    var requestOptions1 = { method: "GET", redirect: "follow" };

    fetch("http://46.105.36.240:3000/sub/informations/view", requestOptions1)
      .then((response) => response.text())
      .then((result) => {
        if (JSON.parse(result).length !== 0) {
          this.subInfo = JSON.parse(result)[0];
        }
      })
      .catch((error) => console.log("error", error));

    this.$bus.$on("logged", () => {
      this.isLogged = this.checkIfIsLogged();
    }),
      await fetch("http://46.105.36.240:3000/announcements")
        .then((response) => response.json())
        .then((data) => {
              if (data=="") {
                this.loading = false;
              this.errors=true
          } else {
             this.loading = false;
             this.users = data.reverse();
               this.searchResult = this.users;
              
          }
        
          
        
          
          // this.idAnn= data[2].userDto.id
          //console.log( data[2].userDto.id);
        })
        .catch((err) => {
            this.loading = false;
            this.errors1=true
          console.error(err);
            
            
        });
  },
  watch: {
    userInput(word) {
        let wd = word.toLowerCase();
      if (wd.length > 0) {
        this.searchResult = this.users.filter((element) =>
          element.departuretown.toLowerCase().includes(wd)
        );
        if (this.searchResult.length === 0) {
          this.alert.message = "Ville introuvable.";
          this.alert.display = true;
          console.log("Introuvable!");
        } else {
          this.alert.message = "";
          this.alert.display = false;
        }
      } else {
        this.searchResult = this.users;
      }
    },
    userInput1(word) {
         let wd = word.toLowerCase();
      if (wd.length > 0) {
        this.searchResult = this.users.filter((element) =>
          element.destinationtown.toLowerCase().includes(wd)
        );
        if (this.searchResult.length === 0) {
          this.alert.message = "Ville introuvable.";
          this.alert.display = true;
          console.log("Introuvable!");
        } else {
          this.alert.message = "";
          this.alert.display = false;
        }
      } else {
        this.searchResult = this.users;
      }
    },
  },

  methods: {
    doSomething() {
      alert("Hello!");
    },

    view(id, id2) {


      var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('access-token'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://46.105.36.240:3000/user/" +id2 + "/articles/", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.articlelength = JSON.parse(result).length;
                console.log(result);
            })
            .catch(error => {
              
                console.log('error', error)
            });


      var axios1 = require("axios");
      var config1 = {
        method: "get",
        url: "http://46.105.36.240:3000/users/" + id2 + "/announcements",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
      };
      axios1(config1)
        .then((res) => {
          this.travellength = res.data.length;
          console.log(res.data.length);
        })
        .catch(function (error) {
          console.log(error);
        });

      var axios3 = require("axios");
      var config3 = {
        method: "get",
        url: "http://46.105.36.240:3000/user/" + id2 + "/reservations",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
      };

      axios3(config3)
        .then((res) => {
          this.revlength = res.data.length;
          console.log(res.data.length);
        })
        .catch(function (error) {
          console.log(error);
        });

      var axioscomment = require("axios");
      var configcomment = {
        method: "get",
        url: "http://46.105.36.240:3000/user/comments/" + id,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
      };

      axioscomment(configcomment)
        .then((res) => {
          this.comments = res.data;
        })
        .catch(function (error) {
          this.loading = false;
          Swal.fire({
            icon: "warning",
            title: "Oups... Aucune réservation trouvée!",
          });
          console.log(error);
        });

      var axios = require("axios");
      var config = {
        method: "get",
        url: "http://46.105.36.240:3000/announcement/" + id + "/users",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
      };

      axios(config)
        .then((res) => {
          this.profileimgage = res.data.userDto.profileimgage;
          this.stars = res.data.userDto.stars;
          this.pic = "http://46.105.36.240:3000/" + this.profileimgage;
          this.firstName = res.data.userDto.firstName;
          this.lastName = res.data.userDto.lastName;
          this.pseudo = res.data.userDto.pseudo;
          this.departuredate = res.data.departuredate;
          this.arrivaldate = res.data.arrivaldate;
          this.departuretown = res.data.departuretown;
          this.destinationtown = res.data.destinationtown;
          this.restriction = res.data.restriction;
          this.quantity = res.data.quantity;
          this.price = res.data.price;
          this.document = res.data.document;
          this.computer = res.data.computer;
          this.annlength = res.data.length;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    checkIfIsLogged() {
      let token = localStorage.getItem("access-token");
      //localStorage.getItem('access-token')
      if (token) {
        return true;
      } else {
        return false;
      }
    },

    signup() {
      let newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        pseudo: this.pseudo,
        email: this.email,
        password: this.password,
      };
      axios.post("http://46.105.36.240:3000/signup", newUser);
      {
        this.$router.push("/");
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
  },
};
</script>
<style  lang="scss">
    
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
  color: rgb(255, 255, 255);
  border-radius: 5px;
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
  margin-top: 25px;
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

.alert {
  position: absolute;
  bottom: 300px;
  margin-left: 400px;
  padding: 10px 14px 10px 14px;
  background-color: #f2f2f2;
  border-radius: 14px;
  color: red;
  transition: 0.1s;
  font-size: 18px;
}

.box {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -8px 0 20px 100px;
  input {
    padding: 7px 5px;
    width: 300px;
    border-radius: 10px;
    border: none;
    border-bottom: solid 1px black;
    transition: 0.1s linear;
    &:focus {
      font-size: 20px;
      outline: none;
    }
  }
}

form {
}

/* Search Form */

.styled-input {
  float: left;
  background: rgb(246, 251, 255);
  border: 2px solid #efefef;
  -webkit-box-shadow: inset 0 -1px 4px 0 rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 -1px 4px 0 rgba(0, 0, 0, 0.2);
  width: 70%;
  border-radius: 10px;
  position: relative;
  margin-top: -220px;
  margin-left: 240px;
  max-height: 55px;
}

.styled-input.multi {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 12px;
}

.styled-input label {
  color: #f78400;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  position: absolute;
  margin-top: 7px;
  top: 0;
  left: 0;
  -webkit-transition: all 0.25s cubic-bezier(0.2, 0, 0.03, 1);
  -o-transition: all 0.25s cubic-bezier(0.2, 0, 0.03, 1);
  transition: all 0.25s cubic-bezier(0.2, 0, 0.03, 1);
  pointer-events: none;
}

.styled-input.multi label {
  padding: 1px 0 0;
}

.styled-input.active {
  border: 1px solid #d0e5ba;
  -webkit-box-shadow: inset 0 -2px 4px 0 #d5eebb;
  box-shadow: inset 0 -2px 4px 0 #d5eebb;
}

.styled-input .icon--check,
.styled-input .icon--error,
.styled-input .chevron-down {
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 2%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 0;
}

.styled-input .icon--check,
.styled-input .icon--error {
  display: none;
}

.styled-input .icon--check {
  right: 0%;
}

.styled-input input.success ~ .icon--check,
.styled-input input.error ~ .icon--error {
  display: inline-block;
}

.styled-input label.error,
.styled-input input:focus ~ label.error,
.styled-input input#fn:valid ~ label.error,
.styled-input input#ln:valid ~ label.error {
  font-size: 15px;
  text-transform: none;
  letter-spacing: normal;
  color: #ff523d;
  top: 53px;
  left: -3px;
}

.styled-input.multi.error {
  margin-bottom: 20px;
}

.styled-input.multi > div {
  position: relative;
  width: 100%;
  border-right: 3px solid #ccc;
}

.styled-input.multi > div:nth-last-of-type(1) {
  border-right: 0;
}

.styled-input.multi > div input,
.styled-input.multi > div label {
  padding-left: 12px;
}

.styled-input.multi > div input {
  padding-top: 20px;
}

.styled-input input:focus,
.styled-input textarea:focus,
.styled-input select:focus {
  outline: none;
}

.styled-input input,
.styled-input textarea,
.styled-input select {
  color: #070707;
  border: 0;
  width: 90%;
  font-size: 18px;
  padding-top: 20px;
  background: transparent;
}

.styled-input select {
  width: 100%;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  z-index: 1;
  left: 11px;
}

/* Focus Label */

.styled-input input:focus ~ label,
.styled-input input#fn:valid ~ label,
.styled-input input#ln:valid ~ label,
.styled-input input#city[filled="true"]:valid ~ label,
.styled-input #select-state label {
  font-size: 14px;
  letter-spacing: 1.56px;
  color: #00aeff;
  top: -12.8px;
  -webkit-transition: all 0.125s cubic-bezier(0.2, 0, 0.03, 1);
  -o-transition: all 0.125s cubic-bezier(0.2, 0, 0.03, 1);
  transition: all 0.125s cubic-bezier(0.2, 0, 0.03, 1);
}

@media (min-width: 991px) {
  .styled-input.multi {
    height: 70px;
  }
}

@media (min-width: 768px) and (max-width: 990px) {
  .styled-input.multi {
    height: 60px;
    padding: 8px 0;
  }
  .styled-input.multi > div input {
    padding-top: 18px;
  }
  .styled-input.multi label {
    padding: 7px 0 0;
  }
  .styled-input input#fn:valid ~ label,
  .styled-input input#ln:valid ~ label,
  .styled-input input#city[filled="true"]:valid ~ label,
  .styled-input.multi input:focus ~ label,
  .styled-input #select-state label {
    top: -9px;
  }
  .styled-input.multi.error {
    margin-bottom: 30px;
  }
  .styled-input label.error,
  .styled-input input:focus ~ label.error,
  .styled-input input#fn:valid ~ label.error,
  .styled-input input#ln:valid ~ label.error {
    font-size: 13px;
    top: 53px;
  }
  .search-area .form-area button.serach-btn {
    height: 60px;
    padding: 0;
  }
}

@media (max-width: 767.98px) {
  .examples [class^="col-"] {
    padding: 0;
  }

  .styled-input.multi > div {
    background-color: #fff;
    margin-bottom: 10px;
    display: block;
    border: 1px solid #efefef;
    border-radius: 3px;
    -webkit-box-shadow: inset 0 -1px 4px 0 rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 -1px 4px 0 rgba(0, 0, 0, 0.2);
    width: 50%;
    padding: 16px 16px 8px 11.2px;
  }

  .styled-input.multi {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    border: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    background: transparent;
    margin-bottom: 0;
  }

  .styled-input.multi > div label {
    padding: 12px 0 0 12px;
  }
  .styled-input.multi > div input:valid ~ label,
  .styled-input.multi > div input:focus ~ label,
  .styled-input.multi #select-state > label {
    padding-top: 15px;
  }

  .styled-input.multi > div input {
    padding-left: 0;
    padding-top: 2px;
    position: relative;
    z-index: 2;
    width: 100%;
  }
  .styled-input select {
    left: 0;
    padding-top: 2px;
  }

  .styled-input.multi.error {
    margin-bottom: 0;
  }

  .styled-input.multi > div.error {
    margin-bottom: 30px;
  }

  .styled-input.multi > div.error label.error {
    padding-top: 0;
  }
}

/* Button */

.no-pad-left-10 {
  padding-left: 5px;
}

@media (max-width: 991px) and (min-width: 768px) {
  .no-pad-left-10 {
    padding-left: 0px;
    margin-left: -5px;
    width: calc(16.66666667% + 5px);
  }
}

@media (max-width: 767px) {
  .no-pad-left-10 {
    padding-left: 15px;
    margin-left: 0;
  }
}

.form-area button.serach-btn {
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border: none;
  font-size: 14px;
  background: #ff9837;
  text-align: center;
  color: white;
  font-weight: 700;
  letter-spacing: 0.8px;
  width: 100%;
  height: 52px;
  margin-left: 56px;
  -o-transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
  -webkit-transition: all 0.25s ease-out;
  -moz-transition: all 0.25s ease-out;
}

.form-area button.serach-btn:hover {
  background: #ff8800;
  -webkit-box-shadow: -2px -2px 4px -4px rgba(0, 0, 0, 0.02),
    0 3px 9px 0 rgba(238, 44, 44, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.14);
  box-shadow: -2px -2px 4px -4px rgba(0, 0, 0, 0.02),
    0 3px 9px 0 rgba(216, 22, 22, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.14);
}

.form-area button.serach-btn:focus {
  outline: none;
}

@media only screen and (max-width: 991px) {
  .form-area button.serach-btn {
    font-size: 20px;
    height: 60px;
    padding: 0;
  }
}

@media only screen and (max-width: 767px) {
  .form-area button.serach-btn {
    font-size: 22px;
    padding: 7px 20px;
    width: 100%;
    height: 50px;
    border-radius: 6px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    margin-top: -12px;
    margin-bottom: 20px;
  }
}
.column1 {
    padding:20px 0 10px 20px;
}
.column2 {
     padding:14px 10px 0 6px;
}


/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
   opacity: 2;
}
.ring
{
   
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:150px;
  height:150px;
  background:transparent;
  border:3px solid #3c3c3c;
  border-radius:50%;
  text-align:center;
  line-height:150px;
  font-size:20px;
  color:#fff000;
  letter-spacing:4px;
  text-transform:uppercase;
  text-shadow:0 0 10px #fff000;
  box-shadow:0 0 20px rgba(0,0,0,.5);
}
.ring:before
{
  content:'';
  position:absolute;
  top:-3px;
  left:-3px;
  width:100%;
  height:100%;
  border:3px solid transparent;
  border-top:3px solid #fff000;
  border-right:3px solid #fff000;
  border-radius:50%;
  animation:animateC 2s linear infinite;
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