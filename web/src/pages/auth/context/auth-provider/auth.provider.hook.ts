import { useContext } from "react"
import { AuthServiceContext } from "./auth.provider.context";

const useAuthServiceContext = () => {
    const context = useContext(AuthServiceContext)
    if (!context) {
        throw new Error('AuthServiceContext must be used within a AuthServiceContextProvider')
    }
    return context;
}

export default useAuthServiceContext;