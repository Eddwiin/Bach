import { createContext, ReactNode } from "react";
import { FieldError } from "react-hook-form";

type ErrorValidationMessageContextType = {
  getErrorMessageForRequiredField: (
    fieldError: FieldError | undefined
  ) => string | undefined;
  getErrorMessageForMaxLengthExceeded: (
    fieldError: FieldError | undefined
  ) => string | undefined;
  getErrorMessageForRegexPasswordNotMatch: (
    fieldError: FieldError | undefined
  ) => string | undefined;
};

const ErrorValidationMessageContext =
  createContext<ErrorValidationMessageContextType | null>(null);

const ErrorValidationMessageContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const getErrorMessageForRegexPasswordNotMatch = (
    fieldError: FieldError | undefined
  ) => {
    if (fieldError && fieldError.type === "minLength") {
      return "Password must be contains 5 characters minimum";
    }
  };

  const getErrorMessageForMaxLengthExceeded = (
    fieldError: FieldError | undefined
  ) => {
    if (fieldError && fieldError.type === "maxLength") {
      return "Max length exceeded";
    }
  };

  const getErrorMessageForRequiredField = (
    fieldError: FieldError | undefined
  ) => {
    if (fieldError && fieldError.type === "required") {
      return "This is required";
    }
  };

  return (
    <ErrorValidationMessageContext.Provider
      value={{
        getErrorMessageForRegexPasswordNotMatch,
        getErrorMessageForMaxLengthExceeded,
        getErrorMessageForRequiredField,
      }}
    >
      {children}
    </ErrorValidationMessageContext.Provider>
  );
};

export { ErrorValidationMessageContext, ErrorValidationMessageContextProvider };
