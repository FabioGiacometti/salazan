import * as express from "express";
import { Vehiculos } from "../models/vehiculos";
import { getRepository } from "typeorm";
import { Versiones } from "../models/versiones";

export class VehiculoService {
  constructor() {}

  public async getVehiculosByCod(req: express.Request, res: express.Response) {
    const cod_auto = req.params.cod_auto;

    const vehiculos = await getRepository(Vehiculos)
      .createQueryBuilder("vehiculos")
      .select([
        "vehiculos",
        "marca",
        "modelo.id_modelo",
        "modelo.modelo",
        "segmento",
        "version.id_version",
        "version.version",
        "imagenes",
      ])
      .leftJoin("vehiculos.version", "version")
      .leftJoin("vehiculos.segmento", "segmento")
      .leftJoin("vehiculos.marca", "marca")
      .leftJoin("vehiculos.modelo", "modelo")
      .leftJoin("vehiculos.imagenes", "imagenes")
      .where("vehiculos.cod_auto = :cod", { cod: cod_auto })
      .getOne();
    return res.send(vehiculos);
  }

  public async getVehiculos(req: express.Request, res: express.Response) {
    const vehiculos = await getRepository(Vehiculos)
      .createQueryBuilder("vehiculos")
      .select(["vehiculos", "marca", "modelo.id_modelo", "modelo.modelo"])
      .leftJoin("vehiculos.marca", "marca")
      .leftJoin("vehiculos.modelo", "modelo")
      .getMany();
    return res.send(vehiculos);
  }
}
