<template>


    <div>
        <div style="margin-left: 60px">
      <lognavVue />
    </div>
<usersidebarVue/>

        <h3 style="position:relative; text-align: center;">Historique d'achat
   </h3>    
     <!-- <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
 
      <div style="height: 550px;width:1000px">
                  <a :href="this.$url+'/bill/image?file=' + this.receipt" target="_blank">

                  <img :src="this.$url+'/bill/image?file=' + this.receipt" style="
                      background-position: center; 
                      background-size: cover;
                      background-repeat: no-repeat;
                       max-width: 99.5%;
                        max-height: 100%;
                        height: 550px;width:800px">
                          </a>
                  </div>
                  <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
      </div>
    </div>
  </div>
</div> -->


            <!-- <button @click="but()" id="demo">but</button> -->

    
          <!--  -->



          <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="Modal"
          aria-hidden="true">
          <div class="modal-dialog modal-lx" role="document" style="max-width: 80%;">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Commande</h5>
              </div>
              <div class="modal-body">
                <div class="">
                  <div>
                    <div class="container bootstrap snippets bootdey" style="background:#d9dedf; max-width: 100%;">
                      <section id="contact" class="gray-bg padding-top-bottom">
                       
                        <div class="container bootstrap snippets bootdey">
                          <table class="table table-striped table-hover table-borderless table-vcenter font-size-sm">
                            <thead>
                              <tr class="text-uppercase">
                                <th scope="col">Mon adresse de livraison</th>
              <th scope="col">Vendeur</th>
              <th scope="col">Article</th>
              <th scope="col">Prix</th>
              <div style="margin-left:30px"><th scope="col">Date</th></div>
              <th scope="col">Qté achetée</th>

                              </tr>
                            </thead>
                            <tbody style="text-transform: capitalize">
                              <tr v-for="item in PurchesArt" v-bind:key="item.id">
              <td>{{ item.address }}</td>
              <td>{{ item.article.user.firstName + " " + item.article.user.lastName }}</td>
              <td>{{ item.article.name }}</td>
              <td>{{ item.article.price }}</td>
              <td>{{ item.date }}</td>
             <div style="margin-left:30px"><td>{{ item.quantity }}</td> </div> 
            </tr>
                              
                            </tbody>
                          </table>
                          <div class="text-uppercase pb-4">
                            <span style="font-weight:700">Total:</span> <span class="">{{total/100}}<span style="color:blue">{{currency}}</span></span>
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

  

        <div class="container1">

<div class="tab-wrap">

  <!-- active tab on page load gets checked attribute -->
  <input type="radio" id="tab1" name="tabGroup1" class="tab" checked>
  <label for="tab1">Reservations</label>

  <input type="radio" id="tab2" name="tabGroup1" class="tab">
  <label for="tab2">Articles</label>

  <div class="tab__content">
    <h5>Historique des kilos achetés</h5>
    <div class="container" style="position: relative; margin-bottom: 50px;  max-width: 110%;" >
 
 <table class="table table-striped">
   <thead>
     <tr>
      <th scope="col">Voyageur</th>
              <th scope="col">Départ</th>
              <th scope="col">Destination</th>
              <th scope="col">Nom du Voyageur</th>  
              <th scope="col">Qté réservée</th>
       <th scope="col">Date de réservation</th>
       <th scope="col">Montant</th>
       <th scope="col">Doc</th>
        <th scope="col">ordinateur</th>

       
     </tr>
   </thead>
   <tbody style="text-transform: capitalize">
     <tr v-for="pay in pairs" :key="pay.id">
      <a v-on:click="view1(pay.item.announcementDto.id, pay.item.announcementDto.userDto.id)"
                data-target="#exampleModal12" data-toggle="modal">
                <img v-if="pay.item.announcementDto.userDto.profileimgage !== ''" v-bind:src="
                  urel+'/' +
                  pay.item.announcementDto.userDto.profileimgage
                " style="width: 60px; height: 60px; border-radius: 30px" />
                <img v-else src="@/assets/img/hotels/59710428.png"
                  style="width: 60px; height: 60px; border-radius: 30px" />
              </a>

              <td>{{  pay.item.announcementDto.departuretown.slice(0, 14) }}...</td>
              <td>{{  pay.item.announcementDto.destinationtown.slice(0, 14)  }}...</td>
              <td>{{  pay.item.announcementDto.userDto.firstName+ " "+ pay.item.announcementDto.userDto.lastName}}</td>
              <td style="position:relative; padding-right:-40px"> <div style="position:relative;margin-left:25px">{{  pay.item.quantitykilo  }}</div> </td>
              <td style="position:relative; padding-right:-40px"> <div style="position:relative;margin-left:25px">{{  pay.item.date  }}</div> </td>

       <td>{{(pay.item.quantityDocument*subInfo.documentPrice) + (pay.item.quantityComputer*subInfo.computerPrice)+(pay.item.quantitykilo *pay.item.announcementDto.price)+5}} <span style="color:blue">{{pay.strip.currency}}</span></td>

       <td v-if=" pay.item.documents" >
                <div style="position:relative;margin-left:15px">{{pay.item.quantityDocument}}</div> 
              </td>
              <td v-else>
                <i class="fa fa-remove" style="font-size: 25px; color: red"></i>
              </td>
              <td v-if="pay.item.computer">
                <div style="position:relative;margin-left:25px">{{pay.item.quantityComputer}}</div> 
                
              </td>
              <td v-else >
                <i class="fa fa-remove" style="font-size: 25px; color: red"></i>
              </td>
     </tr>
   </tbody>
 </table>

<!-- Fim tabela -->
</div>
  </div>

  <div class="tab__content">
    <h5>Historique d'achat des articles</h5>
    <div class="container" style="position: relative; margin-bottom: 50px; max-width: 100%;" >
 
 <table class="table table-striped">
   <thead>
     <tr>
       <th scope="col">Date</th>
       <th scope="col">Montant</th>
       <th scope="col">Operation</th>
       <th scope="col">Details</th>
     </tr>
   </thead>
   <tbody style="text-transform: capitalize">
     <tr v-for="pay in stripArticle" :key="pay.id">
       <td>{{pay.date}}</td>
       <td>{{pay.amount/100}} <span style="color:blue">{{pay.currency}}</span></td>
       <td>{{pay.description}}</td>
       <td>
        <button
        @click="artCheck(pay.date, pay.amount, pay.currency)"
        data-target="#Modal"
    data-toggle="modal"
                  style="height: 45px; width: 40px; margin-right: 5px"
                  type="button"
                  class="btn btn-sm btn-info mr-1"
                >
                  <i class="fa fa-eye" style="font-size: 20px"></i>
                </button></td>
     </tr>
   </tbody>
 </table>

<!-- Fim tabela -->
</div>
  </div>
</div>
</div>


<footerVue/>

</div>
</template>
<script>
import Swal from "sweetalert2";
import footerVue from "@/components/footer.vue";
import lognavVue from "../components/lognav.vue";
import usersidebarVue from "../components/usersidebar.vue";
export default{
    data() {
    return {
      subInfo :[],
      total:"",
      currency:"",
      PurchesArt:[],
      PurchesRev:[],
        receipt:"",
        login1:false,
        userIds:[],
        ids:[],
        path: [],
        Pay:[],
        stripArticle:[],
        stripReservation:[],
        rev:[],
        urel: this.$url
    }; 
  },
  components: {
        lognavVue,
    usersidebarVue,
    footerVue,
    },

    computed: {
    pairs() {
      return this.rev.map((item, i) => {
        return {
          item: item,
          strip: this.stripReservation[i],
        };
      });
      
    },
    
  },
  mounted(){
    var requestoptions1 = { method: 'GET', redirect: 'follow' };

fetch(this.$url+"/sub/informations/view", requestoptions1)
  .then(response => response.text())
  .then(result => {
    if (JSON.parse(result).length !== 0) {
      this.subInfo = JSON.parse(result)[0]

       
    }
    console.log("subbb", this.subInfo)
  })
  .catch
    var axios = require("axios");

var config1 = {
  method: "get",
  url:
    this.$url+"/user/" +
    localStorage.getItem("userId") +
    "/reservations",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("access-token"),
  },
};

axios(config1)
  .then((res) => {
    for( let i=0; i<res.data.length; i++){
      if (res.data[i].userDto.id === localStorage.getItem("userId") && res.data[i].paidReservation) {
   this.rev.push(res.data[i])


    }
   
    }
    this.rev.date.sort(function(a,b){
      return Number(new Date(a.readableDate)) - Number(new Date(b.readableDate));
    });

    console.log("paiy", this.rev)
  })
  .catch(function (error) {
    this.error = true

    console.log(error);
    // localStorage.clear()
    // window.location.href = "/"
  });


var config = {
  method: 'get',
  url: this.$url+'/user/payments?userid='+ localStorage.getItem("userId"),
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
  }
};

axios(config)
.then((res) => {
    let pat = []
    pat.push(res.data)
    for(let i = 0; i<pat.length; i++){
        for(let y=0 ; y<pat[i].length; y++)
                    {
                      if( pat[i][y].description==="Reservation"){ 
                        // console.log(pat[i][y]);
                        this.stripReservation.push(pat[i][y])
                      }else{
                        this.stripArticle.push(pat[i][y])
                      }
                    }

}

this.stripArticle.reverse()
})
.catch(function (error) {
  console.log(error);
  Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Quelque chose s'est mal passé!",
          })
        //   localStorage.clear()
        // window.location.href = "/"
});


  }, 
  methods: {
revCheck(date, amount, currency){
  this.total = 0;
  var axios = require("axios");

var config = {
  method: "get",
  url: this.$url+'/user/reservations/paid',
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("access-token"),
  },
};

axios(config)
  .then((res) => {
      let Purches = res.data;
      
      for(let x=0; x<Purches.length; x++){
       if(Purches[x].date === date){
        
        this.PurchesRev.push(Purches[x])
        
       }else{
        console.log("not found")
       }
      }
      this.PurchesRev.reverse();
      this.total = amount;
      this.currency = currency;
      console.log("allll", res.data)
  })
  .catch(function (error) {
    console.log(error);
   
  });
 
},
artCheck(date, amount, currency){
  this.PurchesArt= [];
  this.total = 0;
  var axios = require("axios");

var config = {
  method: "get",
  url: this.$url+'/user/destinations?userid='+ JSON.parse(localStorage.getItem("infoUser")).id,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("access-token"),
  },
};

axios(config)
  .then((res) => {
      let Purches = res.data;
      
      for(let x=0; x<Purches.length; x++){
       if(Purches[x].date === date){
        
        this.PurchesArt.push(Purches[x])
        
       }else{
        console.log("not found")
       }
      }
      this.PurchesArt.reverse();
      this.total = amount;
      this.currency = currency;
  })
  .catch(function (error) {
    console.log(error);
   
  });
 
},
    view(path){
 this.receipt =path;
 console.log( this.receipt)
    }
  }
   }
</script>
<style lang="scss">
$max-tab-count: 5;
$tab-wrap-border-radius: 6px;
.tab-wrap {
  transition: 0.3s box-shadow ease;
  border-radius: $tab-wrap-border-radius;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  list-style: none;
  background-color: #fff;
  margin: 40px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  &:hover {
    box-shadow: 0 12px 23px rgba(0, 0, 0, 0.23), 0 10px 10px rgba(0, 0, 0, 0.19);
  }
}
body {
  font-family: 'Helvetica', sans-serif;
  color: #777;
  padding: 30px 0;
  font-weight: 300;
}
.tab {
  display: none;
  @for $i from 1 through $max-tab-count {
    &:checked:nth-of-type(#{$i}) ~ .tab__content:nth-of-type(#{$i}) {
      opacity: 1;
      transition: 0.5s opacity ease-in, 0.8s transform ease;
      position: relative;
      top: 0;
      z-index: 100;
      transform: translateY(0px);
      text-shadow: 0 0 0;
    }
  }
  &:first-of-type:not(:last-of-type) + label {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:not(:first-of-type):not(:last-of-type) + label {
    border-radius: 0;
  }
  &:last-of-type:not(:first-of-type) + label {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  &:checked + label {
    background-color: #fff;
    box-shadow: 0 -1px 0 #fff inset;
    cursor: default;
    &:hover {
      box-shadow: 0 -1px 0 #fff inset;
      background-color: #fff;
    }
  }
  + label {
    box-shadow: 0 -1px 0 #eee inset;
    border-radius: $tab-wrap-border-radius $tab-wrap-border-radius 0 0;
    cursor: pointer;
    display: block;
    text-decoration: none;
    color: #333;
    flex-grow: 3;
    text-align: center;
    background-color: #f2f2f2;
    user-select: none;
    text-align: center;
    transition: 0.3s background-color ease, 0.3s box-shadow ease;
    height: 50px;
    box-sizing: border-box;
    padding: 15px;
    &:hover {
      background-color: #f9f9f9;
      box-shadow: 0 1px 0 #f4f4f4 inset;
    }
  }
  &__content {
    padding: 10px 25px;
    background-color: transparent;
    position: absolute;
    width: 100%;
    z-index: -1;
    opacity: 0;
    left: 0;
    transform: translateY(-3px);
    border-radius: $tab-wrap-border-radius;
  }
}


/* boring stuff */


.container1 {
  margin: 0 auto;
  display: block;
  max-width: 85%;
  > *:not(.tab-wrap) {
    padding: 0 80px;
  }
}

h1,
h2 {
  margin: 0;
  color: #444;
  text-align: center;
  font-weight: 400;
}

h2 {
  font-size: 1em;
  margin-bottom: 30px;
}

h3 {
  font-weight: 400;
}

p {
  line-height: 1.6;
  margin-bottom: 20px;
}
</style>










