import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<unknown>(null);
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
        setError(null);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();

    // setLoading(true);
    // fetch(url)
    //   .then((response) => (response.status === 200 ? response.json() : Error("123")))
    //   .then(setData)
    //   .catch(console.log(error))
    //   .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading, setData };
};

export { useFetch };
