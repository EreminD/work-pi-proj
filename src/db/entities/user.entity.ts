import { Field, HideField, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Column()
  @Field()
  @HideField()
  pass!: string;
}