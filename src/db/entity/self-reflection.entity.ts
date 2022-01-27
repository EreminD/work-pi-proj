import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "self_reflection" })
export class SelfReflection {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ name: "created_at" })
  createdAt!: Date;
}