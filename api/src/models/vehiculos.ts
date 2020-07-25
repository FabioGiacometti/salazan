import {
  Entity,
  Column,
  PrimaryColumn,
  BaseEntity,
  OneToMany,
  JoinTable,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Versiones } from "./versiones";
import { Marcas } from "./marcas";
import { Modelos } from "./modelos";
import { Segmentos } from "./segmentos";
import { Imagenes } from "./imagenes";

@Entity()
export class Vehiculos extends BaseEntity {
  @PrimaryColumn({ type: "varchar" })
  cod_auto: number;

  @Column({ type: "int" })
  annio: string;

  @Column({ type: "varchar" })
  color: string;

  @Column({ type: "varchar" })
  tipo: string;

  @Column({ type: "varchar" })
  kilometros: string;

  @Column({ type: "varchar" })
  motor_version: string;

  @Column({ type: "int" })
  precio: string;

  @Column({ type: "varchar" })
  estado: string;

  @Column({ type: "varchar" })
  publicacionWeb: string;

  @Column({ type: "varchar" })
  ofertaDestacada: string;

  @Column({ type: "varchar" })
  observaciones: string;

  @Column({ type: "varchar" })
  financiacion: string;

  @Column({ type: "datetime" })
  fechaIngreso: Date;

  @OneToMany((type) => Imagenes, (imagenes) => imagenes.vehiculo)
  imagenes: Imagenes[];

  @OneToOne((type) => Versiones)
  @JoinColumn({ name: "id_version" })
  version: Versiones;

  @OneToOne((type) => Segmentos)
  @JoinColumn({ name: "id_segmento" })
  segmento: Segmentos;

  @OneToOne((type) => Marcas)
  @JoinColumn({ name: "id_marca" })
  marca: Marcas;

  @OneToOne((type) => Modelos)
  @JoinColumn({ name: "id_modelo" })
  modelo: Modelos;
}
