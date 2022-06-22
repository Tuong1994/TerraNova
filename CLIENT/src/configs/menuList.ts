import * as lang from "../translate";

export const adminMenuENG = [
  {
    id: "admin",
    path: "/admin",
    name: "Dashboard",
    icon: "fas fa-chart-line",
  },
  {
    id: "order",
    path: "/admin/order",
    name: "Order",
    icon: "fas fa-shopping-cart",
  },
  {
    id: "customer",
    path: "/admin/customer",
    name: "Customer",
    icon: "fas fa-user",
  },
  {
    id: "product",
    path: "/admin/product",
    name: "Product",
    icon: "fas fa-tag",
  },
  {
    id: "course",
    path: "/admin/course",
    name: "Course",
    icon: "fas fa-book-open",
  },
  {
    id: "movie",
    path: "/admin/movie",
    name: "Movie",
    icon: "fa-solid fa-clapperboard",
  },
  {
    id: "showtime",
    path: "/admin/showtime",
    name: "Showtime",
    icon: "fa-solid fa-calendar-days",
  },
];

export const adminMenuVN = [
  {
    id: "admin",
    path: "/admin",
    name: "Dashboard",
    icon: "fas fa-chart-line",
  },
  {
    id: "order",
    path: "/admin/order",
    name: "Đơn hàng",
    icon: "fas fa-shopping-cart",
  },
  {
    id: "customer",
    path: "/admin/customer",
    name: "Khách hàng",
    icon: "fas fa-user",
  },
  {
    id: "product",
    path: "/admin/product",
    name: "Sản phẩm",
    icon: "fas fa-tag",
  },
  {
    id: "course",
    path: "/admin/course",
    name: "Khóa học",
    icon: "fas fa-book-open",
  },
  {
    id: "movie",
    path: "/admin/movie",
    name: "Phim",
    icon: "fa-solid fa-clapperboard",
  },
  {
    id: "showtime",
    path: "/admin/showtime",
    name: "Lịch chiếu",
    icon: "fa-solid fa-calendar-days",
  },
];

export const adminMenuCH = [
  {
    id: "admin",
    path: "/admin",
    name: "Dashboard",
    icon: "fas fa-chart-line",
  },
  {
    id: "order",
    path: "/admin/order",
    name: "订单",
    icon: "fas fa-shopping-cart",
  },
  {
    id: "customer",
    path: "/admin/customer",
    name: "顾客",
    icon: "fas fa-user",
  },
  {
    id: "product",
    path: "/admin/product",
    name: "产品",
    icon: "fas fa-tag",
  },
  {
    id: "course",
    path: "/admin/course",
    name: "课程",
    icon: "fas fa-book-open",
  },
  {
    id: "movie",
    path: "/admin/movie",
    name: "电影",
    icon: "fa-solid fa-clapperboard",
  },
  {
    id: "showtime",
    path: "/admin/showtime",
    name: "放映时间",
    icon: "fa-solid fa-calendar-days",
  },
];

export const userMenuENG = [
  {
    id: "user",
    path: "/user",
    name: lang.ENG.user.sidebar.overview,
    icon: "fa-solid fa-chart-column",
  },
  {
    id: "update",
    path: "/user/update",
    name: lang.ENG.user.sidebar.update,
    icon: "far fa-edit",
  },
];

export const userMenuVN = [
  {
    id: "user",
    path: "/user",
    name: lang.VN.user.sidebar.overview,
    icon: "fa-solid fa-chart-column",
  },
  {
    id: "update",
    path: "/user/update",
    name: lang.VN.user.sidebar.update,
    icon: "far fa-edit",
  },
];

export const userMenuCH = [
  {
    id: "user",
    path: "/user",
    name: lang.CH.user.sidebar.overview,
    icon: "fa-solid fa-chart-column",
  },
  {
    id: "update",
    path: "/user/update",
    name: lang.CH.user.sidebar.update,
    icon: "far fa-edit",
  },
];

export const headerMenuENG = [
  {
    menuId: "home",
    name: lang?.ENG.headerMenu.home,
    path: "/",
    icon: "fas fa-home",
    active: false,
    subMenu: [],
  },
  {
    menuId: "product",
    name: lang?.ENG.headerMenu.product,
    path: "/product",
    icon: "fas fa-tag",
    active: false,
    subMenu: [
      {
        subMenuId: "computer",
        name: lang?.ENG.headerMenu.computer,
        path: "/computer",
        active: false,
        categoryMenu: [
          {
            categoryId: "pc_set",
            name: "PC SET",
            active: false,
            Producers: [],
          },
          {
            categoryId: "laptop",
            name: "LAPTOP",
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "asus", name: "ASUS" },
              { producerId: "msi", name: "MSI" },
              { producerId: "dell", name: "DELL" },
              { producerId: "hp", name: "HP" },
            ],
          },
        ],
      },
      {
        subMenuId: "electronics",
        name: lang?.ENG.headerMenu.electronics,
        path: "/electronics",
        active: false,
        categoryMenu: [
          {
            categoryId: "printer",
            name: lang?.ENG.headerMenu.printer,
            active: false,
            Producers: [
              { producerId: "samsung", name: "SAMSUNG" },
            ],
          },
          {
            categoryId: "monitor",
            name: lang?.ENG.headerMenu.monitor,
            active: false,
            Producers: [
              { producerId: "samsung", name: "SAMSUNG" },
              { producerId: "lg", name: "LG" },
              { producerId: "viewsonic", name: "VIEWSONIC" },
            ],
          },
          {
            categoryId: "fax",
            name: lang?.ENG.headerMenu.faxMachine,
            active: false,
            Producers: [
              { producerId: "samsung", name: "SAMSUNG" },
            ],
          },
        ],
      },
      {
        subMenuId: "accessories",
        name: lang?.ENG.headerMenu.accessories,
        path: "/pcAccessories",
        active: false,
        categoryMenu: [
          {
            categoryId: "cpu",
            name: lang?.ENG.headerMenu.cpu,
            active: false,
            Producers: [
              { producerId: "intel", name: "INTEL" },
              { producerId: "amd", name: "AMD" },
            ],
          },
          {
            categoryId: "mainboard",
            name: lang?.ENG.headerMenu.mainboard,
            active: false,
            Producers: [
              { producerId: "asus", name: "ASUS" },
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "msi", name: "MSI" },
              { producerId: "asrock", name: "ASROCK" },
            ],
          },
          {
            categoryId: "ram",
            name: lang?.ENG.headerMenu.ram,
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "corsair", name: "CORSAIR" },
              { producerId: "kingston", name: "KINGSTON" },
            ],
          },
          {
            categoryId: "hdd",
            name: lang?.ENG.headerMenu.hdd,
            active: false,
            Producers: [
              { producerId: "seagate", name: "SEAGATE" },
              { producerId: "western", name: "WESTERN DIGITAL" },
            ],
          },
          {
            categoryId: "ssd",
            name: lang?.ENG.headerMenu.ssd,
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "samsung", name: "SAMSUNG" },
              { producerId: "kingston", name: "KINGSTON" },
              { producerId: "western", name: "WESTERN DIGITAL" },
            ],
          },
          {
            categoryId: "vga",
            name: lang?.ENG.headerMenu.vga,
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "asus", name: "ASUS" },
              { producerId: "msi", name: "MSI" },
            ],
          },
          {
            categoryId: "psu",
            name: lang?.ENG.headerMenu.psu,
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "deepcool", name: "DEEPCOOL" },
              { producerId: "coolermaster", name: "COOLERMASTER" },
              { producerId: "corsair", name: "CORSAIR" },
            ],
          },
        ],
      },
    ],
  },
  {
    menuId: "course",
    name: lang?.ENG.headerMenu.course,
    path: "/course",
    icon: "fas fa-book-open",
    active: false,
    subMenu: [
      {
        subMenuId: "mindSet",
        name: lang?.ENG.headerMenu.mindsetProgramming,
        path: "",
        active: false,
        categoryMenu: [],
      },
      {
        subMenuId: "mobile",
        name: lang?.ENG.headerMenu.mobileProgramming,
        path: "",
        active: false,
        categoryMenu: [],
      },
      {
        subMenuId: "fullStack",
        name: lang?.ENG.headerMenu.fullstackProgramming,
        path: "",
        active: false,
        categoryMenu: [],
      },
      {
        subMenuId: "backEnd",
        name: lang?.ENG.headerMenu.backendProgramming,
        path: "",
        active: false,
        categoryMenu: [],
      },
      {
        subMenuId: "frontEnd",
        name: lang?.ENG.headerMenu.frontendProgramming,
        path: "",
        active: false,
        categoryMenu: [],
      },
    ],
  },
  {
    menuId: "movie",
    name: lang?.ENG.headerMenu.movie,
    path: "/movie",
    icon: "fas fa-phone",
    active: false,
    subMenu: [],
  },
  {
    menuId: "about",
    name: lang?.ENG.headerMenu.aboutUs,
    path: "/about",
    icon: "fas fa-home",
    active: false,
    subMenu: [],
  },
];

export const headerMenuVN = [
  {
    menuId: "home",
    name: lang?.VN.headerMenu.home,
    path: "/",
    icon: "fas fa-home",
    active: false,
    subMenu: [],
  },
  {
    menuId: "product",
    name: lang?.VN.headerMenu.product,
    path: "/product",
    icon: "fas fa-tag",
    active: false,
    subMenu: [
      {
        subMenuId: "computer",
        name: lang?.VN.headerMenu.computer,
        path: "/computer",
        active: false,
        categoryMenu: [
          {
            categoryId: "pc_set",
            name: "PC SET",
            active: false,
            Producers: [],
          },
          {
            categoryId: "laptop",
            name: "LAPTOP",
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "asus", name: "ASUS" },
              { producerId: "msi", name: "MSI" },
              { producerId: "dell", name: "DELL" },
              { producerId: "hp", name: "HP" },
            ],
          },
        ],
      },
      {
        subMenuId: "electronics",
        name: lang?.VN.headerMenu.electronics,
        path: "/electronics",
        active: false,
        categoryMenu: [
          {
            categoryId: "printer",
            name: lang?.VN.headerMenu.printer,
            active: false,
            Producers: [
              { producerId: "samsung", name: "SAMSUNG" },
            ],
          },
          {
            categoryId: "monitor",
            name: lang?.VN.headerMenu.monitor,
            active: false,
            Producers: [
              { producerId: "samsung", name: "SAMSUNG" },
              { producerId: "lg", name: "LG" },
              { producerId: "viewsonic", name: "VIEWSONIC" },
            ],
          },
          {
            categoryId: "fax",
            name: lang?.VN.headerMenu.faxMachine,
            active: false,
            Producers: [
              { producerId: "samsung", name: "SAMSUNG" },
            ],
          },
        ],
      },
      {
        subMenuId: "accessories",
        name: lang?.VN.headerMenu.accessories,
        path: "/pcAccessories",
        active: false,
        categoryMenu: [
          {
            categoryId: "cpu",
            name: lang?.VN.headerMenu.cpu,
            active: false,
            Producers: [
              { producerId: "intel", name: "INTEL" },
              { producerId: "amd", name: "AMD" },
            ],
          },
          {
            categoryId: "mainboard",
            name: lang?.VN.headerMenu.mainboard,
            active: false,
            Producers: [
              { producerId: "asus", name: "ASUS" },
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "msi", name: "MSI" },
              { producerId: "asrock", name: "ASROCK" },
            ],
          },
          {
            categoryId: "ram",
            name: lang?.VN.headerMenu.ram,
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "corsair", name: "CORSAIR" },
              { producerId: "kingston", name: "KINGSTON" },
            ],
          },
          {
            categoryId: "hdd",
            name: lang?.VN.headerMenu.hdd,
            active: false,
            Producers: [
              { producerId: "seagate", name: "SEAGATE" },
              { producerId: "western", name: "WESTERN DIGITAL" },
            ],
          },
          {
            categoryId: "ssd",
            name: lang?.VN.headerMenu.ssd,
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "samsung", name: "SAMSUNG" },
              { producerId: "kingston", name: "KINGSTON" },
              { producerId: "western", name: "WESTERN DIGITAL" },
            ],
          },
          {
            categoryId: "vga",
            name: lang?.VN.headerMenu.vga,
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "asus", name: "ASUS" },
              { producerId: "msi", name: "MSI" },
            ],
          },
          {
            categoryId: "psu",
            name: lang?.VN.headerMenu.psu,
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "deepcool", name: "DEEPCOOL" },
              { producerId: "coolermaster", name: "COOLERMASTER" },
              { producerId: "corsair", name: "CORSAIR" },
            ],
          },
        ],
      },
    ],
  },
  {
    menuId: "course",
    name: lang?.VN.headerMenu.course,
    path: "/course",
    icon: "fas fa-book-open",
    active: false,
    subMenu: [
      {
        subMenuId: "mindSet",
        name: lang?.VN.headerMenu.mindsetProgramming,
        path: "",
        active: false,
        categoryMenu: [],
      },
      {
        subMenuId: "mobile",
        name: lang?.VN.headerMenu.mobileProgramming,
        path: "",
        active: false,
        categoryMenu: [],
      },
      {
        subMenuId: "fullStack",
        name: lang?.VN.headerMenu.fullstackProgramming,
        path: "",
        active: false,
        categoryMenu: [],
      },
      {
        subMenuId: "backEnd",
        name: lang?.VN.headerMenu.backendProgramming,
        path: "",
        active: false,
        categoryMenu: [],
      },
      {
        subMenuId: "fontEnd",
        name: lang?.VN.headerMenu.frontendProgramming,
        path: "",
        active: false,
        categoryMenu: [],
      },
    ],
  },
  {
    menuId: "movie",
    name: lang?.VN.headerMenu.movie,
    path: "/movie",
    icon: "fas fa-phone",
    active: false,
    subMenu: [],
  },
  {
    menuId: "about",
    name: lang?.VN.headerMenu.aboutUs,
    path: "/about",
    icon: "fas fa-home",
    active: false,
    subMenu: [],
  },
];

export const headerMenuCH = [
  {
    menuId: "home",
    name: lang?.CH.headerMenu.home,
    path: "/",
    icon: "fas fa-home",
    active: false,
    subMenu: [],
  },
  {
    menuId: "product",
    name: lang?.CH.headerMenu.product,
    path: "/product",
    icon: "fas fa-tag",
    active: false,
    subMenu: [
      {
        subMenuId: "computer",
        name: lang?.CH.headerMenu.computer,
        path: "/computer",
        active: false,
        categoryMenu: [
          {
            categoryId: "pc_set",
            name: "PC SET",
            active: false,
            Producers: [],
          },
          {
            categoryId: "laptop",
            name: "LAPTOP",
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "asus", name: "ASUS" },
              { producerId: "msi", name: "MSI" },
              { producerId: "dell", name: "DELL" },
              { producerId: "hp", name: "HP" },
            ],
          },
        ],
      },
      {
        subMenuId: "electronics",
        name: lang?.CH.headerMenu.electronics,
        path: "/electronics",
        active: false,
        categoryMenu: [
          {
            categoryId: "printer",
            name: lang?.CH.headerMenu.printer,
            active: false,
            Producers: [
              { producerId: "samsung", name: "SAMSUNG" },
            ],
          },
          {
            categoryId: "monitor",
            name: lang?.CH.headerMenu.monitor,
            active: false,
            Producers: [
              { producerId: "samsung", name: "SAMSUNG" },
              { producerId: "lg", name: "LG" },
              { producerId: "viewsonic", name: "VIEWSONIC" },
            ],
          },
          {
            categoryId: "fax",
            name: lang?.CH.headerMenu.faxMachine,
            active: false,
            Producers: [
              { producerId: "samsung", name: "SAMSUNG" },
            ],
          },
        ],
      },
      {
        subMenuId: "accessories",
        name: lang?.CH.headerMenu.accessories,
        path: "/pcAccessories",
        active: false,
        categoryMenu: [
          {
            categoryId: "cpu",
            name: lang?.CH.headerMenu.cpu,
            active: false,
            Producers: [
              { producerId: "intel", name: "INTEL" },
              { producerId: "amd", name: "AMD" },
            ],
          },
          {
            categoryId: "mainboard",
            name: lang?.CH.headerMenu.mainboard,
            active: false,
            Producers: [
              { producerId: "asus", name: "ASUS" },
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "msi", name: "MSI" },
              { producerId: "asrock", name: "ASROCK" },
            ],
          },
          {
            categoryId: "ram",
            name: lang?.CH.headerMenu.ram,
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "corsair", name: "CORSAIR" },
              { producerId: "kingston", name: "KINGSTON" },
            ],
          },
          {
            categoryId: "hdd",
            name: lang?.CH.headerMenu.hdd,
            active: false,
            Producers: [
              { producerId: "seagate", name: "SEAGATE" },
              { producerId: "western", name: "WESTERN DIGITAL" },
            ],
          },
          {
            categoryId: "ssd",
            name: lang?.CH.headerMenu.ssd,
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "samsung", name: "SAMSUNG" },
              { producerId: "kingston", name: "KINGSTON" },
              { producerId: "western", name: "WESTERN DIGITAL" },
            ],
          },
          {
            categoryId: "vga",
            name: lang?.CH.headerMenu.vga,
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "asus", name: "ASUS" },
              { producerId: "msi", name: "MSI" },
            ],
          },
          {
            categoryId: "psu",
            name: lang?.CH.headerMenu.psu,
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "deepcool", name: "DEEPCOOL" },
              { producerId: "coolermaster", name: "COOLERMASTER" },
              { producerId: "corsair", name: "CORSAIR" },
            ],
          },
        ],
      },
    ],
  },
  {
    menuId: "course",
    name: lang?.CH.headerMenu.course,
    path: "/course",
    icon: "fas fa-book-open",
    active: false,
    subMenu: [
      {
        subMenuId: "mindSet",
        name: lang?.CH.headerMenu.mindsetProgramming,
        path: "",
        active: false,
        categoryMenu: [],
      },
      {
        subMenuId: "mobile",
        name: lang?.CH.headerMenu.mobileProgramming,
        path: "",
        active: false,
        categoryMenu: [],
      },
      {
        subMenuId: "fullStack",
        name: lang?.CH.headerMenu.fullstackProgramming,
        path: "",
        active: false,
        categoryMenu: [],
      },
      {
        subMenuId: "backEnd",
        name: lang?.CH.headerMenu.backendProgramming,
        path: "",
        active: false,
        categoryMenu: [],
      },
      {
        subMenuId: "fontEnd",
        name: lang?.CH.headerMenu.frontendProgramming,
        path: "",
        active: false,
        categoryMenu: [],
      },
    ],
  },
  {
    menuId: "movie",
    name: lang?.CH.headerMenu.movie,
    path: "/movie",
    icon: "fas fa-phone",
    active: false,
    subMenu: [],
  },
  {
    menuId: "about",
    name: lang?.CH.headerMenu.aboutUs,
    path: "/about",
    icon: "fas fa-home",
    active: false,
    subMenu: [],
  },
];
