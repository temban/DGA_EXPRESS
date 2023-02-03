<template>
  <div id="landing" class="sidebar-open">
    <div style="position:relative:; padding-bottom:120px;">
      <employeeNavbarVue />
    </div>

    <div class="comment-container theme--light">
      <div
        class="comments"
        v-for="item in suggest"
            :key="item.id"
      >
        <div>
          <div class="card v-card v-sheet theme--light elevation-2">
            <div class="header" style="display:flex;">
              <div class="v-avatar avatar" style="height: 80px; width: 80px">
                <img
                  class="my-pp"
                  v-if="item.user.profileimgage == ``"
                  src="@/assets/img/hotels/59710428.png"
                  alt="profile"
                />
                <img
                  class="my-pp"
                  v-else
                  v-bind:src="urel + `/${item.user.profileimgage}`"
                  alt="profile"
                />
              </div>
              <span class="displayName title"
                >{{ item.user.firstName + " " + item.user.lastName }}
              </span>
              <span class="displayName caption">{{ item.date }}</span>

              <div class="pull-right"> <div v-if="item.validated" class="ok"
                        style="position:absolute;right: 0;font-size: 13px;display: flex;align-items: center;"><i
                            class="fa fa-check-circle-o"
                            style="display: flex;align-items: center;justify-content: end;width: 20px;"></i><span
                            style="margin-left: 4px;">suggestion considérée</span></div>
                    <div v-else class="no-ok"
                        style="position:absolute;right: 0;font-size: 13px;display: flex;align-items: center;"><i
                            class="fa fa-check-circle-o"
                            style="display: flex;align-items: center;justify-content: end;width: 20px;"></i><span
                            style="margin-left: 4px;">suggestion non lue</span></div>
                        </div>


            </div>
            
            <!---->
            <div class="wrapper comment" style="">
              <p>{{ item.content }}</p>
            </div>
            <div class="actions">
                <div class="end pull-right" >
                        <i v-if="item.validated" class="fa fa-thumbs-up" style="cursor: pointer; transform: scale(1.2); color: #5b5bff;"></i>
                        <i v-else class="fa fa-thumbs-up" @click="like(item.id)"></i>
                    </div>
            </div>
            <div class="v-dialog__container" style="display: block"></div>
          </div>
          <!---->
          <div class="answers">
            <!---->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import employeeNavbarVue from "../components/employeeNavbar.vue";
export default {
  name: "Home",

  data() {
    return {
      suggest: [],
      error: true,
      notifNum: "",
      urel: this.$url,
    };
  },
  components: {
    employeeNavbarVue,
  },
  created() {
    window.localStorage.removeItem("notificationSizeSuggest");

    
var axios = require("axios");

var config = {
  method: "get",
  url: this.$url+'/view/suggest',
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("access-token"),
  },
};

axios(config)
  .then((res) => {
      this.suggest = res.data.reverse();
     
      console.log("suggest",this.suggest );
  })
  .catch(function (error) {
    console.log(error);
    localStorage.clear()
        window.location.href = "/"
  });

  },
  methods: { 
    like(id) {
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

      fetch(this.$url + "/check/suggestion/" + id, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
          window.location.reload();
        })
        .catch((error) => console.log("error", error));
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Noto+Serif:400,700");

body {
  background-color: #fafafa;
  font-family: "Noto Serif", serif;
}
.comment-container {
  width: 65%;
  margin: 2rem auto;
}

a {
  color: #c40030;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
.avatar {
  width: 50px;
  height: 50px;
  margin-left: -42px;
  border-radius: 50%;
}

.v-avatar {
  align-items: center;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  position: relative;
  text-align: center;
  vertical-align: middle;
}

.v-avatar img {
  border-radius: 50%;
  display: inline-flex;
  height: inherit;
  width: inherit;
  object-fit: cover;
}

* {
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
}

.title {
  font-size: 20px !important;
  font-weight: 700;
  line-height: 1 !important;
  letter-spacing: 0.02em !important;
}

.caption {
  font-weight: 400;
  font-size: 12px !important;
}
.theme--light .v-card {
  box-shadow: rgba(0, 0, 0, 0.11) 0 15px 30px 0px,
    rgba(0, 0, 0, 0.08) 0 5px 15px 0 !important;
}

.wrapper {
  overflow: auto;
  width: 90%;
  position: relative;
  margin-top: -40px;
  margin-left: 20px;
}

.answers {
  padding-left: 64px;
}

.comment {
  overflow-y: auto;
  margin-left: 32px;
  margin-right: 16px;
}

.comment p {
  font-size: 14px;
  margin-bottom: 7px;
}

.displayName {
  margin-left: 24px;
}

.card,
.card {
  padding: 32px 16px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 640px) {
  .comment-container {
    width: 90%;
  }
  .comments {
    padding: 32px;
  }
}





.my-pp {
    display: flex;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    margin-right: 10px;
    border: 2px solid #2423ff;
}
.user-info {
    height: 100%;
    display: flex;
    width: 300px;
    flex-direction: column;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    color: rgb(56, 56, 56);
}
.ok {
    background: rgb(214, 255, 214);
    height: 25px;
    padding: 2px 10px;
    border-radius: 20px;
    color: #51a985;
}

.no-ok {
    background: rgb(255, 214, 214);
    height: 25px;
    padding: 2px 10px;
    border-radius: 20px;
    color: #a95151;
}

.end i {
    max-height: 20px;
    position: absolute;
    right: 0;
    transition: .3s;
}

.end i:hover {
    cursor: pointer; transform: scale(1.2); color: #5b5bff;
}
</style>
