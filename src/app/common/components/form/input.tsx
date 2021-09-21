import React from 'react';
import { TextField } from '@material-ui/core';

import type { FC } from 'react';
import type { TextFieldProps } from '@material-ui/core';

const Input: FC<TextFieldProps> = (props) => {
  return <TextField {...props} />;
};

export default Input;
