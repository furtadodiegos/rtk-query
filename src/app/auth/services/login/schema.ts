import * as Yup from 'yup';

import handleSchemas from '../../../common/services/handleSchemas';

import type { LoginRequest } from '../../types/requests';
import type { Schema } from '../../../common/types/schema';

export default (initialState?: LoginRequest) => {
  const schema: Schema<LoginRequest> = {
    email: {
      id: 'login.email',
      name: 'email',
      label: 'Email',
      placeholder: 'Email',
      value: initialState?.email || 'admin@email.com',
      validation: Yup.string().email().required(),
    },
    password: {
      id: 'login.password',
      name: 'password',
      value: initialState?.password || '123456',
      label: 'Password',
      placeholder: 'Password',
      validation: Yup.string().min(4).max(10).required(),
    },
  };

  return {
    validationSchema: Yup.object().shape(handleSchemas(schema, 'validation')),
    initialValues: handleSchemas(schema, 'value'),
    schema,
  };
};
