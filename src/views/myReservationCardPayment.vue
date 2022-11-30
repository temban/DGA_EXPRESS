<template>
    <div >
        <div >
      <lognavVue />
    </div>

        <b-container style="margin-bottom:10px; margin-top: 40px;">
      <b-row align-v="start">
        <!-- About Hotel -->
        <b-col lg="6" class="mb-2 mb-lg-0">

          <div class="card" style="border-radius:15px;height:60% ">

            <div class="card-body text-center">
              <div class="mt-1 mb-1">
                <div v-if="profileImage === ''" class="mt-1 mb-1">
                  <img src="@/assets/img/hotels/59710428.png" class="rounded-circle img-fluid" style="border-radius: 160px;
                    image-resolution: 3000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:300px; width: 300px;" />
                </div>

                <img v-else :src="'https://dga-express.com:8443/' + this.profileImage" style="border-radius:55px;
                image-resolution: -300000000dpi;  
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    flex-shrink: 0;
                     max-width: 100%;
                      max-height: 100%;
                      height:300px; width: 350px;
                " />

              </div>
              <h4 style="color: black;text-transform: capitalize" class="mb-2">{{this.names}}</h4>
              
              <div style="color: black; margin-top:-100px; padding: 0px;"
                class="d-flex justify-content-between text-center mt-3 mb-2">

                <div style="position:relative; width: 50%; padding: 0px;">
                  <p class="mb-2 h5" style="font-size: 18px;animation: fadeIn 5s;">De</p>
                  <p class="text-muted mb-0"><i class="fas fa-map-marker-alt mr-2 text-primary"></i>{{
                      departuretown 
                  }}</p>
                  <p class="text-muted mb-0"><i class="fas fa-clock mr-2 text-primary"></i>{{ arrivaldate }}</p>
                </div>

                <div style="position:relative; width: 50%; padding: 0px;">
                  <p class="mb-2 h5" style="font-size:18px; animation: fadeIn 5s;">À</p>
                  <p class="text-muted mb-0 mx-0"><i class="fas fa-map-marker-alt mr-2 text-primary"></i>{{
                      destinationtown
                  }}</p>
                  <p class="text-muted mb-0"><i class="fas fa-clock mr-2 text-primary"></i>{{ departuredate }}</p>
                </div>

              </div>
<hr/>

              <div>
                <i class="fas fa-weight-hanging mr-0 text-primary"></i>
                <span  style="color: black">{{ this.quantitykilo }}Kg</span
                  > 
                <span class="mx-2"></span>
              </div>

              <div style="margin-left:-14px">
                <!-- document -->
                <span>
                  <i class="fas fa-file-invoice mr-2 text-primary"></i><span style="color: black">Document(s):   {{ quantityDocument
                      }}</span>
                </span>
                <!--    <span v-else>
              <p>No Documents</p>
            </span> -->
              </div>

              <div style="margin-left:-32px">
                <!-- pc -->
                <span class="mx-2"></span>
                <span>
                    <span style="color: black"> <i class="fas fa-laptop mr-2 text-primary"></i>Ordinateur(s):   {{ quantityComputer
                      }}</span>
                </span>
                <!--   <span v-else>
              <p>No Computer</p>
            </span> -->
              </div>

              <div style="position: relative; margin-top: 20px; margin-bottom: 0px; margin-left: 160px;">
                <!-- pc -->
                
                    <span style="color: black; font-size: large; font-weight: bold; position: relative; margin-top: 20px;"> <i class="fas fa-money mr-2 text-primary"></i>Prix Total: {{ totalPrice }} <span style="color:blue"> € </span></span>
               
                <!--   <span v-else>
              <p>No Computer</p>
            </span> -->
              </div>
            </div>
          </div>
        </b-col>



        <b-col lg="6" class="sticky p-lg-0">
          <div class="shadow" style="border-radius:15px;height:80%">
            <div style="position:relative; margin:30px">

	<div class='card'>
		<div class='front'>
			<div class='top'>
				<div class='chip'></div>
				<div class='cardType'><svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" id="svg10306" viewBox="0 0 500.00001 162.81594" height="162.81593" width="500">
		<defs id="defs10308">
			<clipPath id="clipPath10271" clipPathUnits="userSpaceOnUse">
				<path id="path10273" d="m 413.742,90.435 c -0.057,-4.494 4.005,-7.002 7.065,-8.493 3.144,-1.53 4.2,-2.511 4.188,-3.879 -0.024,-2.094 -2.508,-3.018 -4.833,-3.054 -4.056,-0.063 -6.414,1.095 -8.289,1.971 l -1.461,-6.837 c 1.881,-0.867 5.364,-1.623 8.976,-1.656 8.478,0 14.025,4.185 14.055,10.674 0.033,8.235 -11.391,8.691 -11.313,12.372 0.027,1.116 1.092,2.307 3.426,2.61 1.155,0.153 4.344,0.27 7.959,-1.395 l 1.419,6.615 c -1.944,0.708 -4.443,1.386 -7.554,1.386 -7.98,0 -13.593,-4.242 -13.638,-10.314 m 34.827,9.744 c -1.548,0 -2.853,-0.903 -3.435,-2.289 l -12.111,-28.917 8.472,0 1.686,4.659 10.353,0 0.978,-4.659 7.467,0 -6.516,31.206 -6.894,0 m 1.185,-8.43 2.445,-11.718 -6.696,0 4.251,11.718 m -46.284,8.43 -6.678,-31.206 8.073,0 6.675,31.206 -8.07,0 m -11.943,0 -8.403,-21.24 -3.399,18.06 c -0.399,2.016 -1.974,3.18 -3.723,3.18 l -13.737,0 -0.192,-0.906 c 2.82,-0.612 6.024,-1.599 7.965,-2.655 1.188,-0.645 1.527,-1.209 1.917,-2.742 l 6.438,-24.903 8.532,0 13.08,31.206 -8.478,0"/>
			</clipPath>
			<linearGradient id="linearGradient10277" spreadMethod="pad" gradientTransform="matrix(84.1995,31.0088,31.0088,-84.1995,19.512,-27.4192)" gradientUnits="userSpaceOnUse" y2="0" x2="1" y1="0" x1="0">
				<stop id="stop10279" offset="0" style="stop-opacity:1;stop-color:#222357"/>
				<stop id="stop10281" offset="1" style="stop-opacity:1;stop-color:#254aa5"/>
			</linearGradient>
		</defs>
		<metadata id="metadata10311">
			<rdf:RDF>
				<cc:Work rdf:about="">
					<dc:format>image/svg+xml</dc:format>
					<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
					<dc:title/>
				</cc:Work>
			</rdf:RDF>
		</metadata>
		<g transform="translate(-333.70157,-536.42431)" id="layer1">
			<g id="g10267" transform="matrix(4.9846856,0,0,-4.9846856,-1470.1185,1039.6264)">
				<g clip-path="url(#clipPath10271)" id="g10269">
					<g transform="translate(351.611,96.896)" id="g10275">
						<path id="path10283" style="fill: white;fill-opacity:1;fill-rule:nonzero;stroke:none" d="M 0,0 98.437,36.252 120.831,-24.557 22.395,-60.809"/>
					</g>
				</g>
			</g>
		</g>
	</svg></div>
			</div>
			<div class='middle'>
				<div class='cd-number'>
					<p><span class='num-1'>1234</span><span class='num-2'>1234</span><span class='num-3'>1234</span><span class='num-4'>1234</span></p>
				</div>
			</div>	
			<div class='bottom'>
				<div class='cardholder'>
					<p class='label'>Titulaire de la Carte</p>
					<p class='holder'>{{firstName+" "+ lastName}}</p>
				</div>
				<div class='expires'>
					<p class='label'>Expirer Le</p>
					<p><span class='month'>09</span>/<span class='year'>19</span></p>
				</div>
			</div>
		</div>
		<div class='back'>
			<div class='top'>
				<div class='magstripe'></div>
			</div>
			<div class='middle'>
				<p class='label'>CVC</p>
				<div class='cvc'>
					<p>123</p>
				</div>	
			</div>
			<div class='bottom'>

			</div>	
		</div>		
	</div>
	<div class='form'>
			<div class='cd-numbers'>
				<label>Numéro de Carte</label>
      <div id="card-number" class="field"></div>
			</div>	
			
			<div class='cd-validate'>
				<div class='expiration'>
					<div >
                        <div style="position:relative; display:flex;" >
                            <label for='month' style="position:relative; margin-left: 15px">Mois</label ><label for='year' style="position:relative; margin-left: 24px">  L'année</label>
                        </div>
						
						<div id="card-expiry" class="field" style="position:relative;  width: 120px; margin-left:2px"></div>
					</div>
				</div>
				<div class='cvc' >
					<label for='cvc' style="position:relative; margin-right: 20px;">CVC</label>
                    <div id="card-cvc" class="field" style="position:relative; margin-right: 2px; width: 100px;"></div>
      
				</div>

                
			</div>
            <div id="card-error" style="position:relative; margin: 20px 0 10px 90px ; color: red;"></div>
			<button class='submit' type="button" @click="createToken"><i class="fa fa-credit-card" aria-hidden="true" style="font-size: 20px;">  Payer</i>
                <div class="spinner-border text-light spinner-border-sm" style="position:relative; margin-left: 10px;" role="status" v-if="pay">
          <span class="sr-only">Loading...</span></div></button>
	
	</div>	

        
    </div>

          </div>
        </b-col>
      </b-row>

    </b-container>
    <!--  -->
    <div style="position:relative; margin-bottom:-60px; left:0; right:0"> <footerVue /></div>
    </div>
  </template>
  
  <script>
import $ from "jquery";
import Swal from "sweetalert2";
import footerVue from "@/components/footer.vue";
import lognavVue from "../components/lognav.vue";
  export default {
    data () {
      return {
        departuretown: localStorage.getItem("Payment_departuretown"),
        destinationtown : localStorage.getItem("Payment_destinationtown"),
        departuredate:  localStorage.getItem("Payment_departuredate"),
        arrivaldate:  localStorage.getItem("Payment_arrivaldate"),
        names:   localStorage.getItem("Payment_name"),
        quantityDocument:  localStorage.getItem("Payment_quantityDocument"),
        quantityComputer: localStorage.getItem("Payment_quantityComputer"),
        description:      localStorage.getItem("Payment_description"),
        profileImage:  localStorage.getItem("Payment_profileImage"),
        quantitykilo:  localStorage.getItem("Payment_quantitykilo"), 
        totalPrice: localStorage.getItem("Payment_total_Price"),
        lastName: localStorage.getItem("lastName"),
        firstName:localStorage.getItem("firstName"),
        pay: false,
        token: null,
        cardNumber: null,
        cardExpiry: null,
        cardCvc: null,
        subInfo: [],
      };
    },
    components: {
    lognavVue,
    footerVue,
  },
    computed: {
      stripeElements () {
        return this.$stripe.elements();
      },
    },
    mounted () {


        $(".form").find(".cd-numbers").find(".fields").find("input").on('keyup change', function(e){
		
		var charLength = $(this).val().length;
	
		$(".card").removeClass("flip");
		
		if(charLength == 4){
			$(this).next("input").focus();
		}
	
		if($(this).hasClass("1")){
			var inputVal = $(this).val();
			if(!inputVal.length == 0){
				$(".card").find(".front").find(".cd-number").find("span.num-1").text(inputVal);
			}
		}
	
		if($(this).hasClass("2")){
			let inputVal = $(this).val();
			if(!inputVal.length == 0){
				$(".card").find(".front").find(".cd-number").find("span.num-2").text(inputVal);
			}
		}	
	
		if($(this).hasClass("3")){
			let inputVal = $(this).val();
			if(!inputVal.length == 0){
				$(".card").find(".front").find(".cd-number").find("span.num-3").text(inputVal);
			}
		}	
	
		if($(this).hasClass("4")){
			let inputVal = $(this).val();
			if(!inputVal.length == 0){
				$(".card").find(".front").find(".cd-number").find("span.num-4").text(inputVal);
			}
		}	
	
        console.log(e)}); 
$(".form").find(".cd-holder").find("input").on('keyup change', function(e){
	var inputValCdHolder = $(this).val();

	$(".card").removeClass("flip");	
	
	if(!inputValCdHolder.length == 0){
		$(".card").find(".front").find(".bottom").find(".cardholder").find("p.holder").text(inputValCdHolder)
	}
	
    console.log(e)});
$(".form").find(".cd-validate").find(".cvc").find('input').on('keyup change', function(e){
	var inputCvcVal = $(this).val();
	
	if(!inputCvcVal.length == 0){
		$(".card").addClass("flip").find(".cvc").find("p").text(inputCvcVal);
	}else	if(inputCvcVal.length == 0){
		$(".card").removeClass("flip");
	} 
    console.log(e)});


$(".form").find(".cd-validate").find(".expiration").find('select#month').on('keyup change', function(){
	
	$(".card").removeClass("flip");	
	if(!$(this).val().length == 0){
		$(".card").find('.bottom').find('.expires').find("p").find("span.month").text($(this).val())
	}
	
});
$(".form").find(".cd-validate").find(".expiration").find('select#year').on('keyup change', function(){
	
	$(".card").removeClass("flip");	
	if(!$(this).val().length == 0){
		$(".card").find('.bottom').find('.expires').find("p").find("span.year").text($(this).val())
	}
	
});
$("button.submit").on('click', function(e){
	e.preventDefault();
	$(this).parents("form").submit();
});


      // Style Object documentation here: https://stripe.com/docs/js/appendix/style
      const style = {
        base: {
            iconColor: '#c4f0ff',
          color: 'black',
          fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
          fontSmoothing: 'antialiased',
          fontSize: '20px',
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

created(){
    var requestOptions1 = { method: 'GET', redirect: 'follow' };

    fetch("https://dga-express.com:8443/sub/informations/view", requestOptions1)
      .then(response => response.text())
      .then(result => {
        if (JSON.parse(result).length !== 0) {
          this.subInfo = JSON.parse(result)[0]
        }
      })
      .catch(error => { 
        localStorage.clear()
        window.location.href = "/"
        console.log('error', error)});
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
        this.pay = true;
  var config = {
    method: 'post',
    url: `https://dga-express.com:8443/payment/reservations?amount=${this.totalPrice *100}&description=Reservation&token=${token.id}&currency=EUR&email=${localStorage.getItem("email")}`,
    headers: { 
      'Content-Type': 'application/json',
      Authorization: "Bearer " + localStorage.getItem("access-token"),
    }
  };
  
  axios(config)
  .then(function (response) {
    console.log(response.data);
    let revPayment = [];
    revPayment = response.data;
    localStorage.setItem("revPayment", JSON.stringify(revPayment))

    window.location.href='/reservationPayementComplete';
  })
  .catch(function (error) {
    Swal.fire("Échec!", "Quelque chose s'est mal passé!.", "error");
    // window.location.reload();
    console.log(error);
  });
  
      },
    }
  };
  </script>
  
  <style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: "Ubuntu", sans-serif;
  }
  
  input, select, textarea {
    font-family: "Ubuntu", sans-serif;
  }
  
  .credits {
    padding: 20px;
    font-size: 25px;
  }
  .credits a {
    color: #4FB0C6;
    text-decoration: none;
    font-weight: 700;
  }
  
  .card {
    position: relative;
    color: white;
    transform-style: preserve-3d;
    transition: 0.5s ease-in-out;
    widtH: 400px;
    height: 250px;
    margin: auto;
    z-index: 2;
  }
  @media (max-widtH: 500px) {
    .card {
      widtH: 300px;
      height: 187.5px;
    }
  }
  .card:hover, .card.flip {
    transform: rotateY(180deg);
  }
  .card.flip:hover {
    transform: rotateY(0deg);
  }
  .card .front,
  .card .back {
    widtH: 400px;
    height: 250px;
    background: linear-gradient(-45deg, #4FB0C6, #3e79be);
    padding: 20px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
    overflow: hidden;
    transition: 0.5s ease-in-out;
  }
  @media (max-widtH: 500px) {
    .card .front,
  .card .back {
      widtH: 300px;
      height: 187.5px;
    }
  }
  .card .front:after,
  .card .back:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    widtH: 400px;
    height: 250px;
    transition: 0.5s ease-in-out;
    z-index: -1;
    opacity: 0.15;
    background-image: url("http://image.flaticon.com/icons/svg/126/126511.svg");
    background-repeat: no-repeat;
    background-size: 75%;
    background-position: 150px center;
  }
  @media (max-widtH: 500px) {
    .card .front:after,
  .card .back:after {
      widtH: 300px;
      height: 187.5px;
    }
  }
  .card .front {
    z-index: 5;
    transform: rotateY(0deg);
  }
  .card .back {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: rotateY(180deg);
  }
  .card .back .label {
    font-size: 12.5px;
    font-weight: bold;
    color: rgba(233, 245, 248, 0.85);
    margin-right: 5px;
  }
  .card .back .top {
    padding-top: 40px;
    transition: 0.5s ease-in-out;
  }
  @media (max-width: 500px) {
    .card .back .top {
      padding-top: 15px;
    }
  }
  .card .back .top .magstripe {
    width: 100%;
    height: 50px;
    background: #333;
  }
  .card .back .middle {
    margin-top: -40px;
    padding: 0 20px;
    text-align: right;
  }
  .card .back .middle .cvc {
   
  }
  .card .front {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card .front .middle .cd-number p {
    margin-bottom: 0;
  }
  .card .front .middle .cd-number p span {
    margin-right: 20px;
    font-size: 25px;
    font-size: 20px;
  }
  .card .front .bottom {
    display: flex;
    justify-content: space-between;
  }
  .card .front .bottom .cardholder .label,
  .card .front .bottom .expires .label {
    font-size: 12.5px;
    font-weight: bold;
    color: rgba(233, 245, 248, 0.85);
  }
  .card .front .top {
    display: flex;
    justify-content: space-between;
  }
  .card .front .top .cardType svg, .card .front .top .cardType img {
    width: 70px;
    height: 50px;
    transition: 0.5s ease-in-out;
  }
  @media (max-widtH: 500px) {
    .card .front .top .cardType svg, .card .front .top .cardType img {
      width: 50px;
      height: 35px;
    }
  }
  .card .front .top .chip {
    width: 70px;
    height: 50px;
    background: linear-gradient(-45deg, #e1e7ed, #9baec8);
    position: relative;
    border-radius: 5px;
    transition: 0.5s ease-in-out;
  }
  @media (max-widtH: 500px) {
    .card .front .top .chip {
      width: 50px;
      height: 35px;
    }
  }
  .card .front .top .chip:after {
    content: "";
    display: block;
    width: 50px;
    height: 30px;
    transition: 0.5s ease-in-out;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #5a79a3;
    opacity: 0.35;
    border-radius: 5px;
  }
  @media (max-widtH: 500px) {
    .card .front .top .chip:after {
      width: 35px;
      height: 20px;
    }
  }
  
  .form {
    width: 450px;
    margin: auto;
    padding: 20px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.35);
    margin-top: -20px;
    border-radius: 10px;
    transition: 0.5s ease-in-out;
  }
  .form button.submit {
    display: block;
    padding: 5px 5px;
    width: 100%;
    height: 40px;
    margin-top: 20px;
    background: orange;
    color: white;
    border-radius: 5px;
    outline: 0;
    border: none;
    transition: 0.15s ease-in-out;
  }
  .form button.submit:hover {
    background: rgb(227, 140, 0);
  }
  @media (max-widtH: 500px) {
    .form {
      width: 300px;
      margin-top: -25px;
    }
  }
  .form input, .form select {
    padding: 10px 5px;
    border-radius: 5px;
    outline: 0;
    border: none;
    box-shadow: 0px 0px 5px #2b90d9;
  }
  .form .cd-validate {
    display: flex;
    justify-content: space-between;
  }
  .form .cd-validate .expiration {
    display: flex;
    justify-content: space-between;
  }
  .form .cd-validate .expiration .field:last-child {
    margin-left: 10px;
  }
  .form .cd-validate .cvc {
    text-align: right;
  }
  .form .cd-validate .cvc input#cvc {
    width: 50px;
  }
  .form .cd-validate label {
    display: block;
    margin-bottom: 10px;
  }
  .form .cd-holder {
    margin: 20px 0;
  }
  .form .cd-holder label {
    display: block;
    margin-bottom: 10px;
  }
  .form .cd-holder input {
    width: 100%;
  }
  .form .cd-numbers {
    margin: 20px 0;
  }
  .form .cd-numbers label {
    display: block;
    margin-bottom: 10px;
  }
  .form .cd-numbers .fields {
    display: flex;
  }
  .form .cd-numbers .fields input {
    width: 100%;
    margin: 0 10px;
  }
  .form .cd-numbers .fields input:first-child {
    margin-left: 0;
  }
  .form .cd-numbers .fields input:last-child {
    margin-right: 0;
  }

  label {
  position: relative;
  color: #6A7C94;
  font-weight: 400;
  display: flex;
  flex-direction: row;
}



.field {
  position: relative;
  background: white;
  box-sizing: border-box;
  font-weight: bold;
  background-color: white;
  border: 1px solid #CFD7DF;
  border-radius: 10px;
  color: #62c0fe;
  outline: none;
  flex: 1;
  height: 40px;
  line-height: 48px;
  padding: 7px 0px 10px 18px;
  margin-top: -5px;
  cursor: text;
}

.field::-webkit-input-placeholder { color: #CFD7DF; }
.field::-moz-placeholder { color: #CFD7DF; }

.field:focus,
.field.StripeElement--focus {
  border-color: #F99A52;
}
  </style>