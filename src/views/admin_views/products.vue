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
            <v-col md="12" sm="12">
              <v-row>
                <v-col md="12" sm="12">Import & Exports Item</v-col>
              </v-row>
              <v-row>
                <v-col md="12" sm="12">
                  <!-- <v-divider class="mx-4" inset vertical></v-divider> -->
                  <!-- <v-spacer></v-spacer> -->
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2 m-1"
                    @click="Productdialog = !Productdialog"
                  >
                    <v-icon small>mdi-plus</v-icon>New Product
                  </v-btn>
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2 m-1"
                    @click="Importdialog = !Importdialog"
                  >
                    <v-icon small>mdi-pencil</v-icon>Import Notes
                  </v-btn>
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2 m-1"
                    @click="Exportdialog = !Exportdialog"
                  >
                    <v-icon small>mdi-pencil</v-icon>Export Notes
                  </v-btn>
                </v-col>
              </v-row>
              <v-data-table
                :headers="headers"
                :items="desserts"
                sort-by="calories"
                class="elevation-1"
              >
                <template v-slot:top>
                  <v-toolbar flat color="white">
                    <!-- <v-toolbar-title>Import & Exports Item</v-toolbar-title> -->
                    <!-- <v-divider class="mx-4" inset vertical></v-divider> -->
                    <!-- <v-spacer></v-spacer> -->
                    <!-- Model Button Start -->
                    <v-dialog v-model="Productdialog" max-width="500px">
                      <v-card>
                        <v-card-title>
                          <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="editedItem.Name" label="Product Name"></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="editedItem.Category" label="Category"></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="12" md="12">
                                <v-row>
                                  <v-switch
                                    v-model="editedItem.ActiveImport"
                                    class="ma-2"
                                    inset
                                    label="Activate To Import"
                                    color="success"
                                  ></v-switch>
                                  <!-- {{editedItem.import}} -->
                                  <v-switch
                                    v-model="editedItem.ActiveExport"
                                    class="ma-2"
                                    inset
                                    label="Activate To Export"
                                    color="success"
                                  ></v-switch>
                                  <!-- {{editedItem.export}} -->
                                </v-row>
                              </v-col>
                              <!-- Add Product Choose File -->
                              <v-col cols="12" sm="11" md="11" class="ma-2">
                                <v-file-input
                                  show-size
                                  counter
                                  multiple
                                  accept="image/*"
                                  @change="onFileSelected($event)"
                                  label="Select Product Images"
                                ></v-file-input>

                                <v-subheader></v-subheader>
                                <v-list-item v-for="(item,index) in MultiFile" :key="index">
                                  <v-list-item-avatar>
                                    <v-img :src="item"></v-img>
                                  </v-list-item-avatar>
                                  <v-list-item-content>
                                    <v-list-item-title></v-list-item-title>
                                  </v-list-item-content>
                                  <v-list-item-icon>
                                    <v-icon @click="removeImage(item,index)">mdi-trash-can-outline</v-icon>
                                  </v-list-item-icon>
                                </v-list-item>

                                <v-divider></v-divider>
                              </v-col>

                              <v-col cols="12" sm="11" md="11" class="ma-2">
                                <v-btn
                                  color="primary"
                                  @click="showEditor = !showEditor"
                                  v-if="showEditor === false"
                                >EDIT DESCRIPTION</v-btn>
                                <v-btn
                                  color="success"
                                  @click="showEditor = !showEditor"
                                  v-if="showEditor === true"
                                >Save</v-btn>
                                <v-divider></v-divider>
                                <ckeditor
                                  v-if="showEditor"
                                  :editor="editor"
                                  v-model="editedItem.Description"
                                  :config="editorConfig"
                                ></ckeditor>
                                <!-- <v-textarea v-model="editedItem.description" label="Description"></v-textarea> -->
                                <p v-html="editedItem.Description"></p>
                                <!-- <p v-html=""></p> -->
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="Productdialog = false">Cancel</v-btn>
                          <v-btn color="blue darken-1" text @click="formSubmit">Save</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>

                    <v-dialog v-model="Editdialog" max-width="500px">
                      <v-card>
                        <v-card-title>
                          <span class="headline">Edit Product</span>
                        </v-card-title>

                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="getEditItem[0].Name" label="Product Name"></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="getEditItem[0].Category" label="Category"></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="12" md="12">
                                <v-row>
                                  <!-- {{getEditItem[0].ActiveImport}}
                                  {{getEditItem[0].ActiveExport}}-->
                                  <v-chip
                                    class="ma-2"
                                    v-show="getEditItem[0].ActiveImport === 'true'"
                                    color="teal"
                                    small
                                    text-color="white"
                                    @click="getEditItem[0].ActiveImport = 'false'"
                                  >
                                    <v-avatar left>
                                      <v-icon small>mdi-checkbox-marked-circle</v-icon>
                                    </v-avatar>Import item
                                  </v-chip>
                                  <v-chip
                                    small
                                    class="ma-2"
                                    v-show="getEditItem[0].ActiveImport === 'false'"
                                    @click="getEditItem[0].ActiveImport = 'true'"
                                    color="red"
                                    text-color="white"
                                  >
                                    <v-avatar left>
                                      <v-icon small>mdi-close</v-icon>
                                    </v-avatar>Non Import
                                  </v-chip>
                                  <v-chip
                                    class="ma-2"
                                    v-show="getEditItem[0].ActiveExport === 'true'"
                                    @click="getEditItem[0].ActiveExport = 'false'"
                                    color="teal"
                                    small
                                    text-color="white"
                                  >
                                    <v-avatar left>
                                      <v-icon small>mdi-checkbox-marked-circle</v-icon>
                                    </v-avatar>Export item
                                  </v-chip>
                                  <v-chip
                                    small
                                    class="ma-2"
                                    v-show="getEditItem[0].ActiveExport === 'false'"
                                    @click="getEditItem[0].ActiveExport = 'true'"
                                    color="red"
                                    text-color="white"
                                  >
                                    <v-avatar left>
                                      <v-icon small>mdi-close</v-icon>
                                    </v-avatar>Non Export item
                                  </v-chip>
                                </v-row>
                              </v-col>
                              <!-- Add Product Choose File -->
                              <v-col cols="12" sm="11" md="11" class="ma-2">
                                <v-file-input
                                  show-size
                                  counter
                                  multiple
                                  accept="image/*"
                                  @change="onEditFileSelected($event)"
                                  label="Select Product Images"
                                ></v-file-input>
                                <!-- if new file uploaded -->
                                <v-subheader></v-subheader>
                                <p v-if="MultiFile != ''">New Images</p>
                                <v-list-item v-for="(item,index) in MultiFile" :key="item.name">
                                  <v-list-item-avatar>
                                    <v-img :src="item"></v-img>
                                  </v-list-item-avatar>
                                  <v-list-item-content>
                                    <v-list-item-title></v-list-item-title>
                                  </v-list-item-content>
                                  <v-list-item-icon>
                                    <v-icon @click="removeImage(item,index)">mdi-trash-can-outline</v-icon>
                                  </v-list-item-icon>
                                </v-list-item>

                                <v-divider></v-divider>

                                <!-- old images -->
                                <p>Exsisting Images</p>
                                <v-subheader></v-subheader>
                                <v-list-item
                                  v-for="(item,index) in getEditItem[0].image"
                                  :key="index"
                                >
                                  <v-list-item-avatar>
                                    <v-img :src="'http://landingsiteone.epizy.com/public/ftpimages/' + item.img"></v-img>
                                  </v-list-item-avatar>
                                  <v-list-item-content>
                                    <v-list-item-title></v-list-item-title>
                                  </v-list-item-content>
                                  <v-list-item-icon>
                                    <v-icon
                                      @click="removeEditImage(item,index)"
                                    >mdi-trash-can-outline</v-icon>
                                  </v-list-item-icon>
                                </v-list-item>

                                <v-divider></v-divider>
                              </v-col>

                              <v-col cols="12" sm="11" md="11" class="ma-2">
                                <v-btn
                                  color="primary"
                                  @click="showEditor = !showEditor"
                                  v-if="showEditor === false"
                                >EDIT DESCRIPTION</v-btn>
                                <v-btn
                                  color="success"
                                  @click="showEditor = !showEditor"
                                  v-if="showEditor === true"
                                >Save</v-btn>
                                <v-divider></v-divider>
                                <ckeditor
                                  v-if="showEditor"
                                  :editor="editor"
                                  v-model="getEditItem[0].Description"
                                  :config="editorConfig"
                                ></ckeditor>
                                <!-- <v-textarea v-model="editedItem.description" label="Description"></v-textarea> -->
                                <p v-html="getEditItem[0].Description"></p>
                                <!-- <p v-html=""></p> -->
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="Editdialog = false">Cancel</v-btn>
                          <v-btn color="blue darken-1" text @click="formUpdateSubmit">Save</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-toolbar>
                </template>

                <template v-slot:item.actions="{ item }">
                  <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
                  <!-- <v-icon small @click="deleteItem(item)">mdi-delete</v-icon> -->
                  <v-icon small @click="deleteProductitem(item)">mdi-delete</v-icon>
                </template>
                <template v-slot:item.Image="{ item }">
                  <!-- {{item.Image['img']}} -->

                  <v-list-item>
                    <v-list-item-avatar>
                      <v-img :src="'http://landingsiteone.epizy.com/public/ftpimages/' + item.Image['img']"></v-img>
                      <!-- :src="'http://landingsiteone.epizy.com/public/ftpimages/' + items.image_name" -->
                    </v-list-item-avatar>
                  </v-list-item>
                </template>
                <template v-slot:item.ActiveImport="{ item }">
                  <v-chip
                    class="ma-2"
                    v-show="item.ActiveImport === 'true'"
                    color="teal"
                    small
                    text-color="white"
                  >
                    <v-avatar left>
                      <v-icon small>mdi-checkbox-marked-circle</v-icon>
                    </v-avatar>Import item
                  </v-chip>
                  <v-chip
                    small
                    class="ma-2"
                    v-show="item.ActiveImport === 'false'"
                    color="red"
                    text-color="white"
                  >
                    <v-avatar left>
                      <v-icon small>mdi-close</v-icon>
                    </v-avatar>Non Import
                  </v-chip>
                </template>
                <template v-slot:item.ActiveExport="{ item }">
                  <v-chip
                    class="ma-2"
                    v-show="item.ActiveExport === 'true'"
                    color="teal"
                    small
                    text-color="white"
                  >
                    <v-avatar left>
                      <v-icon small>mdi-checkbox-marked-circle</v-icon>
                    </v-avatar>Export item
                  </v-chip>
                  <v-chip
                    class="ma-2"
                    v-show="item.ActiveExport === 'false'"
                    color="red"
                    small
                    text-color="white"
                  >
                    <v-avatar left>
                      <v-icon small>mdi-close</v-icon>
                    </v-avatar>Non Export
                  </v-chip>
                </template>
                <template v-slot:no-data>
                  <v-progress-circular
                    :size="70"
                    :width="7"
                    color="purple"
                    indeterminate
                    style="margin: 1rem;"
                  ></v-progress-circular>
                  <!-- Loading...<br>
                  <v-btn color="primary" @click="initialize">Reset</v-btn>-->
                </template>
              </v-data-table>
              <v-dialog v-model="Importdialog" max-width="500px">
                <v-card>
                  <v-card-title>
                    <span class="headline">Import Notes</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="11" md="11" class="ma-2">
                          <v-divider></v-divider>
                          <ckeditor
                            :editor="editor"
                            v-model="editorDataImportNote"
                            :config="editorConfig"
                          ></ckeditor>
                          <!-- <v-textarea v-model="editedItem.description" label="Description"></v-textarea> -->
                          <p v-html="editorDataImportNote"></p>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="Importdialog = false">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="ImportNoteUpdate">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="Exportdialog" max-width="500px">
                <v-card>
                  <v-card-title>
                    <span class="headline">Export Notes</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="11" md="11" class="ma-2">
                          <v-divider></v-divider>
                          <ckeditor
                            :editor="editor"
                            v-model="editorDataExportdialog"
                            :config="editorConfig"
                          ></ckeditor>
                          <!-- <v-textarea v-model="editedItem.description" label="Description"></v-textarea> -->
                          <p v-html="editorDataExportdialog"></p>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="Exportdialog = false">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="ExportNoteUpdate">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="removeDeleteProductModel" max-width="290">
                <v-card>
                  <v-card-title
                    class="headline"
                  >Do you want to delete {{deleteproductname}} product?</v-card-title>

                  <v-card-text>When you agree to delete the product. It will be permenently deleted from the system.</v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      color="green darken-1"
                      text
                      @click="removeDeleteProductModel = false"
                    >Disagree</v-btn>

                    <v-btn color="green darken-1" text @click="removeProduct">Agree</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
      <!-- {{desserts}} -->
      <Footer />
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
  data: () => ({
    color: "success",
    mode: "vertical",
    snackbar: false,
    text: "Information Has Been Saved Successfully",
    timeout: 1500,
    x: "right",
    y: "top",

    switch1: false,
    switch2: false,
    // swtichtest:false,
    Productdialog: false,
    Importdialog: false,
    Exportdialog: false,
    Categorydialog: false,
    Editdialog: false,
    removeDeleteProductModel: false,
    showEditor: false,
    editor: ClassicEditor,
    editorData: null,
    deleteproductname: null,
    deleteproductid: null,
    editorDataImportNote: null,
    editorDataExportdialog: null,
    selectedFileArray: [],
    MultiFile: [],
    cardlistitems: [
      { title: " ", avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg" },
      { title: " ", avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg" },
      { title: " ", avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg" },
      { title: " ", avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg" }
    ],
    editorConfig: {
      // The configuration of the rich-text editor.
      toolbar: {
        items: ["bold", "italic", "link", "undo", "redo", "heading"]
      }
    },
    headers: [
      {
        text: "Product Name",
        align: "start",
        sortable: false,
        value: "Name"
      },
      { text: "Category", value: "Category" },
      { text: "Image", value: "Image" },

      { text: "Import", value: "ActiveImport" },
      { text: "Export", value: "ActiveExport" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    desserts: [],
    dessertsAll: [],
    editedIndex: -1,
    editedItem: {
      Name: "",
      Category: null,
      Description: null,
      ActiveImport: "",
      ActiveExport: ""
    },
    defaultItem: {
      name: "",
      category: null,
      description: null
    },
    getItem1: "item1",
    getItem2: "item2",
    getItem3: "item3",
    getItem4: "item4",
    // editItem:{
    //   Id:null
    // }
    getEditItem: [
      {
        Name: null,
        Category: null,
        ActiveImport: null,
        ActiveExport: null,
        image: [],
        Description: null
      }
    ]
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Product" : "Edit Product";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.getData();
      this.desserts = [
        // {
        //   Name: "Garlic",
        //   Category: "Agro Food Products",
        //   Description: "test",
        //   ActiveImport: false,P
        //   ActiveExport: false
        // }
        // {
        //   name: "Onions",
        //   category: "Agro Food Products",
        //   description: "place image here",
        //   import: false,
        //   export: false
        // }
      ];
    },

    getData() {
      ////console.log.log.log("get data from backend");
      this.$http.get("/Product").then(response => {
        for (let index = 0; index < response.data.IndexResult.length; index++) {
          const element = response.data.IndexResult[index];
          ////console.log.log.log(element);
          this.desserts.push(element);
        }

        ////console.log.log.log("=============================================");
        ////console.log.log.log("All result with complete image set will display below");

        for (let index = 0; index < response.data.IndexImage.length; index++) {
          const all_result = response.data.IndexImage[index];
          ////console.log.log.log(all_result);
          this.dessertsAll.push(all_result);

          this.dessertsAll.find(file => {
            if (file.ActiveImport == "0") {
              file.ActiveImport = "false";
            }
            if (file.ActiveImport == "1") {
              file.ActiveImport = "true";
            }
            if (file.ActiveExport == "1") {
              file.ActiveExport = "true";
            }
            if (file.ActiveExport == "0") {
              file.ActiveExport = "false";
            }
          });
        }
      });
    },
    editItem(item) {
      this.getEditItem.splice(-1);
      this.MultiFile.splice(0);
      ////console.log.log.log("edit selected");

      ////console.log.log.log("________________________________");

      this.dessertsAll.find(file => {
        if (file.id == item.id)
          // ////console.log.log.log(file)
          this.getEditItem.push(file);
        this.Editdialog = true;
      });

      ////console.log.log.log("_________________________");
      //console.log.log("GET EDITIED ITEM");

      //console.log.log(this.getEditItem);
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },
    deleteProductitem(item) {
      //console.log.log(item);
      this.removeDeleteProductModel = true;
      this.deleteproductname = item.Name;
      this.deleteproductid = item.id;
      //console.log.log(this.deleteproductname);
    },
    removeProduct() {
      //console.log.log(this.deleteproductid);
      this.color = "info";
      this.text = "Loading...";
      this.snackbar = true;
      let uri = "Product/" + this.deleteproductid;
      this.$http.delete(uri).then(response => {
        this.successMessage = response.data;
        //console.log.log("deleted");
        this.text = "Product Deleted Successfully";
        this.snackbar = true;

        this.desserts.splice(0);
        this.dessertsAll.splice(0);
        this.getData();
      });
      this.removeDeleteProductModel = false;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
    onFileSelected(event) {
      //console.log.log(event);
      //console.log.log(
      // "-----------------------------------------------------------------"
      // );
      // console.log(event.length);
      // console.log(
      // "-----------------------------------------------------------------"
      // );
      this.selectedFileArray = event;

      //console.log.log(this.selectedFileArray.length);

      for (var i = 0; i < this.selectedFileArray.length; i++) {
        let fileArray = this.selectedFileArray[i];
        //console.log.log(fileArray.size);
        this.fileSizeValidation = fileArray.size;

        // //console.log.log(fileArray)
        let reader = new FileReader();

        reader.onload = fileArray => {
          // //console.log.log(reader.result)
          this.MultiFile.push(reader.result);
        };
        reader.readAsDataURL(fileArray);
      }

      //console.log.log(this.MultiFile);
    },
    onEditFileSelected(event) {
      //console.log.log(event);
      //console.log.log(
      // "-----------------------------------------------------------------"
      // );
      // console.log(event.length);
      // console.log(
      // "-----------------------------------------------------------------"
      // );
      this.selectedFileArray = event;

      //console.log.log(this.selectedFileArray.length);

      for (var i = 0; i < this.selectedFileArray.length; i++) {
        let fileArray = this.selectedFileArray[i];
        //console.log.log(fileArray.size);
        this.fileSizeValidation = fileArray.size;

        // //console.log.log(fileArray)
        let reader = new FileReader();

        reader.onload = fileArray => {
          // //console.log.log(reader.result)
          this.MultiFile.push(reader.result);
        };
        reader.readAsDataURL(fileArray);
      }

      //console.log.log(this.MultiFile);
    },
    removeImage(item, index) {
      //console.log.log(index);
      this.MultiFile.splice(index, 1);
    },
    removeEditImage(item, index) {
      //console.log.log(index);
      //console.log.log("delete from edit image");
      //console.log.log(item.id);
      //console.log.log(item.img);
      this.getEditItem[0].image.splice(index, 1);

      let uri = "ProductImage/" + item.id;
      this.$http.delete(uri).then(response => {
        this.successMessage = response.data;
        //console.log.log("deleted");
      });

      // this.desserts.splice(-1)
      // this.dessertsAll.splice(-1)
      //  this.getData()

      // delete the image from backend using image id
    },

    formSubmit() {
      //console.log.log("hello");

      let Name = this.editedItem.Name;
      let Category = this.editedItem.Category;
      let ActiveImport = this.editedItem.ActiveImport;
      let ActiveExport = this.editedItem.ActiveExport;
      let Description = this.editedItem.Description;
      let image_name_array = this.MultiFile;

      if (image_name_array.length != 0 && Name && Category && Description) {
        this.text = "true";
        this.color = "success";
        this.text = "Product Has been Added Successfully";
        this.snackbar = true;

        const store = {
          Name: this.editedItem.Name,
          Category: this.editedItem.Category,
          ActiveImport: this.editedItem.ActiveImport,
          ActiveExport: this.editedItem.ActiveExport,
          Description: this.editedItem.Description,
          image_name_array: this.MultiFile
        };
        this.color = "info";
        this.text = "Loading...";
        this.snackbar = true;
        let uri = "/Product";
        this.$http.post(uri, store).then(response => {
          this.successMessage = response.data;
          //console.log.log("saved");
          //console.log.log(response.data);
          this.text = "Product Added Successfully";
          this.snackbar = true;
          this.desserts.splice(0);
          this.dessertsAll.splice(0);
          this.getData();
        });

        // this.desserts=[]
        //console.log.log("desserts log");
        //console.log.log(this.desserts);

        this.Productdialog = false;
        //console.log.log(store);
      } else {
        this.text =
          "Can't add a product. Try Again Provide more information with image";
        this.color = "error";
        this.timeout = 2000;
        this.snackbar = true;
      }
    },
    formUpdateSubmit() {
      //console.log.log("update button pressed");
      const update = {
        id: this.getEditItem[0].id,
        Name: this.getEditItem[0].Name,
        Category: this.getEditItem[0].Category,
        ActiveImport: this.getEditItem[0].ActiveImport,
        ActiveExport: this.getEditItem[0].ActiveExport,
        Description: this.getEditItem[0].Description,
        image_name_array: this.MultiFile
      };
      this.color = "info";
      this.text = "Loading...";
      this.snackbar = true;
      let uri = "Product/" + this.getEditItem[0].id;
      this.$http.put(uri, update).then(response => {
        this.successMessage = response.data;
        //console.log.log("saved");
        //console.log.log(response.data);
        this.desserts.splice(0);
        this.dessertsAll.splice(0);
        this.getData();
        this.color = "success";
        this.text = "Information Has Been Updated Successfully";
        this.snackbar = true;
      });

      this.Editdialog = false;
      //console.log.log(update);
    },
    ImportNoteUpdate() {
      //console.log.log("import export note update");
      const update = {
        ImportNote: this.editorDataImportNote
      };
      this.color = "info";
      this.text = "Loading...";
      this.snackbar = true;
      let uri = "/ImportNote/1";
      this.$http.put(uri, update).then(response => {
        this.successMessage = response.data;
        //console.log.log("saved");
        this.color = "success";
        this.text = "Information Has Been Updated Successfully";
        this.snackbar = true;
        //console.log.log(response.data);
      });
    },
    ExportNoteUpdate() {
      //console.log.log("import export note update");
      const update = {
        ExportNote: this.editorDataExportdialog
      };
      this.color = "info";
      this.text = "Loading...";
      this.snackbar = true;
      let uri = "/ExportNote/1";
      this.$http.put(uri, update).then(response => {
        this.successMessage = response.data;
        //console.log.log("saved");
        this.color = "success";
        this.text = "Information Has Been Updated Successfully";
        this.snackbar = true;
        //console.log.log(response.data);
      });
    }
  }
};
</script> 