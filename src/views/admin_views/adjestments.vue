<template>
  <div id="adjustments">
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
            <div class="col-xl-4 mt-3 expansion-panels">
              <v-btn tile color="success" @click="Update_active">
                <v-icon>mdi-content-save-cog-outline</v-icon>Save Informations
              </v-btn>
            </div>
          </v-row>
          <v-row>
            <!-- Home Page -->
            <div class="col-xl-4 mt-3 expansion-panels">
              <v-expansion-panels focusable>
                <v-expansion-panel>
                  <v-expansion-panel-header disable-icon-rotate>
                    Home Page
                    <template v-slot:actions>
                      <v-icon color="teal">mdi-dishwasher-alert</v-icon>
                    </template>
                  </v-expansion-panel-header>

                  <v-expansion-panel-content class="pa-2">
                    <v-chip
                      class="ma-2"
                      v-show="Activate_welcome_section == 'true'"
                      color="teal"
                      @click="Activate_welcome_section = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate Welcome Section
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Activate_welcome_section == 'false' "
                      color="red"
                      @click="Activate_welcome_section = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Welcome Section
                    </v-chip>
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Active_welcome_image == 'true'"
                      color="teal"
                      @click="Active_welcome_image = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate Welcome Image
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Active_welcome_image == 'false' "
                      color="red"
                      @click="Active_welcome_image = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Welcome Image
                    </v-chip>
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Active_welcome_note == 'true'"
                      color="teal"
                      @click="Active_welcome_note = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate Welcome Note
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Active_welcome_note == 'false' "
                      color="red"
                      @click="Active_welcome_note = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Welcome Note
                    </v-chip>
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Active_imports_note == 'true'"
                      color="teal"
                      @click="Active_imports_note = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate Imports Note
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Active_imports_note == 'false' "
                      color="red"
                      @click="Active_imports_note = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Imports Note
                    </v-chip>
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Active_export_note == 'true'"
                      color="teal"
                      @click="Active_export_note = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate Export Note
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Active_export_note == 'false' "
                      color="red"
                      @click="Active_export_note = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Export Note
                    </v-chip>
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Active_our_product_section == 'true'"
                      color="teal"
                      @click="Active_our_product_section = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate Our Products Section
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Active_our_product_section == 'false' "
                      color="red"
                      @click="Active_our_product_section = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Our Products Section
                    </v-chip>
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Active_product_slideshow == 'true'"
                      color="teal"
                      @click="Active_product_slideshow = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate Product Slide Show
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Active_product_slideshow == 'false' "
                      color="red"
                      @click="Active_product_slideshow = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Product Slide Show
                    </v-chip>
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Active_services_section == 'true'"
                      color="teal"
                      @click="Active_services_section = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate Services Section Note
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Active_services_section == 'false' "
                      color="red"
                      @click="Active_services_section = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Services Section Note
                    </v-chip>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <!-- About Page -->
            <div class="col-xl-4 mt-3 expansion-panels">
              <v-expansion-panels focusable>
                <v-expansion-panel>
                  <v-expansion-panel-header disable-icon-rotate>
                    About Page
                    <template v-slot:actions>
                      <v-icon color="teal">mdi-dishwasher-alert</v-icon>
                    </template>
                  </v-expansion-panel-header>

                  <v-expansion-panel-content class="pa-2">
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Activate_About_Section == 'true'"
                      color="teal"
                      @click="Activate_About_Section = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate About Section
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Activate_About_Section == 'false' "
                      color="red"
                      @click="Activate_About_Section = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate About Section
                    </v-chip>
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Activate_About_Image == 'true'"
                      color="teal"
                      @click="Activate_About_Image = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate About Image
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Activate_About_Image == 'false' "
                      color="red"
                      @click="Activate_About_Image = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate About Image
                    </v-chip>
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Activate_About_Note == 'true'"
                      color="teal"
                      @click="Activate_About_Note = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate About Note
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Activate_About_Note == 'false' "
                      color="red"
                      @click="Activate_About_Note = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate About Note
                    </v-chip>
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Activate_About_MissionVission == 'true'"
                      color="teal"
                      @click="Activate_About_MissionVission = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate Vision & Mission Section
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Activate_About_MissionVission == 'false' "
                      color="red"
                      @click="Activate_About_MissionVission = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Vision & Mission Section
                    </v-chip>
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Activate_About_Mission == 'true'"
                      color="teal"
                      @click="Activate_About_Mission = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate Mission
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Activate_About_Mission == 'false' "
                      color="red"
                      @click="Activate_About_Mission = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Mission
                    </v-chip>
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Activate_About_Vission == 'true'"
                      color="teal"
                      @click="Activate_About_Vission = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate Vision
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Activate_About_Vission == 'false' "
                      color="red"
                      @click="Activate_About_Vission = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Vision
                    </v-chip>
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Activate_About_Enviroment == 'true'"
                      color="teal"
                      @click="Activate_About_Enviroment = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate Enviroment Section
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Activate_About_Enviroment == 'false' "
                      color="red"
                      @click="Activate_About_Enviroment = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Enviroment Section
                    </v-chip>
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Activate_About_EnviromentNote == 'true'"
                      color="teal"
                      @click="Activate_About_EnviromentNote = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate Enviroment Note
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Activate_About_EnviromentNote == 'false' "
                      color="red"
                      @click="Activate_About_EnviromentNote = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Enviroment Note
                    </v-chip>
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Activate_About_EProgress == 'true'"
                      color="teal"
                      @click="Activate_About_EProgress = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Activate Employee Progress
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Activate_About_EProgress == 'false' "
                      color="red"
                      @click="Activate_About_EProgress = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Employee Progress
                    </v-chip>
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Activate_About_OurPeople == 'true'"
                      color="teal"
                      @click="Activate_About_OurPeople = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate Our People
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Activate_About_OurPeople == 'false' "
                      color="red"
                      @click="Activate_About_OurPeople = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Our People
                    </v-chip>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <!-- Import Page -->
            <div class="col-xl-4 mt-3 expansion-panels">
              <v-expansion-panels focusable>
                <v-expansion-panel>
                  <v-expansion-panel-header disable-icon-rotate>
                    Imports Page
                    <template v-slot:actions>
                      <v-icon color="teal">mdi-dishwasher-alert</v-icon>
                    </template>
                  </v-expansion-panel-header>

                  <v-expansion-panel-content class="pa-2">
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Activate_Import_Notes == 'true'"
                      color="teal"
                      @click="Activate_Import_Notes = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate Import Notes
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Activate_Import_Notes == 'false' "
                      color="red"
                      @click="Activate_Import_Notes = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Import Notes
                    </v-chip>

                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Activate_Import_Products == 'true'"
                      color="teal"
                      @click="Activate_Import_Products = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate Import Products
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Activate_Import_Products == 'false' "
                      color="red"
                      @click="Activate_Import_Products = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Import Products
                    </v-chip>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <!-- Export Page -->
            <div class="col-xl-4 mt-3 expansion-panels">
              <v-expansion-panels focusable>
                <v-expansion-panel>
                  <v-expansion-panel-header disable-icon-rotate>
                    Export Page
                    <template v-slot:actions>
                      <v-icon color="teal">mdi-dishwasher-alert</v-icon>
                    </template>
                  </v-expansion-panel-header>

                  <v-expansion-panel-content class="pa-2">
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Activate_Export_Notes == 'true'"
                      color="teal"
                      @click="Activate_Export_Notes = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate Export Notes
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Activate_Export_Notes == 'false' "
                      color="red"
                      @click="Activate_Export_Notes = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Export Notes
                    </v-chip>
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Activate_Export_Products == 'true'"
                      color="teal"
                      @click="Activate_Export_Products = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate Export Products
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Activate_Export_Products == 'false' "
                      color="red"
                      @click="Activate_Export_Products = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Export Products
                    </v-chip>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <!-- CSR Page -->
            <div class="col-xl-4 mt-3 expansion-panels">
              <v-expansion-panels focusable>
                <v-expansion-panel>
                  <v-expansion-panel-header disable-icon-rotate>
                    CSR Page
                    <template v-slot:actions>
                      <v-icon color="teal">mdi-dishwasher-alert</v-icon>
                    </template>
                  </v-expansion-panel-header>

                  <v-expansion-panel-content class="pa-2">
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Activate_CSR_Note == 'true'"
                      color="teal"
                      @click="Activate_CSR_Note = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate CSR Note
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Activate_CSR_Note == 'false' "
                      color="red"
                      @click="Activate_CSR_Note = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate CSR Note
                    </v-chip>
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Activate_CSR_Contact == 'true'"
                      color="teal"
                      @click="Activate_CSR_Contact = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate Contact us box
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Activate_CSR_Contact == 'false' "
                      color="red"
                      @click="Activate_CSR_Contact = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Contact us box
                    </v-chip>
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Activate_CSR_About == 'true'"
                      color="teal"
                      @click="Activate_CSR_About = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate About us box
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Activate_CSR_About == 'false' "
                      color="red"
                      @click="Activate_CSR_About = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate About us box
                    </v-chip>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <!-- Contact Page -->
            <div class="col-xl-4 mt-3 expansion-panels">
              <v-expansion-panels focusable>
                <v-expansion-panel>
                  <v-expansion-panel-header disable-icon-rotate>
                    Contact us Page
                    <template v-slot:actions>
                      <v-icon color="teal">mdi-dishwasher-alert</v-icon>
                    </template>
                  </v-expansion-panel-header>

                  <v-expansion-panel-content class="pa-2">
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Activate_contact_Details == 'true'"
                      color="teal"
                      @click="Activate_contact_Details = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate Contact Details
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Activate_contact_Details == 'false' "
                      color="red"
                      @click="Activate_contact_Details = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Contact Details
                    </v-chip>
                    <!--  -->
                    <v-chip
                      class="ma-2"
                      v-show="Activate_contact_Form == 'true'"
                      color="teal"
                      @click="Activate_contact_Form = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Deactivate Contact Form
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Activate_contact_Form == 'false' "
                      color="red"
                      @click="Activate_contact_Form = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Contact Form
                    </v-chip>
                    <!--  -->
                    <!-- <v-chip
                      class="ma-2"
                      v-show="Activate_Map == 'true'"
                      color="teal"
                      @click="Activate_Map = 'false'"
                      small
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>Activate Map
                    </v-chip>
                    <v-chip
                      small
                      class="ma-2"
                      v-show="Activate_Map == 'false' "
                      color="red"
                      @click="Activate_Map = 'true'"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon small>mdi-close</v-icon>
                      </v-avatar>Activate Map
                    </v-chip>-->
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Navbar from "../admin_views/nav";
import Footer from "../admin_views/footer";
export default {
  name: "adjustments",
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

      showWhoAreWe: false,
      Activate_welcome_section: "true",
      Active_welcome_image: "true",
      Active_welcome_note: "true",
      Active_imports_note: "true",
      Active_export_note: "true",
      Active_our_product_section: "true",
      Active_product_slideshow: "true",
      Active_services_section: "true",
      Active_services_section_note: "true",

      Activate_About_Section: "true",
      Activate_About_Image: "true",
      Activate_About_Note: "true",
      Activate_About_MissionVission: "true",
      Activate_About_Mission: "true",
      Activate_About_Vission: "true",
      Activate_About_Enviroment: "true",
      Activate_About_EnviromentNote: "true",
      Activate_About_EProgress: "true",
      Activate_About_OurPeople: "true",

      Activate_Import_Notes: "true",
      Activate_Import_Products: "true",

      Activate_Export_Notes: "true",
      Activate_Export_Products: "true",

      Activate_CSR_Note: "true",
      Activate_CSR_Contact: "true",
      Activate_CSR_About: "true",

      Activate_contact_Details: "true",
      Activate_contact_Form: "true",
      Activate_Map: "true"
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.$http.get("/Adjestments").then(response => {
        //console.log(response.data.display[0].Home_Activate_Welcome_Section);
        this.Activate_welcome_section =
          response.data.display[0].Home_Activate_Welcome_Section;
        this.Active_welcome_image =
          response.data.display[0].Home_Activate_Welcome_Image;
        this.Active_welcome_note =
          response.data.display[0].Home_Activate_Welcome_Note;
        this.Active_imports_note =
          response.data.display[0].Home_Activate_Imports_Note;
        this.Active_export_note =
          response.data.display[0].Home_Activate_Export_Note;
        this.Active_our_product_section =
          response.data.display[0].Home_Activate_Our_Products_Section;
        this.Active_product_slideshow =
          response.data.display[0].Home_Activate_Product_Slide_Show;
        this.Active_services_section =
          response.data.display[0].Home_Activate_Services_Section;
        this.Active_services_section_note =
          response.data.display[0].Home_Activate_Services_Section_Note;

        this.Activate_About_Section =
          response.data.display[0].About_Activate_About_Section;
        this.Activate_About_Image =
          response.data.display[0].About_Activate_About_Image;
        this.Activate_About_Note =
          response.data.display[0].About_Activate_About_Note;
        this.Activate_About_MissionVission =
          response.data.display[0].About_Activate_Vision_Mission_Section;
        this.Activate_About_Mission =
          response.data.display[0].About_Activate_Mission;
        this.Activate_About_Vission =
          response.data.display[0].About_Activate_Vision;
        this.Activate_About_Enviroment =
          response.data.display[0].About_Activate_Enviroment_Section;
        this.Activate_About_EnviromentNote =
          response.data.display[0].About_Activate_Enviroment_Note;
        this.Activate_About_EProgress =
          response.data.display[0].About_Activate_Employee_Progress;
        this.Activate_About_OurPeople =
          response.data.display[0].About_Activate_Our_People;

        this.Activate_Import_Notes =
          response.data.display[0].Import_Activate_Import_Notes;
        this.Activate_Import_Products =
          response.data.display[0].Import_Activate_Import_Products;

        this.Activate_Export_Notes =
          response.data.display[0].Export_Activate_Export_Notes;
        this.Activate_Export_Products =
          response.data.display[0].Export_Activate_Export_Products;

        this.Activate_CSR_Note = response.data.display[0].CSR_Activate_CSR_Note;
        this.Activate_CSR_Contact =
          response.data.display[0].CSR_Activate_Contact_us_box;
        this.Activate_CSR_About =
          response.data.display[0].CSR_Activate_About_us_box;

        this.Activate_contact_Details =
          response.data.display[0].Contact_Activate_Contact_Details;
        this.Activate_contact_Form =
          response.data.display[0].Contact_Activate_Contact_Form;
        this.Activate_Map = response.data.display[0].Contact_Activate_Map;
      });
    },
    Update_active() {
      //console.log("update info");

      const update = {
        Home_Activate_Welcome_Section: this.Activate_welcome_section,
        Home_Activate_Welcome_Image: this.Active_welcome_image,
        Home_Activate_Welcome_Note: this.Active_welcome_note,
        Home_Activate_Imports_Note: this.Active_imports_note,
        Home_Activate_Export_Note: this.Active_export_note,
        Home_Activate_Our_Products_Section: this.Active_our_product_section,
        Home_Activate_Product_Slide_Show: this.Active_product_slideshow,
        Home_Activate_Services_Section: this.Active_services_section,
        Home_Activate_Services_Section_Note: this.Active_services_section_note,

        About_Activate_About_Section: this.Activate_About_Section,
        About_Activate_About_Image: this.Activate_About_Image,
        About_Activate_About_Note: this.Activate_About_Note,
        About_Activate_Vision_Mission_Section: this
          .Activate_About_MissionVission,
        About_Activate_Mission: this.Activate_About_Mission,
        About_Activate_Vision: this.Activate_About_Vission,
        About_Activate_Enviroment_Section: this.Activate_About_Enviroment,
        About_Activate_Enviroment_Note: this.Activate_About_EnviromentNote,
        About_Activate_Employee_Progress: this.Activate_About_EProgress,
        About_Activate_Our_People: this.Activate_About_OurPeople,

        Import_Activate_Import_Notes: this.Activate_Import_Notes,
        Import_Activate_Import_Products: this.Activate_Import_Products,

        Export_Activate_Export_Notes: this.Activate_Export_Notes,
        Export_Activate_Export_Products: this.Activate_Export_Products,

        CSR_Activate_CSR_Note: this.Activate_CSR_Note,
        CSR_Activate_Contact_us_box: this.Activate_CSR_Contact,
        CSR_Activate_About_us_box: this.Activate_CSR_About,

        Contact_Activate_Contact_Details: this.Activate_contact_Details,
        Contact_Activate_Contact_Form: this.Activate_contact_Form,
        Contact_Activate_Map: this.Activate_Map
      };
       this.color = "info";
      this.text = "Loading...";
      this.snackbar = true;
      let uri = "Adjestments/1";
      this.$http.put(uri, update).then(response => {
        this.successMessage = response.data;
        //console.log("saved About");
        // //console.log(response.data.result);
        this.initialize();
        this.text = "Information Has Been Saved Successfully";
        this.color = "success";
        this.timeout = 1000;
        this.snackbar = true;
      });
      //console.log(update);
    }
  }
};
</script>

<style>
</style>