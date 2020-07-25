import { Entity, Column, PrimaryColumn, BaseEntity } from "typeorm";

@Entity()
export class Segmentos extends BaseEntity {
  @PrimaryColumn({ type: "int" })
  id_segmento: number;

  @Column({ type: "varchar" })
  segmento: string;
}
