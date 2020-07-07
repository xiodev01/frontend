<template>
  <div id="Settings">
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
          <!-- default settings -->
          <v-row>
            <v-col>
              <v-card class="shadow" outlined tile>
                <b-card-header class="bg-primary text-light">
                  <v-icon small color="white">mdi-table-edit</v-icon>Default Settings
                </b-card-header>

                <v-row class="pa-2 mt-3">
                  <v-col cols="12" sm="4">
                    <v-text-field
                      autofocus
                      filled
                      flat
                      v-model="comapnay_name"
                      prepend-inner-icon="mdi-pencil"
                      dense
                      clearable
                      label="Company Name"
                      outlined
                    ></v-text-field>
                    {{comapnay_name}}
                  </v-col>

                  <v-col cols="12" sm="4">
                    <v-file-input
                      v-model="files"
                      clearable
                      counter
                      label="Company Logo"
                      placeholder="Select Logo"
                      prepend-inner-icon="mdi-camera"
                      prepend-icon
                      dense
                      @change="onFileSelected"
                      multiple
                      outlined
                      :show-size="1000"
                    ></v-file-input>
                    <!-- <v-img :src="MultiFile[0]" width="30%"></v-img> -->
                  </v-col>

                  <v-col cols="12" sm="4">
                    <v-text-field
                      v-model="email"
                      clearable
                      dense
                      prepend-inner-icon="mdi-mail"
                      label="Email"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      v-model="phone"
                      clearable
                      dense
                      prepend-inner-icon="mdi-phone"
                      label="Phone"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      v-model="address"
                      clearable
                      dense
                      prepend-inner-icon="mdi-map"
                      label="Address"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      v-model="companyTime"
                      prepend-inner-icon="mdi-clock"
                      clearable
                      label="Opening & Closing Time"
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="12" class="text-right">
                    <v-btn medium color="success" class @click="defaultSettingsUpdate">
                      <v-icon small>mdi-content-save</v-icon>Save
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <!-- Login Section -->
          <v-row>
            <v-col>
              <v-card class="shadow" outlined tile>
                <b-card-header class="bg-primary text-light" tile>
                  <v-icon small color="white">mdi-table-edit</v-icon>Login Settings
                </b-card-header>

                <v-row class="pa-2 mt-3">
                  <v-col cols="12" sm="4">
                    <v-text-field
                      dense
                      v-model="loginEmail"
                      clearable
                      prepend-inner-icon="mdi-account-arrow-right-outline"
                      label="Email"
                      outlined
                    ></v-text-field>
                    <!-- {{loginEmail}} -->
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      v-model="loginPassword"
                      clearable
                      type="password"
                      dense
                      prepend-inner-icon="mdi-form-textbox-password"
                      label="Password"
                      outlined
                    ></v-text-field>
                    <!-- {{this.loginPassword}} -->
                  </v-col>
                  <v-col cols="12" sm="12" class="text-right">
                    <v-btn medium @click="updateLogin" color="success" class>
                      <v-icon small>mdi-content-save</v-icon>Save
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <!-- Social Media Links -->
          <v-row>
            <v-col>
              <v-card class="shadow" outlined tile>
                <b-card-header class="bg-primary text-light" tile>
                  <v-icon small color="white">mdi-table-edit</v-icon>Social Media Profiles
                </b-card-header>

                <v-row class="pa-2 mt-3">
                  <v-col cols="12" sm="4">
                    <v-text-field
                      v-model="fblink"
                      clearable
                      dense
                      prepend-inner-icon="mdi-facebook"
                      label="Facebook Profile Link"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      v-model="instalink"
                      clearable
                      prepend-inner-icon="mdi-instagram"
                      dense
                      label="Instagram Profile Link"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      v-model="googlelink"
                      clearable
                      dense
                      prepend-inner-icon="mdi-google-plus"
                      label="Google Profile Link"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" class="text-right">
                    <v-btn medium color="success" class @click="SocialMediaUpdate">
                      <v-icon small>mdi-content-save</v-icon>Save
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
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
import Navbar from "../admin_views//nav";
import Footer from "../admin_views/footer";
export default {
  name: "Settings",
  components: {
    Navbar: Navbar,
    Footer: Footer
  },
  data() {
    return {
      color: "success",
      mode: "vertical",
      snackbar: false,
      text: "Information Has Been Saved Successfully",
      timeout: 1500,
      x: "right",
      y: "top",

      files: [],
      comapnay_name: null,
      email: null,
      phone: null,
      address: null,
      companyTime: null,
      loginEmail: null,
      loginPassword: null,
      fblink: null,
      instalink: null,
      googlelink: null,
      MultiFile: [],
      selectedFileArray: [],
      dialog_WarningImage: false
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.$http.get("/Settings").then(response => {
        //console.log.log(response.data);
        this.comapnay_name = response.data.display[0].companyName;
        this.email = response.data.display[0].companyEmail;
        this.phone = response.data.display[0].companyPhone;
        this.address = response.data.display[0].companyAddress;
        this.companyTime = response.data.display[0].companyWorkingTime;
        this.fblink = response.data.display[0].FacebookLink;
        this.instalink = response.data.display[0].InstagramLink;
        this.googlelink = response.data.display[0].GoogleLink;
        this.loginEmail = response.data.user[0].email;
        this.loginPassword = null;
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
    defaultSettingsUpdate() {
      //console.log.log("default settings pressed");
      const update = {
        companyName: this.comapnay_name,
        companyLogo: this.MultiFile,
        companyEmail: this.email,
        companyPhone: this.phone,
        companyAddress: this.address,
        companyWorkingTime: this.companyTime
      };
      //console.log.log(update);
       this.color = "warning";
      this.text = "Loading...";
      this.snackbar = true;
      let uri = "Settings/1";
      this.$http.put(uri, update).then(response => {
        this.successMessage = response.data;
        //console.log.log("saved About");
        // //console.log.log(response.data.result);
        this.initialize();
        this.snackbar = true;
         this.color = "success";
        this.text = "Information Has Been Saved Successfully";
        this.snackbar = true;
      });
    },
    updateLogin() {
      const update = {
        Email: this.loginEmail,
        Password: this.loginPassword
      };

      //console.log.log(update) 
      this.color = "warning";
      this.text = "Loading...";
      this.snackbar = true;
      let uri = "Settings/1";
      this.$http.put(uri, update).then(response => {
        this.successMessage = response.data;
        //console.log.log("saved Logins");
        // //console.log.log(response.data.result);
        this.initialize();
        this.snackbar = true;
         this.color = "success";
        this.text = "Information Has Been Saved Successfully";
        this.snackbar = true;
      });
    },
    SocialMediaUpdate() {
      //console.log.log("Soical Media pressed");
       this.color = "warning";
      this.text = "Loading...";
      this.snackbar = true;
      const update = {
        FacebookLink: this.fblink,
        InstagramLink: this.instalink,
        GoogleLink: this.googlelink
      };
      //console.log.log(update);
      let uri = "Settings/1";
      this.$http.put(uri, update).then(response => {
        this.successMessage = response.data;
        //console.log.log("saved About");
        // //console.log.log(response.data.result);
        this.initialize();
        this.snackbar = true;
         this.color = "success";
        this.text = "Information Has Been Saved Successfully";
        this.snackbar = true;
      });
    }
  }
};
</script>

<style>
</style>