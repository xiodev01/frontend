<template>
  <div id="Contacts">
    <v-app>
      <v-content>
        <Navbar />
        <v-container>
          <v-row>
            <v-col>
              <v-data-table
                :headers="headers"
                :items="messages"
                sort-by="calories"
                class="elevation-1"
              >
                <template v-slot:top>
                  <v-toolbar flat color="dark">
                    <v-toolbar-title>Contacts</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                      <template v-slot:activator="{ on }">
                        <v-btn color="primary" dark class="mb-2" v-on="on" @click="initialize">
                          <v-icon small>mdi-refresh-circle</v-icon>Refresh
                        </v-btn>
                      </template>
                      <!-- <v-card>
                        <v-card-title>
                          <span class="headline">{{ formTitle }}</span>
                      </v-card-title>-->

                      <!-- <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                              </v-col>
                            </v-row>
                          </v-container>
                      </v-card-text>-->

                      <!-- <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                          <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                        </v-card-actions>
                      </v-card>-->
                    </v-dialog>
                  </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
                  <v-icon small class="mr-2 text-primary">mdi-check-all</v-icon>
                  <p v-if="2===5">{{item}}</p>
                  <!-- <v-icon medium class="mr-2 text-success" @click="editItem(item)">mdi-check</v-icon>   -->
                  <!-- <v-icon small @click="deleteItem(item)">mdi-delete</v-icon> -->
                </template>
                <template v-slot:no-data>
                  <v-btn color="primary" @click="initialize">Reset</v-btn>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
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
  name: "Contacts",
  components: {
    Navbar: Navbar,
    Footer: Footer
  },
  data: () => ({
    dialog: false,
    test: "mdi-check",
    icon: {
      name: "mdi-check"
    },
    headers: [
      { text: "#", value: "id" },
      {
        text: "Name",
        align: "start",
        sortable: false,
        value: "Name"
      },

      { text: "Email", value: "Email" },
      { text: "Subject", value: "Subject" },
      { text: "Message", value: "Message" },
      { text: "Seen Status", value: "actions", sortable: false }
    ],
    messages: []
  }),

  //   },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.getdata();
      this.messages = [
        // {
        //   Name: "Mohamed Raza",
        //   Email: "raza@gmail.com",
        //   Subject: "Requesting information about delivery",
        //   Message:
        //     "At Devi Trading Company we believe in making a difference. Our philosophy is one of integration and empowerment within the community. By enriching the lives of the communities we work with, we are not only fostering a better tomorrow but also have the satisfaction of knowing that our presence is benefiting the communities that we work with as well as creating quality consciousness and enhancing the capabilities of our farmers. We strive to build strong supplier and customer relationships. We are a fair trade company"
        // }
      ];
    },
    getdata() {
      this.messages.splice(0);
      this.$http.get("/Contacts").then(response => {
        for (let index = 0; index < response.data.display.length; index++) {
          const element = response.data.display[index];
          //console.log.log(element);
          this.messages.push(element);
        }
      });
    }
  }
};
</script>

<style>
</style>