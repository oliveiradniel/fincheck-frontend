import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
} from "axios";

import toast from "react-hot-toast";

import { localStorageKeys } from "@/app/config/localStorageKeys";

import type {
  HttpRequestConfig,
  HttpClientInterface,
} from "./HttpClientInterface";

function mapToAxiosConfig(config?: HttpRequestConfig): AxiosRequestConfig {
  return {
    headers: config?.headers,
    params: config?.params,
  };
}

export class AxiosHttpClient implements HttpClientInterface {
  private instance: AxiosInstance;

  private setAuthorizationHeader() {
    this.instance.interceptors.request.use(async (config) => {
      const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

      if (accessToken && config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    });
  }

  private setSessionClear(onClearSession?: () => void) {
    this.instance.interceptors.response.use(null, (error: AxiosError) => {
      if (error.response?.status === 401 && onClearSession) {
        onClearSession();

        toast.error("Sua sessão expirou!");
      }

      if (!error.response && onClearSession) {
        onClearSession();

        toast.error("Não foi possível conectar à API. Você foi deslogado.");
      }

      return Promise.reject(error);
    });
  }

  constructor(baseURL: string, onClearSession?: () => void) {
    this.instance = axios.create({ baseURL });

    this.setAuthorizationHeader();
    this.setSessionClear(onClearSession);
  }

  async get<T>(path: string, config?: HttpRequestConfig): Promise<T> {
    const axiosConfig = mapToAxiosConfig(config);

    const response = await this.instance.get<T>(path, axiosConfig);

    return response.data;
  }

  async post<T>(
    path: string,
    data: unknown,
    config?: HttpRequestConfig,
  ): Promise<T> {
    const axiosConfig = mapToAxiosConfig(config);

    const response = await this.instance.post<T>(path, data, axiosConfig);

    return response.data;
  }

  async put<T>(
    path: string,
    data: unknown,
    config: HttpRequestConfig,
  ): Promise<T> {
    const axiosConfig = mapToAxiosConfig(config);

    const response = await this.instance.put<T>(path, data, axiosConfig);

    return response.data;
  }

  delete(path: string, config: HttpRequestConfig) {
    const axiosConfig = mapToAxiosConfig(config);

    return this.instance.delete(path, axiosConfig);
  }
}
