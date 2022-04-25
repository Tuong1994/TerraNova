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
  
  post: (apiPath: string, data: object = {}, token?: string) => {
    const call = axios({
      url: apiPath,
      method: EMethod.Post,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return call;
  },

  put: (apiPath: string, data: object = {}, query: string) => {
    const call = axios({
      url: apiPath + query,
      method: EMethod.Put,
      data: data,
    })
    return call;
  },

  delete: (apiPath: string, query: string) => {
    const call = axios({
      url: apiPath + query,
      method: EMethod.Delete,
    });
    return call;
  }
};

export default axiosClient;
