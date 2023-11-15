import Path from "./src/utils/Path.js";
import path from "path";

export default {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(
        Path.dirname(import.meta.url),
        "src",
        "database",
        "database.db"
      ),
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.resolve(
        Path.dirname(import.meta.url),
        "src",
        "database",
        "knex",
        "migration"
      ),
  },
  },
};