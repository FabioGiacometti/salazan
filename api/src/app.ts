import * as express from "express";
import { createConnection, Connection } from "typeorm";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import "reflect-metadata";
import { Settings } from "./config/settings";
import { Configuration } from "./config/key";

class App {
  public app: express.Application;
  public port: number;
  public connection: Connection; // TypeORM connection to the database
  private env: Settings;

  // The constructor receives an array with instances of the controllers for the application and an integer to designate the port number.
  constructor(controllers: any[], env: Settings) {
    this.app = express();
    this.env = env;
    this.initializeModels();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private async initializeModels() {
    const connection = await createConnection({
      type: "mssql" as "mssql",
      host: this.env.get(Configuration.DB_HOST),
      port: parseInt(this.env.get(Configuration.DB_PORT)),
      username: this.env.get(Configuration.DB_USER),
      password: this.env.get(Configuration.DB_PASSWORD),
      schema: this.env.get(Configuration.DB_SCHEMA),
      database: this.env.get(Configuration.DB_DATABASE),
      logging: true,
      synchronize: false, //NO MODIFICAR!!
      options: {
        encrypt: true,
        enableArithAbort: false,
      },
      entities: [__dirname + "/models/*.ts"],
    });
    if (connection === undefined) {
      throw new Error("Error connecting to database");
    }

    this.connection = connection; // Store the connection object in the class instance.
    console.log("Database Connect...");
  }

  // Here we can add all the global middlewares for our application. (Those that will work across every contoller)
  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(bodyParser.json({ limit: "50mb" }));
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
  }

  private initializeControllers(controllers: any[]) {
    controllers.forEach((controller) => {
      this.app.use("/api", controller.router);
    });
  }

  // Boots the application
  public listen() {
    this.app.listen(this.env.get(Configuration.APP_PORT), () => {
      console.log(
        `Server running on port ${this.env.get(Configuration.APP_PORT)}`
      );
    });
  }
}

export default App;
