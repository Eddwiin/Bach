import { UserSignUpPayload } from "../../controllers/auth/auth.controller.ts";
import { UserModel } from "../../models/user.model.ts";
import { IAuthRepository } from "./auth.repository.interface.ts";

export class AuthRepository implements IAuthRepository {
    findUserByEmail(email: string): UserModel {
        throw new Error("Method not implemented.");
    }

    saveUser(userPayload: UserSignUpPayload): boolean {
        throw new Error("Method not implemented.");
    }
}