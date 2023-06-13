import Landing from '@/components/landing';
import TestProvider from '@/contexts/testContext';

const Home = () => {
  return (
    <TestProvider>
      <Landing />
    </TestProvider>
  );
};

export default Home;
