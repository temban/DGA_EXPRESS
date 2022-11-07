<template>
    <div>
        <div style="margin-left: 60px">
      <lognavVue />
    </div>
<usersidebarVue/>

<div class="container">
      <b-container
        style="margin-left: 32px; margin-bottom: 30px; background-color: white"
      >
        <h3 class="mt-2 mb-3 float-left text-primary">Mes Ventes</h3>
        
        <table class="table table-striped">
            
          <thead>
            <tr>
              <th scope="col">Adresse de Livraison</th>
              <th scope="col">Acheteur</th>
              <th scope="col">Article</th>
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
              <td>{{ item.user.firstName + " " + item.user.lastName }}</td>
              <td>{{ item.article.name }}</td>
              <td>{{ item.quantity }}</td>
              <td v-if="!item.paid" >
                  <span class="badge badge-warning font-weight-100">En cours..</span>
                </td>
              <td v-else >
                  <span class="badge badge-primary font-weight-100">Payé</span>
                </td>
            </tr>
          </tbody>
        </table>
      </b-container>
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
        var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("access-token")
    );

    var requestOptions = { 
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "http://46.105.36.240:3000/user/" +
        JSON.parse(localStorage.getItem("infoUser")).id +
        "/articles/",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
            this.articles = JSON.parse(result);

            for(let i=0; i<this.articles.length; i++){
                this.articles[i].id
                


var axios = require("axios");

var config = {
  method: "get",
  url: 'http://46.105.36.240:3000/destination/article?articleId='+ this.articles[i].id,
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
      
  })
  .catch(function (error) {
    console.log(error);
  });


            }
    
        
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        console.log("error", error);
        this.error=true
      });
}
}
</script>