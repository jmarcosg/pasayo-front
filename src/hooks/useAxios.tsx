import { URL_BACK } from '@/utils/config/globals';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, isAxiosError } from 'axios';
import { useEffect, useState } from 'react';

interface IAxiosConfig extends Omit<AxiosRequestConfig, 'url' | 'method'> {
  endpoint: string;
  requestMethod: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
}

interface IUseAxiosReturn {
  data: null;
  error: AxiosError | string | null;
  isLoading: boolean;
  makeRequest: <T>(body?: any) => Promise<void>;
}

const DEFAULT_HEADERS = {
  withCredentials: true,
};

const useAxios = (
  endpoint: string,
  requestMethod: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' = 'GET',
  options: IAxiosConfig
): IUseAxiosReturn => {
  const [data, setData] = useState<null>(null);
  const [error, setError] = useState<AxiosError | string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const makeRequest = async (body?: object) => {
    try {
      setIsLoading(true);
      const response: AxiosResponse = await axios({
        url: `${URL_BACK}${endpoint}`,
        method: requestMethod,
        headers: {
          ...DEFAULT_HEADERS,
          ...options.headers,
        },
        data: body,
        validateStatus: (status) => {
          switch (status) {
            case 450:
              console.log('450');
              break;
            case 403:
              console.log('403');
              break;
            default:
              break;
          }

          return true;
        },
        ...options,
      });

      if (!isAxiosError(response)) {
        const { data, error } = response.data;

        if (data && !error) {
          setData(data);
        }
        if (!data && error) {
          setError(error);
        }

        setIsLoading(false);
      }
    } catch (err) {
      setError(err as AxiosError); // Cast err to AxiosError for consistency
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    makeRequest(); // Call makeRequest initially, but this can be adjusted based on your needs
  }, []);

  return { data, error, isLoading, makeRequest };
};

export default useAxios;
