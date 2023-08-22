import { Pool, PoolClient } from "pg";
import { createClient } from "redis";
import consola from "consola";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const pool = new Pool();

const usr = process.env.REDIS_USER;
const pass = process.env.REDIS_PASS;
const host = process.env.REDIS_HOST;
const port = process.env.REDIS_PORT;
const redisURL = `redis://${usr}${usr ? ":" : ""}${pass}@${host}:${port}`;
const redisClient = createClient({
  url: redisURL,
});

// redis://${user}:${pass}@${host}:${port}

async function setupTables() {
  consola.info("Setting up tables in database...");
  console.log("Connecting to database...");
  let client: PoolClient | undefined;
  try {
    client = await pool.connect();
    consola.log("Creating tables...");
    const sqls = fs.readFileSync("tables.sql").toString().split(";");
    for (let i = 0; i < sqls.length; i++) {
      const sql = sqls[i].replace("\r", "").replace("\n", "");
      if (sql === "") continue;
      await client.query(sql);
    }
    consola.success("Tables setup completed.");
  } catch (ex) {
    // Exception
    consola.error("Error setup postgres:", ex);
  } finally {
    if (client) client.release();
  }
  await redisClient.connect();
}

redisClient.on("error", (err) => {
  consola.error("Redis Error: ", err);
});

redisClient.on("reconnecting", () => {
  consola.log("Reconnecting to Redis server...");
});

redisClient.on("ready", () => {
  consola.success("Connected to Redis server!");
});
setupTables();
export { pool, redisClient };
