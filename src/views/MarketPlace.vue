<template>
  <div >
<navArticleVue/>
    <b-container>
    <allArticlesVue/>
    </b-container>
   <footerVue />
  </div>
</template>

<script>
import navArticleVue from "../components/navArticle.vue";
import footerVue from "@/components/footer.vue"
import allArticlesVue from "../components/allArticles.vue";
export default {
  name: "Annoucements",
  components: {
    navArticleVue,
    allArticlesVue,
    footerVue

  }
};
</script>
<style>
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