import { IMenu } from "../interfaces/menu";

export const adminMenu: IMenu[] = [
  {
    path: "/admin",
    name: "Dashboard",
    icon: "fas fa-chart-line",
  },
  {
    path: "/admin/order",
    name: "Order",
    icon: "fas fa-shopping-cart",
  },
  {
    path: "/admin/customer",
    name: "Customer",
    icon: "fas fa-user",
  },
  {
    path: "/admin/product",
    name: "Product",
    icon: "fas fa-tag",
  },
  {
    path: "/admin/course",
    name: "Course",
    icon: "fas fa-book-open",
  },
];

export const headerMenu: IMenu[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/",
    name: "Product",
    active: false,
    subMenu: [
      {
        path: "/",
        name: "PC Accessories",
      },
    ],
  },
  {
    path: "/",
    name: "Course",
    active: false,
    subMenu: [
      {
        path: "/",
        name: "Front End",
      },
      {
        path: "/",
        name: "Back End",
      },
    ],
  },
  {
    path: "/about",
    name: "About Us",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];
