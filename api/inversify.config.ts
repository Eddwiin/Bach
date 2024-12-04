import { Container } from "inversify";
import { IAuthRepository } from "./repository/auth/auth.repository.interface.ts";
import { AuthRepository } from "./repository/auth/auth.repository.ts";
import { IAuthService } from "./services/auth/auth.service.interface.ts";
import { AuthService } from "./services/auth/auth.service.ts";
import { TYPE_DI } from "./config/di/types-di.ts";
import { AuthController } from "./controllers/auth/auth.controller.ts";

const ApplicationContainer = new Container();

ApplicationContainer.bind<IAuthService>(TYPE_DI.IAuthService).to(AuthService);
ApplicationContainer.bind<IAuthRepository>(TYPE_DI.IAuthRepository).to(AuthRepository);

ApplicationContainer.bind<AuthController>(AuthController).toSelf(); // Ajoutez cette ligne pour enregistrer le contrôleur

export { ApplicationContainer };
