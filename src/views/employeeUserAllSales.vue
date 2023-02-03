<template>
   <div id="landing" class="sidebar-open">
        <div style="position:relative:; padding-bottom:120px;">
            <employeeNavbarVue />
            
        </div>



      <div
        style="margin-left: 100px; margin-bottom: 30px; width: 90%; background-color: white"
      >
        <h3 class="mt-2 mb-3 float-left text-primary">Les Ventes des utilisateurs</h3>
        
        <table class="table table-striped">
            
          <thead>
            <tr>
              <th scope="col">Adresse de Livraison</th>
              <th scope="col">Acheteurs</th>
              <th scope="col">Vendeurs</th>
              <th scope="col">Articles</th>
              <th scope="col">Prix par Article</th>
              <th scope="col">Quantité</th>
              <th scope="col">Quantité achetée</th>
              <th scope="col">Prix Total</th>
              <th scope="col">Paiement</th>
              <!-- <th scope="col">Actions</th> -->
            </tr>
          </thead>
          <th colspan="8"><div v-if="error" > 
                   <tableEmptyVue/>
                   </div> </th>    
          <tbody style="text-transform: capitalize">
            <tr v-for="item in AllPurches" v-bind:key="item.id">
              <td>{{ item.address }}</td>
              <td>{{ item.user.firstName + " " + item.user.lastName }}</td>
              <td>{{ item.article.user.firstName + " " + item.article.user.lastName }}</td>
              <td>{{ item.article.name }}</td>
              <td>{{ item.article.price }}</td>
              <td>{{ item.article.quantity }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.quantity*  item.article.price }}</td>
              <td v-if="!item.paid"> 

                    
<a type="submit" name="learn" value="myimage" style="border-radius: 30px" @click="sendPaymentProof(item)">
<img src="@/assets/img/hotels/pay.jpg" class="rounded-circle img-fluid" style="
    image-resolution: 3000000dpi;  
    background-color: #000; 
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    max-width: 100%;
    max-height: 100%;
    height: 50px; 
    width: 45px;
    margin-bottom: -15px; 
    margin-top: 0px;
    border: 2px solid black; 
  " />
</a>

</td>
<td v-else >
                  <span class="badge badge-primary font-weight-100">Payé</span>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Fim tabela -->
 

    </div>
</template>
<script>
import Swal from "sweetalert2";
import employeeNavbarVue from '../components/employeeNavbar.vue'
export default {
    name: "Home",

    data() {
    return {
        articles:[],
        Purches:[],
        AllPurches:[]
      
    };
  },
    components: {
        employeeNavbarVue,
    },
  async created() {

      var axios = require('axios');
      var data = '';
  
      var config = {
        method: 'get',
        url: this.$url+"/articles",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access-token')
        },
        data: data
      };
  
      axios(config).then(res => {
        let a=[];
   for (let i = 0; i < res.data.length; i++) {     
a.push(res.data[i].id)
var axios = require('axios');
          var config = {
method: 'get',
url: this.$url+'/destination/article?articleId='+ res.data[i].id,
headers: { 
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + localStorage.getItem('access-token')
}
};
axios(config)
.then((res) => {
  for(let k =0; k<res.data.length; k++){
    this.AllPurches.push(res.data[k])
   
  }
  console.log("payement", res.data)
          })

.catch(function (error) {
console.log(error);
});
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
  

methods:{
  sendPaymentProof(item){
console.log("items", item)
let sendPaymentProof = [];
sendPaymentProof = item;
localStorage.setItem("sendPaymentProof", JSON.stringify(sendPaymentProof))
window.location.href="/employeeSendArtPaymentProof"
},
}
}
</script>
