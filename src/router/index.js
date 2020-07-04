import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CSR from "../views/Csr.vue";
import Contact from "../views/contactus.vue";
import Imports from "../views/Imports.vue";
import Exports from "../views/Exports.vue";

import Admin_Dashboard from "../views/admin_views/dashboard.vue";
import Admin_About from "../views/admin_views/about.vue";
import Admin_Contact from "../views/admin_views/contacts.vue";
import Admin_Settings from "../views/admin_views/settings.vue";
import Admin_Imports from "../views/admin_views/imports.vue";
import Admin_Exports from "../views/admin_views/export.vue";
import Admin_CSR from "../views/admin_views/csr.vue";
import Admin_Products from "../views/admin_views/products.vue";
import Admin_Login from "../views/admin_views/login.vue";
import Admin_Adjestments from "../views/admin_views/adjestments.vue";

import store from "@/store";

import TestHome from "../views/test/Home.vue";
// import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/csr",
    name: "CSR",
    component: CSR
  },
  {
    path: "/contactus",
    name: "Contact",
    component: Contact
  },
  {
    path: "/imports",
    name: "Imports",
    component: Imports
  },
  {
    path: "/exports",
    name: "Exports",
    component: Exports
  },
  {
    path: "/admin_login",
    name: "Admin_Login",
    component: Admin_Login
  },
  {
    path: "/admin_dashboard",
    name: "Admin_Dashboard",
    component: Admin_Dashboard,

    beforeEnter: (to, from, next) => {
      console.log(store.getters);
      if (!store.getters["auth/authenticated"]) {
        console.log("Not Login failed");
        return next({
          path: "/admin_login",
          name: "Admin_Login",
          component: Admin_Login
        });
      }

      next();
      console.log("Auth Done");
    }
  },
  {
    path: "/admin_about",
    name: "Admin_About",
    component: Admin_About,
    beforeEnter: (to, from, next) => {
      console.log(store.getters);
      if (!store.getters["auth/authenticated"]) {
        console.log("Not Login failed");
        return next({
          path: "/admin_login",
          name: "Admin_Login",
          component: Admin_Login
        });
      }

      next();
      console.log("Auth Done");
    }
  },
  {
    path: "/admin_contact",
    name: "Admin_Contact",
    component: Admin_Contact,
    beforeEnter: (to, from, next) => {
      console.log(store.getters);
      if (!store.getters["auth/authenticated"]) {
        console.log("Not Login failed");
        return next({
          path: "/admin_login",
          name: "Admin_Login",
          component: Admin_Login
        });
      }

      next();
      console.log("Auth Done");
    }
  },
  {
    path: "/admin_settings",
    name: "Admin_Settings",
    component: Admin_Settings,
    beforeEnter: (to, from, next) => {
      console.log(store.getters);
      if (!store.getters["auth/authenticated"]) {
        console.log("Not Login failed");
        return next({
          path: "/admin_login",
          name: "Admin_Login",
          component: Admin_Login
        });
      }

      next();
      console.log("Auth Done");
    }
    
  },
  {
    path: "/admin_imports",
    name: "Admin_Imports",
    component: Admin_Imports,
    beforeEnter: (to, from, next) => {
      console.log(store.getters);
      if (!store.getters["auth/authenticated"]) {
        console.log("Not Login failed");
        return next({
          path: "/admin_login",
          name: "Admin_Login",
          component: Admin_Login
        });
      }

      next();
      console.log("Auth Done");
    }
  },
  {
    path: "/admin_export",
    name: "Admin_Exports",
    component: Admin_Exports,
    beforeEnter: (to, from, next) => {
      console.log(store.getters);
      if (!store.getters["auth/authenticated"]) {
        console.log("Not Login failed");
        return next({
          path: "/admin_login",
          name: "Admin_Login",
          component: Admin_Login
        });
      }

      next();
      console.log("Auth Done");
    }
  },
  {
    path: "/admin_csr",
    name: "Admin_CSR",
    component: Admin_CSR,
    beforeEnter: (to, from, next) => {
      console.log(store.getters);
      if (!store.getters["auth/authenticated"]) {
        console.log("Not Login failed");
        return next({
          path: "/admin_login",
          name: "Admin_Login",
          component: Admin_Login
        });
      }

      next();
      console.log("Auth Done");
    }
  },
  {
    path: "/admin_products",
    name: "Admin_Products",
    component: Admin_Products,
    beforeEnter: (to, from, next) => {
      console.log(store.getters);
      if (!store.getters["auth/authenticated"]) {
        console.log("Not Login failed");
        return next({
          path: "/admin_login",
          name: "Admin_Login",
          component: Admin_Login
        });
      }

      next();
      console.log("Auth Done");
    }
  },

  {
    path: "/admin_adjestments",
    name: "Admin_Adjestments",
    component: Admin_Adjestments,
    beforeEnter: (to, from, next) => {
      console.log(store.getters);
      if (!store.getters["auth/authenticated"]) {
        console.log("Not Login failed");
        return next({
          path: "/admin_login",
          name: "Admin_Login",
          component: Admin_Login
        });
      }

      next();
      console.log("Auth Done");
    }
  }

  // {
  //   path: "/test_home",
  //   name: "TestHome",
  //   component: TestHome
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
