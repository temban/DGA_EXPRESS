<template>


    <body id="landing" class="sidebar-open">
        <div style="position:relative:; padding-bottom:160px;">
            <employeeNavbarVue />
        
        </div>

        <h3 style="position:relative; text-align: center; margin-top: -60px; margin-bottom: 80px;">
            Paiements qui ont été effectués par les Clients a <span class = "text-primary">DGA</span> 
   </h3>      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
 
      <div style="height: 550px;width:1000px">
                  <a :href="'http://46.105.36.240:3000/bill/image?file=' + this.receipt" target="_blank">

                  <img :src="'http://46.105.36.240:3000/bill/image?file=' + this.receipt" style="
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
</div>


            <!-- <button @click="but()" id="demo">but</button> -->

    
          <!--  -->
    <div style="position: relative; margin-bottom: 50px; width: 90%; margin-left: 100px;" >
 
   <table class="table table-striped">
     <thead>
       <tr>
        <th scope="col">Propriétaire</th>
         <th scope="col">Identifiant de transaction</th>
         <th scope="col">Nom</th>
         <th scope="col">Numero</th>
         <th scope="col">Date</th>
         <th scope="col">Montant</th>
         <th scope="col">Operation</th>
         <th scope="col">Email</th>
       </tr>
     </thead>
     <tbody style="text-transform: capitalize">
       <tr v-for="pay in strip" :key="pay.id">
        <img v-if="pay.user.profileimgage !== ''" :src="
                  'http://46.105.36.240:3000/' +
                  pay.user.profileimgage
                " style="width: 60px; height: 60px; border-radius: 30px" />
                <img v-else src="@/assets/img/hotels/59710428.png"
                  style="width: 60px; height: 60px; border-radius: 30px" />
         <td>{{pay.id}}</td>
         <td>{{pay.user.firstName + " " + pay.user.lastName}}</td>
         <td style="position:relative;width:150px">{{pay.user.phone}}</td>
         <td>{{pay.date}}</td>
         <td>{{pay.amount/100}} <span style="color:blue">{{pay.currency}}</span></td>
         <td>{{pay.description}}</td>
         <td>{{pay.stripeEmail}}</td>
       </tr>
     </tbody>
   </table>

 <!-- Fim tabela -->
</div>

 
    
    </body>
</template>

<script>
import employeeNavbarVue from '../components/employeeNavbar.vue'
import Swal from 'sweetalert2';
export default{
    data() {
    return {
        receipt:"",
        login1:false,
        userIds:[],
        ids:[],
        path: [],
        Pay:[],
        strip:[]
    }; 
  },
  components: {
    employeeNavbarVue
  },

  
  mounted(){
    var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://46.105.36.240:3000/payments',
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
                        console.log(pat[i][y]);
                        this.strip.push(pat[i][y])
                    }
    }
            })
.catch(function (error) {
  console.log(error);
  Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Quelque chose s'est mal passé!",
          })
});


  }, 
  methods: {
    view(path){
 this.receipt =path;
 console.log( this.receipt)
    }
  }
   }
</script>
<style>

</style>










