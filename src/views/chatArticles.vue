<template>
  <div>
    <div style="height: 10px">
      <div class="card">
        <div class="py-2 px-4 border-bottom d-none d-lg-block">
          <div class="d-flex align-items-center py-1">
            <div v-if="recev.profileimgage === ''" class="mt-1 mb-1">
              <img
                src="@/assets/img/hotels/59710428.png"
                class="rounded-circle img-fluid"
                style="
                  image-resolution: 3000000dpi;
                  background-color: #000;
                  background-position: center;
                  background-size: cover;
                  background-repeat: no-repeat;
                  max-width: 100%;
                  max-height: 100%;
                  width: 50px;
                  height: 50px;
                  border-radius: 55px;
                "
              />
            </div>
            <div v-else>
              <a
                :src="'http://46.105.36.240:3000/' + recev.profileimgage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  :src="'http://46.105.36.240:3000/' + recev.profileimgage"
                  style="
                    image-resolution: 3000000000dpi;
                    background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    max-width: 100%;
                    max-height: 100%;
                    width: 50px;
                    height: 50px;
                    border-radius: 55px;
                  "
                />
              </a>
            </div>
            <div class="flex-grow-1 pl-4">
              <h3 style="text-transform: capitalize; font-size: 16px">
                <strong>{{ recev.firstName + " " + recev.lastName }}</strong>
              </h3>
              <h5 style="text-transform: capitalize; font-size: 16px; ">
                Article: <em style=" color:blue;">{{ art.name }}</em>
              </h5>
            </div>
            <div>
              <router-link
                :to="{ name: 'MyArticles' }"
                class="btn btn-light border btn-lg mr-1 px-2"
              >
                <i
                  class="fa fa-arrow-circle-left"
                  style="font-size: 18px; color: red"
                ></i>
              </router-link>
              <router-link
                :to="{ name: 'Announcements' }"
                class="btn btn-primary btn-lg mr-1 px-2"
              >
                <i
                  class="fa fa-plane"
                  style="font-size: 18px; color: white"
                ></i>
              </router-link>
              <router-link
                :to="{ name: 'MarketPlace' }"
                class="btn btn-info btn-lg mr-1 px-2 d-none d-md-inline-block"
              >
                <i class="fa fa-shopping-cart" style="font-size: 18px; color: white"></i>
              </router-link>
            </div>
          </div>
        </div>

        <div class="position-relative">
          <div class="chat-messages p-4" >
            <tr v-for="user in messages" :key="user.id"> 
              <div v-if="user.articleDto !== null && art.name === user.articleDto.name">
                <div
                class="chat-message-right pb-4"
                v-if="user.sendermessage.id === currentUser.id"
              >
                <div>
                  <div
                    v-if="user.sendermessage.profileimgage === ''"
                    class="mt-1 mb-1"
                  >
                    <img
                      src="@/assets/img/hotels/59710428.png"
                      class="rounded-circle img-fluid"
                      style="
                        margin-left: 40px;
                        image-resolution: 3000000dpi;
                        background-color: #000;
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                        max-width: 100%;
                        max-height: 100%;
                        width: 40px;
                        height: 40px;
                        border-radius: 55px;
                      "
                    />
                  </div>
                  <div v-else>
                    <a
                      :src="
                        'http://46.105.36.240:3000/' +
                        user.sendermessage.profileimgage
                      "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        :src="
                          'http://46.105.36.240:3000/' +
                          user.sendermessage.profileimgage
                        "
                        style="
                          margin-left: 40px;
                          image-resolution: 3000000000dpi;
                          background-color: #000;
                          background-position: center;
                          background-size: cover;
                          background-repeat: no-repeat;
                          max-width: 100%;
                          max-height: 100%;
                          width: 40px;
                          height: 40px;
                          border-radius: 55px;
                        "
                      />
                    </a>
                  </div>
                  <div style="font-size: 13px">
                
                {{ user.date.split(' ').slice(-2)[0]}}
               
              </div>
             <div style="font-size: 13px">
                {{ user.date.split(' ').slice(-1)[0]+ " "}}{{ user.date.split(',').slice(-3)[0]}}
              </div>
                </div>
                <div
                  style="color: #000; position: relative;max-width: 500px;"
                  id="rightBox"
                  class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3"
                >
                  <div
                    style="color: #000; margin-right: 20px"
                    class="font-weight-bold mb-1"
                  >
                    {{ user.sendermessage.firstName }}
                    <button
                      v-on:click="deleteMessage(user.id)"
                      style="
                        height: 20px;
                        width: 20px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 13px;
                        position: absolute;
                        top: 2px;
                        right: 2px;
                      "
                      type="button"
                      class="btn btn-sm btn-danger mr-1"
                    >
                      <i class="fas fa-close" style="font-size: 15px"></i>
                    </button>
                  </div>

                  {{ user.content }}
                </div>
              </div>

              <div class="chat-message-left pb-4" v-else>
                <div>   
                  <div v-if="user.sendermessage.profileimgage === ''" class="mt-1 mb-1">
                    <img
                      src="@/assets/img/hotels/59710428.png"
                      class="rounded-circle img-fluid"
                      style="
                        margin-left: 40px;
                        image-resolution: 3000000dpi;
                        background-color: #000;
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                        max-width: 100%;
                        max-height: 100%;
                        width: 40px;
                        height: 40px;
                        border-radius: 55px;
                      "
                    />
                  </div>
                  <div v-else>
                    <a :href="pic" target="_blank" rel="noopener noreferrer">
                      <img
                        :src="'http://46.105.36.240:3000/' + user.sendermessage.profileimgage"
                        style="
                          margin-left: 10px;
                          image-resolution: 3000000000dpi;
                          background-color: #000;
                          background-position: center;
                          background-size: cover;
                          background-repeat: no-repeat;
                          max-width: 100%;
                          max-height: 100%;
                          width: 40px;
                          height: 40px;
                          border-radius: 55px;
                        "
                      />
                    </a>
                  </div>

                  <div style="font-size: 13px">
                
                {{ user.date.split(' ').slice(-2)[0]}}
               
              </div>
             <div style="font-size: 13px">
                {{ user.date.split(' ').slice(-1)[0]+ " "}}{{ user.date.split(',').slice(-3)[0]}}
              </div>
                </div>
                <div
                  style="color: #fff; position: relative;max-width: 500px;"
                  class="flex-shrink-1 bg-primary rounded py-2 px-3 ml-3"
                >
                  <div
                    style="margin-right: 20px; color: #000"
                    class="font-weight-bold mb-1"
                  >
                    {{ user.sendermessage.firstName }}
                  </div>

                  {{ user.content }}
                </div>
              </div>
              </div>
              
            </tr>
          </div>
        </div>

        <div class="flex-grow-0 py-3 px-4 border-top">
          <div class="input-group">
            <input
              type="text"
              v-model="content"
              class="form-control"
              placeholder="Type your message"
            />
            <button
              @click="sendMessage()"
              class="btn"
              style="background-color: orangered; text: 18px"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "chatroomMyRev",

  data() {
    return {
      id: "",
      loading: true,
      messages: [],
      content: "",
      date: "",
      recev: {},
      art: {},
      currentUser: {},
    };
  },

  async created() {

    this.currentUser = JSON.parse(localStorage.getItem("infoUser"));
    this.recev = JSON.parse(localStorage.getItem("smsRecieve"));
    this.art = JSON.parse(localStorage.getItem("art"));
    console.log(this.art);
    var axios1 = require("axios");
    var config1 = {
      method: "get",
      url:
        "http://46.105.36.240:3000/chat/messages/" +
        JSON.parse(localStorage.getItem("smsRecieve")).id,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access-token"),
      },
    };

    axios1(config1)
      .then((res) => {
        this.messages = res.data;
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops... Session Expired!",
          text: "You need to login Again!",
        });
      });
  },

  methods: {
    deleteMessage(id) {
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
            var axios = require("axios");
            var config = {
              method: "delete",
              url:
                "http://46.105.36.240:3000/delete/message/" + id + "/messages",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("access-token"),
              },
            };

            axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
                window.location.reload();
              })
              .catch(function (error) {
                console.log(error);
                localStorage.clear();
                window.location.href = "/";
              });

    
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

    sendMessage() {
      var axios = require("axios");
      var data = JSON.stringify({
        content: this.content,
        status: "ENABLED",
        sendermessage: this.currentUser,
        receivermessage: this.recev,
        articleDto: this.art,
      });

      var config = {
        method: "post",
        url: "http://46.105.36.240:3000/add/message",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },

        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          location.replace(location.href.split("#")[0]);
        })
        .catch(function (error) {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Your Session has Expire! Login Again",
          });
        });
    },
  },
};
</script>
<style lang="scss" scoped>

.chat-message-left,
.chat-message-right {
  display: flex;
  flex-shrink: 0;
  color: #000000;
}

.chat-message-left {
    color: #fff;
}

.chat-message-right {
  flex-direction: row-reverse;
  color: #fff;
}

.py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}

.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.rightBox {
  background: greenyellow;
}

.border-top {
  border-top: 1px solid #ff7b00 !important;
}
</style>