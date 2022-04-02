import * as lang from "../translate";
import { toast } from "react-toastify";

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
};

export default utils;
