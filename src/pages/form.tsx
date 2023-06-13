import { getAllCars } from '@/services/cars.service';
import signInSchema from '@/validations/signInValidation';
import { ChangeEvent, useState } from 'react';

const Form = () => {
  const [errors, setErrors] = useState<Record<string, boolean>>({
    email: false,
    password: false,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onClickButton = async () => {
    setErrors({});
    const { error } = signInSchema.validate(
      { email, password },
      { abortEarly: false }
    );

    console.log({ error });

    if (error?.details && error?.details?.length > 0) {
      for (const detail of error?.details) {
        if (detail?.context?.key) {
          setErrors((state) => {
            return {
              ...state,
              [detail?.context?.key as string]: true,
            };
          });
        }
      }
    } else {
      setLoading(true);

      const response = await getAllCars();

      setLoading(false);
    }
  };

  return (
    <>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <form>
              <div className="form-group mt-3">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="email@email.com"
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setEmail(event?.target?.value as string)
                  }
                />
                {errors?.email && (
                  <small id="emailError" className="form-text  text-danger">
                    Ingrese un email valido
                  </small>
                )}
              </div>
              <div className="form-group mt-3">
                <label htmlFor="exampleInputPassword1">Contraseña</label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  placeholder="contraseña"
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setPassword(event?.target?.value as string)
                  }
                />
                {errors?.password && (
                  <small id="emailError" className="form-text text-danger">
                    Ingrese una contraseña valida
                  </small>
                )}
              </div>
              <button
                type="button"
                className="btn btn-primary mt-5"
                onClick={onClickButton}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <>
                      <span>Cargando</span>
                      <div
                        className="spinner-grow spinner-grow-sm text-light ml-2"
                        role="status"
                      >
                        <span className="sr-only"></span>
                      </div>
                    </>
                  </>
                ) : (
                  'Ingresar'
                )}
              </button>
            </form>
          </div>{' '}
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};

export default Form;
