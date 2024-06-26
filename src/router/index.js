import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ContactUs from "@/views/ContactUs.vue";
import PricingPage from "@/views/PricingPage.vue";
import PersonalDeliveries from "@/views/PersonalDeliveries.vue";
import BusinessDeliveriesSignUp from "@/views/BusinessDeliveriesSignUp.vue";
import BusinessDeliveriesLogin from "@/views/BusinessDeliveriesLogin.vue";
import BusinessDashBoard from "@/views/BusinessDashBoard.vue";
import DashBoard from "@/views/DashBoard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactUs,
    },
    {
      path: "/pricing",
      name: "pricing",
      component: PricingPage,
    },
    {
      path: "/personalDeliveries",
      name: "personalDeliveries",
      component: PersonalDeliveries,
    },
    {
      path: "/businessDeliveriesSignUp",
      name: "businessDeliveriesSignUp",
      component: BusinessDeliveriesSignUp,
    },
    {
      path: "/businessDeliveriesLogin",
      name: "businessDeliveriesLogin",
      component: BusinessDeliveriesLogin,
    },
    {
      path: "/businessDashBoard",
      name: "businessDashBoard",
      component: BusinessDashBoard,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashBoard,
    },
  ],
});

export default router;
