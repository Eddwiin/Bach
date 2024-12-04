import { SqlLite } from "../config/db/sql-lite.config.ts";

export function initDb() {
    const db = new SqlLite();

    db.execute(`
      CREATE TABLE IF NOT EXISTS user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT,
        lastName TEXT,
        email TEXT,
        password TEXT
      )
    `);

    db.close();
}
