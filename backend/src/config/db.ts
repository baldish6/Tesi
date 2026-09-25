import { CamelCasePlugin, Kysely, PostgresDialect } from "kysely";
import { Database } from "../utils/types.js";
import { Pool } from "pg";
import "dotenv/config";

export const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      //connectionString: process.env.DATABASE_URL as string,
      database: "postgres",
      host: "localhost",
      user: "baldish",
      password: "password",
      port: 5432,
      max: 10,
    }),
  }),
  plugins: [new CamelCasePlugin()],
});
