import { createRouter, createWebHistory } from "vue-router";
import useAuthUser from "@/composables/UseAuthUser";
import Login from "../pages/auth/Login.vue";
import EmailConfirmation from "../pages/auth/EmailConfirmation.vue";
import Home from "../pages/Home.vue";
import Admin from "../pages/admin/Admin.vue";
import ForgotPassword from "../pages/auth/ForgotPassword.vue";
import Register from "../pages/auth/Register.vue";
import Account from "../pages/admin/account/Account.vue";
import Dashboard from "../pages/admin/Dashboard.vue";
import Links from "../pages/admin/Links.vue";
import Pages from "../pages/admin/Pages.vue";
import Appearance from "../pages/admin/Appearance.vue";
import Analytics from "../pages/admin/Analytics.vue";
import LinkCreation from "../pages/admin/LinkCreation.vue";
import EditLink from "../pages/admin/EditLink.vue";
import AccountSettings from "../pages/admin/account/AccountSettings.vue";
import ChangePassword from "../pages/admin/account/ChangePassword.vue";
import UserProfile from "../pages/admin/account/UserProfile.vue";
import ProfileCreation from "../pages/admin/account/ProfileCreation.vue";
import LinkedConnections from "../pages/admin/account/LinkedConnections.vue";
import SocialPage from "../pages/SocialPage.vue";

const routes = [
  {
    name: "EmailConfirmation",
    path: "/email-confirmation",
    component: EmailConfirmation,
  },
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "SocialPage",
    path: "/:socialId",
    component: SocialPage,
  },
  {
    name: "Admin",
    path: "/admin",
    meta: {
      requiresAuth: true,
    },
    component: Admin,
    children: [
      {
        name: "Account",
        path: "account",
        component: Account,
      },
      {
        name: "AccountSettings",
        path: "account-settings",
        component: AccountSettings,
      },
      {
        name: "ChangePassword",
        path: "changepassword",
        component: ChangePassword,
      },
      {
        name: "ProfileCreation",
        path: "profile-creation",
        component: ProfileCreation,
      },
      {
        name: "LinkedConnections",
        path: "linked-connections",
        component: LinkedConnections,
      },
      {
        name: "Dashboard",
        path: "dashboard",
        component: Dashboard,
      },
      {
        name: "Links",
        path: "links",
        component: Links,
      },
      {
        name: "LinkCreation",
        path: "link-creation",
        component: LinkCreation,
      },
      {
        name: "Pages",
        path: "pages",
        component: Pages,
      },
      {
        name: "Appearance",
        path: "apperance",
        component: Appearance,
      },
      {
        name: "Analytics",
        path: "analytics",
        component: Analytics,
      },
      {
        name: "EditLink",
        path: "edit-link/:linkId",
        component: EditLink,
      },
      {
        name: "UserProfile",
        path: "user-profile/:profileId",
        component: UserProfile,
      },
    ],
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    name: "ForgotPassword",
    path: "/forgotPassword",
    component: ForgotPassword,
  },
  {
    name: "Logout",
    path: "/logout",
    beforeEnter: async () => {
      const { logout } = useAuthUser();
      await logout();
      return { name: "Home" };
    },
  },
  {
    name: "Register",
    path: "/register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const { isLoggedIn } = useAuthUser();
  if (
    !isLoggedIn() &&
    to.meta.requiresAuth &&
    !Object.keys(to.query).includes("fromEmail")
  ) {
    return { name: "Login" };
  }
});

export default router;
