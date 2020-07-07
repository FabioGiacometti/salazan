import * as express from "express";
import { Modelos } from "../models/modelos";
import { getRepository } from "typeorm";

export class ModeloService {
  constructor() {}

  public async getAllModelos(req: express.Request, res: express.Response) {
    const modelos = await getRepository(Modelos).find({ select: ["modelo"] });
    return res.send(modelos);
  }

  public async getModelosXmarca(req: express.Request, res: express.Response) {
    console.log(req.params.idMarca);
    const id_marca = req.params.idMarca;
    const modelosXmarca = await getRepository(Modelos).find({
      select: ["modelo"],
      where: { id_marca },
    });

    return res.send(modelosXmarca);
  }
}
