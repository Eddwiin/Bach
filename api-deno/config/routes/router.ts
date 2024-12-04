import { Router } from "@oak/oak";
import { authRouterConfig } from "../../routes/auth.route.ts";

export function getAppRouter() {
    const appRouter = new Router();

    authRouterConfig(appRouter);

    return appRouter;
}