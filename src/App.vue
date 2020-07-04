<template>
  <div id="App"> 
   <!-- <Navbar/> -->
   <router-view></router-view>

   
  </div>
</template>

<script>

import Home from './views/Home';
import Navbar from "../src/components/Navbar";

export default {
  name: "App",

  components: {
    'Home':Home,
    'Navbar':Navbar,
  },

  data: () => ({
    alert: true
  })
};
</script>
