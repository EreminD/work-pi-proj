import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "capabilities" })
export class Capabilities {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  capability!: string;

  @Column({ name: "created_at" })
  createdAt!: Date;
}