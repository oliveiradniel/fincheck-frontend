import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

import type {
  HttpRequestConfig,
  IHttpClient,
} from "../../../@types/services/HttpClient";

function mapToAxiosConfig(config?: HttpRequestConfig): AxiosRequestConfig {
  return {
    headers: config?.headers,
    params: config?.params,
  };
}

export class AxiosHttpClient implements IHttpClient {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });
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
}
