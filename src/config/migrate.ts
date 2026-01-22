import fs from "fs";
import path from "path";
import { adminDb, appDb } from "./database";

export async function runMigrations(): Promise<void> {
  const filePath = path.resolve(
    process.cwd(),
    "migrations",
    "001_create_contatos_table.sql"
  );

  const sql = fs.readFileSync(filePath, "utf-8");

  const statements = sql
    .split(";")
    .map(s => s.trim())
    .filter(Boolean);

  for (const statement of statements) {
    if (statement.toUpperCase().startsWith("CREATE DATABASE")) {
      await adminDb.execute(statement);
    } else {
      await appDb.execute(statement);
    }
  }
}