import { useContext } from "react"
import { ErrorValidationMessageContext } from "../contexts/form-validation/error-validation-message.context"

const useErrorValidationMessage = () => {
    const context = useContext(ErrorValidationMessageContext);
    if (!context) {
        throw new Error('ErrorValidationMessage must be used within a ErrorValidationMessageContextProvider')
    }
    return context;
}

export default useErrorValidationMessage;