<template>
  <div id="Nav">
    <Header />

    <div>
      <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand v-if="getItem.length != 0">
          <!-- <img src="../assets/devi_trading_logo.png" class="logo_image" alt /> -->
          <v-img
            :src="'http://localhost:8000/storage/' + getItem[0].companyLogo"
            class="logo_image"
            alt
          ></v-img>
          <!-- {{getItem[0].companyLogo}} -->
        </b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">HOME</b-nav-item>
            <!-- <router-link to="/about" class="b-nav-item">ABOUT US</router-link> -->
            <b-nav-item to="/about">ABOUT US</b-nav-item>
            <b-nav-item to="/imports">IMPORTS</b-nav-item>
            <b-nav-item to="/exports">EXPORTS</b-nav-item>
            <b-nav-item to="/csr">CSR</b-nav-item>
            <b-nav-item to="/contactus">CONTACT US</b-nav-item>
            <!-- <b-nav-item to="/admin_dashboard">Admin_Test</b-nav-item> -->
            <!-- <b-nav-item to="/admin_login">Login</b-nav-item> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>
<script>
import Header from "./Header";
export default {
  name: "Nav",
  components: {
    Header: Header
  },
  data() {
    return { alert: false, getItem: [] };
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.$http.get("/Settings").then(response => {
        //console.log(response.data);
        this.getItem.push(response.data.display[0]);
        //console.log(this.getItem);
      });
    }
  }
};
</script>
<style scoped>
.logo_image {
  margin-left: 155px;
  width: 130px;
}
/* .welcome_image{
  width: 60px;
} */

@media screen and (max-width: 1024px) {
  .logo_image {
    margin-left: 45px;
  }
}
@media screen and (max-width: 425) {
  .logo_image {
    margin-left: 5px;
  }
}
</style>