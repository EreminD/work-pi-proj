import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "reference" })
export class ReferenceEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "ref_name" })
  refName?: string;

  @Column()
  grade!: number;

  @Column({ name: "created_at" })
  createdAt!: Date;
}