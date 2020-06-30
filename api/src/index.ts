import App from "./app";
import ModeloController from "./controllers/modeloController";
import { Settings } from "./config/settings";

const env = new Settings(`env/${process.env.NODE_ENV || "development"}.env`);
const controllers = [new ModeloController()];
const app = new App(controllers, env);

app.listen();

export default app;
