<template>
  <nav>
    <v-app-bar flat app class="primary">
      <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light white--text">Dashboard</span>
        <span class="white--text"></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flate text class="white--text" style="text-decoration: none;" to="/">
        <span>Exit</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app class="indigo primary" v-model="drawer">
      <!-- <v-card class="mx-auto primary" dark  max-width="300" tile> -->
      <v-list dense class="mx-auto primary" max-width="300" tile>
        <v-subheader class="white--text">
          MENU
          <v-spacer></v-spacer>
          <v-icon class="white--text" right @click="drawer = !drawer">mdi-close</v-icon>
        </v-subheader>
        <v-divider class="white--text"></v-divider>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            router
            :to="item.route"
            class="text_none"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon" class="white--text"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text" class="white--text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <template>
            <v-list-item class="text_none" @click="signOut">
              <v-list-item-icon>
                <v-icon class="white--text">mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="white--text">Logout</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
      <!-- </v-card> -->
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      drawer: true,
      s: [
        { title: " Home", icon: "mdi-home", route: "/admin_dashboard" },
        { title: " About", icon: "mdi-information", route: "/admin_about" }
      ],
      item: 1,
      items: [
        { text: " Home", icon: "mdi-home", route: "/admin_dashboard" },
        { text: " About", icon: "mdi-information", route: "/admin_about" },
        {
          text: " Products",
          icon: "mdi-newspaper-variant",
          route: "/admin_products"
        },
        // { text: " Imports", icon: "mdi-calendar-import", route: "/admin_imports" },
        // { text: " Exports", icon: "mdi-calendar-export", route: "/admin_export" },
        { text: " CSR", icon: "mdi-information", route: "/admin_csr" },
        { text: " Contacts", icon: "mdi-contacts", route: "/admin_contact" },
        {
          text: " Adjestments",
          icon: "mdi-image-auto-adjust",
          route: "/admin_adjestments"
        },
        {
          text: " Settings",
          icon: "mdi-account-settings",
          route: "/admin_settings"
        }
        // { text: " Logout", icon: "mdi-logout", route: "/" }
      ]
    };
  },
  methods: {
    ...mapActions({
      signoutAction: "auth/signOut"
    }),

    signOut() {
      //console.log.log('logout pressed')
      this.signoutAction().then(() => {
        this.$router.replace({
          name: "Home"
        });
      });
    }
  }
};
</script>

<style scoped>
.text_none {
  text-decoration: none;
}
</style>