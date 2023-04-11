import { Car } from '@/types/cars.types';
import axios, { AxiosResponse } from 'axios';

const endpoint = process.env.NEXT_PUBLIC_ENDPOINT as string;

export const getAllCars = async (): Promise<Car[]> => {
  try {
    const response: AxiosResponse = await axios.request({
      method: 'GET',
      baseURL: endpoint,
      url: '/cars',
    });

    return response?.data as Car[];
  } catch (error: unknown) {
    throw Error(JSON.stringify(error));
  }
};

export const getCarById = async (id: number): Promise<Car> => {
  try {
    const response: AxiosResponse = await axios.request({
      method: 'GET',
      baseURL: endpoint,
      url: `/cars/${id}`,
    });

    return response?.data as Car;
  } catch (error: unknown) {
    throw Error(JSON.stringify(error));
  }
};
