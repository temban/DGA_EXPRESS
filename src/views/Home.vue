<template>
<div>
    <lognav/>
    <sliderVue />
    <announcehomeVue />
 <FunctioningDGAVue/>
  <footerVue />
</div>


</template>

<script>
import lognav from '../components/lognav.vue'
import footerVue from "@/components/footer.vue"
import sliderVue from '../components/slider.vue'
import FunctioningDGAVue from '../components/FunctioningDGA.vue'
import announcehomeVue from '../components/announcehome.vue'
export default {
 name: "Home",
  components: {
    sliderVue,
    announcehomeVue,
    FunctioningDGAVue,
    lognav,
    footerVue
  },
}
</script>

<style lang="scss">


</style>