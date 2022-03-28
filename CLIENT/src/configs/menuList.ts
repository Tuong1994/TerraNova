import * as lang from "../translate";

export const adminMenu = [
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

export const headerMenuEng = [
  {
    menuId: "M_0001",
    name: lang?.ENG.headerMenu.home,
    path: "/",
    icon: "fas fa-home",
    active: false,
    subMenu: [],
  },
  {
    menuId: "M_0002",
    name: lang?.ENG.headerMenu.product,
    path: "/product",
    icon: "fas fa-tag",
    active: false,
    subMenu: [
      {
        subMenuId: "SM_0003",
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
        subMenuId: "SM_0002",
        name: lang?.ENG.headerMenu.electronics,
        path: "/electronics",
        active: false,
        categoryMenu: [
          {
            categoryId: "printer",
            name: lang?.ENG.headerMenu.printer,
            active: false,
            Producers: [],
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
            Producers: [],
          },
        ],
      },
      {
        subMenuId: "SM_0001",
        name: lang?.ENG.headerMenu.accessories,
        path: "/pcAccessories",
        active: false,
        categoryMenu: [
          {
            categoryId: "vga",
            name: "VGA - GRAPHICS CARD",
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "asus", name: "ASUS" },
              { producerId: "msi", name: "MSI" },
            ],
          },
          {
            categoryId: "ssd",
            name: "SSD",
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "samsung", name: "SAMSUNG" },
              { producerId: "kingston", name: "KINGSTON" },
              { producerId: "western", name: "WESTERN DIGITAL" },
            ],
          },
          {
            categoryId: "ram",
            name: "RAM",
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "corsair", name: "CORSAIR" },
              { producerId: "kingston", name: "KINGSTON" },
            ],
          },
          {
            categoryId: "psu",
            name: "PSU - POWER SUPLLY UNIT",
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "deepcool", name: "DEEPCOOL" },
              { producerId: "coolermaster", name: "COOLERMASTER" },
              { producerId: "corsair", name: "CORSAIR" },
            ],
          },
          {
            categoryId: "mainboard",
            name: "MAINBOARD",
            active: false,
            Producers: [
              { producerId: "asus", name: "ASUS" },
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "msi", name: "MSI" },
              { producerId: "asrock", name: "ASROCK" },
            ],
          },
          {
            categoryId: "hdd",
            name: "HDD",
            active: false,
            Producers: [
              { producerId: "seagate", name: "SEAGATE" },
              { producerId: "western", name: "WESTERN DIGITAL" },
            ],
          },
          {
            categoryId: "cpu",
            name: "CPU",
            active: false,
            Producers: [
              { producerId: "intel", name: "INTEL" },
              { producerId: "amd", name: "AMD" },
            ],
          },
        ],
      },
    ],
  },
  {
    menuId: "M_0003",
    name: lang?.ENG.headerMenu.course,
    path: "/course",
    icon: "fas fa-book-open",
    active: false,
    subMenu: [
      {
        subMenuId: "SM_0008",
        name: lang?.ENG.headerMenu.mindsetPrograming,
        path: "/mindSet",
        active: false,
        categoryMenu: [],
      },
      {
        subMenuId: "SM_0007",
        name: lang?.ENG.headerMenu.mobilePrograming,
        path: "/mobile",
        active: false,
        categoryMenu: [],
      },
      {
        subMenuId: "SM_0006",
        name: lang?.ENG.headerMenu.fullstackPrograming,
        path: "/fullStack",
        active: false,
        categoryMenu: [],
      },
      {
        subMenuId: "SM_0005",
        name: lang?.ENG.headerMenu.backendPrograming,
        path: "/backEnd",
        active: false,
        categoryMenu: [],
      },
      {
        subMenuId: "SM_0004",
        name: lang?.ENG.headerMenu.fronendPrograming,
        path: "/frontEnd",
        active: false,
        categoryMenu: [],
      },
    ],
  },
  {
    menuId: "M_0004",
    name: lang?.ENG.headerMenu.aboutUs,
    path: "/about",
    icon: "fas fa-home",
    active: false,
    subMenu: [],
  },
  {
    menuId: "M_0005",
    name: lang?.ENG.headerMenu.contact,
    path: "/contact",
    icon: "fas fa-phone",
    active: false,
    subMenu: [],
  },
];

export const headerMenuVN = [
  {
    menuId: "M_0001",
    name: lang?.VN.headerMenu.home,
    path: "/",
    icon: "fas fa-home",
    active: false,
    subMenu: [],
  },
  {
    menuId: "M_0002",
    name: lang?.VN.headerMenu.product,
    path: "/product",
    icon: "fas fa-tag",
    active: false,
    subMenu: [
      {
        subMenuId: "SM_0003",
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
        subMenuId: "SM_0002",
        name: lang?.VN.headerMenu.electronics,
        path: "/electronics",
        active: false,
        categoryMenu: [
          {
            categoryId: "printer",
            name: lang?.VN.headerMenu.printer,
            active: false,
            Producers: [],
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
            Producers: [],
          },
        ],
      },
      {
        subMenuId: "SM_0001",
        name: lang?.VN.headerMenu.accessories,
        path: "/pcAccessories",
        active: false,
        categoryMenu: [
          {
            categoryId: "vga",
            name: "VGA - GRAPHICS CARD",
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "asus", name: "ASUS" },
              { producerId: "msi", name: "MSI" },
            ],
          },
          {
            categoryId: "ssd",
            name: "SSD",
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "samsung", name: "SAMSUNG" },
              { producerId: "kingston", name: "KINGSTON" },
              { producerId: "western", name: "WESTERN DIGITAL" },
            ],
          },
          {
            categoryId: "ram",
            name: "RAM",
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "corsair", name: "CORSAIR" },
              { producerId: "kingston", name: "KINGSTON" },
            ],
          },
          {
            categoryId: "psu",
            name: "PSU - POWER SUPLLY UNIT",
            active: false,
            Producers: [
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "deepcool", name: "DEEPCOOL" },
              { producerId: "coolermaster", name: "COOLERMASTER" },
              { producerId: "corsair", name: "CORSAIR" },
            ],
          },
          {
            categoryId: "mainboard",
            name: "MAINBOARD",
            active: false,
            Producers: [
              { producerId: "asus", name: "ASUS" },
              { producerId: "gigabyte", name: "GIGABYTE" },
              { producerId: "msi", name: "MSI" },
              { producerId: "asrock", name: "ASROCK" },
            ],
          },
          {
            categoryId: "hdd",
            name: "HDD",
            active: false,
            Producers: [
              { producerId: "seagate", name: "SEAGATE" },
              { producerId: "western", name: "WESTERN DIGITAL" },
            ],
          },
          {
            categoryId: "cpu",
            name: "CPU",
            active: false,
            Producers: [
              { producerId: "intel", name: "INTEL" },
              { producerId: "amd", name: "AMD" },
            ],
          },
        ],
      },
    ],
  },
  {
    menuId: "M_0003",
    name: lang?.VN.headerMenu.course,
    path: "/course",
    icon: "fas fa-book-open",
    active: false,
    subMenu: [
      {
        subMenuId: "SM_0008",
        name: lang?.VN.headerMenu.mindsetPrograming,
        path: "/mindSet",
        active: false,
        categoryMenu: [],
      },
      {
        subMenuId: "SM_0007",
        name: lang?.VN.headerMenu.mobilePrograming,
        path: "/mobile",
        active: false,
        categoryMenu: [],
      },
      {
        subMenuId: "SM_0006",
        name: lang?.VN.headerMenu.fullstackPrograming,
        path: "/fullStack",
        active: false,
        categoryMenu: [],
      },
      {
        subMenuId: "SM_0005",
        name: lang?.VN.headerMenu.backendPrograming,
        path: "/backEnd",
        active: false,
        categoryMenu: [],
      },
      {
        subMenuId: "SM_0004",
        name: lang?.VN.headerMenu.frontendPrograming,
        path: "/frontEnd",
        active: false,
        categoryMenu: [],
      },
    ],
  },
  {
    menuId: "M_0004",
    name: lang?.VN.headerMenu.aboutUs,
    path: "/about",
    icon: "fas fa-home",
    active: false,
    subMenu: [],
  },
  {
    menuId: "M_0005",
    name: lang?.VN.headerMenu.contact,
    path: "/contact",
    icon: "fas fa-phone",
    active: false,
    subMenu: [],
  },
];

