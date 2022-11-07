<template>


    <body id="landing" class="sidebar-open">
        <div style="position:relative:; padding-bottom:160px;">
            <employeeNavbarVue />
        
        </div>

        <h3 style="position:relative; text-align: center; margin-top: -60px; margin-bottom: 80px;">
       Historique des Rémunérations
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
<div class="container" style="position: relative; margin-bottom: 50px" >
 
    <h5 class="mt-2 mb-3 float-left ">
        Paiements qui ont été effectués par  <span class = "text-primary">DGA</span> au Clients
     </h5>
  
   <table class="table table-striped">
     <thead>
       <tr>
         <th scope="col">Operation</th>
         <th scope="col">Bénéficiaire</th>
         <th scope="col">Date</th>
         <th style="margin-left: 40px" scope="col">Action</th>
       </tr>
     </thead>
     <tbody style="text-transform: capitalize">
       <tr v-for="pay in path" :key="pay.id">
         <td>{{pay.split('_')[3]}}</td>
         <td>{{pay.split('_')[1]}}</td>
         <td>{{pay.split('_')[2]}}</td>
         <td>
           <form> 
             <!-- <button  v-on:click="view(user.id)" data-target="#exampleModal" data-toggle="modal" style="height:45px; width:40px;  margin-right:5px;" type="button" class="btn btn-sm btn-info mr-1" disabled><i class="fa fa-eye" style="font-size:20px"></i></button>-->

             <button
               v-on:click="view(pay)"
               data-toggle="modal" data-target=".bd-example-modal-lg"
               style="height: 45px; width: 40px; margin-right: 5px"
               type="button"
               class="btn btn-sm btn-info mr-1"
             >
               <i class="fa fa-eye" style="font-size: 20px"></i>
             </button>
           
           </form>
         </td>
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
  async created() {

      var axios = require('axios');
      var data = '';
  
      var config = {
        method: 'get',
        url: 'http://46.105.36.240:3000/admin/users',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access-token')
        },
        data: data
      };
  
      axios(config).then(res => {
       
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].pseudo !=="DGA-EMPLOYEE" && res.data[i].pseudo !== "Admin") {
            this.userIds.push(res.data[i])
console.log("uders",res.data[i].id )
              
        var axios = require('axios');
            var config = {
  method: 'get',
  url: 'http://46.105.36.240:3000/bills/paths/'+res.data[i].id,
  headers: { 
    'Content-Type': 'application/json'
  }
};





axios(config)
.then((res) => {
    let pat = []
    pat.push(res.data)
               
                for(let j=0 ; j<pat.length; j++){
                    
                    for(let y=0 ; y<pat[j].length; y++)
                    {
                        // console.log(pat[j][y]);
                        this.path.push(pat[j][y])
                    }
                }
            })

.catch(function (error) {
  console.log(error);
});

          }
        }
        


      
      })
        .catch(function (error) {
          this.loading = false
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Quelque chose s'est mal passé!",
          })
          this.loading = false
          console.log(error);
        });
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
                        // console.log(pat[i][y]);
                        this.strip.push(pat[i][y])
                    }
    }
            })
.catch(function (error) {
  console.log(error);
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










