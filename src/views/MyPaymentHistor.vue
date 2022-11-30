<template>


    <body id="landing" class="sidebar-open">
        <div style="margin-left: 60px">
      <lognavVue />
      <h3 style="position:relative; text-align: center;">
       Historique des Rémunérations de <span  class=" text-primary">{{this.firstname+ " " + this.lastname}}</span>
     </h3>
    </div>>
            <usersidebarVue />
        
        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
 
      <div style="height: 550px;">
                  <a :href="'https://dga-express.com:8443/bill/image?file=' + this.receipt" target="_blank">

                  <img :src="'https://dga-express.com:8443/bill/image?file=' + this.receipt" style="
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
<div>

            <div class="container" style="position: relative; margin-bottom: 50px" >
     
     <h4 class="mt-2 mb-3 float-left">
        Paiements qui vous a été effectué par <span class = "text-primary">DGA</span> 
     </h4>
    
     <table class="table table-striped">
       <thead>
         <tr>
           <th scope="col">Transation</th>
           <th scope="col">Date</th>
           <th style="margin-left: 40px" scope="col">Action</th>
         </tr>
       </thead>
       <tbody style="text-transform: capitalize">
         <tr v-for="pay in path" :key="pay.id">
           <td>{{pay.split('_')[3]}}</td>
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


</div>
    


   
    <footerVue/>
    </body>
</template>

<script>

import usersidebarVue from "../components/usersidebar.vue";
import footerVue from "@/components/footer.vue";
import lognavVue from "../components/lognav.vue";
export default{
    data() {
    return {
      
        lastname: localStorage.getItem("lastName"),
        firstname:localStorage.getItem("firstName"),
        receipt:"",
        login1:false,
        userIds:[],
        ids:[],
        path: [],
        Pay:[]
    }; 
  },
  components: {
    footerVue, 
    lognavVue, 
    usersidebarVue
  },
  async created() {

  
        var axios = require('axios');
        var config = {
  method: 'get',
  url: 'https://dga-express.com:8443/bills/paths/' + localStorage.getItem("userId"),
  headers: { 
    'Content-Type': 'application/json'
  }
};
axios(config)
.then((res) => {

console.log('pathsss', res.data)
                        this.path = res.data
            })

.catch(function (error) {
  console.log(error);
  // localStorage.clear()
  //       window.location.href = "/"
});


    },
  
  mounted(){


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










