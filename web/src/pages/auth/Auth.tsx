import { Outlet } from 'react-router-dom';
import { ErrorValidationMessageContextProvider } from '../../contexts/form-validation/error-validation-message.context';

export default function Auth() {
  return (
    <ErrorValidationMessageContextProvider>
      <div className="w-3/6">
        Auth works!
        <Outlet />
      </div>
    </ErrorValidationMessageContextProvider>
  );
}
