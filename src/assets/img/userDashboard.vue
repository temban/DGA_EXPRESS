<template>
  <div>
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

    <b-container style="margin-left: 72px; margin-bottom: 30px">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="profile-card-4 z-depth-3">
              <div class="card">
                <div
                  class="card-body text-center bg-primary rounded-top"
                  style="height: 350px"
                >
                 <div v-if="profileimgage===''" class="mt-1 mb-1" >
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
                  <div v-else >
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
                          height: 220px;
                          width: 220px;
                        "
                      />
                    </a>
                  </div>
                  <!-- 
                 <i class="fa fa-camera" style="font-size:48px;color:red"></i>
                -->
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
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
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
                      <small class="mb-0 font-weight-bold">Reservations</small>
                    </div>
                    <div v-else class="col p-2">
                      <h4 class="mb-1 line-height-5">0</h4>
                      <small class="mb-0 font-weight-bold">Reservations</small>
                    </div>
                    <div v-if="revlength > 0" class="col p-2">
                      <h4 class="mb-1 line-height-5">{{ annlength }}</h4>
                      <small class="mb-0 font-weight-bold">Travels</small>
                    </div>
                    <div v-else class="col p-2">
                      <h4 class="mb-1 line-height-5">0</h4>
                      <small class="mb-0 font-weight-bold">Travels</small>
                    </div>
                    <div class="col p-2">
                      <h4 class="mb-1 line-height-5">9.1k</h4>
                      <small class="mb-0 font-weight-bold">Purches</small>
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
                        <span class="hidden-xs">Profile</span></a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="javascript:void();"
                        data-target="#messages"
                        data-toggle="pill"
                        class="nav-link"
                        ><i class="icon-envelope-open"></i>
                        <span class="hidden-xs">Update Profile</span></a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="javascript:void();"
                        data-target="#edit"
                        data-toggle="pill"
                        class="nav-link"
                        ><i class="icon-note"></i>
                        <span class="hidden-xs">Change Password</span></a
                      >
                    </li>
                  </ul>
                  <div class="tab-content p-3">
                    <div class="tab-pane active show" id="profile">
                      <div class="row">
                        <div class="col-md-6">
                          <h6><b>About</b></h6>
                          <p>DGA User</p>
                        </div>
                        <div class="col-md-6">
                          <h5 style="margin-left: 2px">
                            <b>Provide Transaction Code</b>
                          </h5>
                          <div class="dl">
                            <form id="searchthis" style="display: inline">
                              <input
                                id="namanyay-search-box"
                                size="40"
                                type="text"
                                placeholder="Transaction Code! "
                                v-model="code"
                              />
                              <input
                                id="namanyay-search-btn"
                                value="Search"
                                type="button"
                                @click="transactionCode"
                              />
                            </form>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <h5 class="mt-2 mb-3">
                            <span
                              class="fa fa-clock-o ion-clock float-right"
                            ></span>
                            Recent Activity
                          </h5>
                          <table class="table table-hover table-striped">
                            <tbody>
                              <tr>
                                <td>
                                  <p>Successful Delivery Yesterday</p>
                                </td>
                              </tr>
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
                            >First name</label
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
                            >Last name</label
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
                            >User Name</label
                          >
                          <div class="col-lg-9">
                            <input
                              v-model="pseudo"
                              class="form-control"
                              type="text"
                              required
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label
                            class="col-lg-3 col-form-label form-control-label"
                            >Email</label
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
                              value="Update"
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
                            >Old Password</label
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
                            >New Password</label
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
                            >Confirm New password</label
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
                          <div class="col-lg-9">
                            <input
                              @click="updatepassword"
                              type="button"
                              class="btn btn-primary"
                              value="Save Changes"
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
                        >Suggestion</label
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
                    <div class="form-group row">
                      <label
                        class="col-lg-3 col-form-label form-control-label"
                      ></label>
                      <div class="col-lg-9">
                        <input
                          id="suggestion_button"
                          @click="suggestionBox"
                          type="button"
                          class="btn btn"
                          style="background-color: orangered"
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
              <th scope="col">Traveler</th>
              <th scope="col">Source</th>
              <th scope="col">Destination</th>
              <th scope="col">Doc</th>
              <th scope="col">Reserved Qty</th>
              <th scope="col">Computer</th>
              <th scope="col">Tracked</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody style="text-transform: capitalize">
            <tr v-for="user in track" :key="user.id">
              <a v-if="user.announcementDto.profileimgage !== ''"
               
              >
              <img
                   :src="
                  'https://dga-express.com:8443/' +
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
              <td>{{ user.announcementDto.departuretown}}</td>
              <td>{{ user.announcementDto.destinationtown }}</td>
              <td v-if="user.documents">
                <i class="fa fa-check" style="font-size: 25px; color: lime"></i>
              </td>
              <td v-else>
                <i class="fa fa-remove" style="font-size: 25px; color: red"></i>
              </td>
              <td>{{ user.quantitykilo }}</td>
              <td v-if="user.computer">
                <i class="fa fa-check" style="font-size: 25px; color: lime"></i>
              </td>
              <td v-else>
                <i class="fa fa-remove" style="font-size: 25px; color: red"></i>
              </td>
              <td v-if="userId !== user.userDto.id && user.track ==='complete'">
                <span class="badge badge-success font-weight-100"
                  >complete</span
                >
              </td>
              <td>
                <form>
                    <a  v-on:click="like(user.announcementDto.id)"> 
                    <i class="fa fa-thumbs-up" style="font-size: 30px;color:orange"></i>
                    </a>
                
                     <a v-on:click="commentBox(user)"> 
                    <i   class="fa fa-comment" style="font-size: 30px;color:skyblue"></i>
                    </a>
                
                 
                </form>
              </td>
            </tr>
          </tbody>
        </table>



                <!--<b-table
                  :items="items"
                  :fields="fields"
                  striped
                  responsive="lg"
                > 
               
                  <template >
                    <button id="theButton" @click="clickMe()">Click me!</button>

                  </template>
                  <template #row-details="row">
                    <b-card>
                      <label class="col-lg-10 col-form-label form-control-label"
                        >Comment</label
                      >
                      <div class="col-lg-12">
                        <input type="text" name="popup" id="popup" class="hide">
                      </div>
                      <input
                        id="comment_button"
                        @click="commentBox()"
                        type="button"
                        class="btn btn"
                        style="background-color: orangered; float: right"
                        value="Send"
                        disabled
                      />
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
        users: [],
      file: "",
      comment: "",
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
      reservations:[],
      track:[],
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
    };
  },

  methods: {
 clickMe() {
  var text = document.getElementById("popup");
  text.classList.toggle("hide");
  text.classList.toggle("show");
},

like(id){
var axios = require('axios');
var config = {
  method: 'get',
  url: 'https://dga-express.com:8443/like/announcement/'+id,
  headers: { 
    'Content-Type': 'application/json', 
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
    commentBox(user) {
      var axios = require("axios");
      var data = JSON.stringify({
        content: 'hellooo ',
        booker: {
          id: localStorage.getItem("userId"),
        },
        announcement: {
          id: user.announcement.id,
          userDto: {
            id:  user.announcement.userDto.id,
          },
        },
      });

      var config = {
        method: "post",
        url: "https://dga-express.com:8443/comment/"+user.id,
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
            imageUrl: 'thumbs-up.jpg',
            title: " Succesfully!",
            showConfirmButton: false,
            timer: 1000,
            
          });
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          Swal.fire("Failed!", "Something Went Wrong!.", "error");
          console.log(error);
        });
    },

    suggestionBox() {
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
        url: "https://dga-express.com:8443/suggest",
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
          console.log(error);
        });
    },

    transactionCode() {
      var axios = require("axios");

      var config = {
        method: "get",
        url: "https://dga-express.com:8443/user/transaction/" + this.code,
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
        })
        .catch(function (error) {
          if (error.response.status === 403) {
            Swal.fire("Resquest Failed!", "Invalid or Already Sent", "error");
          }
          if (error.response.status === 404) {
            Swal.fire("Failed!", "Something Went Wrong!.", "error");
          }
          console.log(error);
        });
    },

    handleFileUpload(e) {
      this.icon = e.target.files[0];

      var axios = require("axios");
      var FormData = require("form-data");
      var data = new FormData();
      data.append("file", this.icon);

      var config = {
        method: "put",
        url: "https://dga-express.com:8443/upload/profile/image",
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
              "https://dga-express.com:8443/user/update/" +
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
              window.location.href = "/userDashboard";
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
            profileimgage: this.pic1,
            firstName: this.firstName,
            lastName: this.lastName,
            pseudo: this.pseudo,
            email: this.email,
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
            url: "https://dga-express.com:8443/update/user",
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
              window.location.href = "/userDashboard";
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

  async created() {
    var axios = require("axios");
  var configs = {
      method: "get",
      url:
        "https://dga-express.com:8443/user/" +
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
        for( let p=0 ; p<this.users.length; p++){
            if( this.users[p].track === 'complete' && this.users[p].userDto.id ===  localStorage.getItem("userId")){
              
                        this.track.push(this.users[p])
               
                
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

    var config0 = {
      method: "get",
      url:
        "https://dga-express.com:8443/user/" +
        localStorage.getItem("userId") +
        "/reservations",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access-token"),
      },
    };

    axios(config0)
      .then((res) => {
        this.reservations = res.data;
        for(let i=0; i<this.reservations.length; i++ ){
         
                let b=this.reservations[i].announcementDto
                let a={
                  isActive: false, 
                  traveller: b.userDto.firstName,
                  source_town:b.departuretown,
                  destination_town: b.destinationtown,
                  departure_date: b.departuredate,
                  Arrival_date:b.arrivaldate,
                }
                this.items.push(a)
         
        }
        this.loading = false;
      })
      .catch(function (error) {
        this.loading = false;
        Swal.fire({
          icon: "warning",
          title: "Oops...No Reservation found!",
        });
        console.log(error);
      });







    var config3 = {
      method: "get",
      url:
        "https://dga-express.com:8443/user/" +
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
        "https://dga-express.com:8443/users/" +
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
      url: "https://dga-express.com:8443/profile",
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
        this.pseudo = res.data.pseudo;
        this.email = res.data.email;
        this.profileimgage = res.data.profileimgage;
        this.pic = "https://dga-express.com:8443/" + this.profileimgage;
        this.role_dtos_id = Object.values(res.data.roleDtos)[0];
        this.role_dtos_name = Object.values(res.data.roleDtos)[1];

        console.log(JSON.stringify(res.data.id));
        console.log(JSON.stringify(res.data.firstName));
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