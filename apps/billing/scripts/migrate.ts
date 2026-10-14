import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import postgres from "postgres";

const root = dirname(fileURLToPath(import.meta.url));
const schema = readFileSync(join(root, "../src/db/schema.sql"), "utf8");

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required");
}

const sql = postgres(process.env.DATABASE_URL, { prepare: false });
await sql.unsafe(schema);
await sql.end();
console.log("Schema applied.");
