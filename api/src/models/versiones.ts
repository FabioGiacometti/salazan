import { Entity, Column, PrimaryColumn, BaseEntity } from "typeorm";

@Entity()
export class Versiones extends BaseEntity {
  @PrimaryColumn({ type: "int" })
  id_version: number;

  @Column({ type: "int" })
  id_marca: string;

  @Column({ type: "int" })
  id_modelo: string;

  @Column({ type: "varchar" })
  version: string;
}
