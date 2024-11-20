import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { Application } from "jsr:@oak/oak";
import "jsr:@std/dotenv/load";
import { getAppRouter } from "./config/router.ts";

const PORT = Deno.env.get("PORT") || 8000;
const router = getAppRouter();
const app = new Application();

app.use(oakCors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
    methods: "POST, OPTIONS",
}),);

app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port: PORT })