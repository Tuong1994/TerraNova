import { EWard, EDistrict, EProvince } from "./../models/Shipment";

const options = {
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
  province: [
    { label: "HCM", value: EProvince.HCM },
    { label: "HN", value: EProvince.HN },
  ],
};

export default options;
