import * as lang from "../translate";
import { toast } from "react-toastify";
import { optionsCh, optionsEng, optionsVn } from "../configs/options";
import { EDistrict } from "../models/Shipment";
import { ELangs } from "../interfaces/lang";

const utils = {
  checkObjectEmpty: (obj: any) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return true;
      }
    }
    return false;
  },
  checkKeyNumberType: (e: any, messages?: string) => {
    const listKeyType = [
      48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102,
      103, 104, 105, 189, 187,
    ];
    const inValid = listKeyType.find((v: number) => v === e.which);
    if (!inValid) {
      toast.error(messages);
      return;
    }
  },
  changeLang: (l: string) => {
    if (l === ELangs.VN) {
      return lang.VN;
    } else if (l === ELangs.ENG) {
      return lang.ENG;
    } else if (l === ELangs.CH) {
      return lang.CH;
    }
  },
  uuid: () => {
    let dt = new Date().getTime();

    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
  },
  getShipmentFee: (province: number | string, district: number | string) => {
    if (
      district === EDistrict.one ||
      district === EDistrict.three ||
      district === EDistrict.five ||
      district === EDistrict.six ||
      district === EDistrict.ten ||
      district === EDistrict.eleven
    ) {
      return 30000;
    } else if (
      district === EDistrict.two ||
      district === EDistrict.four ||
      district === EDistrict.twelve
    ) {
      return 50000;
    } else if (
      district === EDistrict.seven ||
      district === EDistrict.eight ||
      district === EDistrict.nine
    ) {
      return 80000;
    }
  },
  getOptionByLang: (lang: string) => {
    if (lang === ELangs.ENG) {
      return optionsEng;
    } else if (lang === ELangs.VN) {
      return optionsVn;
    } else if (lang === ELangs.CH) {
      return optionsCh;
    }
  },
};

export default utils;
