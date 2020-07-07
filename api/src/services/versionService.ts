import * as express from "express";
import { Versiones } from "../models/versiones";
import { getRepository } from "typeorm";

export class VersionService {
  constructor() {}

  public async getVersionesXmarcaXmodelo(
    req: express.Request,
    res: express.Response
  ) {
    const { idMarca, idModelo } = req.params;
    const versiones = await getRepository(Versiones).find({
      select: ["version", "id_version"],
      where: { id_marca: idMarca, id_modelo: idModelo },
    });

    return res.send(versiones);
  }
}
