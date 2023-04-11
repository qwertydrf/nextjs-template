import { getCarById } from '@/services/cars.service';
import { Car } from '@/types/cars.types';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Cars = () => {
  const router = useRouter();
  const [car, setCar] = useState<Car | undefined>(undefined);

  const getCars = async (id: number) => {
    const car: Car = await getCarById(id);

    if (car?.id) setCar(car);
  };

  useEffect(() => {
    if (router?.query?.id) getCars(+router?.query?.id);
  }, [router?.query]);

  return (
    <>
      <div className="grid grid-flow-col auto-cols-auto flex justify-center">
        {car && (
          <div className="m-1 p-2 border-solid border-2 border-black">
            <div className="text-center">Marca: {car?.brand}</div>
            <Image
              src={car?.logo}
              height={200}
              width={200}
              alt={'logo de la marca'}
            />
            <div className="text-center">Modelo: {car?.model}</div>
            <div className="text-center">Año: {car?.year}</div>
            <Image
              src={car?.image}
              height={200}
              width={200}
              alt={'imagen del auto'}
            />
          </div>
        )}
      </div>
      <div className="pt-8 flex justify-center">
        <button
          className="rounded-full bg-slate-100 pt-4 pl-8 pr-8 pb-4"
          onClick={() => router.back()}
        >
          Volver
        </button>
      </div>
    </>
  );
};

export default Cars;
