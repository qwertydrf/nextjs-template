import { getAllCars } from '@/services/cars.service';
import { Car } from '@/types/cars.types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Cars = () => {
  const router = useRouter();
  const [cars, setCars] = useState<Car[]>([]);

  const getCars = async () => {
    const cars: Car[] = await getAllCars();

    if (cars?.length > 0) setCars(cars);
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <>
      <div className="grid grid-flow-col auto-cols-auto flex justify-center">
        {cars?.length > 0 &&
          cars.map((car: Car, index: number) => {
            const { id, brand, model, year, image, logo } = car;
            return (
              <div
                key={`car_${index}`}
                className="m-1 p-2 border-solid border-2 border-black cursor-pointer"
                onClick={() => router.push(`/cars/${id}`)}
              >
                {/* <div className="text-center">Marca: {brand}</div>
              <Image
                src={logo}
                height={200}
                width={200}
                alt={'logo de la marca'}
              />
              <div className="text-center">Modelo: {model}</div>
              <div className="text-center">Año: {year}</div> */}
                <Image
                  src={image}
                  height={200}
                  width={200}
                  alt={'imagen del auto'}
                />
              </div>
            );
          })}
      </div>
      <div className="pt-8 flex justify-center">
        <button
          className="rounded-full bg-slate-100 pt-4 pl-8 pr-8 pb-4"
          onClick={() => router.replace('/')}
        >
          Home
        </button>
      </div>
    </>
  );
};

export default Cars;
