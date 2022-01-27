import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "culture_fit" })
export class CultureFit {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ name: "created_at" })
  createdAt!: Date;
}