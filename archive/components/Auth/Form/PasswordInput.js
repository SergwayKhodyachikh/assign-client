import React, { Fragment, useState } from 'react';
import { MdLockOutline } from 'react-icons/md';
import { Field } from 'react-final-form';
import Label from '../../shared/Field/Label';
import ErrorMsg from '../../shared/Field/ErrorMsg';
import FieldInput from '../../shared/Field/FieldInput';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  showPasswordButton: {
    marginLeft: 'auto',
    fontWeight: 'bold',
    fontSize: '1.3rem',
    color: '#0073b1',
    cursor: 'pointer',
  },
});

const PasswordInput = () => {
  const classes = useStyles();
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleClick = () => setPasswordVisibility(prev => !prev);
  return (
    <Field name="password">
      {({ input, meta }) => (
        <Fragment>
          <Label name={input.name} icon={MdLockOutline}>
            <span className={classes.showPasswordButton} onClick={handleClick}>
              {passwordVisibility ? 'hide' : 'show'}
            </span>
          </Label>
          <FieldInput
            input={input}
            meta={meta}
            type={passwordVisibility ? 'text' : 'password'}
            placeholder="i.e. example@!%$5475347"
          />
          <ErrorMsg meta={meta} />
        </Fragment>
      )}
    </Field>
  );
};

export default PasswordInput;
