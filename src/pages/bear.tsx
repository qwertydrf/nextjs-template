import { getAllCars } from '@/services/cars.service';
import useBearStore from '@/stores/bearStore';
import signInSchema from '@/validations/signInValidation';
import { ChangeEvent, useState } from 'react';

const Form = () => {
  const { count, add, remove } = useBearStore();

  return (
    <>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={() => remove()}>
              remove
            </button>
          </div>
          <div className="col-4">Contador de osos: {count}</div>
          <div className="col-4">
            <button className="btn btn-primary" onClick={() => add(1)}>
              add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
