import { IRoute } from "../interfaces/route";
import Dashboard from "../pages/Admin/Dashboard";
import Product from "../pages/Admin/Product/Product";
import ProductCustom from "../pages/Admin/Product/ProductCustom";
import Customer from "../pages/Admin/Customer";
import Course from "../pages/Admin/Course";
import Order from "../pages/Admin/Order";
import Home from "../pages/Home";
import UserForm from "../pages/UserForm";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import ProductList from "../pages/Product/ProductList";
import ProductDetail from "../pages/Product/ProductDetail";
import ProductCarts from "../pages/Product/ProductCarts";

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
    path: "/about",
    exact: true,
    component: AboutUs,
  },
  {
    path: "/contact",
    exact: true,
    component: Contact,
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
  {
    path: "/productByCategory/:id",
    exact: true,
    component: ProductList,
  },
  {
    path: "/productByProducer/:id",
    exact: true,
    component: ProductList,
  },
  {
    path: "/productDetail/:id",
    exact: true,
    component: ProductDetail,
  },
  {
    path: "/productCarts",
    exact: true,
    component: ProductCarts,
  },
];
