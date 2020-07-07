import { Entity, Column, PrimaryColumn, BaseEntity } from "typeorm";

@Entity()
export class Marcas extends BaseEntity {
  @PrimaryColumn({ type: "int" })
  id_marca: number;

  @Column({ type: "varchar" })
  marca: string;
}
