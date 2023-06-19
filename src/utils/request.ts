import axios from "axios";
import { ElMessage } from "element-plus";
import { getToken } from "./auth";
import type {
  AxiosResponse,
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { useUserStoreHook } from "@/store/modules/users";
import router from "@/router";

const request: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BASE_API}/admin`, // api 的 base_url
  timeout: 30000, // request timeout
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

// 请求拦截
request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (!config.headers) {
      throw new Error(
        `Expected 'config' and 'config.headers' not to be undefined`
      );
    }
    if (config.url && config.url.indexOf("/tools/resetEsIndex") > -1) {
      config.timeout = 900 * 1000;
    }
    const user = useUserStoreHook();
    if (user.sso) {
      (config.headers as any).Authorization = getToken();
    }
    config.withCredentials = true;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截
request.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response;
    const { code, msg, data: responseData } = data;
    const store = useUserStoreHook();
    if (code !== 0) {
      if (code == -32768) {
        ElMessage.error("登录已过期，请重新登录'");
        store.resetToken();
        // 跳转到飞书登录
        router.replace({
          path: "/login",
        });
        return false;
      } else {
        ElMessage.error(msg || "Error");
        return Promise.reject(msg || "Error");
      }
    } else {
      return responseData;
    }
  },
  (error: AxiosError) => {
    ElMessage({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);
export default request;
