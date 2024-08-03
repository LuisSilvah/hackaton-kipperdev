import { useState, useEffect } from 'react';

interface FetchOptions extends RequestInit {
  method: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
}

export const useFetch = <T>(url: string, options?: FetchOptions) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result: T = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, error, loading };
};

