import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateTeambuildingInput {
  @Field()
  eventName!: string;

  @Field()
  eventDate: Date;

  @Field(() => Int)
  participants: number;

  @Field()
  createdAt!: Date;
}
