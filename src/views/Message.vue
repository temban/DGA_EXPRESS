<template>
    <div style="">
        <div style="margin-left:60px;">
            <lognavVue />
        </div>
        <usersidebarVue />

        <div class="container">

            <b-container style="margin-left:32px; margin-bottom: 30px;background-color:white;">
                <h3 class="mt-2 mb-3 float-left text-primary">Article with Message</h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Client</th>
                            <th scope="col">Article</th>
                            <th scope="col">Date</th>
                            <th scope="col">Chat</th>
                        </tr>
                    </thead>
                    <th colspan="4"><div v-if="error" > 
                   <tableEmptyVue/>
                   </div> </th>  
                    <tbody style="text-transform: capitalize">
                        <tr v-for="item in art_touch" v-bind:key="item.id">
                            <td>{{ item.sendermessage.firstName+" "+item.sendermessage.lastName}}</td>
                            <td>{{ item.articleDto.name }}</td> 
                            <td>{{ item.articleDto.date }}</td> 
                            <td>
                                <form>
                                    <button @click="tchat(item.articleDto,item.sendermessage)" style="height:45px; width:40px;  margin-right:5px;"
                                        type="button" class="btn btn-sm btn-info mr-1">
                                        <i class="fa fa-comment" style="font-size:20px"></i>
                                    </button>

                                </form>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </b-container>
            <!-- Fim tabela -->
        </div>
        <footerVue />
    </div>
</template>

<script>
    import tableEmptyVue from "../components/tableEmpty.vue";
import Swal from 'sweetalert2';
import footerVue from "@/components/footer.vue"
import lognavVue from "../components/lognav.vue";
import usersidebarVue from "../components/usersidebar.vue";
export default {
    name: 'MyAnnoucements',
    data() {
        return {
            error: false,
            loading: true,
            users: [],
            users1: [],
            id: '',
            a: "",
            articles: [],
            article: {
                name: "",
                description: "",
                price: 0,
                quantity: 0,
                status: "",
                date: "",
                location: "",
                cathegory: {
                    name: ''
                },
            },
            messages: [],
            result_aux: [],
            art_touch: []
        }
    },
    components: {
        lognavVue,
        usersidebarVue,
        footerVue,
        tableEmptyVue
    },
    // Ao criar o componente, é feito uma requisição GET para a API do backend
    async created() {

        //Pour mes test
        
        // fin des test
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('access-token'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://dga-express.com:8443/user/" + JSON.parse(localStorage.getItem('infoUser')).id + "/articles/", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.articles = JSON.parse(result);
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error', 
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
                console.log('error', error)
                localStorage.clear()
        window.location.href = "/"
            });
        var myHeaders0 = new Headers();
        myHeaders0.append("Content-Type", "application/json");
        myHeaders0.append("Authorization", "Bearer " + localStorage.getItem("access-token"));

        var requestOptions0 = {
            method: 'GET',
            headers: myHeaders0,
            redirect: 'follow'
        };

        fetch("https://dga-express.com:8443/current/user/messages", requestOptions0)
            .then(response => response.text())
            .then(result => {
                this.messages = JSON.parse(result)

                for (let i = 0; i < this.messages.length; i++) {
                    for (let j = 0; j < this.articles.length; j++) {
                        if( this.messages[i].articleDto){
                            if (this.articles[j].id == this.messages[i].articleDto.id) {
                                this.result_aux.push(this.messages[i])
                            }
                        }
                    }
                }
                if (this.result_aux.length >= 1) {
                    this.art_touch.push(this.result_aux[0])
                    for (let j = 0; j < this.result_aux.length; j++) {
                        let ab = this.found(this.result_aux[j],this.art_touch)
                        if (ab) {
                            console.log("");
                        }else{
                            this.art_touch.push(this.result_aux[j])
                        }
                    }
                }
                console.log(this.art_touch)
            })
            .catch(error => console.log('error', error));

    },
    methods: {
        found(item,table){
            for (let i = 0; i < table.length; i++) {
                if (table[i].sendermessage.id == item.sendermessage.id && table[i].articleDto.id == item.articleDto.id) {
                    return true
                }
            }
            return false
        },
        tchat(art,sender) {
            localStorage.setItem("smsRecieve",JSON.stringify(sender))
            localStorage.setItem("art",JSON.stringify(art))
            window.location.href ="/chatArticles"
        },
        showNotif() {
            new Notification("mon message", {
                body: "HI Guys, how are you? have you eat ?"
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.create {

    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    will-change: box-shadow, transform;
    background: radial-gradient(100% 100% at 100% 0%, #f0b07c 0%, #ff9100 100%);
    box-shadow: 0px 2px 4px rgb(247, 152, 43), 0px 7px 13px -3px rgba(241, 188, 12, 0.993), inset 0px -3px 0px rgba(241, 103, 61, 0.795);
    padding: 0 32px;
    border-radius: 6px;
    color: #fff;
    height: 58px;
    width: 20%;
    float: right;
    margin: 10px 0 10px 0;
    font-size: 18px;
    text-shadow: 0 1px 0 rgba(241, 173, 94, 0.932);
    transition: box-shadow 0.15s ease, transform 0.15s ease;
}

.create:hover {
    box-shadow: 0px 4px 8px rgb(255, 145, 1), 0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #f37018;
    transform: translateY(-2px);
}

.create:active {
    box-shadow: inset 0px 3px 7px #ff7504;
    transform: translateY(2px);
}

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


.bl_form {}

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
</style>