import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "performance_review" })
export class PerformanceReview {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ name: "created_at" })
  createdAt!: Date;
}