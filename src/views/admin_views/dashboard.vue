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
                    :src="'data:image/jpeg;base64,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'"
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