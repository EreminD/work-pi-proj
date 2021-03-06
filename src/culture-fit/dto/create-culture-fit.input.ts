import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCultureFitInput {
  @Field()
  name: string;
  @Field()
  createdAt: Date;
}
