import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  return (
    <div className="pt-8 flex justify-center">
      <button
        className="rounded-full bg-slate-100 pt-4 pl-8 pr-8 pb-4"
        onClick={() => router.push('/cars')}
      >
        Ver catalogo de autos
      </button>
    </div>
  );
};

export default Home;
