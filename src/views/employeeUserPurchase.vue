<template>
   <body id="landing" class="sidebar-open">
        <div style="position:relative:; padding-bottom:120px;">
            <employeeNavbarVue />
            
        </div>


<div class="container">
      <b-container
        style="margin-left: 32px; margin-bottom: 30px; background-color: white"
      >
        <h3 class="mt-2 mb-3 float-left text-primary">Les ventes de l'utilisateur</h3>
        
        <table class="table table-striped">
            
          <thead>
            <tr>
              <th scope="col">Adresse de Livraison</th>
              <th scope="col">Acheteurs</th>
              <th scope="col">Articles</th>
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
              <td>
                <!-- <form>

                  <button
                    @click="view(item)"
                    data-target="#exampleModal"
                    data-toggle="modal"
                    style="height: 45px; width: 40px; margin-right: 5px"
                    type="button"
                    class="btn btn-sm btn-info mr-1"
                  >
                    <i class="fa fa-eye" style="font-size: 20px"></i>
                  </button>
                  <router-link
                    style="height: 45px; width: 40px"
                    class="btn btn-sm btn-info mr-1"
                    :to="{ name: 'EditArticle', params: { id: item.id } }"
                    ><i class="fa fa-pencil" style="font-size: 20px"></i
                  ></router-link>
                  <button
                    @click="deleteArticle(item.id)"
                    style="height: 45px; width: 40px"
                    type="button"
                    class="btn btn-sm btn-danger"
                  >
                    <i class="fa fa-trash" style="font-size: 20px"></i>
                  </button>
                </form> -->
              </td>
            </tr>
          </tbody>
        </table>
      </b-container>
      <!-- Fim tabela -->
    </div>

    </body>
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
                        console.log(pat[j][y]);
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
          localStorage.clear()
        window.location.href = "/"
        });
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
        localStorage.getItem("UserPurchesId") +
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
