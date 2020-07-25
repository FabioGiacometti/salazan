import {
  Entity,
  Column,
  PrimaryColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Vehiculos } from "./vehiculos";

@Entity()
export class Imagenes extends BaseEntity {
  @PrimaryColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar" })
  nombre: string;

  @Column({ type: "image" })
  imagen: string;

  @ManyToOne((type) => Vehiculos, (Vehiculos) => Vehiculos.imagenes)
  @JoinColumn({ name: "cod_auto" })
  vehiculo: Vehiculos;
}
