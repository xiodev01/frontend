<template>
  <div id="Contact">
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

        <div class="row m-0 pl-5 pr-5">
          <div class="col-xl-7" v-if="Activate[0].Contact_Activate_Contact_Details === 'true'">
            <p class="note text-secondary">Contact details</p>
            <table>
              <tr>
                <td>
                  <i class="fas fa-envelope-open-text icon_style"></i>
                </td>
                <!-- <td class="pl-5 note_info text-secondary">devi@slt.lk |devi@devitrading.com</td> -->
                <td class="pl-5 note_info text-secondary">{{getItem[0].companyEmail}}</td>
              </tr>
              <br />
              <tr>
                <td>
                  <i class="fas fa-phone icon_style"></i>
                </td>
                <!-- <td class="pl-5 note_info text-secondary">+94 112335124 |d +94 112320314 | +94 112437453</td> -->
                <td class="pl-5 note_info text-secondary">{{getItem[0].companyPhone}}</td>
              </tr>
              <br />
              <tr>
                <td>
                  <i class="fas fa-map-marker-alt icon_style"></i>
                </td>
                <!-- <td class="pl-5 note_info text-secondary">
              125 Bankshall Street
              <br />Colombo 11
              <br />Sri Lanka.
                </td>-->
                <td class="pl-5 note_info text-secondary">{{getItem[0].companyAddress}}</td>
              </tr>
            </table>
          </div>
          <div class="col-xl-5">
            <div class="row" v-if="Activate[0].Contact_Activate_Contact_Form === 'true'">
              <div class="col-xl-12 h1_color">
                <h1>Contact Us</h1>
              </div>
              <div class="col-xl-12">
                <div>
                  <b-input-group size="sm" class="mb-2">
                    <b-input-group-append is-text>
                      <i class="fas fa-user-circle icon_blue"></i>
                    </b-input-group-append>
                    <b-form-input
                      placeholder="Name"
                      v-model="Form.Name"
                      aria-label="Small text input with custom switch"
                    ></b-form-input>
                  </b-input-group>

                  <b-input-group size="sm" class="mb-2">
                    <b-input-group-append is-text>
                      <i class="fas fa-envelope-open-text icon_blue"></i>
                    </b-input-group-append>
                    <b-form-input
                      placeholder="Email"
                      v-model="Form.Email"
                      aria-label="Small text input with custom switch"
                    ></b-form-input>
                  </b-input-group>

                  <b-input-group size="sm" class="mb-2">
                    <b-input-group-append is-text>
                      <i class="fas fa-text-width icon_blue"></i>
                    </b-input-group-append>
                    <b-form-input
                      v-model="Form.Subject"
                      placeholder="Subject"
                      aria-label="Small text input with custom switch"
                    ></b-form-input>
                  </b-input-group>

                  <b-input-group size="sm" class="mb-2">
                    <b-input-group-append is-text>
                      <i class="fas fa-comment-alt icon_blue"></i>
                    </b-input-group-append>
                    <!-- <b-form-text placeholder="Subject" aria-label="Small text input with custom switch"></b-form-text> -->

                    <textarea
                      class="form-control"
                      v-model="Form.Message"
                      name
                      placeholder="Message"
                      id
                      rows="8"
                    ></textarea>
                  </b-input-group>
                  <br />
                  <b-btn class="btn_blue" @click="sendMessage">Send</b-btn>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="row m-0" >
      <div class="col-xl-12 p-5">
        <div>
          <iframe
            type="iframe"
            height="450"
            width="100%"
            src="https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d1980.2981579114075!2d79.85046412246759!3d6.938754120025722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e6!4m5!1s0x3ae2592026ed9b11%3A0xeb23c62c4697a7a1!2s125+Bankshall+St%2C+Colombo+01100!3m2!1d6.9386531!2d79.85155309999999!4m4!1s0x3ae2592026ed9b11%3A0xeb23c62c4697a7a1!3m2!1d6.9386528!2d79.85155309999999!5e0!3m2!1sen!2slk!4v1548660755671"
            allowfullscreen
            frameborder="0"
          ></iframe>
        </div>
      </div>
        </div>-->
        <Footer />
      </div>
    </v-app>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default {
  name: "Contact",
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

      getItem: [],
      Activate: [],
      Form: {
        Name: null,
        Email: null,
        Subject: null,
        Message: null
      },
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/"
        },
        {
          text: "Contact Us",
          disabled: true,
          href: "/contactus"
        }
      ]
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.$http.get("/Settings").then(response => {
        //console.log.log(response.data);
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
    },
    sendMessage() {
      let Name = this.Form.Name;
      let Email = this.Form.Email;
      let Subject = this.Form.Subject;
      let Message = this.Form.Message;

      if (Name && Email && Subject && Message) {
        this.text = "Message Has Been Sent";
        this.color = "success";
        this.timeout = 3000;
        this.snackbar = true;

        //console.log.log("send pressed");
        const store = {
          Name: this.Form.Name,
          Email: this.Form.Email,
          Subject: this.Form.Subject,
          Message: this.Form.Message
        };
        this.color = "info";
        this.text = "Loading...";
        this.snackbar = true;
        let uri = "Contacts/";
        this.$http.post(uri, store).then(response => {
          this.successMessage = response.data;
          //console.log.log("saved");
          this.color = "success";
        this.text = "Message Sent";
        this.snackbar = true;
          //console.log.log(response.data);

          this.Form = {
            Name: null,
            Email: null,
            Subject: null,
            Message: null
          };
        });
      } else {
        this.text = "Fill the form and try again";
        this.color = "error";
        this.timeout = 1000;
        this.snackbar = true;
      }
    }
  }
};
</script>

<style scoped>
.breadcrumbs {
  margin-left: 150px;
}
.note {
  font-size: 16px;
}
.icon_style {
  font-size: 25px;
  color: blue;
}
.note_info {
  font-size: 14px;
}
.h1_color {
  color: blue;
}
.icon_blue {
  color: blue;
}
.btn_blue {
  background-color: blue;
  border: none;
}
.map_size {
  width: 50rem;
  height: 10rem;
}
.btn_blue:hover {
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