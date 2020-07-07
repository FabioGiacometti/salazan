import * as express from "express";
import { Vehiculos } from "../models/vehiculos";
import { getRepository } from "typeorm";

export class VehiculoService {
  constructor() {}

  public async findVehiculos(req: express.Request, res: express.Response) {
    const search = req.body;
    console.log(search);

    //const vehiculos = await getRepository(Vehiculos).find();

    ///return res.send(vehiculos);
  }
}
