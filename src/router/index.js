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
  ],
});

export default router;
