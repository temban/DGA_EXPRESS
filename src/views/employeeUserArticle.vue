<template>

    <body id="landing" class="sidebar-open">
        <employeeNavbarVue />

        <div class="card card-hover" style="margin-left: 70px;margin-bottom:0px;">

            <div class="card-body" style="margin-top:90px;margin-left:50px">
                <h4 class="card-title text-primary fs-3">{{firstName + " " + lastName}}</h4>
                <table class="table table-striped table-hover table-borderless table-vcenter font-size-sm">
                    <thead>
                        <tr class="">
                            <th class="font-w700">Propriétaire</th>
                            <th class="font-w700">Article</th>
                            <th class="font-w700">Catégorie</th>
                            <th class="font-w700">Ville</th>
                            <th class="font-w700">quantité</th>
                            <th class="font-w700">prix</th>
                            <th class="font-w700">Statut</th>
                            <th class="font-w700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="item in articles" v-bind:key="item.id">
                            <td><span class="font-w600 text-uppercase">{{ item.user.lastName }}</span></td>
                            <td><span class="font-w600 text-uppercase">{{ item.name }}</span>
                            </td>
                            <td><span class="font-w600">{{ item.cathegory.name }}</span></td>
                            <td><span class="font-w600">{{ item.location }}</span></td>
                            <td><span class="font-w600">{{ item.quantity }}</span></td>
                            <td><span class="font-w600">{{ item.price }}</span></td>
                            <td>

                                <span v-if="item.status == `ENABLED`" class="font-w600 text-success">{{"Visible"}}</span>
                                <span v-if="item.status == `DISABLED`" class="font-w600 text-danger">{{"Supprimé"}}</span>
                            </td>

                            <td>
                                <button v-on:click="view(item)" data-target="#exampleModal" data-toggle="modal"
                                    style="height:45px; width:40px;" type="button" class="btn btn-sm btn-info mr-1"><i
                                        class="fa fa-eye" style="font-size:20px"></i></button>
                                <button @click="deleteArticles(item.id)" style="height:45px; width:40px;" type="button"
                                    class="btn btn-sm btn-danger mr-1"> <i class="fa fa-trash"
                                        style="font-size:20px"></i> </button>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Informations sur l'article</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="">
                                <div>
                                    <div class="container bootstrap snippets bootdey" style="background:#d9dedf; ">
                                        <section id="contact" class="gray-bg padding-top-bottom">
                                            <div class="container bootstrap snippets bootdey">
                                                <div class="im" style="width:100%;display: flex;flex-wrap: wrap;">
                                                    <img v-for="(im,id) in path" v-bind:key="id" :src="`https://dga-express.com:8443/article/image?file=${im}`" style="height: 180px;width: 180px;margin: 5px;border: 2px solid #fff;"/>
                                                </div>
                                                <div class="row">
                                                    <form id="Highlighted-form" class="col-sm-6 col-sm-offset-3">
                                                        <div class="form-group">

                                                            <div class=" controls">
                                                                <h6> Article</h6><input v-model="name" id="contact-mail"
                                                                    name="text"
                                                                    class="form-control requiredField Highlighted-label"
                                                                    type="text" readonly>
                                                                <i class="fa fa-sticky-note"></i>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">

                                                            <div class=" controls">
                                                                <h6> Catégorie</h6><input v-model="cathegory"
                                                                    id="contact-mail" name="text"
                                                                    class="form-control requiredField Highlighted-label"
                                                                    type="text" readonly>
                                                                <i class="fa fa-hashtag"></i>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">

                                                            <div class=" controls">
                                                                <h6> Ville</h6><input v-model="location"
                                                                    id="contact-mail" name="text"
                                                                    class="form-control requiredField Highlighted-label"
                                                                    type="text" readonly>
                                                                <i class="fa fa-map-marker"></i>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">

                                                            <div class=" controls">
                                                                <h6> quantité</h6><input v-model="quantity"
                                                                    id="contact-mail" name="text"
                                                                    class="form-control requiredField Highlighted-label"
                                                                    type="text" readonly>
                                                                <i class="fa fa-sort-numeric-asc"></i>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">

                                                            <div class=" controls">
                                                                <h6> prix</h6><input v-model="price" id="contact-mail"
                                                                    name="text"
                                                                    class="form-control requiredField Highlighted-label"
                                                                    type="text" readonly>
                                                                <i class="fa fa-money"></i>
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                <div class="controls">
                                  <h6>Method de Paiement</h6>
                                  <a v-if="cop" style="position:absolute; right:-163px; top:-2px"><i v-on:click="copyText()" class="fa fa-copy mye"
         style="font-size:28px;padding-bottom:10px; margin-top: 38px;color:green"></i> </a>
                                                               
        <a style="position:absolute; right:-163px; top:-2px" v-else><i v-on:click="copyText()" class="fa fa-copy mye" 
        style="font-size:28px;padding-bottom:10px; margin-top: 38px;"></i> </a>
                 
                                  <input
                                    v-model="paymentMethod"
                                    id="contact-mail"
                                    name="email"
                                    class="
                                      form-control
                                      requiredField
                                      Highlighted-label
                                    "
                                    type="email"
                                    readonly
                                  />
                                  <i class="fa fa-credit-card" v-if="paymentMethod.length >15"></i>
                                   <i class="fa fa-mobile" style="font-size:35px" v-else></i>
                                </div>
                              </div>

                                                        <div class="form-group">

                                                            <div class="controls">
                                                                <h6>La Description</h6> <textarea v-model="description"
                                                                    id="contact-message" name="comments"
                                                                    placeholder="Your message"
                                                                    class="form-control requiredField Highlighted-label"
                                                                    rows="6" readonly></textarea>
                                                                <i class="fa fa-comment"></i>
                                                            </div>
                                                        </div><!-- End textarea -->
                                                        <hr>
                                                        <h5 class="modal-title" id="exampleModalLabel">Owner Info
                                                        </h5>

                                                        <div class="form-group">

                                                            <div class="controls">
                                                                <h6>Nom</h6><input v-model="userName" id="contact-name"
                                                                    name="contactName"
                                                                    class="form-control requiredField Highlighted-label"
                                                                    type="text" readonly>
                                                                <i class="fa fa-user" style="margin-bottom:-30px"></i>
                                                            </div>
                                                            </div>
                                                        <div class="form-group">
                                                            <div class="controls">
                                                                <h6>Numero</h6><input v-model="tel" id="contact-name"
                                                                    name="contactName"
                                                                    class="form-control requiredField Highlighted-label"
                                                                    type="text" readonly>
                                                                <i class="fa fa-phone" style="margin-bottom:-30px"></i>
                                                            </div>
                                                         </div>
                                                        <div class="form-group">
                                                            <div class="controls">
                                                                <h6>E-mail</h6><input v-model="email" id="contact-name"
                                                                    name="contactName"
                                                                    class="form-control requiredField Highlighted-label"
                                                                    type="text" readonly>
                                                                <i class="fa fa-envelope" style="margin-bottom:-30px"></i>
                                                            </div>
                                                        </div><!-- End name input -->

                                                    </form><!-- End Highlighted-form -->
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
    </body>
</template>

<script>
import employeeNavbarVue from '../components/employeeNavbar.vue'
import Swal from 'sweetalert2';
export default {
    components: {
        employeeNavbarVue
    },
    data() {
        return {
            articles: [],
            date: '',
            path: [],
            name: "",
            paymentMethod:'',
            cathegory: "",
            location: "",
            quantity: "",
            price: "",
            cop:false,
            description: "",
            user: {},
            userName: "",
            id: this.$route.params.id,
            firstName: this.$route.params.firstName,
            lastName: this.$route.params.lastName,
            tel:"",
            email:""
        }
    },
    async created() {
        var myHeaders0 = new Headers();
        myHeaders0.append("Content-Type", "application/json");
        myHeaders0.append("Authorization", "Bearer " + localStorage.getItem("access-token"));

        var requestOptions0 = {
            method: 'GET',
            headers: myHeaders0,
            redirect: 'follow'
        };

        fetch("https://dga-express.com:8443/user/"+this.id+"/articles/", requestOptions0)
            .then(response => response.text())
            .then(result => { this.articles = JSON.parse(result); })
            .catch(error => {
                localStorage.clear()
                window.location.href = "/"
                console.log('error', error)});
    },
    methods: {
        sendPaymentProof(item){
console.log("items", item)
let sendPaymentProof = [];
sendPaymentProof = item;
localStorage.setItem("sendPaymentProof", JSON.stringify(sendPaymentProof))
window.location.href="/employeeSendArtPaymentProof"

},

        copyText() {
      navigator.clipboard.writeText(this.paymentMethod).then(() => {
        this.cop = true;
        alert('text copied: ' + this.paymentMethod)
      })
    },

        view(item) {
            this.name = item.name
            this.cathegory = item.cathegory.name
            this.location = item.location
            this.quantity = item.quantity
            this.price = item.price
            this.description = item.description
            this.userName = item.user.firstName + " " + item.user.lastName
            this.tel = item.user.phone
            this.email = item.user.email
            this.paymentMethod = item.paymentMethod;

            var requestOptions5 = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("https://dga-express.com:8443/article/paths/" + item.id, requestOptions5)
                .then(response => response.text())
                .then(result => {
                    this.path = JSON.parse(result)
                    console.log(`https://dga-express.com:8443/article/image?file=${this.path[0]}`);
                })
                .catch(error => console.log('error', error));
        },
        deleteArticles(id) {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    width: 720,
                    confirmButton: 'btn btn-success ml-3',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: 'Êtes-vous sûr?',
          text: "Vous ne pourrez pas revenir en arrière!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Oui,  Supprimer',
                cancelButtonText: 'Non, Annuler!',
          reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");
                    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("access-token"));

                    var requestOptions = {
                        method: 'DELETE',
                        headers: myHeaders,
                        redirect: 'follow'
                    };

                    fetch("https://dga-express.com:8443/delete/article/" + id, requestOptions)
                        .then(response => response.text())
                        .then(result => {
                            console.log(result)
                            swalWithBootstrapButtons.fire(

                                'supprimé!',
                        "l'article a été supprimé",
                        'success'
                            )
                            window.location.reload()
                        })
                        .catch(error => console.log('error', error));


                } 
            })
        },
    },
}
</script>

<style>
.h6 {
    font-size: 18px;
    font-weight: 600;
}

.contact-item .icon {
    display: block;
    font-size: 48px;
    color: #5cc9df;
    text-shadow: -2px 2px 0 rgba(0, 0, 0, 0.1);
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
}

.contact-item .icon:hover {
    color: #5cc9df;
    -webkit-transform: scale(1.3) translateY(-10px);
    transform: scale(1.3) translateY(-10px);
}



.bl_form input {
    background: rgba(255, 255, 255, 0.10);
    box-shadow: 0 4px 0px rgba(0, 0, 0, 0.2);
    border: none;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
}

.lb_wrap .lb_label.top,
.lb_wrap .lb_label.bottom {
    left: 66px !important;
}

.lb_wrap .lb_label.left {
    left: 0;
}

.lb_label {
    font-size: 18px;
    font-weight: 400;
    color: rgb(0, 0, 0);
}

.no-placeholder .lb_label {
    display: none;
}

.lb_label.active {
    color: #aaa;
}

#Highlighted-form .form-group label {
    display: none;
    font-size: 18px;
    font-weight: 100;
    text-transform: uppercase;
}

#Highlighted-form.no-placeholder .form-group label {
    display: block;
}

#Highlighted-form .controls {
    padding: 0;
    margin-top: 10px;
}

#Highlighted-form.no-placeholder .controls {
    margin-top: 0;
}

#Highlighted-form .form-control {
    display: inline;
    width: 400px;
    background: #fff;
    border: none;
    border-radius: 5px;
    outline: none;
    box-shadow: 0 4px 0 rgba(0, 0, 0, 0.05);
    height: 48px;
    font-size: 18px;
    color: rgb(0, 0, 0);
    font-weight: 400;
    padding-left: 54px;
}

#Highlighted-form .form-group.half-width {
    width: 40%;
    float: left;
}

#Highlighted-form .form-group {
    position: relative;
}

#Highlighted-form .form-group [class*=fa] {
    display: block;
    width: 45px;
    position: absolute;
    top: 0;
    left: 5px;
    margin-top: 35px;
    color: rgb(255, 115, 0);
    font-size: 24px;
    line-height: 52px;
    text-align: center;
    font-weight: 300;
    -webkit-transition: color .3s ease-out;
    transition: color .3s ease-out;
}

#Highlighted-form .form-group [class*=fa].active {
    color: #ccc;
}

#Highlighted-form.no-placeholder .form-group [class*=fa] {
    top: 10px;
}

#Highlighted-form textarea.form-control {
    height: 100px;
    width: 400px;
    min-width: 100%;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    padding-top: 14px;
    vertical-align: top;
}

#Highlighted-form .form-control:focus {
    outline: none;
    box-shadow: 0 4px 0 rgba(0, 0, 0, 0.05);
}

#Highlighted-form .error-message {
    padding: 5px 0;
    position: absolute;
    top: -35px;
    right: 0;
    font-size: 15px;
    line-height: 24px;
    font-weight: 400;
    color: #ff3345;
    z-index: 10;
}

#Highlighted-form.no-placeholder .error-message {
    top: 0;
}
.mye{
  height: 50px;
  background: #D1D1D1;


}
</style>