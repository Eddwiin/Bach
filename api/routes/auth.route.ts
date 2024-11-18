import { NextFunction, Request, Response, Router } from "npm:express@4.18.2";
import { ROUTE_PATH } from "../config/route-path.Config.ts";
import { AuthController } from "../controllers/auth/auth.controller.ts";

const authRouter = Router();
const authController = new AuthController();

authRouter.post(
    ROUTE_PATH.AUTH.SIGNUP,
    [
        //   firstNameValidator,
        //   lastNameValidator,
        //   emailValidator,
        //   emailExistValidator,
        //   passwordRegexValidator
    ],

    async (req: Request, res: Response, next: NextFunction) => await authController.signUp(req, res, next)
)

export default authRouter;