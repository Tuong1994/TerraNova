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
      const result = axios({
        url: apiPath + query,
        method: EMethod.Get,
      });
      return result;
    } else {
      const result = axios({
        url: apiPath,
        method: EMethod.Get,
      });
      return result;
    }
  },
  
  post: (apiPath: string, data: object = {}) => {
    const result = axios({
      url: apiPath,
      method: EMethod.Post,
      data: data,
    });
    return result;
  },
};

export default axiosClient;
