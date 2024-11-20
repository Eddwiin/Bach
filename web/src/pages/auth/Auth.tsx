import { Outlet } from "react-router-dom";
import { ErrorValidationMessageContextProvider } from "../../contexts/form-validation/error-validation-message.context";
import { AuthServiceContextProvider } from "./context/auth-provider/auth.provider.context";

export default function Auth() {
  return (
    <ErrorValidationMessageContextProvider>
      <AuthServiceContextProvider>
        <div className="w-3/6">
          Auth works!
          <Outlet />
        </div>
      </AuthServiceContextProvider>
    </ErrorValidationMessageContextProvider>
  );
}
