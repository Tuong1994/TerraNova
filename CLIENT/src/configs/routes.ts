import { IRoute } from "../interfaces/route";
import Dashboard from "../pages/Admin/Dashboard";
import Product from "../pages/Admin/Product";
import ProductCustom from "../pages/Admin/Product/Add";
import Customer from "../pages/Admin/Customer";
import Course from "../pages/Admin/Course";
import Order from "../pages/Admin/Order";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AboutUs from "../pages/AboutUs";
import Movie from "../pages/Movie";
import ProductList from "../pages/Product/ProductList";
import ProductDetail from "../pages/Product/ProductDetail";
import ProductCarts from "../pages/Product/ProductCarts";
import OverView from "../pages/User/OverView";
import CourseHome from "../pages/Course/CourseHome";
import CourseList from "../pages/Course/CourseList";
import CourseRoute from "../pages/Course/CourseRoute";
import CourseDetail from "../pages/Course/CourseDetail";
import UserEdit from "../pages/User/Edit";


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

export const userRoutes: IRoute[] = [
  {
    path: "/user",
    exact: true,
    component: OverView,
  },
  {
    path: "/user/update",
    exact: true,
    component: UserEdit,
  },
]

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
    path: "/movie",
    exact: true,
    component: Movie,
  },
  {
    path: "/signIn",
    exact: true,
    component: SignIn,
  },
  {
    path: "/signUp",
    exact: true,
    component: SignUp,
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
  {
    path: "/course",
    exact: true,
    component: CourseHome
  },
  {
    path: "/courseRoute",
    exact: true,
    component: CourseRoute
  },
  {
    path: "/courseByCategory/:id",
    exact: true,
    component: CourseList
  },
  {
    path: "/courseDetail/:id",
    exact: true,
    component: CourseDetail
  },
];
