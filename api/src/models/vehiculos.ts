import { Entity, Column, PrimaryColumn, BaseEntity } from "typeorm";

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
}
