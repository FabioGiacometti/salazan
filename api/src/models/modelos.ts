import { Entity, Column, PrimaryColumn, BaseEntity } from "typeorm";

@Entity()
export class Modelos extends BaseEntity {
  @PrimaryColumn({ type: "int" })
  id_modelo: number;

  @Column({ type: "int" })
  id_marca: string;

  @Column({ type: "varchar" })
  modelo: string;
}
