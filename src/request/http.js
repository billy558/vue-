import axios from "axios";
const service = axios.create({
  baseURL: "/api", // 设置基础 URL
  timeout: 5000,
  // 其他配置...
});
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 请求前对数据进行处理
    config.data = JSON.stringify(config.data);
    // 表示请求的格式是json格式
    config.headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    console.log("aaaaaaa", response);
    if (response.status === 200) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    console.log("error", error.response);
    window.$message.error(error.response?.data?.msg);
    console.log("error", error.status);
    if (error.status == 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
export default service;
