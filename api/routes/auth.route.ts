import { Router } from "jsr:@oak/oak";
import { ROUTE_PATH } from "../config/route-path.config.ts";
import { AuthController } from "../controllers/auth/auth.controller.ts";

export function authRouterConfig(router: Router) {
    const authController = new AuthController();

    router.post(
        ROUTE_PATH.AUTH.SIGNUP,
        (context) => authController.signUp(context)
    )
}