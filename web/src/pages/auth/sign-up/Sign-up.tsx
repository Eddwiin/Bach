import { useForm } from "react-hook-form";
import useErrorValidationMessage from "../../../hooks/error-validation-message.hook";
import Button from "../../../UI/button/Button";
import FormGroup from "../../../UI/form-group/FormGroup";

const FORM_SIGNUP_IDS = {
  firstName: "firstName",
  lastName: "lastName",
  email: "email",
  password: "password",
  confirmationPassword: "confirmationPassword",
} as const;

type FormValue = typeof FORM_SIGNUP_IDS;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValue>({
    mode: "onChange",
  });

  const {
    getErrorMessageForRequiredField,
    getErrorMessageForMaxLengthExceeded,
    getErrorMessageForRegexPasswordNotMatch,
  } = useErrorValidationMessage();

  const onCreateAccount = () => {
    (window as any).electron.doThing();
    console.log("ON CREATE ACCOUNT");
  };

  return (
    <form onSubmit={handleSubmit(onCreateAccount)}>
      <FormGroup
        labelText="First name"
        labelProps={{
          htmlFor: `${FORM_SIGNUP_IDS.firstName}`,
        }}
        inputProps={{
          inputAttributes: {
            id: `${FORM_SIGNUP_IDS.firstName}`,
            name: "firstName",
            type: "text",
          },
          register: {
            ...register(FORM_SIGNUP_IDS.firstName, {
              required: true,
              maxLength: 30,
            }),
          },
          formErrorMessage:
            getErrorMessageForRequiredField(errors.firstName) ||
            getErrorMessageForMaxLengthExceeded(errors.firstName),
        }}
      />

      <FormGroup
        labelText="Last name"
        labelProps={{
          htmlFor: `${FORM_SIGNUP_IDS.lastName}`,
        }}
        inputProps={{
          inputAttributes: {
            id: `${FORM_SIGNUP_IDS.lastName}`,
            name: "lastName",
            type: "text",
          },
          register: {
            ...register(FORM_SIGNUP_IDS.lastName, {
              required: true,
              maxLength: 30,
            }),
          },
          formErrorMessage:
            getErrorMessageForRequiredField(errors.lastName) ||
            getErrorMessageForMaxLengthExceeded(errors.lastName),
        }}
      />

      <FormGroup
        labelText="Email"
        labelProps={{
          htmlFor: `${FORM_SIGNUP_IDS.email}`,
        }}
        inputProps={{
          inputAttributes: {
            id: `${FORM_SIGNUP_IDS.email}`,
            name: "email",
            type: "email",
          },
          register: {
            ...register(FORM_SIGNUP_IDS.email, {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            }),
          },
          formErrorMessage:
            getErrorMessageForRequiredField(errors.email) ||
            errors.email?.message,
        }}
      />

      <FormGroup
        labelText="Password"
        labelProps={{
          htmlFor: `${FORM_SIGNUP_IDS.password}`,
        }}
        inputProps={{
          inputAttributes: {
            id: `${FORM_SIGNUP_IDS.password}`,
            name: "password",
            type: "password",
          },
          register: {
            ...register(FORM_SIGNUP_IDS.password, {
              required: true,
              minLength: {
                value: 5,
                message: "min length is 5",
              },
            }),
          },
          formErrorMessage:
            getErrorMessageForRequiredField(errors.password) ||
            getErrorMessageForRegexPasswordNotMatch(errors.password),
        }}
      />

      <FormGroup
        labelText="Confirmation password"
        labelProps={{
          htmlFor: `${FORM_SIGNUP_IDS.confirmationPassword}`,
        }}
        inputProps={{
          inputAttributes: {
            id: `${FORM_SIGNUP_IDS.confirmationPassword}`,
            name: "confirmPassword",
            type: "password",
          },
          register: {
            ...register(FORM_SIGNUP_IDS.confirmationPassword, {
              required: true,
              minLength: {
                value: 5,
                message: "min length is 5",
              },
            }),
          },
          formErrorMessage:
            getErrorMessageForRequiredField(errors.confirmationPassword) ||
            getErrorMessageForRegexPasswordNotMatch(
              errors.confirmationPassword
            ),
        }}
      />

      <Button
        buttonAttributes={{
          type: "submit",
          disabled: !isValid,
        }}
      >
        Sign Up
      </Button>
    </form>
  );
}
