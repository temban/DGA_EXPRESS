<template>
  <div>
    <b-button v-b-modal.modal-multi-5 variant="outline-primary" size="sm">Register</b-button>
    <b-modal id="modal-multi-5" title="Create Your DGA Account" hide-footer>
      <div class="box-container">
        <form @submit="signup">


          <div v-if="loading" class="loader"></div>

          <div v-if="load" class="wrapper">
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
              <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>

          <h2 class="heading">Sign In</h2>
          <div class="form-fields">
            <input v-model="firstName" id="firstName" name="firstName" type="name" placeholder="First Name" required />
          </div>
          <div class="form-fields">
            <input v-model="lastName" id="lastName" name="lastName" type="nane" placeholder="Last Name" required />
          </div>

          <div class="form-fields">
            <input v-model="pseudo" id="pseudo" name="lastName" type="nane" placeholder="Pseudo" required />
          </div>
          <div class="form-fields">
            <input v-model="tel" min="9" id="tel" name="tel" type="tel" placeholder="Phone Number" required />
          </div>

          <div class="form-fields">
            <input v-model="email" id="email" name="email" type="email" placeholder="Email Address" required />
          </div>
          <div :class="'form-fields '+t">
            <input v-model="password" type="password" name="pass" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              placeholder="Password" 
              required />
          </div>
          <div :class="'form-fields '+t ">
            <input v-model="confPassword" type="password" @keyup="verif" name="pass" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              placeholder="Confirm password" 
              required />
          </div>

          <div>
            <p class="center">
              <input type="checkbox" class="ui-checkbox__input"
                onkeyup="if(this.value.length > 0) document.getElementById('register').disabled = false; else document.getElementById('register').disabled = true;"
                required />
              I Agree
              <a href="/Conditions"><u style="color: blue">Terms of Service</u></a>.
            </p>
          </div>
          <div class="form-fields">
            <button class="signIn" name="commit" type="submit">Sign In</button>
          </div>
          <div class="login-choice"><span>or Sign In with</span></div>
          <SocialLogin />
        </form>
        <div class="footer">
          <p>
            Already have an account?
            <a v-b-modal.modal-multi-4> <u style="color: blue">Sign In</u></a>
          </p>
        </div>
      </div>
    </b-modal>
    <b-modal id="modal-multi-3" title="Third Modal" ok-only>
      <h1 class="my-1">Third Modal</h1>
      <p>
        These clauses address what behavior is unacceptable on your website.
        They are an opportunity to set out the rules that you expect users to
        abide by, and what the consequences will be if the user violates these
        rules. It's helpful to set out specific examples of behavior that
        violates your site rules. The Oath Terms of Service sets out the
        behavior that it deems unacceptable. It uses broad language such as
        "Make available any content...that is otherwise objectionable" to avoid
        restricting content violations to, for example, sexually explicit or
        vulgar content:
      </p>
    </b-modal>
  </div>
</template>

<script>
import SocialLogin from "@/components/SocialLogin";
import Swal from "sweetalert2";
export default {
  name: "Signup",
  components: {
    SocialLogin,
  },
  data() {
    return {
      loading: false,
      load: false,
      firstName: "",
      lastName: "",
      pseudo: "",
      email: "",
      tel: "",
      password: "",
      confPassword: "",
      t:'',
    };
  },

  async created() {
    const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#password");

    togglePassword.addEventListener("click", function () {
      // toggle the type attribute
      const type =
        password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);

      // toggle the icon
      this.classList.toggle("bi-eye");
    });

    // prevent form submit
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
    });
  },

  methods: {
    signup(event) {
      this.loading = true;
      event.preventDefault();
      var axios = require("axios");
      var data = JSON.stringify({
        "firstName": this.firstName,
        "lastName": this.lastName,
        "pseudo": this.pseudo,
        "phone": this.tel,
        "profileimgage": "",
        "email": this.email,
        "password": this.password,
      });

      var config = {
        method: "post",
        url: "https://dga-express.com:8443/signup",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          if (response.status === 200) {
            Swal.fire("Registration success", "welcome", "success");
          }
          this.loading = false;
          this.load = true;
          console.log(JSON.stringify(response));


          //window.location.href = "/";
        })
        .catch(function (error) {
          console.log(error);
          if (error.response.status === 500) {
            Swal.fire("Registration Failed!", "User Already Exist!.", "error");
          }
          if (error.response.status === 404) {
            Swal.fire("Failed!", "Something Went Wrong!.", "error");
          }
        });
    },
    verif(){
      if (this.password == this.confPassword) {
        this.t = "green"
      }else{
        this.t = "red"
      }
    }
  },
};
</script>

<style>
.green{
  box-shadow: inset 0 0 5px green;
  box-shadow: 0 0 10px green;
}
.red{
  box-shadow: inset 0 0 5px red;
  box-shadow:  0 0 10px red;
}
.passwordInput {
  margin-top: 5%;
  text-align: center;
}

.displayBadge {
  margin-top: 5%;
  display: none;
  text-align: center;
}

* {
  padding: 0;
  margin: 0;
}

.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation: fill 0.4s ease-in-out 0.4s forwards,
    scale 0.3s ease-in-out 0.9s both;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {

  0%,
  100% {
    transform: none;
  }

  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #7ac142;
  }
}
</style>
