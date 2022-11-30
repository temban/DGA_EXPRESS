<template>
  <div>
    <div style="height: 10px">
      <div class="card">
        <div class="py-2 px-4 border-bottom d-none d-lg-block">
          <div class="d-flex align-items-center py-1">
            <div v-if="profileimgage === ''" class="mt-1 mb-1">
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
                :src="'https://dga-express.com:8443/' + profileimgage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  :src="'https://dga-express.com:8443/' + profileimgage"
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
                <strong>{{ firstName + "   " + lastName }}</strong>
              </h3>
              <h5 style="text-transform: capitalize; font-size: 16px">
                De<em style="color:blue">{{ " " + departuretown + " " }}</em
                > À<em style="color:blue">{{ " " + destinationtown }}</em>
              </h5>
            </div>
            <div>
              <router-link
                :to="{ name: 'MyReservations' }"
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
          <div class="chat-messages p-4">
            <tr v-for="user in users" :key="user.id">
              <!-- console.log("msg", res.data) -->
              <div v-if=" user.reservationDto !== null && user.reservationDto.announcementDto.departuretown === departuretown && user.reservationDto.announcementDto.destinationtown === destinationtown"  >
                <div
                class="chat-message-right pb-4"
                v-if="user.sendermessage.id === userId"
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
                        'https://dga-express.com:8443/' +
                        user.sendermessage.profileimgage
                      "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        :src="
                          'https://dga-express.com:8443/' +
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

              <div
                class="chat-message-left pb-4"
                v-if="user.receivermessage.id !== receiverId"
              >
                <div>
                  <div v-if="profileimgage === ''" class="mt-1 mb-1">
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
                        :src="'https://dga-express.com:8443/' + profileimgage"
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
                  class="flex-shrink-1 bg-success rounded py-2 px-3 ml-3"
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
              placeholder="Rédigez votre message"
            />
            <button
              @click="sendMessage()"
              class="btn"
              style="background-color: orangered; text: 18px"
            >
              Envoyer
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
      users: [],
      msgId: "",
      userId: localStorage.getItem("userId"),
      firstName: localStorage.getItem("receiver-firstName"),
      lastName: localStorage.getItem("receiver-lastName"),
      departuretown: localStorage.getItem("AnnRev-departuretown"),
      destinationtown: localStorage.getItem("AnnRev-destinationtown"),
      receiverId: localStorage.getItem("receiver-id"),
      profileimgage: localStorage.getItem("receiver-prifil-image"),
      content: "",
      date: "",
    };
  },

  async created() {

    var axios1 = require("axios");
    var config1 = {
      method: "get",
      url:
        "https://dga-express.com:8443/chat/messages/" +
        localStorage.getItem("receiver-id"),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access-token"),
      },
    };

    axios1(config1)
      .then((res) => {
        this.users = res.data;
        
      })
      .catch(function (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops... Session Expired!",
          text: "You need to login Again!",
        });
                
        localStorage.clear()
        window.location.href = "/"
      });
  },

  methods: {
    deleteMessage(id) {
    
            var axios = require("axios");
            var config = {
              method: "delete",
              url:
                "https://dga-express.com:8443/delete/message/" + id + "/messages",
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
    },

    sendMessage() {
      var axios = require("axios");
      var data = JSON.stringify({
        content: this.content,
        status: "ENABLED",
        reservationDto: {
          id: localStorage.getItem("Rev-id"),
          description: localStorage.getItem("userRev-descriptionId"),
          documents: localStorage.getItem("Rev-documents"),
          computer: localStorage.getItem("Rev-computer"),
          status: "ENABLED",
          quantitykilo: localStorage.getItem("Rev-quantitykilo"),
          date: localStorage.getItem("Rev-date"),
          totalprice: localStorage.getItem("Rev-totalprice"),
          userDto: {
            id: localStorage.getItem("receiver-id"),
            firstName: localStorage.getItem("receiver-firstName"),
            lastName: localStorage.getItem("receiver-lastName"),
            profileimgage: localStorage.getItem("receiver-profil-image"),
            pseudo: localStorage.getItem("receiver-pseudo"),
            email: localStorage.getItem("receiver-email"),
            roleDtos: [
              {
                id: 2,
                name: "ROLE_CLIENT",
              },
            ],
            status: "ENABLED",
          },
  articleDto: {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "string",
    description: "string",
    price: 0,
    quantity: 0,
    mainImage: "string",
    status: "ENABLED",
    date: "string",
    location: "string",
    user: {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      firstName: "string",
      lastName: "string",
      profileimgage: "string",
      pseudo: "string",
      email: "string",
      phone: "string",
      roleDtos: [
        {
          id: 0,
          name: "string"
        }
      ],
      password: "string",
      status: "ENABLED",
      stars: 0
    },
    cathegory: {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "string",
      description: "string",
      status: "ENABLED",
      user: {
        id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        firstName: "string",
        lastName: "string",
        profileimgage: "string",
        pseudo: "string",
        email: "string",
        phone: "string",
        roleDtos: [
          {
            id: 0,
            name: "string"
          }
        ],
        password: "string",
        status: "ENABLED",
        stars: 0
      }
      
    }
    },

          announcementDto: {
            id: localStorage.getItem("AnnRev-id"),
            departuredate: localStorage.getItem("AnnRev-departuredate"),
            arrivaldate: localStorage.getItem("AnnRev-arrivaldate"),
            departuretown: localStorage.getItem("AnnRev-departuretown"),
            destinationtown: localStorage.getItem("AnnRev-destinationtown"),
            quantity: localStorage.getItem("AnnRev-quantity"),
            computer: localStorage.getItem("AnnRev-computer"),
            restriction: localStorage.getItem("AnnRev-restriction"),
            document: localStorage.getItem("AnnRev-document"),
            status: "ENABLED",
            cni: "string",
            ticket: "string",
            covidtest: "string",
            price: localStorage.getItem("AnnRev-price"),
            validation: true,
            userDto: {
              id: localStorage.getItem("userId"),
              firstName: localStorage.getItem("firstName"),
              lastName: localStorage.getItem("lastName"),
              profileimgage: null,
              pseudo: localStorage.getItem("pseudo"),
              email: localStorage.getItem("email"),
              roleDtos: [
                {
                  id: 2,
                  name: "ROLE_CLIENT",
                },
              ],
              status: "ENABLED",
            },
          },
        },
        
        sendermessage: {
          id: localStorage.getItem("userId"),
          firstName: localStorage.getItem("firstName"),
          lastName: localStorage.getItem("lastName"),
          profileimgage: null,
          pseudo: localStorage.getItem("pseudo"),
          email: localStorage.getItem("email"),
          roleDtos: [
            {
              id: 2,
              name: "ROLE_CLIENT",
            },
          ],
          status: "ENABLED",
        },
        receivermessage: {
          id: localStorage.getItem("receiver-id"),
          firstName: localStorage.getItem("receiver-firstName"),
          lastName: localStorage.getItem("receiver-lastName"),
          profileimgage: localStorage.getItem("receiver-profil-image"),
          pseudo: localStorage.getItem("receiver-pseudo"),
          email: localStorage.getItem("receiver-email"),
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
        url: "https://dga-express.com:8443/add/message",
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