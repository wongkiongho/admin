import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import NotFound from "@/pages/NotFoundPage.vue";
import Login from "@/pages/Login.vue";  // Make sure this path is correct

const Dashboard = () => import("@/pages/Dashboard.vue");
const Profile = () => import("@/pages/Profile.vue");
const Notifications = () => import("@/pages/Notifications.vue");
const Icons = () => import("@/pages/Icons.vue");
const Maps = () => import("@/pages/Maps.vue");
const Typography = () => import("@/pages/Typography.vue");
const TableList = () => import("@/pages/TableList.vue");

const routes = [
  {
    path: "/",
    redirect: "/login", // Redirect root to the login page initially
  },
  {
    path: "/login",
    name: "login",
    component: Login,  // Assuming 'Login.vue' is your login component
  },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      { path: "dashboard", name: "dashboard", component: Dashboard },
      { path: "profile", name: "profile", component: Profile },
      { path: "notifications", name: "notifications", component: Notifications },
      { path: "icons", name: "icons", component: Icons },
      { path: "maps", name: "maps", component: Maps },
      { path: "typography", name: "typography", component: Typography },
      { path: "table-list", name: "table-list", component: TableList },
    ],
  },
  { path: "*", component: NotFound },
];

export default routes;
