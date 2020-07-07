<template>
  <div id="Imports" >
    <v-app>
      <Navbar />

      <!-- skeleton Loader -->
      <v-skeleton-loader v-if="getItem.length == 0" class="px-3 pt-3 pb-3">
        <v-skeleton-loader class="mx-auto" max-width="500" type="card"></v-skeleton-loader>
        <v-skeleton-loader class="mx-auto" max-width="500" type="card"></v-skeleton-loader>
        <v-skeleton-loader class="mx-auto" max-width="500" type="card"></v-skeleton-loader>
      </v-skeleton-loader>

<div v-if="getItem.length != 0 && Activate.length !=0">
      <div class="row m-0">
        <div class="col-xl-12 breadcrumbs">
          <span class="h3 ml-2">Imports</span>
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
      <!--  -->
      <div class="row m-0">
        <div class="col-xl-12 note_div" v-if="Activate[0].Import_Activate_Import_Notes === 'true'">
          <p v-html="getItem[0].importNotes"></p>
        </div>
      </div>

      <!--  -->

      <div class="row m-0" v-if="Activate[0].Import_Activate_Import_Products === 'true'">
        <div class="col-xl-12 card_sides_paddings">
          <div class="row">
            <!-- {{getProducts}} -->
            <div
              class="col-xl-3"
              v-for="(items,index) in getProducts"
              :key="index"
              @click="viewProduct(items)"
              style="cursor:pointer;"
            >
              <template>
                <v-card class="mx-auto" max-width="344">
                  <v-img :src="'http://localhost:8000/storage/' + items.Image.img" height="200px"></v-img>

                  <v-card-subtitle>
                    <v-btn text @click="viewProduct(items)">{{items.Name}}</v-btn>
                  </v-card-subtitle>
                </v-card>
              </template>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <v-row>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="scale-transition">
          <v-card tile>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="dialog = false">
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
                            :src="'http://localhost:8000/storage/' + getEditItem[0].image[0].img"
                            class="SingleImageSize"
                          ></v-img>

                          <br />

                          <div class="row">
                            <div class="col-xl-12">
                              <div v-for="(items,index) in getEditItem[0].image" :key="index">
                                <v-img
                                  :src="'http://localhost:8000/storage/' + items.img"
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

      <Footer />
      </div>
    </v-app>
  </div>
</template>

   

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default {
  name: "Imports",
  components: {
    Navbar: Navbar,
    Footer: Footer
  },
  data() {
    return {
      dialog: false,
      getItem: [],
      getProducts: [],
      getEditItem: [],
      getAllProducts: [],
      Activate: [],
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/"
        },
        {
          text: "Imports",
          disabled: true,
          href: "/contactus"
        }
      ],
      show: false
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.$http.get("/ImportNote").then(response => {
        //console.log.log(response.data);
        this.getItem.push(response.data.display[0]);
        //console.log.log(this.getItem);
      });
      this.$http.get("/Product").then(response => {
        //console.log.log("Products");
        //console.log.log("_____________________________________");

        for (let index = 0; index < response.data.IndexImport.length; index++) {
          const all_result = response.data.IndexImport[index];
          //console.log.log(all_result);
          this.getProducts.push(all_result);
        }
      });
      this.$http.get("/Product").then(response => {
        //console.log.log("Products View ALl");
        //console.log.log("_____________________________________");

        for (
          let index = 0;
          index < response.data.IndexAllImport.length;
          index++
        ) {
          const all_result = response.data.IndexAllImport[index];
          // //console.log.log(all_result);
          this.getAllProducts.push(all_result);
        }
      });
      this.$http.get("/Adjestments").then(response => {
        // //console.log.log(response.data);
        this.Activate.push(response.data.display[0]);

        //console.log.log("------------------------------------------------");
        //console.log.log("Activate");
        //console.log.log(this.Activate);
        //console.log.log("------------------------------------------------");
      });
    },
    viewProduct(items) {
      this.getEditItem.splice(-1);
      //console.log.log("view product pressed");
      // //console.log.log(items);

      //console.log.log("++++++++++++++++++++++++++++++++++++++");
      this.getAllProducts.find(file => {
        if (file.id == items.id)
          // //console.log.log(file)
          this.getEditItem.push(file);
      });
      //console.log.log(this.getEditItem);
      //console.log.log("++++++++++++++++++++++++++++++++++++++");
      this.dialog = true;
    }
  }
};
</script>

<style scoped>
.breadcrumbs {
  margin-left: 150px;
}
.note_div {
  padding-left: 160px;
  padding-right: 160px;
  font-size: 15px;
  color: gray;
}
.dialognote_div {
  padding: 15px;
  font-size: 15px;
  color: gray;
}
.card_sides_paddings {
  padding-left: 160px;
  padding-right: 160px;
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
  .breadcrumbs {
    margin-left: 50px;
  }
  .note_div {
    padding-left: 50px;
    padding-right: 50px;
  }
  .card_sides_paddings {
    padding-left: 50px;
    padding-right: 50px;
  }
  .mx-auto {
    width: 20rem;
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

/* Mobile Phone Larage */
@media screen and (max-width: 425px) {
  .breadcrumbs {
    margin-left: 10px;
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
/* Mobile Phone Medium */
@media screen and (max-width: 375px) {
  .note_div {
    padding-left: 50px;
    padding-right: 50px;
  }
  .card_sides_paddings {
    padding-left: 30px;
    padding-right: 30px;
  }
  .mx-auto {
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
/* Mobile Phone small */
@media screen and (max-width: 320px) {
  .note_div {
    padding-left: 50px;
    padding-right: 50px;
  }
  .card_sides_paddings {
    padding-left: 15px;
    padding-right: 15px;
  }
  .mx-auto {
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