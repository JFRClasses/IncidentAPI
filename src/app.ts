import express from "express";
import cors from "cors";
import "dotenv/config";

import { AppRoutes } from "./presentation/routes";
import { envs } from "./config/envs.plugin";
import { MongoDatabase } from "./data";

const PORT = envs.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use(AppRoutes.routes);
(async () =>
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB,
  }))();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
