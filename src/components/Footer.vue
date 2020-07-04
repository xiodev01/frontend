<template>
  <div id="Footer" v-if="getItem.length != 0">
    <div class="row m-0">
      <div class="col-xl-12 text-light upper_footer_color">
        <div class="row pl-5 pr-5">
          <div class="col-xl-4">
            <div class="col-xl-12 gray_text_color">
              <strong class="qs_text_size">QUALITY STANDARDS</strong>
            </div>
            <div class="col-xl-12 gray_text_color">
              <img src="../assets/sgs-22000.png" class="Footer_logo_size" alt />
              <img src="../assets/sgs-22000.png" class="Footer_logo_size" alt />
              <img src="../assets/swiss.png" class="Footer_logo_size" alt />
            </div>
          </div>
          <div class="col-xl-4">
            <div class="col-xl-12 gray_text_color">
              <strong>IMPORTS & EXPORTS Categories</strong>
            </div>
            <div class="col-xl-12 gray_text_color">
              <table class="copyright_text">
                <tr v-for="(items,index) in getProductCategory[0]" :key="index">
                  <td>{{items.category}}</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="col-xl-12 gray_text_color">
              <strong>BUSINESS HOURS</strong>
              <br />
            </div>
            <div class="col-xl-12 copyright_text">
              <span>Our customer support is available during below business hours to help you with your queries.</span>

              <br />
              <br />
              <span>
                <strong>{{getItem[0].companyWorkingTime}}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-12 text-center bg-dark copyright_text">
        <v-btn
          small
          text
          class="copyright_text text-secondary"
          to="/admin_login"
        >Devi Trading Company</v-btn>
        <br />
        Copyright © 2020 {{getItem[0].companyName}}. All Rights Reserved. Website development by Raza 9798.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {
      getItem: [],
      getProductCategory: []
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.$http.get("/Settings").then(response => {
        this.getItem.push(response.data.display[0]);
      });

      this.$http.get("/Product").then(response => {
        this.getProductCategory.push(response.data.Category);
      });
    }
  }
};
</script>
<style scoped>
.upper_footer_color {
  background: #2d3436;
}
.copyright_text {
  color: rgb(165, 165, 165);
  font-size: 12px;
  text-decoration: none;
}
.gray_text_color {
  color: rgb(165, 165, 165);
}
.Footer_logo_size {
  margin-left: 25px;
  width: 20%;
}

@media screen and (max-width: 320px) {
  .Footer_logo_size {
    margin-left: 20px;
    width: 20%;
  }
  .qs_text_size {
    font-size: 15px;
  }
}
</style>