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

body {
	background-color: var(--white);
	background: url("https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg");
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: grid;
	height: 100vh;
    font-family:  "Times New Roman", Times, serif;
}
</style>