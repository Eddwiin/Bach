import { UserSignUpPayload } from "../../controllers/auth/auth.controller.ts";
import { UserModel } from "../../models/user.model.ts";

export interface IAuthService {
    saveUser(userPayload: UserSignUpPayload): void;
    findUserByEmail(email: string): UserModel;
}