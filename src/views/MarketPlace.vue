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

</style>