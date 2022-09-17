<template>
<div> 
     <b-modal id="modal-multi-4" title="DGA Express" hide-footer>
   
    <form @submit="onSubmit">
        <div style="margin: 10px 0 10px 200px;" v-if="loding" class="loader"></div>
        <h2 class="heading">S'identifier</h2>
        <div class="form-fields">
          <input v-model="useremail" id="email" name="email" type="email" placeholder="E-mail" required>
        </div>
        <div class="form-fields">
          <input v-model="password"  id="password" name="password" type="password" placeholder="Mot de Passe" required>
        </div>
        <div class="form-fields">
          <button class="signIn" name="commit" type="submit" >
            S'identifier<div class="spinner-border text-light spinner-border-sm" role="status" v-if="login" style="margin-left:10px">
          <span class="sr-only" >Loading...</span></div>
          </button>
        </div>
        <div class="login-choice"><span>ou S'identifier avec</span></div>
        <SocialLogin />
    </form>
    <div class="footer">
       <p>Vous n'avez pas de compte ? <a href="/Register"> <u style="color:blue">
Inscrivez-vous ici</u></a></p>
    </div>
  
  </b-modal>
  
    <div>
      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Statistiques
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="">
                <div>
                  <div
                    class="container bootstrap snippets bootdey"
                    style="background: #d9dedf"
                  >
                    
                          
              <div class="card">
                <div
                  class="card-body text-center bg-primary rounded-top"
                >
                  <div v-if="profileimgage===''" class="mt-1 mb-1" >
              <img src="@/assets/img/hotels/59710428.png" 
                class="rounded-circle img-fluid" style="border-radius: 160px;
                    image-resolution: 3000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:190px; width: 190px;"  />
            </div>
                  <div v-else>
                    <a :href="pic" target="_blank" rel="noopener noreferrer">
                      <img
                        :src="pic"
                        style="
                          border-radius: 160px;
                          image-resolution: 30dpi;
                          background-color: #000;
                          background-position: center;
                          background-size: cover;
                          background-repeat: no-repeat;
                          max-width: 100%;
                          max-height: 100%;
                          height: 220px;
                          width: 220px;
                        "
                      />
                    </a>
                  </div>
                  <!-- 
                 <i class="fa fa-camera" style="font-size:48px;color:red"></i>
                -->

                  <header></header>
                  <h5
                    class="mb-1 text-white"
                    style="text-transform: capitalize"
                  >
                    {{ firstName + " " + lastName }}
                  </h5>
                 <span v-if="stars>0" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>

                  <span v-if="stars>1" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>
                  
                   <span v-if="stars>2" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>

                  <span v-if="stars>3" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>

                   <span v-if="stars>4" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>
                </div>
                <div class="card-body">
                 
                  <div class="row text-center mt-4">

                     <div v-if="travellength > 0" class="col p-2">
                      <h4 class="mb-1 line-height-5">{{ travellength }}</h4>
                      <small class="mb-0 font-weight-bold">Voyage(s)</small>
                    </div>

                    <div v-else class="col p-2">
                      <h4 class="mb-1 line-height-5">0</h4>
                      <small class="mb-0 font-weight-bold">Voyage(s)</small>
                    </div>

                    <div v-if="revlength > 0" class="col p-2">
                      <h4 class="mb-1 line-height-5">{{ revlength }}</h4>
                      <small class="mb-0 font-weight-bold">Réservation(s)</small>
                    </div>
                    <div v-else class="col p-2">
                      <h4 class="mb-1 line-height-5">0</h4>
                      <small class="mb-0 font-weight-bold">Réservation(s)</small>
                    </div>
                   
<div v-if="articlelength > 0" class="col p-2">
                      <h4 class="mb-1 line-height-5">{{ articlelength }}</h4>
                      <small class="mb-0 font-weight-bold">Article(s)</small>
                    </div>
                    <div v-else class="col p-2">
                      <h4 class="mb-1 line-height-5">0</h4>
                      <small class="mb-0 font-weight-bold">Article(s)</small>
                    </div>

                    <div class="col p-2">
                      <h4 class="mb-1 line-height-5">0</h4>
                      <small class="mb-0 font-weight-bold">Achat(s)</small>
                    </div>
                  </div>
                </div>
              </div>
 <div class="col-md-22" style="margin-top: -20px">
                      <h6 class="mt-2 mb-3">Témoignages</h6>
                      <table
                        class="table table-hover table-striped"
                        style="background-color: #74befb"
                      >
                        <tbody>
                          <div
                            style="
                            padding:20px;                              
                            overflow: scroll;
                              height: 280px;
                              border-radius: 10px;
                            "
                          >
                            <div v-for="comment in comments" :key="comment.id">
                              <div class="row">
                                <div class="column1">
                                 <img v-if=" comment.booker.profileimgage !==''"
                                    :src="
                                      'http://46.105.36.240:3000/' +
                                      comment.booker.profileimgage
                                    "
                                    style="
                                      width: 50px;
                                      height: 50px;
                                      border-radius: 55px;
                                    "
                                  />
                                   <img v-else
                  src="@/assets/img/hotels/59710428.png"
                   style="
                                      width: 50px;
                                      height: 50px;
                                      border-radius: 55px;
                                    "
                />
                                </div>
                                <div class="column2">
                                  <p
                                    style="
                                      // layout
                                      position: relative;
                                      margin: 5px;
                                      background-color: #fff;
                                      display: flex;
                                      width: fit-content;
                                      max-width: 90%;
                                      // looks
                                      color: red;
                                      padding: 10px;
                                      font-size: 1em;
                                      border-radius: 0.5rem;
                                      box-shadow: 0 0.125rem 0.5rem
                                          rgba(0, 0, 0, 0.3),
                                        0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
                                    "
                                  >
                                    {{ comment.content }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </tbody>
                      </table>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
    
<section class="pt-5 pb-5">
  <div class="container">
    <div class="row"> 
        <div class="col-6">
            <h4 class="mb-3" style="color:white; font-size:32px; margin-top:25px">Annonces de Voyage</h4>
        </div>
     <div v-if="homAnnLength >3" class="col-6 text-right" style="display: flex;flex-direction:row; position: relative;">
            <a style="width:10%;  margin-left: 430px;margin-right: 0;position: absolute;right: 130px;" class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                <i class="fa fa-arrow-left"></i>
            </a>
            <a style="width:10%; margin-left: 430px;margin-right: 0;position: absolute;" class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                <i class="fa fa-arrow-right"></i>
            </a>
        </div>
              <div v-if="loading" style="margin:100px"> 
         <div class="ring">Loading</div>
              </div> 
        <div class="col-12">
            <div v-if="homAnnLength > 3" id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row">

<div class="col-md-4 mb-3" v-for="user in users1" :key="user.userId">


   <div class="card" style="border-radius: 15px;">
          <div class="card-body text-center">
            <button  v-if="isLogged === true" data-target="#exampleModal1" v-on:click="view(user.id, user.userDto.id)"
                    data-toggle="modal" style="border-radius: 160px;">
  <div v-if="user.userDto.profileimgage===''" class="mt-1 mb-1" >
              <img src="@/assets/img/hotels/59710428.png" 
                class="rounded-circle img-fluid" style="border-radius: 160px;
                    image-resolution: 3000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:190px; width: 190px;"  />
            </div>
            <div v-else class="mt-1 mb-1">
              <img :src="'http://46.105.36.240:3000/'+user.userDto.profileimgage"
                class="rounded-circle img-fluid" style="border-radius: 160px;
                    image-resolution: 300000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:190px; width: 190px;"/>
            </div>
            </button>
            <button  v-else v-b-modal.modal-multi-4 type="button"
                    data-toggle="modal" style="border-radius: 160px;">
  <div v-if="user.userDto.profileimgage===''" class="mt-1 mb-1" >
              <img src="@/assets/img/hotels/59710428.png" 
                class="rounded-circle img-fluid" style="border-radius: 160px;
                    image-resolution: 3000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:190px; width: 190px;"  />
            </div>
            <div v-else class="mt-1 mb-1">
              <img :src="'http://46.105.36.240:3000/'+user.userDto.profileimgage"
                class="rounded-circle img-fluid" style="border-radius: 160px;
                    image-resolution: 300000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:190px; width: 190px;"/>
            </div>
            </button>
            
          
           <a  data-target="#exampleModal"
                    data-toggle="modal">
           <h4 style="text-transform: capitalize" class="mb-2">{{ user.userDto.firstName + " "+  user.userDto.lastName}}</h4>

           </a> 
                 <span v-if="user.userDto.stars>0" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>

                 <span v-if="user.userDto.stars>1" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>
                  
                   <span v-if="user.userDto.stars>2" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>

                  <span v-if="user.userDto.stars>3" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>

                   <span v-if="user.userDto.stars>4" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>
            <div class="d-flex justify-content-between text-center mt-1 mb-1">
              <div>
                <p class="mb-0 h6" >De</p>
                <p style="font-size: 18px;animation: fadeIn 5s;text-transform: capitalize" class="text-muted mb-0"><i class="fas fa-map-marker-alt mr-2 text-primary"></i>{{ user.departuretown.slice(0, 10) }}...</p>
               <p style="font-size: 18px;animation: fadeIn 5s;" class="text-muted mb-0"><i class="fas fa-clock mr-2 text-primary"></i>{{ user.arrivaldate  }}</p>
              </div>
              
             <div>
                <p class="mb-0 h6">À</p>
                <p style="font-size: 18px;animation: fadeIn 5s;text-transform: capitalize" class="text-muted mb-0"><i class="fas fa-map-marker-alt mr-2 text-primary"></i>{{ user.destinationtown.slice(0, 10) }}...</p>
                  <p style="font-size: 18px;animation: fadeIn 5s;" class="text-muted mb-0"><i class="fas fa-clock mr-2 text-primary"></i>{{ user.departuredate  }}</p>
              </div>
              
            </div>

                   <div>
                  <i class="fas fa-weight-hanging mr-2 text-primary"></i>
            <span >{{ user.quantity }}Kg  ---------->  {{ user.price }}<b style="color: rgb(63, 167, 247);">{{ subInfo.currency}}</b>/Kg</span>
            <span class="mx-2"></span>
            </div>
         
         <div >
          
                   <!-- document -->
            <span v-if="user.document">
             <i class="fas fa-file-invoice mr-2 text-primary"></i>
            <span>Document(s)------>{{  subInfo.documentPrice}}<b style="color: rgb(63, 167, 247);">{{ subInfo.currency}}</b></span>
            </span>
                 <!--    <span v-else>
              <p>No Documents</p>
            </span> -->
         </div>
         

         <div style="margin-left:-20px">
            <!-- pc -->
             <span class="mx-2"></span>
            <span v-if="user.computer">
            <i class="fas fa-laptop mr-2 text-primary"></i>
              <span>Ordinateur------->{{ subInfo.computerPrice}}<b style="color: rgb(63, 167, 247);">{{ subInfo.currency}}</b></span>
            </span>
            <!--   <span v-else>
              <p>No Computer</p>
            </span> -->
         </div>
            
           <div style="margin-top:20px" class="mb-2 pb-2" >
              <button v-if="isLogged === true" type="button" v-on:click="view(user.id)" data-target="#exampleModal" data-toggle="modal" style="height:35px; float:left ;" class="btn btn-outline-primary btn-floating">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </button>

              <button v-else type="button" v-b-modal.modal-multi-4 style="height:35px; float:left ;" class="btn btn-outline-primary btn-floating">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </button>


                 <button v-if="isLogged === false"  v-b-modal.modal-multi-4  type="button"  style="height:38px; float:right ;"  class="btn btn-primary btn-rounded btn-sm btn-floating">
              Reserver
            </button>
          
          
          <router-link v-if="isLogged === true && user.userDto.id!==userIdAnnouncement" style="height:38px; float:right ; " type="submit"  :to="{ name: 'Reservation', params: { id: user.id} }" class="btn btn-primary btn-rounded btn-sm btn-floating">Reserver</router-link>

         
           </div>
        
          </div>
        </div>




                            </div>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">

                            <div class="col-md-4 mb-3" v-for="user in users2" :key="user.userId">
              
 <div class="card" style="border-radius: 15px; ">
          <div class="card-body text-center"> 
            <button  v-if="isLogged === true" data-target="#exampleModal1" v-on:click="view(user.id, user.userDto.id)"
                    data-toggle="modal" style="border-radius: 160px;">
  <div v-if="user.userDto.profileimgage===''" class="mt-1 mb-1" >
              <img src="@/assets/img/hotels/59710428.png" 
                class="rounded-circle img-fluid" style="border-radius: 160px;
                    image-resolution: 3000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:190px; width: 190px;"  />
            </div>
            <div v-else class="mt-1 mb-1">
              <img :src="'http://46.105.36.240:3000/'+user.userDto.profileimgage"
                class="rounded-circle img-fluid" style="border-radius: 160px;
                    image-resolution: 300000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:190px; width: 190px;"/>
            </div>
            </button>
            <button  v-else v-b-modal.modal-multi-4 type="button"
                    data-toggle="modal" style="border-radius: 160px;">
  <div v-if="user.userDto.profileimgage===''" class="mt-1 mb-1" >
              <img src="@/assets/img/hotels/59710428.png" 
                class="rounded-circle img-fluid" style="border-radius: 160px;
                    image-resolution: 3000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:190px; width: 190px;"  />
            </div>
            <div v-else class="mt-1 mb-1">
              <img :src="'http://46.105.36.240:3000/'+user.userDto.profileimgage"
                class="rounded-circle img-fluid" style="border-radius: 160px;
                    image-resolution: 300000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:190px; width: 190px;"/>
            </div>
            </button>

           <a  data-target="#exampleModal"
                    data-toggle="modal">
           <h4 style="text-transform: capitalize" class="mb-2">{{ user.userDto.firstName + " "+  user.userDto.lastName}}</h4>

           </a> 
                 <span v-if="user.userDto.stars>0" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>

                 <span v-if="user.userDto.stars>1" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>
                  
                   <span v-if="user.userDto.stars>2" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>

                  <span v-if="user.userDto.stars>3" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>

                   <span v-if="user.userDto.stars>4" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>
            <div class="d-flex justify-content-between text-center mt-1 mb-1">
              <div>
                <p class="mb-0 h6" >De</p>
                <p style="font-size: 18px;animation: fadeIn 5s;text-transform: capitalize" class="text-muted mb-0"><i class="fas fa-map-marker-alt mr-2 text-primary"></i>{{ user.departuretown.slice(0, 10) }}...</p>
               <p style="font-size: 18px;animation: fadeIn 5s;" class="text-muted mb-0"><i class="fas fa-clock mr-2 text-primary"></i>{{ user.arrivaldate  }}</p> 
              </div>
              
             <div>
                <p class="mb-0 h6">À</p>
                <p style="font-size: 18px;animation: fadeIn 5s;text-transform: capitalize" class="text-muted mb-0"><i class="fas fa-map-marker-alt mr-2 text-primary"></i>{{ user.destinationtown.slice(0, 10) }}...</p>
                  <p style="font-size: 18px;animation: fadeIn 5s;" class="text-muted mb-0"><i class="fas fa-clock mr-2 text-primary"></i>{{ user.departuredate  }}</p>
              </div>
              
            </div>

                   <div>
                  <i class="fas fa-weight-hanging mr-2 text-primary"></i>
            <span >{{ user.quantity }}Kg  -------->  {{ user.price }}<b style="color: rgb(63, 167, 247);">{{ subInfo.currency}}</b>/Kg</span>
            <span class="mx-2"></span>
            </div>
         
         <div >
          
                   <!-- document -->
            <span v-if="user.document">
             <i class="fas fa-file-invoice mr-2 text-primary"></i>
              <span>Document(s)------>{{  subInfo.documentPrice}}<b style="color: rgb(63, 167, 247);">{{ subInfo.currency}}</b></span>
            </span>
                 <!--    <span v-else>
              <p>No Documents</p>
            </span> -->
         </div>
         

         <div style="margin-left:-20px">
            <!-- pc -->
             <span class="mx-2"></span>
            <span v-if="user.computer">
            <i class="fas fa-laptop mr-2 text-primary"></i>
              <span>Ordinanteur------->{{ subInfo.computerPrice}}<b style="color: rgb(63, 167, 247);">{{ subInfo.currency}}</b></span>
            </span>
            <!--   <span v-else>
              <p>No Computer</p>
            </span> -->
         </div>
            
           <div style="margin-top:20px" class="mb-2 pb-2" >
              <button v-if="isLogged === true" type="button" v-on:click="view(user.id)" data-target="#exampleModal" data-toggle="modal" style="height:35px; float:left ;" class="btn btn-outline-primary btn-floating">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </button>

              <button v-else type="button" v-b-modal.modal-multi-4 style="height:35px; float:left ;" class="btn btn-outline-primary btn-floating">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </button>


                 <button v-if="isLogged === false"  v-b-modal.modal-multi-4  type="button"  style="height:38px; float:right ;"  class="btn btn-primary btn-rounded btn-sm btn-floating">
              Reserver
            </button>
          
          
          <router-link v-if="isLogged === true && user.userDto.id!==userIdAnnouncement" style="height:38px; float:right ; " type="submit"  :to="{ name: 'Reservation', params: { id: user.id} }" class="btn btn-primary btn-rounded btn-sm btn-floating">Reserver</router-link>

         
           </div>
        
          </div>
        </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div v-else id="carouselExampleIndicators2" class="carousel slide">

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row">

<div class="col-md-4 mb-3" v-for="user in users1" :key="user.userId">


   <div class="card" style="border-radius: 15px;">
          <div class="card-body text-center">
             <button  v-if="isLogged === true" data-target="#exampleModal1" v-on:click="view(user.id, user.userDto.id)"
                    data-toggle="modal" style="border-radius: 160px;">
  <div v-if="user.userDto.profileimgage===''" class="mt-1 mb-1" >
              <img src="@/assets/img/hotels/59710428.png" 
                class="rounded-circle img-fluid" style="border-radius: 160px;
                    image-resolution: 3000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:190px; width: 190px;"  />
            </div>
            <div v-else class="mt-1 mb-1">
              <img :src="'http://46.105.36.240:3000/'+user.userDto.profileimgage"
                class="rounded-circle img-fluid" style="border-radius: 160px;
                    image-resolution: 300000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:190px; width: 190px;"/>
            </div>
            </button>
            <button  v-else v-b-modal.modal-multi-4 type="button" 
                    data-toggle="modal" style="border-radius: 160px;">
  <div v-if="user.userDto.profileimgage===''" class="mt-1 mb-1" >
              <img src="@/assets/img/hotels/59710428.png" 
                class="rounded-circle img-fluid" style="border-radius: 160px;
                    image-resolution: 3000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:190px; width: 190px;"  />
            </div>
            <div v-else class="mt-1 mb-1">
              <img :src="'http://46.105.36.240:3000/'+user.userDto.profileimgage"
                class="rounded-circle img-fluid" style="border-radius: 160px;
                    image-resolution: 300000000dpi;  background-color: #000;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:190px; width: 190px;"/>
            </div>
            </button>
            
          
           <a  data-target="#exampleModal"
                    data-toggle="modal">
           <h4 style="text-transform: capitalize" class="mb-2">{{ user.userDto.firstName + " "+  user.userDto.lastName}}</h4>

           </a> 
                 <span v-if="user.userDto.stars>0" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>

                 <span v-if="user.userDto.stars>1" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>
                  
                   <span v-if="user.userDto.stars>2" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>

                  <span v-if="user.userDto.stars>3" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>

                   <span v-if="user.userDto.stars>4" class="fa fa-star checked"></span>
                  <span v-else class="fa fa-star"></span>
            <div class="d-flex justify-content-between text-center mt-1 mb-1">
              <div>
                <p class="mb-0 h6" >De</p>
                <p style="font-size: 18px;animation: fadeIn 5s;text-transform: capitalize" class="text-muted mb-0"><i class="fas fa-map-marker-alt mr-2 text-primary"></i>{{ user.departuretown.slice(0, 10) }}...</p>
               <p style="font-size: 18px;animation: fadeIn 5s;" class="text-muted mb-0"><i class="fas fa-clock mr-2 text-primary"></i>{{ user.arrivaldate  }}</p>
              </div>
              
             <div>
                <p class="mb-0 h6">À</p>
                <p style="font-size: 18px;animation: fadeIn 5s;text-transform: capitalize" class="text-muted mb-0"><i class="fas fa-map-marker-alt mr-2 text-primary"></i>{{ user.destinationtown.slice(0, 10) }}...</p>
                  <p style="font-size: 18px;animation: fadeIn 5s;" class="text-muted mb-0"><i class="fas fa-clock mr-2 text-primary"></i>{{ user.departuredate  }}</p>
              </div>
              
            </div>

                   <div>
                  <i class="fas fa-weight-hanging mr-2 text-primary"></i>
            <span >{{ user.quantity }}Kg  ---------->  {{ user.price }}<b style="color: rgb(63, 167, 247);">{{ subInfo.currency}}</b>/Kg</span>
            <span class="mx-2"></span>
            </div>
         
         <div >
          
                   <!-- document -->
            <span v-if="user.document">
             <i class="fas fa-file-invoice mr-2 text-primary"></i>
            <span>Document(s)------>{{  subInfo.documentPrice}}<b style="color: rgb(63, 167, 247);">{{ subInfo.currency}}</b></span>
            </span>
                 <!--    <span v-else>
              <p>No Documents</p>
            </span> -->
         </div>
         

         <div style="margin-left:-20px">
            <!-- pc -->
             <span class="mx-2"></span>
            <span v-if="user.computer">
            <i class="fas fa-laptop mr-2 text-primary"></i>
              <span>Ordinateur------->{{ subInfo.computerPrice }}<b style="color: rgb(63, 167, 247);">{{ subInfo.currency}}</b></span>
            </span>
            <!--   <span v-else>
              <p>No Computer</p>
            </span> -->
         </div>
            
           <div style="margin-top:20px" class="mb-2 pb-2" >
              <button v-if="isLogged === true" type="button" v-on:click="view(user.id)" data-target="#exampleModal" data-toggle="modal" style="height:35px; float:left ;" class="btn btn-outline-primary btn-floating">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </button>

              <button v-else type="button" v-b-modal.modal-multi-4 style="height:35px; float:left ;" class="btn btn-outline-primary btn-floating">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </button>


                 <button v-if="isLogged === false"  v-b-modal.modal-multi-4  type="button"  style="height:38px; float:right ;"  class="btn btn-primary btn-rounded btn-sm btn-floating">
              Reserver
            </button>
          
          
          <router-link v-if="isLogged === true && user.userDto.id!==userIdAnnouncement" style="height:38px; float:right ; " type="submit"  :to="{ name: 'Reservation', params: { id: user.id} }" class="btn btn-primary btn-rounded btn-sm btn-floating">Reserver</router-link>

         
           </div>
        
          </div>
        </div>




                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="wrap1s" style="margin-bottom:-15px">
    <a class="button1" href="/Announcements"> <button1 ><i class="fa fa-plane"></i> Tous les Voyages..</button1></a>
 
</div>
</section>
<div>
   <div>
      <div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Info</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="">
                  <div>
                    <div
                      class="container bootstrap snippets bootdey"
                      style="background: #d9dedf"
                    >
                      <section id="contact" class="gray-bg padding-top-bottom">
                        <div class="container bootstrap snippets bootdey">
                          <div class="row">
                            <form
                              id="Highlighted-form"
                              class="col-sm-6 col-sm-offset-3"
                              action="contact.php"
                              method="post"
                              novalidate=""
                            >
                            <div class="form-group">
                              <div class="controls">
                                <h6><i
                                  class="fa fa-map-marker"
                                  style="margin-bottom: -30"
                                ></i>Ville de départ</h6>
                                <textarea
                                  v-model="departuretown"
                                  id="contact-name"
                                  name="contactName"
                                  style= "height:70px;"
                                  class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  "
                                  type="text"
                                  readonly
                                ></textarea>
                                  <i class="fa fa-map-marker-alt mr-2 text-primary"></i>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="controls">
                                <h6>Ville d'arrivée</h6>
                                <textarea
                                  v-model="destinationtown"
                                  id="contact-name"
                                  name="contactName"
                                   style= "height:70px;"
                                  class="
                                    form-control
                                    requiredField
                                    Highlighted-label
                                  "
                                  type="text"
                                  readonly
                                ></textarea>
                                 <i class="fas fa-map-marker"></i>
                              </div>
                            </div>
                              <!-- End email input -->
                              <div class="form-group">
                                <div class="controls">
                                  <h6>Restriction</h6>
                                  <textarea
                                    v-model="restriction"
                                    id="contact-message"
                                    name="comments"
                                    placeholder="Your message"
                                    class="
                                      form-control
                                      requiredField
                                      Highlighted-label
                                    "
                                    rows="6"
                                    readonly
                                  ></textarea>
                                  <!-- <i class="fa fa-comment"></i> -->
                                </div>
                              </div>
                              <!-- End textarea -->
                            </form>
                            <!-- End Highlighted-form -->
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
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
import SocialLogin from "@/components/SocialLogin";
import axios from 'axios'
import Swal from 'sweetalert2'
  export default { 
      name: "announcementsVue",
    data() {
      return {
        login:false,
        articlelength:'',
         loading: true,
         loding:false,
       userIdAnnouncement: localStorage.getItem('userId'),
          isLogged: this.checkIfIsLogged(),
          stars:'',
         id: '',
      users1: [],
       users2: [],
        users3: [],
        subInfo:[],
        comments:[],
        modalShow: false,
        
      pseudo: '',
      email: '',
      password: '',
      useremail:'',
        departuretown:'',
      destinationtown:'',
      quantity: '',
      computer: '',
      document:'',
      restriction: '',
      price: '',
      departuredate: '',
      arrivaldate: '',
      firstName: '',
      lastName: '',
      revlength:'',
      travellength:'',
      pic:'',
      homAnnLength:'',
      profileimgage:''
      }
    },  
     components: {
        SocialLogin
  },

 
    async mounted() {

  
        
          var requestOptions1 = { method: 'GET', redirect: 'follow' };

        fetch("http://46.105.36.240:3000/sub/informations/view", requestOptions1)
            .then(response => response.text())
            .then(result => {
                if (JSON.parse(result).length!==0) {
                    this.subInfo = JSON.parse(result)[0]
                } 
            })
            .catch(error => console.log('error', error));


   

    await fetch("http://46.105.36.240:3000/announcements")
    .then(response => response.json())
    .then(data => {
        this.loading = false
      this.users1 = data.reverse().slice(0,3);
        this.users2 = data.reverse().slice(3, 6);
          this.homAnnLength = data.length;
      
      console.log('success');
    })
    .catch(err => {
      console.error(err);
    });
 
     this.$bus.$on('logged', () => {
      this.isLogged = this.checkIfIsLogged()
    });
  },


  methods: {

 view(id, id2) {
    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('access-token'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://46.105.36.240:3000/user/" + id2 + "/articles/", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.articlelength = JSON.parse(result).length;
                console.log(result);
            })
            .catch(error => {
              
                console.log('error', error)
            });

          var axios = require("axios");

    var configcomment = {
      method: "get",
      url: "http://46.105.36.240:3000/user/comments/" + id,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access-token"),
      },
    };

    axios(configcomment)
      .then((res) => {
        this.comments = res.data;
      })
      .catch(function (error) {
        this.loading = false;
        Swal.fire({
          icon: "warning",
          title: "Oups... Aucune réservation trouvée!",
        });
        console.log(error);
      });

var axios3 = require("axios");
    var config3 = {
      method: "get",
      url:
        "http://46.105.36.240:3000/user/" +
       id2 +
        "/reservations",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access-token"),
      },
    };

    axios3(config3)
      .then((res) => {
        this.revlength = res.data.length;
        console.log(res.data.length);
      })
      .catch(function (error) {
        console.log(error);
      });

 var axios1 = require("axios");
    var config1 = {
      method: "get",
      url:
        "http://46.105.36.240:3000/users/" +
        id2+"/announcements",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access-token"),
      },
    };
    axios1(config1)
      .then((res) => {
        this.travellength = res.data.length;
        console.log(res.data.length);
      })
      .catch(function (error) {
        console.log(error);
      });

var config = {
  method: 'get',
  url: 'http://46.105.36.240:3000/announcement/'+id+'/users',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
     },
};

axios(config)
.then(res => {
       this.profileimgage= res.data.userDto.profileimgage;
          this.pic = 'http://46.105.36.240:3000/'+  this.profileimgage,
        this.AnnUserId = res.data.userDto.id;
        this.firstName = res.data.userDto.firstName;
        this.lastName = res.data.userDto.lastName;
        this.departuredate = res.data.departuredate;
        this.arrivaldate = res.data.arrivaldate;
        this.departuretown = res.data.departuretown;
        this.destinationtown = res.data.destinationtown;
        this.restriction = res.data.restriction;
        this.quantity = res.data.quantity;
        this.price = res.data.price;
        this.document = res.data.document;
        this.computer = res.data.computer;
        this.stars = res.data.userDto.stars;
        localStorage.setItem('AnnUserId',  res.data.userDto.id);
      })
.catch(function (error) {
  console.log(error);
  
});
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

   
    signup() {
      let newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        pseudo: this.pseudo,
        email: this.email,
        password: this.password
      }
      axios.post('http://46.105.36.240:3000/signup', newUser)
        {
          this.$router.push('/login');
        }
    },

    onSubmit(event) {
      this.login = true;
      event.preventDefault();
      var axios = require("axios");

      var qs = require("qs");
      var data = qs.stringify({
        useremail: this.useremail,
        password: this.password,
      });
      var config = {
        method: "post",
        url: "http://46.105.36.240:3000/login",
        data: data,
      };

      axios(config)
        .then(function (response) {
          const temp = response.data;
          const refreshtoken = Object.values(temp)[0];
          const accesstoken = Object.values(temp)[1];
          localStorage.setItem("refresh-token", refreshtoken);
          localStorage.setItem("access-token", accesstoken);

          var config0 = {
            method: "get",
            url: "http://46.105.36.240:3000/profile",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("access-token"),
            },
          };

          axios(config0)
            .then((res) => {
              let a = res.data;
              if (a.pseudo == "DGA-EMPLOYEE" || a.pseudo == "Admin") {
                window.location.href = "/employeeDashboard";
              } else {
                console.log(a);
                window.location.reload()
              }
            })
            .catch(function (error) {
              console.log(error);
            });
            this.$bus.$emit("logged", "User logged");
        })
        .catch(function (error) {
          if (error.response.status === 500) {
            Swal.fire(
              "Échec de connexion",
              "Veuillez vérifier vos informations d'identification!.",
              "error"
            );
          }
          if (error.response.status === 401) {
            Swal.fire("Login Failed!", "L'utilisateur n'existe pas!.", "error");
          }
          if (error.response.status === 404) {
            Swal.fire("Échec!", "Échec de connexion!", "error");
          }
          console.log(error);
        });
    },
//   onSubmit(event){
//  this.loding = true
//     event.preventDefault()
//     var axios = require('axios');

    
// var qs = require('qs');
// var data = qs.stringify({
//   'useremail': this.useremail,
//   'password': this.password 
// });
// var config = {
//   method: 'post',
//   url: 'http://46.105.36.240:3000/login',
//   headers: { 
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
      
// window.location.reload();
//       //const accesstoken = Object.values(temp)[0];
//      // const naccesstoken = Object.values(accesstoken)[1.19];
//      const temp = response.data;
//      const refreshtoken = Object.values(temp)[0];
//       const accesstoken = Object.values(temp)[1];
//   console.log(JSON.stringify(accesstoken));
//   console.log(JSON.stringify(refreshtoken));

// localStorage.setItem('refresh-token', refreshtoken);
// localStorage.setItem('access-token', accesstoken);
// this.$bus.$emit('logged', 'User logged');
  

// })
// .catch(function (error) {
//             if (error.response.status === 500) {
//           Swal.fire(
//       'Login Failed!',
//       'Please Check Your Credentials!.',
//       'error'
//     )       }   if (error.response.status === 401) {
//           Swal.fire(
//       'Login Failed!',
//       'User Does Not Exist!.',
//       'error'
//     )
//         } if(error.response.status === 404) {
//               Swal.fire(
//       'Failed!',
//       'Something Went Wrong!.',
//       'error'
//     )
//         }
//   console.log(error);
// });
// }
  }
}
</script>

<style>
body{
    background:#e8f6f8;
}
    .h6{
    font-size:18px;
    font-weight:600;
}

.contact-item .icon{
    display:block;
    font-size:48px;
    color:#5cc9df;
    text-shadow:-2px 2px 0 rgba(0,0,0,0.1);
    -webkit-transition:all .3s ease-out;
    transition:all .3s ease-out;
}

.contact-item .icon:hover{
    color:#5cc9df;
    -webkit-transform:scale(1.3) translateY(-10px);
    transform:scale(1.3) translateY(-10px);
}


.bl_form {
}

.bl_form input {
	background: rgba(255,255,255,0.10);
	box-shadow: 0 4px 0px rgba(0,0,0,0.2);
	border: none;
	color: white;
	border-radius: 5px;
	font-size: 16px;
	outline: none;
}

.lb_wrap .lb_label.top, .lb_wrap .lb_label.bottom {
	left: 66px !important;
}

.lb_wrap .lb_label.left {
	left: 0;
}

.lb_label {
	font-size:18px;
	font-weight: 400;
	color: rgb(0, 0, 0);
}

.no-placeholder .lb_label {
	display:none;
}

.lb_label.active {
	color: #aaa;
}

#Highlighted-form .form-group label{
    display:none;
    font-size:18px;
    font-weight:100;
    text-transform:uppercase;
}

#Highlighted-form.no-placeholder .form-group label{
    display:block;
}

#Highlighted-form .controls {
    padding:0;
    margin-top:10px;
}

#Highlighted-form.no-placeholder .controls {
    margin-top:0;
}

#Highlighted-form .form-control {
	display:inline;
    width:400px;
    background:#fff;
    border:none;
    border-radius:5px;
    outline:none;
    box-shadow:0 4px 0 rgba(0,0,0,0.05);
    height:48px;
    font-size:18px;
    color:rgb(0, 0, 0);
    font-weight:400;
    padding-left:54px;
}

#Highlighted-form .form-group.half-width{
    width:40%;
    float:left;
}

#Highlighted-form .form-group{
    position:relative;
}

#Highlighted-form .form-group [class*=fa] {
    display:block;
    width:45px;
    position:absolute;
    top:0;
    left:5px;
      margin-top: 25px;
    color:rgb(255, 115, 0);
    font-size:24px;
    line-height:52px;
    text-align:center;
    font-weight:300;
	-webkit-transition:color .3s ease-out;
	transition:color .3s ease-out;
}

#Highlighted-form .form-group [class*=fa].active{
    color:#ccc;
}

#Highlighted-form.no-placeholder .form-group [class*=fa]{
    top:10px;
}

#Highlighted-form textarea.form-control {
    height:100px;
      width:400px;
	min-width:100%;
    font-size:18px;
    font-weight:400;
    line-height:24px;
	padding-top:14px;
	vertical-align:top;
}

#Highlighted-form .form-control:focus {
    outline:none;
    box-shadow:0 4px 0 rgba(0,0,0,0.05);
}

#Highlighted-form .error-message {
    padding:5px 0;
    position:absolute;
    top:-35px;
    right:0;
    font-size:15px;
    line-height:24px;
    font-weight:400;
    color:#ff3345;
    z-index:10;
}

#Highlighted-form.no-placeholder .error-message {
    top:0;
}
body {
	background-color: var(--white);
	background: url("https://lp-cms-production.imgix.net/image_browser/Boss.jpg?auto=format&q=40&ar=16%3A9&fit=crop&w=1247");
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: grid;
	height: 100vh;
}
body::before{
    content:'';
    position: fixed;
    height: 100%;
    width:100%; 
    background: rgba(0, 0, 0, 0.3) 
}
</style>