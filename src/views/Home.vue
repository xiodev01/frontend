<template>
  <div id="Home">
    <Navbar />
    <SlideShow v-if="getItem.length != 0 && Activate.length !=0" />

    <!-- skeleton Loader -->
    <v-sheet v-if="getItem.length == 0" class="px-3 pt-3 pb-3">
      <v-skeleton-loader class="mx-auto" max-width="500" type="card"></v-skeleton-loader>
      <v-skeleton-loader class="mx-auto" max-width="500" type="card"></v-skeleton-loader>
      <v-skeleton-loader class="mx-auto" max-width="500" type="card"></v-skeleton-loader>
    </v-sheet>
    <!-- {{Activate[0].}} -->
    <!-- Welcome Section -->
    <div class="row m-0 mt-5" v-if="getItem.length != 0 && Activate.length !=0">
      <div class="col-xl-12" v-if="Activate[0].Home_Activate_Welcome_Section === 'true'">
        <div class="row">
          <div
            class="col-xl-6 text-center"
            v-if="Activate[0].Home_Activate_Welcome_Image === 'true'"
          >
            <!-- <img src="../assets/welcome.jpg" class="welcome_image" alt /> -->
            <!-- <v-img
              :src="'http://landingsiteone.epizy.com/ftpimages/' + getItem[0].Image"
              class="welcome_image"
              alt
            ></v-img> -->
             <img
            :src="'http://landingsiteone.epizy.com/ftpimages/'+ getItem[0].Image+'?i=1'"
            class="logo_image"
            alt
          > 
            
         
          </div>

          <div class="col-xl-6 pl-5 pr-5">
            <div class="row">
              <div class="col-xl-12" v-if="Activate[0].Home_Activate_Welcome_Note === 'true'">
                <span class="h2 text_dark_blue">Welcome</span>
                <br />

                <span class="text-info">
                  <p>- Who We Are</p>
                </span>
                <!-- <p
                  class="text-secondary welcome_note_size"
                >Devi Trading Company is the industry leader in imports and exports. We are specialists in the fields of agri-food, chemical, and dye stuff. Our years of experience, highly specialized laboratories and storage facilities mean you get the highest quality service when you work with us.</p>-->
                <!-- {{getItem[0].id}} -->
                <p class="text-secondary welcome_note_size">{{getItem[0].Whoarewe}}</p>
              </div>

              <div class="col-xl-12 pl-3 pr-3 shadow">
                <div class="row">
                  <div class="col-xl-6" v-if="Activate[0].Home_Activate_Imports_Note === 'true'">
                    <span class="h5">Imports</span>
                    <br />
                    <br />
                    <!-- <p
                      class="text-secondary short_text_size"
                    >Our industrial chemicals, dyes and solvents cater to a broad spectrum of industries. Also, we import a variety of fresh produce for local markets.</p>-->
                    <p class="text-secondary short_text_size">{{getItem[0].Imports}}</p>
                  </div>
                  <div class="col-xl-6" v-if="Activate[0].Home_Activate_Export_Note === 'true'">
                    <span class="h5">Exports</span>
                    <br />
                    <br />
                    <p class="text-secondary short_text_size">{{getItem[0].Exports}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Our Products -->

    <div class="row m-0" v-if="getItem.length != 0 && Activate.length !=0">
      <div class="col-xl-12 p-5" v-if="Activate[0].Home_Activate_Our_Products_Section === 'true'">
        <span class="h2 text_dark_blue">Our Products</span>
        <br />

        <span class="text-info">
          <p>- Products</p>
        </span>
        <!-- <p
          class="text-secondary welcome_note_size"
        >Devi Trading Company imports have been in international trade since 1971. The portfolio of imports is a balance between industrial products and agri-foods.</p>
        <p class="text-secondary welcome_note_size">
          Devi Trading Company is the Industry leader in exporting Ceylon spices, coconut products and natural rubber. Devi Trading Company has been a leading exporter of "True Cinnamon" (Cinnamomum Zeylanicum) since it's inception.
          Agro Food Products
          Import
        </p>-->
        <p class="text-secondary welcome_note_size">{{getItem[0].DescribeProduct}}</p>
      </div>
    </div>

    <!--  -->

    <!-- {{getProduct}} -->
    <template v-if="getItem.length != 0 && Activate.length !=0">
      <v-sheet
        class="mx-auto"
        elevation="8"
        max-width="1200"
        v-if="Activate[0].Home_Activate_Product_Slide_Show === 'true'"
      >
        <v-slide-group v-model="model" show-arrows>
          <!--SSS  -->
          <v-slide-item v-slot:default v-for="(items,index) in getProduct[0]" :key="index">
            <v-card
              max-width="374"
              class="mx-7 my-12 pl-3"
              height="335"
              width="250"
              @click="ViewSingleProduct(items)"
            >
              <v-img :src="'http://landingsiteone.epizy.com/ftpimages/' + items.image[0]['img']+'?i=1'" width="100%"></v-img>

              <v-card-text>
                <div>{{items.Name}}</div>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>

        <v-expand-transition>
          <v-sheet v-if="model != null" color="grey lighten-4" height="200" tile>
            <v-row class="fill-height" align="center" justify="center">
              <!-- <h3 class="title">Selected {{ model }}</h3> -->
            </v-row>
          </v-sheet>
        </v-expand-transition>
      </v-sheet>
    </template>

    <!--  -->
    <v-app v-if="getEditItem != 0">
      <v-row>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="scale-transition">
          <v-card tile>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="closeViewPRoduct">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title v-if="getEditItem != 0">{{getEditItem[0].Name}}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark text to="/contactus" style="text-decoration:none">Contact us</v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <div class="row m-0" v-if="getEditItem != 0">
                    <div class="col-xl-12">
                      <div class="row">
                        <div class="col-xl-6">
                          <!-- <v-img src="../assets/services-banner.jpg" width="100%"></v-img> -->
                          <v-img
                            :src="'http://landingsiteone.epizy.com/ftpimages/' + getEditItem[0].image[0].img+'?i=1'"
                            class="SingleImageSize"
                          ></v-img>

                          <br />

                          <div class="row">
                            <div class="col-xl-12">
                              <div v-for="(items,index) in getEditItem[0].image" :key="index">
                                <v-img
                                  :src="'http://landingsiteone.epizy.com/ftpimages/' + items.img+'?i=1'"
                                  class="SingleImageSizeCollection"
                                ></v-img>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 flexstyle">
                          <p
                            v-html="getEditItem[0].Description"
                            class="dialognote_div"
                            v-if="getEditItem != 0"
                          ></p>
                        </div>
                        <!-- <div class="col-xl-4 bg-info">aa</div> -->
                      </div>
                    </div>
                  </div>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
          </v-card>
        </v-dialog>
      </v-row>
    </v-app>

    <!-- Services Section -->
    <div v-if="getItem.length != 0 && Activate.length !=0">
      <v-parallax
        dark
        src="../assets/services-banner.jpg"
        v-if="Activate[0].Home_Activate_Services_Section === 'true'"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="mb-4 mt-5 pt-3">Services</h1>
            <hr class="text-light" />
            <!-- <h5
            class="subheading"
            >We import and export a wide range of goods. Our lab assures. Quality products are ready for delivery to your doorstep. Our customer satisfaction is paramount in achieving our goals. We offer a variety of packaging and shipping options that can be customized based on customer requirements.</h5>-->
            <h5 class="subheading">{{getItem[0].DescribeServices}}</h5>
          </v-col>
        </v-row>
      </v-parallax>
    </div>

    <br />
    <br />

    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import SlideShow from "../components/Slideshow";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Navbar: Navbar,
    SlideShow: SlideShow,
    Footer: Footer
  },
  data() {
    return {
      model: null,
      dialog: false,
      show: false,
      getItem: [],
      Activate: [],
      getProduct: [],
      getEditItem: []
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.$http.get("/Welcome").then(response => {
        // //console.log.log(response.data);
        this.getItem.push(response.data.display[0]);
        //console.log.log(this.getItem);
      });

      this.$http.get("/Adjestments").then(response => {
        // //console.log.log(response.data);
        this.Activate.push(response.data.display[0]);

        // //console.log.log("------------------------------------------------");
        // //console.log.log("Activate");
        // //console.log.log(this.Activate);
        // //console.log.log("------------------------------------------------");
      });
      this.$http.get("/Product").then(response => {
        // //console.log.log(response.data);
        this.getProduct.push(response.data.HomeProducts);

        //console.log.log("------------------------------------------------");
        //console.log.log("get slide product");
        //console.log.log(this.getProduct);
        //console.log.log("------------------------------------------------");
      });
    },
    closeViewPRoduct() {
      this.getEditItem.splice(-1);
      this.dialog = false;
    },
    ViewSingleProduct(items) {
      this.getEditItem.splice(-1);
      //console.log.log(items.Name)
      //console.log.log(this.getProduct)
      this.getProduct[0].find(file => {
        if (file.id == items.id)
          // //console.log.log(file)
          this.getEditItem.push(file);
      });
      //console.log.log(this.getEditItem)
      this.dialog = true;
    }
  }
};
</script>
<style scoped>
.welcome_image {
  width: 38rem;
}
.text_dark_blue {
  color: blue;
}
.welcome_note_size {
  font-size: 15px;
}
.short_text_size {
  font-size: 15px;
}
.dialognote_div {
  padding: 15px;
  font-size: 15px;
  color: gray;
}
.SingleImageSize {
  width: 20rem;
}
.SingleImageSizeCollection {
  float: left;

  margin-left: 5px;
  width: 10rem;
}

@media screen and (max-width: 1024px) {
  .welcome_image {
    width: 45rem;
  }
  .SingleImageSize {
    width: 50rem;
  }
  .SingleImageSizeCollection {
    float: left;
    margin-left: 5px;
    width: 10rem;
  }
}
@media screen and (max-width: 768px) {
  .SingleImageSize {
    width: 35rem;
  }
  .SingleImageSizeCollection {
    float: left;

    margin-left: 5px;
    width: 10rem;
  }
}
@media screen and (max-width: 425px) {
  .welcome_image {
    width: 25rem;
  }
  .SingleImageSize {
    width: 25rem;
  }
  .SingleImageSizeCollection {
    float: left;

    margin-left: 5px;
    width: 10rem;
  }
}
@media screen and (max-width: 375px) {
  .welcome_image {
    width: 22rem;
  }
  .SingleImageSize {
    width: 20rem;
  }
  .SingleImageSizeCollection {
    float: left;

    margin-left: 5px;
    width: 10rem;
  }
}
@media screen and (max-width: 320px) {
  .welcome_image {
    width: 18rem;
  }
  .SingleImageSize {
    width: 20rem;
  }
  .SingleImageSizeCollection {
    float: left;

    margin-left: 5px;
    width: 10rem;
  }
}
</style>
