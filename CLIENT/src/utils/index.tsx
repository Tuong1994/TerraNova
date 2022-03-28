import * as lang from "../translate";

const utils = {
  checkObjectEmpty: (obj: any) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return true;
      }
    }
    return false;
  },
  changeLang: (l: string) => {
    if (l == "VN") {
      return lang.VN;
    } else if (l == "ENG") {
      return lang.ENG;
    }
  },
};

export default utils;
