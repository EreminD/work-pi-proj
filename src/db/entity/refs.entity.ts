import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "refs" })
export class Refs {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ name: "created_at" })
  createdAt!: Date;
}