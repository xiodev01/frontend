<template>
  <div id="dashboard">
    <v-app>
      <v-content>
        <Navbar />

        <!-- snackbar -->
        <div class="text-center">
          <v-snackbar
            v-model="snackbar"
            :bottom="y === 'bottom'"
            :color="color"
            :left="x === 'left'"
            :multi-line="mode === 'multi-line'"
            :right="x === 'right'"
            :timeout="timeout"
            :top="y === 'top'"
            :vertical="mode === 'vertical'"
          >
            {{ text }}
            <template v-slot:action="{ attrs }">
              <v-btn dark text v-bind="attrs" @click="snackbar = false">Close</v-btn>
            </template>
          </v-snackbar>
        </div>

        <v-row>
          <!-- Welcome Sections -->
          <div class="col-xl-4 mt-3 expansion-panels">
            <v-row justify="center">
              <v-dialog v-model="dialog_welcome_section" persistent max-width="600px">
                <v-card>
                  <v-card-title>
                    <span class="headline">Edit Welcome Section</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6">
                          <v-textarea
                            v-model="WelcomeForm.WhoAreWe"
                            filled
                            auto-grow
                            label="Who are we?"
                            rows="4"
                            row-height="30"
                          ></v-textarea>
                        </v-col>

                        <v-col cols="12" sm="6">
                          <v-textarea
                            filled
                            auto-grow
                            label="Describe Imports"
                            rows="4"
                            v-model="WelcomeForm.DescribeImports"
                            row-height="30"
                          ></v-textarea>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-textarea
                            filled
                            auto-grow
                            label="Describe Exports"
                            v-model="WelcomeForm.DescribeExports"
                            rows="4"
                            row-height="30"
                          ></v-textarea>
                        </v-col>

                        <v-col cols="12" sm="6">
                          <v-file-input
                            v-model="files"
                            color="deep-purple accent-4"
                            counter
                            @change="onFileSelected($event)"
                            label="File input"
                            placeholder="Select an image"
                            multiple
                            outlined
                            :show-size="1000"
                          ></v-file-input>
                          <v-img :src="MultiFile[0]" width="30%"></v-img>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog_welcome_section = false">Close</v-btn>
                    <v-btn color="green darken-1" text @click="updateForm()">Update</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header disable-icon-rotate>
                  Welcome Section
                  <template v-slot:actions>
                    <v-icon color="teal">mdi-check</v-icon>
                  </template>
                </v-expansion-panel-header>

                <v-expansion-panel-content class="pt-2">
                  <v-btn dark @click="dialog_welcome_section = !dialog_welcome_section">
                    <v-icon>mdi-tooltip-edit</v-icon>Edit information
                  </v-btn>
                </v-expansion-panel-content>

                <v-expansion-panel-content>
                  <img
                     
                    :src="'https://ietraders.herokuapp.comhttp://apix.epizy.com/ftpimages/' + this.getWelcome[0].display[0].Image"
                    class="welcome_image"
                    alt
                  />

                  <br>
                  fecth from serever
                  <br>
                  <img
                     v-if="getWelcome.length != 0"
                    :src="'http://apix.epizy.com/ftpimages/image_28.jpeg'"
                    class="welcome_image"
                    alt
                  />
                  <!-- <img
                    v-if="getWelcome.length === 0"
                    src="../../assets/welcome.jpg"
                    class="welcome_image"
                    alt
                  />-->
                  <v-divider></v-divider>
                  <p>WELCOME</p>
                  <p>- Who We Are</p>

                  <p v-if="getWelcome.length != 0">{{this.getWelcome[0].display[0].Whoarewe}}</p>
                  <v-divider></v-divider>
                  <p>Imports</p>
                  <!-- <p>{{getWelcome}}</p> -->
                  <!-- <p>{{getWelcome[0].display[0].Imports}}</p> -->
                  <p v-if="getWelcome.length != 0">{{this.getWelcome[0].display[0].Imports}}</p>
                  <v-divider></v-divider>
                  <p>Exports</p>
                  <!-- <p>We export a wide range of spices, oils, coconut and natural rubber.</p> -->
                  <!-- <p>{{getWelcome[0].display[0].Exports}}</p> -->
                  <p v-if="getWelcome.length != 0">{{this.getWelcome[0].display[0].Exports}}</p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>

          <!-- Products Section -->
          <div class="col-xl-4 mt-3 expansion-panels">
            <v-row justify="center">
              <v-dialog v-model="dialog_products" persistent max-width="600px">
                <v-card>
                  <v-card-title>
                    <span class="headline">Edit Product Section</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="12">
                          <v-textarea
                            filled
                            auto-grow
                            v-model="WelcomeForm.DescribeProduct"
                            label="Describe about products?"
                            rows="4"
                            row-height="30"
                          ></v-textarea>
                          <!-- {{WelcomeForm.DescribeProduct}} -->
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog_products = false">Close</v-btn>
                    <v-btn color="green darken-1" text @click="UpdateProductForm">Update</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header disable-icon-rotate>
                  Products Section
                  <template v-slot:actions>
                    <v-icon color="teal">mdi-check</v-icon>
                  </template>
                </v-expansion-panel-header>

                <v-expansion-panel-content class="pt-2">
                  <v-btn dark @click="dialog_products = !dialog_products">
                    <v-icon>mdi-tooltip-edit</v-icon>Edit information
                  </v-btn>
                </v-expansion-panel-content>

                <v-expansion-panel-content>
                  <p>Our Products</p>
                  <p>- Products</p>
                  <!-- <p>
                    Devi Trading Company imports have been in international trade since 1971. The portfolio of imports is a balance between industrial products and agri-foods.
                    <br />
                    <br />Devi Trading Company is the Industry leader in exporting Ceylon spices, coconut products and natural rubber. Devi Trading Company has been a leading exporter of "True Cinnamon" (Cinnamomum Zeylanicum) since it's inception. Agro Food Products Import
                  </p>-->
                  <p v-if="getWelcome.length != 0">{{this.getWelcome[0].display[0].DescribeProduct}}</p>
                  <v-divider></v-divider>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>

          <!-- Services -->
          <div class="col-xl-4 mt-3 expansion-panels">
            <v-row justify="center">
              <v-dialog v-model="dialog_services" persistent max-width="600px">
                <v-card>
                  <v-card-title>
                    <span class="headline">Edit Services Section</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="12">
                          <v-textarea
                            filled
                            auto-grow
                            v-model="WelcomeForm.Services"
                            label="Descibe Services"
                            rows="4"
                            row-height="30"
                          ></v-textarea>
                          <!-- {{WelcomeForm.Services}} -->
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog_services = false">Close</v-btn>
                    <v-btn color="green darken-1" text @click="UpdateFormServices">Update</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header disable-icon-rotate>
                  Services Section
                  <template v-slot:actions>
                    <v-icon color="teal">mdi-check</v-icon>
                  </template>
                </v-expansion-panel-header>

                <v-expansion-panel-content class="pt-2">
                  <v-btn dark @click="dialog_services = !dialog_services">
                    <v-icon>mdi-tooltip-edit</v-icon>Edit information
                  </v-btn>
                </v-expansion-panel-content>

                <v-expansion-panel-content>
                  <p>Services</p>
                  <!-- <p>We import and export a wide range of goods. Our lab assures. Quality products are ready for delivery to your doorstep. Our customer satisfaction is paramount in achieving our goals. We offer a variety of packaging and shipping options that can be customized based on customer requirements.</p> -->
                  <p
                    v-if="getWelcome.length != 0"
                  >{{this.getWelcome[0].display[0].DescribeServices}}</p>
                  <v-divider></v-divider>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-row>
      </v-content>

      <v-dialog v-model="dialog_WarningImage" max-width="290">
        <v-card>
          <v-card-title class="headline">Warning</v-card-title>

          <v-card-text>Please Select One Image</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="dialog_WarningImage = false">Disagree</v-btn>

            <v-btn color="green darken-1" text @click="WarningImage">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <Footer />
    </v-app>
  </div>
</template>

<script>
import Navbar from "../admin_views/nav";
import Footer from "../admin_views/footer";
export default {
  name: "dashboard",
  components: {
    Navbar: Navbar,
    Footer: Footer
  },
  data: () => ({
    color: "success",
    mode: "vertical",
    snackbar: false,
    text: "Information Has Been Saved Successfully",
    timeout: 1500,
    x: "right",
    y: "top",

    dialog_welcome_section: false,
    dialog_products: false,
    dialog_services: false,
    dialog_WarningImage: false,

    files: [],
    showWhoAreWe: null,
    showImports: null,
    showExports: null,
    showImage: null,
    MultiFile: [],
    selectedFileArray: [],
    getWelcome: [],
    WelcomeForm: {
      WhoAreWe: null,
      DescribeImports: null,
      DescribeExports: null,
      DescribeProduct: null,
      Services: null
    }
  }),

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.$http.get("/Welcome").then(response => {
        // //console.log.log(response.data)
        this.getWelcome.push(response.data);
        //console.log.log(this.getWelcome);
      });
    },
    WarningImage() {
      this.MultiFile.splice(0);
      this.dialog_WarningImage = false;
    },

    onFileSelected(event) {
      this.MultiFile.splice(0);
      this.selectedFileArray = event;

      for (var i = 0; i < this.selectedFileArray.length; i++) {
        let fileArray = this.selectedFileArray[i];
        this.fileSizeValidation = fileArray.size;

        let reader = new FileReader();

        reader.onload = fileArray => {
          // //console.log.log(reader.result)
          this.MultiFile.push(reader.result);
        };
        reader.readAsDataURL(fileArray);
      }
      if (event.length <= 1) {
        //console.log.log("true");
        this.dialog_WarningImage = false;
      } else {
        this.dialog_WarningImage = true;
        this.MultiFile.splice(0);
      }
    },
    updateForm() {
      //console.log.log("update button pressed");
      const update = {
        Whoarewe: this.WelcomeForm.WhoAreWe,
        Imports: this.WelcomeForm.DescribeImports,
        Exports: this.WelcomeForm.DescribeExports,
        Image: this.MultiFile
        // DescribeProduct: this.WelcomeForm.ActiveExport,
        // DescribeServices: this.WelcomeForm.Description,
      }; this.color = "info";
      this.text = "Loading...";
      this.snackbar = true;

      let uri = "Welcome/1";
      this.$http.put(uri, update).then(response => {
        this.successMessage = response.data;
        //console.log.log("saved");
        // //console.log.log(response.data.result);
        this.getWelcome.splice(0);
        this.initialize();
        this.snackbar = true;
      });
      // this.getWelcome.push(response.data)

      this.dialog_welcome_section = false;
      //console.log.log(this.getWelcome);
    },
    UpdateProductForm() {
      const update = {
        DescribeProduct: this.WelcomeForm.DescribeProduct
      }; this.color = "info";
      this.text = "Loading...";
      this.snackbar = true;
      let uri = "Welcome/1";
      this.$http.put(uri, update).then(response => {
        this.successMessage = response.data;
        //console.log.log("saved");
        // //console.log.log(response.data.result);
        this.getWelcome.splice(0);
        this.initialize();
        this.snackbar = true;
      });

      this.dialog_products = false;
      //console.log.log(this.getWelcome);
    },
    UpdateFormServices() {
      const update = {
        DescribeServices: this.WelcomeForm.Services
      }; this.color = "info";
      this.text = "Loading...";
      this.snackbar = true;
      let uri = "Welcome/1";
      this.$http.put(uri, update).then(response => {
        this.successMessage = response.data;
        //console.log.log("saved");
        // //console.log.log(response.data.result);
        this.getWelcome.splice(0);
        this.initialize();
        this.snackbar = true;
      });

      this.dialog_services = false;
      //console.log.log(this.getWelcome);
    }
  }
};
</script>

<style scoped>
.expansion-panels {
  margin-left: 20px;
  margin-right: 20px;
}
.welcome_image {
  width: 20rem;
}

@media screen and (max-width: 1024px) {
  .welcome_image {
    width: 17rem;
  }
}
@media screen and (max-width: 768px) {
  .welcome_image {
    width: 13rem;
  }
  @media screen and (max-width: 425px) {
    .welcome_image {
      width: 15rem;
    }
  }
}
</style>