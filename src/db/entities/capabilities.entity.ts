import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "capabilities" })
@ObjectType()
export class Capabilities {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;

  @Column()
  @Field()
  capability!: string;

  @Column()
  @Field()
  isActive: boolean;

  @Column({ name: "created_at" })
  @Field()
  createdAt!: Date;
}