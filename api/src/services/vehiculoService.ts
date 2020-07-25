import * as express from "express";
import { Vehiculos } from "../models/vehiculos";
import { getRepository } from "typeorm";
import { Versiones } from "../models/versiones";

export class VehiculoService {
  constructor() {}

  public async getVehiculosByCod(req: express.Request, res: express.Response) {
    const cod_auto = req.params.cod_auto;

    const vehiculo = await getRepository(Vehiculos)
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

    if (vehiculo) {
      vehiculo.imagenes.forEach((element) => {
        let imageBase64 = Buffer.from(element.imagen).toString("base64");
        element.imagen = imageBase64;
      });
      return res.send(vehiculo);
    } else {
      res.send({
        message: "No hubo resultados para el codigo del auto " + cod_auto,
      });
    }
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
