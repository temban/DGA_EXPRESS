<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="white" style="margin-bottom: -15px">
        <b-container>
          <div class="header__logo">
            <router-link :to="{ name: 'Home' }" class="header__logo-img"></router-link>
          </div>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">


              <form action="#" id="header-search-people" class="form-area" novalidate="novalidate" autocomplete="off">
                <div class="row">
                  <div class="col-md-10">
                    <div class="styled-input wide multi">
                      <div class="last-name" id="input-last-name">
                        <input v-model="source" v-on:keyup="search" type="text" name="ln" id="ln" autocomplete="on"
                          data-placeholder-focus="false" required />
                        <label>Source Town</label>
                        <svg class="icon--check" width="21px" height="17px" viewBox="0 0 21 17" version="1.1"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                            stroke-linecap="round">
                            <g id="UI-Elements-Forms" transform="translate(-255.000000, -746.000000)"
                              fill-rule="nonzero" stroke="#81B44C" stroke-width="3">
                              <polyline id="Path-2" points="257 754.064225 263.505943 760.733489 273.634603 748">
                              </polyline>
                            </g>
                          </g>
                        </svg>
                        <svg class="icon--error" width="15px" height="15px" viewBox="0 0 15 15" version="1.1"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                            stroke-linecap="round">
                            <g id="UI-Elements-Forms" transform="translate(-550.000000, -747.000000)"
                              fill-rule="nonzero" stroke="#D0021B" stroke-width="3">
                              <g id="Group" transform="translate(552.000000, 749.000000)">
                                <path d="M0,11.1298982 L11.1298982,-5.68434189e-14" id="Path-2-Copy"></path>
                                <path d="M0,11.1298982 L11.1298982,-5.68434189e-14" id="Path-2-Copy-2"
                                  transform="translate(5.564949, 5.564949) scale(-1, 1) translate(-5.564949, -5.564949) ">
                                </path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class="city" id="input-city">
                        <input v-model="destination" v-on:keyup="search" type="text" name="city" id="city"
                          autocomplete="off" data-placeholder-focus="false" />
                        <label>Destination Town</label>
                        <svg class="icon--check" width="21px" height="17px" viewBox="0 0 21 17" version="1.1"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                            stroke-linecap="round">
                            <g id="UI-Elements-Forms" transform="translate(-255.000000, -746.000000)"
                              fill-rule="nonzero" stroke="#81B44C" stroke-width="3">
                              <polyline id="Path-2" points="257 754.064225 263.505943 760.733489 273.634603 748">
                              </polyline>
                            </g>
                          </g>
                        </svg>
                        <svg class="icon--error" width="15px" height="15px" viewBox="0 0 15 15" version="1.1"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                            stroke-linecap="round">
                            <g id="UI-Elements-Forms" transform="translate(-550.000000, -747.000000)"
                              fill-rule="nonzero" stroke="#D0021B" stroke-width="3">
                              <g id="Group" transform="translate(552.000000, 749.000000)">
                                <path d="M0,11.1298982 L11.1298982,-5.68434189e-14" id="Path-2-Copy"></path>
                                <path d="M0,11.1298982 L11.1298982,-5.68434189e-14" id="Path-2-Copy-2"
                                  transform="translate(5.564949, 5.564949) scale(-1, 1) translate(-5.564949, -5.564949) ">
                                </path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2 no-pad-left-10">
                    <router-link
                      :to="{ name: 'Search', params: { source: this.source, destination: this.destination, }, }"
                      type="submit" class="primary-btn serach-btn" id="submit_btn">SEARCH</router-link>
                    <router-link class="btn btn-sm btn-info mr-1" style="height: 45px; width: 40px">
                    </router-link>
                  </div>
                  <div v-if="source || destination" id="cadre">
                    <ul id="liste">
                      <li v-for="(item, key) in tabFin" v-bind:key="key">
                        <span v-html="item[0]"></span> ||
                        <span v-html="item[1]"></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>

              <div class="ml-auto">
                <div class="dl">
                  <form id="searchthis" action="/Search" style="display: inline;position:relative;" method="get">







                  </form>
                </div>
              </div>
            </b-navbar-nav>
            <button @click="viewBasket" type="button" class="icon-button panier" >
              <span class="material-icons">shopping_cart</span>
              <span class="icon-button__badge">{{ basket.length }}</span>
            </button>
            <button type="button" class="icon-button">
              <span class="material-icons">notifications</span>
              <span class="icon-button__badge">2</span>
            </button>
            <div v-if="isLogged === true">
              <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
                <template #button-content>
                    <div v-if="profileimgage===''" class="mt-1 mb-1" >
              <img src="@/assets/img/hotels/59710428.png" 
                class="rounded-circle img-fluid" style="border-radius: 160px;
                    image-resolution: 3000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:50px; width: 50px;"   />
            </div>
            <div v-else>  
<img :src=pic style="border-radius: 160px;
                    image-resolution: 30000000000000dpi;  
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:50px; width: 50px;" 
                      
                    /> 

            </div>
                </template>
                <b-dropdown-item href="/userDashboard">Manage Account</b-dropdown-item>
                <b-dropdown-item @click="singout">Logout</b-dropdown-item>
              </b-dropdown>
            </div>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>

    <b-navbar type="primary" variant="primary" class="nav justify-content-center">
      <h6 style="color: beige; margin-bottom: 2px; font-size: medium">
        <img height="25px" width="40px" src="@/assets/img/uk.png" />We stand
        with our friends and colleagues in Ukraine. To support Ukraine in their
        time of need visit this
        <a href="https://war.ukraine.ua/support-ukraine/" style="color: white"><u>page</u></a>
      </h6>
    </b-navbar>

    <NavbarVue />
  </div>
</template>

<script>
import NavbarVue from "./Navbar.vue";
export default {
  name: "marketPlaceNav",
  data() {
    return {
      total: 0,
      basket: [],
      quantities: [],
      source: "",
      destination: "",
      isLogged: this.checkIfIsLogged(),
      facilityOptions: [],
      location: "",
      filter: {
        selectedFacilities: [],
        locationSearch: "",
      },
      query: {},
      textInput: "",
      textInput1: "",
      tabInit: [],
      tabFin: [],
    };
  },
  components: {
    NavbarVue,
  },
  watch: {
    // watch the search filter. if it changes set queries for searching
    filter: {
      handler: function (filter) {
        this.query.facilities =
          filter.selectedFacilities.length > 0
            ? filter.selectedFacilities.join(",")
            : "";
        this.query.departure_town =
          filter.locationSearch !== "" > 0 ? filter.locationSearch : "";

        this.$router.push({
          path: "/Announcements",
          query: this.query,
        });
      },
      deep: true,
    },
  },

  async created() {
 var axios = require('axios');
var config = {
  method: 'get',
  url: 'http://46.105.36.240:3000/profile',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
  },
};

await axios(config)
.then(res => {
    this.profileimgage = res.data.profileimgage;
      this.pic='http://46.105.36.240:3000/'+ this.profileimgage,
    console.log('profile: ',res.data.profileimgage);
localStorage.setItem('profileImage', res.data.profileimgage);
      })
.catch(function (error) {
  console.log(error);
});
var requestOptions1 = { method: 'GET', redirect: 'follow' };

        fetch("http://46.105.36.240:3000/sub/informations/view", requestOptions1)
            .then(response => response.text())
            .then(result => {
                if (JSON.parse(result).length!==0) {
                    this.subInfo = JSON.parse(result)[0]
                } 
                console.log(this.subInfo)
            })
            .catch(error => console.log('error', error));
    
    let bask = JSON.parse(localStorage.getItem("basket"))
    if(bask){
      this.basket = bask[0]
      this.quantities = bask[1]
      this.total=0
      for (let i = 0; i < this.basket.length; i++) { 
        this.total +=this.basket[i].price*this.quantities[i]
      }
    }
    this.$bus.$on("logged", () => {
      this.isLogged = this.checkIfIsLogged();
    });
    this.tabFin = this.tabInit
    await fetch("http://46.105.36.240:3000/announcements")
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          this.tabInit.push([data[i].departuretown, data[i].destinationtown])
        }

        // this.idAnn= data[2].userDto.id
        //console.log( data[2].userDto.id);
      })
      .catch(err => {
        console.error(err);
      });
  },
  methods: {
    viewBasket(){
      window.location.href = "/MarketPlace"
    },
    search() {
      var val = this.source;
      var val1 = this.destination;
      if (val == "" && val1 == "") {
        this.tabFin = this.tabInit;
        return true;
      }
      this.tabFin = [];
      var regexp = "\\b(.*)";
      for (var i in val) {
        regexp += "(" + val[i] + ")(.*)";
      }
      regexp += "\\b";

      var regexp1 = "\\b(.*)";
      for (var j in val1) {
        regexp1 += "(" + val1[j] + ")(.*)";
      }
      regexp1 += "\\b";

      for (let i = 0; i < this.tabInit.length; i++) {
        let span = this.tabInit[i];
        let result = span[0].match(new RegExp(regexp, "i"));
        let result1 = span[1].match(new RegExp(regexp1, "i"));
        if (result || result1) {
          let mot = "";
          let mot1 = "";
          for (let j in result) {
            if (j > 0) {
              if (j % 2 == 0) {
                mot += '<span class="resultat">' + result[j] + "</span>";
              } else {
                mot += result[j];
              }
            }
          }
          for (let k in result1) {
            if (k > 0) {
              if (k % 2 == 0) {
                mot1 += '<span class="resultat">' + result1[k] + "</span>";
              } else {
                mot1 += result1[k];
              }
            }
          }
          if (mot && mot1) {
            this.tabFin.push([mot, mot1]);
          }
        }
      }
    },
    singout() {
      localStorage.removeItem("access-token");
      this.isLogged = this.checkIfIsLogged();
      localStorage.clear();
      window.location.href = "/";
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
  },
};
</script>

<style lang="scss">
#cadre {
  background-color: rgb(200, 200, 200);
  width: 300px;
  height: 300px;
  position: absolute;
  margin-top: 60px;
  padding: 50px;
  border-radius: 5px;
  border: 2px solid rgb(214, 187, 97);
  z-index: 100;
  transition: 1s;
}

#liste li {
  list-style-type: none;
}

.resultat {
  background-color: blue;
  color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  &.primary-navigation {
    display: block;
    text-align: center;
    font-size: 16px;

    .dropdown {
      position: absolute;
      z-index: 100;
    }

    ul li {
      list-style: none;
      margin: 0 auto;
      border-left: 2px solid #3ca0e7;
      display: inline-block;
      padding: 0 30px;
      position: relative;
      text-decoration: none;
      text-align: center;
      font-family: arvo;
    }

    li a {
      color: black;
    }

    li a:hover {
      color: #3ca0e7;
    }

    li:hover {
      cursor: pointer;
    }

    ul li ul {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      padding-left: 0;
      left: 0;
      display: none;
      background: white;
    }

    ul li:hover>ul,
    ul li ul:hover {
      visibility: visible;
      opacity: 1;
      display: block;
      min-width: 250px;
      text-align: left;
      padding-top: 20px;
      box-shadow: 0px 3px 5px -1px #ccc;
    }

    ul li ul li {
      clear: both;
      width: 100%;
      text-align: left;
      margin-bottom: 20px;
      border-style: none;
    }

    ul li ul li a:hover {
      padding-left: 10px;
      border-left: 2px solid #3ca0e7;
      transition: all 0.3s ease;
    }
  }
}

a {
  text-decoration: none;

  &:hover {
    color: #3ca0e7;
  }
}

ul li ul li a {
  transition: all 0.5s ease;
}

.icon-button {
  margin: 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  color: #333333;
  background: #dddddd;
  border: none;
  outline: none;
  border-radius: 50%;
}

.icon-button:hover {
  cursor: pointer;
}

.icon-button:active {
  background: #cccccc;
}

.icon-button__badge {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  background: red;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}


* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

form {
  max-width: 1200px;
  width: 90%;

}

/* Search Form */

.styled-input {
  float: left;
  background: rgb(246, 251, 255);
  border: 2px solid #EFEFEF;
  border-radius: 3px;
  -webkit-box-shadow: inset 0 -1px 4px 0 rgba(0, 0, 0, 0.20);
  box-shadow: inset 0 -1px 4px 0 rgba(0, 0, 0, 0.20);
  width: 109%;
  border-radius: 10px;
  position: relative;
  margin-bottom: 20px;
  margin-right: 70px;
  font-family: "Lato", sans-serif;
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
  border: 1px solid #D0E5BA;
  -webkit-box-shadow: inset 0 -2px 4px 0 #D5EEBB;
  box-shadow: inset 0 -2px 4px 0 #D5EEBB;
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

.styled-input input.success~.icon--check,
.styled-input input.error~.icon--error {
  display: inline-block;
}

.styled-input label.error,
.styled-input input:focus~label.error,
.styled-input input#fn:valid~label.error,
.styled-input input#ln:valid~label.error {
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

.styled-input.multi>div {
  position: relative;
  width: 100%;
  border-right: 3px solid #ccc;
}

.styled-input.multi>div:nth-last-of-type(1) {
  border-right: 0;
}

.styled-input.multi>div input,
.styled-input.multi>div label {
  padding-left: 12px;
}

.styled-input.multi>div input {
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

.styled-input input:focus~label,
.styled-input input#fn:valid~label,
.styled-input input#ln:valid~label,
.styled-input input#city[filled="true"]:valid~label,
.styled-input #select-state label {
  font-size: 14px;
  letter-spacing: 1.56px;
  color: #00aeff;
  ;
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

  .styled-input.multi>div input {
    padding-top: 18px;
  }

  .styled-input.multi label {
    padding: 7px 0 0;
  }

  .styled-input input#fn:valid~label,
  .styled-input input#ln:valid~label,
  .styled-input input#city[filled="true"]:valid~label,
  .styled-input.multi input:focus~label,
  .styled-input #select-state label {
    top: -9px;
  }

  .styled-input.multi.error {
    margin-bottom: 30px;
  }

  .styled-input label.error,
  .styled-input input:focus~label.error,
  .styled-input input#fn:valid~label.error,
  .styled-input input#ln:valid~label.error {
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
    padding: 0
  }

  .styled-input.multi>div {
    background-color: #fff;
    margin-bottom: 10px;
    display: block;
    border: 1px solid #EFEFEF;
    border-radius: 3px;
    -webkit-box-shadow: inset 0 -1px 4px 0 rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 -1px 4px 0 rgba(0, 0, 0, 0.20);
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

  .styled-input.multi>div label {
    padding: 12px 0 0 12px;
  }

  .styled-input.multi>div input:valid~label,
  .styled-input.multi>div input:focus~label,
  .styled-input.multi #select-state>label {
    padding-top: 15px;
  }

  .styled-input.multi>div input {
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

  .styled-input.multi>div.error {
    margin-bottom: 30px;
  }

  .styled-input.multi>div.error label.error {
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
  -webkit-box-shadow: -2px -2px 4px -4px rgba(0, 0, 0, 0.02), 0 3px 9px 0 rgba(238, 44, 44, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.14);
  box-shadow: -2px -2px 4px -4px rgba(0, 0, 0, 0.02), 0 3px 9px 0 rgba(216, 22, 22, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.14);
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
</style>