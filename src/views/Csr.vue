<template>
  <div id="CSR">
    <Navbar />

    <!-- skeleton Loader -->
    <v-skeleton-loader v-if="getItem.length == 0" class="px-3 pt-3 pb-3">
      <v-skeleton-loader class="mx-auto" max-width="500" type="card"></v-skeleton-loader>
      <v-skeleton-loader class="mx-auto" max-width="500" type="card"></v-skeleton-loader>
      <v-skeleton-loader class="mx-auto" max-width="500" type="card"></v-skeleton-loader>
    </v-skeleton-loader>
<div  v-if="getItem.length != 0 && Activate.length !=0">
    <div class="row m-0">
      <div class="col-xl-12 breadcrumbs">
        <span class="h3 ml-2">ABOUT US</span>
        <v-breadcrumbs :items="items">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item
              :href="item.href"
              :disabled="item.disabled"
            >{{ item.text.toUpperCase() }}</v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </div>
    </div>

    <div class="row m-0 pl-5 pr-5">
      <div class="col-xl-8" v-if="Activate[0].CSR_Activate_CSR_Note === 'true'">
        <div class="row">
          <div class="col-xl-12">
            <p v-html="getItem[0].CSR" class="text-secondary pl-1 text_size"></p>
          </div>
        </div>
      </div>

      <div class="col-xl-4 p-4" v-if="Activate[0].CSR_Activate_Contact_us_box === 'true'">
        <div class="row">
          <div class="col-xl-12 text-secondary card_HCWHY">
            <strong>How can we help you ?</strong>
            <p
              class="text-secondary pl-1 text_size"
            >Contact our customer support for your queries and business propositions.</p>
            <b-btn to="/contactus" class="btn_color">Contact Us</b-btn>
          </div>
        </div>

        <div class="row mt-4" v-if="Activate[0].CSR_Activate_About_us_box === 'true'">
          <div class="col-xl-12 text-secondary card_qs">
            <strong>Quality assurance</strong>
            <p
              class="text-secondary pl-1 text_size"
            >We represent leading accreditations for our products.</p>
            <b-btn to="/about" class="btn_color">About Us</b-btn>
          </div>
        </div>
      </div>
    </div>

    <Footer />
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default {
  name: "CSR",
  components: {
    Navbar: Navbar,
    Footer: Footer
  },
  data() {
    return {
      getItem: [],
      Activate: [],
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/"
        },
        {
          text: "CSR",
          disabled: true,
          href: "/csr"
        }
      ]
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.$http.get("/CSR").then(response => {
        ////console.log.log.log(response.data);
        this.getItem.push(response.data.display[0]);
        ////console.log.log.log(this.getItem);
      });
      this.$http.get("/Adjestments").then(response => {
        // ////console.log.log.log(response.data);
        this.Activate.push(response.data.display[0]);

        ////console.log.log.log("------------------------------------------------");
        ////console.log.log.log("Activate");
        ////console.log.log.log(this.Activate);
        ////console.log.log.log("------------------------------------------------");
      });
    }
  }
};
</script>
<style scoped>
.breadcrumbs {
  margin-left: 150px;
}
.text_size {
  font-size: 14px;
}
.card_HCWHY {
  background-color: rgb(230, 230, 230);
}
.card_qs {
  background-color: rgb(243, 243, 243);
}
.btn_color {
  background-color: blue;
  border: none;
}
.btn_color:hover {
  background-color: rgb(84, 84, 184);
  border: none;
}
@media screen and (max-width: 1024px) {
  .breadcrumbs {
    margin-left: 50px;
  }
}

/* Mobile Phone Larage */
@media screen and (max-width: 425px) {
  .breadcrumbs {
    margin-left: 10px;
  }
}
</style>