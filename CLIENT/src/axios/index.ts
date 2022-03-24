import axios from "axios";

enum EMethod {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Delete = "DELETE",
}

const axiosClient = {
  get: (apiPath: string, query?: string) => {
    if (query) {
      const call = axios({
        url: apiPath + query,
        method: EMethod.Get,
      });
      return call;
    } else {
      const call = axios({
        url: apiPath,
        method: EMethod.Get,
      });
      return call;
    }
  },
  
  post: (apiPath: string, data: object = {}) => {
    const call = axios({
      url: apiPath,
      method: EMethod.Post,
      data: data,
    });
    return call;
  },
};

export default axiosClient;
