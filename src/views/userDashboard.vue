<template>
  <div>
     <div v-if="loading" style="background:rgba(0,0,0,0.3);height:100vh;width:100vw;position:fixed;top:0;left:0;z-index: 100;"> 
         <div class="ring">Loading</div>
    </div>
    <div
      v-if="loding"
      style="
        background: rgba(0, 0, 0, 0.3);
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
      "
    >
      <div class="ring">Loading</div>
    </div>
    <div>
      <b-modal id="modal-profile" profile title="Update Account">
        <div>
          <b-card bg-variant="light">
            <b-form-group
              label-cols-lg="3"
              label-size="lg"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
              <b-form-group
                label="First Name:"
                label-for="nested-street"
                label-cols-sm="3"
                label-align-sm="right"
              >
                <b-form-input
                  v-model="firstName"
                  id="nested-street"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="Last Name:"
                label-for="nested-city"
                label-cols-sm="3"
                label-align-sm="right"
              >
                <b-form-input
                  v-model="lastName"
                  id="nested-city"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="Pseudo:"
                label-for="nested-state"
                label-cols-sm="3"
                label-align-sm="right"
              >
                <b-form-input v-model="pseudo" id="nested-state"></b-form-input>
              </b-form-group>

              <b-form-group
                label="Country:"
                label-for="Email"
                label-cols-sm="3"
                label-align-sm="right"
              >
                <b-form-input
                  v-model="email"
                  id="nested-country"
                ></b-form-input>
              </b-form-group>
              <button
                @click="updateprofile"
                class="createaccount"
                name="commit"
                type="submit"
              ></button>
            </b-form-group>
          </b-card>
        </div>
      </b-modal>
    </div>

    <div>
      <b-modal id="modal-password" password title="Update Account">
        <div>
          <b-card bg-variant="light">
            <b-form-group
              label-cols-lg="3"
              label-size="lg"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
              <b-form-group
                label="Old Password:"
                label-for="nested-city"
                label-cols-sm="3"
                label-align-sm="right"
              >
                <b-form-input
                  v-model="oldpassword"
                  id="nested-city"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="New Password:"
                label-for="nested-state"
                label-cols-sm="3"
                label-align-sm="right"
              >
                <b-form-input
                  v-model="newpassword"
                  id="nested-state"
                ></b-form-input>
              </b-form-group>

              <button
                @click="updatepassword"
                class="createaccount"
                name="commit"
                type="submit"
              ></button>
            </b-form-group>
          </b-card>
        </div>
      </b-modal>
    </div>

    <div style="margin-left: 60px">
      <lognavVue />
    </div>
    <usersidebarVue />

    <b-container >
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="profile-card-4 z-depth-3">
              <div class="card">
                <div style="position: absolute; right: 0; margin-bottom: 160px">
                  <b-dropdown
                    size="lg"
                    variant="link"
                    toggle-class="text-decoration-none"
                    no-caret
                    style=""
                  >
                    <template #button-content>
                      <img
                        style="
                          border-radius: 70px;
                          height: 25px;
                          width: 25px;
                          margin-top: 0px;
                          right: 0;
                        "
                        src="@/assets/img/hotels/dot.jpg"
                      />
                    </template>
                    <b-dropdown-item v-on:click="deleteUser()"
                      >Supprimer votre compte</b-dropdown-item
                    >
                  </b-dropdown>
                </div>

                <div
                  class="card-body text-center bg-primary rounded-top"
                  style="height: 350px; "
                >
                  <div v-if="profileimgage === ''" class="mt-2 mb-1">
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
                        height: 200px;
                        width: 200px;
                      "
                    />
                  </div>
                  
                  <div v-else>
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
                          height: 200px;
                          width: 200px;
                        "
                      />
                    </a>
                  </div>
                  <!-- 
                 <i class="fa fa-camera" style="font-size:48px;color:red"></i>
                -->
                  <!-- <label style="
                  font-size:25px; position:absolute;z-index: 2; top: 150px;
            bottom: 0;
            left: 170px;
            right: 0; background-color: #fff; height: 60px; width: 60px; border-radius: 160px; display: flex; justify-content: center;">
            
                    <i
                      class="fa fa-camera"
                      style="font-size: 30px; color: orangered; top: 30px; margin: 0 0 30px 0;"
                      
                    ></i>

                    <input
                      type="file"
                      @change="handleFileUpload($event)"
                      ref="file"
                      accept="image/gif, 
                        image/jpeg, image/png"
                      hidden
                    />
                  </label> -->
                  <label>
                    <i
                      class="fa fa-camera"
                      style="font-size: 30px; color: orangered"
                    ></i>

                    <input
                      type="file"
                      @change="handleFileUpload($event)"
                      ref="file"
                      accept="image/gif, 
                        image/jpeg, image/png"
                      hidden
                    />
                  </label>
                  <header></header>
                  <h5
                    class="mb-1 text-white"
                    style="text-transform: capitalize"
                  >
                    {{ firstName + " " + lastName }}
                  </h5>
                  <div style="padding: 0 40px 0 40px">
                    <span v-if="stars > 0" class="fa fa-star checked"></span>
                    <span v-else class="fa fa-star"></span>

                    <span v-if="stars > 1" class="fa fa-star checked"></span>
                    <span v-else class="fa fa-star"></span>

                    <span v-if="stars > 2" class="fa fa-star checked"></span>
                    <span v-else class="fa fa-star"></span>

                    <span v-if="stars > 3" class="fa fa-star checked"></span>
                    <span v-else class="fa fa-star"></span>

                    <span v-if="stars > 4" class="fa fa-star checked"></span>
                    <span v-else class="fa fa-star"></span>
                  </div>
                </div>
                <div class="card-body">
                  <ul class="list-group shadow-none">
                    <li class="list-group-item">
                      <div class="list-icon">
                        <i class="fa fa-envelope"></i>
                      </div>
                      <div class="list-details">
                        <span>{{ email }}</span>
                      </div>
                    </li>
                  </ul>
                  <div class="row text-center mt-4">
                    <div v-if="revlength > 0" class="col p-2">
                      <h4 class="mb-1 line-height-5">{{ revlength }}</h4>
                      <small class="mb-0 font-weight-bold">Réservations</small>
                    </div>
                    <div v-else class="col p-2">
                      <h4 class="mb-1 line-height-5">0</h4>
                      <small class="mb-0 font-weight-bold">Réservations</small>
                    </div>
                    <div v-if="articlelength > 0" class="col p-2">
                      <h4 class="mb-1 line-height-5">{{ annlength }}</h4>
                      <small class="mb-0 font-weight-bold">Voyages</small>
                    </div>
                    <div v-else class="col p-2">
                      <h4 class="mb-1 line-height-5">0</h4>
                      <small class="mb-0 font-weight-bold">Voyages</small>
                    </div>
                     <div v-if="articlelength > 0" class="col p-2">
                      <h4 class="mb-1 line-height-5">{{ articlelength }}</h4>
                      <small class="mb-0 font-weight-bold">Articles</small>
                    </div>
                    <div v-else class="col p-2">
                      <h4 class="mb-1 line-height-5">0</h4>
                      <small class="mb-0 font-weight-bold">Articles</small>
                    </div>
                    <div class="col p-2">
                      <h4 class="mb-1 line-height-5">{{ stars }}</h4>
                      <small class="mb-0 font-weight-bold">Achats</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div>
              <div class="card z-depth-3" style="height: 360px">
                <div class="card-body">
                  <ul class="nav nav-pills nav-pills-primary nav-justified">
                    <li class="nav-item">
                      <a
                        href="javascript:void();"
                        data-target="#profile"
                        data-toggle="pill"
                        class="nav-link active show"
                        ><i class="icon-user"></i>
                        <span class="hidden-xs">Profil</span></a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="javascript:void();"
                        data-target="#messages"
                        data-toggle="pill"
                        class="nav-link"
                        ><i class="icon-envelope-open"></i>
                        <span class="hidden-xs">Mettre à jour le profil</span></a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="javascript:void();"
                        data-target="#edit"
                        data-toggle="pill"
                        class="nav-link"
                        ><i class="icon-note"></i>
                        <span class="hidden-xs">Changer mot de passe</span></a
                      >
                    </li>
                  </ul>
                  <div class="tab-content p-3">
                    <div class="tab-pane active show" id="profile">
                      <div class="row">
                        <div class="col-md-6"></div>
                        <div class="col-md-6">
                          <h5 style="margin-left: 2px">
                           
                          </h5>
                          <div class="dl" style="position: relative; margin-left: -60px; ">
                            <form id="searchthis" style="display: inline; ">
                              <input
                              style="width:75%; "   
                                id="namanyay-search-box"
                                size="40"
                                type="text"
                                placeholder="Entrez le code de transaction"
                                v-model="code"
                              />
                              <input
                                id="namanyay-search-btn"
                                value="Send"
                                type="button"
                                @click="transactionCode"
                              />
                            </form>
                          </div>
                        </div>
                        <div class="col-md-12" style="margin-top: -20px">
                          <h6 class="mt-2 mb-3">Mes Témoignages</h6>
                          <table
                            class="table table-hover table-striped"
                            style="
                              background-color: #74befb;
                              border-radius: 20px;
                            "
                          >
                            <tbody>
                              <div style="overflow: scroll; height: 165px; padding-left:30px">
                                <div></div>
                                <div class="chat-message-left pb-4"></div>
                            
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
                      <!--/row-->
                    </div>
                    <div class="tab-pane" id="messages">
                      <form>
                        <div class="form-group row">
                          <label
                            class="col-lg-3 col-form-label form-control-label"
                            >Prénom</label
                          >
                          <div class="col-lg-9">
                            <input
                              v-model="firstName"
                              class="form-control"
                              type="text"
                              required
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label
                            class="col-lg-3 col-form-label form-control-label"
                            >Nom de famille</label
                          >
                          <div class="col-lg-9">
                            <input
                              v-model="lastName"
                              class="form-control"
                              type="text"
                              required
                            />
                          </div>
                        </div>

                        <div class="form-group row">
                          <label
                            class="col-lg-3 col-form-label form-control-label"
                            >Numéro portal</label
                          >
                          <div class="col-lg-9">
                            <input
                              v-model="phone"
                              class="form-control"
                              type="text"
                              required
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label
                            class="col-lg-3 col-form-label form-control-label"
                            >E-mail</label
                          >
                          <div class="col-lg-9">
                            <input
                              v-model="email"
                              class="form-control"
                              type="email"
                              required
                            />
                          </div>
                        </div>

                        <div class="form-group row">
                          <label
                            class="col-lg-3 col-form-label form-control-label"
                          ></label>
                          <div class="col-lg-9">
                            <input
                              @click="updateprofile"
                              type="button"
                              class="btn btn-primary"
                              value="Envoyer"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="tab-pane" id="edit">
                      <form>
                        <div class="form-group row">
                          <label
                            class="col-lg-3 col-form-label form-control-label"
                            >Ancien mot de passe</label
                          >
                          <div class="col-lg-9">
                            <input
                              v-model="oldpassword"
                              class="form-control"
                              type="text"
                              required
                            />
                          </div>
                        </div>

                        <div class="form-group row">
                          <label
                            class="col-lg-3 col-form-label form-control-label"
                            >Nouveau mot de passe</label
                          >
                          <div class="col-lg-9">
                            <input
                              v-model="newpassword"
                              class="form-control"
                              type="password"
                              required
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label
                            class="col-lg-3 col-form-label form-control-label"
                            >Confirmer nouveau mot de passe</label
                          >
                          <div class="col-lg-9">
                            <input
                              class="form-control"
                              type="password"
                              required
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label
                            class="col-lg-3 col-form-label form-control-label"
                          ></label>
                          <div class="col-lg-9" style="position:relative;margin-top: -15px;">
                            <input
                              @click="updatepassword"
                              type="button"
                              class="btn btn-primary"
                              value="Envoyer"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card z-depth-3" style="height: 200px; padding: 20px">
                <div class="tab-pane" id="edit">
                  <form>
                    <div class="form-group row">
                      <label class="col-lg-3 col-form-label form-control-label"
                        >
Suggestion à DGA</label
                      >
                      <div class="col-lg-12">
                        <textarea
                          onkeyup="if(this.value.length > 0) 
                          document.getElementById('suggestion_button').disabled = false; 
                          else document.getElementById('suggestion_button').disabled = true;"
                          class="form-control"
                          type="password"
                          required
                          v-model="suggestion"
                        ></textarea>
                      </div>
                    </div>
                    <div>
                      <label
                        class="col-lg-1 col-form-label form-control-label"
                      ></label>
                      <div class="col-lg-7" style="float: right">
                        <input
                          id="suggestion_button"
                          @click="suggestionBox"
                          type="button"
                          class="btn btn"
                          style="float: right; background-color: orangered"
                          value="Send"
                          disabled
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="card z-depth-3" style="padding: 20px">
              <div class="tab-pane" id="edit">
                <!--
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text" id="">First and last name</span>
  </div>
  <input type="text" class="form-control">
  <input type="text" class="form-control">
</div>-->

                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Voyageur</th>
                      <th scope="col">La source</th>
                      <th scope="col">Destination</th>
                      <th scope="col">Doc</th>
                      <th scope="col">Qté Réservée</th>
                      <th scope="col">ordinateur</th>
                      <th scope="col">Suivi</th>

                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody
                    v-for="(user, idx) in track"
                    :key="user.id"
                    style="text-transform: capitalize"
                  >
                    <tr>
                      <a v-if="user.announcementDto.profileimgage !== ''">
                        <img
                          :src="
                            'http://46.105.36.240:3000/' +
                            user.announcementDto.userDto.profileimgage
                          "
                          style="width: 60px; height: 60px; border-radius: 30px"
                        />
                      </a>
                      <a v-else href="/userDashboard">
                        <img
                          src="@/assets/img/hotels/59710428.png"
                          style="width: 60px; height: 60px; border-radius: 30px"
                        />
                      </a>
                      <td>{{ user.announcementDto.departuretown.slice(0, 14) }}...</td>
                      <td>{{ user.announcementDto.destinationtown.slice(0, 14) }}...</td>
                      <td v-if="user.documents">
                        <i
                          class="fa fa-check"
                          style="font-size: 25px; color: lime"
                        ></i>
                      </td>
                      <td v-else>
                        <i
                          class="fa fa-remove"
                          style="font-size: 25px; color: red"
                        ></i>
                      </td>
                      <td>{{ user.quantitykilo }}</td>
                      <td v-if="user.computer">
                        <i
                          class="fa fa-check"
                          style="font-size: 25px; color: lime"
                        ></i>
                      </td>
                      <td v-else>
                        <i
                          class="fa fa-remove"
                          style="font-size: 25px; color: red"
                        ></i>
                      </td>
                      <td v-if="user.track === 'complete'">
                        <span class="badge badge-success font-weight-100"
                          >achevée</span
                        >
                      </td>

                      <td>
                        <div>
                          <a v-on:click="like(user.announcementDto.id)">
                            <i
                              class="fa fa-thumbs-up"
                              style="font-size: 30px; color: orange"
                            ></i>
                          </a>

                          <a @click="clickMe(user)">
                            <i
                              class="fa fa-comment"
                              style="font-size: 30px; color: skyblue"
                            ></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <th colspan="7">
                      <div name="popup" :id="user.id" class="hide">
                        <div class="card z-depth-3" style="padding: 20px">
                          <div class="tab-pane" id="edit">
                            <form>
                              <div class="form-group row">
                                <label
                                  class="
                                    col-lg-3 col-form-label
                                    form-control-label
                                  "
                                  >Commentaire</label
                                >
                                <div class="col-lg-12">
                                  <textarea
                                    class="form-control"
                                    type="text"
                                    required
                                    v-model="comment[idx]"
                                  ></textarea>
                                </div>
                              </div>
                              <div class="form-group row">
                                <label
                                  class="
                                    col-lg-3 col-form-label
                                    form-control-label
                                  "
                                ></label>
                                <div class="col-lg-9">
                                  <input
                                    id="user"
                                    @click="commentBox(user, idx)"
                                    type="submit"
                                    class="btn btn"
                                    style="background-color: orangered"
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </th>
                  </tbody>
                </table>

                <div class="ext-box">
                  <div class="int-box"></div>
                </div>
                <!--
                <b-table
                  :items="items"
                  :fields="fields"
                  striped
                  responsive="lg"
                > 
               
                  <template >
                  

                  </template>
                  <template #row-details="row">
                    <b-card>
                      <label class="col-lg-10 col-form-label form-control-label"
                        >Comment</label
                      >
                      <div class="col-lg-12">
                     
                      </div>
                      
                      <b-button
                        size="sm"
                        @click="row.toggleDetails"
                        hidden="hidden"
                        >Hide</b-button
                      >
                    </b-card>
                  </template>
                </b-table>-->

                <div class="form-group row">
                  <label
                    class="col-lg-3 col-form-label form-control-label"
                  ></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>
    <footerVue />
  </div>
</template>
<script>
import footerVue from "@/components/footer.vue";
import Swal from "sweetalert2";
import lognavVue from "../components/lognav.vue";
import usersidebarVue from "../components/usersidebar.vue";
export default {
  name: "useprofile",
  components: {
    lognavVue,
    usersidebarVue,
    footerVue,
  }, 
  data() {
    return {
        loding:false, 
        profileimgage:'',
        articlelength:'',
      loading: false,
      myAnn: [],
      comments: [],
      users: [],
      file: "",
      suggestion: "",
      revlength: "",
      annlength: "",
      firstName: "",
      artlength: "",
      email: "",
      id: "",
      lastName: "",
      pseudo: "",
      password: "",
      oldpassword: "",
      newpassword: "",
      fileInput: null,
      icon: "",
      pic: "",
      pic1: "",
      reservations: [],
      track: [],
      comment: [],
      stars: "",
      code: "",
      fields: [
        "traveller",
        "source_town",
        "destination_town",
        "departure_date",
        "Arrival_date",
        "state",
        "like",
        "comment",
      ],
      items: [],
      userId: localStorage.getItem("userId"),
    };
  },

  methods: {

    deleteUser() {
      this.loading = true;
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: true,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            var axios = require("axios");
            var config = {
              method: "delete",
              url:
                "http://46.105.36.240:3000/delete/user/" +
                localStorage.getItem("userId") +
                "/users",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("access-token"),
              },
            };

            axios(config)
              .then(function (response) {
                localStorage.clear();
                console.log(JSON.stringify(response.data));

                window.location.href = "/";
              })
              .catch(function (error) {
                 window.location.reload();
                console.log(error);
              });

            swalWithBootstrapButtons.fire(
              "Deleted!",
              "Your account has been deleted.",
              "success"
            );
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire("Cancelled", "Your  :)", "error");
          }
        });
    },

    clickMe(user) {
      var text = document.getElementById(user.id);
      text.classList.toggle("hide");
      text.classList.toggle("show");
    },

    like(id) {
      var axios = require("axios");
      var config = {
        method: "get",
        url: "http://46.105.36.240:3000/like/announcement/" + id,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
      };

      axios(config)
        .then(function (response) {
          Swal.fire({
            icon: "success",
            title: " Like Successful!",
            showConfirmButton: false,
            timer: 1000,
          });

          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    commentBox(user, idx) {
      this.loading = true;
      console.log(this.comment[idx], user);
      var axios = require("axios");
      var data = JSON.stringify({
        content: this.comment[idx],
        status: "ENABLED",
        booker: JSON.parse(localStorage.getItem("infoUser")),
        announcement: user.announcementDto,
      });

      var config = {
        method: "post",
        url: "http://46.105.36.240:3000/user/comment/announcement",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          Swal.fire({
            icon: "thumbs-up.jpg",
            title: " Succesfully!",
            showConfirmButton: false,
            timer: 1000,
          });
          console.log(response.data);
        })
        .catch(function (error) {
          Swal.fire("Failed!", "Something Went Wrong!.", "error");
       window.location.reload();
          console.log(error);
        });
    },

    suggestionBox() {
      this.loading = true;
      var axios = require("axios");
      var data = JSON.stringify({
        content: this.suggestion,
        user: {
          id: localStorage.getItem("userId"),
          firstName: localStorage.getItem("firstName"),
          lastName: localStorage.getItem("lastName"),
          pseudo: localStorage.getItem("pseudo"),
          email: localStorage.getItem("email"),
          profileimgage: localStorage.getItem("profileImage"),
          phone: localStorage.getItem("tel"),
          roleDtos: [
            {
              id: 2,
              name: "ROLE_CLIENT",
            },
          ],
          status: "ENABLED",
        },
      });

      var config = {
        method: "post",
        url: "http://46.105.36.240:3000/suggest",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          Swal.fire({
            icon: "success",
            title: " Suggestion Sent!",
            showConfirmButton: false,
            timer: 1000,
          });
          window.location.reload();
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          Swal.fire("Failed!", "Something Went Wrong!.", "error");
       window.location.reload();
          console.log(error);
        });
    },

    transactionCode() {
         this.loading = true;
      var axios = require("axios");

      var config = {
        method: "get",
        url: "http://46.105.36.240:3000/user/transaction/" + this.code,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
      };

      axios(config)
        .then(function (response) {
          Swal.fire({
            icon: "success",
            title: " Succesfully!",
            showConfirmButton: false,
            timer: 1000,
          });
          console.log(JSON.stringify(response.data));
          window.location.reload();
        })
        .catch(function (error) {
          if (error.response.status === 403) {
            Swal.fire("Resquest Failed!", "Invalid or Already Sent", "error");
       window.location.reload();
          }
          if (error.response.status === 404) {
            Swal.fire("Failed!", "Something Went Wrong!.", "error");
       window.location.reload();
          }
          console.log(error);
        });
    },

    handleFileUpload(e) {
         this.loading = true;
      this.icon = e.target.files[0];

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
       window.location.reload();
          console.log(error);
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
             this.loading = true;
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
       window.location.reload();
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
             this.loading = true;
          var axios = require("axios");
          var data = JSON.stringify({
            profileimgage: this.pic1,
            firstName: this.firstName,
            lastName: this.lastName,
            phone: this.phone,
            email: this.email,
            roleDtos: [
              {
                id: 2,
                name: "ROLE_CLIENT",
              },
            ],
            status: "ENABLED",
            stars: 4,
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
       window.location.reload();
            })
            .catch(function (error) {
              console.log(error);
              Swal.fire("Failed!", "Something Went Wrong!.", "error");
       window.location.reload();
            });
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    },
  },

   mounted() {  
    var userID = Math.floor((Math.random( ) * 1000) +1);
console.log(userID);
let notif = (title, body) => {
     const options = {
       body: body,
       icon: `https://upload.wikimedia.org/wikipedia/fr/thumb/b/b6/Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg/langfr-280px-Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg.png`,
       badge: `https://upload.wikimedia.org/wikipedia/fr/thumb/b/b6/Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg/langfr-280px-Logo_de_la_Direction_g%C3%A9n%C3%A9rale_de_l%27Armement.svg.png`
     };
     const n = new Notification(title, options)
     console.log(n);
   }
   let url = 'http://192.168.16.117:4000/subcribe?userId=130fca97-6797-4b63-ba46-4d9290a595f2';
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
  var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('access-token'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://46.105.36.240:3000/user/" + JSON.parse(localStorage.getItem('infoUser')).id + "/articles/", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.articlelength = JSON.parse(result).length;
                console.log(result);
            })
            .catch(error => {
              
                console.log('error', error)
            });


    var axios = require("axios");

    var myAnn = {
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

    axios(myAnn)
      .then((res) => {
        this.myAnn = res.data;
        for (let i = 0; i < this.myAnn.length; i++) {
          var axioscomment = require("axios");
          var configcomment = {
            method: "get", 
            url: "http://46.105.36.240:3000/user/comments/" + this.myAnn[i].id,
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("access-token"),
            },
          }; 

          axioscomment(configcomment)
            .then((res) => {
                if(res.data.length !==0){
                    for (let u = 0; u < res.data.length; u++) {
                        console.log(res.data[u]);
                      this.comments.push(res.data[u])
                    }
                    console.log(this.comments);
                }
            })
            .catch(function (error) {
              this.loading = false;
              Swal.fire({
                icon: "warning",
                title: "Oops...No Reservation found!",
              });
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    var configs = {
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

    axios(configs)
      .then((res) => {
        this.users = res.data;
        this.loading = false;
        console.log(res.data);
        for (let p = 0; p < this.users.length; p++) {
          if (
            this.users[p].track === "complete" &&
            this.users[p].userDto.id === localStorage.getItem("userId")
          ) {
            this.track.push(this.users[p]);
            this.comment.push("");
          }
        }
      })
      .catch(function (error) {
        this.loading = false;
        Swal.fire({
          icon: "warning",
          title: "Oops...No Reservation found!",
        });
        console.log(error);
      });

    var axios3 = require("axios");

    //var config0 = {
    //  method: "get",
    //  url:
    //    "http://46.105.36.240:3000/user/" +
    //    localStorage.getItem("userId") +
    //    "/reservations",
    //  headers: {
    //    "Content-Type": "application/json",
    //    Authorization: "Bearer " + localStorage.getItem("access-token"),
    //  },
    //};

    //axios(config0)
    //  .then((res) => {
    //    this.reservations = res.data;
    //    for(let i=0; i<this.reservations.length; i++ ){

    //            let b=this.reservations[i].announcementDto
    //            let a={
    //              isActive: false,
    //              traveller: b.userDto.firstName,
    //              source_town:b.departuretown,
    //              destination_town: b.destinationtown,
    //              departure_date: b.departuredate,
    //              Arrival_date:b.arrivaldate,
    //            }
    //            this.items.push(a)

    //    }
    //    this.loading = false;
    //  })
    //  .catch(function (error) {
    //    this.loading = false;
    //    Swal.fire({
    //      icon: "warning",
    //      title: "Oops...No Reservation found!",
    //    });
    //    console.log(error);
    //  });

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
        console.log(res.data.length);
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
        console.log(res.data.length);
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
        this.pseudo = res.data.phone;
        this.email = res.data.email;
        this.stars = res.data.stars;
        this.profileimgage = res.data.profileimgage;
        this.pic = "http://46.105.36.240:3000/" + this.profileimgage;
        this.role_dtos_id = Object.values(res.data.roleDtos)[0];
        this.role_dtos_name = Object.values(res.data.roleDtos)[1];

        console.log(JSON.stringify(res.data.id));
        console.log(res.data.stars);
        console.log(JSON.stringify(res.data.lastName));
        console.log(JSON.stringify(res.data.pseudo));
        console.log(JSON.stringify(res.data.email));

        //localStorage.setItem('refresh-token', refreshtoken);
        //localStorage.setItem('access-token', accesstoken);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
<style lang="scss">
/* User Cards */
.user-box {
  width: 110px;
  margin: auto;
  margin-bottom: 20px;
}

.user-box img {
  width: 100%;
  border-radius: 50%;
  padding: 3px;
  background: #fff;
  -webkit-box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
  -ms-box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
}

.profile-card-2 .card {
  position: relative;
}

.profile-card-2 .card .card-body {
  z-index: 1;
}

.profile-card-2 .card::before {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  height: 112px;
  background-color: #e6e6e6;
}

.profile-card-2 .card.profile-primary::before {
  background-color: #008cff;
}
.profile-card-2 .card.profile-success::before {
  background-color: #15ca20;
}
.profile-card-2 .card.profile-danger::before {
  background-color: #fd3550;
}
.profile-card-2 .card.profile-warning::before {
  background-color: #ff9700;
}
.profile-card-2 .user-box {
  margin-top: 30px;
}

.profile-card-3 .user-fullimage {
  position: relative;
}

.profile-card-3 .user-fullimage .details {
  position: absolute;
  bottom: 0;
  left: 0px;
  width: 100%;
}

.profile-card-4 .user-box {
  width: 110px;
  margin: auto;
  margin-bottom: 10px;
  margin-top: 15px;
}

.profile-card-4 .list-icon {
  display: table-cell;
  font-size: 30px;
  padding-right: 20px;
  vertical-align: middle;
  color: #223035;
}

.profile-card-4 .list-details {
  display: table-cell;
  vertical-align: middle;
  font-weight: 600;
  color: #223035;
  font-size: 15px;
  line-height: 15px;
}

.profile-card-4 .list-details small {
  display: table-cell;
  vertical-align: middle;
  font-size: 12px;
  font-weight: 400;
  color: #808080;
}

/*Nav Tabs & Pills */
.nav-tabs .nav-link {
  color: #223035;
  font-size: 12px;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 600;
  margin: 2px;
  margin-bottom: 0;
  padding: 12px 20px;
  text-transform: uppercase;
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.nav-tabs .nav-link:hover {
  border: 1px solid transparent;
}
.nav-tabs .nav-link i {
  margin-right: 2px;
  font-weight: 600;
}

.top-icon.nav-tabs .nav-link i {
  margin: 0px;
  font-weight: 500;
  display: block;
  font-size: 20px;
  padding: 5px 0;
}

.nav-tabs-primary.nav-tabs {
  border-bottom: 1px solid #008cff;
}

.nav-tabs-primary .nav-link.active,
.nav-tabs-primary .nav-item.show > .nav-link {
  color: #008cff;
  background-color: #fff;
  border-color: #008cff #008cff #fff;
  border-top: 3px solid #008cff;
}

.nav-tabs-success.nav-tabs {
  border-bottom: 1px solid #15ca20;
}

.nav-tabs-success .nav-link.active,
.nav-tabs-success .nav-item.show > .nav-link {
  color: #15ca20;
  background-color: #fff;
  border-color: #15ca20 #15ca20 #fff;
  border-top: 3px solid #15ca20;
}

.nav-tabs-info.nav-tabs {
  border-bottom: 1px solid #0dceec;
}

.nav-tabs-info .nav-link.active,
.nav-tabs-info .nav-item.show > .nav-link {
  color: #0dceec;
  background-color: #fff;
  border-color: #0dceec #0dceec #fff;
  border-top: 3px solid #0dceec;
}

.nav-tabs-danger.nav-tabs {
  border-bottom: 1px solid #fd3550;
}

.nav-tabs-danger .nav-link.active,
.nav-tabs-danger .nav-item.show > .nav-link {
  color: #fd3550;
  background-color: #fff;
  border-color: #fd3550 #fd3550 #fff;
  border-top: 3px solid #fd3550;
}

.nav-tabs-warning.nav-tabs {
  border-bottom: 1px solid #ff9700;
}

.nav-tabs-warning .nav-link.active,
.nav-tabs-warning .nav-item.show > .nav-link {
  color: #ff9700;
  background-color: #fff;
  border-color: #ff9700 #ff9700 #fff;
  border-top: 3px solid #ff9700;
}

.nav-tabs-dark.nav-tabs {
  border-bottom: 1px solid #223035;
}

.nav-tabs-dark .nav-link.active,
.nav-tabs-dark .nav-item.show > .nav-link {
  color: #223035;
  background-color: #fff;
  border-color: #223035 #223035 #fff;
  border-top: 3px solid #223035;
}

.nav-tabs-secondary.nav-tabs {
  border-bottom: 1px solid #75808a;
}
.nav-tabs-secondary .nav-link.active,
.nav-tabs-secondary .nav-item.show > .nav-link {
  color: #75808a;
  background-color: #fff;
  border-color: #75808a #75808a #fff;
  border-top: 3px solid #75808a;
}

.tabs-vertical .nav-tabs .nav-link {
  color: #223035;
  font-size: 12px;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 600;
  margin: 2px;
  margin-right: -1px;
  padding: 12px 1px;
  text-transform: uppercase;
  border: 1px solid transparent;
  border-radius: 0;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.tabs-vertical .nav-tabs {
  border: 0;
  border-right: 1px solid #aed1f5;
}

.tabs-vertical .nav-tabs .nav-item.show .nav-link,
.tabs-vertical .nav-tabs .nav-link.active {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
  border-bottom: 1px solid #dee2e6;
  border-right: 0;
  border-left: 1px solid #dee2e6;
}

.tabs-vertical-primary.tabs-vertical .nav-tabs {
  border: 0;
  border-right: 1px solid #008cff;
}

.tabs-vertical-primary.tabs-vertical .nav-tabs .nav-item.show .nav-link,
.tabs-vertical-primary.tabs-vertical .nav-tabs .nav-link.active {
  color: #008cff;
  background-color: #fff;
  border-color: #008cff #008cff #fff;
  border-bottom: 1px solid #008cff;
  border-right: 0;
  border-left: 3px solid #008cff;
}

.tabs-vertical-success.tabs-vertical .nav-tabs {
  border: 0;
  border-right: 1px solid #15ca20;
}

.tabs-vertical-success.tabs-vertical .nav-tabs .nav-item.show .nav-link,
.tabs-vertical-success.tabs-vertical .nav-tabs .nav-link.active {
  color: #15ca20;
  background-color: #fff;
  border-color: #15ca20 #15ca20 #fff;
  border-bottom: 1px solid #15ca20;
  border-right: 0;
  border-left: 3px solid #15ca20;
}

.tabs-vertical-info.tabs-vertical .nav-tabs {
  border: 0;
  border-right: 1px solid #0dceec;
}

.tabs-vertical-info.tabs-vertical .nav-tabs .nav-item.show .nav-link,
.tabs-vertical-info.tabs-vertical .nav-tabs .nav-link.active {
  color: #0dceec;
  background-color: #fff;
  border-color: #0dceec #0dceec #fff;
  border-bottom: 1px solid #0dceec;
  border-right: 0;
  border-left: 3px solid #0dceec;
}

.tabs-vertical-danger.tabs-vertical .nav-tabs {
  border: 0;
  border-right: 1px solid #fd3550;
}

.tabs-vertical-danger.tabs-vertical .nav-tabs .nav-item.show .nav-link,
.tabs-vertical-danger.tabs-vertical .nav-tabs .nav-link.active {
  color: #fd3550;
  background-color: #fff;
  border-color: #fd3550 #fd3550 #fff;
  border-bottom: 1px solid #fd3550;
  border-right: 0;
  border-left: 3px solid #fd3550;
}

.tabs-vertical-warning.tabs-vertical .nav-tabs {
  border: 0;
  border-right: 1px solid #ff9700;
}

.tabs-vertical-warning.tabs-vertical .nav-tabs .nav-item.show .nav-link,
.tabs-vertical-warning.tabs-vertical .nav-tabs .nav-link.active {
  color: #ff9700;
  background-color: #fff;
  border-color: #ff9700 #ff9700 #fff;
  border-bottom: 1px solid #ff9700;
  border-right: 0;
  border-left: 3px solid #ff9700;
}

.tabs-vertical-dark.tabs-vertical .nav-tabs {
  border: 0;
  border-right: 1px solid #223035;
}

.tabs-vertical-dark.tabs-vertical .nav-tabs .nav-item.show .nav-link,
.tabs-vertical-dark.tabs-vertical .nav-tabs .nav-link.active {
  color: #223035;
  background-color: #fff;
  border-color: #223035 #223035 #fff;
  border-bottom: 1px solid #223035;
  border-right: 0;
  border-left: 3px solid #223035;
}

.tabs-vertical-secondary.tabs-vertical .nav-tabs {
  border: 0;
  border-right: 1px solid #75808a;
}

.tabs-vertical-secondary.tabs-vertical .nav-tabs .nav-item.show .nav-link,
.tabs-vertical-secondary.tabs-vertical .nav-tabs .nav-link.active {
  color: #75808a;
  background-color: #fff;
  border-color: #75808a #75808a #fff;
  border-bottom: 1px solid #75808a;
  border-right: 0;
  border-left: 3px solid #75808a;
}

.nav-pills .nav-link {
  border-radius: 0.25rem;
  color: #223035;
  font-size: 12px;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 3px;
  padding: 12px 20px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.nav-pills .nav-link:hover {
  background-color: #f4f5fa;
}

.nav-pills .nav-link i {
  margin-right: 2px;
  font-weight: 600;
}

.top-icon.nav-pills .nav-link i {
  margin: 0px;
  font-weight: 500;
  display: block;
  font-size: 20px;
  padding: 5px 0;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #008cff;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
    0 7px 10px -5px rgba(0, 140, 255, 0.5);
}

.nav-pills-success .nav-link.active,
.nav-pills-success .show > .nav-link {
  color: #fff;
  background-color: #15ca20;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
    0 7px 10px -5px rgba(21, 202, 32, 0.5);
}

.nav-pills-info .nav-link.active,
.nav-pills-info .show > .nav-link {
  color: #fff;
  background-color: #0dceec;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
    0 7px 10px -5px rgba(13, 206, 236, 0.5);
}

.nav-pills-danger .nav-link.active,
.nav-pills-danger .show > .nav-link {
  color: #fff;
  background-color: #fd3550;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
    0 7px 10px -5px rgba(253, 53, 80, 0.5);
}

.nav-pills-warning .nav-link.active,
.nav-pills-warning .show > .nav-link {
  color: #fff;
  background-color: #ff9700;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
    0 7px 10px -5px rgba(255, 151, 0, 0.5);
}

.nav-pills-dark .nav-link.active,
.nav-pills-dark .show > .nav-link {
  color: #fff;
  background-color: #223035;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
    0 7px 10px -5px rgba(34, 48, 53, 0.5);
}

.nav-pills-secondary .nav-link.active,
.nav-pills-secondary .show > .nav-link {
  color: #fff;
  background-color: #75808a;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
    0 7px 10px -5px rgba(117, 128, 138, 0.5);
}
.card .tab-content {
  padding: 1rem 0 0 0;
}

.z-depth-3 {
  -webkit-box-shadow: 0 11px 7px 0 rgba(0, 0, 0, 0.19),
    0 13px 25px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 11px 7px 0 rgba(0, 0, 0, 0.19), 0 13px 25px 0 rgba(0, 0, 0, 0.3);
}
#namanyay-search-btn {
  background: #0099ff;
  color: white;
  font: "trebuchet ms", trebuchet;
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

.hide {
  display: none;
}

.show {
  display: block;
}
</style>