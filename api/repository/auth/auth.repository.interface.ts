import { UserSignUpPayload } from "../../controllers/auth/auth.controller.ts";
import { UserModel } from "../../models/user.model.ts";

export interface IAuthRepository {
    saveUser(userPayload: UserSignUpPayload): boolean;
    findUserByEmail(email: string): UserModel;
}