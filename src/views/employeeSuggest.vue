<template>

    <body id="landing" class="sidebar-open">
        <div id="dashboardPage">
            <employeeNavbarVue />
            
        </div>
        <div class="comments" style="margin-left:-150px;padding-top: 100px;">
            <div class="comment" v-for="(item, i) in suggest.reverse()" v-bind:key="i">
                <div class="comment-head">
        
         
                    <img class="my-pp" v-if="item.user.profileimgage == ``" src="@/assets/img/hotels/59710428.jpg"
                        alt="profile" />
                    <img class="my-pp" v-else :src="`http://46.105.36.240:3000/${item.user.profileimgage}`"
                        alt="profile" />
                    <div class="user-info">
                        <div class="name">{{ item.user.firstName + " " + item.user.lastName }}</div>
                        <div class="date">{{ item.date }}</div>
                    </div>
                    <div v-if="item.validated" class="ok"
                        style="position:absolute;right: 0;font-size: 13px;display: flex;align-items: center;"><i
                            class="fa fa-check-circle-o"
                            style="display: flex;align-items: center;justify-content: end;width: 20px;"></i><span
                            style="margin-left: 4px;">suggest ok</span></div>
                    <div v-else class="no-ok"
                        style="position:absolute;right: 0;font-size: 13px;display: flex;align-items: center;"><i
                            class="fa fa-check-circle-o"
                            style="display: flex;align-items: center;justify-content: end;width: 20px;"></i><span
                            style="margin-left: 4px;">suggest no-read</span></div>
                </div>
                <div class="comment-body">
                    <p>
                        {{ item.content }}
                    </p>
                    <div class="end">
                        <i v-if="item.validated" class="fa fa-thumbs-up" style="cursor: pointer; transform: scale(1.2); color: #5b5bff;"></i>
                        <i v-else class="fa fa-thumbs-up" @click="like(item.id)"></i>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
// import Swal from 'sweetalert2';
// import tableEmptyVue from "../components/pageNotFoundNoData.vue";
import employeeNavbarVue from '../components/employeeNavbar.vue'
export default {
    components: {
        employeeNavbarVue,
        // tableEmptyVue
    },
    data() {
        return {
            suggest: [],
            error: true,
            notifNum:'',
        }
    },
    async mounted() {
        window.localStorage.removeItem('notificationSizeSuggest');
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${localStorage.getItem("access-token")}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://46.105.36.240:3000/view/suggest", requestOptions)
            .then(response => response.text())
            .then(result => { 
                
            this.suggest = JSON.parse(result); 
       
            })
            .catch(error => console.log('error', error));
    },
    methods: {
        like(id) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer "+localStorage.getItem('access-token'));

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("http://46.105.36.240:3000/check/suggestion/" + id, requestOptions)
                .then(response => response.text())
                .then(result => {console.log(result);window.location.reload()})
                .catch(error => console.log('error', error));
        }
    },


}
</script>

<style>
.comments {
    min-height: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.comments .comment {
    width: 600px;
    max-height: 300px;
    box-shadow: 0 0 5px rgb(122, 122, 122);
    margin-bottom: 10px;
}

.comments .comment .comment-head {
    display: flex;
    align-items: center;
    margin: 5px;
    position: relative;
    height: 40px;
}

.comments .comment .my-pp {
    display: flex;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    margin-right: 10px;
    border: 2px solid #2423ff;
}

.comments .comment .comment-head .user-info {
    height: 100%;
    display: flex;
    width: 300px;
    flex-direction: column;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    color: rgb(56, 56, 56);
}

.comments .comment .comment-head .user-info .date {
    color: rgb(68, 68, 68);
    font-size: 11px;
}

.comments .comment .comment-body {
    border-top: 1px solid silver;
}

.comments .comment .comment-body p {
    font-size: 15px;
    padding: 10px 20px;
    margin: 0;
}

.comments .comment .comment-body .end {
    width: 100%;
    font-size: 10px;
    text-align: end;
    height: 35px;
    color: rgb(134, 134, 134);
    position: relative;
}

.comments .comment .comment-body .end i {
    max-height: 20px;
    position: absolute;
    right: 0;
    transition: .3s;
}

.comments .comment .comment-body .end i:hover {
    cursor: pointer; transform: scale(1.2); color: #5b5bff;
}

.comment .ok {
    background: rgb(214, 255, 214);
    height: 25px;
    padding: 2px 10px;
    border-radius: 20px;
    color: #51a985;
}

.comment .no-ok {
    background: rgb(255, 214, 214);
    height: 25px;
    padding: 2px 10px;
    border-radius: 20px;
    color: #a95151;
}
</style>