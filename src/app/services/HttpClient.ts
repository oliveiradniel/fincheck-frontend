import axios, { type AxiosInstance } from "axios";

import { env } from "../config/env";

class HttpClient {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });
  }

  get client() {
    return this.instance;
  }
}

export const httpClient = new HttpClient(env.API_URL).client;
