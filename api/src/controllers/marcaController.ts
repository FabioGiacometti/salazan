import * as express from "express";
import MarcaService from "../services/marcaServices";

class MarcaController {
  public path = "/marcas";
  public router: express.Router = express.Router();

  constructor() {
    this.initializeRoutes(new MarcaService());
  }

  public initializeRoutes(marcaService: MarcaService) {
    // Controller endpoints
    this.router.get(this.path, marcaService.getAllMarcas);
  }
}

export default MarcaController;
