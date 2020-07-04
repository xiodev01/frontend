import store from "@/store";
import axios from "axios";

store.subscribe(mutations => {
  //console.log.log(mutations);
  switch (mutations.type) {
    case "auth/SET_TOKEN":
      //   //console.log.log(mutations.payload);
      if (mutations.payload) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${mutations.payload}`;
        localStorage.setItem("token", mutations.payload);
        localStorage.setItem("dataProcess", "Processing");
      } else {
        axios.defaults.headers.common["Authorization"] = null;
        localStorage.removeItem("token");
      }
      break;
  }

  // switch(mutations.type){
  //     case 'Auth/SET_TOKEN':

  //     if(mutations.payload){
  //         axios.defaults.headers.common['Authorization'] = `Bearer ${mutations.payload}`
  //         localStorage.setItem('token',mutations.payload)
  //     }
  //     else{
  //         axios.defaults.headers.common['Authorization'] = null
  //         localStorage.removeItem('token')
  //         // localStorage.removeItem('xxUserName')
  //         // localStorage.removeItem('xxUserRole')
  //         // localStorage.removeItem('xxUserPhone')
  //         // localStorage.removeItem('xxUserShopName')
  //     }

  //     break
  // }
});
