import { IRoute } from "../interfaces/route";
import * as Product from "../pages/Admin/Product"
import * as Course from "../pages/Admin/Course";
import * as Order from "../pages/Admin/Order";
import * as Customer from "../pages/Admin/Customer";
import * as Movie from "../pages/Admin/Movie";
import Dashboard from "../pages/Admin/Dashboard";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AboutUs from "../pages/AboutUs";
import ProductHome from "../pages/Product/ProductHome";
import ProductList from "../pages/Product/ProductList";
import ProductDetail from "../pages/Product/ProductDetail";
import ProductCarts from "../pages/Product/ProductCarts";
import OverView from "../pages/User/OverView";
import CourseHome from "../pages/Course/CourseHome";
import CourseList from "../pages/Course/CourseList";
import CourseRoute from "../pages/Course/CourseRoute";
import CourseDetail from "../pages/Course/CourseDetail";
import MovieHome from "../pages/Movie/MovieHome";
import MovieDetail from "../pages/Movie/MovieDetail";
import BookTicket from "../pages/Movie/BookTicket";
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
    component: Order.List,
  },
  {
    path: "/admin/order/addOrder",
    exact: true,
    component: Order.Add,
  },
  {
    path: "/admin/order/editOrder/:id",
    exact: true,
    component: Order.Edit,
  },
  {
    path: "/admin/customer",
    exact: true,
    component: Customer.List,
  },
  {
    path: "/admin/customer/addCustomer",
    exact: true,
    component: Customer.Add,
  },
  {
    path: "/admin/customer/editCustomer/:id",
    exact: true,
    component: Customer.Edit,
  },
  {
    path: "/admin/product",
    exact: true,
    component: Product.List,
  },
  {
    path: "/admin/product/addProduct",
    exact: true,
    component: Product.Add,
  },
  {
    path: "/admin/product/editProduct/:id",
    exact: true,
    component: Product.Edit,
  },
  {
    path: "/admin/course",
    exact: true,
    component: Course.List,
  },
  {
    path: "/admin/course/addCourse",
    exact: true,
    component: Course.Add,
  },
  {
    path: "/admin/course/editCourse/:id",
    exact: true,
    component: Course.Edit,
  },
  {
    path: "/admin/movie",
    exact: true,
    component: Movie.List,
  },
  {
    path: "/admin/movie/addMovie",
    exact: true,
    component: Movie.Add,
  },
  {
    path: "/admin/movie/editMovie/:id",
    exact: true,
    component: Movie.Edit,
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
    component: MovieHome,
  },
  {
    path: "/movieDetail/:id",
    exact: true,
    component: MovieDetail,
  },
  {
    path: "/bookTicket/:id",
    exact: true,
    component: BookTicket,
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
    path: "/product",
    exact: true,
    component: ProductHome,
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
