import { useCallback, useEffect } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import LoginSchema from '../services/login/schema';
import type { LoginRequest } from '../types/requests';
import loginApi from '../api';

const useLogin = () => {
  const { useOnLoginMutation } = loginApi;
  const [login, { isLoading, error, isError }] = useOnLoginMutation();

  const { validationSchema, initialValues, schema } = LoginSchema();

  const onSubmit = useCallback(async (submitValues: LoginRequest) => {
    await login(submitValues);
  }, []);

  const formik = useFormik<LoginRequest>({
    validationSchema,
    initialValues,
    onSubmit,
  });

  useEffect(() => {
    if (isError) {
      if (!error.name) toast(error.message);
      if (error.name) formik.setFieldError(error.name, error.message);
    }
  }, [isError, error]);

  return { formik, schema };
};

export default useLogin;
