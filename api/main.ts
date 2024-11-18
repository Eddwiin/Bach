// @deno-types="npm:@types/express@4.17.15"
import "jsr:@std/dotenv/load";
import express, { json } from "npm:express@4.18.2";
import { ROUTE_PATH } from "./config/route-path.Config.ts";
import errorHandler from "./middlewares/error-handler.middleware.ts";
import authRouter from "./routes/auth.route.ts";

const PORT = Deno.env.get("PORT") || 8000;
const app = express();

app.use(json())

app.use(ROUTE_PATH.AUTH.DEFAULT, authRouter)
app.use(errorHandler)

app.listen(PORT);

