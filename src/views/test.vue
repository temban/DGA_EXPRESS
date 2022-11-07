<template>
  <div style="position:relative; margin: auto;
  width: 14%;
  height: 230px;
  border: 3px solid green;
  padding: 15px;">
    <label>Card Number</label>
    <div id="card-number"></div>
    <label>Card Expiry</label>
    <div id="card-expiry"></div>
    <label>Card CVC</label>
    <div id="card-cvc"></div>
    <div id="card-error"></div>
    <button style="margin-top: 20px;" id="custom-button" @click="call()">Generate Token</button>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data () {
    return {
      
      token: null,
      cardNumber: null,
      cardExpiry: null,
      cardCvc: null,
      url: './assets/img/air-transport-1.jpg'
    };
  },
  computed: {
    stripeElements () {
      return this.$stripe.elements();
    },
  },
  mounted () {
    // Style Object documentation here: https://stripe.com/docs/js/appendix/style
    const style = {
      base: {
        color: 'black',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '14px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    };
    this.cardNumber = this.stripeElements.create('cardNumber', { style });
    this.cardNumber.mount('#card-number');
    this.cardExpiry = this.stripeElements.create('cardExpiry', { style });
    this.cardExpiry.mount('#card-expiry');
    this.cardCvc = this.stripeElements.create('cardCvc', { style });
    this.cardCvc.mount('#card-cvc');
  },
  beforeDestroy () {



    this.cardNumber.destroy();
    this.cardExpiry.destroy();
    this.cardCvc.destroy();
  },
  methods: {
    async createToken () {
      const { token, error } = await this.$stripe.createToken(this.cardNumber);
      if (error) {
        // handle error here
        document.getElementById('card-error').innerHTML = error.message;
        return;
      }
      console.log(token);
      var axios = require('axios');

var config = {
  method: 'post',
  url: 'http://192.168.43.44:4000/payment?amount=120&description=one&token='+ token.id+'&currency=EUR',
  headers: { 
    'Content-Type': 'application/json'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

    },

    call(){
      const imagePath = require("../assets/img/loading1.gif");

Swal.fire({
showConfirmButton: false,
backdrop: true,
imageUrl: imagePath,
imageWidth: 360,
imageHeight: 310,
background : '#e6e6e600',
width: '280px',
// padding: 150,
// background: '#fff url(https://image.shutterstock.com/z/stock-vector--exclamation-mark-exclamation-mark-hazard-warning-symbol-flat-design-style-vector-eps-444778462.jpg)'
// timer: 1500
});
    }
  }
};
</script>

<style scoped>
body {
	background: url(../assets/img/e-commerce.jpg);
  background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: grid;
	height: 100vh;
    font-family:  "Times New Roman", Times, serif;
    font-size: 16px;
}
#custom-button {
  height: 30px;
  outline: 1px solid grey;
  background-color: green;
  padding: 5px;
  color: white;
}

#card-error {
  color: red;
}
</style>