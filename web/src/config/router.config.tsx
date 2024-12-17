import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Auth from "../pages/auth/Auth";
import LogIn from "../pages/auth/log-in/Log-in";
import SignUp from "../pages/auth/sign-up/Sign-up";
import { ForgotPassword } from "../pages/auth/forgot-password/Forgot-password";

export const ROUTE_PATH = {
  DEFAULT: "/",
  AUTH: "auth",
  LOG_IN: "log-in",
  SIGN_UP: "sign-up",
  FORGOT_PASSWORD: "forgot-password",
} as const;

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE_PATH.DEFAULT} element={<App />}>
      <Route path={ROUTE_PATH.AUTH} element={<Auth />}>
        <Route path={ROUTE_PATH.LOG_IN} element={<LogIn />} />
        <Route path={ROUTE_PATH.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTE_PATH.FORGOT_PASSWORD} element={<ForgotPassword />} />
      </Route>
    </Route>
  ),
  {
    future: {
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
      v7_partialHydration: true,
    },
  }
);

export default appRouter;
