import { RouterContext } from "@oak/oak/router";
import { ROUTE_PATH } from '../../config/routes/route-path.config.ts';
import { UserModel } from "../../models/user.model.ts";
import { AuthService } from '../../services/auth/auth.service.ts';
import { IAuthService } from "../../services/auth/auth.service.interface.ts";

type SignUpRouterContext = RouterContext<typeof ROUTE_PATH.AUTH.SIGNUP>;
export type UserSignUpPayload = Pick<UserModel, "firstName" | "lastName" | "email" | "password">

export class AuthController {
    // Voir l'injection de dependance plus tard
    private readonly _authService: IAuthService;

    constructor(private readonly authService: AuthService) {
        this._authService = new AuthService();
    }

    async signUp(context: SignUpRouterContext) {
        const userPayload = await context.request.body.json();

        if (!this.instanceOfUserSignUpPayload(userPayload))
            throw new Error('User payload is empty or not correct');

        this.authService.saveUser(userPayload)
        context.response.body = "SIGN UP SUCCESS"
    }


    private instanceOfUserSignUpPayload(payload: UserSignUpPayload): payload is UserSignUpPayload {
        return (
            payload &&
            typeof payload === 'object'
            && 'firstName' in payload
            && 'lastName' in payload
            && 'email' in payload
            && 'password' in payload
            && typeof payload.firstName === "string"
            && typeof payload.lastName === "string"
            && typeof payload.email === "string"
            && typeof payload.password === "string"
        )
    }

}