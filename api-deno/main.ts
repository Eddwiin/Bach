import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { Application } from "jsr:@oak/oak";
import "jsr:@std/dotenv/load";
import { getAppRouter } from "./config/routes/router.ts";
import { initDb } from "./helpers/init-db.helper.ts";

const PORT = Deno.env.get("PORT") || 8000;
const router = getAppRouter();
const app = new Application();
initDb();

app.use(oakCors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
    methods: "POST, OPTIONS",
}),);

app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port: PORT })