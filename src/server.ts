import dotenv from "dotenv";
import app from "./app";
import { runMigrations } from "./config/migrate";

dotenv.config();

const PORT = process.env.PORT || 3000;

async function start() {
  await runMigrations();

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

start();
