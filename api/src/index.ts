import App from "./app";
import ModeloController from "./controllers/modeloController";
import { Settings } from "./config/settings";
import MarcaController from "./controllers/marcaController";

const env = new Settings(`env/${process.env.NODE_ENV || "development"}.env`);
const controllers = [new ModeloController(), new MarcaController()];
const app = new App(controllers, env);

app.listen();

export default app;
