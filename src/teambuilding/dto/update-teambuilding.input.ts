import { CreateTeambuildingInput } from './create-teambuilding.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTeambuildingInput extends PartialType(CreateTeambuildingInput) {
  @Field()
  eventName!: string;

  @Field()
  eventDate: Date;

  @Field(() => Int)
  participants: number;

  @Field()
  createdAt!: Date;

}
