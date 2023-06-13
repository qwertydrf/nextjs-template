import TestProvider, { TestContext } from '@/contexts/testContext';
import useBearStore from '@/stores/bearStore';
import { useRouter } from 'next/router';
import { useContext } from 'react';

const Landing = (test: any) => {
  const router = useRouter();
  const { count } = useBearStore();
  const { loading } = useContext(TestContext);

  return (
    <>
      {!loading ? (
        <div className="container">
          <div className="row">
            <div className="col-12 justify-content-center">count {count}</div>
            <div className="col-12 justify-content-center">
              <button
                className="btn btn-primary"
                onClick={() => router.push('/cars')}
              >
                Ver catalogo de autos
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>Loading</>
      )}
    </>
  );
};

export default Landing;
