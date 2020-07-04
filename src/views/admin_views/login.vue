<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Admin Login</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large v-on="on" to="/">
                      <v-icon>mdi-undo-variant</v-icon>
                    </v-btn>
                  </template>
                  <span>Go Back</span>
                </v-tooltip>
              </v-toolbar>
              <v-toolbar color="red" v-if="errorMessage" dark flat>Invalid Login</v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="form.email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="form.password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <!-- {{email}} ---- {{password}} -->
                <v-btn color="primary" @click="loginDetails">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <!-- <v-btn color="primary" dark @click.stop="errorDialog = true">Open Dialog</v-btn> -->

          <v-dialog v-model="errorDialog" max-width="290">
            <v-card>
              <v-card-title class="headline text-danger">Invalid Login</v-card-title>

              <v-card-text>Please use correct Email address and password to login</v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <!-- <v-btn color="green darken-1" text @click="errorDialog = false">Disagree</v-btn> -->

                <v-btn color="green darken-1" text @click="errorDialog = false">Agree</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    source: String
  },
  data() {
    return {
      form: {
        email: "",
        password: ""
        // email: "admin@gmail.com",
        // password: "admin123"
      },
      errorMessage: false,
      errorDialog: false
    };
  },
  methods: {
    ...mapActions({
      signIn: "auth/signIn"
    }),
    loginDetails() {
      this.signIn(this.form).then(() => {
        this.$router.push({ path: "/admin_dashboard" });
      });
      // this.errorMessage=true
      // if ((this.email == "admin@gmail.com") & (this.password == "admin123")) {
      //   this.$router.push({ path: "/admin_dashboard" });
      // } else {
      //     this.errorDialog=true
      //   // alert("Login Failed");
      // }

      // const store = {
      //   email: this.email,
      //   password: this.password
      // };
      // let uri = "/auth/signin";
      // this.$http.post(uri, store).then(response => {
      //   //console.log.log("Logged in");
      //   //console.log.log(response.data);
      // });
    }
  }
};
</script>