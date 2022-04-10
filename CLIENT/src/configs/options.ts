import { EPaymentTypes, EShipmentType } from "../models/Order";
import { EWard, EDistrict, EProvince } from "./../models/Shipment";

export const optionsEng = {
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
    { label: "Cash", value: EPaymentTypes.cash, icon: "../img/icon/cash.png" },
    {
      label: "Zalo - Pay",
      value: EPaymentTypes.zalo,
      icon: "../img/icon/zalo.png",
    },
    {
      label: "VIB - Bank",
      value: EPaymentTypes.vib,
      icon: "../img/icon/vib.png",
    },
  ],
};

export const optionsVn = {
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
      icon: "../img/icon/cash.png",
    },
    {
      label: "Ứng dụng Zalo - Pay",
      value: EPaymentTypes.zalo,
      icon: "../img/icon/zalo.png",
    },
    {
      label: "Ngân hàng quốc tế VIB",
      value: EPaymentTypes.vib,
      icon: "../img/icon/vib.png",
    },
  ],
};