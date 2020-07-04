<template>
  <div id="CSR">
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
            <v-col md="12" sm="12" lg="12" class="text-right">
              <v-btn
                v-if="showCSREDIT ===false"
                depressed
                color="primary"
                @click="showCSREDIT = !showCSREDIT"
              >
                <v-icon small>mdi-tooltip-edit-outline</v-icon>EDIT CSR
              </v-btn>
              <v-btn v-else depressed color="success" @click="FormCSRUpdate">
                <v-icon small>mdi-content-save</v-icon>save
              </v-btn>
            </v-col>
          </v-row>
          <v-row v-show="showCSREDIT===true">
            <v-col md="12" sm="12" class>
              <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="12" sm="12">
              <!-- <pre>{{editorData}}</pre>  -->
              <!-- <p v-html="editorData"></p> -->
              <!-- {{getCSR[0].display[0].CSR}} -->
              <p v-html="getCSR[0].display[0].CSR" v-if="getCSR.length != 0"></p>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template> 

<script>
import Navbar from "../admin_views//nav";
import Footer from "../admin_views/footer";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "CSR",
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

      showCSREDIT: false,
      editor: ClassicEditor,
      editorData: "",
      getCSR: [],
      editorConfig: {
        // The configuration of the rich-text editor.
      }
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.$http.get("/CSR").then(response => {
        // //console.log.log(response.data)
        this.getCSR.push(response.data);
        //console.log.log(this.getCSR);
      });
    },
    FormCSRUpdate() {
      if (this.editorData) {
         this.color = "info";
      this.text = "Loading...";
      this.snackbar = true;
        this.text = "Information Has Been Saved Successfully";
        this.color = "success";
        this.timeout = 1000;
        this.snackbar = true;
        const update = {
          CSR: this.editorData
        };
        let uri = "CSR/1";
        this.$http.put(uri, update).then(response => {
          this.successMessage = response.data;
          //console.log.log("saved");
          // //console.log.log(response.data.result);
          this.getCSR.splice(0);
          this.initialize();
          this.snackbar = true;
        });

        this.showCSREDIT = false;
        //console.log.log(this.getCSR);
      } else {
        this.text = "Update Failed. Please Provide Information";
        this.color = "error";
        this.timeout = 2000;
        this.snackbar = true;
      }
    }
  }
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>