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
      { label: "Ba Dinh", value: EWard.baĐinh },
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
    { label: "ĐANG CHIẾU", value: EMovieStatus.showing },
    { label: "SẮP CHIẾU", value: EMovieStatus.comming },
  ],
  movieCountry: [
    { label: "MỸ", value: EMovieCountry.america },
    { label: "ÚC", value: EMovieCountry.australia },
    { label: "TRUNG QUỐC", value: EMovieCountry.china },
    { label: "HÀN QUỐC", value: EMovieCountry.korean },
    { label: "ANH QUỐC", value: EMovieCountry.england },
    { label: "VIỆT NAM", value: EMovieCountry.vietnam },
  ],
  movieType: [
    { label: "HÀNH ĐỘNG", value: EMovieType.action },
    { label: "PHIÊU LƯU", value: EMovieType.adventure },
    { label: "HÀI HƯỚC", value: EMovieType.comedy },
    { label: "TÂM LÝ", value: EMovieType.drama },
    { label: "KINH DỊ", value: EMovieType.horror },
    { label: "KHOA HỌC VIỄN TƯỞNG", value: EMovieType.sciFi },
    { label: "GIẬT GÂN", value: EMovieType.thriller },
  ],

  // ORDER
  orderStatus: [
    { label: "ĐÃ THANH TOÁN", value: EStatus.paid },
    { label: "ĐANG XỬ LÝ", value: EStatus.waiting },
    { label: "ĐANG GIAO", value: EStatus.delivering },
  ],
  province: [
    { label: "Hồ Chí Minh", value: EProvince.HCM },
    { label: "Hà Nội", value: EProvince.HN },
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
      { label: "Hoàn Kiếm", value: EWard.hoanKiem },
      { label: "Đống Đa", value: EWard.dongDa },
      { label: "Ba Đình", value: EWard.baĐinh },
      { label: "Hai Bà Trưng", value: EWard.haiBaTrung },
      { label: "Hoàng Mai", value: EWard.hoangMai },
      { label: "Thanh Xuân", value: EWard.thanhXuan },
      { label: "Long Biên", value: EWard.longBien },
      { label: "Nam Từ Liêm", value: EWard.namTuLiem },
      { label: "Bac Từ Liêm", value: EWard.bacTuLiem },
      { label: "Tây Hồ", value: EWard.tayHo },
      { label: "Cầu Giấy", value: EWard.cauGiay },
      { label: "Hà Đông", value: EWard.haDong },
    ],
    district: [
      { label: "Ba Vì", value: EDistrict.baVi },
      { label: "Chương Mỹ", value: EDistrict.chuongMy },
      { label: "Phúc Thọ", value: EDistrict.phucTho },
      { label: "Đan Phượng", value: EDistrict.danPhuong },
      { label: "Đông Anh", value: EDistrict.dongAnh },
      { label: "Gia Lâm", value: EDistrict.giaLam },
      { label: "Hoài Đức", value: EDistrict.hoaiDuc },
      { label: "Mê Linh", value: EDistrict.meLinh },
      { label: "Mỹ Đức", value: EDistrict.myDuc },
      { label: "Phú Xuyên", value: EDistrict.phuXuyen },
      { label: "Quốc Oai", value: EDistrict.quocOai },
      { label: "Sóc Sơn", value: EDistrict.socSon },
      { label: "Thạch Thất", value: EDistrict.thachThat },
      { label: "Thanh Oai", value: EDistrict.thanhOai },
      { label: "Thường Tín", value: EDistrict.thuongTin },
      { label: "Ứng Hoà", value: EDistrict.ungHoa },
      { label: "Thanh Trì", value: EDistrict.thanhTri },
    ],
  },
  shipmentType: [
    { label: "Nhận tại cửa hàng", value: EShipmentType.noShipment },
    { label: "Giao hàng tận nơi", value: EShipmentType.delivery },
  ],
  paymentType: [
    {
      label: "Tiền mặt",
      value: EPaymentTypes.cash,
      icon: "/img/icon/cash.png",
    },
    {
      label: "Ứng dụng Zalo - Pay",
      value: EPaymentTypes.zalo,
      icon: "/img/icon/zalo.png",
    },
    {
      label: "Ngân hàng quốc tế VIB",
      value: EPaymentTypes.vib,
      icon: "/img/icon/vib.png",
    },
  ],

  // USER
  role: [
    { label: "Quản trị", value: ERole.admin },
    { label: "Khách hàng", value: ERole.user },
  ],
  gender: [
    { label: "Nam", value: EGender.male },
    { label: "Nữ", value: EGender.female },
  ],

  // PRODUCT
  productStatus: [
    { label: "Mới", value: EProductStatus.new },
    { label: "Mới 90%", value: EProductStatus.secondHand },
  ],
  inventoryStatus: [
    { label: "Còn hàng", value: EInventoryStatus.inStock },
    { label: "Hết hàng", value: EInventoryStatus.outOfStock },
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
    { label: "Mới nhất", value: ESortBy.newest },
    { label: "Cũ nhất", value: ESortBy.oldest },
  ],
  userFilter: [
    { label: "Tất cả", value: "all" },
    { label: "Quản trị", value: ERole.admin },
    { label: "Khách hàng", value: ERole.user },
  ],
  productFilter: [
    { label: "Tất cả", value: "all" },
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
    { label: "Tất cả", value: "all" },
    { label: "MINDSET", value: ECourseCategory.mindset },
    { label: "MOBILE", value: ECourseCategory.mobile },
    { label: "FRONTEND", value: ECourseCategory.frontEnd },
    { label: "BACKEND", value: ECourseCategory.backEnd },
    { label: "FULLSTACK", value: ECourseCategory.fullStack },
    { label: "DESIGN", value: ECourseCategory.design },
  ],
  orderFilter: [
    { label: "Tất cả", value: "all" },
    { label: "ĐÃ THANH TOÁN", value: EStatus.paid },
    { label: "ĐANG XỬ LÝ", value: EStatus.waiting },
    { label: "ĐANG GIAO", value: EStatus.delivering },
  ],
  movieFilter: [
    { label: "Tất cả", value: 0 },
    { label: "ĐANG CHIẾU", value: EMovieStatus.showing },
    { label: "SẮP CHIẾU", value: EMovieStatus.comming },
  ],
};

export const optionsCh = {
  // MOVIE
  movieStatus: [
    { label: "正在上映", value: EMovieStatus.showing },
    { label: "快来了", value: EMovieStatus.comming },
  ],
  movieCountry: [
    { label: "美国", value: EMovieCountry.america },
    { label: "澳大利亚", value: EMovieCountry.australia },
    { label: "中国", value: EMovieCountry.china },
    { label: "韩国", value: EMovieCountry.korean },
    { label: "英国", value: EMovieCountry.england },
    { label: "越南", value: EMovieCountry.vietnam },
  ],
  movieType: [
    { label: "行动", value: EMovieType.action },
    { label: "冒险", value: EMovieType.adventure },
    { label: "喜剧", value: EMovieType.comedy },
    { label: "戏剧", value: EMovieType.drama },
    { label: "恐怖", value: EMovieType.horror },
    { label: "科幻", value: EMovieType.sciFi },
    { label: "惊悚片", value: EMovieType.thriller },
  ],

  // ORDER
  orderStatus: [
    { label: "支付", value: EStatus.paid },
    { label: "等待进展", value: EStatus.waiting },
    { label: "交货正在进行中", value: EStatus.delivering },
  ],
  province: [
    { label: "吴志明市", value: EProvince.HCM },
    { label: "河内市", value: EProvince.HN },
  ],
  HCM: {
    ward: [
      { label: "一", value: EWard.one },
      { label: "二", value: EWard.two },
      { label: "三", value: EWard.three },
      { label: "四", value: EWard.four },
      { label: "五", value: EWard.five },
      { label: "六", value: EWard.six },
      { label: "七", value: EWard.seven },
      { label: "八", value: EWard.eight },
      { label: "九", value: EWard.nine },
      { label: "十", value: EWard.ten },
      { label: "十一", value: EWard.eleven },
      { label: "十二", value: EWard.twelve },
      { label: "十三", value: EWard.thirteen },
      { label: "十四", value: EWard.fourteen },
    ],
    district: [
      { label: "一", value: EDistrict.one },
      { label: "二", value: EDistrict.two },
      { label: "三", value: EDistrict.three },
      { label: "四", value: EDistrict.four },
      { label: "五", value: EDistrict.five },
      { label: "六", value: EDistrict.six },
      { label: "七", value: EDistrict.seven },
      { label: "八", value: EDistrict.eight },
      { label: "九", value: EDistrict.nine },
      { label: "十", value: EDistrict.ten },
      { label: "十一", value: EDistrict.eleven },
      { label: "十二", value: EDistrict.twelve },
    ],
  },
  HN: {
    ward: [
      { label: "还剑", value: EWard.hoanKiem },
      { label: "东大", value: EWard.dongDa },
      { label: "巴亭", value: EWard.baĐinh },
      { label: "海巴中", value: EWard.haiBaTrung },
      { label: "黄迈", value: EWard.hoangMai },
      { label: "青春", value: EWard.thanhXuan },
      { label: "龙边", vbianalue: EWard.longBien },
      { label: "南都廉", value: EWard.namTuLiem },
      { label: "北都廉", value: EWard.bacTuLiem },
      { label: "西湖", value: EWard.tayHo },
      { label: "考嘉", value: EWard.cauGiay },
      { label: "河东", value: EWard.haDong },
    ],
    district: [
      { label: "巴维", value: EDistrict.baVi },
      { label: "章美", value: EDistrict.chuongMy },
      { label: "乐寿", value: EDistrict.phucTho },
      { label: "丹芳", value: EDistrict.danPhuong },
      { label: "东英", value: EDistrict.dongAnh },
      { label: "嘉林", value: EDistrict.giaLam },
      { label: "会德", value: EDistrict.hoaiDuc },
      { label: "美玲", value: EDistrict.meLinh },
      { label: "美德", value: EDistrict.myDuc },
      { label: "富雪", value: EDistrict.phuXuyen },
      { label: "国哇", value: EDistrict.quocOai },
      { label: "朔山", value: EDistrict.socSon },
      { label: "石七", value: EDistrict.thachThat },
      { label: "青哇", value: EDistrict.thanhOai },
      { label: "常识", value: EDistrict.thuongTin },
      { label: "配对", value: EDistrict.ungHoa },
      { label: "清治", value: EDistrict.thanhTri },
    ],
  },
  shipmentType: [
    { label: "在商店取货", value: EShipmentType.noShipment },
    { label: "交货", value: EShipmentType.delivery },
  ],
  paymentType: [
    { label: "现金", value: EPaymentTypes.cash, icon: "/img/icon/cash.png" },
    {
      label: "Zalo 应用程序 - 支付",
      value: EPaymentTypes.zalo,
      icon: "/img/icon/zalo.png",
    },
    {
      label: "VIB国际银行",
      value: EPaymentTypes.vib,
      icon: "/img/icon/vib.png",
    },
  ],

  // USER
  role: [
    { label: "管理", value: ERole.admin },
    { label: "客户", value: ERole.user },
  ],
  gender: [
    { label: "男性", value: EGender.male },
    { label: "女性", value: EGender.female },
  ],

  // PRODUCT
  productStatus: [
    { label: "全新", value: EProductStatus.new },
    { label: "90% 全新", value: EProductStatus.secondHand },
  ],
  inventoryStatus: [
    { label: "有存货", value: EInventoryStatus.inStock },
    { label: "缺货", value: EInventoryStatus.outOfStock },
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
    { label: "星期一 + 星期三 + 星期五", value: EDateType.even },
    { label: "星期二 + 星期四 + 星期六", value: EDateType.odd },
    { label: "星期六 + 星期日", value: EDateType.last },
  ],
  branch: [
    { label: "一", value: EBranch.one },
    { label: "二", value: EBranch.two },
  ],

  // COMMON
  sortBy: [
    { label: "最新", value: ESortBy.newest },
    { label: "最老", value: ESortBy.oldest },
  ],
  userFilter: [
    { label: "全部", value: "all" },
    { label: "管理", value: ERole.admin },
    { label: "客户", value: ERole.user },
  ],
  productFilter: [
    { label: "全部", value: "all" },
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
    { label: "全部", value: "all" },
    { label: "MINDSET", value: ECourseCategory.mindset },
    { label: "MOBILE", value: ECourseCategory.mobile },
    { label: "FRONTEND", value: ECourseCategory.frontEnd },
    { label: "BACKEND", value: ECourseCategory.backEnd },
    { label: "FULLSTACK", value: ECourseCategory.fullStack },
    { label: "DESIGN", value: ECourseCategory.design },
  ],
  orderFilter: [
    { label: "全部", value: "all" },
    { label: "支付", value: EStatus.paid },
    { label: "等待进展", value: EStatus.waiting },
    { label: "交货正在进行中", value: EStatus.delivering },
  ],
  movieFilter: [
    { label: "全部", value: 0 },
    { label: "正在上映", value: EMovieStatus.showing },
    { label: "快来了", value: EMovieStatus.comming },
  ],
};

type optionsEng = typeof optionsEng;
type optionsVn = typeof optionsVn;
type optionsCh = typeof optionsCh;

export type IOptionsLang = optionsEng | optionsCh | optionsVn | undefined;
