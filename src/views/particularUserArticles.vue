<template>
    <div >
  <navparticularserArticlesVue/>
      <userArticlesVue/>
     <footerVue />
    </div>
  </template>
  
  <script>
    import navparticularserArticlesVue from "../components/modals/navparticularserArticles.vue";
  import footerVue from "@/components/footer.vue";
  import userArticlesVue from "../components/userArticles.vue";
  export default {
    name: "Annoucements",
    components: {
        navparticularserArticlesVue,
      userArticlesVue,
      footerVue
    }
  };
  </script>
  <style lang="scss">
  body {
	background: url(../assets/img/e-commerce.jpg);
  background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: grid;
	height: 100vh;
    font-family:  "Times New Roman", Times, serif;
    font-size: 16px;
}
</style>
  