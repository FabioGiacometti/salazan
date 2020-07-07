import * as express from "express";
import { Marcas } from "../models/marcas";
import { getRepository } from "typeorm";

class MarcaService {
  constructor() {}

  public async getAllMarcas(req: express.Request, res: express.Response) {
    const marcas = await getRepository(Marcas).find();
    return res.send(marcas);
  }
}

export default MarcaService;
