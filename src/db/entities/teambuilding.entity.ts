import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "teambuilding" })
@ObjectType()
export class Teambuilding {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;

  @Column()
  @Field({ name: "event_name" })
  eventName!: string;

  @Column()
  @Field({ name: "event_date" })
  eventDate: Date;

  @Column()
  @Field(() => Int)
  participants: number;

  @Column({ name: "created_at" })
  @Field()
  createdAt!: Date;
}