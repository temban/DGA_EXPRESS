<template>
  <div>
    <div style="margin-left:50px">
    <lognavVue/>
    </div>
    <usersidebarVue/>
  <b-container>

<aside class="profile-card">
  <div class="mask-shadow"></div>
  <header>

    <!-- here’s the avatar -->
    <a href="https://tutsplus.com"> 
      <img src="@/assets/img/hotels/59710428.jpg">
    </a> 

<h2 style="margin-top: 10px">name {{ firstName +'   '+ lastName}}</h2>
     
    <!-- the username -->
    <h1 style="margin-top: 10px">source Town: <u>{{ destinationtown}}</u> </h1>


    <!-- and role or location -->
    
    <h2>sd: {{ departuredate}}</h2>

    <h2>Arive: {{ arrivaldate}}</h2>

    <h2> dapa town: {{ departuretown}}</h2>

  </header>

  <!-- bit of a bio; who are you? -->
  <div class="profile-bio">

    <p>DGA Express</p>

  </div>

  <!-- some social links to show off -->
  <ul class="profile-social-links">

    <!-- twitter - el clásico  -->
    <li>
      <a href="https://twitter.com/tutsplus">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg">
      </a>
    </li>

    <!-- envato – use this one to link to your marketplace profile -->
    <li>
      <a href="https://envato.com">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg">
      </a>
    </li>

    <!-- codepen - your codepen profile-->
    <li>
      <a href="https://codepen.io/tutsplus">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg">
      </a>
    </li>

    <!-- add or remove social profiles as you see fit -->

  </ul>

</aside>

    </b-container>
    <footerVue />
  </div>
</template>
<script>
import footerVue from "@/components/footer.vue"
import lognavVue from "../components/lognav.vue";
import usersidebarVue from "../components/usersidebar.vue";
export default {
  name: 'Announcement',
  components: {
    lognavVue,
    usersidebarVue,
    footerVue
  },
  data() {
    return {
         id: this.$route.params.id,
        lastName:'',
      firstName:'',
      departuredate: '',
      arrivaldate: '',
departuretown: '',
destinationtown: '',
    }
  },

   async created() {
var axios = require('axios');
var config = {
  method: 'get',
  url: 'http://46.105.36.240:3000/announcement/'+this.id+'/users',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
     },
};

axios(config)
.then(res => {
        this.firstName = res.data.userDto.firstName;
        this.lastName = res.data.userDto.lastName;
        this.departuredate = res.data.departuredate;
        this.arrivaldate = res.data.arrivaldate;
        this.departuretown = res.data.departuretown;
        this.destinationtown = res.data.destinationtown;

      console.log(JSON.stringify(res.data.id));    
  console.log(JSON.stringify(res.data.departuredate));
    console.log(JSON.stringify(res.data.arrivaldate));
  console.log(JSON.stringify(res.data.departuretown));
  console.log(JSON.stringify(res.data.destinationtown));

localStorage.setItem('annid', res.data.id);
localStorage.setItem('Ann-departuredate', res.data.departuredate);
localStorage.setItem('Ann-arrivaldate', res.data.arrivaldate);
localStorage.setItem('Ann-departuretown', res.data.departuretown);
localStorage.setItem('Ann-destinationtown', res.data.destinationtown);
        

        //localStorage.setItem('refresh-token', refreshtoken);
        //localStorage.setItem('access-token', accesstoken);
      })
.catch(function (error) {
     localStorage.clear()
        window.location.href = "/"
  console.log(error);
});

  },
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,800italic,400,600,700,800);
img{
  max-width:100%;
}
.profile-card{
  position:relative;
  width:80%;
  margin:0 auto;
  padding:40px 30px 30px;
  background:#fff;
  border: 5px solid rgba(255,255,255,.7);
  text-align:center;
  border-radius:4px;
  transition: all 200ms ease;
}
.mask-shadow{
  z-index:-1 !important;
  width:95%;
  height:12px;
  background:#000;
  bottom:0;
  left:0;
  right:0;
  margin:0 auto;
  position:absolute;
  border-radius:4px;
  opacity:0;
  transition: all 400ms ease-in;
}
.profile-card:hover{
  box-shadow: 0px 30px 60px -5px rgba(55,55,71,0.3);
  transform: translate3d(0,-5px,0);
  .mask-shadow{
    opacity:1;
    box-shadow: 0px 30px 60px -5px rgba(55,55,71,0.3);
    position:absolute;
  }
}
.profile-card header{
  display:block;
  margin-bottom:10px;
}
.profile-card header a{
  width:150px;
  height:150px;
  display:block;
  border-radius:100%;
  margin:-70px auto 0;
  box-shadow: 0 0 0 5px #82b541;
}
.profile-card header a img{
  border-radius: 50%;
  width:150px;
  height:150px;
}

.profile-card:hover header a, .profile-card header a:hover{
  animation: bounceOut .4s linear; 
  -webkit-animation: bounceOut .4s linear;
}
.profile-card header h1{
  font-size:20px;
  color:#444;
  text-transform:uppercase;
  margin-bottom:5px;
}

/*content*/
.profile-bio{
  font-size:14px;
  color:#a5a5a5;
  line-height:1.7;
  font-style: italic;
  margin-bottom:30px;
}
/*link social*/
.profile-social-links{
  margin:0;
  padding:0;
  list-style:none;
}
.profile-social-links li{
  display: inline-block;
  margin: 0 10px;
}
.profile-social-links li a{
  width: 55px;
  height:55px;
  display:block;
  background:#f1f1f1;
  border-radius:50%;
  -webkit-transition: all 2.75s cubic-bezier(0,.83,.17,1);
  -moz-transition: all 2.75s cubic-bezier(0,.83,.17,1);
  -o-transition: all 2.75s cubic-bezier(0,.83,.17,1);
  transition: all 2.75s cubic-bezier(0,.83,.17,1);
  transform-style: preserve-3d;
}
.profile-social-links li a img{
  width:35px;
  height:35px;
  margin:10px auto 0;
}
.profile-social-links li a:hover{
  background:#ddd;
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
}
/*animation hover effect*/
@-webkit-keyframes bounceOut {
  0% {
    box-shadow: 0 0 0 4px #82b541;
    opacity: 1;
  }
  25% {
    box-shadow: 0 0 0 1px #82b541;
    opacity: 1;
  }
  50% {
    box-shadow: 0 0 0 7px #82b541;
    opacity: 1;
  }
  75% {
    box-shadow: 0 0 0 4px #82b541;
    opacity: 1;
  }
  100% {
    box-shadow: 0 0 0 5px #82b541;
    opacity: 1;
  }
}
@keyframes bounceOut {
  0% {
    box-shadow: 0 0 0 6px #82b541;
    opacity: 1;
  }
  25% {
    box-shadow: 0 0 0 2px #82b541;
    opacity: 1;
  }
  50% {
    box-shadow: 0 0 0 9px #82b541;
    opacity: 1;
  }
  75% {
    box-shadow: 0 0 0 3px #82b541;
    opacity: 1;
  }
  100% {
    box-shadow: 0 0 0 5px #82b541;
    opacity: 1;
  }
}






$yellow:#f5ba1a;
$black:#000000;
$grey:#cccccc;


body {
	font-family: Verdana, Geneva, sans-serif;
	font-size: 14px;
	background: #f2f2f2;


}
.clearfix {
	&:after {
		content: "";
		display: block;
		clear: both;
		visibility: hidden;
		height: 0;
	}
}
.form_wrapper {
	background: #fff;
	width: 100%;
	max-width: 100%;
	box-sizing: border-box;
	padding: 25px;
	position: relative;
	z-index: 1;
	border-top: 5px solid $yellow;
	-webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
	-moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    -webkit-transition: none;
    transition: none;
    -webkit-animation: expand 0.8s 0.6s ease-out forwards;
    animation: expand 0.8s 0.6s ease-out forwards;
    opacity: 0;
	h2 {
		font-size: 1.5em;
		line-height: 1.5em;
		margin: 0;
	}
    	h6 {
		font-size: 1em;
		line-height: 1em;
		margin-: 0;
	}
	.title_container {
		text-align: center;
		padding-bottom: 15px;
	}
	h3 {
		font-size: 1.1em;
		font-weight: normal;
		line-height: 1.5em;
		margin: 0;
	}
    label {
        font-size: 12px;
    }
	.row {
		margin: 10px -15px;
		>div {
			padding: 0 15px;
			box-sizing: border-box;
		}
	}
	.col_half {
		width: 50%;
		float: left;
	}
	.input_field {
		position: relative;
		margin-bottom: 20px;
        -webkit-animation: bounce 0.6s ease-out;
  	     animation: bounce 0.6s ease-out;
		>span {
			position: absolute;
			left: 0;
			top: 0;
			color: #333;
			height: 100%;
			border-right: 1px solid $grey;
			text-align: center;
			width: 30px;
			>i {
				padding-top: 10px;
			}
		}
	}
	.textarea_field {
		>span {
			>i {
				padding-top: 10px;
			}
		}
	}
	input {
    &[type="text"], &[type="email"], &[type="password"] {
      width: 500px;
      padding: 8px 10px 9px 35px;
      height: 35px;
      border: 1px solid $grey;
      box-sizing: border-box;
      outline: none;
      -webkit-transition: all 0.30s ease-in-out;
      -moz-transition: all 0.30s ease-in-out;
      -ms-transition: all 0.30s ease-in-out;
      transition: all 0.30s ease-in-out;
    }
    &[type="text"]:hover, &[type="email"]:hover, &[type="password"]:hover {
      background: #fafafa;
    }
    &[type="text"]:focus, &[type="email"]:focus, &[type="password"]:focus {
      -webkit-box-shadow: 0 0 2px 1px rgba(255, 169, 0, 0.5);
      -moz-box-shadow: 0 0 2px 1px rgba(255, 169, 0, 0.5);
      box-shadow: 0 0 2px 1px rgba(255, 169, 0, 0.5);
      border: 1px solid $yellow;
      background: #fafafa;
    }
    &[type="submit"] {
		background: $yellow;
		height: 35px;
		line-height: 35px;
		width: 100%;
		border: none;
		outline: none;
		cursor: pointer;
		color: #fff;
		font-size: 1.1em;
		margin-bottom: 10px;
		-webkit-transition: all 0.30s ease-in-out;
		-moz-transition: all 0.30s ease-in-out;
		-ms-transition: all 0.30s ease-in-out;
		transition: all 0.30s ease-in-out;
		&:hover {
			background: darken($yellow,7%);
		}
		&:focus {
			background: darken($yellow,7%);
		}
	}    
    &[type="checkbox"], &[type="radio"] {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  }
}
.form_container {
	.row {
		.col_half.last {
			border-left: 1px solid $grey;
		}
	}
}
.checkbox_option{
    label{
        margin-right: 1em;
        position: relative;
        &:before {
          content: "";
          display: inline-block;
          width: 1.1em;
          height: 1.1em;
          margin-right: 0.5em;
          vertical-align: -2px;
          border: 2px solid $grey;
          padding: 0.12em;
          background-color: transparent;
          background-clip: content-box;
          transition: all 0.2s ease;
        }
        &:after {
          border-right: 2px solid $black;
          border-top: 2px solid $black;
          content: "";
          height: 20px;
          left: 2px;
          position: absolute;
          top: 7px;
          transform: scaleX(-1) rotate(135deg);
          transform-origin: left top;
          width: 7px;
          display: none;
        }
    }
    input {
    &:hover + label:before {
      border-color: $black;
    }
    &:checked + label {
      &:before {
        border-color: $black;
      }
      &:after {
        -moz-animation: check 0.8s ease 0s running;
        -webkit-animation: check 0.8s ease 0s running;
        animation: check 0.8s ease 0s running;
        display: block;
        width: 7px;
        height: 20px;
        border-color: $black;
      }
    }
  }
}
.radio_option {
  label {
      margin-right: 1em;
    &:before {
      content: "";
      display: inline-block;
      width: 0.8em;
      height: 0.8em;
      margin-right: 0.5em;
      border-radius: 100%;
      vertical-align: -3px;
      border: 2px solid $grey;
      padding: 0.15em;
      background-color: transparent;
      background-clip: content-box;
      transition: all 0.2s ease;
    }
  }
  input {
    &:hover + label:before {
      border-color: $black;
    }
    &:checked + label:before {
      background-color: $black;
      border-color: $black;
    }
  }
}
.credit {
	position: relative;
	z-index: 1;
	text-align: center;
	padding: 15px;
	color: $yellow;
	a {
		color: darken($yellow,7%);
	}
}
@-webkit-keyframes check {
  0% { height: 0; width: 0; }
  25% { height: 0; width: 7px; }
  50% { height: 20px; width: 7px; }
}

@keyframes check {
  0% { height: 0; width: 0; }
  25% { height: 0; width: 7px; }
  50% { height: 20px; width: 7px; }
}

@-webkit-keyframes expand { 
	0% { -webkit-transform: scale3d(1,0,1); opacity:0; }
	25% { -webkit-transform: scale3d(1,1.2,1); }
	50% { -webkit-transform: scale3d(1,0.85,1); }
	75% { -webkit-transform: scale3d(1,1.05,1); }
	100% { -webkit-transform: scale3d(1,1,1);  opacity:1; }
}

@keyframes expand { 
	0% { -webkit-transform: scale3d(1,0,1); transform: scale3d(1,0,1);  opacity:0; }
	25% { -webkit-transform: scale3d(1,1.2,1); transform: scale3d(1,1.2,1); }
	50% { -webkit-transform: scale3d(1,0.85,1); transform: scale3d(1,0.85,1); }
	75% { -webkit-transform: scale3d(1,1.05,1); transform: scale3d(1,1.05,1); }
	100% { -webkit-transform: scale3d(1,1,1); transform: scale3d(1,1,1);  opacity:1; }
}


@-webkit-keyframes bounce { 
	0% { -webkit-transform: translate3d(0,-25px,0); opacity:0; }
	25% { -webkit-transform: translate3d(0,10px,0); }
	50% { -webkit-transform: translate3d(0,-6px,0); }
	75% { -webkit-transform: translate3d(0,2px,0); }
	100% { -webkit-transform: translate3d(0,0,0); opacity: 1; }
}

@keyframes bounce { 
	0% { -webkit-transform: translate3d(0,-25px,0); transform: translate3d(0,-25px,0); opacity:0; }
	25% { -webkit-transform: translate3d(0,10px,0); transform: translate3d(0,10px,0); }
	50% { -webkit-transform: translate3d(0,-6px,0); transform: translate3d(0,-6px,0); }
	75% { -webkit-transform: translate3d(0,2px,0); transform: translate3d(0,2px,0); }
	100% { -webkit-transform: translate3d(0,0,0); transform: translate3d(0,0,0); opacity: 1; }
}
@media (max-width: 600px) {
	.form_wrapper {
		.col_half {
			width: 100%;
			float: none;
		}
	}
	.bottom_row {
		.col_half {
			width: 50%;
			float: left;
		}
	}
	.form_container {
		.row {
			.col_half.last {
				border-left: none;
			}
		}
	}
	.remember_me {
		padding-bottom: 20px;
	}
}
</style>