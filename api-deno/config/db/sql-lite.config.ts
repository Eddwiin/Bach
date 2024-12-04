import { DB } from "https://deno.land/x/sqlite/mod.ts";

export class SqlLite {
    private readonly db = new DB("bach.db")

    public execute(query: string) {
        this.db.execute(query);
    }

    public close() {
        return this.db.close();
    }
}