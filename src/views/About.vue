<template>
  <div id="About" >
    <Navbar />

    <!-- skeleton Loader -->
    <v-skeleton-loader v-if="getItem.length == 0 && Activate.length !=0" class="px-3 pt-3 pb-3">
      <v-skeleton-loader class="mx-auto" max-width="500" type="card"></v-skeleton-loader>
      <v-skeleton-loader class="mx-auto" max-width="500" type="card"></v-skeleton-loader>
      <v-skeleton-loader class="mx-auto" max-width="500" type="card"></v-skeleton-loader>
    </v-skeleton-loader>
<div v-if="getItem.length != 0 && Activate.length !=0">
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

      <div class="col-xl-12 p-5" v-if="Activate[0].About_Activate_About_Section === 'true'">
        <div class="row">
          <div
            class="col-xl-6 text-center"
            v-if="Activate[0].About_Activate_About_Image === 'true'"
          >
            <v-img
              :src="'http://localhost:8000/storage/' + getItem[0].CompanyImage"
              class="welcome_image"
              alt
            ></v-img>
          </div>
          <div class="col-xl-6" v-if="Activate[0].About_Activate_About_Note === 'true'">
            <p class="about_note">{{getItem[0].CompanyDescription}}</p>
          </div>
        </div>
      </div>

      <div class="col-xl-12 shadow p-5">
        <div class="row" v-if="Activate[0].About_Activate_Vision_Mission_Section === 'true'">
          <div class="col-xl-6 text-center" v-if="Activate[0].About_Activate_Mission === 'true'">
            <div class="col-xl-12 text-left h3">Our Mission</div>
            <div class="col-xl-12 text-left">
              <p class="about_note">{{getItem[0].Mession}}</p>
            </div>
          </div>
          <div class="col-xl-6" v-if="Activate[0].About_Activate_Vision === 'true'">
            <div class="col-xl-12 text-left h3">Our Vision</div>
            <div class="col-xl-12 text-left">
              <p class="about_note">{{getItem[0].Vission}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row m-0" v-if="Activate[0].About_Activate_Enviroment_Section === 'true'">
      <div class="col-xl-12 p-0">
        <v-parallax height="300" src="../assets/envirnment1.jpg">
          <div class="col-xl-4 env_box">
            <div class="col-xl-12 h3">Environment</div>
            <div class="col-xl-12">{{getItem[0].Enviroment}}</div>
          </div>
        </v-parallax>
      </div>
    </div>

    <br />
    <br />
    <div class="row m-0">
      <div class="col-xl-12 pl-5 pr-5">
        <div v-if="Activate[0].About_Activate_Employee_Progress === 'true'">
          <h3>Employees Progress</h3>
          <p class="about_note">{{getItem[0].EmployeeProgressNote}}</p>
        </div>
        <br />
        <br />
        <div v-if="Activate[0].About_Activate_Our_People === 'true'">
          <h3>Our People</h3>
          <p class="about_note">{{getItem[0].OurPeopleNote}}</p>
        </div>
      </div>
    </div>

    <br />
    <br />
    <Footer />
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default {
  name: "About",
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
          text: "About Us",
          disabled: true,
          href: "/about"
        }
      ]
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.$http.get("/About").then(response => {
        // //console.log.log(response.data);
        this.getItem.push(response.data.display[0]);
        //console.log.log(this.getItem);
      });
      this.$http.get("/Adjestments").then(response => {
        // //console.log.log(response.data);
        this.Activate.push(response.data.display[0]);

        //console.log.log("------------------------------------------------");
        //console.log.log("Activate");
        //console.log.log(this.Activate);
        //console.log.log("------------------------------------------------");
      });
    }
  }
};
</script>
<style scoped>
.breadcrumbs {
  margin-left: 150px;
}
.about_note {
  color: gray;
  font-size: 15px;
}
.env_box {
  background-color: blue;
  padding: 50px;
  margin-left: 150px;
}

@media screen and (max-width: 1024px) {
  .breadcrumbs {
    margin-left: 50px;
  }
  .env_box {
    background-color: blue;
    padding: 50px;
    margin-left: 0px;
  }
}

/* Mobile Phone Larage */
@media screen and (max-width: 425px) {
  .breadcrumbs {
    margin-left: 10px;
  }
  .about_image {
    width: 20rem;
  }
  .env_box {
    background-color: blue;
    padding: 50px;
    margin-left: 0px;
  }
}
@media screen and (max-width: 320px) {
  .about_image {
    width: 15rem;
  }
  .env_box {
    background-color: blue;
    padding: 50px;
    margin-left: 0px;
  }
}
</style>