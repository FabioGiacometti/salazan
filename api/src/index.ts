import App from "./app";
import { Settings } from "./config/settings";
import {
  MarcaController,
  ModeloController,
  VersionController,
  VehiculoController,
} from "./controllers";

const env = new Settings(`env/${process.env.NODE_ENV || "development"}.env`);
const controllers = [
  new ModeloController(),
  new MarcaController(),
  new VersionController(),
  new VehiculoController(),
];
const app = new App(controllers, env);

app.listen();

export default app;
