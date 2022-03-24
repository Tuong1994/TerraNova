const utils = {
  checkObjectEmpty: (obj: any) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return true;
      }
    }
    return false;
  },
};

export default utils;