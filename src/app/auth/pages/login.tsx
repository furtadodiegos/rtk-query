import React from 'react';
import type { FC } from 'react';

import Input from '../../common/components/form/input';
import SubmitButton from '../../common/components/buttons/submit';
import useLogin from '../hooks/useLogin';

const Login: FC = () => {
  const {
    formik: { handleChange, handleSubmit, values, errors },
    schema,
  } = useLogin();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <Input
          {...schema.email}
          value={values.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />

        <Input
          {...schema.password}
          value={values.password}
          onChange={handleChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
        />

        <div>
          <SubmitButton iconType="send" type="submit" disabled={Boolean(Object.keys(errors).length)} />
        </div>
      </form>
    </div>
  );
};

export default Login;
