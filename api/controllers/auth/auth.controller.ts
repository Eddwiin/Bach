import { RouterContext } from "@oak/oak/router";
import { inject, injectable } from 'inversify';
import { TYPE_DI } from "../../config/di/types-di.ts";
import { ROUTE_PATH } from '../../config/router/route-path.config.ts';
import { UserModel } from "../../models/user.model.ts";
import type { IAuthService } from "../../services/auth/auth.service.interface.ts";

type SignUpRouterContext = RouterContext<typeof ROUTE_PATH.AUTH.SIGNUP>;
export type UserSignUpPayload = Pick<UserModel, "firstName" | "lastName" | "email" | "password">

@injectable()
export class AuthController {
    private _authService: IAuthService;
    private test: IAuthService | null = null;

    constructor(@inject(TYPE_DI.IAuthService) authService: IAuthService) {
        this._authService = authService
        if (authService) {
            this.test = authService
        }
    }

    async signUp(context: SignUpRouterContext) {
        const userPayload = await context.request.body.json();

        if (!this.instanceOfUserSignUpPayload(userPayload))
            throw new Error('User payload is empty or not correct');

        this._authService.saveUser(userPayload)
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