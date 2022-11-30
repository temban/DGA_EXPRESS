<template>


    <div>
        <div style="margin-left: 60px">
      <lognavVue />
    </div>
<usersidebarVue/>

        <h3 style="position:relative; text-align: center;">Historique d'achat
   </h3>      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
 
      <div style="height: 550px;width:1000px">
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


            <!-- <button @click="but()" id="demo">but</button> -->

    
          <!--  -->
    <div class="container" style="position: relative; margin-bottom: 50px" >
 
   <table class="table table-striped">
     <thead>
       <tr>
         <th scope="col">Identifiant de transaction</th>
         <th scope="col">Date</th>
         <th scope="col">Montant</th>
         <th scope="col">Operation</th>
       </tr>
     </thead>
     <tbody style="text-transform: capitalize">
       <tr v-for="pay in strip" :key="pay.id">
         <td>{{pay.id}}</td>
         <td>{{pay.date}}</td>
         <td>{{pay.amount/100}} <span style="color:blue">{{pay.currency}}</span></td>
         <td>{{pay.description}}</td>
       </tr>
     </tbody>
   </table>

 <!-- Fim tabela -->
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
        lognavVue,
    usersidebarVue,
    footerVue,
    },

  
  mounted(){
    var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://dga-express.com:8443/user/payments?userid='+ localStorage.getItem("userId"),
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
          localStorage.clear()
        window.location.href = "/"
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










