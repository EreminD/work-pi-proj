import { CreateCultureFitInput } from './create-culture-fit.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCultureFitInput extends PartialType(CreateCultureFitInput) {
  @Field()
  name: string;
  @Field()
  createdAt: Date;
}
