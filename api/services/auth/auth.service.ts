import { UserSignUpPayload } from "../../controllers/auth/auth.controller.ts";
import { UserModel } from "../../models/user.model.ts";
import { IAuthRepository } from "../../repository/auth/auth.repository.interface.ts";
import { AuthRepository } from "../../repository/auth/auth.repository.ts";
import { IAuthService } from "./auth.service.interface.ts";
import { injectable } from "inversify";

@injectable()
export class AuthService implements IAuthService {
    private readonly authRepository: IAuthRepository;

    constructor() {
        this.authRepository = new AuthRepository();
    }
    helloAuthService(): void {
        console.log("SALUT AUTH SERVICE")
    }

    findUserByEmail(email: string): UserModel {
        throw new Error("Method not implemented.");
    }

    saveUser(userPayload: UserSignUpPayload): void {
        throw new Error("Method not implemented.");
    }
}