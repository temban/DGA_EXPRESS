<template>

    <div id="landing" class="sidebar-open">
        <div id="dashboardPage">
            <employeeNavbarVue />
            <div>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modifier cette catégorie</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="">
                                    <div>
                                        <div class="bootstrap snippets bootdey">
                                            <section id="contact" class="gray-bg padding-top-bottom">
                                                <div class="container bootstrap snippets bootdey">
                                                    <div class="row">
                                                        <form id="Highlighted-form" class="col-sm-8"
                                                            action="contact.php" method="post" novalidate="">

                                                            <div class="form-group">

                                                                <div class="controls">
                                                                    <h6>Nom</h6><input v-model="dataCat.name"
                                                                        id="contact-name" name="contactName"
                                                                        class="form-control requiredField Highlighted-label"
                                                                        type="text" required>
                                                                </div>
                                                            </div><!-- End name input -->
                                                            <div class="form-group">

                                                                <div class="controls">
                                                                    <h6>Description</h6> <input
                                                                        v-model="dataCat.description" id="contact-name"
                                                                        name="contactName"
                                                                        class="form-control requiredField Highlighted-label"
                                                                        data-new-placeholder="Your name" type="text"
                                                                        required>
                                                                </div>
                                                            </div>
                                                            <div class="form-fields">
                                                                <span @click="update" class="btn btn-warning col-lg-12"
                                                                    name="commit">
                                                                    Modifier
                                                                </span>
                                                            </div>

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
            <main style="margin-left:-200px;margin-right:10px">
                <div class="page-breadcrumb">
                    <div class="row">
                        <div class="col-6">
                            <h4 class="page-title">Toutes catégories</h4>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="/employeeDashboard">Accueil</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">catégories</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>


                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-md-7" style="margin-top: 20px">
                            <div class="card border-info">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12 text-center">
                                            <span name="commit">
                                                Toutes catégories
                                            </span>
                                            <table
                                                class="table table-striped table-hover table-borderless table-vcenter">
                                                <thead>
                                                    <tr class="text-uppercase">
                                                        <th class="fs-1">Nom</th>
                                                        <th class="fs-1">Description</th>
                                                        <th class="fs-1">actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="item in allCategoties" v-bind:key="item.id">
                                                        <td><span class="fs-1">{{ item.name }}</span></td>
                                                        <td><span class="fs-1">{{ item.description }}</span></td>
                                                        <td>

                                                            <button v-on:click="view(item.id)"
                                                                data-target="#exampleModal" data-toggle="modal"
                                                                style="height:40px; width:35px;" type="button"
                                                                class="btn btn-sm btn-info mr-1"><i class="fa fa-edit"
                                                                    style="font-size:20px"></i></button>


                                                            <!-- <button @click="deleteCategory(item.id)"
                                                                style="height:40px; width:35px;" type="button"
                                                                class="btn btn-sm btn-danger mr-1">
                                                                <i class="fa fa-trash" style="font-size:20px"></i>
                                                            </button> -->
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4" style="margin-top: 20px">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row border-info">

                                        <form class="col-lg-12 col-md-12 border-info">
                                            <div class="form-fields">
                                                <span name="commit">
                                                    Ajouter un catégorie
                                                </span>
                                            </div>

                                            <div class="form-fields">
                                                <input v-model="name" id="name" name="name" type="text"
                                                    placeholder="Name" required>
                                            </div>
                                            <div class="form-fields">
                                                <textarea v-model="description" id="description" name="description"
                                                    class="col-lg-12 col-md-12" type="text" placeholder="Description"
                                                    required></textarea>
                                            </div>
                                            <div class="form-fields">
                                                <span @click="onSubmit" class="btn btn-warning col-lg-12" name="commit">
                                                    + Ajouter
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-7 col-md-7" style="margin-top: 20px">
                            <div class="card border-info">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12 text-center">
                                            <span name="commit">
                                                Catégories par employé
                                            </span>
                                            <table
                                                class="table table-striped table-hover table-borderless table-vcenter">
                                                <thead>
                                                    <tr class="text-uppercase">
                                                        <th class="fs-1">Nom</th>
                                                        <th class="fs-1">Description</th>
                                                        <th class="fs-1">actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="item in catByEmployee" v-bind:key="item.id">
                                                        <td><span class="fs-1">{{ item.name }}</span></td>
                                                        <td><span class="fs-1">{{ item.description }}</span></td>
                                                        <td>

                                                            <button v-on:click="view(item.id)"
                                                                data-target="#exampleModal" data-toggle="modal"
                                                                style="height:40px; width:35px;" type="button"
                                                                class="btn btn-sm btn-info mr-1"><i class="fa fa-edit"
                                                                    style="font-size:20px"></i></button>

                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4" style="margin-top: 20px">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">

                                        <div class="col-lg-12 col-md-12">
                                            <div class="form-fields">
                                                <span name="commit">
                                                    Tous les employés
                                                </span>
                                            </div>
                                            <table
                                                class="table table-striped table-hover table-borderless table-vcenter">
                                                <thead>
                                                    <tr class="text-uppercase">
                                                        <th class="fs-1">Nom</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="item in employee" v-bind:key="item.id">
                                                        <td class="curs" @click="getCategoryEmployee(item.id)"><span
                                                                class="fs-1">{{ item.firstName }}</span></td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                            <!-- Table employee -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    </div>
</template>
 
<script>
import Swal from 'sweetalert2';
import employeeNavbarVue from '../components/employeeNavbar.vue'
export default {
    components: {
        employeeNavbarVue
    },
    data() {
        return {
            name: "",
            description: '',
            allCategoties: [],
            catByEmployee: [],
            dataCat: {
                name: '',
                description: ''
            },
            employee: []
        }
    },
    async created() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("access-token"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(this.$url+"/cathegories", requestOptions)
            .then(response => response.text())
            .then(result => { this.allCategoties = JSON.parse(result)})
            .catch(error => console.log('error', error));


        var myHeaders0 = new Headers();
        myHeaders0.append("Content-Type", "application/json");
        myHeaders0.append("Authorization", "Bearer " + localStorage.getItem('access-token'));

        var requestOptions0 = {
            method: 'GET',
            headers: myHeaders0,
            redirect: 'follow'
        };

        fetch(this.$url+"/users", requestOptions0)
            .then(response => response.text())
            .then(result => {
                for (let i = 0; i < JSON.parse(result).length; i++) {
                    if (JSON.parse(result)[i].pseudo == "DGA-EMPLOYEE") {
                        this.employee.push(JSON.parse(result)[i])
                    }
                }
                console.log(this.employee);
            })
            .catch(error => {console.log('error', error)
                
            localStorage.clear()
        window.location.href = "/"
        });
    },
    methods: {
        getCategoryEmployee(id) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer "+localStorage.getItem("access-token"));

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(this.$url+"/user/"+id+"/cathegories", requestOptions)
                .then(response => response.text())
                .then(result => this.catByEmployee = JSON.parse(result))
                .catch(error => console.log('error', error));
        },
        update() {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer " + localStorage.getItem('access-token'));

            var raw = JSON.stringify(this.dataCat);

            var requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch(this.$url+"/update/cathegory", requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result)
                    window.location.reload()
                })
                .catch(error => console.log('error', error));
        },
        view(id) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer " + localStorage.getItem('access-token'));

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(this.$url+"/user/cathegories/" + id, requestOptions)
                .then(response => response.text())
                .then(result => { this.dataCat = JSON.parse(result); console.log(result); })
                .catch(error => console.log('error', error));
        },
        deleteCategory(id) {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    width: 7000,
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: 'Êtes-vous sûr?',
                text: "Vous ne pourrez pas revenir en arrière!",
                icon: 'warning',
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

                    fetch(this.$url+"/user/cathegories/" + id, requestOptions)
                        .then(response => response.text())
                        .then(result => {
                            console.log(result);
                        })
                        .catch(error => console.log('error', error));
                    swalWithBootstrapButtons.fire(

                        'supprimé!',
                        'Cette Catégorie a été supprimé.',
                        'success'
                    )

                    window.location.reload()

                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    
                    swalWithBootstrapButtons.fire(

                        'supprimé!',
                        'Cette Catégorie a été supprimé.',
                        'success'
                    )
                }
            })
        },
        onSubmit() {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    width: 7000,
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "Voulez-vous créer cette catégorie!",
                icon: 'warning',
                confirmButtonText: 'Oui, Ajouter',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");
                    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("access-token"));

                    var raw = JSON.stringify({
                        "name": this.name,
                        "description": this.description,
                        "user": JSON.parse(localStorage.getItem("infoUser"))
                    });

                    var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                    };

                    fetch(this.$url+"/add/cathegory", requestOptions)
                        .then(response => response.text())
                        .then(result => {
                            swalWithBootstrapButtons.fire(
                                'Ajoutée!',
                                'Votre catégorie a été ajoutée.',
                                'success'
                            )
                            window.location.reload()
                            console.log(result)
                        })
                        .catch(error => console.log('error', error));




                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'Your categie file is safe :)',
                        'error'
                    )
                }
            })

        }
    },


}
</script>

<style>
.formule {
    max-width: 300px;
    background: #dd1111;
}

.curs {
    cursor: pointer;
}

#namanyay-search-box {
    background: #eee;
    padding: 10px;
    border-radius: 10px 0 0 10px;
    -moz-border-radius: 10px 0 0 10px;
    -webkit-border-radius: 10px 0 0 10px;
    -o-border-radius: 10px 0 0 10px;
    border: 0 none;
    width: 160px;
}

@import url(https://fonts.googleapis.com/css?family=Lato:700);

.title-add {
    color: #dd1111;
    z-index: 10000;
}

body {
    font-family: 'Lato', sans-serif;
    background-color: #fffaf6;
    width: 100%;
    margin: 0;
}

.container {
    min-width: 675px;
}

h1 {
    color: #fff;
    text-align: center;
    margin-top: 90px;
}


p {
    text-align: center;
}

p a {
    color: #dd1111;
}

h2 {
    opacity: 0;
    color: rgb(0, 0, 0);
    text-transform: uppercase;
    text-align: center;
}

h2.title-one {
    animation: load-heading 1.6s linear;
    animation-fill-mode: forwards;
    -webkit-animation: load-heading 1.6s linear;
    -webkit-animation-fill-mode: forwards;
    animation-delay: 1s;
    -webkit-animation-delay: 1s;
}
</style>