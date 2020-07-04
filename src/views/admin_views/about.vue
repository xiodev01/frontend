<template>
  <div id="About">
    <v-app>
      <v-content>
        <Navbar />
        <v-container>
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
            <!-- About Sections -->
            <div class="col-xl-4 mt-3 expansion-panels">
              <v-row justify="center">
                <v-dialog v-model="dialog_About_section" persistent max-width="600px">
                  <v-card>
                    <v-card-title>
                      <span class="headline">Edit About Section</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="12">
                            <v-textarea
                              filled
                              auto-grow
                              label="Descibe About Company"
                              rows="4"
                              v-model="Form.DescribeAbout"
                              row-height="30"
                            ></v-textarea>
                            {{Form.DescribeAbout}}
                          </v-col>

                          <v-col cols="12" sm="6">
                            <v-file-input
                              v-model="files"
                              color="deep-purple accent-4"
                              counter
                              label="File input"
                              placeholder="Select an image"
                              prepend-icon="mdi-paperclip"
                              outlined
                              multiple
                              @change="onFileSelected"
                              :show-size="1000"
                            ></v-file-input>
                            <v-img :src="MultiFile[0]" width="30%"></v-img>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="dialog_About_section = false">Close</v-btn>
                      <v-btn color="green darken-1" text @click="FormAboutUpdate">Update</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
              <v-expansion-panels focusable>
                <v-expansion-panel>
                  <v-expansion-panel-header disable-icon-rotate>
                    About Section
                    <template v-slot:actions>
                      <v-icon color="teal">mdi-check</v-icon>
                    </template>
                  </v-expansion-panel-header>

                  <v-expansion-panel-content class="pt-2">
                    <v-btn dark @click="dialog_About_section = !dialog_About_section">
                      <v-icon>mdi-tooltip-edit</v-icon>Edit information
                    </v-btn>
                  </v-expansion-panel-content>

                  <v-expansion-panel-content>
                    <!-- <img src="../../assets/welcome.jpg" class="welcome_image" alt /> -->
                    <img
                       
                      :src="'http://apix.epizy.com/ftpimages/' + this.getAbout[0].display[0].CompanyImage"
                      class="welcome_image"
                      alt
                    />
                    <v-divider></v-divider>
                    <!-- <p>
                      Devi Trading Company was established in 1971 by Mr. Vengadasalam, since when we have developed a reputation as a highly specialized import and export organization with niche markets in 25 countries across Europe, America, and Asia. Our passion for our products and our customers as well as the versatility of our international marketing activities has helped us become one of the leading trading companies in Asia.
                      At Devi Trading Company we believe in giving back to the farming communities that work with us. Our work with cinnamon farmers in areas such as Meetiyagoda, Karapitiya and Ratnapura has resulted in decades of sustained incomes for these communities as well as creating a high level of quality consciousness amongst these farmers.
                      Our vision is to empower communities, to build long-term relationships with our suppliers and customers, and to build a better environment for tomorrow.
                    </p>-->
                    <p
                      v-if="getAbout.length != 0"
                    >{{this.getAbout[0].display[0].CompanyDescription}}</p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>

            <!-- Mission Sections -->
            <div class="col-xl-4 mt-3 expansion-panels">
              <v-row justify="center">
                <v-dialog v-model="dialog_Mission_section" persistent max-width="600px">
                  <v-card>
                    <v-card-title>
                      <span class="headline">Edit Messions</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="12">
                            <v-textarea
                              filled
                              auto-grow
                              label="Descibe the mission"
                              rows="4"
                              v-model="Form.DescribeMission"
                              row-height="30"
                            ></v-textarea>
                            {{Form.DescribeMission}}
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog_Mission_section = false"
                      >Close</v-btn>
                      <v-btn color="green darken-1" text @click="FormMissionUpdate">Update</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
              <v-expansion-panels focusable>
                <v-expansion-panel>
                  <v-expansion-panel-header disable-icon-rotate>
                    Mission Section
                    <template v-slot:actions>
                      <v-icon color="teal">mdi-check</v-icon>
                    </template>
                  </v-expansion-panel-header>

                  <v-expansion-panel-content class="pt-2">
                    <v-btn dark @click="dialog_Mission_section = !dialog_Mission_section">
                      <v-icon>mdi-tooltip-edit</v-icon>Edit information
                    </v-btn>
                  </v-expansion-panel-content>

                  <v-expansion-panel-content>
                    <!-- <img src="../../assets/welcome.jpg" class="welcome_image" alt /> -->
                    <!-- <v-divider></v-divider> -->
                    <!-- <p>At Devi Trading Company we believe in making a difference. Our philosophy is one of integration and empowerment within the community. By enriching the lives of the communities we work with, we are not only fostering a better tomorrow but also have the satisfaction of knowing that our presence is benefiting the communities that we work with as well as creating quality consciousness and enhancing the capabilities of our farmers. We strive to build strong supplier and customer relationships. We are a fair trade company.</!-->
                    <p v-if="getAbout.length != 0">{{this.getAbout[0].display[0].Mession}}</p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>

            <!-- Vision Section -->
            <div class="col-xl-4 mt-3 expansion-panels">
              <v-row justify="center">
                <v-dialog v-model="dialog_Vision_section" persistent max-width="600px">
                  <v-card>
                    <v-card-title>
                      <span class="headline">Edit Vision</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="12">
                            <v-textarea
                              filled
                              auto-grow
                              label="Descibe the vision"
                              rows="4"
                              v-model="Form.DescribeVission"
                              row-height="30"
                            ></v-textarea>
                            {{Form.DescribeVission}}
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="dialog_Vision_section = false">Close</v-btn>
                      <v-btn color="green darken-1" text @click="FormVissionUpdate">Update</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
              <v-expansion-panels focusable>
                <v-expansion-panel>
                  <v-expansion-panel-header disable-icon-rotate>
                    Vision Section
                    <template v-slot:actions>
                      <v-icon color="teal">mdi-check</v-icon>
                    </template>
                  </v-expansion-panel-header>

                  <v-expansion-panel-content class="pt-2">
                    <v-btn dark @click="dialog_Vision_section = !dialog_Vision_section">
                      <v-icon>mdi-tooltip-edit</v-icon>Edit information
                    </v-btn>
                  </v-expansion-panel-content>

                  <v-expansion-panel-content>
                    <!-- <img src="../../assets/welcome.jpg" class="welcome_image" alt /> -->
                    <!-- <v-divider></v-divider> -->
                    <!-- <p>To deliver high-quality products and build productive, long-lasting relationships with our customers. We will work as a group to achieve our target of capturing the global market. Our success lies in our passion for quality, precision and customer satisfaction.</p> -->
                    <p v-if="getAbout.length != 0">{{this.getAbout[0].display[0].Vission}}</p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>

            <!-- Enviroment Section -->
            <div class="col-xl-4 mt-3 expansion-panels">
              <v-row justify="center">
                <v-dialog v-model="dialog_Enviroment_section" persistent max-width="600px">
                  <v-card>
                    <v-card-title>
                      <span class="headline">Edit Enviroment Note</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="12">
                            <v-textarea
                              filled
                              auto-grow
                              label="Descibe the Enviroment"
                              rows="4"
                              v-model="Form.Enviroment"
                              row-height="30"
                            ></v-textarea>
                            {{Form.Enviroment}}
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog_Enviroment_section = false"
                      >Close</v-btn>
                      <v-btn color="green darken-1" text @click="FormEnviromentUpdate">Update</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
              <v-expansion-panels focusable>
                <v-expansion-panel>
                  <v-expansion-panel-header disable-icon-rotate>
                    Enviroment Section
                    <template v-slot:actions>
                      <v-icon color="teal">mdi-check</v-icon>
                    </template>
                  </v-expansion-panel-header>

                  <v-expansion-panel-content class="pt-2">
                    <v-btn dark @click="dialog_Enviroment_section = !dialog_Enviroment_section">
                      <v-icon>mdi-tooltip-edit</v-icon>Edit information
                    </v-btn>
                  </v-expansion-panel-content>

                  <v-expansion-panel-content>
                    <!-- <img src="../../assets/welcome.jpg" class="welcome_image" alt /> -->
                    <!-- <v-divider></v-divider> -->
                    <!-- <p>We take all steps to manage resources sustainable and to protect the environment in many little ways. Recycling method and water treatment solutions are on offer to the customers.</!-->
                    <p v-if="getAbout.length != 0">{{this.getAbout[0].display[0].Enviroment}}</p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>

            <!-- EMployee Progress Section -->
            <div class="col-xl-4 mt-3 expansion-panels">
              <v-row justify="center">
                <v-dialog v-model="dialog_EProgress_section" persistent max-width="600px">
                  <v-card>
                    <v-card-title>
                      <span class="headline">Edit Employee Progress Note</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="12">
                            <v-textarea
                              filled
                              auto-grow
                              label="Descibe the Employee Progress"
                              rows="4"
                              v-model="Form.EmployeeProgressNote"
                              row-height="30"
                            ></v-textarea>
                            {{Form.EmployeeProgressNote}}
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog_EProgress_section = false"
                      >Close</v-btn>
                      <v-btn
                        color="green darken-1"
                        text
                        @click="FormEmployeeProgressNoteUpdate"
                      >Update</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
              <v-expansion-panels focusable>
                <v-expansion-panel>
                  <v-expansion-panel-header disable-icon-rotate>
                    Employee Progress Section
                    <template v-slot:actions>
                      <v-icon color="teal">mdi-check</v-icon>
                    </template>
                  </v-expansion-panel-header>

                  <v-expansion-panel-content class="pt-2">
                    <v-btn dark @click="dialog_EProgress_section = !dialog_EProgress_section">
                      <v-icon>mdi-tooltip-edit</v-icon>Edit information
                    </v-btn>
                  </v-expansion-panel-content>

                  <v-expansion-panel-content>
                    <!-- <img src="../../assets/welcome.jpg" class="welcome_image" alt /> -->
                    <!-- <v-divider></v-divider> -->

                    <!-- <p>Devi Trading Company practices the welfare support for our staff at different phases, We ensure safe working conditions for all individuals to grow and reach their potential. Work is carried Out in comfortable working conditions which follow good work practices. The company provides financial support for housing, vehicle, medical, and educational requirements. Further staff members dealing with a sudden illness in their family, a wedding or any other special function is provided of with the required financial support by the company.</p> -->
                    <p
                      v-if="getAbout.length != 0"
                    >{{this.getAbout[0].display[0].EmployeeProgressNote}}</p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>

            <!-- our people Section -->
            <div class="col-xl-4 mt-3 expansion-panels">
              <v-row justify="center">
                <v-dialog v-model="dialog_People_section" persistent max-width="600px">
                  <v-card>
                    <v-card-title>
                      <span class="headline">Edit Our People Note</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="12">
                            <v-textarea
                              filled
                              auto-grow
                              label="Descibe about Our People"
                              rows="4"
                              v-model="Form.OurPeople"
                              row-height="30"
                            ></v-textarea>
                            {{Form.OurPeople}}
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="dialog_People_section = false">Close</v-btn>
                      <v-btn color="green darken-1" text @click="FormOurPeopleUpdate">Update</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
              <v-expansion-panels focusable>
                <v-expansion-panel>
                  <v-expansion-panel-header disable-icon-rotate>
                    Our People Section
                    <template v-slot:actions>
                      <v-icon color="teal">mdi-check</v-icon>
                    </template>
                  </v-expansion-panel-header>

                  <v-expansion-panel-content class="pt-2">
                    <v-btn dark @click="dialog_People_section = !dialog_People_section">
                      <v-icon>mdi-tooltip-edit</v-icon>Edit information
                    </v-btn>
                  </v-expansion-panel-content>

                  <v-expansion-panel-content>
                    <!-- <img src="../../assets/welcome.jpg" class="welcome_image" alt /> -->
                    <!-- <v-divider></v-divider> -->
                    <!-- <p>
                      To oppose discrimination we encourage equality of employment for both men and women. We improve the quality of lives which is sustainable and there will be no
                      exploitation of child labour.
                    </p>-->
                    <p v-if="getAbout.length != 0">{{this.getAbout[0].display[0].OurPeopleNote}}</p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </v-row>

          <v-dialog v-model="dialog_WarningImage" max-width="290">
            <v-card>
              <v-card-title class="headline">Warning</v-card-title>

              <v-card-text>Please Select One Image</v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="green darken-1" text @click="WarningImage">Disagree</v-btn>

                <v-btn color="green darken-1" text @click="WarningImage">Agree</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-container>
      </v-content>
      <Footer></Footer>
    </v-app>
  </div>
</template>

<script>
import Navbar from "../admin_views/nav";
import Footer from "../admin_views/footer";
export default {
  name: "About",
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

    dialog: true,
    dialog_About_section: false,
    dialog_Mission_section: false,
    dialog_Vision_section: false,
    dialog_Enviroment_section: false,
    dialog_EProgress_section: false,
    dialog_People_section: false,
    dialog_WarningImage: false,
    date: null,
    files: [],
    MultiFile: [],
    selectedFileArray: [],
    getAbout: [],
    Form: {
      DescribeAbout: null,
      DescribeMission: null,
      DescribeVission: null,
      Enviroment: null,
      EmployeeProgressNote: null,
      OurPeople: null
    },
    trip: {
      name: "",
      location: null,
      start: null,
      end: null
    },
    locations: [
      "Australia",
      "Barbados",
      "Chile",
      "Denmark",
      "Ecuador",
      "France"
    ]
  }),
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.$http.get("/About").then(response => {
        // //console.log(response.data)
        this.getAbout.push(response.data);
        //console.log(this.getAbout);
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
          // //console.log(reader.result)
          this.MultiFile.push(reader.result);
        };
        reader.readAsDataURL(fileArray);
      }
      if (event.length <= 1) {
        //console.log("true");
        this.dialog_WarningImage = false;
      } else {
        this.dialog_WarningImage = true;
        this.MultiFile.splice(0);
      }
    },
    FormAboutUpdate() {
      //console.log("about updated pressed");
      const update = {
        CompanyDescription: this.Form.DescribeAbout,
        CompanyImage: this.MultiFile
      };
      this.color = "info";
      this.text = "Loading...";
      this.snackbar = true;
      let uri = "About/1";
      this.$http.put(uri, update).then(response => {
        this.successMessage = response.data;
        //console.log("saved About");
        //console.log(response.data.result);
        this.getAbout.splice(0);
        this.initialize();
        this.snackbar = true;
      });
      this.dialog_About_section = false; //console.log(update);
    },
    FormMissionUpdate() {
      //console.log("about Mission pressed");
      const update = {
        Mession: this.Form.DescribeMission
      };
      this.color = "info";
      this.text = "Loading...";
      this.snackbar = true;
      let uri = "About/1";
      this.$http.put(uri, update).then(response => {
        this.successMessage = response.data;
        //console.log("saved About");
        //console.log(response.data.result);
        this.getAbout.splice(0);
        this.initialize();
        this.snackbar = true;
      });
      this.dialog_Mission_section = false; //console.log(update);
    },
    FormVissionUpdate() {
      //console.log("about Vission pressed");
      const update = {
        Vission: this.Form.DescribeVission
      };
       this.color = "info";
      this.text = "Loading...";
      this.snackbar = true;
      let uri = "About/1";
      this.$http.put(uri, update).then(response => {
        this.successMessage = response.data;
        //console.log("saved About");
        //console.log(response.data.result);
        this.getAbout.splice(0);
        this.initialize();
        this.snackbar = true;
      });
      this.dialog_Vision_section = false; //console.log(update);
    },
    FormEnviromentUpdate() {
      //console.log("about Vission pressed");
      const update = {
        Enviroment: this.Form.Enviroment
      };
      this.color = "info";
      this.text = "Loading...";
      this.snackbar = true;
      let uri = "About/1";
      this.$http.put(uri, update).then(response => {
        this.successMessage = response.data;
        //console.log("saved About");
        //console.log(response.data.result);
        this.getAbout.splice(0);
        this.initialize();
        this.snackbar = true;
      });
      this.dialog_Enviroment_section = false; //console.log(update);
    },
    FormEmployeeProgressNoteUpdate() {
      //console.log("about Vission pressed");
      const update = {
        EmployeeProgressNote: this.Form.EmployeeProgressNote
      };
       this.color = "info";
      this.text = "Loading...";
      this.snackbar = true;
      let uri = "About/1";
      this.$http.put(uri, update).then(response => {
        this.successMessage = response.data;
        //console.log("saved About");
        //console.log(response.data.result);
        this.getAbout.splice(0);
        this.initialize();
        this.snackbar = true;
      });
      this.dialog_EProgress_section = false; //console.log(update);
    },
    FormOurPeopleUpdate() {
      //console.log("about Vission pressed");
      const update = {
        OurPeopleNote: this.Form.OurPeople
      };
      this.color = "info";
      this.text = "Loading...";
      this.snackbar = true;
      let uri = "About/1";
      this.$http.put(uri, update).then(response => {
        this.successMessage = response.data;
        //console.log("saved About");
        //console.log(response.data.result);
        this.getAbout.splice(0);
        this.initialize();
        this.snackbar = true;
      });
      this.dialog_People_section = false; //console.log(update);
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
  width: 19rem;
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