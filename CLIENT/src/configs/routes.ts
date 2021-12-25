import { IRoute } from "../interfaces/route";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Product from "../pages/Admin/Product/Product";
import ProductCustom from "../pages/Admin/Product/ProductCustom";
import Customer from "../pages/Admin/Customer/Customer";
import Course from "../pages/Admin/Course/Course";
import Order from "../pages/Admin/Order/Order";
import Home from "../pages/Home/Home";
import UserForm from "../pages/UserForm/UserForm";

export const adminRoutes: IRoute[] = [
  {
    path: "/admin",
    exact: true,
    component: Dashboard,
  },
  {
    path: "/admin/order",
    exact: true,
    component: Order,
  },
  {
    path: "/admin/customer",
    exact: true,
    component: Customer,
  },
  {
    path: "/admin/product",
    exact: true,
    component: Product,
  },
  {
    path: "/admin/product/addProduct",
    exact: true,
    component: ProductCustom,
  },
  {
    path: "/admin/product/editProduct",
    exact: true,
    component: ProductCustom,
  },
  {
    path: "/admin/course",
    exact: true,
    component: Course,
  },
  {
    path: "/admin/course/addCourse",
    exact: true,
    component: Course,
  },
  {
    path: "/admin/course/editCourse",
    exact: true,
    component: Course,
  },
];

export const homeRoutes: IRoute[] = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/signIn",
    exact: true,
    component: UserForm,
  },
  {
    path: "/signUp",
    exact: true,
    component: UserForm,
  },
]
