import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "teambuilding" })
export class TeamBuilding {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ name: "created_at" })
  createdAt!: Date;
}