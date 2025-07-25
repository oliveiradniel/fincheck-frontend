import axios, { type AxiosInstance } from "axios";

class HttpClient {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });
  }

  get client() {
    return this.instance;
  }
}

export const httpClient = new HttpClient("http://localhost:3001").client;
