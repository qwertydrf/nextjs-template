import { ReactNode, createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export const TestContext = createContext({
  loading: false,
});

const URL = 'https://rickandmortyapi.com/api/episode/28';

const TestProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  const doRequest = async () => {
    try {
      setLoading(true);

      const response = await axios.get(URL);

      if (response?.status !== 200) {
        router.push('/401');
      }

      setLoading(false);
    } catch (error: unknown) {
      router.push('/401');
    }
  };

  useEffect(() => {
    doRequest();
  }, []);

  return (
    <TestContext.Provider value={{ loading }}>{children}</TestContext.Provider>
  );
};

export default TestProvider;
