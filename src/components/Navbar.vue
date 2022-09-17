<template>
  <div style="margin-top:-5px;margin-bottom:49px;">

    <section class="navigation">
  <div class="nav-container">
    <div class="brand">
      <a href="/">Accueil</a>
    </div>
    <nav>
      <div class="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
      <ul class="nav-list">
        <!-- <li>
          
          <a href="#!">Home</a>
        </li>
        <li>
          <a href="#!">About</a>
        </li> -->
        <li>
         
          <a >Les Voyages</a>
          <ul class="navbar-dropdown">
            <li v-if="isLogged === true">
              <a  href="/MyAnnouncements">Ajouter un Voyage</a>
            </li>
            <li >
              <a href="/Announcements">Tous les Voyages</a>
            </li>
          </ul>
        </li>
        
        <li>
          <a >Marketplace</a>
          <ul class="navbar-dropdown">
            <li v-if="isLogged === true">
              <a href="/MyArticles">Ajouter un Article</a>
            </li>
            <li>
              <a href="/MarketPlace">Tous les Articles</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/About">À propos de nous</a>
        </li>
        <li>
          <a href="/contact_us">Nous contacter</a>
        </li>
      </ul>
    </nav>
  </div>
</section>



  <!-- <b-navbar toggleable="lg" type="primary" variant="white">

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-brand href="/">Accueil</b-navbar-brand>
      <b-navbar-nav  type="primary">
       
        <b-nav-item href="/MarketPlace">Marketplace</b-nav-item>
         <b-nav-item href="/About">About</b-nav-item>
        <b-nav-item href="#" >Contact</b-nav-item>
      </b-navbar-nav>
     

    </b-collapse>
 <div v-if="isLogged === false" style="margin-right:20px">
<a href="/Register"><button type="button" class="btn btn-outline-primary">Login</button></a>
</div>
<div v-if="isLogged === false">
<a href="/Register"><button type="button" class="btn btn-outline-primary">Register</button></a>

</div>
  </b-navbar>
  -->
  </div>
</template>

<script>
  import jQuery from "jquery";
export default {
    name:"NavbarVue",
   data() {
    return {
        
      isLogged: this.checkIfIsLogged(),
    };
  },

         components: {
  },
  mounted(){
    (function($) { 
  $(function() { 

    //  open and close nav 
    $('#navbar-toggle').click(function() {
      $('nav ul').slideToggle();
    });


    // Hamburger toggle
    $('#navbar-toggle').on('click', function() {
      this.classList.toggle('active');
    });


    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.navbar-dropdown').slideToggle("slow");

      // Close dropdown when select another dropdown
      $('.navbar-dropdown').not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });


    // Click outside the dropdown will remove the dropdown class
    $('html').click(function() {
      $('.navbar-dropdown').hide();
    });
  }); 
})(jQuery); 
  },
       created () {
    this.$bus.$on('logged', () => {
      this.isLogged = this.checkIfIsLogged()
    })
  },
  methods: {

 singout () {
      localStorage.removeItem('access-token')
      this.isLogged = this.checkIfIsLogged()
      this.$router.push('/')
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


}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Roboto');

.navigation {
     font-family: 'Roboto', sans-serif;
  
    height: 55px;
    background: linear-gradient(45deg, rgb(255, 194, 81), #fcdfb8, #fff, #fff);
}
.brand {
    position: absolute;
    padding-left: 10px;
    float: left; 
    line-height: 55px;
    font-size: 1.6em;
    font-weight: 2.6em;
}
.brand a, .brand a:visited {
    color: blue;
    text-decoration: none;
}
.nav-container {
    max-width: 1000px;
    margin: 0 auto;
}
nav {
    float: right;
}
nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
nav ul li {
    float: left;
    position: relative;
}
nav ul li a,nav ul li a:visited {
    display: block;
    padding: 0 20px;
    line-height: 55px;
    color: rgb(10, 10, 10);
    background: rgb(233, 244, 253) ;
    text-decoration: none;
    
}
nav ul li a{
    background: transparent;
    color: #FFF;
    
}
nav ul li a:hover, nav ul li a:visited:hover {
    background: #2581DC;
    color: #ffffff;
    
}
.navbar-dropdown li a{
    background: #2581DC;
    
}
nav ul li a:not(:only-child):after, nav ul li a:visited:not(:only-child):after {
    padding-left: 4px;
    content: ' \025BE';
}
nav ul li ul li {
    min-width: 190px;
}
nav ul li ul li a {
    padding: 15px;
    line-height: 20px;
}
.navbar-dropdown {
    position: absolute;
    display: none;
    z-index: 1;
    background: #fff;
     
}
/* Mobile navigation */
.nav-mobile {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    background: transparent;
    height: 55px;
    width: 70px;
}
@media only screen and (max-width: 800px) {
    .nav-mobile {
        display: block;
   }
    nav {
        width: 100%;
        padding: 55px 0 15px;
   }
    nav ul {
        display: none;
   }
    nav ul li {
        float: none;
   }
    nav ul li a {
        padding: 15px;
        line-height: 20px;
        background: linear-gradient(45deg,  #fcdfb8, #fff, #fff, rgb(255, 194, 81),);
   }
    nav ul li ul li a {
        padding-left: 30px;
   }
    .navbar-dropdown {
        position: static;
}
@media screen and (min-width:800px) {
    .nav-list {
        display: block !important;
   }
}
#navbar-toggle {
    position: absolute;
    left: 18px;
    top: 15px;
    cursor: pointer;
    padding: 10px 35px 16px 0px;
}
#navbar-toggle span, #navbar-toggle span:before, #navbar-toggle span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 3px;
    width: 30px;
    background: #000000;
    position: absolute;
    display: block;
    content: '';
    // transition: all 300ms ease-in-out;
}
#navbar-toggle span:before {
    top: -10px;
}
#navbar-toggle span:after {
    bottom: -10px;
}
#navbar-toggle.active span {
    background-color: transparent;
}
#navbar-toggle.active span:before, #navbar-toggle.active span:after {
    top: 0;
}
#navbar-toggle.active span:before {
    transform: rotate(45deg);
}
#navbar-toggle.active span:after {
    transform: rotate(-45deg);
}


}
/* * {
  font-family: 'Source Sans Pro', sans-serif;
}
.nav-link {
   color: #000!important;
   display: block;
   font-size: large;
text-align: center;
text-decoration: none;
} */
</style>