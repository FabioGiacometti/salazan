import * as express from "express";
import { VersionService } from "../services";

export class VersionController {
  public path = "/versiones";
  public router: express.Router = express.Router();

  constructor() {
    this.initializeRoutes(new VersionService());
  }

  public initializeRoutes(versionService: VersionService) {
    // Controller endpoints
    this.router.get(
      this.path + "/marca/:idMarca/modelo/:idModelo",
      versionService.getVersionesXmarcaXmodelo
    );
  }
}
