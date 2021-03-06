import { EBranch, ECourseCategory, EDateType } from "./../models/Course";
import {
  EInventoryStatus,
  EProducer,
  EProductStatus,
  EProductType,
  EProfit,
} from "./../models/Product/index";
import { EPaymentTypes, EShipmentType, EStatus } from "../models/Order";
import { EWard, EDistrict, EProvince } from "./../models/Shipment";
import { ESortBy } from "../interfaces/query";
import { EGender, ERole } from "../models/User";
import { EMovieCountry, EMovieStatus, EMovieType } from "../models/Movie";

export const optionsEng = {
  // MOVIE
  movieStatus: [
    { label: "SHOWING", value: EMovieStatus.showing },
    { label: "COMMING", value: EMovieStatus.comming },
  ],
  movieCountry: [
    { label: "AMERICA", value: EMovieCountry.america },
    { label: "AUSTRALIA", value: EMovieCountry.australia },
    { label: "CHINA", value: EMovieCountry.china },
    { label: "KOREAN", value: EMovieCountry.korean },
    { label: "ENGLAND", value: EMovieCountry.england },
    { label: "VIETNAM", value: EMovieCountry.vietnam },
  ],
  movieType: [
    { label: "ACTION", value: EMovieType.action },
    { label: "ADVENTURE", value: EMovieType.adventure },
    { label: "COMEDY", value: EMovieType.comedy },
    { label: "DRAMA", value: EMovieType.drama },
    { label: "HORROR", value: EMovieType.horror },
    { label: "SCI FI", value: EMovieType.sciFi },
    { label: "THRILLER", value: EMovieType.thriller },
  ],

  // ORDER
  orderStatus: [
    { label: "PAID", value: EStatus.paid },
    { label: "WAITING", value: EStatus.waiting },
    { label: "DELIVERING", value: EStatus.delivering },
  ],
  province: [
    { label: "Ho Chi Minh", value: EProvince.HCM },
    { label: "Ha Noi", value: EProvince.HN },
  ],
  HCM: {
    ward: [
      { label: "1", value: EWard.one },
      { label: "2", value: EWard.two },
      { label: "3", value: EWard.three },
      { label: "4", value: EWard.four },
      { label: "5", value: EWard.five },
      { label: "6", value: EWard.six },
      { label: "7", value: EWard.seven },
      { label: "8", value: EWard.eight },
      { label: "9", value: EWard.nine },
      { label: "10", value: EWard.ten },
      { label: "11", value: EWard.eleven },
      { label: "12", value: EWard.twelve },
      { label: "13", value: EWard.thirteen },
      { label: "14", value: EWard.fourteen },
    ],
    district: [
      { label: "1", value: EDistrict.one },
      { label: "2", value: EDistrict.two },
      { label: "3", value: EDistrict.three },
      { label: "4", value: EDistrict.four },
      { label: "5", value: EDistrict.five },
      { label: "6", value: EDistrict.six },
      { label: "7", value: EDistrict.seven },
      { label: "8", value: EDistrict.eight },
      { label: "9", value: EDistrict.nine },
      { label: "10", value: EDistrict.ten },
      { label: "11", value: EDistrict.eleven },
      { label: "12", value: EDistrict.twelve },
    ],
  },
  HN: {
    ward: [
      { label: "Hoan Kiem", value: EWard.hoanKiem },
      { label: "Dong Da", value: EWard.dongDa },
      { label: "Ba Dinh", value: EWard.ba??inh },
      { label: "Hai Ba Trung", value: EWard.haiBaTrung },
      { label: "Hoang Mai", value: EWard.hoangMai },
      { label: "Thanh Xuan", value: EWard.thanhXuan },
      { label: "Long Bien", value: EWard.longBien },
      { label: "Nam Tu Liem", value: EWard.namTuLiem },
      { label: "Bac Tu Liem", value: EWard.bacTuLiem },
      { label: "Tay Ho", value: EWard.tayHo },
      { label: "Cau Giay", value: EWard.cauGiay },
      { label: "Ha Dong", value: EWard.haDong },
    ],

    district: [
      { label: "Ba Vi", value: EDistrict.baVi },
      { label: "Chuong My", value: EDistrict.chuongMy },
      { label: "Phuc Tho", value: EDistrict.phucTho },
      { label: "Dan Phuong", value: EDistrict.danPhuong },
      { label: "Dong Anh", value: EDistrict.dongAnh },
      { label: "Gia Lam", value: EDistrict.giaLam },
      { label: "Hoai Duc", value: EDistrict.hoaiDuc },
      { label: "Me Linh", value: EDistrict.meLinh },
      { label: "My Duc", value: EDistrict.myDuc },
      { label: "Phu Xuyen", value: EDistrict.phuXuyen },
      { label: "Quoc Oai", value: EDistrict.quocOai },
      { label: "Soc Son", value: EDistrict.socSon },
      { label: "Thach That", value: EDistrict.thachThat },
      { label: "Thanh Oai", value: EDistrict.thanhOai },
      { label: "Thuong Tin", value: EDistrict.thuongTin },
      { label: "Ung Hoa", value: EDistrict.ungHoa },
      { label: "Thanh Tri", value: EDistrict.thanhTri },
    ],
  },
  shipmentType: [
    { label: "Received in store", value: EShipmentType.noShipment },
    { label: "Delivery", value: EShipmentType.delivery },
  ],
  paymentType: [
    { label: "Cash", value: EPaymentTypes.cash, icon: "/img/icon/cash.png" },
    {
      label: "Zalo - Pay",
      value: EPaymentTypes.zalo,
      icon: "/img/icon/zalo.png",
    },
    {
      label: "VIB - Bank",
      value: EPaymentTypes.vib,
      icon: "/img/icon/vib.png",
    },
  ],

  // USER
  role: [
    { label: "Admin", value: ERole.admin },
    { label: "User", value: ERole.user },
  ],
  gender: [
    { label: "Male", value: EGender.male },
    { label: "Female", value: EGender.female },
  ],

  //  PRODUCT
  productStatus: [
    { label: "New", value: EProductStatus.new },
    { label: "90% new", value: EProductStatus.secondHand },
  ],
  inventoryStatus: [
    { label: "In stock", value: EInventoryStatus.inStock },
    { label: "Out of stock", value: EInventoryStatus.outOfStock },
  ],
  profit: [
    { label: "50%", value: EProfit.half },
    { label: "100%", value: EProfit.full },
  ],
  productCategory: [
    { label: "CPU", value: EProductType.cpu },
    { label: "RAM", value: EProductType.ram },
    { label: "VGA", value: EProductType.vga },
    { label: "HDD", value: EProductType.hdd },
    { label: "SSD", value: EProductType.ssd },
    { label: "PSU", value: EProductType.psu },
    { label: "MAINBOARD", value: EProductType.mainboard },
    { label: "MONITOR", value: EProductType.monitor },
    { label: "PRINTER", value: EProductType.printer },
    { label: "FAX", value: EProductType.fax },
    { label: "LAPTOP", value: EProductType.laptop },
    { label: "PC SET", value: EProductType.pcSet },
  ],
  cpuProducer: [
    { label: "INTEL", value: EProducer.intel },
    { label: "AMD", value: EProducer.amd },
  ],
  ramProducer: [
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "CORSAIR", value: EProducer.corsair },
    { label: "KINGSTON", value: EProducer.kingston },
  ],
  vgaProducer: [
    { label: "ASUS", value: EProducer.asus },
    { label: "ASROCK", value: EProducer.asrock },
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "MSI", value: EProducer.msi },
  ],
  hddProducer: [
    { label: "SEAGATE", value: EProducer.seagate },
    { label: "WESTERN", value: EProducer.western },
  ],
  ssdProducer: [
    { label: "SEAGATE", value: EProducer.seagate },
    { label: "WESTERN", value: EProducer.western },
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "SAMSUNG", value: EProducer.samsung },
  ],
  psuProducer: [
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "CORSAIR", value: EProducer.corsair },
    { label: "DEEPCOOL", value: EProducer.deepcool },
    { label: "COOLERMASTER", value: EProducer.coolermaster },
  ],
  mainboardProducer: [
    { label: "ASUS", value: EProducer.asus },
    { label: "ASROCK", value: EProducer.asrock },
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "MSI", value: EProducer.msi },
  ],
  monitorProducer: [
    { label: "SAMSUNG", value: EProducer.samsung },
    { label: "LG", value: EProducer.lg },
    { label: "VIEWSONIC", value: EProducer.viewsonic },
  ],
  printerProducer: [{ label: "SAMSUNG", value: EProducer.samsung }],
  faxProducer: [{ label: "SAMSUNG", value: EProducer.samsung }],
  laptopProducer: [
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "MSI", value: EProducer.msi },
    { label: "ASUS", value: EProducer.asus },
    { label: "DELL", value: EProducer.dell },
    { label: "HP", value: EProducer.hp },
  ],

  // COURSE
  courseCategory: [
    { label: "MINDSET", value: ECourseCategory.mindset },
    { label: "MOBILE", value: ECourseCategory.mobile },
    { label: "FRONTEND", value: ECourseCategory.frontEnd },
    { label: "BACKEND", value: ECourseCategory.backEnd },
    { label: "FULLSTACK", value: ECourseCategory.fullStack },
    { label: "DESIGN", value: ECourseCategory.design },
  ],
  dateType: [
    { label: "mon + wed + fri", value: EDateType.even },
    { label: "tues + thurs + sat", value: EDateType.odd },
    { label: "sat + sun", value: EDateType.last },
  ],
  branch: [
    { label: "1", value: EBranch.one },
    { label: "2", value: EBranch.two },
  ],

  // COMMON
  sortBy: [
    { label: "Newest", value: ESortBy.newest },
    { label: "Oldest", value: ESortBy.oldest },
  ],
  userFilter: [
    { label: "ALL", value: "all" },
    { label: "ADMIN", value: ERole.admin },
    { label: "USER", value: ERole.user },
  ],
  productFilter: [
    { label: "ALL", value: "all" },
    { label: "CPU", value: EProductType.cpu },
    { label: "RAM", value: EProductType.ram },
    { label: "VGA", value: EProductType.vga },
    { label: "HDD", value: EProductType.hdd },
    { label: "SSD", value: EProductType.ssd },
    { label: "PSU", value: EProductType.psu },
    { label: "MAINBOARD", value: EProductType.mainboard },
    { label: "MONITOR", value: EProductType.monitor },
    { label: "PRINTER", value: EProductType.printer },
    { label: "FAX", value: EProductType.fax },
    { label: "LAPTOP", value: EProductType.laptop },
    { label: "PC SET", value: EProductType.pcSet },
  ],
  courseFilter: [
    { label: "ALL", value: "all" },
    { label: "MINDSET", value: ECourseCategory.mindset },
    { label: "MOBILE", value: ECourseCategory.mobile },
    { label: "FRONTEND", value: ECourseCategory.frontEnd },
    { label: "BACKEND", value: ECourseCategory.backEnd },
    { label: "FULLSTACK", value: ECourseCategory.fullStack },
    { label: "DESIGN", value: ECourseCategory.design },
  ],
  orderFilter: [
    { label: "ALL", value: "all" },
    { label: "PAID", value: EStatus.paid },
    { label: "WAITING", value: EStatus.waiting },
    { label: "DELIVERING", value: EStatus.delivering },
  ],
  movieFilter: [
    { label: "ALL", value: 0 },
    { label: "NOW SHOWING", value: EMovieStatus.showing },
    { label: "COMMING SOON", value: EMovieStatus.comming },
  ],
};

export const optionsVn = {
  // MOVIE
  movieStatus: [
    { label: "??ANG CHI???U", value: EMovieStatus.showing },
    { label: "S???P CHI???U", value: EMovieStatus.comming },
  ],
  movieCountry: [
    { label: "M???", value: EMovieCountry.america },
    { label: "??C", value: EMovieCountry.australia },
    { label: "TRUNG QU???C", value: EMovieCountry.china },
    { label: "H??N QU???C", value: EMovieCountry.korean },
    { label: "ANH QU???C", value: EMovieCountry.england },
    { label: "VI???T NAM", value: EMovieCountry.vietnam },
  ],
  movieType: [
    { label: "H??NH ?????NG", value: EMovieType.action },
    { label: "PHI??U L??U", value: EMovieType.adventure },
    { label: "H??I H?????C", value: EMovieType.comedy },
    { label: "T??M L??", value: EMovieType.drama },
    { label: "KINH D???", value: EMovieType.horror },
    { label: "KHOA H???C VI???N T?????NG", value: EMovieType.sciFi },
    { label: "GI???T G??N", value: EMovieType.thriller },
  ],

  // ORDER
  orderStatus: [
    { label: "???? THANH TO??N", value: EStatus.paid },
    { label: "??ANG X??? L??", value: EStatus.waiting },
    { label: "??ANG GIAO", value: EStatus.delivering },
  ],
  province: [
    { label: "H??? Ch?? Minh", value: EProvince.HCM },
    { label: "H?? N???i", value: EProvince.HN },
  ],
  HCM: {
    ward: [
      { label: "1", value: EWard.one },
      { label: "2", value: EWard.two },
      { label: "3", value: EWard.three },
      { label: "4", value: EWard.four },
      { label: "5", value: EWard.five },
      { label: "6", value: EWard.six },
      { label: "7", value: EWard.seven },
      { label: "8", value: EWard.eight },
      { label: "9", value: EWard.nine },
      { label: "10", value: EWard.ten },
      { label: "11", value: EWard.eleven },
      { label: "12", value: EWard.twelve },
      { label: "13", value: EWard.thirteen },
      { label: "14", value: EWard.fourteen },
    ],
    district: [
      { label: "1", value: EDistrict.one },
      { label: "2", value: EDistrict.two },
      { label: "3", value: EDistrict.three },
      { label: "4", value: EDistrict.four },
      { label: "5", value: EDistrict.five },
      { label: "6", value: EDistrict.six },
      { label: "7", value: EDistrict.seven },
      { label: "8", value: EDistrict.eight },
      { label: "9", value: EDistrict.nine },
      { label: "10", value: EDistrict.ten },
      { label: "11", value: EDistrict.eleven },
      { label: "12", value: EDistrict.twelve },
    ],
  },
  HN: {
    ward: [
      { label: "Ho??n Ki???m", value: EWard.hoanKiem },
      { label: "?????ng ??a", value: EWard.dongDa },
      { label: "Ba ????nh", value: EWard.ba??inh },
      { label: "Hai B?? Tr??ng", value: EWard.haiBaTrung },
      { label: "Ho??ng Mai", value: EWard.hoangMai },
      { label: "Thanh Xu??n", value: EWard.thanhXuan },
      { label: "Long Bi??n", value: EWard.longBien },
      { label: "Nam T??? Li??m", value: EWard.namTuLiem },
      { label: "Bac T??? Li??m", value: EWard.bacTuLiem },
      { label: "T??y H???", value: EWard.tayHo },
      { label: "C???u Gi???y", value: EWard.cauGiay },
      { label: "H?? ????ng", value: EWard.haDong },
    ],
    district: [
      { label: "Ba V??", value: EDistrict.baVi },
      { label: "Ch????ng M???", value: EDistrict.chuongMy },
      { label: "Ph??c Th???", value: EDistrict.phucTho },
      { label: "??an Ph?????ng", value: EDistrict.danPhuong },
      { label: "????ng Anh", value: EDistrict.dongAnh },
      { label: "Gia L??m", value: EDistrict.giaLam },
      { label: "Ho??i ?????c", value: EDistrict.hoaiDuc },
      { label: "M?? Linh", value: EDistrict.meLinh },
      { label: "M??? ?????c", value: EDistrict.myDuc },
      { label: "Ph?? Xuy??n", value: EDistrict.phuXuyen },
      { label: "Qu???c Oai", value: EDistrict.quocOai },
      { label: "S??c S??n", value: EDistrict.socSon },
      { label: "Th???ch Th???t", value: EDistrict.thachThat },
      { label: "Thanh Oai", value: EDistrict.thanhOai },
      { label: "Th?????ng T??n", value: EDistrict.thuongTin },
      { label: "???ng Ho??", value: EDistrict.ungHoa },
      { label: "Thanh Tr??", value: EDistrict.thanhTri },
    ],
  },
  shipmentType: [
    { label: "Nh???n t???i c???a h??ng", value: EShipmentType.noShipment },
    { label: "Giao h??ng t???n n??i", value: EShipmentType.delivery },
  ],
  paymentType: [
    {
      label: "Ti???n m???t",
      value: EPaymentTypes.cash,
      icon: "/img/icon/cash.png",
    },
    {
      label: "???ng d???ng Zalo - Pay",
      value: EPaymentTypes.zalo,
      icon: "/img/icon/zalo.png",
    },
    {
      label: "Ng??n h??ng qu???c t??? VIB",
      value: EPaymentTypes.vib,
      icon: "/img/icon/vib.png",
    },
  ],

  // USER
  role: [
    { label: "Qu???n tr???", value: ERole.admin },
    { label: "Kh??ch h??ng", value: ERole.user },
  ],
  gender: [
    { label: "Nam", value: EGender.male },
    { label: "N???", value: EGender.female },
  ],

  // PRODUCT
  productStatus: [
    { label: "M???i", value: EProductStatus.new },
    { label: "M???i 90%", value: EProductStatus.secondHand },
  ],
  inventoryStatus: [
    { label: "C??n h??ng", value: EInventoryStatus.inStock },
    { label: "H???t h??ng", value: EInventoryStatus.outOfStock },
  ],
  profit: [
    { label: "50%", value: EProfit.half },
    { label: "100%", value: EProfit.full },
  ],
  productCategory: [
    { label: "CPU", value: EProductType.cpu },
    { label: "RAM", value: EProductType.ram },
    { label: "VGA", value: EProductType.vga },
    { label: "HDD", value: EProductType.hdd },
    { label: "SSD", value: EProductType.ssd },
    { label: "PSU", value: EProductType.psu },
    { label: "MAINBOARD", value: EProductType.mainboard },
    { label: "MONITOR", value: EProductType.monitor },
    { label: "PRINTER", value: EProductType.printer },
    { label: "FAX", value: EProductType.fax },
    { label: "LAPTOP", value: EProductType.laptop },
    { label: "PC SET", value: EProductType.pcSet },
  ],
  cpuProducer: [
    { label: "INTEL", value: EProducer.intel },
    { label: "AMD", value: EProducer.amd },
  ],
  ramProducer: [
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "CORSAIR", value: EProducer.corsair },
    { label: "KINGSTON", value: EProducer.kingston },
  ],
  vgaProducer: [
    { label: "ASUS", value: EProducer.asus },
    { label: "ASROCK", value: EProducer.asrock },
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "MSI", value: EProducer.msi },
  ],
  hddProducer: [
    { label: "SEAGATE", value: EProducer.seagate },
    { label: "WESTERN", value: EProducer.western },
  ],
  ssdProducer: [
    { label: "SEAGATE", value: EProducer.seagate },
    { label: "WESTERN", value: EProducer.western },
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "SAMSUNG", value: EProducer.samsung },
  ],
  psuProducer: [
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "CORSAIR", value: EProducer.corsair },
    { label: "DEEPCOOL", value: EProducer.deepcool },
    { label: "COOLERMASTER", value: EProducer.coolermaster },
  ],
  mainboardProducer: [
    { label: "ASUS", value: EProducer.asus },
    { label: "ASROCK", value: EProducer.asrock },
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "MSI", value: EProducer.msi },
  ],
  monitorProducer: [
    { label: "SAMSUNG", value: EProducer.samsung },
    { label: "LG", value: EProducer.lg },
    { label: "VIEWSONIC", value: EProducer.viewsonic },
  ],
  printerProducer: [{ label: "SAMSUNG", value: EProducer.samsung }],
  faxProducer: [{ label: "SAMSUNG", value: EProducer.samsung }],
  laptopProducer: [
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "MSI", value: EProducer.msi },
    { label: "ASUS", value: EProducer.asus },
    { label: "DELL", value: EProducer.dell },
    { label: "HP", value: EProducer.hp },
  ],

  // COURSE
  courseCategory: [
    { label: "MINDSET", value: ECourseCategory.mindset },
    { label: "MOBILE", value: ECourseCategory.mobile },
    { label: "FRONTEND", value: ECourseCategory.frontEnd },
    { label: "BACKEND", value: ECourseCategory.backEnd },
    { label: "FULLSTACK", value: ECourseCategory.fullStack },
    { label: "DESIGN", value: ECourseCategory.design },
  ],
  dateType: [
    { label: "T2 + T4 + T6", value: EDateType.even },
    { label: "T3 + T5 + T7", value: EDateType.odd },
    { label: "T7 + CN", value: EDateType.last },
  ],
  branch: [
    { label: "1", value: EBranch.one },
    { label: "2", value: EBranch.two },
  ],

  // COMMON
  sortBy: [
    { label: "M???i nh???t", value: ESortBy.newest },
    { label: "C?? nh???t", value: ESortBy.oldest },
  ],
  userFilter: [
    { label: "T???t c???", value: "all" },
    { label: "Qu???n tr???", value: ERole.admin },
    { label: "Kh??ch h??ng", value: ERole.user },
  ],
  productFilter: [
    { label: "T???t c???", value: "all" },
    { label: "CPU", value: EProductType.cpu },
    { label: "RAM", value: EProductType.ram },
    { label: "VGA", value: EProductType.vga },
    { label: "HDD", value: EProductType.hdd },
    { label: "SSD", value: EProductType.ssd },
    { label: "PSU", value: EProductType.psu },
    { label: "MAINBOARD", value: EProductType.mainboard },
    { label: "MONITOR", value: EProductType.monitor },
    { label: "PRINTER", value: EProductType.printer },
    { label: "FAX", value: EProductType.fax },
    { label: "LAPTOP", value: EProductType.laptop },
    { label: "PC SET", value: EProductType.pcSet },
  ],
  courseFilter: [
    { label: "T???t c???", value: "all" },
    { label: "MINDSET", value: ECourseCategory.mindset },
    { label: "MOBILE", value: ECourseCategory.mobile },
    { label: "FRONTEND", value: ECourseCategory.frontEnd },
    { label: "BACKEND", value: ECourseCategory.backEnd },
    { label: "FULLSTACK", value: ECourseCategory.fullStack },
    { label: "DESIGN", value: ECourseCategory.design },
  ],
  orderFilter: [
    { label: "T???t c???", value: "all" },
    { label: "???? THANH TO??N", value: EStatus.paid },
    { label: "??ANG X??? L??", value: EStatus.waiting },
    { label: "??ANG GIAO", value: EStatus.delivering },
  ],
  movieFilter: [
    { label: "T???t c???", value: 0 },
    { label: "??ANG CHI???U", value: EMovieStatus.showing },
    { label: "S???P CHI???U", value: EMovieStatus.comming },
  ],
};

export const optionsCh = {
  // MOVIE
  movieStatus: [
    { label: "????????????", value: EMovieStatus.showing },
    { label: "?????????", value: EMovieStatus.comming },
  ],
  movieCountry: [
    { label: "??????", value: EMovieCountry.america },
    { label: "????????????", value: EMovieCountry.australia },
    { label: "??????", value: EMovieCountry.china },
    { label: "??????", value: EMovieCountry.korean },
    { label: "??????", value: EMovieCountry.england },
    { label: "??????", value: EMovieCountry.vietnam },
  ],
  movieType: [
    { label: "??????", value: EMovieType.action },
    { label: "??????", value: EMovieType.adventure },
    { label: "??????", value: EMovieType.comedy },
    { label: "??????", value: EMovieType.drama },
    { label: "??????", value: EMovieType.horror },
    { label: "??????", value: EMovieType.sciFi },
    { label: "?????????", value: EMovieType.thriller },
  ],

  // ORDER
  orderStatus: [
    { label: "??????", value: EStatus.paid },
    { label: "????????????", value: EStatus.waiting },
    { label: "?????????????????????", value: EStatus.delivering },
  ],
  province: [
    { label: "????????????", value: EProvince.HCM },
    { label: "?????????", value: EProvince.HN },
  ],
  HCM: {
    ward: [
      { label: "???", value: EWard.one },
      { label: "???", value: EWard.two },
      { label: "???", value: EWard.three },
      { label: "???", value: EWard.four },
      { label: "???", value: EWard.five },
      { label: "???", value: EWard.six },
      { label: "???", value: EWard.seven },
      { label: "???", value: EWard.eight },
      { label: "???", value: EWard.nine },
      { label: "???", value: EWard.ten },
      { label: "??????", value: EWard.eleven },
      { label: "??????", value: EWard.twelve },
      { label: "??????", value: EWard.thirteen },
      { label: "??????", value: EWard.fourteen },
    ],
    district: [
      { label: "???", value: EDistrict.one },
      { label: "???", value: EDistrict.two },
      { label: "???", value: EDistrict.three },
      { label: "???", value: EDistrict.four },
      { label: "???", value: EDistrict.five },
      { label: "???", value: EDistrict.six },
      { label: "???", value: EDistrict.seven },
      { label: "???", value: EDistrict.eight },
      { label: "???", value: EDistrict.nine },
      { label: "???", value: EDistrict.ten },
      { label: "??????", value: EDistrict.eleven },
      { label: "??????", value: EDistrict.twelve },
    ],
  },
  HN: {
    ward: [
      { label: "??????", value: EWard.hoanKiem },
      { label: "??????", value: EWard.dongDa },
      { label: "??????", value: EWard.ba??inh },
      { label: "?????????", value: EWard.haiBaTrung },
      { label: "??????", value: EWard.hoangMai },
      { label: "??????", value: EWard.thanhXuan },
      { label: "??????", vbianalue: EWard.longBien },
      { label: "?????????", value: EWard.namTuLiem },
      { label: "?????????", value: EWard.bacTuLiem },
      { label: "??????", value: EWard.tayHo },
      { label: "??????", value: EWard.cauGiay },
      { label: "??????", value: EWard.haDong },
    ],
    district: [
      { label: "??????", value: EDistrict.baVi },
      { label: "??????", value: EDistrict.chuongMy },
      { label: "??????", value: EDistrict.phucTho },
      { label: "??????", value: EDistrict.danPhuong },
      { label: "??????", value: EDistrict.dongAnh },
      { label: "??????", value: EDistrict.giaLam },
      { label: "??????", value: EDistrict.hoaiDuc },
      { label: "??????", value: EDistrict.meLinh },
      { label: "??????", value: EDistrict.myDuc },
      { label: "??????", value: EDistrict.phuXuyen },
      { label: "??????", value: EDistrict.quocOai },
      { label: "??????", value: EDistrict.socSon },
      { label: "??????", value: EDistrict.thachThat },
      { label: "??????", value: EDistrict.thanhOai },
      { label: "??????", value: EDistrict.thuongTin },
      { label: "??????", value: EDistrict.ungHoa },
      { label: "??????", value: EDistrict.thanhTri },
    ],
  },
  shipmentType: [
    { label: "???????????????", value: EShipmentType.noShipment },
    { label: "??????", value: EShipmentType.delivery },
  ],
  paymentType: [
    { label: "??????", value: EPaymentTypes.cash, icon: "/img/icon/cash.png" },
    {
      label: "Zalo ???????????? - ??????",
      value: EPaymentTypes.zalo,
      icon: "/img/icon/zalo.png",
    },
    {
      label: "VIB????????????",
      value: EPaymentTypes.vib,
      icon: "/img/icon/vib.png",
    },
  ],

  // USER
  role: [
    { label: "??????", value: ERole.admin },
    { label: "??????", value: ERole.user },
  ],
  gender: [
    { label: "??????", value: EGender.male },
    { label: "??????", value: EGender.female },
  ],

  // PRODUCT
  productStatus: [
    { label: "??????", value: EProductStatus.new },
    { label: "90% ??????", value: EProductStatus.secondHand },
  ],
  inventoryStatus: [
    { label: "?????????", value: EInventoryStatus.inStock },
    { label: "??????", value: EInventoryStatus.outOfStock },
  ],
  profit: [
    { label: "50%", value: EProfit.half },
    { label: "100%", value: EProfit.full },
  ],
  productCategory: [
    { label: "CPU", value: EProductType.cpu },
    { label: "RAM", value: EProductType.ram },
    { label: "VGA", value: EProductType.vga },
    { label: "HDD", value: EProductType.hdd },
    { label: "SSD", value: EProductType.ssd },
    { label: "PSU", value: EProductType.psu },
    { label: "MAINBOARD", value: EProductType.mainboard },
    { label: "MONITOR", value: EProductType.monitor },
    { label: "PRINTER", value: EProductType.printer },
    { label: "FAX", value: EProductType.fax },
    { label: "LAPTOP", value: EProductType.laptop },
    { label: "PC SET", value: EProductType.pcSet },
  ],
  cpuProducer: [
    { label: "INTEL", value: EProducer.intel },
    { label: "AMD", value: EProducer.amd },
  ],
  ramProducer: [
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "CORSAIR", value: EProducer.corsair },
    { label: "KINGSTON", value: EProducer.kingston },
  ],
  vgaProducer: [
    { label: "ASUS", value: EProducer.asus },
    { label: "ASROCK", value: EProducer.asrock },
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "MSI", value: EProducer.msi },
  ],
  hddProducer: [
    { label: "SEAGATE", value: EProducer.seagate },
    { label: "WESTERN", value: EProducer.western },
  ],
  ssdProducer: [
    { label: "SEAGATE", value: EProducer.seagate },
    { label: "WESTERN", value: EProducer.western },
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "SAMSUNG", value: EProducer.samsung },
  ],
  psuProducer: [
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "CORSAIR", value: EProducer.corsair },
    { label: "DEEPCOOL", value: EProducer.deepcool },
    { label: "COOLERMASTER", value: EProducer.coolermaster },
  ],
  mainboardProducer: [
    { label: "ASUS", value: EProducer.asus },
    { label: "ASROCK", value: EProducer.asrock },
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "MSI", value: EProducer.msi },
  ],
  monitorProducer: [
    { label: "SAMSUNG", value: EProducer.samsung },
    { label: "LG", value: EProducer.lg },
    { label: "VIEWSONIC", value: EProducer.viewsonic },
  ],
  printerProducer: [{ label: "SAMSUNG", value: EProducer.samsung }],
  faxProducer: [{ label: "SAMSUNG", value: EProducer.samsung }],
  laptopProducer: [
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "MSI", value: EProducer.msi },
    { label: "ASUS", value: EProducer.asus },
    { label: "DELL", value: EProducer.dell },
    { label: "HP", value: EProducer.hp },
  ],

  // COURSE
  courseCategory: [
    { label: "MINDSET", value: ECourseCategory.mindset },
    { label: "MOBILE", value: ECourseCategory.mobile },
    { label: "FRONTEND", value: ECourseCategory.frontEnd },
    { label: "BACKEND", value: ECourseCategory.backEnd },
    { label: "FULLSTACK", value: ECourseCategory.fullStack },
    { label: "DESIGN", value: ECourseCategory.design },
  ],
  dateType: [
    { label: "????????? + ????????? + ?????????", value: EDateType.even },
    { label: "????????? + ????????? + ?????????", value: EDateType.odd },
    { label: "????????? + ?????????", value: EDateType.last },
  ],
  branch: [
    { label: "???", value: EBranch.one },
    { label: "???", value: EBranch.two },
  ],

  // COMMON
  sortBy: [
    { label: "??????", value: ESortBy.newest },
    { label: "??????", value: ESortBy.oldest },
  ],
  userFilter: [
    { label: "??????", value: "all" },
    { label: "??????", value: ERole.admin },
    { label: "??????", value: ERole.user },
  ],
  productFilter: [
    { label: "??????", value: "all" },
    { label: "CPU", value: EProductType.cpu },
    { label: "RAM", value: EProductType.ram },
    { label: "VGA", value: EProductType.vga },
    { label: "HDD", value: EProductType.hdd },
    { label: "SSD", value: EProductType.ssd },
    { label: "PSU", value: EProductType.psu },
    { label: "MAINBOARD", value: EProductType.mainboard },
    { label: "MONITOR", value: EProductType.monitor },
    { label: "PRINTER", value: EProductType.printer },
    { label: "FAX", value: EProductType.fax },
    { label: "LAPTOP", value: EProductType.laptop },
    { label: "PC SET", value: EProductType.pcSet },
  ],
  courseFilter: [
    { label: "??????", value: "all" },
    { label: "MINDSET", value: ECourseCategory.mindset },
    { label: "MOBILE", value: ECourseCategory.mobile },
    { label: "FRONTEND", value: ECourseCategory.frontEnd },
    { label: "BACKEND", value: ECourseCategory.backEnd },
    { label: "FULLSTACK", value: ECourseCategory.fullStack },
    { label: "DESIGN", value: ECourseCategory.design },
  ],
  orderFilter: [
    { label: "??????", value: "all" },
    { label: "??????", value: EStatus.paid },
    { label: "????????????", value: EStatus.waiting },
    { label: "?????????????????????", value: EStatus.delivering },
  ],
  movieFilter: [
    { label: "??????", value: 0 },
    { label: "????????????", value: EMovieStatus.showing },
    { label: "?????????", value: EMovieStatus.comming },
  ],
};

type optionsEng = typeof optionsEng;
type optionsVn = typeof optionsVn;
type optionsCh = typeof optionsCh;

export type IOptionsLang = optionsEng | optionsCh | optionsVn | undefined;
