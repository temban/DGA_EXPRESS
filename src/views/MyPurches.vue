<template>
    <div>
        <div style="margin-left: 60px">
      <lognavVue />
    </div>
<usersidebarVue/>

<div style="margin-left:100px; margin-right:40px; margin-top:40px; margin-bottom:70px">
        <h3 class="mt-2 mb-3 float-left text-primary">Achats effectués par moi</h3>
        
        <table class="table table-striped">
            
          <thead>
            <tr>
              <th scope="col">Mon adresse de livraison</th>
              <th scope="col">Vandeur</th>
              <th scope="col">Article</th>
              <th scope="col">Prix</th>
              <th scope="col">Date</th>
              <th scope="col">Quantité achetée</th>
              <th scope="col">Paiement</th>

              <!-- <th scope="col">Actions</th> -->
            </tr>
          </thead>
          <th colspan="8"><div v-if="error" > 
                   <tableEmptyVue/>
                   </div> </th>    
          <tbody style="text-transform: capitalize">
            <tr v-for="item in Purches" v-bind:key="item.id">
              <td>{{ item.address }}</td>
              <td>{{ item.article.user.firstName + " " + item.article.user.lastName }}</td>
              <td>{{ item.article.name }}</td>
              <td>{{ item.article.price }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.quantity }}</td>
              <td v-if="!item.paid" >
                  <span class="badge badge-warning font-weight-100">En cours..</span>
                </td>
              <td v-else >
                  <span class="badge badge-primary font-weight-100">le vendeur a été payé</span>
                </td>
            </tr>
          </tbody>
        </table>
    
      <!-- Fim tabela -->
    </div>
<footerVue/>

    </div>
</template>
<script>
import footerVue from "@/components/footer.vue";
import lognavVue from "../components/lognav.vue";
import usersidebarVue from "../components/usersidebar.vue";
export default {
    name: "Home",

    data() {
    return {
        articles:[],
        Purches:[],
      
    };
  },
    components: {
        lognavVue,
    usersidebarVue,
    footerVue,
    },


    mounted(){


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
        console.log('blaise', Purches[x]);
        this.Purches.push(Purches[x])
      }
      this.Purches.reverse()
      console.log("jj",this.Purches);
  })
  .catch(function (error) {
    console.log(error);
    localStorage.clear()
        window.location.href = "/"
  });

}
}
</script>