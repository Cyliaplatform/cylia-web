import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL as string;

const Axios: AxiosInstance = axios.create({
  baseURL: `${baseURL}`,
  timeout: 20000,
});

Axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if (!navigator.onLine) {
      throw new Error("No internet connection.");
    }

    // Normalize URL to avoid duplicated base paths (e.g. /api/v1/api/v1/...)
    // If the request `url` already includes the `baseURL` prefix, strip it
    // so axios does not concatenate them resulting in double prefixes.
    try {
      const base = String(config.baseURL || "");
      if (config.url && base) {
        if (config.url.startsWith(base)) {
          config.url = config.url.substring(base.length) || "/";
        } else if (config.url.startsWith(`/${base}`)) {
          config.url = config.url.substring(base.length + 1) || "/";
        }

        if (!config.url.startsWith("/")) config.url = `/${config.url}`;
      }
    } catch {
      // ignore normalization errors and continue with original config
    }

    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  },
);

Axios.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (error: AxiosError): Promise<never> => {
    return Promise.reject(error);
  },
);

export default Axios;