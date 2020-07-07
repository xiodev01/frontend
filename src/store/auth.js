import axios from "axios";
import router from "@/router/index";
export default {
  namespaced: true,
  state: {
    //
    token: null,
    user: null
  },
  getters: {
    authenticated(state) {
      return state.token;
    },

    user(state) {
      return state.user;
    }
  },
  mutations: {
    //
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, data) {
      state.user = data;
    }
  },
  actions: {
    //
    signIn({ dispatch }, cradentials,) {
      let uri = "auth/signin";
      // console.log(this.overlay)
      axios
        .post("http://localhost:8000/auth/signin", cradentials)
        .then(response => {
          //console.log.log("Logged in");
            // console.log(response.data.token);

            

          return dispatch("attempt", response.data.token);
        }) .catch(function (error) {

          console.log(error.response.data.error)

          if (error.response.data.error) {
            alert('Login Failed. Please try again')
          }

          // if (error.response) {
          //   console.log(error.response.status); 

          //   if (error.response.status === 401) {
          //     alert('true')
          //   }
           

          //   this.overlay = false; 
          // } else {
          //   console.log('error', error.message);
          //   this.overlay = false;
           
          // }
        });
    },

    attempt({ commit, state }, token) {
      //   //console.log.log(token);

      try {
        if (token) {
          commit("SET_TOKEN", token);
        } else {
          return;
        }
        axios.get("http://localhost:8000/auth/signme").then(function(response) {
          //console.log.log("login");
          //console.log.log(response.data);

          commit("SET_USER", response.data);
          router.push("/admin_dashboard");
          
          
        
          // alert('login')
        });
      } catch (e) {
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
      }
    },

    signOut({ commit }) {
      axios.post("http://localhost:8000/auth/signout").then(function(response) {
        //console.log.log("logged out");
        //console.log.log(response.data);
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
        localStorage.removeItem("token");
      });
    }
  }
};
