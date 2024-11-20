import { createContext, ReactNode } from "react";
import { UserModel } from "../../../../models/user.model";
import getApiUrl from "../../../../utils/get-api-url";

export type UserSignInModel = Pick<
  UserModel,
  "firstName" | "lastName" | "email" | "password"
>;

type AuthServiceContextType = {
  signUp: (userToSave: UserSignInModel) => Promise<Response>;
};

const AuthServiceContext = createContext<AuthServiceContextType | null>(null);

const AuthServiceContextProvider = ({ children }: { children: ReactNode }) => {
  const API_URL = getApiUrl();

  const signUp = (userToSave: UserSignInModel) => {
    return fetch(`${API_URL}/auth/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userToSave),
    }).then((res) => {
      console.log({ res });
    });
  };

  return (
    <AuthServiceContext.Provider
      value={{
        signUp,
      }}
    >
      {children}
    </AuthServiceContext.Provider>
  );
};

export { AuthServiceContext, AuthServiceContextProvider };
