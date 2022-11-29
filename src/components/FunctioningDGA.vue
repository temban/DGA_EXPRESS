<template>
<div>

 <section class="text-center about">
      <h1 style="	color: #000000;
	padding-top: 20px;
	padding-bottom: 30px;">Bon à Savoir!</h1>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200" >
            <span class="fa fa-group"></span>
            <h2>Section 1</h2>
            <p class="lead">
				Avec DGA-Express, tout vos colis seront en securite, les transactions seront rapide
				et tout  
				
			</p>
          </div>
          <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
            <span class="fa fa-info"></span>
            <h2>Section 2 </h2>
            <p class="lead">Pour tout vos probleme sur l'utilisation de la plateforme, par rapport à vos transactions, veuillez entrer dans la page contact et suivre les instructions</p>
          </div>
          <div class="clearfix visible-md-block visible-sm-block"></div>
          <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
            <span class="fa fa-file"></span>
            <h2>Section 3</h2>
            <p class="lead">Les prix de transport de document et d'ordinateur, la devise utilisée  pour vos transactions sont défini au préalable par DGA</p>
          </div>
          
        </div>
        
      </div>
    </section>

</div>
</template>

<script>

export default {
  name: "FunctioningDGA",

  data() {
    return {
        
    }
  },
};
</script>
<style lang="scss">
.about{
	cursor: pointer;
	background-color: #dff5fa;
	color: #0099ff;
	padding-top: 20px;
	padding-bottom: 30px;
}

.about h1 {
	padding: 10px 0;
	margin-bottom: 20px;
}
.about h2 {
	opacity: .8;
}
.about span {
	display: block;
	width: 100px;
	height: 100px;
	line-height: 100px;
	margin:auto;
	border-radius:50%;  
	font-size: 40px;
	color: #FFFFFF;
	opacity: 0.7;
	background-color: #f55f09;
	border: 2px solid #fa7528;

	webkit-transition:all .5s ease;
 	moz-transition:all .5s ease;
 	os-transition:all .5s ease;
 	transition:all .5s ease;

}
.about-item:hover span{
	opacity: 1;	
	border: 2px solid #ff5100;
	font-size: 42px;
	-webkit-transform: scale(1.1,1.1) rotate(360deg) ;
	-moz-transform: scale(1.1,1.1) rotate(360deg) ;
	-o-transform: scale(1.1,1.1) rotate(360deg) ;
	transform: scale(1.1,1.1) rotate(360deg) ;
}
.about-item:hover h2{
	opacity: 1;
	-webkit-transform: scale(1.1,1.1)  ;
	-moz-transform: scale(1.1,1.1)  ;
	-o-transform: scale(1.1,1.1)  ;
	transform: scale(1.1,1.1) ;
}
.about .lead{
	color: #000000;
	font-size: 14px;
	font-weight: bold;
}				              
</style>