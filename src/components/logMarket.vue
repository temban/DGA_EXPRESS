<template>
 <div>

<div>
  <b-navbar toggleable="lg" type="dark" variant="white" style="margin-bottom:-15px; ">
   
    <b-container >
      <div class="header__logo">
            <router-link
              :to="{ name: 'Home' }"
              class="header__logo-img"
            ></router-link>
          </div>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          
      <b-collapse id="nav-collapse" is-nav >
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit="onSubmit" >
           

         
          </b-nav-form>
         
           
        </b-navbar-nav>


    <button  type="button" class="icon-button">
    <span class="material-icons">shopping_cart</span>
    <span class="icon-button__badge">7</span>
  </button>
    <button type="button" class="icon-button">
    <span class="material-icons">notifications</span>
    <span class="icon-button__badge">2</span>
  </button>
<div v-if="isLogged === true">
  <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
    <template #button-content >
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
    <b-dropdown-item @click="singout" >Logout</b-dropdown-item>
    
  </b-dropdown>
</div>
      </b-collapse>
    </b-container>
  </b-navbar>
</div>


  <b-navbar type="primary" variant="primary" class="nav justify-content-center">
      <h6 style="color:beige; margin-bottom: 2px; font-size: medium;"><img height="25px" width="40px" src="@/assets/img/uk.png">We stand with our friends and colleagues in Ukraine. To support Ukraine in their time of need visit this <a href="https://war.ukraine.ua/support-ukraine/" style="color:white;"><u>page</u></a></h6>
  </b-navbar>

  <NavbarVue/>
</div>
</template>

<script>
import NavbarVue from './Navbar.vue';
export default {
  name: "lognav",
  data() {
    return {
      isLogged: this.checkIfIsLogged(),
      facilityOptions: [],
      location: "",
      filter: {
        selectedFacilities: [],
        locationSearch: "",
        source:'',
        destination:'',
      },
      query: {},
    };
  },
       components: {
        NavbarVue
  },
  watch: {
    // watch the search filter. if it changes set queries for searching
    filter: {
      handler: function(filter) {
        this.query.facilities = filter.selectedFacilities.length > 0 ? filter.selectedFacilities.join(",") : "";
        this.query.departure_town = filter.locationSearch !== "" > 0 ? filter.locationSearch : "";

        this.$router.push({
          path: "/Announcements",
          query: this.query 
        });
      },
      deep: true,
    },

  },

   created () {
           var axios = require('axios');
var config = {
  method: 'get',
  url: 'https://dga-express.com:8443/profile',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
  },
};

 axios(config)
.then(res => {
    this.profileimgage = res.data.profileimgage;
      this.pic='https://dga-express.com:8443/'+ this.profileimgage,
    console.log('profile: ',res.data.profileimgage);
localStorage.setItem('profileImage', res.data.profileimgage);
      })
.catch(function (error) {
  console.log(error);
});

    this.$bus.$on('logged', () => {
      this.isLogged = this.checkIfIsLogged()
    })
  },
  methods: {

     onSubmit(){
localStorage.setItem('source', this.source);
localStorage.setItem('destination', this.destination);
   this.$router.push('/Search');
    },
   


   singout () {
      localStorage.removeItem('access-token')
      this.isLogged = this.checkIfIsLogged()
       localStorage.clear()
        window.location.href = "/"
    },
    checkIfIsLogged () {
      let token = localStorage.getItem('access-token')
      //localStorage.getItem('access-token')
      if (token) {
        return true
      } else {
        return false
      }
    },
  },
};
</script>

<style lang="scss">
nav {
  &.primary-navigation {
    display: block;
    text-align: center;
    font-size: 16px;
    .dropdown{
    position: absolute;
    z-index:100;
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

    ul li:hover > ul,
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
        color: #3CA0E7;
    }
 
}

 ul li ul li a { transition: all 0.5s ease; }


.icon-button {
  margin: 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
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
</style>