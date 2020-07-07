import * as express from "express";
import { ModeloService } from "../services";

export class ModeloController {
  public path = "/modelos";
  public router: express.Router = express.Router();

  constructor() {
    this.initializeRoutes(new ModeloService());
  }

  public initializeRoutes(modeloService: ModeloService) {
    // ModelController middleware
    this.router.use(this.validateInput);

    // Controller endpoints
    this.router.get(this.path, modeloService.getAllModelos);
    this.router.get(this.path + "/:idMarca", modeloService.getModelosXmarca);
  }

  public validateInput(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const params = { id: req.url.split("/api")[2] };
    switch (req.method) {
      case "GET":
        break;
      case "DELETE":
        if (!params.id) {
          return res.status(400).send({ message: "Id is required" });
        }
        break;
      case "POST":
        if (Object.keys(req.body).length === 0) {
          return res
            .status(400)
            .send({ message: "Request body can't be empty" });
        }
        break;
      case "PUT":
        if (!params.id) {
          return res.status(400).send({ message: "Id is required" });
        }
        if (Object.keys(req.body).length === 0) {
          return res
            .status(400)
            .send({ message: "Request body can't be empty" });
        }
        break;
    }
    next();
  }
}
