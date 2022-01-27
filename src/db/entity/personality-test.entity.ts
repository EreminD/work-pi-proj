import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "personality_test" })
export class PersonalityTest {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ name: "created_at" })
  createdAt!: Date;
}