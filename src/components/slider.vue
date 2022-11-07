<template>
<div>

    <b-carousel class="b border-0"
      id="carousel-1"
      :interval="10000"
      controls
      indicators
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >


      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="80"
            src="@/assets/img/pub-1.jpg"
            alt="image slot"
            style="
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:350px; width: 190px;" 

            
          >

        </template>
      </b-carousel-slide>


  <!-- <b-carousel-slide>
        <template #img>
          <img
          style="
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:350px; width: 190px;" 
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/img/img1.png"
            alt="image slot"
             caption="First slide">
        </template>
      </b-carousel-slide> -->
      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
           style="
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                     max-width: 100%;
                      max-height: 100%;
                      height:350px; width: 190px;" 
            width="1024"
            height="480"
            src="@/assets/img/pub-2.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>

    
<div class="wrap1s" style="margin-bottom:-15px">
    <a class="button1" href="/MarketPlace"> <button1 ><i class="fa fa-shopping-cart"></i>   Notre MarketPlace.</button1></a>
 
</div>
</div>
</template>

<script>

</script>
<style>
.text {
text-align: center;
}
.b{
margin-top: -48px;

}

img:hover {
  opacity: 1.0;
}
</style>