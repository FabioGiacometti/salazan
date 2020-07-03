import * as express from "express";
import { Modelos } from "../models/modelos";
import { getRepository } from "typeorm";

class ModeloService {
  constructor() {}

  public async getAllModelos(req: express.Request, res: express.Response) {
    const modelos = await getRepository(Modelos).find({ select: ["modelo"] });
    return res.send(modelos);
  }
}

export default ModeloService;
