import React from 'react';
import { Button, Icon, makeStyles } from '@material-ui/core';

import type { ButtonProps } from '@material-ui/core';
import type { FC } from 'react';

type Icons = 'send';

interface CustomButtonProps extends ButtonProps {
  iconType: Icons;
}

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const SubmitButton: FC<CustomButtonProps> = ({ iconType, ...rest }) => {
  const { button } = useStyles();

  return (
    <Button {...rest} variant="contained" color="primary" className={button} endIcon={<Icon>{iconType}</Icon>}>
      Send
    </Button>
  );
};

export default SubmitButton;
