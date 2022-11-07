<template>
    
    <div class="padding">
                                                <div class="card user-card-full">
                                                    <div class="row m-l-0 m-r-0">

  
    <div class="col-sm-5 bg-c-lite-green user-profile"> 
                                                            <div class="card-block text-center text-white">
                                                                <div id="block1">
                                                                <div class="m-b-25">
                                                                    <img src="@/assets/img/logo.png" class="img-radius" alt="user-profile-Image">
                                                                </div></div>
                                                        </div>

  </div>
                                                       


                                                        <div class="col-sm-7">
                                                            <div class="card-block">
<div id="block2"> 
<div class="wrapper-2">
      <h1>Paiement Réussi!</h1>
      
      <div class="container d-flex justify-content-center mt-5">

<div class="card1">
    
    <div class="top-container">
        
        <img v-if="profile ===''" src="@/assets/img/hotels/59710428.png" class="img-fluid profile-image" width="70">
        <img v-else :src="'http://46.105.36.240:3000/' + profile" class="img-fluid profile-image" width="70">
        <div class="ml-3">
            <h2 class="name">{{firstname+ " " +lastname}}</h2>
            <p class="mail">{{email}}</p>
        </div>
    </div>
    <div  class="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
        <div class="recent-border"> <span style="position:relative; margin-left:6px"> Identifiant de Transaction:</span></div>
        <h2 class="d-flex flex-column text-right mr-">  <span class="recent-orders" >{{this.id}}</span></h2>
    </div>
    

    <div class="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
            <div class="dollar-div px-3">
                
                <div class="round-div"><i class="fa fa-dollar dollar"></i></div>

            </div>
          
            <div class="d-flex flex-column text-right mr-2">
                <span class="current-balance">Montant</span>
                <span class="amount">{{this.amount/100 }}<span class="dollar-sign">{{this.currency}}</span></span>
            </div>

    </div>

    <div class="recent-border mt-4">
        <span class="recent-orders">La Description: </span>

        <div class="fashion-studio-border">
            <span class="wishlist" style=" position: relative;
    margin-left: 40px;">{{this.description}}</span> 
    </div>
       
    </div>
    
    
</div>

</div>

      
    </div>
  </div>                                                         <div class="wrapper-1">
    
    
</div>
                                         
<div style="position:relative; display:flex;">
    <a style="position:relative;margin-left:100px;" href='/'>
        <button class="go-home"><i class="fa fa-home" aria-hidden="true"></i>
      Acceuil
      </button>
    </a>

    


    <div style="position:relative;margin-left:100px; ">
        <div class="flex">
  <a href="javascript:void(0)" class="btn btn-download">Generate PDF</a>
</div>
        
    </div>

</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            


  
                                          



</template>

<script>
import $ from "jquery";
import html2pdf from "html2pdf.js";
export default{
    data() {
    return {
        id: JSON.parse(localStorage.getItem("revPayment")).id,
        currency:JSON.parse(localStorage.getItem("revPayment")).currency,
        description:JSON.parse(localStorage.getItem("revPayment")).description,
        amount:JSON.parse(localStorage.getItem("revPayment")).amount,
        paymentInfo:[],
        lastname: localStorage.getItem("lastName"),
        firstname:localStorage.getItem("firstName"),
        email:localStorage.getItem("email"),
        profile:localStorage.getItem("profileImage"),
    };
  },
  components: {
  },
   mounted(){
    const options = {
  margin: 0.3,
  filename: 'Reçu_de_Réservation.pdf',
  image: { 
    type: 'jpeg', 
    quality: 0.98,
  },
  html2canvas: { 
    scale: 2,
  },
  jsPDF: { 
    unit: 'in',
    format: 'a4',
    orientation: 'portrait',
  }
}

var objstr = document.getElementById('block1').innerHTML;
var objstr1 = document.getElementById('block2').innerHTML;

var strr = '<html><head><title>Testing</title>';   
strr += '</head><body>';
strr += '<div style="position: relative;margin-top: -160px">'+objstr+'</div>';
strr += '<div style="position: relative;margin-top: -170px;border:0.1rem solid #ccc!important;padding:0.5rem 1.5rem 0.5rem 1.5rem;">'+objstr1+'</div>';
strr += '</body></html>';



$('.btn-download').click(function(e){
  e.preventDefault();
  var element = document.getElementById('demo');
  //html2pdf().from(element).set(options).save();
  html2pdf(element);
 
  html2pdf().from(strr).set(options).save();
  
});

    
},

methods: {

},
}
</script>

<style>
*{
  box-sizing:border-box;
 /* outline:1px solid ;*/
}
body{
background: #ffffff;
background: linear-gradient(to bottom, #ffffff 0%,#e1e8ed 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e1e8ed',GradientType=0 );
    height: 100%;
        margin: 0;
        background-repeat: no-repeat;
        background-attachment: fixed;
  
}
.flex{
    position: relative;
    margin-top: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  position: relative;
}
.square{
  width: 50px;
  height: 50px;
  background-color: #333;
  color: #FAFAFA;
  text-align: center;
  margin-right: 5px;
  cursor: pointer;
}
.square:hover{
  opacity: 0.8;
}
.rectangle{
  background-color: #333;
  margin: 10px 0;
  padding: 20px;
  width: 175px;
  color: #FAFAFA;
}
.img-absolute{
  position: absolute;
  left: 50%;
  top: 0;
  width: 56%;
}
.btn-download{
  display: inline-block;
  text-decoration: none;
  background-color: salmon;
  color: #FAFAFA;
  padding: 10px 62px;
  margin: 10px auto;
  box-shadow: 0 10px 16px 1px rgba(174, 199, 251, 1);
}
.btn-download:hover{
  opacity: 0.8;
}


/* NEW STYLE EDIT */
#block1{
  font-family: "Times New Roman", serif;
}

.wrapper-1{
  width:100%;
  display: flex;
flex-direction: column;
}

.wrapper-2{
  padding :30px;
  text-align:center;
  
}
h1{
    font-family: 'Kaushan Script', cursive;
  font-size:4em;
  letter-spacing:3px;
  color:#ff8001 ;
  margin:0;
  margin-bottom:20px;
}

.go-home{
  color:#fff;
  background:#58c5ff;
  border:none;
  padding:10px 50px;
  margin:30px 0;
  border-radius:6px;
  height: 45px;
  text-transform:capitalize;
  box-shadow: 0 10px 16px 1px rgba(174, 199, 251, 1);
}
.footer-like{
  margin-top: auto; 
  background:#D7E6FE;
  padding:6px;
  text-align:center;
}
.footer-like p{
  margin:0;
  padding:4px;
  color:#5892FF;
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing:1px;
}
.footer-like p a{
  text-decoration:none;
  color:#5892FF;
  font-weight:600;
}

@media (min-width:360px){
  h1{
    font-size:4.5em;
  }
  .go-home{
    margin-bottom:20px;
  }
}

@media (min-width:600px){
  .content{
  max-width:1000px;
  margin:0 auto;
}
  .wrapper-1{
  height: initial;
  max-width:820px;
  box-shadow: 4px 8px 40px 8px rgba(88, 146, 255, 0.2);
}
  
}





.padding {
    padding: 3rem !important
}

.user-card-full {
    overflow: hidden;
}

.card {
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 20px 0 rgba(69,90,100,0.08);
    box-shadow: 0 1px 20px 0 rgba(69,90,100,0.08);
    border: none;
    height: 600px;
}

.m-r-0 {
    margin-right: 0px;
}

.m-l-0 {
    margin-left: 0px;
}

.user-card-full .user-profile {
    border-radius: 5px 0 0 5px;
    height: 600px;
}

.bg-c-lite-green {
        background: -webkit-gradient(linear, left top, right top, from(#f29263), to(#1998ff));
    background: linear-gradient(to right, #1998ff,#75c1ff, #f29263);
}

.user-profile {
    padding: 20px 0;
}

.card-block {
    padding: 1.25rem;
}

.m-b-25 {
    margin-bottom: 25px;
}

.img-radius {
    border-radius: 5px;
    height: 520px;
}


 
h6 {
    font-size: 14px;
}

.card .card-block p {
    line-height: 25px;
}

@media only screen and (min-width: 1400px){
p {
    font-size: 14px;
}
}

.card-block {
    padding: 1.25rem;
}

.b-b-default {
    border-bottom: 1px solid #e0e0e0;
}

.m-b-20 {
    margin-bottom: 20px;
}

.p-b-5 {
    padding-bottom: 5px !important;
}

.card .card-block p {
    line-height: 25px;
}

.m-b-10 {
    margin-bottom: 10px;
}

.text-muted {
    color: #919aa3 !important;
}

.b-b-default {
    border-bottom: 1px solid #e0e0e0;
}

.f-w-600 {
    font-weight: 600;
}

.m-b-20 {
    margin-bottom: 20px;
}

.m-t-40 {
    margin-top: 20px;
}

.p-b-5 {
    padding-bottom: 5px !important;
}

.m-b-10 {
    margin-bottom: 10px;
}

.m-t-40 {
    margin-top: 20px;
}

.user-card-full .social-link li {
    display: inline-block;
}

.user-card-full .social-link li a {
    font-size: 20px;
    margin: 0 10px 0 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}



.card1{
    position: relative;
    margin-top: -40px;
    background-color: #fff;
    width: 600px;
}
.top-container{
    display: flex;
    align-items: center;
}
.profile-image{
    border-radius: 10px;
    border: 2px solid #00a4fc;
}
.name{
    font-size: 20px;
    font-weight: bold;
    color: #272727;
    position: relative;
    top: 8px;
}
.mail{
    font-size: 14px;
    color: grey;
    position: relative;
    top: 2px;
}
.middle-container{
    background-color: #eee;
    border-radius: 12px;

}
.middle-container:hover {
    border: 1px solid #5957f9;
}
.dollar-div{
    background-color: #5957f9;
    padding: 12px;
    border-radius: 10px;
}
.round-div{
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.dollar{
    font-size: 16px !important;
    color: #5957f9 !important;
    font-weight: bold !important;
}


.current-balance{
    font-size: 15px;
    color: #272727;
    font-weight: bold;
}
.amount{
    color: #5957f9;
    font-size: 16px;
    font-weight: bold;
}
.dollar-sign{
    font-size: 16px;
    color: #272727;
    font-weight: bold;
}

.recent-border{
    border-left: 2px solid #5957f9;
    display: flex;
    align-items: center;

}
.recent-border:hover {
    border-bottom: 1px solid #dee2e6!important;
}

.recent-orders{
    font-size: 16px;
    font-weight: 700;
    color: #5957f9;
    margin-left: 2px;
}

.wishlist{
   
    font-size: 16px;
    font-weight: 700;
    color: #272727;

}
.wishlist-border:hover{
    border-bottom: 1px solid #dee2e6!important;
}
.fashion-studio{
    font-size: 16px;
    font-weight: 700;
    color: #272727;
}
.fashion-studio-border:hover {
    border-bottom: 1px solid #dee2e6!important;
}



</style>