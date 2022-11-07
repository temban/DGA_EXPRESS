<template>
  <div>
    
    <div style="margin-left: 60px">
      <lognavVue />
    </div>
    <userDashboardComponentVue />
    <footerVue />
  </div>
</template>
<script>
import footerVue from "@/components/footer.vue";
import lognavVue from "../components/lognav.vue";
import userDashboardComponentVue from "../components/userDashboardComponent.vue";
export default {
  name: "useprofile",
  components: {
    lognavVue,
    userDashboardComponentVue,
    footerVue,
  }, 
  data() {
    return {
        loding:false, 
        profileimgage:'',
        articlelength:'',
      loading: false,
      myAnn: [],
      comments: [],
      users: [],
      file: "",
      suggestion: "",
      revlength: "",
      annlength: "",
      firstName: "",
      artlength: "",
      email: "",
      id: "",
      lastName: "",
      pseudo: "",
      password: "",
      oldpassword: "",
      newpassword: "",
      fileInput: null,
      icon: "",
      pic: "",
      pic1: "",
      reservations: [],
      track: [],
      comment: [],
      stars: "",
      code: "",
      fields: [
        "traveller",
        "source_town",
        "destination_town",
        "departure_date",
        "Arrival_date",
        "state",
        "like",
        "comment",
      ],
      items: [],
      userId: localStorage.getItem("userId"),
    };
  },

  
};
</script>
