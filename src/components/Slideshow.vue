<template>
  <div id="SlideShow">
    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="../assets/slider-1_0.jpg"
              alt="asd"
            />
          </template>
          <h4>Preferred chemical supplier</h4>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="../assets/slider-2_1.jpg"
              alt="asd"
            />
          </template>
          <h4>Quality products</h4>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="../assets/slider-3_1.jpg"
              alt="asd"
            />
          </template>
          <h4>Direct Source from Plantation</h4>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="../assets/slider-4.jpg"
              alt="asd"
            />
          </template>
          <h4>Water purification Chemicals</h4>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="../assets/slider-5.jpg"
              alt="asd"
            />
          </template>
          <h4>Customised Speciality chemicals</h4>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: "SlideShow"
};
</script>
<style scoped>
</style>