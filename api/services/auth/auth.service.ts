import { UserSignUpPayload } from "../../controllers/auth/auth.controller.ts";
import { UserModel } from "../../models/user.model.ts";
import { IAuthRepository } from "../../repository/auth/auth.repository.interface.ts";
import { AuthRepository } from "../../repository/auth/auth.repository.ts";
import { IAuthService } from "./auth.service.interface.ts";
import { Injectable } from "https://nest.land/package/di";

@Injectable()
export class AuthService implements IAuthService {
    private readonly authRepository: IAuthRepository;

    constructor() {
        this.authRepository = new AuthRepository();
    }

    findUserByEmail(email: string): UserModel {
        throw new Error("Method not implemented.");
    }

    saveUser(userPayload: UserSignUpPayload): void {
        throw new Error("Method not implemented.");
    }
}