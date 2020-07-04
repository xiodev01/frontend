<template>
  <div id="Export">
    <v-app>
      <v-content>
        <Navbar />
        <v-container>
          <v-row class="mt-5 pt-5">
              <v-col md="12" sm="12" class="text-center">
                  Exports Page is Under Development Process
              </v-col>
          </v-row>
          <div class="text-center">
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="15"
              :value="value"
              color="teal"
            >{{ value }}</v-progress-circular>

            <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value="value"
              color="primary"
            >{{ value }}</v-progress-circular>

            <v-progress-circular
              :rotate="90"
              :size="100"
              :width="15"
              :value="value"
              color="red"
            >{{ value }}</v-progress-circular>

            <v-progress-circular
              :rotate="180"
              :size="100"
              :width="15"
              :value="value"
              color="pink"
            >{{ value }}</v-progress-circular>
          </div>
        </v-container>
      </v-content>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Navbar from "../admin_views//nav";
import Footer from "../admin_views/footer";
export default {
  name: "Export",
  components: {
    Navbar: Navbar,
    Footer: Footer
  },
  data() {
    return {
      interval: {},
      value: 0
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
  }
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>