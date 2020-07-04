<template>
  <nav>
   
    <v-app-bar flat  app class="primary" >
      <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light white--text">Devi</span>
        <span class="white--text">Traders</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flate color="gray">
        <span>singout</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app class="indigo primary" v-model="drawer">
      <!-- <v-card class="mx-auto primary" dark  max-width="300" tile> -->
        <v-list dense class="mx-auto primary " max-width="300" tile>
          <v-subheader class="white--text">
            MENU
            <v-spacer></v-spacer>
            <v-icon class="white--text"  right @click="drawer = !drawer">mdi-close</v-icon>
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
          </v-list-item-group>
        </v-list>
      <!-- </v-card> -->
    </v-navigation-drawer>
  </nav>
</template>

<script>
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
        { text: "Conversions", icon: "mdi-flag" }
      ]
    };
  }
};
</script>

<style scoped>
.text_none {
  text-decoration: none;
}
</style>