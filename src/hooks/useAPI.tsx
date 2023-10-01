import { useState, useEffect, useCallback } from "react";

import mocks from "./mocks.json";

const REQUEST_TIME_MS = 1000;
const MOCKS: Record<string, Array<any>> = mocks;

const useAPI = <Type,>(
  resource: string,
  filter?: Record<string, any>
): { data: Type; loading: boolean } => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    return new Promise((resolve) => setTimeout(resolve, REQUEST_TIME_MS))
      .then(() => {
        if (filter) {
          const mockData = MOCKS[resource];
          const filteredData = Object.keys(filter).reduce((acc, key) => {
            return acc.filter((item: any) => {
              return item[key] === filter[key];
            });
          }, mockData);
          setData(filteredData);
        } else {
          setData(MOCKS[resource]);
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [resource]);

  return { data, loading };
};

export default useAPI;
