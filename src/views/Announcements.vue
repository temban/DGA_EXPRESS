<template>
  <div>
<navtravelVue/>
    <b-container>
    <allTravelsVue/>
    </b-container>
   <footerVue />
  </div>
</template>

<script>
import navtravelVue from "../components/navtravel.vue";
import footerVue from "@/components/footer.vue"
import allTravelsVue from "../components/allTravels.vue";
export default {
  name: "Annoucements",
  components: {
    navtravelVue,
    allTravelsVue,
    footerVue
  }
};
</script>
<style lang="scss">


</style>