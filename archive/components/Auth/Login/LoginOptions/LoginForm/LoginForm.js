import React from 'react';
import { Form } from 'react-final-form';
import Joi from '@hapi/joi';
import generateValidation from 'utils/generateValidation';
import EmailInput from 'components/Auth/Form/EmailInput';
import PasswordInput from 'components/Auth/Form/PasswordInput';
import UserSubmitButton from '../../../Form/UserSubmitButton';
import './LoginForm.scss';
import { useDispatch } from 'react-redux';
import { userLogin } from 'actions/users';

const schema = Joi.object().keys({
  email: Joi.string().min(3).max(255).email({ tlds: false }).required(),
  password: Joi.string().min(5).max(255).required(),
});

const validate = generateValidation(schema);

const LoginForm = () => {
  const dispatch = useDispatch();
  const onSubmit = values => {
    dispatch(userLogin(values));
  };

  return (
    <Form
      validate={validate}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form
          data-test="login-form"
          autoComplete="off"
          onSubmit={handleSubmit}
          className="login__form"
          noValidate
        >
          <EmailInput />
          <PasswordInput />
          <UserSubmitButton value="Sign In" />
        </form>
      )}
    />
  );
};

export default LoginForm;
