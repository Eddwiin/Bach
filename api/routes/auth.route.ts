import { Router } from "jsr:@oak/oak";
import { ROUTE_PATH } from "../config/route-path.config.ts";
import { UserModel } from "../models/user.model.ts";

// type UserSignUpPayload<T extends UserModel> = T extends Pick<
//     UserModel,
//     "firstName" | "lastName" | "email" | "password"
// > ? T : never;

type UserSignUpPayload = Pick<UserModel, "firstName" | "lastName" | "email" | "password">

function instanceOfUserSignUpPayload(payload: UserSignUpPayload): payload is UserSignUpPayload {
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


export function authRouterConfig(router: Router) {
    router.post(
        ROUTE_PATH.AUTH.SIGNUP,
        async (context) => {
            const userPayload = await context.request.body.json();

            if (!instanceOfUserSignUpPayload(userPayload)) {
                throw new Error("USER PAYLOAD IS EMPTY OR WRONG")
            }

            context.response.body = "SIGN UP SUCCESS"
        }
    )
}