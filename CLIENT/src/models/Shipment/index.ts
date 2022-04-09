export enum EWard {
  one = 1,
  two = 2,
  three = 3,
  four = 4,
  five = 5,
  six = 6,
  seven = 7,
  eight = 8,
  nine = 9,
  ten = 10,
  eleven = 11,
  twelve = 12,
  thirteen = 13,
  fourteen = 14,
  hoanKiem = 15,
  dongDa = 16,
  baĐinh = 17,
  haiBaTrung = 18,
  hoangMai = 19,
  thanhXuan = 20,
  longBien = 21,
  namTuLiem = 22,
  bacTuLiem = 23,
  tayHo = 24,
  cauGiay = 25,
  haDong = 26,
}

export enum EDistrict {
  one = 1,
  two = 2,
  three = 3,
  four = 4,
  five = 5,
  six = 6,
  seven = 7,
  eight = 8,
  nine = 9,
  ten = 10,
  eleven = 11,
  twelve = 12,
  baVi = 13,
  chuongMy = 14,
  phucTho = 15,
  danPhuong = 16,
  dongAnh = 17,
  giaLam = 18,
  hoaiDuc = 19,
  meLinh = 20,
  myDuc = 21,
  phuXuyen = 22,
  quocOai = 23,
  socSon = 24,
  thachThat = 25,
  thanhOai = 26,
  thuongTin = 27,
  ungHoa = 28,
  thanhTri = 29,
}

export enum EProvince {
  HCM = 1,
  HN = 2,
}

export interface IShipment {
  userId?: string;
  userName?: string;
  phone?: string;
  email?: string;
  address?: string;
  ward?: string;
  district?: string;
  province?: string;
}
