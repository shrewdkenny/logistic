import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ContactUs from "@/views/ContactUs.vue";
import PricingPage from "@/views/PricingPage.vue";
import PersonalDeliveries from "@/views/PersonalDeliveries.vue";
import BusinessDeliveriesSignUp from "@/views/BusinessDeliveriesSignUp.vue";
import BusinessDeliveriesLogin from "@/views/BusinessDeliveriesLogin.vue";
import DashBoard from "@/views/DashBoard.vue";
import NewDispatch from "@/views/NewDispatch.vue";
import PendingOrders from "@/views/PendingOrders.vue";
import OrderHistory from "@/views/OrderHistory.vue";
import FundWallet from "@/views/FundWallet.vue";
import About from "@/views/About.vue";
import Support from "@/views/Support.vue";
import Settings from "@/views/Settings.vue";
import VerifySignUp from "@/views/VerifySignUp.vue";
import VerifyToken from "@/views/VerifyToken.vue";
// import ResendVerificationEmail from "@/views/ResendVerificationEmail.vue";

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
      path: "/verify-signup",
      name: "verify-signup",
      component: VerifySignUp,
    },
    {
      path: "/businessDeliveriesLogin",
      name: "businessDeliveriesLogin",
      component: BusinessDeliveriesLogin,
    },

    {
      path: "/dashboard",
      name: "dashboard",
      component: DashBoard,
    },
    {
      path: "/new-dispatch",
      name: "new-dispatch",
      component: NewDispatch,
    },
    {
      path: "/pending-orders",
      name: "pending-orders",
      component: PendingOrders,
    },
    {
      path: "/order-history",
      name: "order-history",
      component: OrderHistory,
    },
    {
      path: "/fund-wallet",
      name: "fund-wallet",
      component: FundWallet,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/support",
      name: "support",
      component: Support,
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings,
    },
    {
      path: "/verifyToken",
      name: "verifyToken",
      component: VerifyToken,
    },
    // {
    //   path: "/resend-verification",
    //   name: "resend-verification",
    //   component: ResendVerificationEmail,
    // },
  ],
});

export default router;
