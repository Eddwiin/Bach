import { useForm } from 'react-hook-form';
import FormGroup from '../../../UI/form-group/FormGroup';
import Button from '../../../UI/button/Button';
import useErrorValidationMessage from '../../../hooks/error-validation-message.hook';

const FORM_LOGIN_IDS = {
  email: 'email',
  password: 'password'
} as const;

type FormValue = typeof FORM_LOGIN_IDS;

export default function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormValue>({
    mode: 'onChange'
  });

  const { getErrorMessageForRequiredField, getErrorMessageForRegexPasswordNotMatch } =
    useErrorValidationMessage();

  const onLogin = () => {};

  return (
    <>
      <form onSubmit={handleSubmit(onLogin)}>
        <FormGroup
          labelText="Email"
          labelProps={{
            htmlFor: `${FORM_LOGIN_IDS.email}`
          }}
          inputProps={{
            inputAttributes: {
              id: `${FORM_LOGIN_IDS.email}`,
              name: 'email',
              type: 'email'
            },
            register: {
              ...register(FORM_LOGIN_IDS.email, {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format'
                }
              })
            },
            formErrorMessage: getErrorMessageForRequiredField(errors.email) || errors.email?.message
          }}
        />

        <FormGroup
          labelText="Password"
          labelProps={{
            htmlFor: `${FORM_LOGIN_IDS.password}`
          }}
          inputProps={{
            inputAttributes: {
              id: `${FORM_LOGIN_IDS.password}`,
              name: 'password',
              type: 'password'
            },
            register: {
              ...register(FORM_LOGIN_IDS.password, {
                required: true,
                minLength: {
                  value: 5,
                  message: 'min length is 5'
                }
              })
            },
            formErrorMessage:
              getErrorMessageForRequiredField(errors.password) ||
              getErrorMessageForRegexPasswordNotMatch(errors.password)
          }}
        />

        <Button
          buttonAttributes={{
            type: 'submit',
            disabled: !isValid
          }}>
          Login
        </Button>
      </form>
    </>
  );
}
