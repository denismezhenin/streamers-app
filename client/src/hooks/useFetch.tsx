import { useEffect, useState } from 'react';
import { showErrorNotification } from '../components/notifications';

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setLoading(false);
        setData(json);
      } catch (err) {
        if (err instanceof Error) showErrorNotification(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, setData };
};

export { useFetch };
