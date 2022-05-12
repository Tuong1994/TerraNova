import { EWard, EDistrict, EProvince } from "./../models/Shipment";
import { ELangs } from "../interfaces/lang";

const renderWardEng = (v: number) => {
  switch (v) {
    case EWard.one: {
      return "1";
    }
    case EWard.two: {
      return "2";
    }
    case EWard.three: {
      return "3";
    }
    case EWard.four: {
      return "4";
    }
    case EWard.five: {
      return "5";
    }
    case EWard.six: {
      return "6";
    }
    case EWard.seven: {
      return "7";
    }
    case EWard.eight: {
      return "8";
    }
    case EWard.nine: {
      return "9";
    }
    case EWard.ten: {
      return "10";
    }
    case EWard.eleven: {
      return "11";
    }
    case EWard.twelve: {
      return "12";
    }
    case EWard.thirteen: {
      return "13";
    }
    case EWard.fourteen: {
      return "14";
    }
    case EWard.hoanKiem: {
      return "Hoan Kiem";
    }
    case EWard.dongDa: {
      return "Dong Da";
    }
    case EWard.baĐinh: {
      return "Ba Dinh";
    }
    case EWard.haiBaTrung: {
      return "Hai Ba Trung";
    }
    case EWard.hoangMai: {
      return "Hoang Mai";
    }
    case EWard.thanhXuan: {
      return "Thanh Xuan";
    }
    case EWard.longBien: {
      return "Long Bien";
    }
    case EWard.namTuLiem: {
      return "Nam Tu Liem";
    }
    case EWard.bacTuLiem: {
      return "Bac Tu Liem";
    }
    case EWard.tayHo: {
      return "Tay Ho";
    }
    case EWard.cauGiay: {
      return "Cau Giay";
    }
    case EWard.haDong: {
      return "Ha Dong";
    }
  }
};

const renderWardVn = (v: number) => {
  switch (v) {
    case EWard.one: {
      return "1";
    }
    case EWard.two: {
      return "2";
    }
    case EWard.three: {
      return "3";
    }
    case EWard.four: {
      return "4";
    }
    case EWard.five: {
      return "5";
    }
    case EWard.six: {
      return "6";
    }
    case EWard.seven: {
      return "7";
    }
    case EWard.eight: {
      return "8";
    }
    case EWard.nine: {
      return "9";
    }
    case EWard.ten: {
      return "10";
    }
    case EWard.eleven: {
      return "11";
    }
    case EWard.twelve: {
      return "12";
    }
    case EWard.thirteen: {
      return "13";
    }
    case EWard.fourteen: {
      return "14";
    }
    case EWard.hoanKiem: {
      return "Hoàn Kiếm";
    }
    case EWard.dongDa: {
      return "Đống Đa";
    }
    case EWard.baĐinh: {
      return "Ba Đình";
    }
    case EWard.haiBaTrung: {
      return "Hai Bà Trưng";
    }
    case EWard.hoangMai: {
      return "Hoàng Mai";
    }
    case EWard.thanhXuan: {
      return "Thanh Xuân";
    }
    case EWard.longBien: {
      return "Long Biên";
    }
    case EWard.namTuLiem: {
      return "Nam Từ Liêm";
    }
    case EWard.bacTuLiem: {
      return "Bắc Từ Liêm";
    }
    case EWard.tayHo: {
      return "Tây Hồ";
    }
    case EWard.cauGiay: {
      return "Cầu Giấy";
    }
    case EWard.haDong: {
      return "Hà Đông";
    }
  }
};

const renderWardCh = (v: number) => {
  switch (v) {
    case EWard.one: {
      return "一";
    }
    case EWard.two: {
      return "二";
    }
    case EWard.three: {
      return "三";
    }
    case EWard.four: {
      return "四";
    }
    case EWard.five: {
      return "五";
    }
    case EWard.six: {
      return "六";
    }
    case EWard.seven: {
      return "七";
    }
    case EWard.eight: {
      return "八";
    }
    case EWard.nine: {
      return "九";
    }
    case EWard.ten: {
      return "十";
    }
    case EWard.eleven: {
      return "十一";
    }
    case EWard.twelve: {
      return "十二";
    }
    case EWard.thirteen: {
      return "十三";
    }
    case EWard.fourteen: {
      return "十四";
    }
    case EWard.hoanKiem: {
      return "还剑";
    }
    case EWard.dongDa: {
      return "东大";
    }
    case EWard.baĐinh: {
      return "巴亭";
    }
    case EWard.haiBaTrung: {
      return "海巴中";
    }
    case EWard.hoangMai: {
      return "黄迈";
    }
    case EWard.thanhXuan: {
      return "青春";
    }
    case EWard.longBien: {
      return "龙边";
    }
    case EWard.namTuLiem: {
      return "南都廉";
    }
    case EWard.bacTuLiem: {
      return "北都廉";
    }
    case EWard.tayHo: {
      return "西湖";
    }
    case EWard.cauGiay: {
      return "考嘉";
    }
    case EWard.haDong: {
      return "河东";
    }
  }
};

const renderDistrictEng = (v: number) => {
  switch (v) {
    case EDistrict.one: {
      return "1";
    }
    case EDistrict.two: {
      return "2";
    }
    case EDistrict.three: {
      return "3";
    }
    case EDistrict.four: {
      return "4";
    }
    case EDistrict.five: {
      return "5";
    }
    case EDistrict.six: {
      return "6";
    }
    case EDistrict.seven: {
      return "7";
    }
    case EDistrict.eight: {
      return "8";
    }
    case EDistrict.nine: {
      return "9";
    }
    case EDistrict.ten: {
      return "10";
    }
    case EDistrict.eleven: {
      return "11";
    }
    case EDistrict.twelve: {
      return "12";
    }
    case EDistrict.baVi: {
      return "Ba Vi";
    }
    case EDistrict.chuongMy: {
      return "Chuong My";
    }
    case EDistrict.phucTho: {
      return "Phuc Tho";
    }
    case EDistrict.danPhuong: {
      return "Dan Phuong";
    }
    case EDistrict.dongAnh: {
      return "Dong Anh";
    }
    case EDistrict.giaLam: {
      return "Gia Lam";
    }
    case EDistrict.hoaiDuc: {
      return "Hoai Duc";
    }
    case EDistrict.meLinh: {
      return "Me Linh";
    }
    case EDistrict.myDuc: {
      return "My Duc";
    }
    case EDistrict.phuXuyen: {
      return "Phu Xuyen";
    }
    case EDistrict.quocOai: {
      return "Quoc Oai";
    }
    case EDistrict.socSon: {
      return "Soc Son";
    }
    case EDistrict.thachThat: {
      return "Thach That";
    }
    case EDistrict.thanhOai: {
      return "Thanh Oai";
    }
    case EDistrict.thuongTin: {
      return "Thuong Tin";
    }
    case EDistrict.ungHoa: {
      return "Ung Hoa";
    }
    case EDistrict.thanhTri: {
      return "Thanh Tri";
    }
  }
};

const renderDistrictVn = (v: number) => {
  switch (v) {
    case EDistrict.one: {
      return "1";
    }
    case EDistrict.two: {
      return "2";
    }
    case EDistrict.three: {
      return "3";
    }
    case EDistrict.four: {
      return "4";
    }
    case EDistrict.five: {
      return "5";
    }
    case EDistrict.six: {
      return "6";
    }
    case EDistrict.seven: {
      return "7";
    }
    case EDistrict.eight: {
      return "8";
    }
    case EDistrict.nine: {
      return "9";
    }
    case EDistrict.ten: {
      return "10";
    }
    case EDistrict.eleven: {
      return "11";
    }
    case EDistrict.twelve: {
      return "12";
    }
    case EDistrict.baVi: {
      return "Ba Vi";
    }
    case EDistrict.chuongMy: {
      return "Chương Mỹ";
    }
    case EDistrict.phucTho: {
      return "Phúc Thọ";
    }
    case EDistrict.danPhuong: {
      return "Đan Phượng";
    }
    case EDistrict.dongAnh: {
      return "Đông Anh";
    }
    case EDistrict.giaLam: {
      return "Gia Lâm";
    }
    case EDistrict.hoaiDuc: {
      return "Hoài Đức";
    }
    case EDistrict.meLinh: {
      return "Mê Linh";
    }
    case EDistrict.myDuc: {
      return "Mỹ Đức";
    }
    case EDistrict.phuXuyen: {
      return "Phú Xuyên";
    }
    case EDistrict.quocOai: {
      return "Quốc Oai";
    }
    case EDistrict.socSon: {
      return "Sóc Sơn";
    }
    case EDistrict.thachThat: {
      return "Thạch Thất";
    }
    case EDistrict.thanhOai: {
      return "Thanh Oai";
    }
    case EDistrict.thuongTin: {
      return "Thương Tín";
    }
    case EDistrict.ungHoa: {
      return "Ứng Hoà";
    }
    case EDistrict.thanhTri: {
      return "Thanh Trì";
    }
  }
};

const renderDistrictCh = (v: number) => {
  switch (v) {
    case EDistrict.one: {
      return "一";
    }
    case EDistrict.two: {
      return "二";
    }
    case EDistrict.three: {
      return "三";
    }
    case EDistrict.four: {
      return "四";
    }
    case EDistrict.five: {
      return "五";
    }
    case EDistrict.six: {
      return "六";
    }
    case EDistrict.seven: {
      return "七";
    }
    case EDistrict.eight: {
      return "八";
    }
    case EDistrict.nine: {
      return "九";
    }
    case EDistrict.ten: {
      return "十";
    }
    case EDistrict.eleven: {
      return "十一";
    }
    case EDistrict.twelve: {
      return "shier";
    }
    case EDistrict.baVi: {
      return "巴维";
    }
    case EDistrict.chuongMy: {
      return "章美";
    }
    case EDistrict.phucTho: {
      return "乐寿";
    }
    case EDistrict.danPhuong: {
      return "丹芳";
    }
    case EDistrict.dongAnh: {
      return "东英";
    }
    case EDistrict.giaLam: {
      return "嘉林";
    }
    case EDistrict.hoaiDuc: {
      return "会德";
    }
    case EDistrict.meLinh: {
      return "美玲";
    }
    case EDistrict.myDuc: {
      return "美德";
    }
    case EDistrict.phuXuyen: {
      return "富雪";
    }
    case EDistrict.quocOai: {
      return "国哇";
    }
    case EDistrict.socSon: {
      return "朔山";
    }
    case EDistrict.thachThat: {
      return "石七";
    }
    case EDistrict.thanhOai: {
      return "青哇";
    }
    case EDistrict.thuongTin: {
      return "常识";
    }
    case EDistrict.ungHoa: {
      return "配对";
    }
    case EDistrict.thanhTri: {
      return "清治";
    }
  }
};

const renderProvinceEng = (v: number) => {
  switch (v) {
    case EProvince.HCM: {
      return "Ho Chi Minh City";
    }
    case EProvince.HN: {
      return "Ha Noi City";
    }
  }
};

const renderProvinceVn = (v: number) => {
  switch (v) {
    case EProvince.HCM: {
      return "TP Hồ Chí Minh";
    }
    case EProvince.HN: {
      return "TP Hà Nội";
    }
  }
};

const renderProvinceCh = (v: number) => {
  switch (v) {
    case EProvince.HCM: {
      return "胡志明市";
    }
    case EProvince.HN: {
      return "河内市";
    }
  }
};

const renderWard = (lang: string, v: any) => {
  if (lang === ELangs.ENG) {
    return renderWardEng(Number(v));
  } else if (lang === ELangs.VN) {
    return renderWardVn(Number(v));
  } else if (lang === ELangs.CH) {
    return renderWardCh(Number(v));
  }
};

const renderDistrict = (lang: string, v: any) => {
  if (lang === ELangs.ENG) {
    return renderDistrictEng(Number(v));
  } else if (lang === ELangs.VN) {
    return renderDistrictVn(Number(v));
  } else if (lang === ELangs.CH) {
    return renderDistrictCh(Number(v));
  }
};

const renderProvince = (lang: string, v: any) => {
  if (lang === ELangs.ENG) {
    return renderProvinceEng(Number(v));
  } else if (lang === ELangs.VN) {
    return renderProvinceVn(Number(v));
  } else if (lang === ELangs.CH) {
    return renderProvinceCh(Number(v));
  }
};

export {
  renderWardEng,
  renderWardVn,
  renderWardCh,
  renderDistrictEng,
  renderDistrictVn,
  renderDistrictCh,
  renderProvinceEng,
  renderProvinceVn,
  renderProvinceCh,
  renderWard,
  renderDistrict,
  renderProvince,
};
