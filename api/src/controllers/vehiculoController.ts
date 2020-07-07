import * as express from "express";
import { VehiculoService } from "../services";

export class VehiculoController {
  public path = "/vehiculos";
  public router: express.Router = express.Router();

  constructor() {
    this.initializeRoutes(new VehiculoService());
  }

  public initializeRoutes(vehiculoService: VehiculoService) {
    // Controller endpoints
    this.router.post(this.path, vehiculoService.findVehiculos);
  }
}
